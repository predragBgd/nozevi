import React from "react"

export const Header = () => {
    return(
        <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">Knives</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link" href="/fixedBlades">Fixed blade</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/foldingBlades">Folding blade</a>
                            </li>
                        </ul>
                </div>
            </div>
        </nav>

    )
}