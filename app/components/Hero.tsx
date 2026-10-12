import Countdown from "./Countdown";

export default function Hero() {
  return (
    <section className="flex flex-col justify-center items-center text-center min-h-[60vh] py-20 px-6 bg-gradient-to-br from-indigo-800 to-purple-600">
      <img
        src="/images/Badge-01.png"
        alt="Qiskit Fall Fest Badge"
        width={128}
        height={128}
        className="mx-auto mb-6"
      />
      <h2 className="text-3xl md:text-4xl font-bold mb-2 text-white">
        Qiskit Fall Fest PNC 2026
      </h2>
      <p className="text-lg md:text-xl mb-4 text-white font-medium">
        Open to All • Nov 25 - Dec 1
      </p>
      <p className="text-base md:text-lg mb-6 text-indigo-100">
        In collaboration with IBM Quantum and Prithvi Narayan Campus
      </p>
      <a
        href="#register"
        className="bg-yellow-400 text-black px-8 py-3 rounded-full font-semibold hover:bg-yellow-300 transition-colors duration-200 text-lg"
      >
        Register Now
      </a>
      <Countdown />
    </section>
  );
}
