import Image from "next/image"
import Link from "next/link"

const AboutUsOne = () => {
  // About resimleri için string array
  const aboutImages = [
    "/placeholder.svg?height=300&width=400",
    "/placeholder.svg?height=300&width=400",
    "/placeholder.svg?height=300&width=400",
    "/placeholder.svg?height=300&width=400",
  ]

  return (
    <div className="about-area pd-top-120 pd-bottom-90">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="about-thumb-wrap">
              <div className="about-thumb-inner">
                <div className="thumb">
                  <Image
                    src={aboutImages[0] || "/placeholder.svg"}
                    alt="About us"
                    width={300}
                    height={400}
                    className="w-full h-auto"
                  />
                </div>
                <div className="thumb">
                  <Image
                    src={aboutImages[1] || "/placeholder.svg"}
                    alt="About us"
                    width={300}
                    height={400}
                    className="w-full h-auto"
                  />
                </div>
                <div className="thumb">
                  <Image
                    src={aboutImages[2] || "/placeholder.svg"}
                    alt="About us"
                    width={300}
                    height={400}
                    className="w-full h-auto"
                  />
                </div>
                <div className="thumb">
                  <Image
                    src={aboutImages[3] || "/placeholder.svg"}
                    alt="About us"
                    width={300}
                    height={400}
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="about-inner">
              <div className="section-title mb-0">
                <h6 className="sub-title">ABOUT US</h6>
                <h2 className="title">We Are Leading Digital Marketing Agency.</h2>
                <p className="content">
                  We help businesses grow through innovative digital marketing strategies. Our team of experts
                  specializes in creating compelling campaigns that drive results and maximize ROI.
                </p>
                <div className="row">
                  <div className="col-sm-6">
                    <div className="single-list-inner style-check style-check-2">
                      <ul>
                        <li>Digital Strategy</li>
                        <li>SEO Optimization</li>
                        <li>Social Media Marketing</li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="single-list-inner style-check style-check-2">
                      <ul>
                        <li>Content Creation</li>
                        <li>PPC Advertising</li>
                        <li>Analytics & Reporting</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <Link className="btn btn-border-base" href="/about">
                  Learn More About Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutUsOne
