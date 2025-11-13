import React from "react"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import portifolio from "../assets/portifolio.webp"

export default function Test(props) {
  return (
    <>
      <Navbar/>
      <img src={portifolio} alt="" />
    </>
  )
}
