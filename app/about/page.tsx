import { Heading } from '@/components/ui/heading'
import { Separator } from '@/components/ui/separator'

export default function AboutPage() {
  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <Heading 
          title="Hakkımızda" 
          description="Law Notes Platform hakkında"
        />
        <Separator />
        
        <div className="bg-white rounded-lg p-6 space-y-6">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Misyonumuz</h2>
            <p className="text-gray-600">
              Law Notes Platform, hukuk öğrencileri ve profesyonelleri için kapsamlı bir dijital öğrenme platformu sunmayı amaçlamaktadır.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Vizyonumuz</h2>
            <p className="text-gray-600">
              Hukuk eğitimini daha erişilebilir ve etkili hale getirerek, geleceğin hukukçularının gelişimine katkıda bulunmak.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold">İletişim</h2>
            <p className="text-gray-600">
              Email: info@lawnotesplatform.com<br />
              Telefon: +90 xxx xxx xx xx<br />
              Adres: İstanbul, Türkiye
            </p>
          </div>
        </div>
      </div>
    </div>
  )
} 