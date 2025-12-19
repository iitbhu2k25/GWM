'use client';

import { motion } from 'framer-motion';
import { MapPin, Mail, Building2, Instagram, Facebook, Twitter, Linkedin, Navigation, Star, ExternalLink } from 'lucide-react';

export default function ContactPage() {
  return (
    <div
      className="min-h-screen"
      style={{
        backgroundImage: "url('/bg_contact.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Contact Content in a white card */}
      <section className="py-12 sm:py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl p-8 sm:p-10"
          >
            <div className="grid md:grid-cols-2 gap-10 items-start">
              {/* Left - Contact Info */}
              <div>
                {/* Main Heading with Icon */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 }}
                  className="flex items-center gap-3 mb-8"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center shadow-lg">
                    <Building2 className="w-6 h-6 text-white" />
                  </div>
                  <h1 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                    Smart Laboratory on Clean Rivers
                  </h1>
                </motion.div>

                {/* Address Card */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                  className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-5 mb-5 border border-blue-100 hover:shadow-md transition-shadow"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-800 mb-2">Address</h3>
                      <p className="text-blue-600 leading-relaxed">
                        Smart Laboratory for Clean Rivers (SLCR)<br />
                        Department of Civil Engineering,<br />
                        Indian Institute of Technology (BHU)<br />
                        Varanasi 221005
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* Email Card */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                  className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-5 mb-8 border border-blue-100 hover:shadow-md transition-shadow"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-800 mb-1">E-mail</h3>
                      <a
                        href="mailto:slcr.varanasi@gmail.com"
                        className="text-blue-600 hover:text-blue-800 hover:underline transition-colors text-lg font-medium"
                      >
                        slcr.varanasi@gmail.com
                      </a>
                    </div>
                  </div>
                </motion.div>

                {/* Social Media Links */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <h3 className="font-bold text-gray-800 mb-4">Connect With Us</h3>
                  <div className="flex gap-3">
                    <a
                      href="https://www.instagram.com/slcr.iitbhu/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400 rounded-xl flex items-center justify-center shadow-md hover:shadow-lg hover:scale-110 transition-all"
                    >
                      <Instagram className="w-6 h-6 text-white" />
                    </a>
                    <a
                      href="https://www.facebook.com/people/Smart-Lab-On-Clean-Rivers/61577375996615/#"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center shadow-md hover:shadow-lg hover:scale-110 transition-all"
                    >
                      <Facebook className="w-6 h-6 text-white" />
                    </a>
                    <a
                      href="https://x.com/JalTattva"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-gray-900 rounded-xl flex items-center justify-center shadow-md hover:shadow-lg hover:scale-110 transition-all"
                    >
                      <Twitter className="w-6 h-6 text-white" />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/slcr-smart-laboratory-on-clean-rivers-b65a4134a/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-blue-700 rounded-xl flex items-center justify-center shadow-md hover:shadow-lg hover:scale-110 transition-all"
                    >
                      <Linkedin className="w-6 h-6 text-white" />
                    </a>
                  </div>
                </motion.div>
              </div>

              {/* Right - Map with Info Card */}
              <div>
                {/* Google Maps Info Card */}
                <div className="bg-white rounded-t-lg border border-gray-200 border-b-0 p-4 shadow-sm">
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900 text-base mb-1">
                        Department of Civil Engineering, IIT BHU
                      </h3>
                      <p className="text-gray-600 text-sm leading-snug mb-2">
                        7X7R+5HP, Banaras Hindu University<br />
                        Campus, Varanasi, Uttar Pradesh<br />
                        221005
                      </p>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-sm font-medium text-gray-700">4.3</span>
                        <div className="flex">
                          {[1, 2, 3, 4].map(i => (
                            <Star key={i} className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
                          ))}
                          <Star className="w-3.5 h-3.5 fill-yellow-400/50 text-yellow-400" />
                        </div>
                        <span className="text-sm text-blue-600">71 reviews</span>
                      </div>
                      <a
                        href="https://maps.google.com/?q=Department+of+Civil+Engineering,+IIT+BHU,+Varanasi"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 text-sm hover:underline"
                      >
                        View larger map
                      </a>
                    </div>
                    <a
                      href="https://www.google.com/maps/dir//Department+of+Civil+Engineering,+IIT+BHU,+Varanasi"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex flex-col items-center text-blue-600 hover:text-blue-800 ml-4"
                    >
                      <Navigation className="w-5 h-5 mb-1" />
                      <span className="text-xs">Directions</span>
                    </a>
                  </div>
                </div>

                {/* Map */}
                <div className="rounded-b-lg overflow-hidden shadow-lg border-4 border-t-0 border-blue-500">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d902.168!2d82.9897!3d25.2658!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398e33e9b1d0cf67%3A0x7d59b28c42a6d80e!2sDepartment%20of%20Civil%20Engineering%2C%20IIT%20(BHU)!5e0!3m2!1sen!2sin!4v1703000000000"
                    width="100%"
                    height="350"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}