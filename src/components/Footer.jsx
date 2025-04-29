import React from 'react'
import icon from '../LOGO/lightLOGO.svg'
function Footer() {
    return (
        <div className='container-fluid p-0'>
            <div className="bg text-white footer__wrapper">
                <div className="my-2">
                    <figure className='text-center'>
                        <img src={icon} alt="" />
                    </figure>

                    <p className='text-center'>
                        Established in 2019, Division 7contracting is full service spray foam, Fire Proofing and Fire Stopping Installer.
                        We are commited to sustaining the highest level of quality service and workmanship.
                        <div className="social-icons">
                            <i class="fa-brands fa-facebook-f"></i>
                        </div>
                    </p>
                </div>
                <div className="">
                    <h4 className="text-center p-3 ">
                        Information
                    </h4>

                    <div className="menu-division">
                        <div className="menu-wrapper">

                            <p className='text-center footer-menu'>
                                <a href="/">Home</a>
                            </p>
                            <p className='text-center footer-menu'>
                                <a href="/about">About Us</a>
                            </p>
                            <p className='text-center footer-menu'>
                                <a href="/projects">Projects</a>
                            </p>
                            <p className='text-center footer-menu'>
                                <a href="/contact">Contact Us</a>
                            </p>
                        </div>
                        <div className="menu-wrapper">

                            <p className='text-center footer-menu'>
                                <a href="/slab-jacking">Slab Jacking</a>
                            </p>
                            <p className='text-center footer-menu'>
                                <a href="/fireproofing"> Fire Proofing</a>
                            </p>
                            <p className='text-center footer-menu'>
                                <a href="/spray-foam-insulation">Spray Foam Insulation</a>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="">
                    <h4 className="text-center p-3 ">
                        Contact Us
                    </h4>
                    <p className='text-center'>
                        <i class="fa-solid fa-location-dot"></i>
                        Surrey, BC Canada
                    </p>
                    <p className='text-center'>
                        <i class="fa-solid fa-envelope"></i>
                        projects@division7.ca
                    </p>
                    <p className='text-center'>
                        <i class="fa-solid fa-phone"></i>
                        (604) 728-1687
                    </p>
                </div>

            </div>
        </div>
    )
}

export default Footer