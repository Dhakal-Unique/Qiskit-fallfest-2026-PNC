export default function Schedule() {
  const sessions = [
    {
      date: "Nov 25 — Kick-off Day",
      details: " Kick-off Day\n Physical: 10:30 AM - 12:30 PM\n Online: 7:00 PM - 8:00 PM\nTopics: Intro to Quantum Computing, Qiskit Setup, Hello Quantum World",
    },
    {
      date: "Nov 26 — Workshop",
      details: " Workshop\n Physical: 10:30 AM - 12:30 PM\n Online: 7:00 PM - 8:00 PM\nActivities: Quantum Workshop",
    },
    {
      date: "Nov 27 — Workshop + Hackathon Title Reveal",
      details: " Workshop + Hackathon Title Reveal\n Physical: 10:30 AM - 12:30 PM\n Online: 7:00 PM - 8:00 PM\nActivities: Quantum Workshop, Hackathon Theme Reveal",
    },
    {
      date: "Nov 28 — Workshop + Hackathon Title Reveal",
      details: " Workshop + Hackathon Title Reveal\n Online: 7:00 PM - 8:00 PM\nActivities: Quantum Workshop, Hackathon Theme Reveal (online participants only)",
    },
    {
      date: "Nov 29 — Hackathon Work & Submission Deadline",
      details: " Hackathon Day\nActivities: Work on Hackathon Projects\nSubmission Deadline: 8:00 PM NPT (Sharp)",
    },
    {
      date: "Nov 30 — Selected Presentations",
      details: " Selected Team Presentations\n Physical: 10:30 AM - 12:30 PM\n Online: 7:00 PM - 8:00 PM\nActivities: Shortlisted teams present their projects to judges and audience",
    },
    {
      date: "Dec 1 — Closing Ceremony",
      details: " Closing Ceremony\n Physical: 10:30 AM - 12:30 PM\n Online: 7:00 PM - 8:00 PM\nActivities: Winner Announcements, Awards, Wrap-up",
    },
  ];

  return (
    <section id="schedule" className="px-6 py-16 max-w-4xl mx-auto bg-gray-900">
      <h3 className="text-2xl font-bold mb-6 text-indigo-300">Schedule</h3>
      <div className="space-y-4">
        {sessions.map(({ date, details }, i) => (
          <details key={i} className="bg-gray-800 p-4 rounded group">
            <summary className="cursor-pointer font-semibold text-white flex justify-between items-center list-none">
              <span>{date}</span>
              <span className="text-indigo-300 text-xs transition-transform duration-200 group-open:rotate-180">▼</span>
            </summary>
            <p className="mt-3 text-gray-300 whitespace-pre-line border-t border-gray-700 pt-3">{details}</p>
          </details>
        ))}
      </div>
    </section>
  );
}

