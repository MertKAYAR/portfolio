"use client"
import Image from "next/image"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const BannerVideo = () => {
  // Icon ve diğer görseller için string array
  const iconImage = "/placeholder.svg?height=300&width=400"

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  }

  const bannerSlides = [
    {
      id: 1,
      title: "Creative Digital Agency",
      subtitle: "We Create Amazing Digital Experiences",
      description: "Transform your business with our innovative digital solutions and creative strategies.",
      buttonText: "Get Started",
    },
    {
      id: 2,
      title: "Professional Web Development",
      subtitle: "Building Modern Web Solutions",
      description: "Custom web applications built with the latest technologies and best practices.",
      buttonText: "View Portfolio",
    },
    {
      id: 3,
      title: "Digital Marketing Excellence",
      subtitle: "Grow Your Business Online",
      description: "Comprehensive digital marketing strategies to boost your online presence.",
      buttonText: "Learn More",
    },
  ]

  return (
    <div className="banner-area banner-area-1 bg-relative">
      <div className="banner-bg-img" style={{ backgroundImage: "url('/placeholder.svg?height=600&width=1200')" }}>
        <div className="container">
          <div className="banner-inner">
            <Slider {...sliderSettings}>
              {bannerSlides.map((slide) => (
                <div key={slide.id} className="banner-slide">
                  <div className="row align-items-center">
                    <div className="col-lg-6">
                      <div className="banner-content">
                        <h6 className="sub-title">{slide.title}</h6>
                        <h1 className="title">{slide.subtitle}</h1>
                        <p className="content">{slide.description}</p>
                        <div className="btn-wrap">
                          <a className="btn btn-base" href="#contact">
                            {slide.buttonText}
                          </a>
                          <a className="btn btn-border-white" href="#about">
                            Learn More
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="banner-thumb">
                        <div className="main-thumb">
                          <Image
                            src="/placeholder.svg?height=500&width=600"
                            alt="Banner"
                            width={600}
                            height={500}
                            className="w-full h-auto"
                          />
                        </div>
                        <div className="icon-thumb">
                          <Image
                            src={iconImage || "/placeholder.svg"}
                            alt="Icon"
                            width={60}
                            height={60}
                            className="w-15 h-15"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>

      {/* Video Modal Trigger */}
      <div className="video-area">
        <div className="container">
          <div className="video-inner text-center">
            <a
              className="video-play-btn"
              href="#"
              onClick={(e) => {
                e.preventDefault()
                // Video modal açma logic'i buraya gelecek
                console.log("Video modal açılacak")
              }}
            >
              <i className="fa fa-play"></i>
            </a>
            <h5>Watch Our Story</h5>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BannerVideo
