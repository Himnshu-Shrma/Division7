import React from 'react'

import Navbar from './Navbar'
import Footer from './Footer'

import image from '../NewsImages/fireproofing-man.jpg'


function Fireproofing() {
  return (


    <>
      <Navbar />
      <div>
        <div className="bg-dark text-white text-center py-5">
          <h2 className="fw-bold my-5">FIREPROOFING </h2>
          <p className="text-uppercase my-5" >Informations About Our Service</p>
        </div>
        <div className="container my-5 ">
          <div className="row align-items-center pb-3">
            
            <div className="col-md-6 text-center">
              <img
                src={image}
                alt="Spray Foam Insulation"
                className="img-fluid rounded shadow"
              />
            </div>

            <div className="col-md-6">
              <h2 className="fw-bold">Keep Your Property Safe with Fireproofing in Vancouver
              </h2>
              <p>
                Are you looking for reliable professionals to offer excellent fireproofing in Vancouver at affordable prices? If so, you have come to the right place. Welcome to Division 7 Contracting Ltd., your leading provider of fireproofing solutions in Vancouver.
              </p>
              <p>
                Fireproofing is the method of fire retardant cementitious, intumescent, or fibrous products to bare, exposed, steel constructional beams, columns, or decks of a building. Division? Contracting Ltd will perform one of the following dependent on the job.
              </p>
              <p>
                These days, there is no room for error in passive fire protection. Being a requirement for structural steel and concrete in commercial construction, contractors cannot afford to take any chances on the quality of fireproofing. That is why Division 7 takes every possible step to ensure that we provide the highest quality fire protection needed. Furthermore, besides fireproofing solutions, if you need reliable spray foam insulation in Vancouver, we are the one-stop solution.
              </p>
            </div>
          
          </div>
          <h2 className="fw-bold">Types of Fireproofing</h2>
          <p>The three main types of fireproofing methods are cementitious fireproofing, intumescent fireproofing, and firestop fireproofing.
          </p>
          <ul>


            <li><b>Cementitious Fireproofing</b>  -<p> These are gypsum-based, plaster-like coatings that look like white stucco when dried. These coatings are sprayed on the surface of the structural members that need protection. They are usually used in Cementitious fireproofing on steel beams images keep girders and beams below 540 C, where the steel will bend. The coatings are also used to protect structural concrete, such as in vehicular tunnels, from petroleum and other intense fires. Concrete members need extra fire insulation to preserve their structural integrity.
            </p> </li>

            <li><b>Intumescent Fireproofing</b> -<p> Intumescent paints expand and char when heated to form a heat-resistant barrier. They usually contain sodium silicates. The paint coating thickens, entraining air and forming a char layer, providing greater insulation under high-heat conditions. These coatings are sprayed or brushed onto the surfaces to be protected them. While there is some interchangeability with the cementitious coatings, these paints are usually used on pipes and other metallic items like tanks and valves, where the rough thick coating of cementitious fireproofing would be in the way, Intumescent putty is used in firestops.
            </p> </li>
            <li><b>Firestop Fireproofing</b>  - <p> Firestop fireproofing involves sealing all openings and joints in fire-resistance-rated walls and floors. Division 7 install fire dampers to fill the ductwork holes and seal the ducts where they cross firewalls. Hole cuts for pipes and electrical wiring trays are usually filled completely with a specialty fire sealant made from gypsum or an elastomeric substance.</p> </li>
          </ul>


          <h2 className="fw-bold">Our Services</h2>
          <p>We offer a comprehensive range of fireproofing services for residential, commercial, and industrial properties in Vancouver. Our team of experts is dedicated to providing high-quality solutions that meet your unique needs and budget.</p>

          <p>Our Services Include:</p>

          <ul>
            <li>Intumescent Coatings</li>
            <li>Fire-Rated Boarding</li>
            <li>Firestopping</li>
            <li>Spray-Applied Fireproofing</li>
          </ul>




          <h2 className="fw-bold">Why Fireproofing is Important:</h2>

          <p>Fireproofing is an essential element of building safety. It helps to prevent fires from spreading, providing valuable time for occupants to evacuate the building and for firefighters to arrive on the scene. By investing in fireproofing, you can protect your property and the people inside from the devastating effects of fire.</p>


          <h2 className="fw-bold">Our Approach:</h2>

          <p>Every tasks are paramount to us. Our team collaborates closely with our clients to understand their specific requirements and money, allowing us to provide customised solutions that are both efficient and cost-effective. We only use high-quality materials and equipment to guarantee that every task is done correctly.</p>

          <h2 className="fw-bold">Advantages of Hiring Our Fireproofing Professionals in Vancouver</h2>

          <ul>

            <li>Staff with Expertise and Professionalism </li>

            <li>High-Quality materials and tools</li>

            <li>Customized Strategies</li>

            <li>Reasonably priced</li>

            <li>Excellent Client Service</li>

          </ul>











          <h2 className="fw-bold">Contact Us</h2>

          <p>If you're looking for fireproofing solutions in Vancouver, look no further than Division 7 Contracting Ltd.. Contact us today to schedule a consultation with one of our experts and start protecting your property and the people inside from the devastating effects of fire.</p>

        </div>
      </div>
      <Footer />
    </>
  )
}

export default Fireproofing