import { notFound } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { use } from 'react';
import { loadJsonContentBySlug } from '../../lib/loadJsonContent';
import CopyLinkButton from "@/app/components/CopyLinkButton";
import SocialMediaShareLinkButton from "@/app/components/SocialMediaShareLinkButton";

type Item = {
  time: string;
  activity: string
}

export default function EventDetail({ params }: { params: Promise< {id: string} > }) {
  const { id } = use(params);
  const event = loadJsonContentBySlug('_contents/events', id)

  if (!event) {
    notFound()
  }

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

  const registrationPercentage = (event.registered / event.capacity) * 100

  return (
    <div className="max-w-4xl mx-auto">
      {/* Breadcrumb */}
      <nav className="mb-6">
        <Link href="/events" className="text-primary-600 hover:text-primary-700 transition-colors">
          ← Back to Events
        </Link>
      </nav>

      {/* Event Header */}
      <header className="mb-8">
        <div className="flex items-center gap-2 mb-4">
          <span className={`px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(event.category)}`}>
            {event.category}
          </span>
          <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(event.status)}`}>
            {event.status}
          </span>
          {event.featured && (
            <span className="bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-medium">Featured</span>
          )}
        </div>

        <h1 className="text-4xl font-bold text-gray-900 mb-4">{event.title}</h1>
        <p className="text-xl text-gray-600 mb-6">{event.description}</p>
      </header>

      {/* Featured Image */}
      <div className="relative h-64 md:h-96 mb-8 rounded-lg overflow-hidden">
        <Image
          src={`/${event.image}` || "/placeholder.svg"}
          alt={event.title}
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
        />
      </div>

      {/* Event Details Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
        {/* Main Content */}
        <div className="lg:col-span-2">
          <div className="prose prose-lg max-w-none mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">About This Event</h2>
            {event.fullDescription.split("\n").map((paragraph : string, index : number) => (
              <p key={index} className="mb-4 text-gray-700 leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>

          {/* Schedule */}
          {event.schedule && (
            <div className="mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Event Schedule</h3>
              <div className="bg-gray-50 rounded-lg p-6">
                <div className="space-y-3">
                  {event.schedule.map((item : Item, index : number) => (
                    <div key={index} className="flex items-center gap-4">
                      <span className="font-medium text-primary-600 w-20">{item.time}</span>
                      <span className="text-gray-700">{item.activity}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Requirements */}
          {event.requirements && (
            <div className="mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Requirements & Information</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                {event.requirements.map((requirement : string, index : number) => (
                  <li key={index}>{requirement}</li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-1">
          <div className="bg-gray-50 rounded-lg p-6 sticky top-24">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Event Details</h3>

            <div className="space-y-4">
              <div>
                <h4 className="font-medium text-gray-900">Date & Time</h4>
                <p className="text-gray-600">{formatDate(event.date)}</p>
                {/* <p className="text-gray-600">{event.time}</p> */}
              </div>

              <div>
                <h4 className="font-medium text-gray-900">Location</h4>
                <p className="text-gray-600">{event.location}</p>
              </div>

              <div>
                <h4 className="font-medium text-gray-900">Organizer</h4>
                <p className="text-gray-600">{event.organizer}</p>
                {event.organizerContact && (
                  <a
                    href={`mailto:${event.organizerContact}`}
                    className="text-primary-600 hover:text-primary-700 text-sm"
                  >
                    {event.organizerContact}
                  </a>
                )}
              </div>

              <div>
                <h4 className="font-medium text-gray-900">Price</h4>
                <p className="text-gray-600">{event.price}</p>
              </div>

              <div>
                <h4 className="font-medium text-gray-900">Registration</h4>
                <div className="mt-2">
                  <div className="flex justify-between text-sm text-gray-600 mb-1">
                    <span>{event.registered} registered</span>
                    <span>{event.capacity} capacity</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-primary-600 h-2 rounded-full"
                      style={{ width: `${registrationPercentage}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Registration Button */}
            <div className="mt-6">
              {event.status === "upcoming" ? (
                registrationPercentage < 100 ? (
                  <button className="w-full bg-primary-600 text-white py-3 px-4 rounded-lg hover:bg-primary-700 transition-colors font-medium">
                    Register for Event
                  </button>
                ) : (
                  <button className="w-full bg-gray-400 text-white py-3 px-4 rounded-lg cursor-not-allowed font-medium">
                    Event Full
                  </button>
                )
              ) : (
                <button className="w-full bg-gray-400 text-white py-3 px-4 rounded-lg cursor-not-allowed font-medium">
                  Event Ended
                </button>
              )}
            </div>

            {/* Share */}
            <div className="mt-6 pt-6 border-t border-gray-200">
              <h4 className="font-medium text-gray-900 mb-3">Share Event</h4>
              <div className="flex gap-2">
                <SocialMediaShareLinkButton link="facebook" text="" />
                <SocialMediaShareLinkButton link="X" text={event.title} />
                <CopyLinkButton />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Related Events */}
      {/* <div className="mt-12 pt-8 border-t border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Related Events</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {events
            .filter((e) => e.id !== event.slug && e.category === event.category && e.status === "upcoming")
            .slice(0, 2)
            .map((relatedEvent) => (
              <Link
                key={relatedEvent.id}
                href={`/events/${relatedEvent.id}`}
                className="block bg-gray-50 p-4 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <h4 className="font-medium text-gray-900 mb-2">{relatedEvent.title}</h4>
                <p className="text-sm text-gray-600 mb-1">{formatDate(relatedEvent.date)}</p>
                <p className="text-sm text-gray-600">{relatedEvent.location}</p>
              </Link>
            ))}
        </div>
      </div>*/}
    </div> 
  )
}
