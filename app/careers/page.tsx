import Link from 'next/link';
import Image from 'next/image';
import { Briefcase, Search } from 'lucide-react';
import Header from '../components/Header';

export default function CareersPage() {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-gradient-to-br from-gray-100 to-blue-50 py-16 px-4 sm:px-6 lg:px-8 font-rubik pt-[110px]">
        <div className="max-w-4xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-16">
            <Briefcase className="mx-auto h-16 w-16 text-[#0F4679] mb-6" />
            <h1 className="text-5xl font-bold text-gray-800 mb-4 flex items-center justify-center">
              Join Our Team at 
              <span className="ml-3">
                <Image 
                  src="/acprod.png" 
                  alt="Acuron Logo" 
                  width={216}
                  height={60}
                  className="inline-block align-middle h-16 w-auto"
                />
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We are always looking for passionate and talented individuals to help us innovate in the medical supply industry. Explore opportunities to grow with us.
            </p>
          </div>

          {/* Search and Filters - Future enhancement placeholder */}
          {/* 
          <div className="mb-12 p-6 bg-white rounded-xl shadow-lg border border-gray-200">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label htmlFor="keywords" className="block text-sm font-medium text-gray-700 mb-1">Keywords</label>
                <div className="relative">
                  <input
                    type="text"
                    name="keywords"
                    id="keywords"
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg shadow-sm focus:ring-[#0F4679] focus:border-[#0F4679] placeholder-gray-400 text-sm"
                    placeholder="e.g., Sales, Engineering"
                  />
                  <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                </div>
              </div>
              <div>
                <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">Location</label>
                <input
                  type="text"
                  name="location"
                  id="location"
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg shadow-sm focus:ring-[#0F4679] focus:border-[#0F4679] placeholder-gray-400 text-sm"
                  placeholder="e.g., Mumbai, Remote"
                />
              </div>
              <div>
                <label htmlFor="department" className="block text-sm font-medium text-gray-700 mb-1">Department</label>
                <select
                  id="department"
                  name="department"
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg shadow-sm focus:ring-[#0F4679] focus:border-[#0F4679] text-sm text-gray-700"
                >
                  <option>All Departments</option>
                  <option>Sales & Marketing</option>
                  <option>Operations</option>
                  <option>Research & Development</option>
                  <option>Customer Support</option>
                </select>
              </div>
            </div>
          </div>
          */}

          {/* Job Postings Section */}
          <div className="bg-white rounded-xl shadow-xl border border-gray-200 overflow-hidden">
            <div className="p-8 sm:p-10">
              <h2 className="text-3xl font-semibold text-gray-800 mb-2">Current Openings</h2>
              <p className="text-gray-600 mb-8">
                Thank you for your interest in a career at Acuron. While we don't have any specific openings at this moment, we are always keen to hear from talented individuals.
              </p>

              <div className="text-center py-12 px-6 bg-gray-50 rounded-lg border-2 border-dashed border-gray-300">
                <Briefcase className="mx-auto h-12 w-12 text-gray-400 mb-4" />
                <h3 className="text-xl font-medium text-gray-700 mb-2">No Job Postings Currently Available</h3>
                <p className="text-gray-500 mb-6 max-w-md mx-auto">
                  Please check back later or feel free to send us your resume speculatively. We appreciate your interest in Acuron!
                </p>
                <a
                  href="mailto:careers@acuron.com" // Replace with your actual careers email
                  className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-lg shadow-sm text-white bg-[#0F4679] hover:bg-[#0d3c6b] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#0F4679] transition-colors duration-300"
                >
                  Submit Your Resume
                </a>
              </div>
            </div>

            {/* Call to action for future or general applications */}
            <div className="bg-gray-50 px-8 py-8 border-t border-gray-200 sm:px-10">
              <div className="max-w-md mx-auto text-center">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Why Join Acuron?</h3>
                <p className="text-gray-600 mb-6">
                  Be part of a dynamic team dedicated to improving healthcare through innovative medical solutions. We offer a collaborative environment where your contributions make a real impact.
                </p>
                <Link
                  href="/#about-us-section" 
                  className="text-sm font-semibold text-[#0F4679] hover:text-[#0d3c6b] transition-colors duration-300"
                >
                  Learn more about our mission & values &rarr;
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

// Make sure to install lucide-react if you haven't: npm install lucide-react
// Or: yarn add lucide-react 