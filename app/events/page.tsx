"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from 'next/image'
import { motion } from "framer-motion"

type EventItem = {
    title: string;
    description: string;
    fullDescription: string;
    date: string;
    location: string;
    category: string;
    image: string;
    organizer: string;
    price: string;
    status: string;
    slug: string;
    featured: boolean;
}

// This would typically come from a database or API
// const events = [
//   {
//     id: "1",
//     title: "Science Fair 2024",
//     description: "Annual science fair showcasing student projects and innovations in STEM fields.",
//     fullDescription:
//       "Join us for our annual Science Fair where students from all grades will showcase their innovative projects and experiments. This year's theme focuses on sustainability and environmental solutions. Judges from local universities and tech companies will evaluate projects and award prizes in various categories.",
//     date: "2024-05-20",
//     time: "9:00 AM - 3:00 PM",
//     location: "Main Gymnasium",
//     category: "Academic",
//     image: "/placeholder.svg?height=300&width=500",
//     organizer: "Science Department",
//     capacity: 500,
//     registered: 234,
//     price: "Free",
//     status: "upcoming",
//     featured: true,
//   },
//   {
//     id: "2",
//     title: "Spring Sports Day",
//     description: "Annual sports competition featuring track and field events, team sports, and fun activities.",
//     fullDescription:
//       "Our annual Spring Sports Day brings together students, families, and staff for a day of athletic competition and fun. Events include track and field competitions, relay races, team sports tournaments, and family-friendly activities. Food trucks and refreshments will be available throughout the day.",
//     date: "2024-06-05",
//     time: "8:00 AM - 4:00 PM",
//     location: "Athletic Fields",
//     category: "Sports",
//     image: "/placeholder.svg?height=300&width=500",
//     organizer: "Athletics Department",
//     capacity: 800,
//     registered: 456,
//     price: "Free",
//     status: "upcoming",
//     featured: true,
//   },
//   {
//     id: "3",
//     title: "Art Exhibition Opening",
//     description: "Showcase of student artwork from all grade levels featuring paintings, sculptures, and digital art.",
//     fullDescription:
//       "Celebrate the creativity of our talented students at the annual Art Exhibition. This year's exhibition features over 200 pieces including paintings, sculptures, photography, and digital art. The opening reception will include live music, refreshments, and artist talks by our student creators.",
//     date: "2024-06-12",
//     time: "6:00 PM - 8:00 PM",
//     location: "Art Gallery",
//     category: "Arts",
//     image: "/placeholder.svg?height=300&width=500",
//     organizer: "Art Department",
//     capacity: 200,
//     registered: 89,
//     price: "Free",
//     status: "upcoming",
//     featured: false,
//   },
//   {
//     id: "4",
//     title: "Annual School Carnival",
//     description: "Fun-filled carnival with rides, games, food trucks, and entertainment for the whole family.",
//     fullDescription:
//       "Mark your calendars for our biggest event of the year! The Annual School Carnival features carnival rides, game booths, food trucks, live entertainment, and much more. All proceeds support school programs and facility improvements. Volunteer opportunities are available for families who want to help make this event a success.",
//     date: "2024-06-15",
//     time: "10:00 AM - 6:00 PM",
//     location: "School Grounds",
//     category: "Community",
//     image: "/placeholder.svg?height=300&width=500",
//     organizer: "PTA",
//     capacity: 1000,
//     registered: 678,
//     price: "Free admission, pay per activity",
//     status: "upcoming",
//     featured: true,
//   },
//   {
//     id: "5",
//     title: "Graduation Ceremony",
//     description: "Commencement ceremony celebrating our graduating class of 2024.",
//     fullDescription:
//       "Join us as we celebrate the achievements of our graduating class of 2024. The ceremony will feature speeches from valedictorian and salutatorian, presentation of diplomas, and special recognition for outstanding achievements. A reception will follow the ceremony.",
//     date: "2024-06-20",
//     time: "7:00 PM - 9:00 PM",
//     location: "Main Auditorium",
//     category: "Academic",
//     image: "/placeholder.svg?height=300&width=500",
//     organizer: "Administration",
//     capacity: 600,
//     registered: 600,
//     price: "Free (invitation only)",
//     status: "upcoming",
//     featured: true,
//   },
//   {
//     id: "6",
//     title: "Parent-Teacher Conference",
//     description: "Individual meetings between parents and teachers to discuss student progress.",
//     fullDescription:
//       "Schedule your individual meeting with your child's teachers to discuss academic progress, goals, and any concerns. Both in-person and virtual meetings are available. Please check your email for scheduling instructions and available time slots.",
//     date: "2024-04-15",
//     time: "3:00 PM - 8:00 PM",
//     location: "Classrooms",
//     category: "Academic",
//     image: "/placeholder.svg?height=300&width=500",
//     organizer: "Administration",
//     capacity: 300,
//     registered: 287,
//     price: "Free",
//     status: "past",
//     featured: false,
//   },
//   {
//     id: "7",
//     title: "Winter Concert",
//     description: "Musical performances by school band, choir, and orchestra.",
//     fullDescription:
//       "Enjoy an evening of beautiful music performed by our talented students. The Winter Concert features performances by the school band, choir, and orchestra, showcasing classical pieces, contemporary songs, and holiday favorites.",
//     date: "2024-03-10",
//     time: "7:00 PM - 9:00 PM",
//     location: "Main Auditorium",
//     category: "Arts",
//     image: "/placeholder.svg?height=300&width=500",
//     organizer: "Music Department",
//     capacity: 400,
//     registered: 380,
//     price: "Free",
//     status: "past",
//     featured: false,
//   },
//   {
//     id: "8",
//     title: "STEM Workshop Series",
//     description: "Hands-on workshops covering robotics, coding, and engineering for students and parents.",
//     fullDescription:
//       "Join our monthly STEM Workshop Series designed for students and their families. This month's workshop focuses on robotics and programming. Participants will learn basic coding concepts and build simple robots. All materials provided. No prior experience necessary.",
//     date: "2024-05-25",
//     time: "10:00 AM - 12:00 PM",
//     location: "Computer Lab",
//     category: "Academic",
//     image: "/placeholder.svg?height=300&width=500",
//     organizer: "STEM Department",
//     capacity: 30,
//     registered: 28,
//     price: "$10 per family",
//     status: "upcoming",
//     featured: false,
//   },
// ]

const categories = ["All", "Academic", "Sports", "Arts", "Community"]
const statusFilters = ["All", "Upcoming", "Past"]

export default function EventsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [selectedStatus, setSelectedStatus] = useState("All")
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  const [events, setEvents] = useState<EventItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/events')
      .then((res) => res.json())
      .then((data) => {
        setEvents(data);
        setLoading(false);
      });
  }, []);

  const filteredEvents = events.filter((event) => {
    const categoryMatch = selectedCategory === "All" || event.category === selectedCategory
    const statusMatch = selectedStatus === "All" || event.status === selectedStatus.toLowerCase()
    return categoryMatch && statusMatch
  })

  const featuredEvents = events.filter((event) => event.featured && event.status === "upcoming")

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
      Academic: "bg-primary-100 text-primary-600",
      Sports: "bg-green-100 text-green-600",
      Arts: "bg-purple-100 text-purple-600",
      Community: "bg-secondary-100 text-secondary-600",
    }
    return colors[category as keyof typeof colors] || "bg-gray-100 text-gray-600"
  }

  const getStatusColor = (status: string) => {
    return status === "upcoming" ? "bg-green-100 text-green-600" : "bg-gray-100 text-gray-600"
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
            <h1 className="text-4xl font-bold text-primary-600 mb-4">School Events</h1>
            <p className="text-xl text-secondary-600">Discover upcoming events and activities at MCHS</p>
          </motion.div>
        </div>
      </section>

      <div className="container mx-auto px-4">
        {/* Featured Events */}
        {featuredEvents.length > 0 && (
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-12"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Featured Events</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredEvents.slice(0, 3).map((event, index) => (
                <motion.div
                  key={event.slug}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border-2 border-primary-200"
                >
                  <div className="relative h-48 bg-gray-200">
                    <Image
                      src={`/${event.image}` || "/placeholder.svg"}
                      alt={event.title}
                      className="w-full h-full object-cover"
                      width={500}
                      height={300}
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                        Featured
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span
                        className={`px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(event.category)}`}
                      >
                        {event.category}
                      </span>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(event.status)}`}>
                        {event.status}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{event.title}</h3>
                    <p className="text-gray-600 mb-3 line-clamp-2">{event.description}</p>
                    <div className="text-sm text-gray-500 mb-4">
                      <p>{formatDate(event.date)}</p>
                      {/* <p>{event.time}</p> */}
                      <p>{event.location}</p>
                    </div>
                    <Link
                      href={`/events/${event.slug}`}
                      className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium transition-colors duration-200"
                    >
                      Learn More
                      <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>
        )}

        {/* Filters and View Toggle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
            <div className="flex flex-wrap gap-4">
              {/* Category Filter */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                >
                  {categories.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </div>

              {/* Status Filter */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Status</label>
                <select
                  value={selectedStatus}
                  onChange={(e) => setSelectedStatus(e.target.value)}
                  className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                >
                  {statusFilters.map((status) => (
                    <option key={status} value={status}>
                      {status}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* View Toggle */}
            <div className="flex items-center gap-2">
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
            </div>
          </div>
        </motion.div>

        {/* Events Grid/List */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-12"
        >
          {viewMode === "grid" ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredEvents.map((event, index) => (
                <motion.div
                  key={event.slug}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="relative h-48 bg-gray-200">
                    <Image
                      src={`/${event.image}` || "/placeholder.svg"}
                      alt={event.title}
                      className="w-full h-full object-cover"
                      width={500}
                      height={300}
                    />
                    <div className="absolute top-4 left-4 flex gap-2">
                      <span
                        className={`px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(event.category)}`}
                      >
                        {event.category}
                      </span>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(event.status)}`}>
                        {event.status}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{event.title}</h3>
                    <p className="text-gray-600 mb-3 line-clamp-2">{event.description}</p>
                    <div className="text-sm text-gray-500 mb-4">
                      <p>{formatDate(event.date)}</p>
                      <p>{event.time}</p>
                      <p>{event.location}</p>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-primary-600">{event.price}</span>
                      <Link
                        href={`/events/${event.slug}`}
                        className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium transition-colors duration-200"
                      >
                        Details
                        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="space-y-4">
              {filteredEvents.map((event, index) => (
                <motion.div
                  key={event.slug}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="flex flex-col md:flex-row gap-4">
                    <div className="md:w-48 h-32 bg-gray-200 rounded-lg overflow-hidden flex-shrink-0">
                      <Image
                        src={`/${event.image}` || "/placeholder.svg"}
                        alt={event.title}
                        className="w-full h-full object-cover"
                        width={500}
                        height={300}
                      />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span
                          className={`px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(event.category)}`}
                        >
                          {event.category}
                        </span>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(event.status)}`}>
                          {event.status}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{event.title}</h3>
                      <p className="text-gray-600 mb-3">{event.description}</p>
                      <div className="flex flex-wrap gap-4 text-sm text-gray-500 mb-3">
                        <span>{formatDate(event.date)}</span>
                        <span>{event.time}</span>
                        <span>{event.location}</span>
                        <span className="font-medium text-primary-600">{event.price}</span>
                      </div>
                      <Link
                        href={`/events/${event.slug}`}
                        className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium transition-colors duration-200"
                      >
                        View Details
                        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </motion.div>

        {/* No Results */}
        {filteredEvents.length === 0 && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-12">
            <p className="text-gray-500 text-lg">No events found matching your criteria.</p>
          </motion.div>
        )}
      </div>
    </div>
  )
}
