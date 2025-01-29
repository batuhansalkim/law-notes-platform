'use client'

import { useState } from 'react'
import { Document, Page, pdfjs } from 'react-pdf'
import 'react-pdf/dist/esm/Page/AnnotationLayer.css'
import 'react-pdf/dist/esm/Page/TextLayer.css'
import { Button } from '@/components/ui/button'
import { Download } from 'lucide-react'

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`

interface PDFViewerProps {
  scale?: number
  url: string
}

export default function PDFViewer({ scale = 1, url }: PDFViewerProps) {
  const [numPages, setNumPages] = useState<number>(0)
  const [pageNumber, setPageNumber] = useState<number>(1)

  function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
    setNumPages(numPages)
    setPageNumber(1)
  }

  const handleDownload = async () => {
    try {
      const response = await fetch(url)
      const blob = await response.blob()
      const downloadUrl = window.URL.createObjectURL(blob)
      const link = document.createElement('a')
      link.href = downloadUrl
      link.download = url.split('/').pop() || 'document.pdf'
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
      window.URL.revokeObjectURL(downloadUrl)
    } catch (error) {
      console.error('PDF indirme hatası:', error)
    }
  }

  return (
    <div className="flex flex-col items-center p-4 h-full overflow-auto bg-white">
      <div className="sticky top-0 z-10 flex justify-between items-center w-full mb-4 bg-white/80 backdrop-blur-sm p-2 rounded-lg">
        <div className="flex items-center gap-2">
          <Button
            onClick={() => setPageNumber(page => Math.max(1, page - 1))}
            disabled={pageNumber <= 1}
            variant="outline"
            size="sm"
          >
            Önceki
          </Button>
          <span className="text-sm">
            Sayfa {pageNumber} / {numPages}
          </span>
          <Button
            onClick={() => setPageNumber(page => Math.min(numPages, page + 1))}
            disabled={pageNumber >= numPages}
            variant="outline"
            size="sm"
          >
            Sonraki
          </Button>
        </div>
        <Button onClick={handleDownload} variant="outline" size="sm">
          <Download className="w-4 h-4 mr-2" />
          İndir
        </Button>
      </div>

      <Document
        file={url}
        onLoadSuccess={onDocumentLoadSuccess}
        className="max-w-full"
        loading={
          <div className="flex items-center justify-center h-[500px]">
            <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary"></div>
          </div>
        }
      >
        <Page
          pageNumber={pageNumber}
          scale={scale}
          renderTextLayer={true}
          renderAnnotationLayer={true}
          className="shadow-lg rounded-lg"
        />
      </Document>
    </div>
  )
} 