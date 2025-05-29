import { notFound } from "next/navigation"
import Link from "next/link";
import { use } from 'react';
import { loadJsonContentBySlug } from '../../lib/loadJsonContent';

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
            <p className="text-gray-700 mb-6">{newsItem.content}</p>
            <Link href="/news" className="text-secondary-600 hover:text-secondary-700 transition-colors">
              &larr; Back to Home
            </Link>
          </div>
      }
    </div>
  )
}

