"use server"

import crypto from "crypto"
import connectDb from "../db/connectDb"
import User from "@/models/User"
import Payment from "@/models/Payment"

export const initiate = async (amount, to_username, paymentform) => {

    await connectDb()

    const user = await User.findOne({
        username: to_username
    })

    if (!user) {
        throw new Error("User not found")
    }

    const txnid = "TXN" + Date.now()

    const params = {
        key: process.env.PAYU_KEY,
        txnid: txnid,
        amount: Number(amount).toFixed(2),
        productinfo: `Donation to ${to_username}`,
        firstname: paymentform.name,
        email: paymentform.email,
        surl: `${process.env.NEXT_PUBLIC_URL}/api/payment/success`,
        furl: `${process.env.NEXT_PUBLIC_URL}/api/payment/failure`
    }
    console.log({
    key: params.key,
    txnid: params.txnid,
    amount: params.amount,
    productinfo: params.productinfo,
    firstname: params.firstname,
    email: params.email
})

    const hashString =
        `${params.key}|${params.txnid}|${params.amount}|${params.productinfo}|${params.firstname}|${params.email}|||||||||||${process.env.PAYU_SALT}`

    const hash = crypto
        .createHash("sha512")
        .update(hashString)
        .digest("hex")

    params.hash = hash

    await Payment.create({
        oid: txnid,
        amount: Number(amount),
        to_user: to_username,
        name: paymentform.name,
        message: paymentform.message
    })

    return params
}

export const fetchuser = async(username)=>{
    await connectDb()
    let u = await User.findOne({username:username})
    let user = u.toObject({flattenObjectIds:true})
    return user
}
export const fetchpayments = async (username) =>{
    await connectDb()

    let p = await Payment.find({to_user:username}).sort({amount: -1}).lean()
    return p
}
