import React from "react"
import { hydrate, render } from "react-dom"
import App from "./components/App"
import reportWebVitals from "./reportWebVitals"
import "normalize.css"
import "./assets/styles/index.css"

const rootElement = document.getElementById("root")
if (rootElement?.hasChildNodes()) {
  hydrate(<App />, rootElement)
} else {
  render(<App />, rootElement)
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
