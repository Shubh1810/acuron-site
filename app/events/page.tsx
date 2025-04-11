"use client";
import React, { useState } from "react";
import { motion } from "motion/react";
import Header from "../components/Header";

export default function EventsPage() {
  // Mock upcoming and past events data
  const upcomingEvents = [
    {
      id: 1,
      name: "MEDICA 2023",
      location: "Düsseldorf, Germany",
      date: "November 13-16, 2023",
      description: "World's largest medical trade fair, featuring innovative products and solutions for outpatient and clinical care",
      boothNumber: "Hall 6, Stand D42",
      image: "/medical-1.jpg",
      category: "Trade Fair"
    },
    {
      id: 2,
      name: "Arab Health 2024",
      location: "Dubai, UAE",
      date: "January 29 - February 1, 2024",
      description: "The largest healthcare exhibition in the MENA region, showcasing the latest innovations in healthcare technology and services",
      boothNumber: "Za'abeel Hall 1, Z1.F30",
      image: "/medical-1.jpg",
      category: "Exhibition"
    },
    {
      id: 3,
      name: "FIME 2024",
      location: "Miami, FL, USA",
      date: "July 17-19, 2024",
      description: "Florida International Medical Expo - the largest medical trade show across the Americas",
      boothNumber: "Booth #B45",
      image: "/medical-1.jpg",
      category: "Exhibition"
    }
  ];

  const pastEvents = [
    {
      id: 4,
      name: "CMEF Spring 2023",
      location: "Shanghai, China",
      date: "May 14-17, 2023",
      description: "The leading medical equipment exhibition in Asia-Pacific region",
      boothNumber: "Hall 4.1, H11",
      image: "/medical-1.jpg",
      category: "Exhibition"
    },
    {
      id: 5,
      name: "HOSPITALAR 2023",
      location: "São Paulo, Brazil",
      date: "May 23-26, 2023",
      description: "The most important healthcare event in Latin America",
      boothNumber: "Street 13, Stand 143",
      image: "/medical-1.jpg",
      category: "Trade Fair"
    },
    {
      id: 6,
      name: "Medical Japan 2023",
      location: "Osaka, Japan",
      date: "February 22-24, 2023",
      description: "International Medical & Elderly Care Expo focusing on healthcare, elderly care, and nursing care in Japan",
      boothNumber: "East Hall 3, E3-42",
      image: "/medical-1.jpg",
      category: "Exhibition"
    },
    {
      id: 7,
      name: "Africa Health 2023",
      location: "Johannesburg, South Africa",
      date: "April 18-20, 2023",
      description: "The largest healthcare exhibition in Africa highlighting the latest medical technologies and solutions",
      boothNumber: "Hall 2, Stand G10",
      image: "/medical-1.jpg",
      category: "Conference"
    },
    {
      id: 8,
      name: "Medical Fair Thailand 2023",
      location: "Bangkok, Thailand",
      date: "September 13-15, 2023",
      description: "Southeast Asia's most important medical and healthcare event",
      boothNumber: "Hall 5, Booth H45",
      image: "/medical-1.jpg",
      category: "Trade Fair"
    }
  ];

  // Toggle between upcoming and past events
  const [showUpcoming, setShowUpcoming] = useState(true);

  return (
    <>
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
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="w-24 h-1 bg-gradient-to-r from-[#1E619E] to-[#16DBBE] mx-auto mt-6"
            />
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
                    <div className="absolute inset-0 bg-[url('/medical-1.jpg')] bg-cover bg-center opacity-20 group-hover:opacity-30 transition-opacity duration-300" />
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
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Can't make it to an event?</h2>
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
              Our Global Exhibition Presence
            </motion.h3>
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="relative h-[300px] md:h-[400px] rounded-xl overflow-hidden border border-[#1E619E]/30"
            >
              <div className="absolute inset-0 bg-[#0A2A45]/80 flex items-center justify-center">
                <div className="text-white text-center">
                  <p className="text-lg mb-2">World Map Visualization</p>
                  <p className="text-sm text-gray-300">
                    Highlighting our exhibition presence in 20+ countries across 5 continents
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
} 