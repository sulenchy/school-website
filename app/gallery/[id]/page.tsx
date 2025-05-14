"use client"

import { useState, useEffect } from "react"
import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"

// This would typically come from a database or API
const images = [
  {
    id: "1",
    src: "/placeholder.svg",
    alt: "School building",
    description: "Our main school building, a state-of-the-art facility designed to inspire learning and creativity.",
  },
  {
    id: "2",
    src: "/placeholder.svg",
    alt: "Students in classroom",
    description: "Students engaged in an interactive learning session in one of our modern classrooms.",
  },
  {
    id: "3",
    src: "/placeholder.svg",
    alt: "Science lab",
    description:
      "Our fully equipped science lab, where students conduct experiments and explore the wonders of science.",
  },
  {
    id: "4",
    src: "/placeholder.svg",
    alt: "Sports field",
    description:
      "The school's expansive sports field, home to numerous athletic events and physical education classes.",
  },
  {
    id: "5",
    src: "/placeholder.svg",
    alt: "Library",
    description:
      "Our extensive library, a quiet haven for study and research, housing thousands of books and digital resources.",
  },
  {
    id: "6",
    src: "/placeholder.svg",
    alt: "Art studio",
    description: "The art studio, a creative space where students explore various forms of visual arts.",
  },
  {
    id: "7",
    src: "/placeholder.svg",
    alt: "Computer lab",
    description: "Our state-of-the-art computer lab, equipped with the latest technology to support digital learning.",
  },
  {
    id: "8",
    src: "/placeholder.svg",
    alt: "Cafeteria",
    description: "The school cafeteria, a vibrant space where students enjoy nutritious meals and socialize.",
  },
  {
    id: "9",
    src: "/placeholder.svg",
    alt: "Music room",
    description: "Our music room, filled with a variety of instruments to support our comprehensive music program.",
  },
]

export default function GalleryItem({ params }: { params: { id: string } }) {
  const [image, setImage] = useState<(typeof images)[0] | null>(null)

  useEffect(() => {
    const foundImage = images.find((img) => img.id === params.id)
    if (foundImage) {
      setImage(foundImage)
    } else {
      notFound()
    }
  }, [params.id])

  if (!image) {
    return null // or a loading spinner
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-3xl mx-auto">
        <div className="relative aspect-video mb-6">
          <Image
            src={image.src || "/placeholder.svg"}
            alt={image.alt}
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
        <h1 className="text-3xl font-bold text-primary-600 mb-4">{image.alt}</h1>
        <p className="text-gray-700 mb-6">{image.description}</p>
        <Link href="/gallery" className="text-secondary-600 hover:text-secondary-700 transition-colors">
          &larr; Back to Gallery
        </Link>
      </div>
    </div>
  )
}

