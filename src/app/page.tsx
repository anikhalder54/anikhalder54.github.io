import Image from 'next/image'
import Hero from './components/Hero'
import Contact from './components/Contact'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#f7f5f6] container mx-auto px-12 py-4">
      <Hero />
    </main>
  )
}
