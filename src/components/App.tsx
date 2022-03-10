import React from "react"
import Header from "./Header/Header"
import MainContent from "./MainContent/MainContent"
import Footer from "./Footer/Footer"
import s from "./App.module.css"

function App() {
  return (
    <main className={s.root}>
      <Header />
      <MainContent />
      <Footer />
    </main>
  )
}

export default App
