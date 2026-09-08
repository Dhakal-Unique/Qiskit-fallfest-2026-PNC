import Image from "next/image";

export default function Partners() {
  return (
    <section id="Partner" className="bg-gray-800 px-6 py-16">
      <h3 className="text-2xl md:text-3xl font-bold mb-12 text-indigo-300">Supporting Partners</h3>

      {/* IBM Quantum */}
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-6 md:gap-x-8 mb-12 text-center md:text-left">
        <div className="flex-shrink-0 bg-white p-2 rounded-lg">
          <Image
            src="/images/IBM_Quantum_Logo.png"
            alt="IBM Quantum Logo"
            width={160}
            height={160}
          />
        </div>
        <div className="flex-1">
          <h4 className="text-xl md:text-2xl font-bold mb-2 text-white">IBM Quantum</h4>
          <p className="text-gray-300">
            IBM Quantum is a full-stack quantum computing provider. Its offerings include cloud-based access to quantum processors, the Qiskit SDK, educational courses, and global partnerships for capacity building.
          </p>
        </div>
      </div>

      {/* Prithvi Narayan Campus (PNC) */}
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-6 md:gap-x-8 text-center md:text-left">
        <div className="flex-shrink-0">
          <Image
            src="/images/PNC_Logo.jpeg"
            alt="Prithvi Narayan Campus Logo"
            width={160}
            height={160}
            className="rounded-lg"
          />
        </div>
        <div className="flex-1">
          <h4 className="text-xl md:text-2xl font-bold mb-2 text-white">Prithvi Narayan Campus (PNC)</h4>
          <p className="text-gray-300">
            Founded in 1960, PNC is one of Tribhuvan University's oldest and largest campuses. Located in Pokhara, it plays a vital role in higher education and research in western Nepal, fostering academic excellence and innovation.
          </p>
        </div>
      </div>
    </section>
  );
}

