import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import person from '../SiteIMage/Persons.jpg'
import Queries from './Queries'

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="hero-section hero_home text-white text-center d-flex align-items-center justify-content-center" >
        <div className="container">
          <h1 className="fw-bold display-4">Professional Fireproofing & Spray Foam Services</h1>
          <p className="lead mt-3">
            Providing reliable, industry-approved Spray Foam Insulation (Parkade insulation, polyurethane spray, acoustic insulation), and Fireproofing.
          </p>
        </div>
      </div>





      <div className="container-fluid my-5">
        <div className="row align-items-center">
          {/* Text Section */}
          <div className="col-md-6">
            <h2 className="fw-bold">WELCOME TO DIVISION 7 CONTRACTING LTD.</h2>
            <p>
              Established in 2019, Division 7 Contracting is a full-service Spray Foam, Fire Proofing, and
              Slab Jacking Installer. We are committed to sustaining the highest levels of quality service
              and workmanship. Our customers’ satisfaction is our number one priority, and our business is
              built one client and one project at a time.
            </p>
            <p>
              Division 7 is a wholly locally owned, lower mainland-based company committed to making and
              installing top-quality spray foam. We at Division 7 have more than 10 years of combined
              experience in the residential and commercial construction industry and have become experts
              in our field over the years.
            </p>
            <p>
              Division 7 provides the best Parkade Insulation and Acoustic Insulation services. We also
              offer Polyurethane Spray, Slab Jacking, Concrete Lifting, Fire Proofing, and Sprayed Insulation.
            </p>
          </div>

          {/* Image Section */}
          <div className="col-md-6 text-center">
            <img src={person} alt="Construction Workers" className="img-fluid" />
          </div>
        </div>


      </div>
      <div class="testimonial-carousel container-fluid">
        <h2 class="text-center">What Our Clients Say?</h2>
        <div id="testimonialCarousel" class="carousel slide" data-bs-ride="carousel">
          <div class="carousel-inner">
            <div class="carousel-item active">
              <blockquote>
                Best-fireproofing business and is affordable too. We were skeptical at first, but the owner was very patient and helped us clear all our doubts. They are professional in fireproofing and life safety equipment.
              </blockquote>
              <footer>– Onkar Singh</footer>
            </div>
            <div class="carousel-item">
              <blockquote>
                Super pleased with the results and clear communication regarding spray foam. Highly recommended!
              </blockquote>
              <footer>– Jay Smith</footer>
            </div>
            <div class="carousel-item">
              <blockquote>
                Super pleased with the results and clear communication regarding spray foam. Highly recommended!
              </blockquote>
              <footer>– Jaskamal Singh</footer>
            </div>
          </div>

          <div class="carousel-indicators">
            <button type="button" data-bs-target="#testimonialCarousel" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#testimonialCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#testimonialCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>


          <button class="carousel-control-prev" type="button" data-bs-target="#testimonialCarousel" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#testimonialCarousel" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      <Queries />
      <Footer />
    </div>
  )
}
