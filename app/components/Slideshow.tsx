"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"

interface Slide {
  id: number
  image: string
  title: string
  subtitle: string
  description: string
}

const slides: Slide[] = [
  {
    id: 1,
    image: "/assets/images/uploads/whatsapp-image-2024-12-22-at-2.26.40-pm-1-.jpeg",
    title: "Welcome to Moslem Comprehensive High School",
    subtitle: "Perseverance wins the success",
    description: "Empowering minds and shaping futures since 1950",
  },
  {
    id: 2,
    image: "/assets/images/uploads/whatsapp-image-2025-05-28-at-7.03.24-pm.jpeg",
    title: "MOSCOSA National Body",
    subtitle: "",
    description: "At the meeting held few days to the 70th Anniversary",
  },
  // {
  //   id: 3,
  //   image: "/placeholder.svg?height=600&width=1200",
  //   title: "Arts & Culture",
  //   subtitle: "Creative Expression",
  //   description: "Nurturing creativity through music, art, and performing arts programs",
  // },
  // {
  //   id: 4,
  //   image: "/placeholder.svg?height=600&width=1200",
  //   title: "Sports Excellence",
  //   subtitle: "Building Champions",
  //   description: "Developing teamwork, leadership, and athletic skills",
  // },
]

export default function Slideshow() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000) // Change slide every 5 seconds

    return () => clearInterval(timer)
  }, [])

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  return (
    <div className="relative w-full h-96 md:h-[500px] overflow-hidden rounded-lg shadow-lg">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, x: 300 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -300 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0"
        >
          <Image
            src={slides[currentSlide].image || "/placeholder.svg"}
            alt={slides[currentSlide].title}
            layout="fill"
            objectFit="cover"
            className="brightness-75"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />

          {/* Content */}
          <div className="absolute inset-0 flex items-center justify-start p-8 md:p-12">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-white max-w-lg"
            >
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="text-3xl md:text-5xl font-bold mb-2 text-white"
              >
                {slides[currentSlide].title}
              </motion.h2>

              <motion.h3
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="text-xl md:text-2xl font-semibold mb-4 text-secondary-200"
              >
                {slides[currentSlide].subtitle}
              </motion.h3>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="text-lg text-gray-200"
              >
                {slides[currentSlide].description}
              </motion.p>
            </motion.div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Arrows */}
      <button
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-colors"
        aria-label="Previous slide"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-colors"
        aria-label="Next slide"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentSlide ? "bg-white" : "bg-white/50 hover:bg-white/75"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
