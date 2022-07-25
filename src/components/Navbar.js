import React from 'react'

export default function Navbar(props) {

    return (
        <>
            <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
                <div className="container">
                    <a className="navbar-brand" href="/">{props.brandtext}</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link active" href="/">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link ms-3" href="/">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link ms-3" href="/">Contact</a>
                            </li>
                        </ul>
                    </div>
                    <div className={`ms-3 form-check form-switch text-${props.mode === 'dark' ? 'light':'dark'}`}>
                        <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toggleMode}/>
                        <label className="form-check-label" for="flexSwitchCheckDefault">Mode</label>
                    </div>
                </div>
            </nav>
        </>
    )
}

