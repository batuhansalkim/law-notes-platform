'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';

export default function AdminPanel() {
  const [documents, setDocuments] = useState([
    { id: 1, title: 'Medeni Hukuk', category: 'medeni' },
    { id: 2, title: 'Ceza Hukuku', category: 'ceza' }
  ]);

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow p-6">
          <h1 className="text-2xl font-bold text-gray-900 mb-6">Admin Paneli</h1>
          
          {/* PDF Yükleme Formu */}
          <div className="mb-8">
            <h2 className="text-lg font-semibold mb-4">Yeni PDF Yükle</h2>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Başlık
                </label>
                <input
                  type="text"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Kategori
                </label>
                <select className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500">
                  <option value="medeni">Medeni Hukuk</option>
                  <option value="ceza">Ceza Hukuku</option>
                  <option value="anayasa">Anayasa Hukuku</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  PDF Dosyası
                </label>
                <input
                  type="file"
                  accept=".pdf"
                  className="mt-1 block w-full"
                />
              </div>
              <button
                type="submit"
                className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700"
              >
                Yükle
              </button>
            </form>
          </div>

          {/* Mevcut Dökümanlar Listesi */}
          <div>
            <h2 className="text-lg font-semibold mb-4">Mevcut Dökümanlar</h2>
            <div className="space-y-4">
              {documents.map((doc) => (
                <motion.div
                  key={doc.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex justify-between items-center p-4 bg-gray-50 rounded-md"
                >
                  <div>
                    <h3 className="font-medium">{doc.title}</h3>
                    <p className="text-sm text-gray-500">{doc.category}</p>
                  </div>
                  <button
                    onClick={() => {/* Silme işlemi */}}
                    className="text-red-600 hover:text-red-800"
                  >
                    Sil
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 