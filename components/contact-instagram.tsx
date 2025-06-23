import Link from "next/link"
import Image from "next/image"

const ContactInstagram = () => {
  // Instagram resimlerini string array olarak tanımla
  const instagramImages = [
    "/placeholder.svg?height=300&width=400",
    "/placeholder.svg?height=300&width=400",
    "/placeholder.svg?height=300&width=400",
    "/placeholder.svg?height=300&width=400",
    "/placeholder.svg?height=300&width=400",
    "/placeholder.svg?height=300&width=400",
  ]

  return (
    <div className="instagram-area">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="instagram-content">
              <h3>Follow Us On Instagram</h3>
              <p>
                Stay connected with us on Instagram for the latest updates, behind-the-scenes content, and inspiration.
              </p>
              <Link href="https://instagram.com" className="btn btn-primary">
                Follow Us
              </Link>
            </div>
          </div>
          <div className="col-lg-8">
            <div className="instagram-slider">
              <div className="row">
                {instagramImages.map((image, index) => (
                  <div key={index} className="col-md-4 col-sm-6 mb-4">
                    <div className="instagram-item">
                      <Image
                        src={image || "/placeholder.svg"}
                        alt={`Instagram post ${index + 1}`}
                        width={300}
                        height={300}
                        className="w-full h-auto rounded-lg"
                      />
                      <div className="instagram-overlay">
                        <Link href="https://instagram.com" className="instagram-link">
                          <i className="fab fa-instagram"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactInstagram
