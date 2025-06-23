"use client"
import Image from "next/image"
import Link from "next/link"

const Blog = () => {
  // Blog resimleri için string array
  const blogImages = [
    "/Blog/Web_Development.jpg?height=300&width=400",
    "/Blog/React.jpeg?height=300&width=400",
    "/Blog/CSS.jpeg?height=300&width=400",
  ]

  const blogPosts = [
    {
      id: 1,
      title: "Web Geliştirmenin Geleceği: 2024'te İzlenecek Trendler",
      excerpt:
        "Yapay zeka entegrasyonundan ilerici web uygulamalarına kadar web geliştirmenin geleceğini şekillendiren en son trendleri ve teknolojileri keşfedin.",
      author: "Mert KAYAR",
      date: "15 Mart 2024",
      category: "Web Development",
      readTime: "5 min read",
      image: blogImages[0],
    },
    {
      id: 2,
      title: "Ölçeklenebilir React Uygulamaları Oluşturma: En İyi Uygulamalar",
      excerpt:
        "İşletmenizle birlikte büyüyen, sürdürülebilir ve ölçeklenebilir React uygulamaları oluşturmak için temel teknikleri ve kalıpları öğrenin.",
      author: "Mert KAYAR",
      date: "10 Mart 2024",
      category: "React",
      readTime: "8 min read",
      image: blogImages[1],
    },
    {
      id: 3,
      title: "Daha İyi Kullanıcı Deneyimi için Modern CSS Teknikleri",
      excerpt:
        "Web sitenizin performansını ve kullanıcı deneyimini önemli ölçüde iyileştirebilecek gelişmiş CSS özelliklerini ve tekniklerini keşfedin.",
      author: "Mert KAYAR",
      date: "5 Mart 2024",
      category: "CSS",
      readTime: "6 min read",
      image: blogImages[2],
    },
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Blog</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
          <p className="text-xl text-gray-600 mt-6 max-w-2xl mx-auto">
            Teknoloji, web geliştirme ve yazılım dünyasından güncel yazılar ve deneyimlerim.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative">
                <Image
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  width={400}
                  height={250}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {post.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <span>{post.author}</span>
                  <span className="mx-2">•</span>
                  <span>{post.date}</span>
                  <span className="mx-2">•</span>
                  <span>{post.readTime}</span>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">{post.title}</h3>

                <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>

                {post.id === 1 ? (
                  <a
                    href="https://developer.mozilla.org/en-US/docs/Web"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium transition-colors"
                  >
                    Devamını Oku
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                ) : post.id === 2 ? (
                  <a
                    href="https://react.dev/learn"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium transition-colors"
                  >
                    Devamını Oku
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                ) : post.id === 3 ? (
                  <a
                    href="https://www.w3schools.com/w3css/default.asp"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium transition-colors"
                  >
                    Devamını Oku
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                ) : (
                  <Link
                    href={`/blog/${post.id}`}
                    className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium transition-colors"
                  >
                    Devamını Oku
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Blog
