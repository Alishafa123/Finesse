import React from 'react'
import { Link } from 'react-router-dom'
import {HashLink} from "react-router-hash-link"

export default function header() {
  return (
    <nav>
        <h1>FINEESE</h1>
        <main>
            <HashLink to={"/#home"}>Home</HashLink>
            <Link to={"/contact"}>Contact</Link>
            <HashLink to={"/#about"}>About</HashLink>
            <a href={"/#brands"}>Brands</a>
            <Link to={"/service"}>Services</Link>

        </main>
    </nav>
  )
}
