"use client"

import Link from "next/link"
import { useState } from "react"
import axios from "axios"
import { useRouter } from "next/navigation"

export default function LogIn() {

  const router = useRouter()

  const [Form, setForm] = useState({
    username: "johnd",
    password: "m38rmF$"
  })

  const handleInput = (e) => {
    setForm({ ...Form, [e.target.name]: e.target.value })
  }

  const handleLogin = async () => {
    if (Form.username === "" || Form.password === "") {
      alert("Enter your Credentials")
      return
    }
    try {
      const res = await axios.post("https://fakestoreapi.com/auth/login", Form)
      console.log(res)
      localStorage.setItem("token", res.data.token)
      window.dispatchEvent(new Event("storage"))
      alert("Logged In Succesfully")
      router.push('/')
    } catch (err) {
      alert(err.message)
    }
  }

  return (
    <div className="w-[98%] h-[70vh] flex flex-col absolute left-1/2 top-1/2 transform -translate-1/2
                    md:flex-row md:w-[55%]">

      <div className="bg-red-900 h-auto md:h-full w-full md:w-[40%] text-white p-5 md:p-0">
        <h1 className="m-2 text-xl md:m-5 md:text-3xl"><b>Log In</b></h1>
        <p className="m-2 text-md md:m-5">Get Access To Your Account With Just Simple Steps</p>
      </div>

      <div className="bg-white h-auto w-[100%] flex flex-col gap-20 items-center justify-between p-2 box-border
                        md:w-[60%] md:h-full md:p-6">
        <div className="flex flex-col gap-8 w-full mt-8">
          <input onChange={handleInput} className="w-full p-2  outline-0 border-black border-b-1 focus:border-blue-700" type="text" name="username" value={Form.username} placeholder="Enter Email/Mobile Number" />
          <input onChange={handleInput} className="w-full p-2 mb-3 outline-0 border-black border-b-1 focus:border-blue-700" type="text" name="password" value={Form.password} placeholder="Password" />
          <p className="text-[0.8rem] mb-[-3vh]">By continuing, you agree to Our Terms of Use and Privacy Policy.</p>
          <button onClick={handleLogin} className="bg-red-900 text-white text-xl py-2 cursor-pointer">Request Access</button>
        </div>
        <Link href="/signup"><p className="text-blue-600">New Here ? Create A Account</p></Link>
      </div>

    </div>
  )
}
