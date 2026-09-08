export default function Venue() {
  return (
    <section id="venue" className="px-6 py-16 max-w-4xl mx-auto bg-gray-900">
      <h3 className="text-2xl font-bold mb-4 text-indigo-300">Venue</h3>
      <p className="text-gray-300 mb-4">Prithvi Narayan Campus, Pokhara</p>
      <iframe
        src="https://www.google.com/maps?q=Prithvi+Narayan+Campus+Pokhara&output=embed"
        className="w-full h-96 rounded-lg border border-gray-700"
        loading="lazy"
      ></iframe>
    </section>
  );
}
