import { notFound } from "next/navigation"
import Link from "next/link";
import { use } from 'react';

// This would typically come from a database or API
const newsItems = [
  {
    id: "1",
    title: "New STEM program launching next semester",
    content:
      "We are excited to announce the launch of our new STEM program, which will provide students with hands-on experience in science, technology, engineering, and mathematics. This program aims to prepare our students for the challenges of the future workforce.",
  },
  {
    id: "2",
    title: "Annual school carnival scheduled for June 15th",
    content:
      "Mark your calendars! Our annual school carnival is set for June 15th. This year's event promises to be bigger and better than ever, with new rides, games, and food options. All proceeds will go towards improving our school facilities.",
  },
  {
    id: "3",
    title: "Parent-teacher conferences start next week",
    content:
      "Parent-teacher conferences will begin next week. These meetings are crucial for discussing your child's progress and setting goals for the rest of the academic year. Please check your email for scheduling information.",
  },
]

export default function NewsItem({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params)
  const newsItem = newsItems.find((item) => item.id === id)

  if (!newsItem) {
    notFound()
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {
        newsItem &&
          <div className="max-w-2xl mx-auto">
            <h1 className="text-3xl font-bold text-primary-600 mb-4">{newsItem.title}</h1>
            <p className="text-gray-700 mb-6">{newsItem.content}</p>
            <Link href="/" className="text-secondary-600 hover:text-secondary-700 transition-colors">
              &larr; Back to Home
            </Link>
          </div>
      }
    </div>
  )
}

