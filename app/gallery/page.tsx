"use client"

import { useState, useMemo } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

const images = [
  {
    id: "1",
    src: "/placeholder.svg?height=400&width=600",
    alt: "School building exterior",
    title: "Main School Building",
    description: "Our beautiful main building houses classrooms, administrative offices, and the library.",
    category: "Campus",
    tags: ["building", "exterior", "campus", "architecture"],
    date: "2024-01-15",
    photographer: "School Photography Club",
  },
  {
    id: "2",
    src: "/placeholder.svg?height=400&width=600",
    alt: "Students in classroom",
    title: "Interactive Learning Session",
    description: "Students engaged in collaborative learning in our modern classrooms.",
    category: "Academics",
    tags: ["students", "classroom", "learning", "collaboration", "education"],
    date: "2024-01-20",
    photographer: "Ms. Johnson",
  },
  {
    id: "3",
    src: "/placeholder.svg?height=400&width=600",
    alt: "Science laboratory",
    title: "Advanced Science Lab",
    description: "State-of-the-art laboratory equipment for hands-on scientific exploration.",
    category: "Facilities",
    tags: ["science", "laboratory", "equipment", "experiments", "STEM"],
    date: "2024-01-18",
    photographer: "Dr. Smith",
  },
  {
    id: "4",
    src: "/placeholder.svg?height=400&width=600",
    alt: "Sports field during game",
    title: "Championship Game",
    description: "Our varsity team competing in the regional championship.",
    category: "Sports",
    tags: ["sports", "field", "game", "championship", "athletics", "students"],
    date: "2024-01-25",
    photographer: "Athletics Department",
  },
  {
    id: "5",
    src: "/placeholder.svg?height=400&width=600",
    alt: "Library reading area",
    title: "Modern Library Space",
    description: "Comfortable reading areas with natural lighting and modern furniture.",
    category: "Facilities",
    tags: ["library", "reading", "books", "study", "quiet", "modern"],
    date: "2024-01-12",
    photographer: "Library Staff",
  },
  {
    id: "6",
    src: "/placeholder.svg?height=400&width=600",
    alt: "Art studio with student work",
    title: "Creative Art Studio",
    description: "Students' artwork displayed in our vibrant art studio.",
    category: "Arts",
    tags: ["art", "studio", "creativity", "paintings", "students", "artwork"],
    date: "2024-01-22",
    photographer: "Art Department",
  },
  {
    id: "7",
    src: "/placeholder.svg?height=400&width=600",
    alt: "Computer lab with students",
    title: "Technology Center",
    description: "Students learning coding and digital skills in our computer lab.",
    category: "Academics",
    tags: ["technology", "computers", "coding", "digital", "students", "learning"],
    date: "2024-01-28",
    photographer: "IT Department",
  },
  {
    id: "8",
    src: "/placeholder.svg?height=400&width=600",
    alt: "Cafeteria during lunch",
    title: "Community Dining",
    description: "Students enjoying healthy meals and socializing in our cafeteria.",
    category: "Campus",
    tags: ["cafeteria", "lunch", "food", "social", "community", "students"],
    date: "2024-01-30",
    photographer: "Cafeteria Staff",
  },
  {
    id: "9",
    src: "/placeholder.svg?height=400&width=600",
    alt: "Music room with instruments",
    title: "Music Performance Hall",
    description: "Our music room equipped with various instruments for student performances.",
    category: "Arts",
    tags: ["music", "instruments", "performance", "band", "orchestra", "arts"],
    date: "2024-02-02",
    photographer: "Music Department",
  },
]

const categories = ["All", "Campus", "Academics", "Facilities", "Sports", "Arts", "Events"]

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [viewMode, setViewMode] = useState<"grid" | "masonry">("grid")
  const [sortBy, setSortBy] = useState<"date" | "title" | "category">("date")
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("desc")

  // Filter and search functionality
  const filteredImages = useMemo(() => {
    let filtered = images

    // Filter by category
    if (selectedCategory !== "All") {
      filtered = filtered.filter((image) => image.category === selectedCategory)
    }

    // Filter by search query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase()
      filtered = filtered.filter(
        (image) =>
          image.title.toLowerCase().includes(query) ||
          image.description.toLowerCase().includes(query) ||
          image.tags.some((tag) => tag.toLowerCase().includes(query)) ||
          image.category.toLowerCase().includes(query) ||
          image.photographer.toLowerCase().includes(query),
      )
    }

    // Sort images
    filtered.sort((a, b) => {
      let comparison = 0
      switch (sortBy) {
        case "date":
          comparison = new Date(a.date).getTime() - new Date(b.date).getTime()
          break
        case "title":
          comparison = a.title.localeCompare(b.title)
          break
        case "category":
          comparison = a.category.localeCompare(b.category)
          break
      }
      return sortOrder === "asc" ? comparison : -comparison
    })

    return filtered
  }, [selectedCategory, searchQuery, sortBy, sortOrder])

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
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

  const clearFilters = () => {
    setSelectedCategory("All")
    setSearchQuery("")
  }

  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  }

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-100 to-secondary-100 py-12 mb-8">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl font-bold text-primary-600 mb-4">School Gallery</h1>
            <p className="text-xl text-secondary-600">Explore moments and memories from Acme School</p>
          </motion.div>
        </div>
      </section>

      <div className="container mx-auto px-4">
        {/* Search and Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8"
        >
          {/* Search Bar */}
          <div className="mb-6">
            <div className="relative max-w-md mx-auto">
              <input
                type="text"
                placeholder="Search photos by title, description, tags, or photographer..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
              <svg
                className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
          </div>

          {/* Filters and Controls */}
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full transition-all duration-300 ${
                    selectedCategory === category
                      ? "bg-primary-600 text-white shadow-lg"
                      : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Controls */}
            <div className="flex items-center gap-4">
              {/* Sort Controls */}
              <div className="flex items-center gap-2">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as "date" | "title" | "category")}
                  className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                >
                  <option value="date">Sort by Date</option>
                  <option value="title">Sort by Title</option>
                  <option value="category">Sort by Category</option>
                </select>
                <button
                  onClick={() => setSortOrder(sortOrder === "asc" ? "desc" : "asc")}
                  className="p-2 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
                  title={`Sort ${sortOrder === "asc" ? "Descending" : "Ascending"}`}
                >
                  <svg
                    className={`w-4 h-4 transition-transform ${sortOrder === "desc" ? "rotate-180" : ""}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                  </svg>
                </button>
              </div>

              {/* View Mode Toggle */}
              <div className="flex items-center gap-1 border border-gray-300 rounded-md">
                <button
                  onClick={() => setViewMode("grid")}
                  className={`p-2 rounded-l-md transition-colors ${
                    viewMode === "grid" ? "bg-primary-600 text-white" : "bg-white text-gray-600 hover:bg-gray-50"
                  }`}
                  title="Grid View"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                  </svg>
                </button>
                <button
                  onClick={() => setViewMode("masonry")}
                  className={`p-2 rounded-r-md transition-colors ${
                    viewMode === "masonry" ? "bg-primary-600 text-white" : "bg-white text-gray-600 hover:bg-gray-50"
                  }`}
                  title="Masonry View"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M3 4a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm8 0a1 1 0 011-1h4a1 1 0 011 1v2a1 1 0 01-1 1h-4a1 1 0 01-1-1V4zM3 12a1 1 0 011-1h4a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1v-2zm8-1a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1v-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Active Filters Display */}
          {(selectedCategory !== "All" || searchQuery.trim()) && (
            <div className="mt-4 flex items-center gap-2 flex-wrap">
              <span className="text-sm text-gray-600">Active filters:</span>
              {selectedCategory !== "All" && (
                <span className="inline-flex items-center gap-1 px-3 py-1 bg-primary-100 text-primary-600 rounded-full text-sm">
                  Category: {selectedCategory}
                  <button
                    onClick={() => setSelectedCategory("All")}
                    className="ml-1 hover:text-primary-800"
                    title="Remove filter"
                  >
                    ×
                  </button>
                </span>
              )}
              {searchQuery.trim() && (
                <span className="inline-flex items-center gap-1 px-3 py-1 bg-secondary-100 text-secondary-600 rounded-full text-sm">
                  Search: &quot;{searchQuery}&quot;
                  <button
                    onClick={() => setSearchQuery("")}
                    className="ml-1 hover:text-secondary-800"
                    title="Remove filter"
                  >
                    ×
                  </button>
                </span>
              )}
              <button onClick={clearFilters} className="text-sm text-gray-500 hover:text-gray-700 underline">
                Clear all filters
              </button>
            </div>
          )}
        </motion.div>

        {/* Results Count */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-6"
        >
          <p className="text-gray-600">
            Showing {filteredImages.length} of {images.length} photos
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-12"
        >
          {filteredImages.length > 0 ? (
            viewMode === "grid" ? (
              <motion.div
                className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4"
                variants={container}
                initial="hidden"
                animate="visible"
              >
                {filteredImages.map((image) => (
                  <motion.div
                    key={image.id}
                    variants={item}
                    className="relative group cursor-pointer bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
                    whileHover={{ y: -5 }}
                    onClick={() => setSelectedImage(image.id)}
                  >
                    <div className="relative aspect-square overflow-hidden">
                      <Image
                        src={image.src || "/placeholder.svg"}
                        alt={image.alt}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300" />
                      <div className="absolute top-3 left-3">
                        <span
                          className={`px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(image.category)}`}
                        >
                          {image.category}
                        </span>
                      </div>
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold text-gray-900 mb-1 line-clamp-1">{image.title}</h3>
                      <p className="text-sm text-gray-600 mb-2 line-clamp-2">{image.description}</p>
                      <div className="flex justify-between items-center text-xs text-gray-500">
                        <span>{formatDate(image.date)}</span>
                        <span>{image.photographer}</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            ) : (
              <div className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4">
                {filteredImages.map((image, index) => (
                  <motion.div
                    key={image.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="relative group cursor-pointer bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 break-inside-avoid mb-4"
                    onClick={() => setSelectedImage(image.id)}
                  >
                    <div className="relative">
                      <Image
                        src={image.src || "/placeholder.svg"}
                        alt={image.alt}
                        className="w-full h-auto transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300" />
                      <div className="absolute top-3 left-3">
                        <span
                          className={`px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(image.category)}`}
                        >
                          {image.category}
                        </span>
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold text-gray-900 mb-1">{image.title}</h3>
                      <p className="text-sm text-gray-600 mb-2">{image.description}</p>
                      <div className="flex justify-between items-center text-xs text-gray-500">
                        <span>{formatDate(image.date)}</span>
                        <span>{image.photographer}</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            )
          ) : (
            <div className="text-center py-12">
              <svg
                className="w-16 h-16 text-gray-400 mx-auto mb-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              <h3 className="text-lg font-medium text-gray-900 mb-2">No photos found</h3>
              <p className="text-gray-500 mb-4">Try adjusting your search terms or filters.</p>
              <button
                onClick={clearFilters}
                className="bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition-colors"
              >
                Clear Filters
              </button>
            </div>
          )}
        </motion.div>

        {/* Image Modal */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4"
              onClick={() => setSelectedImage(null)}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                className="relative max-w-4xl max-h-full bg-white rounded-lg overflow-hidden"
                onClick={(e) => e.stopPropagation()}
              >
                {(() => {
                  const image = images.find((img) => img.id === selectedImage)
                  if (!image) return null

                  return (
                    <>
                      <div className="relative">
                        <Image
                          src={image.src || "/placeholder.svg"}
                          alt={image.alt}
                          width={800}
                          height={600}
                          className="w-full h-auto max-h-[70vh] object-contain"
                        />
                        <button
                          onClick={() => setSelectedImage(null)}
                          className="absolute top-4 right-4 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition-colors"
                        >
                          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M6 18L18 6M6 6l12 12"
                            />
                          </svg>
                        </button>
                      </div>
                      <div className="p-6">
                        <div className="flex items-center gap-2 mb-3">
                          <span
                            className={`px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(image.category)}`}
                          >
                            {image.category}
                          </span>
                        </div>
                        <h2 className="text-2xl font-bold text-gray-900 mb-2">{image.title}</h2>
                        <p className="text-gray-600 mb-4">{image.description}</p>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {image.tags.map((tag) => (
                            <span key={tag} className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-sm">
                              #{tag}
                            </span>
                          ))}
                        </div>
                        <div className="flex justify-between items-center text-sm text-gray-500">
                          <span>Photo by {image.photographer}</span>
                          <span>{formatDate(image.date)}</span>
                        </div>
                        <div className="mt-4 flex gap-2">
                          <Link
                            href={`/gallery/${image.id}`}
                            className="bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition-colors"
                          >
                            View Details
                          </Link>
                          <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-300 transition-colors">
                            Download
                          </button>
                        </div>
                      </div>
                    </>
                  )
                })()}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}
