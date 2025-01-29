import { Heading } from '@/components/ui/heading'
import { Separator } from '@/components/ui/separator'
import { FaGraduationCap, FaHandshake, FaBookReader, FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin } from 'react-icons/fa'

export default function AboutPage() {
  return (
    <div className="flex-col">
      <div className="flex-1 space-y-8 p-8 pt-6">
        <Heading 
          title="Hakkımızda" 
          description="Law Notes Platform'u daha yakından tanıyın"
        />
        <Separator />
        
        {/* Misyon ve Vizyon Kartları */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg p-6 shadow-sm border hover:shadow-md transition-shadow">
            <h2 className="text-2xl font-bold text-indigo-600 mb-4">Misyonumuz</h2>
            <p className="text-gray-600 leading-relaxed">
              Law Notes Platform olarak, hukuk eğitimini daha erişilebilir kılmayı ve öğrenciler arasında bilgi paylaşımını teşvik etmeyi amaçlıyoruz. Her öğrencinin kaliteli ders notlarına ücretsiz erişebilmesi gerektiğine inanıyoruz.
            </p>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-sm border hover:shadow-md transition-shadow">
            <h2 className="text-2xl font-bold text-indigo-600 mb-4">Vizyonumuz</h2>
            <p className="text-gray-600 leading-relaxed">
              Türkiye'nin en kapsamlı ve güvenilir hukuk notu paylaşım platformu olmayı hedefliyoruz. Teknoloji ve eğitimi birleştirerek, geleceğin hukukçularının gelişimine katkıda bulunmak istiyoruz.
            </p>
          </div>
        </div>

        {/* Değerlerimiz */}
        <div className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg p-8 text-white">
          <h2 className="text-2xl font-bold mb-6">Değerlerimiz</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="flex items-start space-x-4">
              <FaGraduationCap className="w-6 h-6 mt-1" />
              <div>
                <h3 className="font-semibold mb-2">Eğitimde Eşitlik</h3>
                <p className="text-indigo-100">Herkes için eşit eğitim fırsatları sunmak</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <FaHandshake className="w-6 h-6 mt-1" />
              <div>
                <h3 className="font-semibold mb-2">İşbirliği</h3>
                <p className="text-indigo-100">Öğrenciler arası dayanışmayı güçlendirmek</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <FaBookReader className="w-6 h-6 mt-1" />
              <div>
                <h3 className="font-semibold mb-2">Kaliteli İçerik</h3>
                <p className="text-indigo-100">Güvenilir ve güncel ders notları sağlamak</p>
              </div>
            </div>
          </div>
        </div>

        {/* İletişim Bilgileri */}
        <div className="bg-white rounded-lg p-6 shadow-sm border">
          <h2 className="text-2xl font-bold text-indigo-600 mb-6">İletişim</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="flex items-center space-x-4">
              <FaEnvelope className="w-5 h-5 text-indigo-600" />
              <div>
                <h3 className="font-semibold text-gray-900">Email</h3>
                <p className="text-gray-600">info@lawnotesplatform.com</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <FaPhone className="w-5 h-5 text-indigo-600" />
              <div>
                <h3 className="font-semibold text-gray-900">Telefon</h3>
                <p className="text-gray-600">+90 xxx xxx xx xx</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <FaMapMarkerAlt className="w-5 h-5 text-indigo-600" />
              <div>
                <h3 className="font-semibold text-gray-900">Adres</h3>
                <p className="text-gray-600">İstanbul, Türkiye</p>
              </div>
            </div>
          </div>
        </div>

        {/* Geliştirici */}
        <div className="bg-white rounded-lg p-6 shadow-sm border">
          <h2 className="text-2xl font-bold text-indigo-600 mb-6">Geliştirmeye Destek Verenler</h2>
          <div className="flex items-center space-x-4">
            <div className="bg-indigo-100 w-12 h-12 rounded-full flex items-center justify-center">
              <span className="text-indigo-600 font-bold text-xl">BS</span>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 text-lg">Batuhan SALKIM</h3>
              <p className="text-gray-600">Full Stack Developer</p>
              <div className="flex space-x-4 mt-2">
                <a 
                  href="https://github.com/batuhanSalkim" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-gray-600 hover:text-indigo-600 transition-colors"
                >
                  <FaGithub className="w-5 h-5" />
                  <span>GitHub</span>
                </a>
                <a 
                  href="https://www.linkedin.com/in/batuhanslkmm/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-gray-600 hover:text-indigo-600 transition-colors"
                >
                  <FaLinkedin className="w-5 h-5" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 