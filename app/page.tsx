'use client';

import { useEffect, useState, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  motion,
  AnimatePresence,
  useMotionTemplate,
  useMotionValue
} from 'framer-motion';
import {
  ArrowRight,
  Droplets,
  MapPin,
  AlertTriangle,
  Shield,
  Waves,
  FlaskConical,
  Gauge,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

// ===== SLIDER IMAGES =====
const sliderImages = [
  { src: '/home/acq1.png', alt: 'Groundwater Monitoring Station' },
  { src: '/home/p1.png', alt: 'Aquifer Visualization' },
  { src: '/home/p2.png', alt: 'Groundwater Monitoring Network' },
];

// ===== HERO IMAGE SLIDER COMPONENT =====
function HeroImageSlider() {
  const [[page, direction], setPage] = useState([0, 0]);
  const [isPaused, setIsPaused] = useState(false);

  const imageIndex = Math.abs(page % sliderImages.length);

  const paginate = useCallback((newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  }, [page]);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      paginate(1);
    }, 5000);
    return () => clearInterval(interval);
  }, [isPaused, paginate]);

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? '100%' : '-100%',
      opacity: 0,
      scale: 1,
      zIndex: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? '100%' : '-100%',
      opacity: 0,
      scale: 1
    })
  };

  return (
    <div className="relative group">
      <section
        className="relative w-full h-[500px] sm:h-[600px] md:h-[850px] overflow-hidden bg-slate-900"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div className="absolute inset-0">

          {/* FULL WIDTH MAIN IMAGE */}
          <div className="relative w-full h-full z-20 overflow-hidden">
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={page}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.3 }
                }}
                className="absolute inset-0 w-full h-full"
              >
                <Image
                  src={sliderImages[imageIndex].src}
                  alt={sliderImages[imageIndex].alt}
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                {/* Hero Overlay Text */}
{/* 1. Change 'items-center justify-center' to 'items-center justify-start' */}
<div className="absolute inset-0 flex items-center justify-start">
  
  {/* 2. Change 'text-center' to 'text-left', add 'ml-4 sm:ml-12 md:ml-20' for padding from the left edge */}
  <div className="text-left text-white px-6 max-w-5xl ml-4 sm:ml-12 md:ml-20">
    <motion.h1
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
      className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black mb-6 drop-shadow-2xl"
    >
      Groundwater Monitoring
      <span className="block text-cyan-400 mt-2">& Analysis Portal</span>
    </motion.h1>
    
    <motion.p
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 }}
      /* 3. Remove 'mx-auto' so the paragraph stays left-aligned */
      className="text-lg sm:text-2xl md:text-3xl font-medium mb-10 drop-shadow-lg text-slate-100 max-w-4xl"
    >
      Advanced real-time monitoring and scientific analysis for sustainable groundwater management.
    </motion.p>
    
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.7 }}
    >
      <Link
        href="/about/overview"
        className="inline-flex items-center gap-3 px-10 py-5 bg-cyan-500 hover:bg-cyan-600 text-white font-bold rounded-full shadow-2xl transition-all hover:scale-105 text-lg"
      >
        Explore Overview
        <ArrowRight className="w-6 h-6" />
      </Link>
    </motion.div>
  </div>
</div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Arrows - Global Overlay */}
          <div className="absolute inset-y-0 left-0 z-30 flex items-center px-4 md:px-8 opacity-0 group-hover:opacity-100 transition-opacity">
            <button
              onClick={() => paginate(-1)}
              className="p-3 rounded-full bg-white/10 backdrop-blur-md hover:bg-white/20 transition-all focus:outline-none"
            >
              <ChevronLeft className="w-8 h-8 md:w-10 md:h-10 text-white" />
            </button>
          </div>
          <div className="absolute inset-y-0 right-0 z-30 flex items-center px-4 md:px-8 opacity-0 group-hover:opacity-100 transition-opacity">
            <button
              onClick={() => paginate(1)}
              className="p-3 rounded-full bg-white/10 backdrop-blur-md hover:bg-white/20 transition-all focus:outline-none"
            >
              <ChevronRight className="w-8 h-8 md:w-10 md:h-10 text-white" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

// ===== ABOUT & AIMS SECTION =====
function AboutAimsSection() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <section id="about" className="py-16 sm:py-24 px-4 sm:px-6 bg-gradient-to-br from-white via-blue-50/30 to-cyan-50/30">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-slate-800 mb-4">
            Advanced Groundwater <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-cyan-500 to-teal-500">Solutions</span>
          </h2>
          <div className="w-32 h-2 bg-gradient-to-r from-blue-600 via-cyan-500 to-teal-500 rounded-full mx-auto" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">

          {/* About GWM Card with Spotlight */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="group relative rounded-3xl overflow-hidden"
            onMouseMove={handleMouseMove}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-400 via-cyan-400 to-teal-400 opacity-[0.03]" />
            <motion.div
              className="pointer-events-none absolute -inset-px opacity-0 transition duration-500 group-hover:opacity-100 rounded-3xl"
              style={{
                background: useMotionTemplate`
                  radial-gradient(
                    600px circle at ${mouseX}px ${mouseY}px,
                    rgba(14, 165, 233, 0.15),
                    transparent 60%
                  )
                `,
              }}
            />

            <div className="relative bg-white border border-slate-200 shadow-xl rounded-3xl p-8 sm:p-10 flex flex-col h-full">
              <div className="mb-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center shadow-lg">
                    <Droplets className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-blue-600 uppercase tracking-wider">About</div>
                    <h3 className="text-2xl sm:text-3xl font-black text-slate-800">GWM Portal</h3>
                  </div>
                </div>
                <div className="w-24 h-1.5 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full" />
              </div>

              <div className="space-y-4 text-slate-600 text-base leading-relaxed flex-grow">
                <p>
                  The <strong className="text-slate-800">Groundwater Monitoring & Analysis Portal (GWM)</strong> is a comprehensive platform designed to provide real-time monitoring, analysis, and sustainable management of groundwater resources.
                </p>
                <p>
                  Through an integrated network of <strong className="text-slate-800">automated sensors, satellite imagery</strong>, and advanced hydrogeological models, GWM delivers actionable insights on groundwater levels, quality, and aquifer dynamics.
                </p>
              </div>

              <div className="mt-8">
                <Link href="/about/overview" className="inline-flex items-center gap-2 text-blue-600 font-bold hover:gap-3 transition-all">
                  Read Overview <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </motion.div>

          {/* Strategic Aims List */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col gap-4"
          >
            {[
              {
                icon: '📊',
                title: 'Real-time Monitoring',
                description: 'Continuous tracking of groundwater levels and quality across regions.',
                gradient: 'from-blue-500 to-cyan-500'
              },
              {
                icon: '💡',
                title: 'Data-Driven Decisions',
                description: 'Support evidence-based policymaking for water resource management.',
                gradient: 'from-cyan-500 to-teal-500'
              },
              {
                icon: '⚠️',
                title: 'Early Warning Systems',
                description: 'Detect contamination and over-exploitation risks before critical thresholds.',
                gradient: 'from-teal-500 to-emerald-500'
              }
            ].map((aim, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.02, x: 10 }}
                className="flex gap-4 p-5 rounded-2xl bg-white border border-slate-100 shadow-lg hover:border-blue-200 transition-all cursor-default"
              >
                <div className={`flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br ${aim.gradient} flex items-center justify-center shadow-md text-2xl`}>
                  {aim.icon}
                </div>
                <div>
                  <h4 className="font-bold text-slate-800 mb-1 text-lg">{aim.title}</h4>
                  <p className="text-slate-600 text-sm leading-relaxed">{aim.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ===== ANALYSIS MODULES =====
const modules = [
  {
    icon: Gauge,
    title: 'Depth Monitoring',
    description: 'Continuous tracking of water table levels, seasonal variations, and long-term trends.',
    href: '/gw-depth',
    color: 'from-violet-600 to-purple-500',
  },
  {
    icon: FlaskConical,
    title: 'Water Quality',
    description: 'Comprehensive testing and monitoring of physical, chemical, and biological parameters.',
    href: '/gw-quality',
    color: 'from-teal-600 to-cyan-500',
  },
  {
    icon: Droplets,
    title: 'Groundwater Potential',
    description: 'Mapping and analysis of groundwater reserves, aquifer capacity, and recharge zones.',
    href: '/gw-potential',
    color: 'from-blue-600 to-cyan-500',
  },
  {
    icon: MapPin,
    title: 'Pumping Location',
    description: 'Real-time monitoring of extraction points, pumping rates, and distribution analysis.',
    href: '/gw-pumping',
    color: 'from-emerald-600 to-teal-500',
  },
  {
    icon: AlertTriangle,
    title: 'Emerging Contamination',
    description: 'Advanced detection and tracking of emerging contaminants in groundwater systems.',
    href: '/emerging-contamination',
    color: 'from-orange-600 to-red-500',
  },
  {
    icon: Shield,
    title: 'Vulnerability Assessment',
    description: 'Risk evaluation of aquifer susceptibility to pollution and over-exploitation.',
    href: '/gw-vulnerability',
    color: 'from-purple-600 to-pink-500',
  },
  {
    icon: Waves,
    title: 'River-Aquifer Exchange',
    description: 'Analysis of surface water and groundwater interaction dynamics and flow patterns.',
    href: '/river-aquifer',
    color: 'from-indigo-600 to-blue-500',
  },
];

function ModulesSection() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <section id="modules" className="py-16 sm:py-24 px-4 sm:px-6 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-block px-5 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-bold tracking-wide uppercase mb-4">
            🔍 Monitoring Modules
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-800">
            Analysis Modules
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full mx-auto mt-4" />
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {modules.map((module, index) => (
            <motion.div
              key={module.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              onMouseMove={handleMouseMove}
              className="group relative"
            >
              <Link href={module.href}>
                <div className="relative bg-white rounded-3xl p-8 shadow-lg border border-slate-100 hover:shadow-2xl hover:border-blue-200 transition-all duration-300 overflow-hidden h-full flex flex-col">
                  {/* Spotlight Effect */}
                  <motion.div
                    className="pointer-events-none absolute -inset-px opacity-0 transition duration-500 group-hover:opacity-100 rounded-3xl"
                    style={{
                      background: useMotionTemplate`
                        radial-gradient(
                          400px circle at ${mouseX}px ${mouseY}px,
                          rgba(14, 165, 233, 0.1),
                          transparent 80%
                        )
                      `,
                    }}
                  />

                  <div className="relative flex flex-col flex-grow">
                    <div className={`w-14 h-14 bg-gradient-to-br ${module.color} rounded-xl flex items-center justify-center mb-6 shadow-lg transform group-hover:scale-110 transition-transform`}>
                      <module.icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-blue-600 transition-colors">
                      {module.title}
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed flex-grow">
                      {module.description}
                    </p>
                    <div className="mt-6 flex items-center gap-2 text-blue-600 font-bold text-sm">
                      <span>Explore Module</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <HeroImageSlider />
      <AboutAimsSection />
      <ModulesSection />
    </div>
  );
}
