import Image from "next/image"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay } from "swiper/modules"
import "swiper/css"

const ContactClientThree = () => {
  // Placeholder URL'leri string olarak tanımla
  const clientImages = [
    "/placeholder.svg?height=300&width=400",
    "/placeholder.svg?height=300&width=400",
    "/placeholder.svg?height=300&width=400",
    "/placeholder.svg?height=300&width=400",
    "/placeholder.svg?height=300&width=400",
    "/placeholder.svg?height=300&width=400",
  ]

  return (
    <div className="client-area pd-top-120 pd-bottom-90">
      <div className="container text-center">
        <h2>We worked with global largest brands</h2>
      </div>
      <div className="container">
        <Swiper
          spaceBetween={0}
          slidesPerView={2}
          pagination={false}
          loop={true}
          navigation={false}
          className="client-slider"
          modules={[Autoplay]}
          autoplay={{
            delay: 9000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            600: {
              slidesPerView: 3,
            },
            800: {
              slidesPerView: 4,
            },
            1100: {
              slidesPerView: 5,
            },
          }}
        >
          {/* İlk set */}
          {clientImages.map((image, index) => (
            <SwiperSlide key={`first-${index}`}>
              <div className="thumb">
                <Image src={image || "/placeholder.svg"} alt={`Client ${index + 1}`} width={300} height={400} />
              </div>
            </SwiperSlide>
          ))}

          {/* İkinci set (loop için) */}
          {clientImages.map((image, index) => (
            <SwiperSlide key={`second-${index}`}>
              <div className="thumb">
                <Image src={image || "/placeholder.svg"} alt={`Client ${index + 1}`} width={300} height={400} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  )
}

export default ContactClientThree
