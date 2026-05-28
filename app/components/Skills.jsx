export default function Skills() {

const skills=[
"C",
"JavaScript",
"HTML",
"CSS",
"Python",
"Next.js"
]

return(

<section className="py-20 px-6">

<h2 className="text-4xl font-bold text-center mb-10">
Skills
</h2>

<div className="flex flex-wrap justify-center gap-6 max-w-4xl mx-auto">

{skills.map((skill,index)=>(

<div
key={index}
className="bg-slate-900 px-8 py-5 rounded-2xl border border-gray-800 hover:scale-110 hover:border-white transition duration-300 shadow-lg"
>

<p className="text-lg">
{skill}
</p>

</div>

))}

</div>

</section>

)

}