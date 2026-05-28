"use client";

import { useState } from "react";

export default function Contact() {

const [formData,setFormData]=useState({
name:"",
email:"",
message:""
});

const handleChange=(e)=>{
setFormData({
...formData,
[e.target.name]:e.target.value
});
};

const handleSubmit=async(e)=>{
e.preventDefault();

const response = await fetch("https://portfolio-krewlancer.onrender.com/contact",{

method:"POST",

headers:{
"Content-Type":"application/json"
},

body:JSON.stringify(formData)

});

const data = await response.text();

alert(data);

};

return(

<section id="contact" className="py-20 px-6">

<h2 className="text-4xl font-bold text-center mb-10">
Contact
</h2>

<form
onSubmit={handleSubmit}
className="max-w-2xl mx-auto flex flex-col gap-6"
>

<input
type="text"
name="name"
placeholder="Your Name"
onChange={handleChange}
className="p-4 rounded-xl bg-slate-900 border border-gray-700"
/>

<input
type="email"
name="email"
placeholder="Your Email"
onChange={handleChange}
className="p-4 rounded-xl bg-slate-900 border border-gray-700"
/>

<textarea
name="message"
placeholder="Your Message"
rows="5"
onChange={handleChange}
className="p-4 rounded-xl bg-slate-900 border border-gray-700"
/>

<button
type="submit"
className="bg-white text-black py-3 rounded-xl hover:scale-105 transition"
>

Send Message

</button>

</form>

</section>

)

}