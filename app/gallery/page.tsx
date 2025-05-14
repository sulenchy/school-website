"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import AnimatedGrid from "../components/AnimatedGrid"

const images = [
  { id: "1", src: "/placeholder.svg", alt: "School building" },
  { id: "2", src: "/placeholder.svg", alt: "Students in classroom" },
  { id: "3", src: "/placeholder.svg", alt: "Science lab" },
  { id: "4", src: "/placeholder.svg", alt: "Sports field" },
  { id: "5", src: "/placeholder.svg", alt: "Library" },
  { id: "6", src: "/placeholder.svg", alt: "Art studio" },
  { id: "7", src: "/placeholder.svg", alt: "Computer lab" },
  { id: "8", src: "/placeholder.svg", alt: "Cafeteria" },
  { id: "9", src: "/placeholder.svg", alt: "Music room" },
]

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  return (
    <div className="container mx-auto px-4 py-8 relative">
      <div className="absolute inset-0 bg-gradient-to-br from-primary-100 to-secondary-100 opacity-50 -z-10 rounded-lg"></div>
      <h1 className="text-3xl font-bold text-primary-600 mb-8">School Gallery</h1>
      <AnimatedGrid>
        {images.map((image) => (
          <motion.div
            key={image.id}
            className="relative aspect-square overflow-hidden rounded-lg shadow-lg cursor-pointer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link href={`/gallery/${image.id}`}>
              <Image
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-300 hover:scale-110"
              />
            </Link>
          </motion.div>
        ))}
      </AnimatedGrid>
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.8 }}
            className="relative w-full max-w-3xl aspect-square"
          >
            <Image src={selectedImage || "/placeholder.svg"} alt="Selected image" layout="fill" objectFit="contain" />
          </motion.div>
        </motion.div>
      )}
    </div>
  )
}

