"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Calendar, MapPin } from "lucide-react";
import EventImageDialog from "@/components/EventImageDialog";

export default function EventsPage() {
  const [selectedEvent, setSelectedEvent] = useState<{
    title: string;
    images: string[];
  } | null>(null);

  const events = [
    {
      title: "Philippine Innovation Conference 2025",
      location: "Batangas City",
      date: "November 2025",
      description:
        "Attended the Philippine Innovation Conference 2025 in Batangas City, where I gained valuable insights from various speakers and innovators during the two-day event focused on emerging technologies and innovation.",
      images: [
        "/events/Philippine Innovation Conference 2025 - 1.jpg",
        "/events/Philippine Innovation Conference 2025 - 2.jpg",
        "/events/Philippine Innovation Conference 2025 - 3.jpg",
      ],
    },
    {
      title: "Google Developer Group Manila – DEVFEST 2025",
      location: "BGC, Manila",
      date: "November 2025",
      description:
        "Explored new advancements in technology and Firebase integration through Google I/O sessions, and learned about various Google technologies such as Flutter and the Gemini CLI.",
      images: [
        "/events/Google Developer Group Manila – DEVFEST 2025 - 1.jpg",
        "/events/Google Developer Group Manila – DEVFEST 2025 - 2.jpg",
        "/events/Google Developer Group Manila – DEVFEST 2025 - 3.jpg",
      ],
    },
    {
      title: "Google Developer Group Manila – Google I/O Extended Manila 2025",
      location: "BGC, Manila",
      date: "July 2025",
      description:
        "Explored new advancements in technology and Firebase integration through Google I/O sessions.",
      images: [
        "/events/Google Developer Group Manila – Google IO Extended Manila 2025 - 1.jpg",
        "/events/Google Developer Group Manila – Google IO Extended Manila 2025 - 2.jpg",
        "/events/Google Developer Group Manila – Google IO Extended Manila 2025 - 3.jpg",
      ],
    },
    {
      title: "Google Developer Cloud Manila – Cloud Next Extended Manila 2025",
      location: "Quezon City",
      date: "July 2025",
      description:
        "Attended discussions on emerging tech trends and best practices in using Firebase. Engaged with IT peers and developers to exchange insights on cloud innovation.",
      images: [
        "/events/Google Developer Cloud Manila – Cloud Next Extended Manila 2025 - 1.jpg",
        "/events/Google Developer Cloud Manila – Cloud Next Extended Manila 2025 - 2.jpg",
        "/events/Google Developer Cloud Manila – Cloud Next Extended Manila 2025 - 3.jpg",
      ],
    },
    {
      title: "Google Developer Group Manila – Build with AI Manila 2025",
      location: "Makati City",
      date: "May 2025",
      description:
        "Participated in sessions exploring the latest AI technologies from Google. Joined a hands-on workshop to create an AI agent and networked with professionals in the IT industry.",
      images: [
        "/events/Google Developer Group Manila – Build with AI Manila 2025 - 1.jpg",
        "/events/Google Developer Group Manila – Build with AI Manila 2025 - 2.jpg",
        "/events/Google Developer Group Manila – Build with AI Manila 2025 - 3.jpg",
      ],
    },
  ];

  return (
    <>
      <div className="space-y-4 sm:space-y-6">
        {events.map((event, index) => (
          <Card
            key={index}
            className="p-4 sm:p-6 border border-border bg-card hover:border-muted-foreground/30 transition-colors cursor-pointer"
            onClick={() =>
              setSelectedEvent({ title: event.title, images: event.images })
            }
          >
            <div className="space-y-3">
              {/* Event Title */}
              <h2 className="text-base sm:text-lg font-semibold text-foreground leading-tight">
                {event.title}
              </h2>

              {/* Location and Date */}
              <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
                <div className="flex items-center gap-1.5">
                  <MapPin className="h-4 w-4" />
                  <span>{event.location}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Calendar className="h-4 w-4" />
                  <span>{event.date}</span>
                </div>
              </div>

              {/* Description */}
              <p className="text-sm text-muted-foreground leading-relaxed">
                {event.description}
              </p>
            </div>
          </Card>
        ))}
      </div>

      {selectedEvent && (
        <EventImageDialog
          eventTitle={selectedEvent.title}
          images={selectedEvent.images}
          isOpen={!!selectedEvent}
          onClose={() => setSelectedEvent(null)}
        />
      )}
    </>
  );
}
