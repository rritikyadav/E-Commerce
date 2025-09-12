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
            alert("Signed Up Successfully")
            router.push("/login")
        }catch(err){
            alert("sign up failed")
        }
    }

    return (
        <div className="w-[98%] h-[70vh] flex flex-col absolute left-1/2 top-1/2 transform -translate-1/2
                        md:w-[55%] md:flex-row">

            <div className="bg-red-900 h-auto w-full text-white p-5
                            md:w-[40%] md:h-full md:p-0">
                <h1 className="m-2 text-xl md:m-5 md:text-3xl"><b>New Here ! </b></h1>
                <p className="m-2 text-md md:m-5 md:text-regular">Sign Up With Your Mobile Number or Email And Get Started .</p>
            </div>

            <div className="bg-white h-auto w-full flex flex-col gap-20 items-center justify-between p-2 box-border
                            md:w-[60%] md:h-full md:p-6">
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