import { HeadContent, Outlet, Scripts, createRootRoute } from '@tanstack/react-router'
import { Nav, TickerBar } from '@/components/Nav'
import '@/styles.css'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { title: 'Canny Capital Partners' },
      { name: 'description', content: 'Canny Capital Partners acquires and operates lower middle market businesses in Arizona.' },
    ],
    links: [
      { rel: 'icon', type: 'image/png', href: '/canny-favicon.png' },
      { rel: 'shortcut icon', href: '/canny-favicon.png' },
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossOrigin: 'anonymous' as const },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400;1,600&family=DM+Sans:wght@300;400;500;600&display=swap',
      },
    ],
  }),
  shellComponent: RootDocument,
})

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        <Nav />
        <TickerBar />
        {children}
        <Scripts />
      </body>
    </html>
  )
}
