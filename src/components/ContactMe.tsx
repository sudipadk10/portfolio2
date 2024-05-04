"use client";
import { useRouter } from 'next/navigation'

const ContactMe = () => {
    const router=useRouter()
  return (
    <div className="mt-8 text-center md:text-left"><button onClick={()=>router.push('/contact')} className="inline-block border border-[#C778DE] py-2 px-4 text-white">Contact Me !!</button></div>
  )
}

export default ContactMe