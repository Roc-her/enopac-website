import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import ScrollToTop from './ScrollToTop'
import BookingProvider from '../booking/BookingProvider'

export default function Layout() {
  return (
    <BookingProvider>
      <ScrollToTop />
      <Header />
      <main className="site-main">
        <Outlet />
      </main>
      <Footer />
    </BookingProvider>
  )
}
