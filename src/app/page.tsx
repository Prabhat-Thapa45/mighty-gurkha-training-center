import Navbar from './components/NavBar'

import EmailSection from './components/contact'
import HeroSection from './components/home'
import Announcements from './components/Announcements'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Navbar />
      <HeroSection />
      <Announcements />
      <EmailSection />
    </main>
  )
}
