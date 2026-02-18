import { useState } from "react";

export default function Contact() {
  const [msg, setMsg] = useState("");

  return (
    <section id="contact" className="bg-slate-950 py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-10 text-center">Contact Me</h2>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            setMsg("Message sent successfully!");
          }}
          className="flex flex-col gap-4"
        >
          <input
            className="p-3 rounded bg-slate-800 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
            placeholder="Name"
            required
          />
          <input
            className="p-3 rounded bg-slate-800 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
            placeholder="Email"
            required
          />
          <textarea
            className="p-3 rounded bg-slate-800 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
            placeholder="Message"
            rows="5"
            required
          />

          <button className="bg-cyan-400 text-slate-900 py-3 rounded-lg font-semibold hover:bg-cyan-300 transition">
            Send Message
          </button>
        </form>

        {msg && <p className="text-green-400 mt-4 text-center">{msg}</p>}
      </div>
    </section>
  );
}
