"use client"

// import { useState } from "react"
import { motion } from "framer-motion"
// import Image from "next/image"
import Link from "next/link"

// This would typically come from a database or API
// const featuredAlumni = [
//   {
//     id: "1",
//     name: "Dr. Sarah Chen",
//     graduationYear: "2010",
//     currentPosition: "Chief Technology Officer",
//     company: "TechCorp Industries",
//     image: "/placeholder.svg?height=300&width=300",
//     achievement: "Led the development of revolutionary AI healthcare solutions",
//     quote: "Acme School gave me the foundation to think critically and pursue my passion for technology.",
//     field: "Technology",
//     location: "San Francisco, CA",
//   },
//   {
//     id: "2",
//     name: "Marcus Rodriguez",
//     graduationYear: "2008",
//     currentPosition: "Olympic Gold Medalist",
//     company: "USA Swimming Team",
//     image: "/placeholder.svg?height=300&width=300",
//     achievement: "Won 3 Olympic gold medals in swimming",
//     quote: "The discipline and teamwork I learned at Acme School carried me to Olympic success.",
//     field: "Sports",
//     location: "Colorado Springs, CO",
//   },
//   {
//     id: "3",
//     name: "Dr. Emily Watson",
//     graduationYear: "2012",
//     currentPosition: "Pediatric Surgeon",
//     company: "Children's Hospital",
//     image: "/placeholder.svg?height=300&width=300",
//     achievement: "Pioneered minimally invasive surgical techniques for children",
//     quote: "The science program at Acme School inspired my journey into medicine.",
//     field: "Healthcare",
//     location: "Boston, MA",
//   },
// ]

// const alumniStats = [
//   { label: "Total Alumni", value: "15,000+" },
//   { label: "Countries Worldwide", value: "45" },
//   { label: "Fortune 500 CEOs", value: "12" },
//   { label: "Average Starting Salary", value: "$75,000" },
// ]

// const upcomingEvents = [
//   {
//     id: "1",
//     title: "Annual Alumni Gala",
//     date: "2024-06-15",
//     time: "6:00 PM - 10:00 PM",
//     location: "Grand Ballroom, Downtown Hotel",
//     description: "Join us for an evening of celebration, networking, and reconnecting with fellow alumni.",
//     image: "/placeholder.svg?height=200&width=400",
//   },
//   {
//     id: "2",
//     title: "Career Mentorship Program Launch",
//     date: "2024-05-20",
//     time: "2:00 PM - 4:00 PM",
//     location: "School Auditorium",
//     description: "Connect experienced alumni with current students for career guidance and mentorship.",
//     image: "/placeholder.svg?height=200&width=400",
//   },
//   {
//     id: "3",
//     title: "Alumni Business Network Mixer",
//     date: "2024-07-10",
//     time: "5:30 PM - 8:00 PM",
//     location: "Innovation Hub, Tech District",
//     description: "Network with alumni entrepreneurs and business leaders in a casual setting.",
//     image: "/placeholder.svg?height=200&width=400",
//   },
// ]

// const newsUpdates = [
//   {
//     id: "1",
//     title: "Alumni Scholarship Fund Reaches $1 Million",
//     date: "2024-01-15",
//     excerpt: "Thanks to generous alumni donations, our scholarship fund has reached a major milestone.",
//     image: "/placeholder.svg?height=150&width=250",
//   },
//   {
//     id: "2",
//     title: "Class of 2014 Reunion Planning Underway",
//     date: "2024-01-10",
//     excerpt: "The 10-year reunion committee is planning an exciting weekend of activities.",
//     image: "/placeholder.svg?height=150&width=250",
//   },
//   {
//     id: "3",
//     title: "New Alumni Directory Platform Launched",
//     date: "2024-01-05",
//     excerpt: "Connect with fellow graduates through our new online alumni directory.",
//     image: "/placeholder.svg?height=150&width=250",
//   },
// ]

export default function AlumniPage() {
//   const [selectedField, setSelectedField] = useState("All")
//   const fields = ["All", "Technology", "Healthcare", "Sports", "Business", "Education", "Arts"]

//   const formatDate = (dateString: string) => {
//     const date = new Date(dateString)
//     return date.toLocaleDateString("en-US", {
//       month: "long",
//       day: "numeric",
//       year: "numeric",
//     })
//   }

//   const getFieldColor = (field: string) => {
//     const colors = {
//       Technology: "bg-blue-100 text-blue-600",
//       Healthcare: "bg-green-100 text-green-600",
//       Sports: "bg-orange-100 text-orange-600",
//       Business: "bg-purple-100 text-purple-600",
//       Education: "bg-primary-100 text-primary-600",
//       Arts: "bg-pink-100 text-pink-600",
//     }
//     return colors[field as keyof typeof colors] || "bg-gray-100 text-gray-600"
//   }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-secondary-600 text-white py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-5xl font-bold mb-4">Alumni Network</h1>
            <p className="text-xl mb-8">Connecting graduates, celebrating achievements, building futures</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/alumni/directory"
                className="bg-white text-primary-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
              >
                Alumni Directory
              </Link>
              {/* <Link
                href="/alumni/register"
                className="border-2 border-white text-white px-6 py-3 rounded-lg font-medium hover:bg-white hover:text-primary-600 transition-colors"
              >
                Update Your Info
              </Link> */}
            </div>
          </motion.div>
        </div>
      </section>
      <section className="py-12 bg-gray-50">
        <h1 className="text-3xl text-center">Coming Soon...</h1>
      </section>
      {/* Alumni Stats */}
      {/* <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {alumniStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold text-primary-600 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section> */}

      <div className="container mx-auto px-4 py-12">
        {/* Featured Alumni */}
        <section className="mb-16">
          {/* <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Alumni</h2>
            <p className="text-xl text-gray-600">Celebrating the achievements of our distinguished graduates</p>
          </motion.div> */}

          {/* Field Filter */}
          {/* <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-wrap justify-center gap-2 mb-8"
          >
            {fields.map((field) => (
              <button
                key={field}
                onClick={() => setSelectedField(field)}
                className={`px-4 py-2 rounded-full transition-all duration-300 ${
                  selectedField === field
                    ? "bg-primary-600 text-white shadow-lg"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
              >
                {field}
              </button>
            ))}
          </motion.div> */}

          {/* <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {featuredAlumni
              .filter((alumni) => selectedField === "All" || alumni.field === selectedField)
              .map((alumni, index) => (
                <motion.div
                  key={alumni.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="relative h-64">
                    <Image src={alumni.image || "/placeholder.svg"} alt={alumni.name} fill className="object-cover" />
                    <div className="absolute top-4 left-4">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${getFieldColor(alumni.field)}`}>
                        {alumni.field}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-1">{alumni.name}</h3>
                    <p className="text-primary-600 font-medium mb-1">Class of {alumni.graduationYear}</p>
                    <p className="text-gray-600 mb-2">
                      {alumni.currentPosition} at {alumni.company}
                    </p>
                    <p className="text-sm text-gray-500 mb-3">{alumni.location}</p>
                    <p className="text-gray-700 mb-4">{alumni.achievement}</p>
                    <blockquote className="text-sm italic text-gray-600 border-l-4 border-primary-200 pl-4">
                      "{alumni.quote}"
                    </blockquote>
                  </div>
                </motion.div>
              ))}
          </motion.div> */}
        </section>

        {/* Upcoming Events */}
        <section className="mb-16">
          {/* <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            className="text-center mb-8"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Upcoming Alumni Events</h2>
            <p className="text-xl text-gray-600">Join us for networking, celebration, and connection</p>
          </motion.div> */}

          {/* <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {upcomingEvents.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative h-48">
                  <Image src={event.image || "/placeholder.svg"} alt={event.title} fill className="object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{event.title}</h3>
                  <div className="text-sm text-gray-600 mb-3">
                    <p>{formatDate(event.date)}</p>
                    <p>{event.time}</p>
                    <p>{event.location}</p>
                  </div>
                  <p className="text-gray-700 mb-4">{event.description}</p>
                  <Link
                    href={`/alumni/events/${event.id}`}
                    className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium transition-colors"
                  >
                    Learn More
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div> */}
        </section>

        {/* Alumni News & Updates */}
        <section className="mb-16">
          {/* <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.4 }}
            className="text-center mb-8"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Alumni News & Updates</h2>
            <p className="text-xl text-gray-600">Stay connected with the latest alumni community news</p>
          </motion.div> */}

          {/* <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.6 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {newsUpdates.map((news, index) => (
              <motion.div
                key={news.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative h-40">
                  <Image src={news.image || "/placeholder.svg"} alt={news.title} fill className="object-cover" />
                </div>
                <div className="p-6">
                  <div className="text-sm text-gray-500 mb-2">{formatDate(news.date)}</div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{news.title}</h3>
                  <p className="text-gray-700 mb-4">{news.excerpt}</p>
                  <Link
                    href={`/alumni/news/${news.id}`}
                    className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium transition-colors"
                  >
                    Read More
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div> */}
        </section>

        {/* Get Involved Section */}
        <section className="bg-gradient-to-r from-primary-100 to-secondary-100 rounded-lg p-8 text-center">
          {/* <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.8 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Get Involved</h2>
            <p className="text-xl text-gray-600 mb-8">
              There are many ways to stay connected and give back to the Acme School community
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <Link
                href="/alumni/mentorship"
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="text-primary-600 mb-3">
                  <svg className="w-8 h-8 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"
                    />
                  </svg>
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Mentorship</h3>
                <p className="text-sm text-gray-600">Guide current students in their career journey</p>
              </Link>

              <Link
                href="/alumni/donate"
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="text-primary-600 mb-3">
                  <svg className="w-8 h-8 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Donate</h3>
                <p className="text-sm text-gray-600">Support scholarships and school programs</p>
              </Link>

              <Link
                href="/alumni/volunteer"
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="text-primary-600 mb-3">
                  <svg className="w-8 h-8 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Volunteer</h3>
                <p className="text-sm text-gray-600">Help with events and school activities</p>
              </Link>

              <Link
                href="/alumni/speak"
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="text-primary-600 mb-3">
                  <svg className="w-8 h-8 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
                    />
                  </svg>
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Guest Speaking</h3>
                <p className="text-sm text-gray-600">Share your expertise with students</p>
              </Link>
            </div>
          </motion.div> */}
        </section>
      </div>
    </div>
  )
}
