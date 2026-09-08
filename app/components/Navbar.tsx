'use client';

import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-gray-900 text-white sticky top-0 z-50">
      <h1 className="text-lg font-bold">Qiskit Fall Fest PNC</h1>

      {/* Desktop nav */}
      <ul className="hidden md:flex gap-6 items-center">
        <li className="relative">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="hover:text-purple-400 font-semibold"
          >
            Event ▾
          </button>
          {isOpen && (
            <ul className="absolute left-0 flex flex-col bg-gray-900 mt-2 rounded shadow-lg p-4 space-y-2 z-10 min-w-[180px]">
              <li><a href="#event" onClick={() => setIsOpen(false)} className="block text-gray-300 hover:text-purple-400">About</a></li>
              <li><a href="#whyjoin" onClick={() => setIsOpen(false)} className="block text-gray-300 hover:text-purple-400">Why Join</a></li>
              <li><a href="#schedule" onClick={() => setIsOpen(false)} className="block text-gray-300 hover:text-purple-400">Schedule</a></li>
              <li><a href="#Partner" onClick={() => setIsOpen(false)} className="block text-gray-300 hover:text-purple-400">Partner</a></li>
              <li><a href="#FAQ" onClick={() => setIsOpen(false)} className="block text-gray-300 hover:text-purple-400">FAQ</a></li>
              <li><a href="#speakers" onClick={() => setIsOpen(false)} className="block text-gray-300 hover:text-purple-400">Speakers</a></li>
              <li><a href="#sponsors" onClick={() => setIsOpen(false)} className="block text-gray-300 hover:text-purple-400">Sponsors</a></li>
              <li><a href="#venue" onClick={() => setIsOpen(false)} className="block text-gray-300 hover:text-purple-400">Venue</a></li>
            </ul>
          )}
        </li>
        <li><a href="#contact" className="hover:text-purple-400 font-semibold">Contact</a></li>
        <li>
          <a href="#register" className="bg-yellow-400 text-black px-4 py-1.5 rounded-full font-semibold hover:bg-yellow-300 transition-colors duration-200 text-sm">
            Register
          </a>
        </li>
      </ul>

      {/* Mobile hamburger button */}
      <button
        className="md:hidden flex flex-col gap-1.5 p-2"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <span className={`block w-6 h-0.5 bg-white transition-transform duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
        <span className={`block w-6 h-0.5 bg-white transition-opacity duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
        <span className={`block w-6 h-0.5 bg-white transition-transform duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
      </button>

      {/* Mobile dropdown */}
      {menuOpen && (
        <ul className="absolute top-full left-0 w-full bg-gray-900 flex flex-col px-6 py-4 space-y-3 md:hidden shadow-lg z-50">
          <li><a href="#event" onClick={() => setMenuOpen(false)} className="block text-gray-300 hover:text-purple-400">About</a></li>
          <li><a href="#whyjoin" onClick={() => setMenuOpen(false)} className="block text-gray-300 hover:text-purple-400">Why Join</a></li>
          <li><a href="#schedule" onClick={() => setMenuOpen(false)} className="block text-gray-300 hover:text-purple-400">Schedule</a></li>
          <li><a href="#Partner" onClick={() => setMenuOpen(false)} className="block text-gray-300 hover:text-purple-400">Partner</a></li>
          <li><a href="#FAQ" onClick={() => setMenuOpen(false)} className="block text-gray-300 hover:text-purple-400">FAQ</a></li>
          <li><a href="#speakers" onClick={() => setMenuOpen(false)} className="block text-gray-300 hover:text-purple-400">Speakers</a></li>
          <li><a href="#sponsors" onClick={() => setMenuOpen(false)} className="block text-gray-300 hover:text-purple-400">Sponsors</a></li>
          <li><a href="#venue" onClick={() => setMenuOpen(false)} className="block text-gray-300 hover:text-purple-400">Venue</a></li>
          <li><a href="#contact" onClick={() => setMenuOpen(false)} className="block text-gray-300 hover:text-purple-400">Contact</a></li>
          <li><a href="#register" onClick={() => setMenuOpen(false)} className="block text-yellow-400 font-semibold hover:text-yellow-300">Register</a></li>
        </ul>
      )}
    </nav>
  );
}
