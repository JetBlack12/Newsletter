import './globals.css'

export const metadata = {
  title: 'Newsletter',
  description: 'By JetBlack12',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
      <footer>
        Coded by Crow
      </footer>
    </html>
  )
}
