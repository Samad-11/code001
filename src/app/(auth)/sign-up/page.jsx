"use client"
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
// import axios from "axios";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useEffect, useState } from "react";
// import toast from "react-hot-toast";
export default function signup() {
  const router = useRouter();
  const [user, setUser] = useState({
    email: "",
    password: "",
    username: "",
  });
  const [isLoading, setloading] = useState(false)
  const [btnDisabled, setBtnDisabled] = useState(true)
  // async bcz its talking to database
  const handleSignup = async () => {
    try {
      setloading(true);
      
    } catch (error) {
      console.log("The signup failed",error)
      toast.error(error.message);
    } finally {
      setloading(false);
      router.push('/login');
    }
  }
 
  useEffect(() => {
    if (user.email.length > 0 && user.password.length > 0 && user.username.length > 0) {
      setBtnDisabled(false);
    }
    else {
      setBtnDisabled(true);
    }
  }, [user]);
  return (
    <main className="flex items-center justify-center h-screen w-screen">

      <div className="bg-black rounded-xl p-4 text-white">
        <div className="">
          <h1 className="text-4xl">
            Create  new account
          </h1>
          <h3 className="text-xl">Enter the following information</h3>
        </div>
        <form className="">
          <Label htmlFor="email">Email</Label>
          <Input type="email" id="email" placeholder="Email" value={user.email} onChange={(e) => {
            setUser({ ...user, email: e.target.value })
          }} />
          <Label htmlFor="username">User Name</Label>
          <Input type="text" id="username" placeholder="UserName" value={user.username} onChange={(e) => {
            setUser({ ...user, username: e.target.value })
          }} />
          <Label htmlFor="email">Password</Label>
          <Input type="password" id="password" placeholder="Password" value={user.password} onChange={(e) => {
            setUser({ ...user, password: e.target.value })
          }} />
          <div className="">
            <Link href={"/login"} >--Already have an account--</Link>
          </div>
          <div className="flex justify-center">
            <Button type="submit" variant={"default"} className="m-2" onClick={handleSignup} disabled={btnDisabled}>
              {isLoading ? <p className="text-white"><span className="animate-spin"><AiOutlineLoading3Quarters /></span>Signup</p>
                : <p className="text-white">Signup</p>}
            </Button>
          </div>
        </form>
      </div>
    </main>
  );
}
