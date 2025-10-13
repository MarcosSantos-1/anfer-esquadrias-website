import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        {children}
        {/* Schema.org JSON-LD para SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "ANFER Esquadrias Metálicas",
              "image": "https://anfer-esquadrias.vercel.app/AnferLogo.svg",
              "@id": "https://anfer-esquadrias.vercel.app",
              "url": "https://anfer-esquadrias.vercel.app",
              "telephone": "+5511940093757",
              "priceRange": "$$",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Rua Arlindo Pascoal, 120",
                "addressLocality": "São Paulo",
                "addressRegion": "SP",
                "postalCode": "08072-090",
                "addressCountry": "BR"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": -23.486496,
                "longitude": -46.4592489
              },
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday"
                ],
                "opens": "08:00",
                "closes": "18:00"
              },
              "sameAs": [
                "https://www.facebook.com/Anfer.Esquadrias/",
                "https://www.instagram.com/anfer.esquadrias/"
              ]
            })
          }}
        />
      </main>
      <Footer />
    </>
  )
}
