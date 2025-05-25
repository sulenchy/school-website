"use client"

import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"

// This would typically come from a database or API
const newsArticles = [
  {
    id: "1",
    title: "New STEM program launching next semester",
    excerpt:
      "We are excited to announce the launch of our new STEM program, which will provide students with hands-on experience in science, technology, engineering, and mathematics.",
    content:
      "We are excited to announce the launch of our new STEM program, which will provide students with hands-on experience in science, technology, engineering, and mathematics. This program aims to prepare our students for the challenges of the future workforce. The program will include state-of-the-art laboratories, coding workshops, robotics clubs, and partnerships with local tech companies. Students will have the opportunity to work on real-world projects and develop critical thinking skills that will serve them well in their future careers.",
    date: "2024-01-15",
    category: "Academic",
    image: "/placeholder.svg?height=300&width=500",
    author: "Dr. Sarah Johnson",
  },
  {
    id: "2",
    title: "Annual school carnival scheduled for June 15th",
    excerpt:
      "Mark your calendars! Our annual school carnival is set for June 15th. This year's event promises to be bigger and better than ever.",
    content:
      "Mark your calendars! Our annual school carnival is set for June 15th. This year's event promises to be bigger and better than ever, with new rides, games, and food options. All proceeds will go towards improving our school facilities. We'll have live music performances by our school band, art exhibitions by our talented students, and various food stalls run by parent volunteers. The carnival will run from 10 AM to 6 PM and admission is free for all families.",
    date: "2024-01-10",
    category: "Events",
    image: "/placeholder.svg?height=300&width=500",
    author: "Events Committee",
  },
  {
    id: "3",
    title: "Parent-teacher conferences start next week",
    excerpt:
      "Parent-teacher conferences will begin next week. These meetings are crucial for discussing your child's progress and setting goals.",
    content:
      "Parent-teacher conferences will begin next week. These meetings are crucial for discussing your child's progress and setting goals for the rest of the academic year. Please check your email for scheduling information. Conferences will be held both in-person and virtually to accommodate all families. Each session will last 15 minutes, and parents will receive a detailed progress report. We encourage all parents to attend these important meetings to stay informed about their child's academic journey.",
    date: "2024-01-08",
    category: "Academic",
    image: "/placeholder.svg?height=300&width=500",
    author: "Administration",
  },
  {
    id: "4",
    title: "School wins regional science competition",
    excerpt:
      "Our science team has won first place in the regional science competition, beating 15 other schools in the district.",
    content:
      "Our science team has won first place in the regional science competition, beating 15 other schools in the district. The team, consisting of students from grades 9-12, presented their project on renewable energy solutions. Their innovative approach to solar panel efficiency impressed the judges and earned them a $5,000 grant for the school's science department. We are incredibly proud of their hard work and dedication. The team will now advance to the state competition in March.",
    date: "2024-01-05",
    category: "Achievement",
    image: "/placeholder.svg?height=300&width=500",
    author: "Science Department",
  },
  {
    id: "5",
    title: "New library renovation completed",
    excerpt:
      "After months of renovation, our school library has been completely transformed with modern facilities and technology.",
    content:
      "After months of renovation, our school library has been completely transformed with modern facilities and technology. The new library features comfortable reading areas, collaborative study spaces, and state-of-the-art computer stations. We've also expanded our digital collection and added maker spaces for creative projects. The library now includes a quiet study zone, group discussion rooms, and a presentation area for student projects. All students and staff are invited to explore the new facilities during the grand reopening ceremony next Friday.",
    date: "2024-01-03",
    category: "Facilities",
    image: "/placeholder.svg?height=300&width=500",
    author: "Facilities Management",
  },
  {
    id: "6",
    title: "Winter sports season kicks off",
    excerpt:
      "Our winter sports teams are ready for action! Basketball, wrestling, and swimming teams begin their competitive seasons this month.",
    content:
      "Our winter sports teams are ready for action! Basketball, wrestling, and swimming teams begin their competitive seasons this month. The basketball teams have been training hard and are excited to defend their championship title from last year. Our wrestling team has several new members who show great promise, and the swimming team has been breaking school records in practice. Come out and support our athletes at their upcoming games and meets. The schedule is available on our athletics page.",
    date: "2024-01-01",
    category: "Sports",
    image: "/placeholder.svg?height=300&width=500",
    author: "Athletics Department",
  },
]

const categories = ["All", "Academic", "Events", "Achievement", "Facilities", "Sports"]

export default function NewsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All")

  const filteredNews =
    selectedCategory === "All" ? newsArticles : newsArticles.filter((article) => article.category === selectedCategory)

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  }

  const getCategoryColor = (category: string) => {
    const colors = {
      Academic: "bg-primary-100 text-primary-600",
      Events: "bg-secondary-100 text-secondary-600",
      Achievement: "bg-green-100 text-green-600",
      Facilities: "bg-blue-100 text-blue-600",
      Sports: "bg-purple-100 text-purple-600",
    }
    return colors[category as keyof typeof colors] || "bg-gray-100 text-gray-600"
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
            <h1 className="text-4xl font-bold text-primary-600 mb-4">School News</h1>
            <p className="text-xl text-secondary-600">Stay updated with the latest happenings at Acme School</p>
          </motion.div>
        </div>
      </section>

      <div className="container mx-auto px-4">
        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8"
        >
          <div className="flex flex-wrap gap-2 justify-center">
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
        </motion.div>

        {/* News Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
        >
          {filteredNews.map((article, index) => (
            <motion.article
              key={article.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-48 bg-gray-200">
                <img
                  src={article.image || "/placeholder.svg"}
                  alt={article.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(article.category)}`}>
                    {article.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-2">
                  <span>{formatDate(article.date)}</span>
                  <span className="mx-2">•</span>
                  <span>{article.author}</span>
                </div>

                <h2 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">{article.title}</h2>

                <p className="text-gray-600 mb-4 line-clamp-3">{article.excerpt}</p>

                <Link
                  href={`/news/${article.id}`}
                  className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium transition-colors duration-200"
                >
                  Read More
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* No Results */}
        {filteredNews.length === 0 && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-12">
            <p className="text-gray-500 text-lg">No news articles found in this category.</p>
          </motion.div>
        )}
      </div>
    </div>
  )
}
