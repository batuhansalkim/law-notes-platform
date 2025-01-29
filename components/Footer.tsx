export default function Footer() {
  return (
    <footer className="bg-gray-50">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Özgür Hukuk</h3>
            <p className="text-gray-600">
              Hukuk öğrencileri için ücretsiz ve kaliteli ders notları platformu.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Hızlı Bağlantılar</h3>
            <ul className="space-y-2">
              <li>
                <a href="/documents" className="text-gray-600 hover:text-indigo-600">
                  Ders Notları
                </a>
              </li>
              <li>
                <a href="/about" className="text-gray-600 hover:text-indigo-600">
                  Hakkımızda
                </a>
              </li>
              <li>
                <a href="/admin" className="text-gray-600 hover:text-indigo-600">
                  Admin Girişi
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">İletişim</h3>
            <p className="text-gray-600">
              Email: info@ozgurhukuk.com<br />
              Tel: +90 xxx xxx xx xx
            </p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-200">
          <p className="text-center text-gray-500">
            © {new Date().getFullYear()} Özgür Hukuk. Tüm hakları saklıdır.
          </p>
        </div>
      </div>
    </footer>
  );
} 