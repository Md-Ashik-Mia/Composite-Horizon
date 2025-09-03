"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import  Button  from "@/components/seraui/button"
import { Mail, MapPin, Phone } from "lucide-react"
import { useState } from "react"
import GreenButton from "@/components/common/GreenButton"

export default function ContactSection() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    })
    if (res.ok) {
      alert("Message sent successfully!")
      setForm({ name: "", email: "", subject: "", message: "" })
    } else {
      alert("Something went wrong. Try again.")
    }
  }

  return (
    <section className="container mt-12 mx-auto mb-36">
      {/* Contact Info */}
      <div className="grid md:grid-cols-3 gap-11 mb-12">
        <Card className="bg-[#94B136]/10 w-md h-80 rounded-xl">
          <CardContent className="flex flex-col items-center p-6 text-center">
            <div className="flex justify-center items-center text-4xl leading-12 text-[#99BA14] font-medium ">
              <MapPin className="w-12 h-12 text-[#99BA14]" />
              <h3 className="">Location</h3>
            </div>
            <p className="text-4xl mt-8 leading-9 text-[#3F4919]">2972 Westheimer Rd. Santa Ana Illinois 85486</p>
          </CardContent>
        </Card>
        <Card className="bg-[#94B136]/10 w-md h-80 rounded-xl">
          <CardContent className="flex flex-col items-center p-6 text-center">
           <div className=" flex justify-center items-center text-4xl leading-12 text-[#99BA14] font-medium ">
             <Phone className="w-12 h-12 text-[#99BA14]" />
            <h3 className="">Contact</h3>
           </div>
            <p className="text-4xl mt-8 leading-9 text-[#3F4919]">(207) 555-0119</p>
          </CardContent>
        </Card>
        <Card className="bg-[#94B136]/10 w-md h-80 rounded-xl">
          <CardContent className="flex flex-col items-center p-6 text-center">
           <div className=" flex justify-center items-center text-4xl leading-12 text-[#99BA14] font-medium ">
             <Mail className="w-12 h-12 text-[#99BA14]" />
            <h3 className="">Email</h3>
           </div>
            <p className="text-4xl mt-8 leading-9 text-[#3F4919]">david@gmail.com</p>
          </CardContent>
        </Card>
      </div>

      {/* Contact Form */}
      <div className="text-center mb-6">
        <h2 className="text-6xl text-[#3F4919] font-extrabold">
          Send A <span className="text-[#99BA14]">Quest To Us</span>
        </h2>
      </div>

      <form onSubmit={handleSubmit} className="grid gap-4 max-w-3xl max-h-2xl  mx-auto">
        <div className="grid md:grid-cols-2 gap-4">
          <Input
            className="bg-[#F5F8E8] border border-[#E5E7EB] focus:ring-2 focus:ring-[#99BA14] text-[#3F4919]/50 focus:border-transparent w-96 h-16 "
            name="name"
            placeholder="Name"
            value={form.name}
            onChange={handleChange}
            required
          />
          <Input
            className="bg-[#F5F8E8] border border-[#E5E7EB] focus:ring-2 focus:ring-[#99BA14] text-[#3F4919]/50 focus:border-transparent w-96 h-16 "
            name="email"
            type="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            required
          />
        </div>
        <Input
          className="bg-[#F5F8E8] border border-[#E5E7EB] focus:ring-2 focus:ring-[#99BA14] text-[#3F4919]/50 focus:border-transparent w-full h-16 "
          name="subject"
          placeholder="Subject (Optional)"
          value={form.subject}
          onChange={handleChange}
        />
        <Textarea
          name="message"
          className="bg-[#F5F8E8] border border-[#E5E7EB] focus:ring-2 focus:ring-[#99BA14] text-[#3F4919]/50 focus:border-transparent w-full h-56"
          placeholder="Write message"
          value={form.message}
          onChange={handleChange}
          required
        />
        <Button className="h-12 w-48 bg-[#94B316] text-white text-2xl hover:text-black hover:bg-green-900 dark:bg-slate-800 dark:text-slate-100 dark:border-slate-700 dark:hover:bg-slate-700 inline-flex items-center justify-center rounded-4xl  font-medium transition-colors">
            Send
        </Button>
      </form>
    </section>
  )
}
