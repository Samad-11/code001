"use client"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import Link from "next/link";
import { useRouter } from "next/navigation";
// import axios from "axios";
import { useEffect, useState } from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
export default function login() {
    const router = useRouter();
    const [user, setUser] = useState({
        email: "",
        password: "",
    });
    const [isLoading, setloading] = useState(false)
    const [btnDisabled, setBtnDisabled] = useState(true)
    
    const handleLogin = async () => {
        try {
            setloading(true);
           
        } catch (error) {
            console.log("Erorr on the client side: " + error);
        }finally{
            setloading(false);
            router.push('/profile')
        }
    }
    useEffect(() => {
        if(user.email.length > 0 && user.password.length>0) {
            setBtnDisabled(false);
        }
        else{
            setBtnDisabled(true);
        }
    }, [user])
    return (
        <main className="flex justify-center items-center h-screen w-screen">

            <div className="bg-black text-white rounded-xl p-4 ">

                <div className="m-2">
                    <h1 className="text-4xl">
                        Login into the account
                    </h1>
                    <h3 className="text-xl">Enter the following information</h3>
                </div>
                <form className=" ">
                    <Label htmlFor="email">Email</Label>
                    <Input type="email" id="email" placeholder="Email" value={user.email} onChange={(e) => {
                        setUser({ ...user, email: e.target.value })
                    }} autoComplete="true"/>
                    <Label htmlFor="password">Password</Label>
                    <Input type="password" id="password" placeholder="Password" value={user.password} onChange={(e) => {
                        setUser({ ...user, password: e.target.value })
                    }} />
                    <div className="">
                        <Link href={"/signup"} >--Register for the account--</Link>
                    </div>
                    <div className="flex justify-center">
                        <Button type="submit" variant={"f=default"} className="m-2 " onClick={handleLogin}
                       disabled={btnDisabled}
                        >{isLoading?<AiOutlineLoading3Quarters className="animate:spin"/>:<></>}
                            Login</Button>
                    </div>
                </form>
            </div>
        </main>
    );
}
