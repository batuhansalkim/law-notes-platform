'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Heading } from '@/components/ui/heading';
import { Separator } from '@/components/ui/separator';

export default function AdminPage() {
  const [documents, setDocuments] = useState<any[]>([]);

  const handleAddDocument = (newDoc: any) => {
    setDocuments(prev => [...prev, newDoc]);
  };

  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <Heading 
          title="Admin Paneli" 
          description="Dökümanları yönetin"
        />
        <Separator />
        
        <div className="grid gap-6">
          {documents.map((doc, index) => (
            <div key={index} className="p-4 border rounded-lg">
              {doc.title}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 