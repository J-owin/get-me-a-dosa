"use client"

import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import { useEffect } from "react"

const Profile = () => {

    const { data: session, status } = useSession()
    const router = useRouter()

    useEffect(() => {
        if (status === "unauthenticated") {
            router.push("/login")
        }
    }, [status, router])

    return (
        <div className="flex flex-col items-center py-6 gap-4 text-white">

            <div className="font-bold text-3xl">
                Welcome to your Profile
            </div>

            <div className="w-[500px] flex flex-col gap-3">

                <div className="flex flex-col gap-1">
                    <div className="text-sm font-bold">
                        Name
                    </div>

                    <input
                        type="text"
                        className="w-full p-3 rounded-lg bg-slate-800"
                        placeholder="Enter Name"
                    />
                </div>

                <div className="flex flex-col gap-1">
                    <div className="text-sm font-bold">
                        Email
                    </div>

                    <input
                        type="text"
                        className="w-full p-3 rounded-lg bg-slate-800"
                        placeholder="Enter Email"
                    />
                </div>

                <div className="flex flex-col gap-1">
                    <div className="text-sm font-bold">
                        Username
                    </div>

                    <input
                        type="text"
                        className="w-full p-3 rounded-lg bg-slate-800"
                        placeholder="Enter Username"
                    />
                </div>

                <div className="flex flex-col gap-1">
                    <div className="text-sm font-bold">
                        Profile Picture
                    </div>

                    <input
                        type="text"
                        className="w-full p-3 rounded-lg bg-slate-800"
                        placeholder="Enter Profile Picture"
                    />
                </div>

                <div className="flex flex-col gap-1">
                    <div className="text-sm font-bold">
                        Cover Picture
                    </div>

                    <input
                        type="text"
                        className="w-full p-3 rounded-lg bg-slate-800"
                        placeholder="Enter Cover Picture"
                    />
                </div>

                <div className="flex flex-col gap-1">
                    <div className="text-sm font-bold">
                        Razorpay Credentials
                    </div>

                    <input
                        type="text"
                        className="w-full p-3 rounded-lg bg-slate-800"
                        placeholder="Enter Razorpay Credentials"
                    />
                </div>

                <button className="w-full mt-2 p-2 rounded-lg bg-blue-500 hover:bg-blue-600">
                    Save
                </button>

            </div>
        </div>
    )
}

export default Profile