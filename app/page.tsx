"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Calendar,
  Clock,
  MapPin,
  MessageCircle,
  Music,
  Phone,
  Star,
  Utensils,
  Wine,
  CheckCircle2,
  Camera,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const venue = {
  name: "Night & Table",
  tagline: "Good food, crafted drinks, and late nights in the city.",
  location: "Poblacion, Makati",
  phone: "0917 123 4567",
  whatsapp: "https://wa.me/639171234567",
  rating: "4.8",
  reviews: "320+",
  hours: "Open Tue–Sun · 5PM–2AM",
};

const highlights = [
  {
    Icon: Utensils,
    title: "Signature Food",
    text: "Feature best-selling dishes, bar bites, group plates, and chef specials.",
  },
  {
    Icon: Wine,
    title: "Crafted Drinks",
    text: "Promote cocktails, happy hour, wine, beer buckets, and bottle service.",
  },
  {
    Icon: Music,
    title: "Events & Vibe",
    text: "Showcase DJs, live music, quiz nights, private events, and weekend promos.",
  },
];

const menuItems = [
  {
    name: "Truffle Mushroom Pasta",
    category: "Signature Dish",
    price: "₱420",
    text: "Creamy truffle pasta with mushrooms, parmesan, and fresh herbs.",
  },
  {
    name: "Crispy Chicken Sliders",
    category: "Bar Bites",
    price: "₱360",
    text: "Mini crispy chicken sandwiches with house sauce and pickles.",
  },
  {
    name: "House Old Fashioned",
    category: "Cocktail",
    price: "₱380",
    text: "Classic bourbon cocktail with bitters, orange, and a smooth finish.",
  },
];

const events = [
  {
    day: "Wednesday",
    title: "Midweek Happy Hour",
    text: "Selected cocktails and bar bites from 5PM–8PM.",
  },
  {
    day: "Friday",
    title: "DJ Night",
    text: "Late-night music, cocktails, and group tables.",
  },
  {
    day: "Sunday",
    title: "Brunch & Bottles",
    text: "Relaxed brunch menu with sparkling drinks and sharing plates.",
  },
];

const reviews = [
  {
    name: "Mika R.",
    text: "Great food, nice cocktails, and the staff were very friendly. Perfect for groups.",
  },
  {
    name: "Luis T.",
    text: "The vibe was exactly what we wanted for a Friday night. Will definitely come back.",
  },
  {
    name: "Andrea P.",
    text: "Loved the interiors and drinks. Easy to reserve through WhatsApp too.",
  },
];

export default function BarRestaurantTemplate() {
  return (
    <div className="min-h-screen bg-stone-950 text-white">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-stone-950/85 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
          <a href="#top" className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-amber-400 text-stone-950 shadow-sm">
              <Wine size={22} />
            </div>
            <div>
              <p className="text-lg font-bold leading-none">{venue.name}</p>
              <p className="text-xs text-white/50">Bar & Restaurant Template</p>
            </div>
          </a>

          <nav className="hidden items-center gap-7 text-sm font-medium text-white/65 md:flex">
            <a href="#menu" className="hover:text-white">Menu</a>
            <a href="#events" className="hover:text-white">Events</a>
            <a href="#gallery" className="hover:text-white">Gallery</a>
            <a href="#reviews" className="hover:text-white">Reviews</a>
            <a href="#contact" className="hover:text-white">Reserve</a>
          </nav>

          <a href="#contact">
            <Button className="rounded-full bg-amber-400 px-5 text-stone-950 hover:bg-amber-300">
              Reserve Now
            </Button>
          </a>
        </div>
      </header>

      <main id="top">
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(251,191,36,0.25),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(120,53,15,0.4),transparent_35%)]" />
          <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 md:grid-cols-2 md:py-28">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-amber-300/20 bg-white/5 px-4 py-2 text-sm text-amber-200 shadow-sm">
                <Star className="h-4 w-4 fill-amber-300 text-amber-300" /> {venue.rating} rating · {venue.reviews} Google reviews
              </div>
              <h1 className="max-w-2xl text-5xl font-black tracking-tight md:text-7xl">
                {venue.tagline}
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-8 text-white/65">
                Replace this copy with the venue’s main offer. Highlight reservations, signature dishes, cocktails, live music, group tables, and private events.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a href={venue.whatsapp} target="_blank" rel="noopener noreferrer">
                  <Button size="lg" className="rounded-full bg-amber-400 px-7 text-stone-950 hover:bg-amber-300">
                    <MessageCircle className="mr-2 h-5 w-5" /> Reserve on WhatsApp
                  </Button>
                </a>
                <a href="#menu">
                  <Button size="lg" variant="outline" className="rounded-full border-white/20 bg-white/5 px-7 text-white hover:bg-white/10 hover:text-white">
                    View Menu
                  </Button>
                </a>
              </div>
              <div className="mt-8 flex flex-wrap gap-5 text-sm text-white/55">
                <span className="flex items-center gap-2"><MapPin className="h-4 w-4 text-amber-300" /> {venue.location}</span>
                <span className="flex items-center gap-2"><Phone className="h-4 w-4 text-amber-300" /> {venue.phone}</span>
                <span className="flex items-center gap-2"><Clock className="h-4 w-4 text-amber-300" /> {venue.hours}</span>
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
                  alt="Restaurant interior"
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
                  <Icon className="h-8 w-8 text-amber-300" />
                  <h3 className="mt-4 text-xl font-bold">{title}</h3>
                  <p className="mt-2 text-white/55">{text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section id="menu" className="bg-white py-20 text-stone-950">
          <div className="mx-auto max-w-7xl px-5">
            <div className="max-w-2xl">
              <p className="text-sm font-bold uppercase tracking-[0.25em] text-amber-700">Menu Highlights</p>
              <h2 className="mt-3 text-4xl font-black md:text-5xl">Food and drinks people come back for.</h2>
              <p className="mt-4 text-stone-600">Use this section for best sellers, cocktails, promos, chef specials, or seasonal offers.</p>
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {menuItems.map((item) => (
                <Card key={item.name} className="rounded-[2rem] border-stone-200 shadow-sm">
                  <CardContent className="p-7">
                    <p className="text-sm font-bold uppercase tracking-[0.2em] text-amber-700">{item.category}</p>
                    <h3 className="mt-3 text-2xl font-black">{item.name}</h3>
                    <p className="mt-3 leading-7 text-stone-600">{item.text}</p>
                    <div className="mt-6 flex items-center justify-between">
                      <p className="text-xl font-black">{item.price}</p>
                      <a href="#contact" className="text-sm font-bold text-amber-700">Reserve table →</a>
                    </div>
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
                <p className="text-sm font-bold uppercase tracking-[0.25em] text-amber-300">Weekly Events</p>
                <h2 className="mt-3 text-4xl font-black md:text-5xl">Give people a reason to come tonight.</h2>
                <p className="mt-5 text-white/60">
                  Restaurants and bars need constant reasons to visit. This section is perfect for happy hours, live music, DJs, trivia nights, and private events.
                </p>
              </div>
              <div className="space-y-4">
                {events.map((event) => (
                  <div key={event.title} className="rounded-3xl border border-white/10 bg-white/5 p-6">
                    <p className="text-sm font-bold uppercase tracking-[0.2em] text-amber-300">{event.day}</p>
                    <h3 className="mt-2 text-2xl font-bold">{event.title}</h3>
                    <p className="mt-2 text-white/55">{event.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="gallery" className="bg-stone-900 py-20">
          <div className="mx-auto max-w-7xl px-5">
            <div className="grid items-end gap-8 md:grid-cols-2">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.25em] text-amber-300">Gallery</p>
                <h2 className="mt-3 text-4xl font-black md:text-5xl">Show the food, drinks, and atmosphere.</h2>
              </div>
              <p className="text-white/60 md:text-right">
                Swap these photos with real shots from a content shoot: hero food, cocktails, interiors, events, and guests.
              </p>
            </div>
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { label: "Food", image: "/food.jpg" },
                { label: "Cocktails", image: "/cocktails.jpg" },
                { label: "Interior", image: "/interior.jpg" },
                { label: "Night", image: "/night.jpg" },
              ].map((item) => (
                <div key={item.label} className="relative aspect-square overflow-hidden rounded-3xl bg-white/5">
                  <img src={item.image} alt={item.label} className="h-full w-full object-cover" />
                  <span className="absolute bottom-5 left-5 rounded-full bg-black/40 px-4 py-2 text-sm font-semibold backdrop-blur">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="reviews" className="bg-white py-20 text-stone-950">
          <div className="mx-auto max-w-7xl px-5">
            <div className="text-center">
              <p className="text-sm font-bold uppercase tracking-[0.25em] text-amber-700">Reviews</p>
              <h2 className="mt-3 text-4xl font-black md:text-5xl">Loved by guests.</h2>
            </div>
            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {reviews.map((review) => (
                <Card key={review.name} className="rounded-3xl border-stone-200 bg-stone-50 shadow-sm">
                  <CardContent className="p-7">
                    <div className="flex gap-1 text-amber-500">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <Star key={i} className="h-4 w-4 fill-current" />
                      ))}
                    </div>
                    <p className="mt-5 leading-7 text-stone-700">“{review.text}”</p>
                    <p className="mt-5 font-bold">{review.name}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="py-20">
          <div className="mx-auto max-w-7xl px-5">
            <div className="grid overflow-hidden rounded-[2rem] bg-amber-400 text-stone-950 md:grid-cols-2">
              <div className="p-8 md:p-12">
                <p className="text-sm font-bold uppercase tracking-[0.25em] text-stone-700">Reservations</p>
                <h2 className="mt-3 text-4xl font-black md:text-5xl">Book a table or plan your next night out.</h2>
                <p className="mt-5 text-stone-700">
                  Replace this with the venue’s preferred booking method, table policy, private event details, or reservation notes.
                </p>
                <div className="mt-8 space-y-3 text-stone-800">
                  <p className="flex items-center gap-3"><Phone className="h-5 w-5" /> {venue.phone}</p>
                  <p className="flex items-center gap-3"><MapPin className="h-5 w-5" /> {venue.location}</p>
                  <p className="flex items-center gap-3"><Clock className="h-5 w-5" /> {venue.hours}</p>
                </div>
              </div>
              <div className="bg-white p-8 text-stone-950 md:p-12">
                <form className="space-y-4">
                  <input name="name" className="w-full rounded-2xl border border-stone-200 px-4 py-3" placeholder="Full name" />
                  <input name="phone" className="w-full rounded-2xl border border-stone-200 px-4 py-3" placeholder="Phone number" />
                  <input name="date" className="w-full rounded-2xl border border-stone-200 px-4 py-3" placeholder="Preferred date / time" />
                  <select name="party_size" className="w-full rounded-2xl border border-stone-200 px-4 py-3">
                    <option>Party size</option>
                    <option>2 guests</option>
                    <option>3–4 guests</option>
                    <option>5–8 guests</option>
                    <option>Private event / large group</option>
                  </select>
                  <textarea name="message" className="min-h-28 w-full rounded-2xl border border-stone-200 px-4 py-3" placeholder="Special requests" />
                  <Button className="w-full rounded-full bg-stone-950 py-6 text-white hover:bg-stone-800">
                    Request Reservation
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 py-8">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 px-5 text-sm text-white/45 md:flex-row">
          <p>© {new Date().getFullYear()} {venue.name}. All rights reserved.</p>
          <p>Website template by Tripod Studio.</p>
        </div>
      </footer>

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
