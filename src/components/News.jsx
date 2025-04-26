import React from 'react'

import news1 from '../NewsImages/fireproofing-man.jpg'
import news2 from '../NewsImages/spraying-man.jpg'
import news3 from '../NewsImages/spray-foam.jpg'
import news4 from '../NewsImages/Insulation.jpg'

function News() {
    return (
        <>


            <div class="news-wrapper container-fluid my-5">
                <h2 class="mb-4">Latest News</h2>
                <div class="row gy-4 itemInnerContainer">
                    <div class="col-md-3">
                        <a href="/spray-foam-insulation">
                            <div class="card position-relative">
                                <img src={news1} class="card-img-top" alt="Polyurethane Spray" />
                                <div class="date-badge">26th, May 2023</div>
                                <div class="card-body">
                                    <h5 class="card-title">Polyurethane Spray: A Breakthrough Technology for Attics</h5>
                                    <div class="admin-section">
                                        <i class="fas fa-tag"></i> <span>admin</span>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div class="col-md-3">
                        <a href="/spray-foam-insulation">
                            <div class="card position-relative">
                                <img src={news3} class="card-img-top" alt="High Quality Insulation" />
                                <div class="date-badge">20th, Dec 2022</div>
                                <div class="card-body">
                                    <h5 class="card-title">High Quality and Affordable Spray Insulation from Division7 Business in Vancouver</h5>
                                    <div class="admin-section">
                                        <i class="fas fa-tag"></i> <span>admin</span>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div class="col-md-3">
                        <a href="/spray-foam-insulation">
                            <div class="card position-relative">
                                <img src={news2} class="card-img-top" alt="Premium Advantages" />
                                <div class="date-badge">29th, Nov 2022</div>
                                <div class="card-body">
                                    <h5 class="card-title">#4 Premium Advantages of Using Sprayed Insulation in Vancouver</h5>
                                    <div class="admin-section">
                                        <i class="fas fa-tag"></i> <span>admin</span>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div class="col-md-3">
                        <a href="/fireproofing">
                            <div class="card position-relative">
                                <img src={news4} class="card-img-top" alt="Parkade Insulation" />
                                <div class="date-badge">1st, Nov 2022</div>
                                <div class="card-body">
                                    <h5 class="card-title">Why Do You Need to Utilize Parkade Insulation in Vancouver?</h5>
                                    <div class="admin-section">
                                        <i class="fas fa-tag"></i> <span>admin</span>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>

        </>
    )
}

export default News