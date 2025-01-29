'use client'

import { useState } from 'react'
import { Heading } from '@/components/ui/heading'
import { Separator } from '@/components/ui/separator'
import { Button } from '@/components/ui/button'
import dynamic from 'next/dynamic'
import { Search, ZoomIn, ZoomOut } from 'lucide-react'

// PDF viewer'ı dinamik olarak import ediyoruz
const PDFViewer = dynamic(() => import('@/components/PDFViewer'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-[800px] flex items-center justify-center">
      <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary"></div>
    </div>
  ),
})

export default function PDFViewerPage() {
  const [scale, setScale] = useState(1)
  const [url] = useState('/sample.pdf') // Örnek PDF url'i

  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <div className="flex items-center justify-between">
          <Heading 
            title="PDF Görüntüleyici" 
            description="Hukuk notlarını görüntüleyin"
          />
          <div className="flex items-center gap-4">
            <Button
              onClick={() => setScale(prev => Math.max(0.5, prev - 0.1))}
              variant="outline"
              size="icon"
            >
              <ZoomOut className="h-4 w-4" />
            </Button>
            <span className="min-w-[3rem] text-center">
              {Math.round(scale * 100)}%
            </span>
            <Button
              onClick={() => setScale(prev => Math.min(2, prev + 0.1))}
              variant="outline"
              size="icon"
            >
              <ZoomIn className="h-4 w-4" />
            </Button>
          </div>
        </div>
        <Separator />
        <div className="w-full min-h-[800px] bg-gray-50 rounded-lg overflow-hidden border">
          <PDFViewer scale={scale} url={url} />
        </div>
      </div>
    </div>
  )
} 