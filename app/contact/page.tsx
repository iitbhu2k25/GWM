'use client';

import { motion } from 'framer-motion';
import { Mail, MapPin, Clock, Send } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-slate-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-extrabold text-[#1e3a8a] mb-4"
          >
            Contact Us
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed"
          >
            Have questions about our groundwater monitoring system? Reach out to us, and
            our team will be happy to assist you.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column: Get In Touch */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-slate-100 flex flex-col h-full"
          >
            <h2 className="text-2xl font-bold text-slate-900 mb-8">Get In Touch</h2>

            <div className="space-y-8 flex-grow">
              {/* Email Section */}
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center shrink-0">
                  <Mail className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Email Us</p>
                  <a href="mailto:slcr@iitbhu.ac.in" className="text-slate-900 font-semibold hover:text-blue-600 transition-colors">
                    slcr@iitbhu.ac.in
                  </a>
                </div>
              </div>

              {/* Office Section */}
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 bg-purple-50 rounded-2xl flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Our Office</p>
                  <p className="text-slate-900 font-semibold leading-relaxed">
                    GWM-SLCR lab,<br />
                    Department of Civil Engineering,<br />
                    IIT (BHU) Varanasi, Uttar Pradesh,<br />
                    India - 221005
                  </p>
                </div>
              </div>

              {/* Office Hours Box */}
              <div className="bg-blue-50/50 rounded-2xl p-6 mt-12 border border-blue-100">
                <div className="flex items-center gap-3 mb-4">
                  <Clock className="w-5 h-5 text-blue-600" />
                  <h3 className="font-bold text-blue-900">Office Hours</h3>
                </div>
                <div className="space-y-2 text-sm text-blue-800/80">
                  <div className="flex justify-between">
                    <span>Monday - Friday:</span>
                    <span className="font-medium text-blue-900">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday:</span>
                    <span className="font-medium text-blue-900">10:00 AM - 2:00 PM</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Send Us a Message */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-slate-100"
          >
            <h2 className="text-2xl font-bold text-slate-900 mb-8">Send Us a Message</h2>

            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Full Name</label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all text-slate-900 placeholder:text-slate-400"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Email Address</label>
                  <input
                    type="email"
                    placeholder="john@example.com"
                    className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all text-slate-900 placeholder:text-slate-400"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Subject</label>
                <input
                  type="text"
                  placeholder="How can we help?"
                  className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all text-slate-900 placeholder:text-slate-400"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Message</label>
                <textarea
                  rows={6}
                  placeholder="Tell us about your inquiry..."
                  className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all text-slate-900 placeholder:text-slate-400 resize-none"
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl shadow-lg shadow-blue-500/30 transition-all flex items-center justify-center gap-3 group"
              >
                Send Message
                <Send className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
