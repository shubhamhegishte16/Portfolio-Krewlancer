import Image from "next/image";

export default function Projects(){

const projects = [

{
title:"ERP Management System",

desc:"Role-based ERP platform developed during an Industrial Hackathon where our team secured 2nd Runner-Up.",

points:[
"Built Admin, Manager, and Employee dashboards.",
"Implemented attendance tracking and task assignment.",
"Integrated analytics and productivity monitoring.",
"Developed a desktop-based System Tracker using Electron.js."
],

tech:["Next.js","Node.js","Express","Electron.js"],

image:"/erp.jpg",

link:"https://erpsystem9.netlify.app/login"
},

{
title:"Cafe Golden Hour Website",

desc:"Responsive business website developed for a local cafe to establish its digital presence.",

points:[
"Integrated WhatsApp click-to-chat support.",
"Embedded Google Maps location section.",
"Designed mobile-responsive and brand-focused UI.",
"Deployed live website for customer accessibility."
],

tech:["HTML","CSS","JavaScript"],

image:"/cafe.jpg",

link:"https://cafe-golden-hour.vercel.app/"
}

]

return(

<section id="projects" className="p-10">

<h2 className="text-3xl font-bold text-center mb-8">
Projects
</h2>

<div className="grid md:grid-cols-2 gap-6">

{projects.map((project,index)=>(

<div
key={index}
className="shadow p-6 rounded-xl border border-gray-700 hover:scale-105 transition duration-300"
>

<Image
src={project.image}
alt={project.title}
width={500}
height={250}
className="rounded-xl mb-4"
/>

<h3 className="font-bold text-2xl mb-3">
  {project.title}
</h3>

<p className="text-gray-300 leading-7">
  {project.desc}
</p>

<ul className="mt-4 space-y-2 text-sm text-gray-400 list-disc list-inside">
  {project.points.map((point, i) => (
    <li key={i}>{point}</li>
  ))}
</ul>

<div className="flex flex-wrap gap-2 mt-5">
  {project.tech.map((item, i) => (
    <span
      key={i}
      className="px-3 py-1 rounded-full bg-gray-800 text-sm"
    >
      {item}
    </span>
  ))}
</div>

<a
  href={project.link}
  target="_blank"
  rel="noopener noreferrer"
  className="inline-block mt-6 px-5 py-2 rounded-lg bg-white text-black font-medium hover:scale-105 transition"
>
  View Project
</a>

</div>

))}

</div>

</section>

)

}