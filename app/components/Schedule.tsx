export default function Schedule() {
  const sessions = [
    {
      date: "Nov 25",
      day: "Day 1",
      activity: "Opening Ceremony",
      tag: "Ceremony",
      details: "Introduction to IBM Quantum and Qiskit",
      points: [
        "Welcome address and event overview",
        "Introduction to IBM Quantum platform",
        "Getting started with Qiskit",
        "Team formation and networking",
      ],
    },
    {
      date: "Nov 26",
      day: "Day 2",
      activity: "Workshop 1: Quantum Basics",
      tag: "Workshop",
      details: "Quantum circuit and algorithm basics",
      points: [
        "Qubits, superposition and entanglement",
        "Building quantum circuits in Qiskit",
        "Introduction to foundational quantum algorithms",
        "Hands-on coding exercises",
      ],
    },
    {
      date: "Nov 27",
      day: "Day 3",
      activity: "Workshop 2: Quantum Simulation",
      tag: "Workshop",
      details: "Noise models and real backend introduction",
      points: [
        "Understanding decoherence and noise",
        "Building and applying noise models",
        "Qiskit Aer simulator walkthrough",
        "Submitting jobs to a real IBM Quantum backend",
      ],
    },
    {
      date: "Nov 28",
      day: "Day 4",
      activity: "Workshop 3: Error Mitigation",
      tag: "Workshop",
      details: "Error mitigation techniques introduction",
      points: [
        "Zero-noise extrapolation",
        "Probabilistic error cancellation",
        "Measurement error mitigation",
        "Applying mitigation in Qiskit Runtime",
      ],
    },
    {
      date: "Nov 29",
      day: "Day 5",
      activity: "Workshop 4: Quantum Advantage",
      tag: "Workshop",
      details: "QAOA and VQE intro with real time examples",
      points: [
        "Variational Quantum Eigensolver (VQE)",
        "Quantum Approximate Optimization Algorithm (QAOA)",
        "Real time execution on IBM Quantum hardware",
        "Hybrid quantum classical problem solving",
      ],
    },
    {
      date: "Nov 30",
      day: "Day 6",
      activity: "Hackathon Workday",
      tag: "Hackathon",
      details: "Team development, feedback and checkpoints",
      points: [
        "Dedicated team build time",
        "Mentor checkpoint sessions",
        "Technical Q&A with IBM Quantum experts",
        "Project feedback and iteration",
      ],
    },
    {
      date: "Dec 1",
      day: "Day 7",
      activity: "Hackathon Presentation",
      tag: "Hackathon",
      details: "Final project presentation and judging",
      points: [
        "Team project presentations",
        "Live demo on IBM Quantum backend",
        "Judge Q&A round",
        "Scoring on innovation, impact and implementation",
      ],
    },
    {
      date: "Dec 2",
      day: "Day 8",
      activity: "Closing Ceremony",
      tag: "Ceremony",
      details: "Awards, reflections and next steps",
      points: [
        "Winner announcements and awards",
        "Community reflections and highlights",
        "IBM Quantum learning pathways",
        "Closing remarks and networking",
      ],
    },
  ];

  const tagColor: Record<string, string> = {
    Ceremony: "bg-indigo-900 text-indigo-300",
    Workshop: "bg-purple-900 text-purple-300",
    Hackathon: "bg-cyan-900 text-cyan-300",
  };

  return (
    <section id="schedule" className="px-6 py-16 max-w-4xl mx-auto">
      <div className="mb-10">
        <p className="text-xs font-semibold tracking-widest uppercase text-indigo-400 mb-2">Offline Event</p>
        <h2 className="text-3xl font-bold text-white mb-3">Day by Day Itinerary</h2>
        <p className="text-gray-400 text-sm max-w-lg">
          Eight days of quantum learning, hands-on workshops and collaborative hacking from Nov 25 to Dec 2, 2026 in Pokhara, Nepal.
        </p>
      </div>

      <div className="space-y-3">
        {sessions.map(({ date, day, activity, tag, details, points }, i) => (
          <details key={i} className="group bg-gray-800 border border-gray-700 rounded-lg overflow-hidden">
            <summary className="list-none cursor-pointer flex items-center gap-4 px-5 py-4 hover:bg-gray-750">
              <div className="flex-shrink-0 text-center w-14">
                <p className="text-indigo-400 text-xs font-bold uppercase tracking-wide">{day}</p>
                <p className="text-gray-400 text-xs mt-0.5">{date}</p>
              </div>
              <div className="w-px h-8 bg-gray-700 flex-shrink-0" />
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-0.5">
                  <span className={`text-xs font-semibold px-2 py-0.5 rounded ${tagColor[tag]}`}>{tag}</span>
                </div>
                <p className="text-white font-semibold text-sm truncate">{activity}</p>
                <p className="text-gray-400 text-xs mt-0.5 truncate">{details}</p>
              </div>
              <svg
                className="flex-shrink-0 w-4 h-4 text-gray-400 transition-transform duration-200 group-open:rotate-180"
                fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </summary>

            <div className="px-5 pb-5 pt-3 border-t border-gray-700">
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-1">
                {points.map((p, j) => (
                  <li key={j} className="flex items-start gap-2 text-sm text-gray-300">
                    <span className="mt-1 w-1.5 h-1.5 rounded-full bg-indigo-400 flex-shrink-0" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          </details>
        ))}
      </div>

      <p className="text-xs text-gray-600 mt-8 text-center">
        Schedule may be subject to minor changes. All times in Nepal Standard Time (NPT).
      </p>
    </section>
  );
}
