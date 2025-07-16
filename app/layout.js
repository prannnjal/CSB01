import './globals.css'
import HeaderClient from '../components/HeaderClient'
import Footer from '../components/Footer'

export const metadata = {
  title: 'Chalksnboard',
  description: 'The new way to learn imagine brain mapping. The neural network based algorithms makes your learning more natural and adaptive.',
  generator: 'v0.dev',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/download.png" type="image/png" />
      </head>
      <body>
        <HeaderClient />
        {children}
        <Footer />
      </body>
    </html>
  )
} 