export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen w-full flex items-center justify-center text-center bg-gradient-to-br from-slate-900 to-slate-800"
    >
      <div className="max-w-4xl px-6">
        <h1 className="text-4xl md:text-6xl font-bold">
          Hi, I'm <span className="text-cyan-400">Prachi Hivarkar</span>
        </h1>

        <p className="mt-4 text-slate-400">
          Frontend Developer| Data Scientist | Cloud and Devops Enthusiastic
                

        </p>

        <a
          href="#projects"
          className="inline-block mt-8 bg-cyan-400 text-black px-8 py-3 rounded-lg font-semibold"
        >
          View Projects
        </a>
      </div>
    </section>
  );
}