import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { AppRouter } from './routes'

function App() {

  return (
    <>
      {/* HEADER SIEMPRE VISIBLE*/}
      <Header />
      
      <AppRouter />

      {/* FOOTER SIEMPRE VISIBLE */}
      <Footer />
    </>
  )
}

export default App
