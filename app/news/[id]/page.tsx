import { notFound } from "next/navigation"
import Link from "next/link";
import { use } from 'react';
import { loadJsonContentBySlug } from '../../lib/loadJsonContent';
import { formatDate } from "@/app/lib/utils";

export default function NewsItem({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params)
  const newsItem = loadJsonContentBySlug('_contents/news', id)

  if (!newsItem) {
    notFound()
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {
        newsItem &&
          <div className="max-w-2xl mx-auto">
            <h1 className="text-3xl font-bold text-primary-600 mb-4">{newsItem.title}</h1>
            <div className="flex items-center text-sm text-gray-500 mb-2">
                  <span>{formatDate(newsItem.date)}</span>
                  <span className="mx-2">•</span>
                  <span>{newsItem.author}</span>
                </div>
            {newsItem.content.split("\n").map((paragraph : string, index : number) => (
              <p key={index} className="mb-4 text-gray-700 leading-relaxed">
                {paragraph}
              </p>
            ))}
            <Link href="/news" className="text-secondary-600 hover:text-secondary-700 transition-colors">
              &larr; Back to Home
            </Link>
          </div>
      }
    </div>
  )
}

