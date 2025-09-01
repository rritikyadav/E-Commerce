"use client"

import Link from "next/link"
import { useState } from "react"
import { useRouter } from "next/navigation"
import axios from "axios"

export default function SignUp() {

    const router = useRouter()

    const [FormData, setFormData] = useState({
        username: "",
        password: "",
    })

    const handleChange = (e) => {
        setFormData({ ...FormData, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        if(FormData.username === "" || FormData.password === "") {
            alert("Enter Credentials")
            return
        }
        try{

            const sign_data = await axios.post('https://fakestoreapi.com/users',FormData)
            console.log(sign_data)
            router.push("/login")
        }catch(err){
            alert("sign up failed")
        }
    }

    return (
        <div className="w-[55%] h-[70vh] flex items-center justify-center absolute left-1/2 top-1/2 transform -translate-1/2">
            <div className="bg-red-900 h-full w-[40%] text-white">
                <h1 className="m-5 text-3xl"><b>New Here ! </b></h1>
                <p className="m-5">Sign Up With Your Mobile Number or Email And Get Started .</p>
            </div>
            <div className="bg-white h-full w-[60%] flex flex-col items-center justify-between p-6 box-border">
                <form className="flex flex-col gap-8 w-full mt-8">
                    <input onChange={handleChange} className="w-full p-2  outline-0 border-black border-b-1 focus:border-blue-700" type="text" name="username" value={FormData.username} placeholder="Enter Email/Mobile Number" />
                    <input onChange={handleChange} className="w-full p-2 mb-3 outline-0 border-black border-b-1 focus:border-blue-700" type="text" name="password" value={FormData.password} placeholder=" Set Your Password" />
                    <p className="text-[0.8rem] mb-[-3vh]">By continuing, you agree to Our Terms of Use and Privacy Policy.</p>
                    <button onClick={handleSubmit} className="bg-red-900 text-white text-xl py-2 cursor-pointer">Continue</button>
                </form>
                <Link href="/login"><p className="text-blue-600">Existing User ? Log In</p></Link>
            </div>

        </div>
    )
}