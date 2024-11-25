import { NextResponse } from 'next/server'
import { PDFDocument } from 'pdf-lib'
import fs from 'fs'
import path from 'path'

// Cette fonction génère un PDF à partir de "findCalmEbook.pdf" en incluant toutes les pages
export async function GET() {
  try {
    // Charger le fichier PDF à partir du dossier public
    const findCalmEbookPdfPath = path.join(process.cwd(), 'public', 'ebook-findcalm.pdf')

    const findCalmEbookPdfBytes = fs.readFileSync(findCalmEbookPdfPath)

    // Créer un nouveau document PDF
    const pdfDoc = await PDFDocument.create()

    // Charger le fichier PDF existant
    const findCalmEbookPdf = await PDFDocument.load(findCalmEbookPdfBytes)

    // Copier chaque page du fichier "findCalmEbook.pdf" dans le nouveau document
    const pageCount = findCalmEbookPdf.getPages().length

    for (let i = 0; i < pageCount; i++) {
      const [copiedPage] = await pdfDoc.copyPages(findCalmEbookPdf, [i])
      pdfDoc.addPage(copiedPage)
    }

    // Convertir le PDF en bytes
    const pdfBytes = await pdfDoc.save()

    // Renvoyer la réponse avec les bons en-têtes pour un fichier PDF
    return new NextResponse(Buffer.from(pdfBytes), {
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': 'inline; filename=find-calm-ebook.pdf',
      },
    })
  } catch (error) {
    return new NextResponse(
      JSON.stringify({ error: 'Erreur lors de la génération du PDF.' }),
      { status: 500 }
    )
  }
}
