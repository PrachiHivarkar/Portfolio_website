export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-slate-950/90 backdrop-blur border-b border-slate-800 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-cyan-400 text-xl font-bold">MyPortfolio</h1>

        <ul className="hidden md:flex gap-8 text-slate-300">
          <li><a className="hover:text-cyan-400" href="#home">Home</a></li>
          <li><a className="hover:text-cyan-400" href="#about">About</a></li>
          <li><a className="hover:text-cyan-400" href="#skills">Skills</a></li>
          <li><a className="hover:text-cyan-400" href="#projects">Projects</a></li>
          <li><a className="hover:text-cyan-400" href="#contact">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}
