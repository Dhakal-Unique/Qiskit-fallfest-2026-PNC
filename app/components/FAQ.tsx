export default function FAQ() {
  const faqs = [
    {
      q: "Is this event beginner-friendly?",
      a: "Absolutely! All sessions are designed for beginners with no prior experience in quantum computing or Qiskit.",
    },
    {
      q: "Do I need to attend both physical and online sessions?",
      a: "No, you choose one mode — Offline or Online. All participants must attend all live sessions in their selected mode.",
    },
    {
      q: "Is attendance required for the hackathon?",
      a: "Yes. Participation in the hackathon is mandatory for certification and prize eligibility in both tracks.",
    },
    {
      q: "Will I get a certificate?",
      a: "Yes! All participants who complete the required sessions and assignments will receive an official IBM Quantum certificate.",
    },
    {
      q: "Where will the online sessions be held?",
      a: "Online sessions will be hosted via Google Meet. The link will be shared with registered participants through  Discord.",
    },
    {
      q: "What are the two participation modes?",
      a: "Offline Track (Physical): 50 selected participants with live in-person classes and mentorship at Prithvi Narayan Campus. Online Track: 100 participants with live virtual sessions via Google Meet. Both modes follow the same rules and curriculum.",
    },
    {
      q: "How are winners selected?",
      a: "One winner will be selected from each track based on hackathon performance, creativity, and collaboration.",
    },
    {
      q: "Can I switch modes after registering?",
      a: "Mode selection is final once confirmed. Both Offline (50 seats) and Online (100 seats) are limited and assigned after review.",
    },
  ];

  return (
    <section
      id="FAQ"
      className="px-6 py-16 max-w-4xl mx-auto bg-gray-800 text-white"
    >
      <h3 className="text-2xl font-bold mb-6 text-indigo-300">
        Frequently Asked Questions
      </h3>
      <div className="space-y-4">
        {faqs.map(({ q, a }, i) => (
          <div
            key={i}
            className="bg-gray-700 p-4 rounded-lg shadow-md border border-gray-600 hover:bg-gray-600 transition-colors duration-200"
          >
            <details>
              <summary className="cursor-pointer font-semibold text-white hover:text-indigo-300 transition-colors duration-200">
                ❓ {q}
              </summary>
              <p className="mt-2 text-white transition-opacity duration-300">
                {a}
              </p>
            </details>
          </div>
        ))}
      </div>
    </section>
  );
}
