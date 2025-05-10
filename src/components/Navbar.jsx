import React from 'react'
import logo from '../LOGO/darkLogo.svg'
export default function Navbar() {
    return (
        <>

            <div className="mainHeader">

                <nav className="navbar navbar-expand-lg navbar ">
                    <div className="container-fluid mx-2 p-0" >
                        <a className="" href="/">
                            <img src={logo} alt="" />
                        </a>

                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav ms-md-auto gap-2">
                                <li className="nav-item rounded px-2">
                                    <a className="nav-link active" aria-current="page" href="/">Home</a>
                                </li>
                                <li className="nav-item rounded px-2">
                                    <a className="nav-link" href="/about">About Us</a>
                                </li>

                                <li class="nav-item dropdown px-2">
                                    <span class="nav-link dropdown-toggle"  role="button" data-bs-toggle="dropdown" aria-expanded="false">Services</span>
                                    <ul class="dropdown-menu">
                                        <li><a class="dropdown-item" href="/fireproofing">Fireproofing</a></li>
                                        <li><a class="dropdown-item" href="/slab-jacking">Slab Jacking</a></li>
                                        <li><a class="dropdown-item" href="/spray-foam-insulation">Spray Foam Insulation</a></li>
                                    </ul>
                                </li>


                                <li className="nav-item rounded px-2">
                                    <a className="nav-link" href="/projects">Projects</a>
                                </li>
                                <li className="nav-item rounded px-2">
                                    <a className="nav-link" href="contact">Contact Us</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>

                <div className="diagonal-navbar container-fluid">
                    <div className='leftdiv'></div>
                    <div className="container-fluid d-flex justify-content-around align-items-center p-0 m-0">
                        {/* Contact Info */}

                        <div className="info-item my-2">
                            <i className="bi bi-telephone-fill text-warning me-2"></i>
                            <div>
                                <i class="fa-solid fa-phone mx-2"></i>
                                <strong>(604) 728-1687</strong>
                                <div className="small-text text-center">Call for Free Estimate</div>
                            </div>
                        </div>
                        <div className="info-item my-2">
                            <i className="bi bi-clock-fill text-warning me-2"></i>
                            <div>
                                <i class="fa-solid fa-clock mx-2"></i>
                                <strong>Mon - Fri 8:00 AM - 5:00 PM</strong>
                                <div className="small-text text-center">Operating Hours</div>
                            </div>
                        </div>
                        <div className="info-item my-2">
                            <i className="bi bi-envelope-fill text-warning me-2"></i>
                            <div>
                                <i class="fa-solid fa-envelope mx-2"></i>
                                <strong>projects@division7.ca</strong>
                                <div className="small-text text-center">Write To Us</div>
                            </div>
                        </div>

                        <a className="bg-yellow px-2 py-1 my-2 rounded-lg font-semibold hover:bg-yellow-600" href='/contact'>
                            REQUEST AN ESTIMATE
                        </a>
                        

                    </div>
                    <div className="rightdiv"></div>
                </div>

            </div>
        </>
    )
}
