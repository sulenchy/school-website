"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from 'next/image'
import { motion } from "framer-motion"

type NewsItem = {
    title: string;
    excerpt:string;
    content: string;
    date: string;
    category: string;
    image: string;
    author: string;
    slug: string;
}

const categories = ["All", "Academic", "Events", "Achievement", "Facilities", "Sports"]

export default function NewsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [items, setItems] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/news')
      .then((res) => res.json())
      .then((data) => {
        setItems(data);
        console.log({data})
        setLoading(false);
      });
  }, []);

  const filteredNews =
    selectedCategory === "All" ? items : items.filter((article) => article.category === selectedCategory)

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
            <p className="text-xl text-secondary-600">Stay updated with the latest happenings at MCHS</p>
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
        { !loading && <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
        >
          {filteredNews.map((article, index) => (
            <motion.article
              key={article.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-48 bg-gray-200">
                <Image
                  src={`/${article.image}` || "/placeholder.svg"}
                  alt={article.title}
                  className="w-full h-full object-cover"
                  width={1200}
                  height={800}
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
                  href={`/news/${article.slug}`}
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
        </motion.div> }

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
