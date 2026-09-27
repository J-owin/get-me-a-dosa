import PaymentPage from "../components/paymentPage";
const Username = async ({ params }) => {

    const { username } = await params

    return (
        <PaymentPage username={username} />
    )
}

export default Username