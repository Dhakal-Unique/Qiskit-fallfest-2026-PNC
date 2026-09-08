export default function WhyJoin() {
  const reasons = [
    { icon: "🌍", title: "Global Event", desc: "Be part of a globally recognized quantum computing event at Prithvi Narayan Campus, Pokhara." },
    { icon: "🔰", title: "Beginner Friendly", desc: "No prior experience required. Learn quantum computing from absolute scratch." },
    { icon: "🏢", title: "Two Modes", desc: "Offline Track (50 seats, in-person) or Online Track (100 seats, live virtual sessions)." },
    { icon: "⚛️", title: "Hands-on Learning", desc: "Live workshops, real quantum circuits using Qiskit, and guided coding sessions." },
    { icon: "🤝", title: "Mentorship", desc: "Collaborate with peers and mentors during the intensive hands-on hackathon." },
    { icon: "📜", title: "IBM Certificate", desc: "Earn an official IBM Quantum certificate upon full participation and completion." },
    { icon: "🏆", title: "Win Prizes", desc: "Compete for prizes and recognition — one winner selected from each track." },
  ];

  return (
    <section id="whyjoin" className="px-6 py-16 max-w-4xl mx-auto bg-gray-800">
      <h3 className="text-2xl font-bold mb-8 text-indigo-300">Why Should You Join?</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {reasons.map(({ icon, title, desc }) => (
          <div key={title} className="bg-gray-700 rounded-lg p-4 border border-gray-600 flex gap-4 items-start">
            <span className="text-2xl flex-shrink-0">{icon}</span>
            <div>
              <p className="text-white font-semibold mb-1">{title}</p>
              <p className="text-gray-300 text-sm">{desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
