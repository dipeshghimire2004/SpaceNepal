import React from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Link from 'next/link'

const signup = () => {
  return (
    <div className='flex flex-col items-center justify-center '>
      <div className='border my-20 border-black p-4 rounded-lg lg:h-96 lg:w-80'>

        <h1 className='text-center mb-4 font-semibold text-2xl'> Sign Up</h1>
        <form action="" className='space-y-3'>
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="username">Username</Label>
            <Input type="username" id="username" placeholder="Username"  />
          </div>  
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="email">Email</Label>
            <Input type="email" id="email" placeholder="Email" />
          </div>
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="password">Password</Label>
            <Input type="password" id="password" placeholder="Password" />
          </div>
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Button>Sign up</Button>
          </div>
          <div className="flex w-full max-w-sm items-center gap-1.5">
            <p>Do you have an account?</p>
            <Link href="/auth/login" className='text-blue-500'>Login</Link>
          </div>
        </form>
      </div>
    </div>
  )
}

export default signup