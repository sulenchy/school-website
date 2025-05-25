import { notFound } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { use } from 'react';

// This would typically come from a database or API
const events = [
  {
    id: "1",
    title: "Science Fair 2024",
    description: "Annual science fair showcasing student projects and innovations in STEM fields.",
    fullDescription:
      "Join us for our annual Science Fair where students from all grades will showcase their innovative projects and experiments. This year's theme focuses on sustainability and environmental solutions. Judges from local universities and tech companies will evaluate projects and award prizes in various categories.\n\nThe event will feature:\n• Student project exhibitions from grades K-12\n• Interactive demonstrations\n• Guest speakers from the science community\n• Awards ceremony\n• Refreshments and networking opportunities\n\nThis is a wonderful opportunity for students to share their passion for science and for families to see the incredible work being done in our classrooms.",
    date: "2024-05-20",
    time: "9:00 AM - 3:00 PM",
    location: "Main Gymnasium",
    category: "Academic",
    image: "/placeholder.svg?height=400&width=800",
    organizer: "Science Department",
    organizerContact: "science@acmeschool.edu",
    capacity: 500,
    registered: 234,
    price: "Free",
    status: "upcoming",
    featured: true,
    requirements: ["No special requirements", "All ages welcome", "Parking available on campus"],
    schedule: [
      { time: "9:00 AM", activity: "Setup and Registration" },
      { time: "10:00 AM", activity: "Project Presentations Begin" },
      { time: "12:00 PM", activity: "Lunch Break" },
      { time: "1:00 PM", activity: "Judging and Demonstrations" },
      { time: "2:30 PM", activity: "Awards Ceremony" },
      { time: "3:00 PM", activity: "Event Conclusion" },
    ],
  },
  {
    id: "2",
    title: "Spring Sports Day",
    description: "Annual sports competition featuring track and field events, team sports, and fun activities.",
    fullDescription:
      "Our annual Spring Sports Day brings together students, families, and staff for a day of athletic competition and fun. Events include track and field competitions, relay races, team sports tournaments, and family-friendly activities. Food trucks and refreshments will be available throughout the day.\n\nEvent highlights:\n• Track and field competitions\n• Team sports tournaments\n• Family relay races\n• Food trucks and vendors\n• Awards ceremony\n• Live music and entertainment\n\nThis event promotes physical fitness, teamwork, and school spirit. All skill levels are welcome to participate!",
    date: "2024-06-05",
    time: "8:00 AM - 4:00 PM",
    location: "Athletic Fields",
    category: "Sports",
    image: "/placeholder.svg?height=400&width=800",
    organizer: "Athletics Department",
    organizerContact: "athletics@acmeschool.edu",
    capacity: 800,
    registered: 456,
    price: "Free",
    status: "upcoming",
    featured: true,
    requirements: ["Comfortable athletic wear recommended", "Bring water bottle", "Sunscreen advised"],
    schedule: [
      { time: "8:00 AM", activity: "Registration and Warm-up" },
      { time: "9:00 AM", activity: "Opening Ceremony" },
      { time: "9:30 AM", activity: "Track Events Begin" },
      { time: "11:00 AM", activity: "Team Sports Tournaments" },
      { time: "12:30 PM", activity: "Lunch Break" },
      { time: "1:30 PM", activity: "Field Events" },
      { time: "3:00 PM", activity: "Awards Ceremony" },
      { time: "4:00 PM", activity: "Closing" },
    ],
  },
  {
    id: "3",
    title: "Art Exhibition Opening",
    description: "Showcase of student artwork from all grade levels featuring paintings, sculptures, and digital art.",
    fullDescription:
      "Celebrate the creativity of our talented students at the annual Art Exhibition. This year's exhibition features over 200 pieces including paintings, sculptures, photography, and digital art. The opening reception will include live music, refreshments, and artist talks by our student creators.",
    date: "2024-06-12",
    time: "6:00 PM - 8:00 PM",
    location: "Art Gallery",
    category: "Arts",
    image: "/placeholder.svg?height=300&width=500",
    organizer: "Art Department",
    capacity: 200,
    registered: 89,
    price: "Free",
    status: "upcoming",
    featured: false,
    requirements: ["Comfortable athletic wear recommended", "Bring water bottle", "Sunscreen advised"],
    schedule: [
      { time: "8:00 AM", activity: "Registration and Warm-up" },
      { time: "9:00 AM", activity: "Opening Ceremony" },
      { time: "9:30 AM", activity: "Track Events Begin" },
      { time: "11:00 AM", activity: "Team Sports Tournaments" },
      { time: "12:30 PM", activity: "Lunch Break" },
      { time: "1:30 PM", activity: "Field Events" },
      { time: "3:00 PM", activity: "Awards Ceremony" },
      { time: "4:00 PM", activity: "Closing" },
    ],
  },
  {
    id: "4",
    title: "Annual School Carnival",
    description: "Fun-filled carnival with rides, games, food trucks, and entertainment for the whole family.",
    fullDescription:
      "Mark your calendars for our biggest event of the year! The Annual School Carnival features carnival rides, game booths, food trucks, live entertainment, and much more. All proceeds support school programs and facility improvements. Volunteer opportunities are available for families who want to help make this event a success.",
    date: "2024-06-15",
    time: "10:00 AM - 6:00 PM",
    location: "School Grounds",
    category: "Community",
    image: "/placeholder.svg?height=300&width=500",
    organizer: "PTA",
    capacity: 1000,
    registered: 678,
    price: "Free admission, pay per activity",
    status: "upcoming",
    featured: true,
    requirements: ["Comfortable athletic wear recommended", "Bring water bottle", "Sunscreen advised"],
    schedule: [
      { time: "8:00 AM", activity: "Registration and Warm-up" },
      { time: "9:00 AM", activity: "Opening Ceremony" },
      { time: "9:30 AM", activity: "Track Events Begin" },
      { time: "11:00 AM", activity: "Team Sports Tournaments" },
      { time: "12:30 PM", activity: "Lunch Break" },
      { time: "1:30 PM", activity: "Field Events" },
      { time: "3:00 PM", activity: "Awards Ceremony" },
      { time: "4:00 PM", activity: "Closing" },
    ],
  },
  {
    id: "5",
    title: "Graduation Ceremony",
    description: "Commencement ceremony celebrating our graduating class of 2024.",
    fullDescription:
      "Join us as we celebrate the achievements of our graduating class of 2024. The ceremony will feature speeches from valedictorian and salutatorian, presentation of diplomas, and special recognition for outstanding achievements. A reception will follow the ceremony.",
    date: "2024-06-20",
    time: "7:00 PM - 9:00 PM",
    location: "Main Auditorium",
    category: "Academic",
    image: "/placeholder.svg?height=300&width=500",
    organizer: "Administration",
    capacity: 600,
    registered: 600,
    price: "Free (invitation only)",
    status: "upcoming",
    featured: true,
    requirements: ["Comfortable athletic wear recommended", "Bring water bottle", "Sunscreen advised"],
    schedule: [
      { time: "8:00 AM", activity: "Registration and Warm-up" },
      { time: "9:00 AM", activity: "Opening Ceremony" },
      { time: "9:30 AM", activity: "Track Events Begin" },
      { time: "11:00 AM", activity: "Team Sports Tournaments" },
      { time: "12:30 PM", activity: "Lunch Break" },
      { time: "1:30 PM", activity: "Field Events" },
      { time: "3:00 PM", activity: "Awards Ceremony" },
      { time: "4:00 PM", activity: "Closing" },
    ],
  },
  {
    id: "6",
    title: "Parent-Teacher Conference",
    description: "Individual meetings between parents and teachers to discuss student progress.",
    fullDescription:
      "Schedule your individual meeting with your child's teachers to discuss academic progress, goals, and any concerns. Both in-person and virtual meetings are available. Please check your email for scheduling instructions and available time slots.",
    date: "2024-04-15",
    time: "3:00 PM - 8:00 PM",
    location: "Classrooms",
    category: "Academic",
    image: "/placeholder.svg?height=300&width=500",
    organizer: "Administration",
    capacity: 300,
    registered: 287,
    price: "Free",
    status: "past",
    featured: false,
    requirements: ["Comfortable athletic wear recommended", "Bring water bottle", "Sunscreen advised"],
    schedule: [
      { time: "8:00 AM", activity: "Registration and Warm-up" },
      { time: "9:00 AM", activity: "Opening Ceremony" },
      { time: "9:30 AM", activity: "Track Events Begin" },
      { time: "11:00 AM", activity: "Team Sports Tournaments" },
      { time: "12:30 PM", activity: "Lunch Break" },
      { time: "1:30 PM", activity: "Field Events" },
      { time: "3:00 PM", activity: "Awards Ceremony" },
      { time: "4:00 PM", activity: "Closing" },
    ],
  },
  {
    id: "7",
    title: "Winter Concert",
    description: "Musical performances by school band, choir, and orchestra.",
    fullDescription:
      "Enjoy an evening of beautiful music performed by our talented students. The Winter Concert features performances by the school band, choir, and orchestra, showcasing classical pieces, contemporary songs, and holiday favorites.",
    date: "2024-03-10",
    time: "7:00 PM - 9:00 PM",
    location: "Main Auditorium",
    category: "Arts",
    image: "/placeholder.svg?height=300&width=500",
    organizer: "Music Department",
    capacity: 400,
    registered: 380,
    price: "Free",
    status: "past",
    featured: false,
    requirements: ["Comfortable athletic wear recommended", "Bring water bottle", "Sunscreen advised"],
    schedule: [
      { time: "8:00 AM", activity: "Registration and Warm-up" },
      { time: "9:00 AM", activity: "Opening Ceremony" },
      { time: "9:30 AM", activity: "Track Events Begin" },
      { time: "11:00 AM", activity: "Team Sports Tournaments" },
      { time: "12:30 PM", activity: "Lunch Break" },
      { time: "1:30 PM", activity: "Field Events" },
      { time: "3:00 PM", activity: "Awards Ceremony" },
      { time: "4:00 PM", activity: "Closing" },
    ],
  },
  {
    id: "8",
    title: "STEM Workshop Series",
    description: "Hands-on workshops covering robotics, coding, and engineering for students and parents.",
    fullDescription:
      "Join our monthly STEM Workshop Series designed for students and their families. This month's workshop focuses on robotics and programming. Participants will learn basic coding concepts and build simple robots. All materials provided. No prior experience necessary.",
    date: "2024-05-25",
    time: "10:00 AM - 12:00 PM",
    location: "Computer Lab",
    category: "Academic",
    image: "/placeholder.svg?height=300&width=500",
    organizer: "STEM Department",
    capacity: 30,
    registered: 28,
    price: "$10 per family",
    status: "upcoming",
    featured: false,
    requirements: ["Comfortable athletic wear recommended", "Bring water bottle", "Sunscreen advised"],
    schedule: [
      { time: "8:00 AM", activity: "Registration and Warm-up" },
      { time: "9:00 AM", activity: "Opening Ceremony" },
      { time: "9:30 AM", activity: "Track Events Begin" },
      { time: "11:00 AM", activity: "Team Sports Tournaments" },
      { time: "12:30 PM", activity: "Lunch Break" },
      { time: "1:30 PM", activity: "Field Events" },
      { time: "3:00 PM", activity: "Awards Ceremony" },
      { time: "4:00 PM", activity: "Closing" },
    ],
  },
  // Add more events here...
]

export default function EventDetail({ params }: { params: Promise< {id: string} > }) {
    const { id } = use(params);
  const event = events.find((e) => e.id === id)

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
          src={event.image || "/placeholder.svg"}
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
            {event.fullDescription.split("\n").map((paragraph, index) => (
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
                  {event.schedule.map((item, index) => (
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
                {event.requirements.map((requirement, index) => (
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
                <p className="text-gray-600">{event.time}</p>
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
                <button className="flex-1 bg-blue-600 text-white py-2 px-3 rounded text-sm hover:bg-blue-700 transition-colors">
                  Facebook
                </button>
                <button className="flex-1 bg-blue-400 text-white py-2 px-3 rounded text-sm hover:bg-blue-500 transition-colors">
                  Twitter
                </button>
                <button className="flex-1 bg-gray-600 text-white py-2 px-3 rounded text-sm hover:bg-gray-700 transition-colors">
                  Copy Link
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Related Events */}
      <div className="mt-12 pt-8 border-t border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Related Events</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {events
            .filter((e) => e.id !== event.id && e.category === event.category && e.status === "upcoming")
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
      </div>
    </div>
  )
}
