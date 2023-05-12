import { Navbar, Hero, Tokenomic, Roadmap, Footer } from './components'

function App() {
  return (
    <div className='max-w-7xl mx-auto min-h-screen bg-main-bg bg-center bg-cover'>
      <Navbar />
      <Hero />
      <Tokenomic />
      <Roadmap />
      <Footer />
    </div>
  )
}

export default App
