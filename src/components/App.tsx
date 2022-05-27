import React, { useEffect } from "react"
import Header from "./Header/Header"
import MainContent from "./MainContent/MainContent"
import Footer from "./Footer/Footer"
import s from "./App.module.css"

function App() {
  useEffect(() => {
    if (window.location.pathname.startsWith("/discord")) {
      window.location.replace(
        "https://discord.com/servers/venus-protocol-912811548651708448"
      )
    }
  }, [window.location.pathname])

  return (
    <main className={s.root}>
      <Header />
      <MainContent />
      <Footer />
    </main>
  )
}

export default App
