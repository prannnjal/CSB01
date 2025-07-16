import './globals.css'

export const metadata = {
  title: 'Chalksnboard',
  description: 'The new way to learn imagine brain mapping. The neural network based algorithms makes your learning more natural and adaptive.',
  generator: 'v0.dev',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
} 