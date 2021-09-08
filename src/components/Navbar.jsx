import React from 'react'
import { Link } from 'react-router-dom'


export const Navbar = (props) => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
              <Link className="navbar-brand" to="/main">
                <img src="https://res.cloudinary.com/biggiegun/image/upload/v1630781079/APISprint2/logoBlockbuster_aidxa9.png" alt="Logo Blockbuster" />
              </Link>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarColor02"
                aria-controls="navbarColor02"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarColor02">
                <ul className="navbar-nav me-auto">
                  <li className="nav-item">
                    <a className="nav-link" href="/">
                      Todas
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/">
                      Más Valoradas
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/">
                      Menos Valoradas
                    </a>
                  </li>
                </ul>
                <p>
                    {props.form}
                </p>
              </div>
            </div>
          </nav> 
        </div>
    )
}

