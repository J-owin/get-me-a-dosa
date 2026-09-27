import crypto from "crypto"
import connectDb from "@/app/db/connectDb"
import Payment from "@/models/Payment"

export async function POST(req) {
    await connectDb()

    const formData = await req.formData()
    const data = Object.fromEntries(formData)

    console.log("PayU response:", data)

    const {
        status,
        txnid,
        amount,
        productinfo,
        firstname,
        email,
        key,
        hash
    } = data

    // Create reverse hash
    const hashString =
        `${process.env.PAYU_SALT}|${status}||||||${data.udf5 || ""}|${data.udf4 || ""}|${data.udf3 || ""}|${data.udf2 || ""}|${data.udf1 || ""}|${email}|${firstname}|${productinfo}|${amount}|${txnid}|${key}`

    const calculatedHash = crypto
        .createHash("sha512")
        .update(hashString)
        .digest("hex")

    if (calculatedHash !== hash) {
        return new Response("Invalid payment response", {
            status: 400
        })
    }

    if (status === "success") {
        await Payment.findOneAndUpdate(
            { oid: txnid },
            { done: true }
        )

        return new Response("Payment successful!")
    }

    return new Response("Payment failed")
}