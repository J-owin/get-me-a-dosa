"use client"

import React, { useEffect, useState } from "react"
import { fetchpayments, initiate } from "../actions/useractions"
import { fetchuser } from "../actions/useractions"
const PaymentPage = ({ username }) => {

    const [paymentform, setPaymentform] = useState({
        name: "",
        email: "",
        message: ""
    })
    const [currentUser, setcurrentUser] = useState({})
    const [amount, setAmount] = useState("")
    const [payments, setPayments] = useState()

    useEffect(() => {
        getData()
    }, [])

    const handleChange = (e) => {
        setPaymentform({
            ...paymentform,
            [e.target.name]: e.target.value
        })
    }
    const getData = async () => {
        let u = await fetchuser(username)
        setcurrentUser(u)
        let dbpayments = await fetchpayments(username)
        setPayments(dbpayments)
    }

    const handlePay = async () => {

        const payment = await initiate(
            amount,
            username,
            paymentform
        )

        const form = document.createElement("form")

        form.method = "POST"
        form.action = "https://test.payu.in/_payment"

        Object.entries(payment).forEach(([key, value]) => {
            const input = document.createElement("input")

            input.type = "hidden"
            input.name = key
            input.value = String(value ?? "")

            form.appendChild(input)
        })

        document.body.appendChild(form)

        form.submit()
    }

    return (
        <>


            <div className="cover w-full relative">
                <img className='object-cover w-full '
                    src='https://c10.patreonusercontent.com/4/patreon-media/p/campaign/4842667/452146dcfeb04f38853368f554aadde1/eyJ3IjoxOTIwLCJ3ZSI6MX0%3D/20.gif?token-hash=YeWX-axIr5oOAwubKY1_utF3TH39LdWV6XGo8lwe9f0%3D&token-time=1791072000'
                    alt=""
                />
                <div className='border border-white border-2 rounded-full absolute -bottom-20 right-[46%]'>
                    <img className='rounded-full' width={150} height={150} src="https://c10.patreonusercontent.com/4/patreon-media/p/campaign/4842667/aa52624d1cef47ba91c357da4a7859cf/eyJoIjozNjAsInciOjM2MH0%3D/4.gif?token-hash=XtJNN0idqQEJGfGx8O4-SKyJDWSt43pVg50e32bOOUc%3D&token-time=1791676800" alt="" />
                </div>
            </div>
            <div className="info flex justify-center gap-2 flex-col items-center my-24 mb-32">
                <div className='font-bold text-lg'>

                    @{username}
                </div>
                <div className='text-slate-400'>
                    Creating Animated art for VTT's
                </div>
                <div className='text-slate-400'>
                    9,719 members . 82 posts . $15,450/release
                </div>
                <div className="payment  flex gap-3 w-[80%] mt-11">
                    <div className="supporters w-1/2 bg-slate-900 p-10 rounded-lg text-white">
                        <h2 className='text-2xl text- my-5 font-bold'>Supporters</h2>
                        {/* show list of all supporters as leaderboard */}
                        <ul className="mx-5 text-lg">
                            {payments.map((p, i) => {
                                return (
                                    <li
                                        key={i}
                                        className="my-4 flex gap-2 items-center"
                                    >
                                        <img
                                            width={25}
                                            src="/avatar.gif"
                                            alt="user avatar"
                                        />

                                        <span>
                                            {p.name} donated{" "}
                                            <span className="font-bold">
                                                ₹{p.amount}
                                            </span>{" "}
                                            with a message "{p.message}"
                                        </span>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                    <div className="makePayment w-1/2 bg-slate-900 p-10 rounded-lg text-white">
                        <h2 className='text-2xl text- my-5 font-bold'>Make a payment</h2>
                        <div className="flex gap-2 flex-col">
                            {/* Input for name and message */}
                            <input
                                type="text"
                                name="name"
                                value={paymentform.name}
                                onChange={handleChange}
                                className="w-full p-3 rounded-lg bg-slate-800"
                                placeholder="Enter Name"
                            />
                            <input
                                type="email"
                                name="email"
                                value={paymentform.email}
                                onChange={handleChange}
                                placeholder="Enter Email"
                                className="w-full p-3 rounded-lg bg-slate-800"
                            />
                            <input
                                type="text"
                                name="message"
                                value={paymentform.message}
                                onChange={handleChange}
                                className="w-full p-3 rounded-lg bg-slate-800"
                                placeholder="Enter Message"
                            />

                            <input
                                type="number"
                                value={amount}
                                onChange={(e) => setAmount(e.target.value)}
                                className="w-full p-3 rounded-lg bg-slate-800"
                                placeholder="Enter Amount"
                            />

                            <button type="button" onClick={handlePay} className=" text-white cursor-pointer rounded-lg bg-gradient-to-br from-purple-900 to-blue-900 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-base text-sm px-4 py-2.5 text-center leading-5">Pay</button>


                        </div>
                        {/* or choose from these amounts */}
                        <div className="flex gap-2 mt-5">
                            <button
                                type="button"
                                onClick={() => setAmount(20)}
                                className="p-3 rounded-lg bg-slate-800"
                            >
                                Pay ₹20
                            </button>

                            <button
                                type="button"
                                onClick={() => setAmount(30)}
                                className="p-3 rounded-lg bg-slate-800"
                            >
                                Pay ₹30
                            </button>

                            <button
                                type="button"
                                onClick={() => setAmount(40)}
                                className="p-3 rounded-lg bg-slate-800"
                            >
                                Pay ₹40
                            </button>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}

export default PaymentPage