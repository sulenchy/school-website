"use client"

import { useState, useMemo } from "react"
import { motion } from "framer-motion"
import Image from "next/image"

// This would typically come from a database or API
const alumniDirectory = [
  {
    id: "1",
    name: "Dr. Sarah Chen",
    graduationYear: "2010",
    currentPosition: "Chief Technology Officer",
    company: "TechCorp Industries",
    image: "/placeholder.svg?height=150&width=150",
    field: "Technology",
    location: "San Francisco, CA",
    email: "sarah.chen@example.com",
    linkedin: "linkedin.com/in/sarahchen",
    bio: "Leading AI innovation in healthcare technology.",
  },
  {
    id: "2",
    name: "Marcus Rodriguez",
    graduationYear: "2008",
    currentPosition: "Olympic Gold Medalist",
    company: "USA Swimming Team",
    image: "/placeholder.svg?height=150&width=150",
    field: "Sports",
    location: "Colorado Springs, CO",
    email: "marcus.rodriguez@example.com",
    linkedin: "linkedin.com/in/marcusrodriguez",
    bio: "Three-time Olympic gold medalist and swimming coach.",
  },
  {
    id: "3",
    name: "Dr. Emily Watson",
    graduationYear: "2012",
    currentPosition: "Pediatric Surgeon",
    company: "Children's Hospital",
    image: "/placeholder.svg?height=150&width=150",
    field: "Healthcare",
    location: "Boston, MA",
    email: "emily.watson@example.com",
    linkedin: "linkedin.com/in/emilywatson",
    bio: "Specializing in minimally invasive pediatric surgery.",
  },
  {
    id: "4",
    name: "James Thompson",
    graduationYear: "2015",
    currentPosition: "Software Engineer",
    company: "Google",
    image: "/placeholder.svg?height=150&width=150",
    field: "Technology",
    location: "Mountain View, CA",
    email: "james.thompson@example.com",
    linkedin: "linkedin.com/in/jamesthompson",
    bio: "Working on machine learning and AI systems.",
  },
  {
    id: "5",
    name: "Lisa Park",
    graduationYear: "2009",
    currentPosition: "Marketing Director",
    company: "Creative Agency Inc.",
    image: "/placeholder.svg?height=150&width=150",
    field: "Business",
    location: "New York, NY",
    email: "lisa.park@example.com",
    linkedin: "linkedin.com/in/lisapark",
    bio: "Leading digital marketing strategies for Fortune 500 companies.",
  },
  {
    id: "6",
    name: "Michael Davis",
    graduationYear: "2011",
    currentPosition: "High School Principal",
    company: "Lincoln High School",
    image: "/placeholder.svg?height=150&width=150",
    field: "Education",
    location: "Chicago, IL",
    email: "michael.davis@example.com",
    linkedin: "linkedin.com/in/michaeldavis",
    bio: "Dedicated to improving educational outcomes for all students.",
  },
]

const fields = ["All", "Technology", "Healthcare", "Sports", "Business", "Education", "Arts"]
const graduationYears = [
  "All",
  "2008",
  "2009",
  "2010",
  "2011",
  "2012",
  "2013",
  "2014",
  "2015",
  "2016",
  "2017",
  "2018",
  "2019",
  "2020",
  "2021",
  "2022",
  "2023",
]

export default function AlumniDirectory() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedField, setSelectedField] = useState("All")
  const [selectedYear, setSelectedYear] = useState("All")
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")

  const filteredAlumni = useMemo(() => {
    let filtered = alumniDirectory

    // Filter by field
    if (selectedField !== "All") {
      filtered = filtered.filter((alumni) => alumni.field === selectedField)
    }

    // Filter by graduation year
    if (selectedYear !== "All") {
      filtered = filtered.filter((alumni) => alumni.graduationYear === selectedYear)
    }

    // Filter by search query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase()
      filtered = filtered.filter(
        (alumni) =>
          alumni.name.toLowerCase().includes(query) ||
          alumni.company.toLowerCase().includes(query) ||
          alumni.currentPosition.toLowerCase().includes(query) ||
          alumni.location.toLowerCase().includes(query) ||
          alumni.field.toLowerCase().includes(query),
      )
    }

    return filtered
  }, [selectedField, selectedYear, searchQuery])

  const getFieldColor = (field: string) => {
    const colors = {
      Technology: "bg-blue-100 text-blue-600",
      Healthcare: "bg-green-100 text-green-600",
      Sports: "bg-orange-100 text-orange-600",
      Business: "bg-purple-100 text-purple-600",
      Education: "bg-primary-100 text-primary-600",
      Arts: "bg-pink-100 text-pink-600",
    }
    return colors[field as keyof typeof colors] || "bg-gray-100 text-gray-600"
  }

  const clearFilters = () => {
    setSelectedField("All")
    setSelectedYear("All")
    setSearchQuery("")
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
            <h1 className="text-4xl font-bold text-primary-600 mb-4">Alumni Directory</h1>
            <p className="text-xl text-secondary-600">Connect with fellow graduates from Acme School</p>
          </motion.div>
        </div>
      </section>
      <section className="py-12 bg-gray-50">
        <h1 className="text-3xl text-center">Coming Soon...</h1>
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
          {/* <div className="mb-6">
            <div className="relative max-w-md mx-auto">
              <input
                type="text"
                placeholder="Search by name, company, position, or location..."
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
          </div> */}

          {/* Filters */}
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
            <div className="flex flex-wrap gap-4">
              {/* Field Filter */}
              {/* <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Field</label>
                <select
                  value={selectedField}
                  onChange={(e) => setSelectedField(e.target.value)}
                  className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                >
                  {fields.map((field) => (
                    <option key={field} value={field}>
                      {field}
                    </option>
                  ))}
                </select>
              </div> */}

              {/* Year Filter */}
              {/* <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Graduation Year</label>
                <select
                  value={selectedYear}
                  onChange={(e) => setSelectedYear(e.target.value)}
                  className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                >
                  {graduationYears.map((year) => (
                    <option key={year} value={year}>
                      {year}
                    </option>
                  ))}
                </select>
              </div> */}
            </div>

            {/* View Toggle */}
            {/* <div className="flex items-center gap-2">
              <span className="text-sm font-medium text-gray-700">View:</span>
              <button
                onClick={() => setViewMode("grid")}
                className={`p-2 rounded ${
                  viewMode === "grid" ? "bg-primary-600 text-white" : "bg-gray-200 text-gray-600"
                }`}
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                </svg>
              </button>
              <button
                onClick={() => setViewMode("list")}
                className={`p-2 rounded ${
                  viewMode === "list" ? "bg-primary-600 text-white" : "bg-gray-200 text-gray-600"
                }`}
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div> */}
          </div>

          {/* Active Filters */}
          {/* {(selectedField !== "All" || selectedYear !== "All" || searchQuery.trim()) && (
            <div className="mt-4 flex items-center gap-2 flex-wrap">
              <span className="text-sm text-gray-600">Active filters:</span>
              {selectedField !== "All" && (
                <span className="inline-flex items-center gap-1 px-3 py-1 bg-primary-100 text-primary-600 rounded-full text-sm">
                  Field: {selectedField}
                  <button onClick={() => setSelectedField("All")} className="ml-1 hover:text-primary-800">
                    ×
                  </button>
                </span>
              )}
              {selectedYear !== "All" && (
                <span className="inline-flex items-center gap-1 px-3 py-1 bg-secondary-100 text-secondary-600 rounded-full text-sm">
                  Year: {selectedYear}
                  <button onClick={() => setSelectedYear("All")} className="ml-1 hover:text-secondary-800">
                    ×
                  </button>
                </span>
              )}
              {searchQuery.trim() && (
                <span className="inline-flex items-center gap-1 px-3 py-1 bg-green-100 text-green-600 rounded-full text-sm">
                  Search: "{searchQuery}"
                  <button onClick={() => setSearchQuery("")} className="ml-1 hover:text-green-800">
                    ×
                  </button>
                </span>
              )}
              <button onClick={clearFilters} className="text-sm text-gray-500 hover:text-gray-700 underline">
                Clear all filters
              </button>
            </div>
          )} */}
        </motion.div>

        {/* Results Count */}
        {/* <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-6"
        >
          <p className="text-gray-600">
            Showing {filteredAlumni.length} of {alumniDirectory.length} alumni
          </p>
        </motion.div> */}

        {/* Alumni Grid/List */}
        {/* <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-12"
        >
          {filteredAlumni.length > 0 ? (
            viewMode === "grid" ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredAlumni.map((alumni, index) => (
                  <motion.div
                    key={alumni.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                  >
                    <div className="p-6 text-center">
                      <div className="relative w-24 h-24 mx-auto mb-4">
                        <Image
                          src={alumni.image || "/placeholder.svg"}
                          alt={alumni.name}
                          fill
                          className="object-cover rounded-full"
                        />
                      </div>
                      <span
                        className={`inline-block px-3 py-1 rounded-full text-sm font-medium mb-3 ${getFieldColor(alumni.field)}`}
                      >
                        {alumni.field}
                      </span>
                      <h3 className="text-xl font-bold text-gray-900 mb-1">{alumni.name}</h3>
                      <p className="text-primary-600 font-medium mb-1">Class of {alumni.graduationYear}</p>
                      <p className="text-gray-600 mb-1">{alumni.currentPosition}</p>
                      <p className="text-gray-600 mb-2">{alumni.company}</p>
                      <p className="text-sm text-gray-500 mb-3">{alumni.location}</p>
                      <p className="text-sm text-gray-700 mb-4">{alumni.bio}</p>
                      <div className="flex justify-center gap-3">
                        <a
                          href={`mailto:${alumni.email}`}
                          className="text-primary-600 hover:text-primary-700 transition-colors"
                          title="Email"
                        >
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                          </svg>
                        </a>
                        <a
                          href={`https://${alumni.linkedin}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary-600 hover:text-primary-700 transition-colors"
                          title="LinkedIn"
                        >
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                            <path
                              fillRule="evenodd"
                              d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            ) : (
              <div className="space-y-4">
                {filteredAlumni.map((alumni, index) => (
                  <motion.div
                    key={alumni.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
                  >
                    <div className="flex flex-col md:flex-row gap-4">
                      <div className="md:w-20 h-20 flex-shrink-0">
                        <Image
                          src={alumni.image || "/placeholder.svg"}
                          alt={alumni.name}
                          width={80}
                          height={80}
                          className="object-cover rounded-full"
                        />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-2">
                          <div>
                            <h3 className="text-xl font-bold text-gray-900">{alumni.name}</h3>
                            <p className="text-primary-600 font-medium">Class of {alumni.graduationYear}</p>
                          </div>
                          <span className={`px-3 py-1 rounded-full text-sm font-medium ${getFieldColor(alumni.field)}`}>
                            {alumni.field}
                          </span>
                        </div>
                        <p className="text-gray-600 mb-1">
                          {alumni.currentPosition} at {alumni.company}
                        </p>
                        <p className="text-sm text-gray-500 mb-2">{alumni.location}</p>
                        <p className="text-gray-700 mb-3">{alumni.bio}</p>
                        <div className="flex gap-3">
                          <a
                            href={`mailto:${alumni.email}`}
                            className="inline-flex items-center text-primary-600 hover:text-primary-700 transition-colors text-sm"
                          >
                            <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                            </svg>
                            Email
                          </a>
                          <a
                            href={`https://${alumni.linkedin}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center text-primary-600 hover:text-primary-700 transition-colors text-sm"
                          >
                            <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                              <path
                                fillRule="evenodd"
                                d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.328v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                                clipRule="evenodd"
                              />
                            </svg>
                            LinkedIn
                          </a>
                        </div>
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
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              <h3 className="text-lg font-medium text-gray-900 mb-2">No alumni found</h3>
              <p className="text-gray-500 mb-4">Try adjusting your search terms or filters.</p>
              <button
                onClick={clearFilters}
                className="bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition-colors"
              >
                Clear Filters
              </button>
            </div>
          )}
        </motion.div> */}
      </div>
    </div>
  )
}
