'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';

// Geçici örnek veri
const DUMMY_DOCUMENTS = [
  {
    id: 1,
    title: 'Medeni Hukuk Ders Notu',
    category: 'medeni',
    description: 'Medeni Hukuk dersi için kapsamlı notlar',
    pdfUrl: '/pdfs/medeni-hukuk.pdf',
  },
  {
    id: 2,
    title: 'Ceza Hukuku Ders Notu',
    category: 'ceza',
    description: 'Ceza Hukuku dersi için detaylı notlar',
    pdfUrl: '/pdfs/ceza-hukuku.pdf',
  },
  {
    id: 3,
    title: 'Anayasa Hukuku Ders Notu',
    category: 'anayasa',
    description: 'Anayasa Hukuku temel kavramlar ve notlar',
    pdfUrl: '/pdfs/anayasa-hukuku.pdf',
  }
];

export default function DocumentList() {
  const [category, setCategory] = useState('all');
  
  const filteredDocuments = category === 'all' 
    ? DUMMY_DOCUMENTS 
    : DUMMY_DOCUMENTS.filter(doc => doc.category === category);

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold text-gray-900">Ders Notları</h2>
        <select 
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 p-2"
        >
          <option value="all">Tüm Kategoriler</option>
          <option value="medeni">Medeni Hukuk</option>
          <option value="ceza">Ceza Hukuku</option>
          <option value="anayasa">Anayasa Hukuku</option>
        </select>
      </div>
      
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filteredDocuments.map((doc) => (
          <motion.div
            key={doc.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
          >
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900">{doc.title}</h3>
              <p className="mt-2 text-gray-600">{doc.description}</p>
              <div className="mt-4 flex space-x-4">
                <a
                  href={doc.pdfUrl}
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  PDF&apos;i İndir
                </a>
                <button
                  onClick={() => window.open(doc.pdfUrl, '_blank')}
                  className="inline-flex items-center px-4 py-2 border border-indigo-600 text-sm font-medium rounded-md text-indigo-600 hover:bg-indigo-50"
                >
                  Önizleme
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
} 