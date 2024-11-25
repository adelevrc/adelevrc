"use client";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
const PdfPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [pdfUrl, setPdfUrl] = useState<string | null>(null);

  useEffect(() => {
    const generatePdf = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(`../../api/generate-pdf`);
        if (response.ok) {
          const blob = await response.blob();
          const url = URL.createObjectURL(blob);
          setPdfUrl(url);
        } else {
          console.error("Erreur lors de la génération du PDF");
        }
      } catch (error) {
        console.error("Erreur de connexion à l'API:", error);
      } finally {
        setIsLoading(false);
      }
    };

    generatePdf();
  }, []);

  const handleOpenInNewTab = () => {
    if (pdfUrl) {
      // Ouvrir le PDF dans un nouvel onglet
      window.open(pdfUrl, "_blank");
    }
  };

  return (
    <div>
      {isLoading ? (
        <p>Chargement du PDF...</p>
      ) : (
        pdfUrl && (
          <>
            <iframe src={pdfUrl} width='100%' height='600' title='PDF Viewer' />
            <a
              href={pdfUrl}
              download={`ebook-trouver-son-calme.pdf`}
              target='_blank'
              rel='noopener noreferrer'
              onClick={handleOpenInNewTab}
            >
              Télécharger le PDF et l'ouvrir dans un nouvel onglet
            </a>
          </>
        )
      )}
    </div>
  );
};

export default PdfPage;
