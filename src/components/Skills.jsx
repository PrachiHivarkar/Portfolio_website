export default function Skills() {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "C++","Python",
    "React",
    "Express.js",
    "MySQL",
    "MongoDB",
    "Object oriented Programming",
    "Data Structure and algorithms",
    "Data Science",
    "Machine learning",
    "Tailwind CSS",
    "Git & GitHub"
  ];

  return (
    <section id="skills" className="bg-slate-950 py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-10 text-center">Skills</h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-6">
          {skills.map(skill => (
            <div
              key={skill}
              className="bg-slate-800 py-4 rounded-lg text-center text-slate-200
                         hover:bg-cyan-400 hover:text-slate-900 transition"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
