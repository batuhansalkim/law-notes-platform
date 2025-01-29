'use client';
import Link from 'next/link';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link href="/" className="flex items-center">
              <span className="text-2xl font-bold text-indigo-600">Özgür Hukuk</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden sm:flex sm:items-center sm:space-x-8">
            <Link href="/" className="text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md">
              Ana Sayfa
            </Link>
            <Link href="/documents" className="text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md">
              Ders Notları
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md">
              Hakkımızda
            </Link>
            <Link href="/admin" className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700">
              Admin Girişi
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="sm:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-indigo-600"
            >
              {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="sm:hidden"
        >
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link href="/" className="block text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md">
              Ana Sayfa
            </Link>
            <Link href="/documents" className="block text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md">
              Ders Notları
            </Link>
            <Link href="/about" className="block text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md">
              Hakkımızda
            </Link>
            <Link href="/admin" className="block bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700">
              Admin Girişi
            </Link>
          </div>
        </motion.div>
      )}
    </nav>
  );
} 