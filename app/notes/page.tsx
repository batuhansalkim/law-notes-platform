import NoteCard from '@/components/NoteCard'
import { Heading } from '@/components/ui/heading'
import { Separator } from '@/components/ui/separator'

const sampleNotes = [
  {
    title: 'Medeni Hukuk Ders Notu',
    description: 'Medeni Hukuk dersi 2024 bahar dönemi ders notları',
    pdfUrl: '/pdfs/medeni-hukuk.pdf'  // public klasöründeki yol
  },
  {
    title: 'Ceza Hukuku Ders Notu',
    description: 'Ceza Hukuku dersi 2024 bahar dönemi ders notları',
    pdfUrl: '/pdfs/ceza-hukuku.pdf'  // public klasöründeki yol
  },
  {
    title: 'Anayasa Hukuku Ders Notu',
    description: 'Anayasa Hukuku temel kavramlar ve notlar',
    pdfUrl: '/pdfs/anayasa-hukuku.pdf'  // public klasöründeki yol
  }
]

export default function NotesPage() {
  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <Heading 
          title="Ders Notları" 
          description="Tüm hukuk ders notları"
        />
        <Separator />
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {sampleNotes.map((note, index) => (
            <NoteCard
              key={index}
              title={note.title}
              description={note.description}
              pdfUrl={note.pdfUrl}
            />
          ))}
        </div>
      </div>
    </div>
  )
} 