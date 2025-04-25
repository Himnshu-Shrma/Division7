import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import project1 from '../Projects/Project1.jpg'
import project2 from '../Projects/Project2.jpg'
import project3 from '../Projects/Project3.jpg'
import project4 from '../Projects/Project4.jpg'
import project5 from '../Projects/Project5.jpg'
import project6 from '../Projects/Project6.jpg'
import project7 from '../Projects/Project7.jpg'
import project8 from '../Projects/Project8.jpg'

export default function Projects() {
    return (
        <>
            <Navbar />
            <div className="hero-section hero_projects text-white text-center d-flex align-items-center justify-content-center" >
                <div className="container">
                    <h1>PROJECTS</h1>
                    <p>BUILDING CONSTRUCTION AND RENOVATION</p>

                </div>
            </div>

            <div className="container my-5">
                <div className="row gx-2 gy-4 justify-content-center">
                    <div className="col-lg-4 col-md-6 col-sm-12">
                        <div className="card h-100">
                            <img
                                src={project1}
                                className="card-img-top"
                                alt="Project"
                                style={{ height: "200px", objectFit: "cover" }}
                            />
                            <div className="card-body text-center fw-bold">
                                PROJECT COMPLETED
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12">
                        <div className="card h-100">
                            <img
                                src={project3}
                                className="card-img-top"
                                alt="Project"
                                style={{ height: "200px", objectFit: "cover" }}
                            />
                            <div className="card-body text-center fw-bold">
                                PROJECT COMPLETED
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12">
                        <div className="card h-100">
                            <img
                                src={project4}
                                className="card-img-top"
                                alt="Project"
                                style={{ height: "200px", objectFit: "cover" }}
                            />
                            <div className="card-body text-center fw-bold">
                                PROJECT COMPLETED
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12">
                        <div className="card h-100">
                            <img
                                src={project5}
                                className="card-img-top"
                                alt="Project"
                                style={{ height: "200px", objectFit: "cover" }}
                            />
                            <div className="card-body text-center fw-bold">
                                PROJECT COMPLETED
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12">
                        <div className="card h-100">
                            <img
                                src={project6}
                                className="card-img-top"
                                alt="Project"
                                style={{ height: "200px", objectFit: "cover" }}
                            />
                            <div className="card-body text-center fw-bold">
                                PROJECT COMPLETED
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12">
                        <div className="card h-100">
                            <img
                                src={project7}
                                className="card-img-top"
                                alt="Project"
                                style={{ height: "200px", objectFit: "cover" }}
                            />
                            <div className="card-body text-center fw-bold">
                                PROJECT COMPLETED
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12">
                        <div className="card h-100">
                            <img
                                src={project8}
                                className="card-img-top"
                                alt="Project"
                                style={{ height: "200px", objectFit: "cover" }}
                            />
                            <div className="card-body text-center fw-bold">
                                PROJECT COMPLETED
                            </div>
                        </div>
                    </div>

                </div>
            </div>



            <Footer />
        </>
    )
}
