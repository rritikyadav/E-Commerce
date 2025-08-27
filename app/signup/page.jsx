import Link from "next/link"

export default function SignUp () {
    return (
      <div className="w-[55%] h-[70vh] flex items-center justify-center absolute left-1/2 top-1/2 transform -translate-1/2">
          <div className="bg-red-900 h-full w-[40%] text-white">
              <h1 className="m-5 text-3xl"><b>New Here ! </b></h1>
              <p className="m-5">Sign Up With Your Mobile Number or Email And Get Started .</p>
          </div>
          <div className="bg-white h-full w-[60%] flex flex-col items-center justify-between p-6 box-border">
              <div className="flex flex-col gap-8 w-full mt-8">
              <input className="w-full p-2  outline-0 border-black border-b-1 focus:border-blue-700" type="text" placeholder="Enter Email/Mobile Number"/>
              <input className="w-full p-2 mb-3 outline-0 border-black border-b-1 focus:border-blue-700" type="password" placeholder=" Set Your Password"/>
              <p className="text-[0.8rem] mb-[-3vh]">By continuing, you agree to Our Terms of Use and Privacy Policy.</p>
              <button className="bg-red-900 text-white text-xl py-2">Continue</button>
              </div>
              <Link href="/login"><p className="text-blue-600">Existing User ? Log In</p></Link>
          </div>
        
      </div>
    )
  }