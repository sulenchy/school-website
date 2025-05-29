import Link from "next/link"
import Slideshow from "./components/Slideshow"

const newsItems = [
  { id: "1", title: "New STEM program launching next semester" },
  { id: "2", title: "Annual school carnival scheduled for June 15th" },
  { id: "3", title: "Parent-teacher conferences start next week" },
]

const eventItems = [
  {}
]

export default function Home() {
  return (
    <div className="space-y-12">
      <section>
        <Slideshow />
      </section>

      <section className="text-center bg-gradient-to-r from-primary-100 to-secondary-100 p-12 rounded-lg">
        <h1 className="text-4xl font-bold mb-4 text-primary-600">Welcome to Moslem Comprehensive High School</h1>
        <p className="text-xl text-secondary-600">Perseverance wins the success</p>
      </section>

      <section className="bg-white p-8 rounded-lg shadow-lg border border-primary-200">
        <h2 className="text-2xl font-semibold mb-4 text-primary-600">Latest News</h2>
        <ul className="list-disc list-inside text-gray-700">
          {newsItems.map((item) => (
            <li key={item.id} className="mb-2">
              <Link href={`/news/${item.id}`} className="text-secondary-600 hover:text-secondary-700 transition-colors">
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
        <div>
            <Link href="/news" className="text-secondary-600 hover:text-secondary-700 transition-colors">
            More News &rarr;
            </Link>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4 text-secondary-600">Upcoming Events</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-primary-100 p-4 rounded-lg shadow-md">
            <h3 className="font-bold text-primary-600">Science Fair</h3>
            <p className="text-gray-700">Date: May 20, 2023</p>
          </div>
          <div className="bg-secondary-100 p-4 rounded-lg shadow-md">
            <h3 className="font-bold text-secondary-600">Sports Day</h3>
            <p className="text-gray-700">Date: June 5, 2023</p>
          </div>
          <div className="bg-gradient-to-r from-primary-100 to-secondary-100 p-4 rounded-lg shadow-md">
            <h3 className="font-bold text-primary-600">Art Exhibition</h3>
            <p className="text-gray-700">Date: June 12, 2023</p>
          </div>
        </div>
      </section>

      <section className="text-center">
        <Link
          href="/about"
          className="inline-block bg-gradient-to-r from-primary-500 to-secondary-500 text-white px-6 py-2 rounded-lg hover:from-primary-600 hover:to-secondary-600 transition-colors"
        >
          Learn More About Us
        </Link>
      </section>
    </div>
  )
}

