'use client'

import { useState } from 'react'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Eye, Download } from 'lucide-react'
import dynamic from 'next/dynamic'

const PDFViewer = dynamic(() => import('@/components/PDFViewer'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-[500px] flex items-center justify-center">
      <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary"></div>
    </div>
  ),
})

interface NoteCardProps {
  title: string
  description: string
  pdfUrl: string
}

export default function NoteCard({ title, description, pdfUrl }: NoteCardProps) {
  const [showPDF, setShowPDF] = useState(false)

  const handleDownload = async () => {
    try {
      const response = await fetch(pdfUrl)
      if (!response.ok) throw new Error('PDF yüklenemedi')
      
      const blob = await response.blob()
      const downloadUrl = window.URL.createObjectURL(blob)
      const link = document.createElement('a')
      link.href = downloadUrl
      link.download = title + '.pdf'
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
      window.URL.revokeObjectURL(downloadUrl)
    } catch (error) {
      console.error('PDF indirme hatası:', error)
      alert('PDF indirme sırasında bir hata oluştu')
    }
  }

  return (
    <Card className="w-full">
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        
        <div className="flex gap-2">
          <Button
            variant="outline"
            onClick={() => setShowPDF(!showPDF)}
            className="flex items-center gap-2"
          >
            <Eye className="w-4 h-4" />
            {showPDF ? 'Önizlemeyi Kapat' : 'Önizle'}
          </Button>
          <Button
            variant="default"
            onClick={handleDownload}
            className="flex items-center gap-2"
          >
            <Download className="w-4 h-4" />
            İndir
          </Button>
        </div>

        {showPDF && (
          <div className="mt-4 border rounded-lg overflow-hidden bg-white">
            <PDFViewer url={pdfUrl} />
          </div>
        )}
      </div>
    </Card>
  )
} 