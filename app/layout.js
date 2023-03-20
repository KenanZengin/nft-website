import '../styles/glabol.scss'
import Footer from '@/backbones/footer'
import Header from '@/backbones/header'


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>

        <Header />
        {children}
        <Footer />
      
      </body>
    </html>
  )
}
