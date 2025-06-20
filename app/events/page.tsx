"use client";
import React, { useState } from "react";
import { motion } from "motion/react";
import Header from "../components/Header";
import Image from "next/image";
import Footer from "../components/sections/Footer";
import Head from "next/head";
import { generateCanonicalUrl } from "../lib/seo-utils";

export default function EventsPage() {
  // Mock upcoming and past events data
  const upcomingEvents = [
    {
      id: 1,
      name: "14th edition Medical Expo",
      location: "Guwahati, India",
      date: "April 25-27, 2024",
      description: "Brochure Distribution",
      boothNumber: "N/A",
      image: "/medical-1.jpg",
      category: "Expo"
    },
    {
      id: 2,
      name: "India Med Expo - Noida",
      location: "Noida, India",
      date: "May 23-25, 2024",
      description: "Brochure Distribution",
      boothNumber: "N/A",
      image: "/medical-1.jpg",
      category: "Expo"
    },
    {
      id: 3,
      name: "GMEC India 2025",
      location: "Bengaluru, India",
      date: "June 20-22, 2024",
      description: "Visit & Brochure Distribution",
      boothNumber: "N/A",
      image: "/medical-1.jpg",
      category: "Visit"
    },
    {
      id: 4,
      name: "India Health Exhibition",
      location: "Delhi, India",
      date: "July 11-13, 2024",
      description: "Brochure Distribution",
      boothNumber: "N/A",
      image: "/medical-1.jpg",
      category: "Expo"
    },
    {
      id: 5,
      name: "Medicall Exhibition 25",
      location: "Chennai, India",
      date: "July 25-27, 2024",
      description: "Acuron Booth",
      boothNumber: "TBD",
      image: "/medical-1.jpg",
      category: "Booth"
    },
    {
      id: 6,
      name: "Medical Expo - Ahmedabad",
      location: "Ahmedabad, India",
      date: "August 22-23, 2024",
      description: "Visit & Brochure Distribution",
      boothNumber: "N/A",
      image: "/medical-1.jpg",
      category: "Visit"
    },
    {
      id: 7,
      name: "Gujarat Medical - Ahmedabad",
      location: "Ahmedabad, India",
      date: "September 14-16, 2024",
      description: "Brochure Distribution",
      boothNumber: "N/A",
      image: "/medical-1.jpg",
      category: "Expo"
    },
    {
      id: 8,
      name: "Medicall",
      location: "Delhi, India",
      date: "September 15-26, 2024",
      description: "Brochure Distribution",
      boothNumber: "N/A",
      image: "/medical-1.jpg",
      category: "Expo"
    }
  ];

  const pastEvents = [
    {
      id: 9,
      name: "Arab Health 2025",
      location: "Dubai, UAE",
      date: "January 27-30, 2025",
      description: "The largest healthcare exhibition in the MENA region, showcasing the latest innovations in healthcare technology and services",
      boothNumber: "Za'abeel Hall 1, Z1.F30",
      image: "/arab25.jpeg",
      category: "Exhibition"
    },
    {
      id: 10,
      name: "CMEF Spring 2023",
      location: "Shanghai, China",
      date: "May 14-17, 2023",
      description: "The leading medical equipment exhibition in Asia-Pacific region",
      boothNumber: "Hall 4.1, H11",
      image: "/medical-1.jpg",
      category: "Exhibition"
    },
    {
      id: 11,
      name: "HOSPITALAR 2023",
      location: "São Paulo, Brazil",
      date: "May 23-26, 2023",
      description: "The most important healthcare event in Latin America",
      boothNumber: "Street 13, Stand 143",
      image: "/medical-1.jpg",
      category: "Trade Fair"
    },
  ];

  // Toggle between upcoming and past events
  const [showUpcoming, setShowUpcoming] = useState(true);

  return (
    <>
      <Head>
        <title>Events & Exhibitions | Acuron</title>
        <meta name="description" content="Connect with us at medical trade shows, exhibitions, and conferences around the world" />
        <meta name="keywords" content="medical, events, exhibitions, conferences, trade shows, Acuron" />
        <meta name="author" content="Acuron" />
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        <meta name="bingbot" content="index, follow" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@Acuron" />
        <meta name="twitter:creator" content="@Acuron" />
        <meta name="twitter:title" content="Events & Exhibitions | Acuron" />
        <meta name="twitter:description" content="Connect with us at medical trade shows, exhibitions, and conferences around the world" />
        <meta name="twitter:image" content={generateCanonicalUrl("/events")} />
        <meta property="og:title" content="Events & Exhibitions | Acuron" />
        <meta property="og:description" content="Connect with us at medical trade shows, exhibitions, and conferences around the world" />
        <meta property="og:image" content={generateCanonicalUrl("/events")} />
        <meta property="og:url" content={generateCanonicalUrl("/events")} />
        <meta property="og:type" content="website" />
        <link rel="canonical" href={generateCanonicalUrl("/events")} />
      </Head>
      <Header />
      
      <div className="pt-[90px] min-h-screen bg-gradient-to-b from-[#061D33] via-[#082F4F] to-[#061D33]">
        <div className="max-w-7xl mx-auto px-4 py-12">
          {/* Hero section */}
          <div className="text-center mb-16">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-white to-[#78d6f5] bg-clip-text text-transparent mb-4"
            >
              Events & Exhibitions
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="text-[#78d6f5] max-w-2xl mx-auto text-lg"
            >
              Connect with us at medical trade shows, exhibitions, and conferences around the world
            </motion.p>
            {/* Animated Divider */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex justify-center items-center gap-4 my-6"
            >
              <motion.div className="w-16 h-px bg-gradient-to-r from-transparent via-[#16DBBE]/50 to-[#16DBBE]" />
              <motion.div
                className="w-2.5 h-2.5 bg-[#16DBBE] rounded-full shadow-[0_0_8px_#16DBBE]"
                animate={{
                  scale: [1, 1.4, 1, 1],
                }}
                transition={{
                  duration: 1.2,
                  repeat: Infinity,
                  times: [0, 0.1, 0.2, 1],
                  ease: "easeInOut",
                }}
              />
              <motion.div className="w-16 h-px bg-gradient-to-l from-transparent via-[#16DBBE]/50 to-[#16DBBE]" />
            </motion.div>
          </div>

          {/* Event toggle buttons */}
          <div className="flex justify-center gap-4 mb-12">
            <button 
              onClick={() => setShowUpcoming(true)}
              className={`px-6 py-3 rounded-full text-sm font-bold transition-all duration-300 ${
                showUpcoming 
                  ? 'bg-[#16DBBE] text-[#082A45]' 
                  : 'bg-[#0A2A45]/80 text-[#78d6f5] hover:bg-[#1E619E]/50 border border-[#1E619E]/30'
              }`}
            >
              Upcoming Events
            </button>
            <button 
              onClick={() => setShowUpcoming(false)}
              className={`px-6 py-3 rounded-full text-sm font-bold transition-all duration-300 ${
                !showUpcoming 
                  ? 'bg-[#16DBBE] text-[#082A45]' 
                  : 'bg-[#0A2A45]/80 text-[#78d6f5] hover:bg-[#1E619E]/50 border border-[#1E619E]/30'
              }`}
            >
              Past Events
            </button>
          </div>

          {/* Event cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {(showUpcoming ? upcomingEvents : pastEvents).map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
                className="bg-gradient-to-br from-[#0A2A45]/80 to-[#061D33]/90 backdrop-blur-sm border border-[#1E619E]/30 rounded-xl overflow-hidden hover:shadow-[0_0_15px_rgba(30,97,158,0.3)] transition-all duration-300 group"
              >
                <div className="flex flex-col md:flex-row h-full">
                  <div className="md:w-2/5 aspect-video md:aspect-auto bg-[#0A2A45]/50 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#1E619E]/20 to-transparent" />
                    <div 
                      className="absolute inset-0 bg-cover bg-center opacity-35 group-hover:opacity-50 transition-opacity duration-300" 
                      style={{ backgroundImage: `url(${event.image})` }}
                    />
                    <div className="absolute top-4 right-4 bg-[#16DBBE]/20 text-[#16DBBE] text-xs font-bold py-1 px-3 rounded-full">
                      {event.category}
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#061D33] to-transparent h-20" />
                    <div className="absolute bottom-4 left-4 text-white">
                      <div className="text-sm font-bold text-[#16DBBE]">{event.date}</div>
                      <div className="text-xs opacity-80">{event.location}</div>
                    </div>
                  </div>
                  <div className="md:w-3/5 p-6 flex flex-col">
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#16DBBE] transition-colors duration-300">
                      {event.name}
                    </h3>
                    <p className="text-gray-300 mb-4 text-sm flex-grow">
                      {event.description}
                    </p>
                    <div className="mt-auto">
                      <div className="mb-4 inline-block bg-[#1E619E]/30 text-[#78d6f5] text-sm font-medium px-3 py-1 rounded">
                        {event.boothNumber}
                      </div>
                      <div className="flex justify-between items-center">
                        {showUpcoming && (
                          <button className="px-4 py-2 bg-[#16DBBE]/20 hover:bg-[#16DBBE]/30 text-[#16DBBE] rounded-lg transition-colors duration-300 text-sm font-medium flex items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                            Add to Calendar
                          </button>
                        )}
                        <button className="px-4 py-2 bg-[#1E619E]/30 hover:bg-[#1E619E]/50 text-[#78d6f5] rounded-lg transition-colors duration-300 text-sm font-medium flex items-center gap-2 ml-auto">
                          {showUpcoming ? 'Book Meeting' : 'View Details'}
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="bg-gradient-to-r from-[#082A45] to-[#0A3D62] rounded-2xl p-8 md:p-12 shadow-lg border border-[#1E619E]/30 mb-16"
          >
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Can&apos;t make it to an event?</h2>
                <p className="text-gray-300 mb-6 md:mb-0 max-w-xl">
                  Schedule a private virtual demonstration of our medical supplies and equipment. Our team will provide a personalized presentation of our products.
                </p>
              </div>
              <button className="px-6 py-3 bg-[#16DBBE] hover:bg-[#14c5ac] text-[#082A45] font-bold rounded-lg transition-colors duration-300 whitespace-nowrap flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
                Schedule Virtual Demo
              </button>
            </div>
          </motion.div>

          {/* Map section */}
          <div className="text-center mb-16">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-2xl font-bold text-white mb-8"
            >
              Our National Exhibition Presence
            </motion.h3>
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="relative h-[300px] md:h-[400px] rounded-xl overflow-hidden border border-[#1E619E]/30"
            >
              <div className="absolute inset-0 bg-[#0A2A45]/80 flex items-center justify-center">
                <Image 
                  src="/earth.png" 
                  alt="Global Exhibition Presence" 
                  width={800}
                  height={600}
                  className="object-contain p-4 md:p-8 opacity-80"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
} 