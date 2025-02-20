
'use client'
import Link from "next/link"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 1,
    loop: true,
    effect: "fade",
    pagination: {
    el: "#main-slider-pagination",
    type: "bullets",
    clickable: true
    },
    navigation: {
    nextEl: "#main-slider__swiper-button-next",
    prevEl: "#main-slider__swiper-button-prev"
    },
    autoplay: {
        delay: 8000
    }
}

export default function Banner() {
    return (
       
        <>
        {/* banner-one */}
        <section className="main-slider">
            <Swiper {...swiperOptions} className="swiper-container thm-swiper__slider">
            <div className="swiper-wrapper">
              <SwiperSlide className="swiper-slide">
                <div
                  className="main-slider__bg"
                  style={{ backgroundImage: "url(./assets/images/allimgs/banner/banner1.webp)" }}
                />
                {/* <div className="main-slider__shape-1" />
                <div className="main-slider__shape-2" />
                <div className="main-slider__shape-3" />
                <div className="main-slider__shape-4" /> */}
                <div className="container">
                  <div className="row">
                    <div className="col-xl-12">
                      <div className="main-slider__content">
                        <div className="main-slider__sub-title-box">
                          <div className="main-slider__sub-title-icon">
                           
                          </div>
                          {/* <p className="main-slider__sub-title">DELCO</p> */}
                        </div>
                        {/* <h2 className="main-slider__title">
                        Achieving highest <br /> standards <span> of quality </span> <br /> reliability, trust<br />an <span>satisfaction</span>
                        </h2> */}
                        {/* <p className="main-slider__text">
                          We have been operating for over a decade, providing top-notch
                          services to <br /> our clients and building a strong track record in
                          the industry.
                        </p> */}
                        <div className="main-slider__btn-and-call-box">
                          {/* <div className="main-slider__btn-box">
                            <Link href="/services" className="thm-btn main-slider__btn">
                             Our Services
                              <span />
                            </Link>
                          </div> */}
                         
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>


               <SwiperSlide className="swiper-slide">
                <div
                  className="main-slider__bg"
                  style={{ backgroundImage: "url(./assets/images/allimgs/banner/banner1.webp)" }}
                />
                {/* <div className="main-slider__shape-1" />
                <div className="main-slider__shape-2" />
                <div className="main-slider__shape-3" />
                <div className="main-slider__shape-4" /> */}
                <div className="container">
                  <div className="row">
                    <div className="col-xl-12">
                      <div className="main-slider__content">
                        <div className="main-slider__sub-title-box">
                          <div className="main-slider__sub-title-icon">
                           
                          </div>
                          {/* <p className="main-slider__sub-title">DELCO</p> */}
                        </div>
                        {/* <h2 className="main-slider__title">
                        Achieving highest <br /> standards <span> of quality </span> <br /> reliability, trust<br />an <span>satisfaction</span>
                        </h2> */}
                        {/* <p className="main-slider__text">
                          We have been operating for over a decade, providing top-notch
                          services to <br /> our clients and building a strong track record in
                          the industry.
                        </p> */}
                        <div className="main-slider__btn-and-call-box">
                          {/* <div className="main-slider__btn-box">
                            <Link href="/services" className="thm-btn main-slider__btn">
                             Our Services
                              <span />
                            </Link>
                          </div> */}
                         
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
{/* second */}
              {/* <SwiperSlide className="swiper-slide">
                <div
                  className="main-slider__bg"
                  style={{ backgroundImage: "url(./assets/images/allimgs/banner/Banner2.webp)" }}
                />
                <div className="main-slider__shape-1" />
                <div className="main-slider__shape-2" />
                <div className="main-slider__shape-3" />
                <div className="main-slider__shape-4" />
                <div className="container">
                  <div className="row">
                    <div className="col-xl-12">
                      <div className="main-slider__content">
                        <div className="main-slider__sub-title-box">
                         
                        </div>
                        <h2 className="main-slider__title">
                        Our commitment <span>to excellence,</span> <br />  <span>reliability, </span> and customer <br/>satisfaction sets us apart <br/>in the <span>competitive market</span>  
                        </h2>
                     
                        <div className="main-slider__btn-and-call-box">
                          <div className="main-slider__btn-box">
                            <Link href="/about" className="thm-btn main-slider__btn">
                              Read more
                              <span />
                            </Link>
                          </div>
                        
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide> */}
{/* second */}


            
            
            </div>
          </Swiper>
          <div className="swiper-pagination" id="main-slider-pagination" />

        </section>
        {/* banner-one */}
      </>
    )
}
