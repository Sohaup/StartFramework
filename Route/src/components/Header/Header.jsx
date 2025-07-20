import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Header() {
  return (
 <nav className="navbar navbar-expand-lg navbar-light py-3 bg-layout position-fixed w-100 top-0 ">
    <div className="container">
      <Link className="navbar-brand fs-3 fw-bolder text-light" to={"/"}>Start Framework</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0 gap-3">
        <li class="nav-item">
          <NavLink className="nav-link text-light fw-bold transition w-fit-content" aria-current="page" to={"/about"}>About</NavLink>
        </li>
        <li class="nav-item">
          <NavLink className="nav-link text-light fw-bold transition w-fit-content" to={"/portefolio"}>Portefolio</NavLink>
        </li>
        <li class="nav-item">
          <NavLink className="nav-link text-light fw-bold transition w-fit-content" to={"/contact"}>Contact</NavLink>
        </li>        
        </ul>
    </div>
  </div>
</nav>
  )
}
