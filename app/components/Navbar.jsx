export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-6 shadow">
      <h1 className="text-2xl font-bold">
        Shubham
      </h1>

     <ul className="flex gap-2 md:gap-6 text-xs md:text-base">

<li>
<a href="/" className="text-gray-400 hover:text-white">
Home
</a>
</li>

<li>
<a href="#about" className="text-gray-400 hover:text-white">
About
</a>
</li>

<li>
<a href="#projects" className="text-gray-400 hover:text-white">
Projects
</a>
</li>

<li>
<a href="#contact" className="text-gray-400 hover:text-white">
Contact
</a>
</li>

</ul>
    </nav>
  )
}