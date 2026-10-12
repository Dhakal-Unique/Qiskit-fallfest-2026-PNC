export default function Footer() {
  return (
    <footer className="bg-gray-900 border-t border-gray-700 pt-10 pb-6 mt-0">
      <div className="max-w-4xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between gap-8 mb-8">

          {/* Brand */}
          <div>
            <p className="text-white font-bold text-lg mb-2">Qiskit Fall Fest PNC 2026</p>
            <p className="text-gray-400 text-sm">Nov 25 to Dec 2, 2026<br />Prithvi Narayan Campus, Pokhara</p>
          </div>

          {/* Quick Links */}
          <div>
            <p className="text-indigo-300 font-semibold mb-3 text-sm uppercase tracking-wider">Quick Links</p>
            <ul className="space-y-2 text-sm">
              <li><a href="#event" className="text-gray-400 hover:text-white transition-colors">About</a></li>
              <li><a href="#schedule" className="text-gray-400 hover:text-white transition-colors">Schedule</a></li>
              <li><a href="#speakers" className="text-gray-400 hover:text-white transition-colors">Speakers</a></li>
              <li><a href="#FAQ" className="text-gray-400 hover:text-white transition-colors">FAQ</a></li>
              <li><a href="#register" className="text-gray-400 hover:text-white transition-colors">Register</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-indigo-300 font-semibold mb-3 text-sm uppercase tracking-wider">Connect</p>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="mailto:fallfest.pnc2025@gmail.com" className="text-gray-400 hover:text-white transition-colors">
                  Email Us
                </a>
              </li>
              <li>
                <a href="https://np.linkedin.com/in/unique-dhakal-82b731178" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="https://www.facebook.com/profile.php?id=61580707090300" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                  Facebook
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-4 text-center">
          <p className="text-gray-500 text-sm">© 2026 Qiskit Fall Fest PNC. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
