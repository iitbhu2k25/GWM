'use client';

import { motion } from 'framer-motion';
import { 
  Activity, Microscope, Database, Map, 
  ShieldCheck, Waves, Zap, Navigation, 
  Beaker, TrendingDown, Droplets, Layers 
} from 'lucide-react';

export default function GWMOverviewPage() {
    return (
        <div className="min-h-screen bg-white">
            {/* Hero Header */}
            <section className="relative py-24 bg-[#0a192f] overflow-hidden text-center">
                <div className="absolute inset-0 opacity-20">
                    <img 
                        src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2000" 
                        alt="Aquifer Monitoring Background" 
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="relative max-w-7xl mx-auto px-4">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight"
                    >
                        Groundwater <span className="text-cyan-400">Management System</span>
                    </motion.h1>
                    <p className="text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
                        A holistic digital framework for real-time monitoring, scientific analysis, and sustainable governance of subsurface water resources across the Ganga Basin.
                    </p>
                </div>
            </section>

            <div className="max-w-7xl mx-auto px-4 py-20">

                {/* 1. Depth Monitoring */}
                <div className="grid md:grid-cols-2 gap-16 items-center mb-32">
                    <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                        <div className="flex items-center gap-3 mb-6">
                            <span className="p-3 bg-blue-100 rounded-2xl text-blue-600"><TrendingDown className="w-6 h-6" /></span>
                            <h2 className="text-3xl font-bold text-slate-900">Depth Monitoring</h2>
                        </div>
                        <p className="text-slate-600 text-lg leading-relaxed mb-6">
                            Tracking piezometric fluctuations using a network of **Digital Water Level Recorders (DWLR)**. This module provides critical data on aquifer drawdown, seasonal recovery rates, and the impact of climate variability on water tables.
                        </p>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                                <div className="text-blue-600 font-bold">Real-time</div>
                                <div className="text-sm text-slate-500">Hydrostatic Pressure</div>
                            </div>
                            <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                                <div className="text-blue-600 font-bold">Historical</div>
                                <div className="text-sm text-slate-500">Trend Analysis</div>
                            </div>
                        </div>
                    </motion.div>
                    <img 
                        src="https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&q=80&w=800" 
                        className="rounded-[2.5rem] shadow-2xl h-96 w-full object-cover border-[12px] border-slate-50" 
                        alt="Water Level Monitoring" 
                    />
                </div>

       

                {/* 3. Potential & Pumping Management */}
                <div className="bg-slate-900 rounded-[4rem] p-12 md:p-20 mb-32 text-white">
                    <div className="grid md:grid-cols-2 gap-16">
                        <div>
                            <div className="flex items-center gap-3 mb-6">
                                <Zap className="w-8 h-8 text-amber-400" />
                                <h3 className="text-3xl font-bold">Groundwater Potential</h3>
                            </div>
                            <p className="text-slate-400 text-lg leading-relaxed">
                                Advanced GIS mapping of aquifer yield and storage capacity. By identifying high-potential zones, we guide sustainable development of new water sources while protecting over-exploited blocks.
                            </p>
                        </div>
                        <div>
                            <div className="flex items-center gap-3 mb-6">
                                <Navigation className="w-8 h-8 text-emerald-400" />
                                <h3 className="text-3xl font-bold">Pumping Location</h3>
                            </div>
                            <p className="text-slate-400 text-lg leading-relaxed">
                                Tracking the spatial density of abstraction units to prevent well interference. This helps maintain a stable hydraulic gradient and avoids localized land subsidence.
                            </p>
                        </div>
                    </div>
                </div>

                {/* 4. Vulnerability & River Interaction */}
                <div className="grid md:grid-cols-2 gap-16 items-center">
                    <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                        <div className="flex items-center gap-3 mb-6">
                            <span className="p-3 bg-indigo-100 rounded-2xl text-indigo-600"><ShieldCheck className="w-6 h-6" /></span>
                            <h2 className="text-3xl font-bold text-slate-900">Vulnerability & RAE</h2>
                        </div>
                        <div className="space-y-6">
                            <div className="p-6 bg-slate-50 rounded-3xl border border-slate-200">
                                <h4 className="font-bold text-slate-800 mb-2">Vulnerability Assessment</h4>
                                <p className="text-slate-600">Mapping aquifer sensitivity to surface pollution using the **DRASTIC index**, identifying zones at high risk of rapid contaminant transport.</p>
                            </div>
                            <div className="p-6 bg-slate-50 rounded-3xl border border-slate-200">
                                <h4 className="font-bold text-slate-800 mb-2">River-Aquifer Exchange (RAE)</h4>
                                <p className="text-slate-600">Quantifying the dynamic flow between the Ganga riverbed and adjacent aquifers to ensure the river's **baseflow** during lean seasons.</p>
                            </div>
                        </div>
                    </motion.div>
                    <div className="relative">
                        <img 
                            src="https://images.unsplash.com/photo-1444491741275-3747c53c99b4?auto=format&fit=crop&q=80&w=800" 
                            className="rounded-[3rem] shadow-2xl h-[500px] w-full object-cover border-[12px] border-slate-50" 
                            alt="River Hydrology" 
                        />
                        <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-3xl shadow-xl border border-slate-100 max-w-[220px]">
                            <Waves className="w-8 h-8 text-blue-600 mb-2" />
                            <div className="text-sm font-bold text-slate-800">Integrated Hydrogeological Modeling</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}