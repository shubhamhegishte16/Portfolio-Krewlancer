import Image from "next/image";

export default function Projects(){

const projects=[

{
title:"ERP Management System",
desc:"A management system designed to organize and manage business operations.",
tech:["Next.js","Node.js","Express"],
image:"/erp.jpg",
link:"https://erpsystem9.netlify.app/login"
},

{
title:"Cafe Golden Hour Website",
desc:"Modern cafe website with menu sections and responsive design.",
tech:["Html","CSS","JavaScript"],
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

<h3 className="font-bold text-xl">
{project.title}
</h3>

<p className="mt-3 text-gray-300">
{project.desc}
</p>

<div className="flex flex-wrap gap-2 mt-4">

{project.tech.map((item,i)=>(

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
className="inline-block mt-5 px-4 py-2 rounded-lg bg-white text-black"
>

View Project

</a>

</div>

))}

</div>

</section>

)

}