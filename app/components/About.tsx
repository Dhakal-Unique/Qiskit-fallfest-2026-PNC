export default function About() {
  return (
    <section id="event" className="px-6 py-16 max-w-4xl mx-auto bg-gray-900">
      <h3 className="text-2xl font-bold mb-6 text-indigo-300">About the Event</h3>

      <p className="text-gray-300 mb-4">
        <strong className="text-white">Qiskit Fall Fest PNC 2026</strong> is a beginner-friendly hybrid event
        hosted at <strong className="text-white">Prithvi Narayan Campus</strong>, Pokhara. No prior experience
        in quantum computing is required.
      </p>

      <p className="text-gray-300 mb-6">
        This event is part of the global <strong className="text-white">Qiskit Fall Fest</strong> initiative,
        supported by <strong className="text-white">IBM Quantum</strong> and the worldwide Qiskit community.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div className="bg-gray-800 rounded-lg p-4 border border-gray-700">
          <p className="text-indigo-300 font-semibold mb-1">📅 Event Dates</p>
          <p className="text-white">November 25 – December 1, 2026</p>
        </div>
        <div className="bg-gray-800 rounded-lg p-4 border border-gray-700">
          <p className="text-indigo-300 font-semibold mb-1">🎓 Certificate</p>
          <p className="text-white">Official IBM Quantum certificate for all who complete the program</p>
        </div>
        <div className="bg-gray-800 rounded-lg p-4 border border-gray-700">
          <p className="text-indigo-300 font-semibold mb-1">🏢 Offline Track</p>
          <p className="text-white">50 selected participants — live in-person at PNC</p>
        </div>
        <div className="bg-gray-800 rounded-lg p-4 border border-gray-700">
          <p className="text-indigo-300 font-semibold mb-1">💻 Online Track</p>
          <p className="text-white">100 participants — live virtual sessions via Google Meet</p>
        </div>
      </div>

      <p className="text-gray-300">
        Both tracks follow the same rules and curriculum — live attendance, hackathon participation,
        and full engagement are required for certification and prize eligibility.
        <strong className="text-white"> One winner will be selected from each track.</strong>
      </p>
    </section>
  );
}
