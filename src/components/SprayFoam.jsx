import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import picture from '../NewsImages/Sprayfoam.webp'

function SprayFoam() {
    return (
        <>
            <Navbar />
            <div>
                <div className="bg-dark text-white text-center py-5 ">
                    <h2 className="fw-bold my-5">SPRAY FOAM INSULATION </h2>
                    <p className="text-uppercase my-5">Informations About Our Service</p>
                </div>
                <div className="container">
                    <div className="row align-items-center">
                            <p>Welcome to Division 7 Contracting Ltd., your premier destination for Spray Foam Insulation in Vancouver.</p>
                        <div className="col-md-6">

                            <h2 className="fw-bold">Our Services:</h2>
                            <p>
                                We specialize in providing high-quality sprayed insulation services for residential, commercial, and industrial properties in Vancouver.
                                Our team of experts has years of experience in the industry and is dedicated to providing you with the best service possible.
                            </p>

                            <ul>
                                <li>Residential Spray Foam Insulation</li>
                                <li>Commercial Sprayed Insulation</li>
                                <li>Industrial Spray Insulation</li>
                            </ul>




                            <p>Not only we are offering spray foaming services but also we offer reliable fireproofing in Vancouver as well. We provide quality workmanship. Preventing heat loss in your home is what we do. Spray foam insulation is the most effective and efficient insulation in the market. It is safe, environmentally sound, non-allergenic, and dust and fiber-free. And most importantly, it saves you money by stopping heat loss. We typically use 2lb (closed cell) and 1/2 lb (open cell) polyurethane foam.</p>

                            <p>Division7 is the premier residential and commercial insulation company in the Surrey BC, specializing in leading edge, environmentally sound and economical insation solutions. Our insulation products and services enable homeowners to understand significant savings on heating and air conditioning costs while at the same time enhancing the livability and market value of their homes. As for our commercial customers, they enjoy reduced operational costs which in turn enables them to stay competitive in today's 24 hour global marketplace.</p>
                        </div>
                        <div className="text-center mt-4 col-md-6 ">
                            <img
                                src={picture}
                                alt="Spray Foam Insulation"
                                className="img-fluid rounded shadow"
                            />
                        </div>

                    </div>
                    <h2 className="fw-bold">Why Choose Sprayed Insulation?</h2>

                    <p>Sprayed insulation, also known as spray foam insulation, is a highly effective way to reduce energy consumption and lower your energy bills. It works by sealing air leaks and reducing heat loss, which helps to maintain a consistent temperature in your home or business. In addition, sprayed insulation has the added benefit of soundproofing your space, providing a quieter and more comfortable environment.</p>

                    <h2 className="fw-bold">Advantages of Full Property Spray Foam Insulation:</h2>

                    <ul>


                        <li><b>Extraordinary energy savings</b>  -<p> Fiberglass insulation is better than nothing as we said but why settle for that when you can achieve superior energy savings with spray foam? Because spray insulation expands as it's introduced to your walls and ceiling it's able to fill every tiny crack and crevice, effectively sealing your home uptight and producing maximum

                            savings.</p> </li>

                        <li><b>Extraordinary insulation</b> -<p>Fiberglass batts always leave a bit of space around the edges where heat can leak out and drafts, cold air, and moisture can leak in. Spray foaming insulation completely eliminates these leak points meaning your Surrey home is not only warmer, it's also drier and less drafty than before.</p> </li>

                        <li><b>An effective moisture barrier</b>  - <p>Cold isn't the only enemy of a comfortable environment. Moisture also has a negative effect on the quality of life you experience in your home. Dampness provides a breeding ground for mold and mildew, has a corrosive effect on wood and upholstery, and can shorten the life of wallpaper and house paint. Full property sprayed insulation provides the most effective barrier of any insulation product against moisture.</p> </li>

                        <li><b>A healthier Property</b> -<p>The mold and mildew we referred to above is no trivial issue. Several species of mold can actually be fatal to human beings and their growth is promoted and sustained by excessive moisture in the house. In addition, if you have ever noticed a musty, dank odour in your home that is a byproduct of mold. Full property spray foam insulation will help eliminate the moisture mold and other bacteria need to live.</p> </li>

                        <li><b>Long-term viability</b> -<p>Fiberglass insulation will lose much of its insulating ability if it absorbs moisture. And because fiberglass won't provide an effective moisture barrier the odds are good that it will absorb much of the moisture it allows into the walls. By contrast, residential spray foam insulation shuts out the moisture, and even if your exterior wall is damaged cured spray insulation will not absorb any moisture that may get through.</p> </li>

                        <li><b>Environmental friendliness</b> -<p>Spray foam insulation hits all the right environmental notes. It allows you to significantly reduce the amount of energy you burn to heat your home. It helps your HVAC system work more efficiently so that it consumes less electricity and lasts longer and it makes it easier to air condition your home during the dog days of summer. And if the need ever arises to remove the spray foam it can either be repurposed, recycled, or donated to charitable organizations like "Habitat for Humanity" who will put it to good use.</p> </li>

                    </ul>
                    <h2 className="fw-bold">Our Approach:</h2>

                    <p>At Division 7 Contracting Ltd., we take a customized approach to every job. Our team works closely with our clients to understand their unique needs and budget, providing tailored solutions that are both effective and affordable. We use only the highest quality materials and equipment to ensure that every job is completed to the highest standard.</p>

                    <h2 className="fw-bold">Benefits of Choosing Us for Spray Insulation Services in Vancouver</h2>

                    <ul>

                        <li>Experienced and Professional Team</li>

                        <li>High-Quality Materials and Equipment</li>

                        <li>Customized Solutions</li>

                        <li>Affordable Pricing</li>

                        <li>Exceptional Customer Service</li>

                    </ul>



                    <h2 className="fw-bold">Contact Us</h2>

                    <p>Whether you're looking to insulate your home, office, or warehouse, Division 7 Contracting Ltd. has the expertise and knowledge to provide you with the best spray foam insulation services in Vancouver. Contact us today to schedule a consultation with one of our experts and start your journey towards a more energy-efficient and sustainable future with sprayed insulation.</p>

                </div>
            </div>
            <Footer />
        </>
    )
}

export default SprayFoam