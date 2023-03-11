import React from 'react'

export default function Navbar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary" style={{height:'80px'}}>
                <div className="container-fluid">
                    <a className="navbar-brand" href="">Mavvex</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Use Cases
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="/deepTech">Deep Tech Product Development</a></li>
                                    <li><a className="dropdown-item" href="/eDPml">Enabling Data Privacy in Machine Learning Model</a></li>
                                    {/* <li><hr className="dropdown-divider"/></li> */}
                                    <li><a className="dropdown-item" href="/bLTTservices">Better Language Transcription and Translation Services</a></li>
                                </ul>
                            </li>

                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Industries
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="/healthcare">Healthcare</a></li>
                                    <li><a className="dropdown-item" href="/retail">Retail</a></li>
                                    <li><a className="dropdown-item" href="/agriculture">Agriculture</a></li>
                                    <li><a className="dropdown-item" href="/convAi">Conversational AI</a></li>
                                    <li><a className="dropdown-item" href="/securityprivacyAi">Security and Privacy in AI</a></li>
                                    
                                </ul>
                            </li>


                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/customer">Customers</a>
                            </li>

                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Research
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="/publication">Publications</a></li>
                                    <li><a className="dropdown-item" href="/researchteam">Research Team</a></li>
                                </ul>
                            </li>

                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Company
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="/aboutus">About us</a></li>
                                    <li><a className="dropdown-item" href="/contactus">Contact us</a></li>
                                    <li><a className="dropdown-item" href="/careers">Careers</a></li>
                                </ul>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/blog">Blog</a>
                            </li>
    
                            
                        </ul>


                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                                <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
        </>
    )
}
