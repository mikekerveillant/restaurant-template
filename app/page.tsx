"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  Clock,
  MapPin,
  MessageCircle,
  Music,
  Phone,
  Star,
  Utensils,
  Wine,
  Camera,
  Beer,
  Users,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Script from "next/script";


const venue = {
  name: "The Social Poblacion",
  tagline: "The place to be for signature cocktails, beers, and tropical nights.",
  location: "5770 Ebro St., Poblacion, Makati",
  phone: "0917 727 0072",
  whatsapp: "https://wa.me/639177270072",
  rating: "4.8",
  reviews: "300+",
  hours: "Tue–Sun · 4PM–2AM",
  instagram: "https://www.instagram.com/thesocialpoblacion/",
};

const highlights = [
  {
    Icon: Wine,
    title: "Signature Cocktails",
    text: "A tropical bar experience built around colorful drinks, beers, and easy nights out.",
  },
  {
    Icon: Beer,
    title: "Cold Beers & Groups",
    text: "Perfect for barkada nights, casual dates, pregames, and Poblacion bar hopping.",
  },
  {
    Icon: Music,
    title: "Open-Air Pobla Vibe",
    text: "String lights, colorful corners, tropical energy, and a social outdoor atmosphere.",
  },
];

const menuItems = [
  {
    name: "Drinks Menu",
    category: "Cocktails • Beer • Spirits",
    text: "Browse the full drinks menu, cocktails, beers, and current bar options.",
    button: "See Drinks Menu",
    menuImages: ["/drinks-menu-1.jpg", "/drinks-menu-2.jpg"],
  },
  {
    name: "Food Menu",
    category: "Bar Bites • Sharing Plates",
    text: "Explore food offerings, bar bites, and group-friendly sharing plates.",
    button: "See Food Menu",
    menuImages: ["/food-menu-1.jpg", "/food-menu-2.jpg"],
  },
  {
    name: "Current Promos",
    category: "Happy Hour • Buckets • Events",
    text: "See weekly specials, group deals, happy hour, and birthday table promos.",
    button: "See Promos",
    menuImages: [],
  },
];

const promos = [
  {
    title: "Happy Hour",
    time: "Tue–Thu · 4PM–7PM",
    text: "Feature selected cocktails, beers, or group promos here.",
  },
  {
    title: "Beer Buckets",
    time: "All night",
    text: "Promote barkada-friendly beer bucket offers and sharing deals.",
  },
  {
    title: "Birthday Tables",
    time: "By reservation",
    text: "Add birthday packages, bottle minimums, or group booking notes.",
  },
];

const events = [
  {
    day: "Tuesday–Sunday",
    title: "Tropical Nights",
    text: "Open from 4PM to 2AM for after-work drinks, bar hopping, and late-night catchups.",
  },
  {
    day: "Weekends",
    title: "Poblacion Social Hours",
    text: "A lively open-air stop for barkada nights, casual groups, and visitors exploring Pobla.",
  },
  {
    day: "Private Groups",
    title: "Group Reservations",
    text: "Use this area for birthday tables, small celebrations, and private booking notes.",
  },
];

const reviews = [
  {
    name: "Mika R.",
    text: "Fun outdoor vibe, colorful space, and a great stop for drinks with friends in Pobla.",
  },
  {
    name: "Luis T.",
    text: "Easygoing spot for beers, cocktails, and meeting people before heading around Poblacion.",
  },
  {
    name: "Andrea P.",
    text: "Loved the tropical feel, lights, and casual atmosphere. Great for groups.",
  },
];

export default function BarRestaurantTemplate() {
  const [activeMenu, setActiveMenu] = useState<null | {
  name: string;
  menuImages: string[];
}>(null);

const [currentMenuPage, setCurrentMenuPage] = useState(0);

  const [reservation, setReservation] = useState({
    name: "",
    phone: "",
    date: "",
    partySize: "",
    message: "",
  });
useEffect(() => {
  if (!activeMenu) return;

  const handleKey = (e: KeyboardEvent) => {
    if (e.key === "ArrowRight") {
      setCurrentMenuPage((page) =>
        Math.min(activeMenu.menuImages.length - 1, page + 1)
      );
    }

    if (e.key === "ArrowLeft") {
      setCurrentMenuPage((page) =>
        Math.max(0, page - 1)
      );
    }

    if (e.key === "Escape") {
      setActiveMenu(null);
    }
  };

  window.addEventListener("keydown", handleKey);

  return () => window.removeEventListener("keydown", handleKey);
}, [activeMenu]);

  function handleReservationSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const message = `Hi The Social Poblacion! I'd like to request a reservation.

Name: ${reservation.name}
Phone: ${reservation.phone}
Preferred date/time: ${reservation.date}
Party size: ${reservation.partySize}
Special requests: ${reservation.message || "None"}`;

    window.open(`${venue.whatsapp}?text=${encodeURIComponent(message)}`, "_blank");
  }

  return (
    <div className="min-h-screen bg-[#071A24] text-white">
      <Script
  id="restaurant-schema"
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "BarOrPub",
      name: "The Social Poblacion",
      address: {
        "@type": "PostalAddress",
        streetAddress: "5770 Ebro Street",
        addressLocality: "Makati",
        addressCountry: "PH",
      },
      telephone: "+639177270072",
    }),
  }}
/>
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#071A24]/85 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
          <a href="#top" className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#F7C948] text-[#071A24] shadow-sm">
              <Wine size={22} />
            </div>
            <div>
              <p className="text-lg font-bold leading-none">{venue.name}</p>
              <p className="text-xs text-white/50">Tropical Bar · Poblacion</p>
            </div>
          </a>

          <nav className="hidden items-center gap-7 text-sm font-medium text-white/65 md:flex">
            <a href="#menu" className="hover:text-white">Drinks</a>
            <a href="#promos" className="hover:text-white">Promos</a>
            <a href="#events" className="hover:text-white">Vibe</a>
            <a href="#gallery" className="hover:text-white">Gallery</a>
            <a href="#location" className="hover:text-white">Location</a>
            <a href="#reviews" className="hover:text-white">Reviews</a>
            <a href="#contact" className="hover:text-white">Reserve</a>
          </nav>
          <a
  href={venue.instagram}
  target="_blank"
  rel="noopener noreferrer"
  className="fixed bottom-24 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-pink-500 via-red-500 to-yellow-500 text-white shadow-xl transition hover:scale-105"
  aria-label="Instagram"
  title="Follow on Instagram"
>
  <Camera className="h-7 w-7" />
</a>
          <a href={venue.whatsapp} target="_blank" rel="noopener noreferrer">
            <Button className="rounded-full bg-[#F7C948] px-5 text-[#071A24] hover:bg-[#FFE071]">
              Reserve Now
            </Button>
          </a>
        </div>
      </header>

      <main id="top">
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,91,87,0.32),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(0,194,203,0.28),transparent_35%),linear-gradient(135deg,rgba(247,201,72,0.12),transparent_45%)]" />
          <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 md:grid-cols-2 md:py-28">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <div className="space-y-4">
  <img
    src="/logo.png"
    alt={venue.name}
    className="h-36 w-auto md:h-48"
  />

  <h1 className="text-5xl font-black tracking-tight md:text-7xl">
    {venue.name}
  </h1>

  <div className="flex flex-col gap-3">
  <div className="inline-flex w-fit items-center gap-2 rounded-full border border-[#F7C948]/30 bg-white/5 px-4 py-2 text-sm text-[#F7C948]">
    <Star className="h-4 w-4 fill-[#F7C948] text-[#F7C948]" />
    {venue.rating} ★ Google Rating · {venue.reviews}
  </div>

  <div className="text-sm text-white/60">
    📍 Ebro Street, Poblacion • Open Tue–Sun • 4PM–2AM
  </div>
</div>

  <p className="max-w-2xl text-xl text-white/70 md:text-2xl">
    {venue.tagline}
  </p>
</div>
              <p className="mt-6 max-w-xl text-lg leading-8 text-white/65">
                A colorful open-air Poblacion spot for signature cocktails, beers, casual bites, and social nights under the lights.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a href={venue.whatsapp} target="_blank" rel="noopener noreferrer">
                  <Button size="lg" className="rounded-full bg-[#F7C948] px-7 text-[#071A24] hover:bg-[#FFE071]">
                    <MessageCircle className="mr-2 h-5 w-5" /> Reserve on WhatsApp
                  </Button>
                </a>
                <a href="#menu">
                  <Button size="lg" variant="outline" className="rounded-full border-white/20 bg-white/5 px-7 text-white hover:bg-white/10 hover:text-white">
                    View Drinks & Bites
                  </Button>
                </a>
              </div>
              <div className="mt-8 flex flex-wrap gap-5 text-sm text-white/55">
                <span className="flex items-center gap-2"><MapPin className="h-4 w-4 text-[#00C2CB]" /> {venue.location}</span>
                <span className="flex items-center gap-2"><Phone className="h-4 w-4 text-[#00C2CB]" /> {venue.phone}</span>
                <span className="flex items-center gap-2"><Clock className="h-4 w-4 text-[#00C2CB]" /> {venue.hours}</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="relative"
            >
              <div className="rounded-[2rem] border border-white/10 bg-white/5 p-3 shadow-2xl shadow-black/40 backdrop-blur">
                <img
                  src="/restaurant-hero.jpg"
                  alt="The Social Poblacion outdoor bar"
                  className="aspect-[4/5] w-full rounded-[1.5rem] object-cover"
                />
              </div>
            </motion.div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 py-12">
          <div className="grid gap-4 md:grid-cols-3">
            {highlights.map(({ Icon, title, text }) => (
              <Card key={title} className="rounded-3xl border-white/10 bg-white/5 text-white shadow-none">
                <CardContent className="p-6">
                  <Icon className="h-8 w-8 text-[#F7C948]" />
                  <h3 className="mt-4 text-xl font-bold">{title}</h3>
                  <p className="mt-2 text-white/55">{text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section id="menu" className="bg-[#FFF7E6] py-20 text-[#071A24]">
          <div className="mx-auto max-w-7xl px-5">
            <div className="max-w-2xl">
              <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#FF5B57]">Drinks & Bites</p>
              <h2 className="mt-3 text-4xl font-black md:text-5xl">Cocktails, beers, and casual bites for Pobla nights.</h2>
              <p className="mt-4 text-[#071A24]/65">A tropical bar in Poblacion, Makati serving cocktails, beers, and casual bites.</p>
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {menuItems.map((item) => (
                <Card key={item.name} className="rounded-[2rem] border-[#F7C948]/30 bg-white shadow-sm">
                  <CardContent className="p-7">
                    <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#FF5B57]">{item.category}</p>
                    <h3 className="mt-3 text-2xl font-black">{item.name}</h3>
                    <p className="mt-3 leading-7 text-[#071A24]/65">{item.text}</p>
                    <div className="mt-6">
                      {item.menuImages.length > 0 ? (
                        <Button
                          type="button"
                          onClick={() => {
  setActiveMenu(item);
  setCurrentMenuPage(0);
}}
                          className="rounded-full bg-[#F7C948] px-5 text-[#071A24] hover:bg-[#FFE071]"
                        >
                          {item.button}
                        </Button>
                      ) : (
                        <a href="#promos">
                          <Button className="rounded-full bg-[#F7C948] px-5 text-[#071A24] hover:bg-[#FFE071]">
                            {item.button}
                          </Button>
                        </a>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="promos" className="bg-[#071A24] py-20">
          <div className="mx-auto max-w-7xl px-5">
            <div className="grid items-end gap-8 md:grid-cols-2">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#F7C948]">Promos</p>
                <h2 className="mt-3 text-4xl font-black md:text-5xl">Reasons to drop by this week.</h2>
                <p className="mt-5 text-white/60">
                  Use this section for happy hour, beer buckets, birthday tables, weekend promos, and seasonal offers.
                </p>
              </div>
              <div className="md:text-right">
                <a href={venue.whatsapp} target="_blank" rel="noopener noreferrer">
                  <Button className="rounded-full bg-[#F7C948] px-7 text-[#071A24] hover:bg-[#FFE071]">
                    Ask About Promos
                  </Button>
                </a>
              </div>
            </div>

            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {promos.map((promo) => (
                <Card key={promo.title} className="rounded-[2rem] border-white/10 bg-white/5 text-white shadow-none">
                  <CardContent className="p-7">
                    <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#00C2CB]">{promo.time}</p>
                    <h3 className="mt-3 text-2xl font-black">{promo.title}</h3>
                    <p className="mt-3 leading-7 text-white/60">{promo.text}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="events" className="py-20">
          <div className="mx-auto max-w-7xl px-5">
            <div className="grid gap-10 md:grid-cols-2">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#00C2CB]">The Vibe</p>
                <h2 className="mt-3 text-4xl font-black md:text-5xl">An open-air tropical stop in the middle of Poblacion.</h2>
                <p className="mt-5 text-white/60">
                  Make the site feel like the place: colorful, relaxed, social, and made for nights out with friends.
                </p>
              </div>
              <div className="space-y-4">
                {events.map((event) => (
                  <div key={event.title} className="rounded-3xl border border-white/10 bg-white/5 p-6">
                    <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#F7C948]">{event.day}</p>
                    <h3 className="mt-2 text-2xl font-bold">{event.title}</h3>
                    <p className="mt-2 text-white/55">{event.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="gallery" className="bg-[#0B2530] py-20">
          <div className="mx-auto max-w-7xl px-5">
            <div className="grid items-end gap-8 md:grid-cols-2">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#F7C948]">Gallery</p>
                <h2 className="mt-3 text-4xl font-black md:text-5xl">Show the lights, colors, drinks, and crowd.</h2>
              </div>
              <p className="text-white/60 md:text-right">
                Swap these photos with real content: outdoor setup, cocktails, group tables, signage, and weekend crowd shots.
              </p>
            </div>
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { label: "Outdoor Bar", image: "/food.jpg" },
                { label: "Cocktails", image: "/cocktails.jpg" },
                { label: "Container Setup", image: "/interior.jpg" },
                { label: "Pobla Nights", image: "/night.jpg" },
              ].map((item) => (
                <div key={item.label} className="relative aspect-square overflow-hidden rounded-3xl bg-white/5">
                  <img src={item.image} alt={item.label} className="h-full w-full object-cover" />
                  <span className="absolute bottom-5 left-5 rounded-full bg-black/45 px-4 py-2 text-sm font-semibold backdrop-blur">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#071A24] py-20">
          <div className="mx-auto max-w-7xl px-5">
            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 md:p-12">
              <div className="grid items-center gap-10 md:grid-cols-2">
                <div>
                  <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#F7C948]">
                    Instagram
                  </p>
                  <h2 className="mt-3 text-4xl font-black md:text-5xl">
                    Follow the latest nights at The Social.
                  </h2>
                  <p className="mt-5 text-white/60">
                    See cocktails, weekend crowds, and the latest happenings from Poblacion's tropical bar destination.
                  </p>
                  <a href={venue.instagram} target="_blank" rel="noopener noreferrer">
                    <Button className="mt-8 rounded-full bg-[#F7C948] px-7 text-[#071A24] hover:bg-[#FFE071]">
                      Follow on Instagram
                    </Button>
                  </a>
                </div>

                <div className="grid grid-cols-3 gap-3">
                  {[
                    "/ig1.jpg",
                    "/ig2.jpg",
                    "/ig3.jpg",
                    "/ig4.jpg",
                    "/ig5.jpg",
                    "/ig6.jpg",
                  ].map((image, index) => (
                    <img
                      key={image}
                      src={image}
                      alt={`The Social Instagram post ${index + 1}`}
                      className="aspect-square rounded-2xl object-cover"
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="location" className="bg-[#0B2530] py-20">
          <div className="mx-auto max-w-7xl px-5">
            <div className="grid gap-10 md:grid-cols-2">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#F7C948]">
                  Visit Us
                </p>
                <h2 className="mt-3 text-4xl font-black md:text-5xl">
                  Find us in the heart of Poblacion.
                </h2>
                <p className="mt-5 text-white/60">
                  The Social is located on Ebro Street in Poblacion, Makati — close to the area's bars, restaurants, and nightlife.
                </p>

                <div className="mt-8 space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="mt-1 h-5 w-5 text-[#00C2CB]" />
                    <div>
                      <p className="font-semibold">Address</p>
                      <p className="text-white/60">{venue.location}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock className="mt-1 h-5 w-5 text-[#00C2CB]" />
                    <div>
                      <p className="font-semibold">Hours</p>
                      <p className="text-white/60">{venue.hours}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Phone className="mt-1 h-5 w-5 text-[#00C2CB]" />
                    <div>
                      <p className="font-semibold">Reservations</p>
                      <p className="text-white/60">Message us on WhatsApp</p>
                    </div>
                  </div>
                </div>

                <a
                  href="https://www.google.com/maps/search/?api=1&query=5770+Ebro+Street+Poblacion+Makati"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="mt-8 rounded-full bg-[#F7C948] px-7 text-[#071A24] hover:bg-[#FFE071]">
                    Open in Google Maps
                  </Button>
                </a>
              </div>

              <div className="overflow-hidden rounded-[2rem] border border-white/10">
                <iframe
                  title="The Social Poblacion Map"
                  src="https://www.google.com/maps?q=5770+Ebro+Street+Poblacion+Makati&output=embed"
                  width="100%"
                  height="500"
                  style={{ border: 0 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </section>

        <section id="reviews" className="bg-[#FFF7E6] py-20 text-[#071A24]">
          <div className="mx-auto max-w-7xl px-5">
            <div className="text-center">
              <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#FF5B57]">Reviews</p>
              <h2 className="mt-3 text-4xl font-black md:text-5xl">Loved by guests.</h2>
            </div>
            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {reviews.map((review) => (
                <Card key={review.name} className="rounded-3xl border-[#F7C948]/30 bg-white shadow-sm">
                  <CardContent className="p-7">
                    <div className="flex gap-1 text-[#F7C948]">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <Star key={i} className="h-4 w-4 fill-current" />
                      ))}
                    </div>
                    <p className="mt-5 leading-7 text-[#071A24]/70">“{review.text}”</p>
                    <p className="mt-5 font-bold">{review.name}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="py-20">
          <div className="mx-auto max-w-7xl px-5">
            <div className="grid overflow-hidden rounded-[2rem] bg-[#F7C948] text-[#071A24] md:grid-cols-2">
              <div className="p-8 md:p-12">
                <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#071A24]/70">Reservations</p>
                <h2 className="mt-3 text-4xl font-black md:text-5xl">Book a table or start the night at The Social.</h2>
                <p className="mt-5 text-[#071A24]/75">
                  Add booking notes here: table policy, walk-ins, private groups, birthdays, or WhatsApp reservations.
                </p>
                <div className="mt-8 space-y-3 text-[#071A24]/85">
                  <p className="flex items-center gap-3"><Phone className="h-5 w-5" /> {venue.phone}</p>
                  <p className="flex items-center gap-3"><MapPin className="h-5 w-5" /> {venue.location}</p>
                  <p className="flex items-center gap-3"><Clock className="h-5 w-5" /> {venue.hours}</p>
                </div>
              </div>
              <div className="bg-white p-8 text-[#071A24] md:p-12">
                <form className="space-y-4" onSubmit={handleReservationSubmit}>
                  <input
                    name="name"
                    value={reservation.name}
                    onChange={(event) => setReservation({ ...reservation, name: event.target.value })}
                    required
                    className="w-full rounded-2xl border border-[#071A24]/15 px-4 py-3"
                    placeholder="Full name"
                  />
                  <input
                    name="phone"
                    value={reservation.phone}
                    onChange={(event) => setReservation({ ...reservation, phone: event.target.value })}
                    required
                    className="w-full rounded-2xl border border-[#071A24]/15 px-4 py-3"
                    placeholder="Phone number"
                  />
                  <input
                    name="date"
                    value={reservation.date}
                    onChange={(event) => setReservation({ ...reservation, date: event.target.value })}
                    required
                    className="w-full rounded-2xl border border-[#071A24]/15 px-4 py-3"
                    placeholder="Preferred date / time"
                  />
                  <select
                    name="party_size"
                    value={reservation.partySize}
                    onChange={(event) => setReservation({ ...reservation, partySize: event.target.value })}
                    required
                    className="w-full rounded-2xl border border-[#071A24]/15 px-4 py-3"
                  >
                    <option value="">Party size</option>
                    <option value="2 guests">2 guests</option>
                    <option value="3–4 guests">3–4 guests</option>
                    <option value="5–8 guests">5–8 guests</option>
                    <option value="Private event / large group">Private event / large group</option>
                  </select>
                  <textarea
                    name="message"
                    value={reservation.message}
                    onChange={(event) => setReservation({ ...reservation, message: event.target.value })}
                    className="min-h-28 w-full rounded-2xl border border-[#071A24]/15 px-4 py-3"
                    placeholder="Special requests"
                  />
                  <Button type="submit" className="w-full rounded-full bg-[#071A24] py-6 text-white hover:bg-[#0B2530]">
                    Request Reservation on WhatsApp
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      {activeMenu && (
        <div className="fixed inset-0 z-[100] overflow-y-auto bg-black/80 px-5 py-8 backdrop-blur-sm">
          <div className="mx-auto max-w-4xl">
            <div className="mb-5 flex items-center justify-between gap-4 rounded-3xl bg-[#071A24] p-4 text-white shadow-xl">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#F7C948]">Menu</p>
                <h2 className="text-2xl font-black">{activeMenu.name}</h2>
                <p className="mt-2 text-sm text-white/60">
  Swipe through the menu pages below.
</p>
              </div>
              <Button
                type="button"
                onClick={() => setActiveMenu(null)}
                className="rounded-full bg-white px-5 text-[#071A24] hover:bg-white/90"
              >
                Close
              </Button>
              <Button
  type="button"
  className="rounded-full bg-[#F7C948] text-[#071A24]"
>
  Download PDF
</Button>
            </div>

            <div className="space-y-6">
  <img
    src={activeMenu.menuImages[currentMenuPage]}
    alt={`${activeMenu.name} page ${currentMenuPage + 1}`}
    className="mx-auto max-h-[80vh] w-auto rounded-3xl bg-white shadow-2xl"
  />

  {activeMenu.menuImages.length > 1 && (
    <div className="flex items-center justify-center gap-4">
      <Button
        type="button"
        variant="outline"
        disabled={currentMenuPage === 0}
        onClick={() =>
          setCurrentMenuPage((page) => Math.max(0, page - 1))
        }
      >
        ← Previous
      </Button>

      <span className="text-white">
        Page {currentMenuPage + 1} of {activeMenu.menuImages.length}
      </span>

      <Button
        type="button"
        variant="outline"
        disabled={
          currentMenuPage === activeMenu.menuImages.length - 1
        }
        onClick={() =>
          setCurrentMenuPage((page) =>
            Math.min(
              activeMenu.menuImages.length - 1,
              page + 1
            )
          )
        }
      >
        Next →
      </Button>
    </div>
  )}
</div>
          </div>
        </div>
      )}
<section className="bg-[#071A24] py-16">
  <div className="mx-auto max-w-5xl px-5">
    <h2 className="text-3xl font-black">
      One of the most social spots in Poblacion.
    </h2>

    <p className="mt-5 text-white/60 leading-8">
      Looking for cocktails in Poblacion, a casual bar in Makati, or a place
      to start your night out? The Social Poblacion offers signature drinks,
      group-friendly tables, and an open-air tropical atmosphere in the heart
      of Manila's nightlife district.
    </p>
  </div>
</section>

      <footer className="border-t border-white/10 bg-[#071A24] py-12">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#F7C948] text-[#071A24]">
                <Wine size={22} />
              </div>
              <div>
                <p className="text-lg font-bold leading-none">{venue.name}</p>
                <p className="text-xs text-white/50">Tropical Bar · Poblacion</p>
              </div>
            </div>
            <p className="mt-5 max-w-md text-sm leading-6 text-white/50">
              Signature cocktails, beers, and tropical nights on Ebro Street in Poblacion, Makati.
            </p>
          </div>

          <div>
            <p className="font-bold text-white">Contact</p>
            <div className="mt-4 space-y-3 text-sm text-white/55">
              <p className="flex items-center gap-2"><Phone className="h-4 w-4 text-[#00C2CB]" /> {venue.phone}</p>
              <p className="flex items-start gap-2"><MapPin className="mt-0.5 h-4 w-4 text-[#00C2CB]" /> {venue.location}</p>
              <p className="flex items-center gap-2"><Clock className="h-4 w-4 text-[#00C2CB]" /> {venue.hours}</p>
            </div>
          </div>

          <div>
            <p className="font-bold text-white">Follow</p>
            <div className="mt-4 space-y-3 text-sm text-white/55">
              <a href={venue.instagram} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-white">
                <Camera className="h-4 w-4 text-[#F7C948]" /> Instagram
              </a>
              <a href={venue.whatsapp} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-white">
                <MessageCircle className="h-4 w-4 text-[#F7C948]" /> WhatsApp Reservations
              </a>
            </div>
          </div>
        </div>

        <div className="mx-auto mt-10 flex max-w-7xl flex-col justify-between gap-4 border-t border-white/10 px-5 pt-6 text-sm text-white/40 md:flex-row">
          <p>© {new Date().getFullYear()} {venue.name}. All rights reserved.</p>
          <p>Website template by Tripod Studio.</p>
        </div>
      </footer>

      <a
  href={venue.instagram}
  target="_blank"
  rel="noopener noreferrer"
  className="fixed bottom-24 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-pink-500 via-red-500 to-yellow-500 text-white shadow-xl transition hover:scale-105"
  aria-label="Instagram"
  title="Follow on Instagram"
>
  <Camera className="h-7 w-7" />
</a>
      <a
        href={venue.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-xl transition hover:scale-105 hover:bg-green-600"
        aria-label="Reserve on WhatsApp"
      >
        <MessageCircle className="h-7 w-7" />
      </a>
    </div>
  );
}
