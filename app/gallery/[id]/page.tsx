"use client"

import { useState, useEffect, use } from "react"
import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"

// This would typically come from a database or API
const images = [
  {
    id: "1",
    src: "/placeholder.svg?height=800&width=1200",
    alt: "School building exterior",
    title: "Main School Building",
    description:
      "Our beautiful main building houses classrooms, administrative offices, and the library. Built in 1985 and renovated in 2020, it represents the perfect blend of traditional architecture and modern functionality.",
    category: "Campus",
    tags: ["building", "exterior", "campus", "architecture"],
    date: "2024-01-15",
    photographer: "School Photography Club",
    camera: "Canon EOS R5",
    settings: "f/8, 1/125s, ISO 100",
    location: "Main Campus Entrance",
  },
  {
    id: "2",
    src: "/placeholder.svg?height=800&width=1200",
    alt: "Students in classroom",
    title: "Interactive Learning Session",
    description:
      "Students engaged in collaborative learning in our modern classrooms. This photo captures the essence of our student-centered approach to education, where collaboration and critical thinking are at the forefront.",
    category: "Academics",
    tags: ["students", "classroom", "learning", "collaboration", "education"],
    date: "2024-01-20",
    photographer: "Ms. Johnson",
    camera: "Sony A7 III",
    settings: "f/2.8, 1/60s, ISO 800",
    location: "Room 205, Academic Building",
  },
  // Add more images as needed...
]

export default function GalleryItem({ params }: { params: Promise<{ id: string }> }) {
  const {id } = use(params)
  const [image, setImage] = useState<(typeof images)[0] | null>(null)
  const [relatedImages, setRelatedImages] = useState<typeof images>([])

  useEffect(() => {
    const foundImage = images.find((img) => img.id === id)
    if (foundImage) {
      setImage(foundImage)
      // Get related images from the same category
      const related = images.filter((img) => img.id !== id && img.category === foundImage.category).slice(0, 4)
      setRelatedImages(related)
    } else {
      notFound()
    }
  }, [id])

  if (!image) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary-600"></div>
      </div>
    )
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  }

  const getCategoryColor = (category: string) => {
    const colors = {
      Campus: "bg-primary-100 text-primary-600",
      Academics: "bg-blue-100 text-blue-600",
      Facilities: "bg-green-100 text-green-600",
      Sports: "bg-orange-100 text-orange-600",
      Arts: "bg-purple-100 text-purple-600",
      Events: "bg-secondary-100 text-secondary-600",
    }
    return colors[category as keyof typeof colors] || "bg-gray-100 text-gray-600"
  }

  return (
    <div className="max-w-6xl mx-auto">
      {/* Breadcrumb */}
      <nav className="mb-6">
        <Link href="/gallery" className="text-primary-600 hover:text-primary-700 transition-colors">
          ← Back to Gallery
        </Link>
      </nav>

      {/* Image Header */}
      <header className="mb-8">
        <div className="flex items-center gap-2 mb-4">
          <span className={`px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(image.category)}`}>
            {image.category}
          </span>
        </div>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">{image.title}</h1>
        <div className="flex items-center text-gray-600 text-sm gap-4">
          <span>Photo by {image.photographer}</span>
          <span>•</span>
          <span>{formatDate(image.date)}</span>
          <span>•</span>
          <span>{image.location}</span>
        </div>
      </header>

      {/* Main Image */}
      <div className="relative mb-8 rounded-lg overflow-hidden shadow-lg">
        <Image
          src={image.src || "/placeholder.svg"}
          alt={image.alt}
          width={1200}
          height={800}
          objectFit="cover"
          className="w-full h-auto"
        />
      </div>

      {/* Image Details Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
        {/* Description */}
        <div className="lg:col-span-2">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Description</h2>
          <p className="text-gray-700 leading-relaxed mb-6">{image.description}</p>

          {/* Tags */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Tags</h3>
            <div className="flex flex-wrap gap-2">
              {image.tags.map((tag) => (
                <span key={tag} className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm">
                  #{tag}
                </span>
              ))}
            </div>
          </div>

          {/* Actions */}
          <div className="flex gap-3">
            <button className="bg-primary-600 text-white px-6 py-2 rounded-lg hover:bg-primary-700 transition-colors">
              Download High-Res
            </button>
            <button className="bg-gray-200 text-gray-700 px-6 py-2 rounded-lg hover:bg-gray-300 transition-colors">
              Share
            </button>
            <button className="bg-gray-200 text-gray-700 px-6 py-2 rounded-lg hover:bg-gray-300 transition-colors">
              Add to Favorites
            </button>
          </div>
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-1">
          <div className="bg-gray-50 rounded-lg p-6 sticky top-24">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Photo Details</h3>

            <div className="space-y-4">
              <div>
                <h4 className="font-medium text-gray-900">Photographer</h4>
                <p className="text-gray-600">{image.photographer}</p>
              </div>

              <div>
                <h4 className="font-medium text-gray-900">Date Taken</h4>
                <p className="text-gray-600">{formatDate(image.date)}</p>
              </div>

              <div>
                <h4 className="font-medium text-gray-900">Location</h4>
                <p className="text-gray-600">{image.location}</p>
              </div>

              <div>
                <h4 className="font-medium text-gray-900">Category</h4>
                <span className={`inline-block px-2 py-1 rounded-full text-sm ${getCategoryColor(image.category)}`}>
                  {image.category}
                </span>
              </div>

              {image.camera && (
                <div>
                  <h4 className="font-medium text-gray-900">Camera</h4>
                  <p className="text-gray-600">{image.camera}</p>
                </div>
              )}

              {image.settings && (
                <div>
                  <h4 className="font-medium text-gray-900">Settings</h4>
                  <p className="text-gray-600">{image.settings}</p>
                </div>
              )}
            </div>

            {/* Share Section */}
            <div className="mt-6 pt-6 border-t border-gray-200">
              <h4 className="font-medium text-gray-900 mb-3">Share this photo</h4>
              <div className="flex gap-2">
                <button className="flex-1 bg-blue-600 text-white py-2 px-3 rounded text-sm hover:bg-blue-700 transition-colors">
                  Facebook
                </button>
                <button className="flex-1 bg-blue-400 text-white py-2 px-3 rounded text-sm hover:bg-blue-500 transition-colors">
                  Twitter
                </button>
                <button className="flex-1 bg-gray-600 text-white py-2 px-3 rounded text-sm hover:bg-gray-700 transition-colors">
                  Copy Link
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Related Images */}
      {relatedImages.length > 0 && (
        <div className="mt-12 pt-8 border-t border-gray-200">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">More from {image.category}</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {relatedImages.map((relatedImage) => (
              <Link
                key={relatedImage.id}
                href={`/gallery/${relatedImage.id}`}
                className="group block bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                <div className="relative aspect-square overflow-hidden">
                  <Image
                    src={relatedImage.src || "/placeholder.svg"}
                    alt={relatedImage.alt}
                    width={1200}
                    height={800}
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <div className="p-3">
                  <h4 className="font-medium text-gray-900 mb-1 line-clamp-1">{relatedImage.title}</h4>
                  <p className="text-sm text-gray-600">{relatedImage.photographer}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
