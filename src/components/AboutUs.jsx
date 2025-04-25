import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import project3 from '../SiteIMage/Persons.jpg'

function AboutUs() {
  return (
    <>
      <Navbar />

      <div className="bg-dark text-white text-center py-5 hero_about">
        <h2 className="fw-bold ">ABOUT US</h2>
        <p className="text-uppercase">INFORMATION ABOUT OUR COMPANY AND OUR PHILOSOPHY</p>
      </div>

      <div className="container my-5">
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
            <img src={project3} alt="Construction Workers" className="img-fluid" />
          </div>
        </div>


      </div>
      <div className="container-fluid p-0">

        <iframe width="100%" height="400" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=200&amp;hl=en&amp;q=6238%20138%20St,%20Surrey,%20BC%20V3X%201E6,%20Canada+(6238%20%20138%20St)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.gps.ie/">gps handsets</a></iframe>
      </div>
      <Footer />
    </>
  )
}

export default AboutUs