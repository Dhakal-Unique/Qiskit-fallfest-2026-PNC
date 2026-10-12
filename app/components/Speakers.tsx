export default function Speakers() {
  return (
    <section id="speakers" className="px-6 py-16 max-w-4xl mx-auto bg-gray-800 text-center">
      <h3 className="text-2xl font-bold mb-8 text-indigo-300">Speaker Sessions</h3>

      <div className="flex flex-col items-center">
        <img
          src="/images/OIP.png"
          alt="Unique Dhakal"
          className="w-40 h-40 rounded-full object-cover mb-4 border-4 border-purple-300"
        />
        <h4 className="text-xl font-semibold text-white mb-1">Unique Dhakal</h4>
        <p className="text-purple-300 mb-3 text-sm">
          Mentor-Qiskit Global Summer School 2026 , Quantum Excellence at QGSS-2025&2026, IBM<br />
          Event Lead, Qiskit Fall Fest PNC 2025
        </p>
        <p className="text-gray-300 max-w-md mb-4">
          Mr. Dhakal brings deep insights into quantum computing and its real-world applications.
          His sessions blend technical clarity with inspiring stories from the frontier of quantum research.
        </p>
        <div className="bg-gray-700 border border-gray-600 rounded-lg px-6 py-3 text-sm text-center">
          <p className="text-indigo-300 font-semibold">Session: Nov 26, 7:00 PM to 8:00 PM NPT</p>
          <p className="text-gray-300 mt-1">Topic: Quantum Computing and Qiskit, From Zero to Circuit</p>
        </div>
      </div>
    </section>
  );
}
