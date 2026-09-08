export default function Register() {
  return (
    <section id="register" className="scroll-mt-24 px-6 py-16 max-w-4xl mx-auto text-center bg-gray-900">
      <h3 className="text-2xl font-bold mb-4 text-indigo-300">Register</h3>
      <p className="text-gray-300 mb-2 text-lg">
        Join us for <strong className="text-white">Qiskit Fall Fest PNC 2026</strong> — November 25 to December 1
      </p>
      <p className="text-gray-300 mb-6">
        Limited seats available —{" "}
        <span className="text-yellow-400 font-semibold">50 Offline</span> and{" "}
        <span className="text-yellow-400 font-semibold">100 Online</span> spots only.
        <br />
        Registration closes on <strong className="text-white">November 20, 2026 at 8:00 PM NPT</strong>.
      </p>
      <a
        href="https://forms.gle/UdsQZdoLySgQj7Vh9"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-yellow-400 px-8 py-3 rounded-full font-semibold hover:bg-yellow-300 transition-colors duration-200 text-black text-lg"
      >
        Click to Register
      </a>
    </section>
  );
}
