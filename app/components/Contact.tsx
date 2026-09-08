export default function Contact() {
  return (
    <section id="contact" className="bg-gray-800 px-6 py-16 max-w-4xl mx-auto">
      <h3 className="text-2xl font-bold mb-4 text-indigo-300">Contact Us</h3>
      <p className="text-white mb-4">
        Have questions or want to get involved? Reach out to us!
      </p>
      <ul className="space-y-2 ">
        <li>
          📧{" "}
          <a
            href="mailto:fallfest.pnc2025@gmail.com"
            className="text-purple-400 hover:underline font-semibold"
          >
            Email Us
          </a>
        </li>
        <li>
          🔗{" "}
          <a
            href="https://np.linkedin.com/in/unique-dhakal-82b731178"
            target="_blank"
            rel="noopener noreferrer"
            className="text-purple-400 hover:underline font-semibold"
          >
            Connect on LinkedIn
          </a>
        </li>
        <li>
          📘{" "}
          <a
            href="https://www.facebook.com/profile.php?id=61580707090300"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:underline"
          >
            Facebook Page
          </a>
        </li>
      </ul>
    </section>
  );
}
