"use client"
import {useRouter} from 'next/navigation'

export default function SignUp() {
     const Router = useRouter();
     const navigation = (name)=>{
          Router.push(name)
     }
     return (
          <div className='SignUp-page'>
               <h1>This is SignUp page🚦</h1>
               <p onClick={()=>navigation("/")}>Go to Home Page 🏠</p>
          </div>
          )
}