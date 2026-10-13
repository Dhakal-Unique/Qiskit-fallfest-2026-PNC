export default function Speakers() {
  return (
    <section id="speakers" className="px-6 py-16 max-w-4xl mx-auto bg-gray-800 text-center">
      <h3 className="text-2xl font-bold mb-8 text-indigo-300">Speaker Sessions</h3>

      <div className="flex flex-wrap justify-center gap-12">
        {/* Unique Dhakal */}
        <div className="flex flex-col items-center max-w-md">
          <img
            src="/images/OIP.jpg"
            alt="Unique Dhakal"
            className="w-40 h-40 rounded-full object-cover mb-4 border-4 border-purple-300"
          />
          <h4 className="text-xl font-semibold text-white mb-1">Unique Dhakal</h4>
          <p className="text-purple-300 mb-3 text-sm">
            Event Lead, Qiskit Fall Fest PNC 2025
          </p>
          <p className="text-gray-300 max-w-md mb-4">
            Unique Dhakal is a quantum computing enthusiast and researcher from Nepal, with interests in quantum algorithms and quantum chemistry. He leads Qiskit Fall Fest at Prithvi Narayan Campus, has served as a mentor for Qiskit Global Summer School, and was selected as a Section Leader for Stanford University's Code in Place program. His research focuses on comparing Variational Quantum Eigensolver (VQE) and Density Functional Theory (DFT).
          </p>
          <div className="bg-gray-700 border border-gray-600 rounded-lg px-6 py-3 text-sm text-center">
            <p className="text-indigo-300 font-semibold">Session: Nov 26, 7:00 PM to 8:00 PM NPT</p>
            <p className="text-gray-300 mt-1">Topic: Quantum Computing and Qiskit, From Zero to Circuit</p>
          </div>
        </div>

        {/* Debarthi Pal */}
        <div className="flex flex-col items-center max-w-md">
          <img
            src="/images/Debarthi pal.jpg"
            alt="Debarthi Pal"
            className="w-40 h-40 rounded-full object-cover mb-4 border-4 border-purple-300"
          />
          <h4 className="text-xl font-semibold text-white mb-1">Debarthi Pal</h4>
          <p className="text-purple-300 mb-3 text-sm">
            Quantum Research Engineer at IBM Quantum
          </p>
          <p className="text-gray-300 max-w-md mb-4">
            Debarthi Pal is a Quantum Research Engineer at IBM Quantum, based at the IBM India Research Lab. She is a part of the Quantum Algorithm Engineering (QAE) team, where she collaborates with researchers using IBM quantum technologies. She did her Masters in Quantum Technology from IISc, Bangalore during which she worked with IBM on various error mitigation techniques such as Operator Backpropagation (OBP), Circuit Cutting, etc.
          </p>
        </div>
      </div>
    </section>
  );
}
