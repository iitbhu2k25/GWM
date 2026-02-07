'use client';

import { motion } from 'framer-motion';
import { Heart, Leaf, Users, Lightbulb, Shield, Scale } from 'lucide-react';

const coreValues = [
    {
        icon: Leaf,
        title: 'Water Stewardship',
        description: 'Sustainability is at the heart of GWM, emphasizing environmentally sound and socially inclusive strategies for long-term groundwater resource management.',
        color: 'from-green-500 to-emerald-500',
        bgColor: 'bg-green-50',
        borderColor: 'border-green-200'
    },
    {
        icon: Shield,
        title: 'Scientific Excellence',
        description: 'Decisions and recommendations at GWM are grounded in robust hydrogeological data, rigorous analysis, and transparent scientific methodologies to ensure resource reliability.',
        color: 'from-purple-500 to-violet-500',
        bgColor: 'bg-purple-50',
        borderColor: 'border-purple-200'
    },
    {
        icon: Lightbulb,
        title: 'Technological Innovation',
        description: 'We embrace advanced telemetric monitoring, satellite remote sensing, and hydrogeological simulations to provide proactive solutions for aquifer rejuvenation.',
        color: 'from-amber-500 to-orange-500',
        bgColor: 'bg-amber-50',
        borderColor: 'border-amber-200'
    },
    {
        icon: Users,
        title: 'Collaborative Governance',
        description: 'GWM fosters active cooperation between government agencies, global research institutes, and local stakeholders to address complex underground water challenges.',
        color: 'from-blue-500 to-cyan-500',
        bgColor: 'bg-blue-50',
        borderColor: 'border-blue-200'
    },
    {
        icon: Scale,
        title: 'Transparency',
        description: 'Transparency and accountability underpin our digital data architecture, fostering trust through open access to critical groundwater monitoring metrics.',
        color: 'from-teal-500 to-cyan-500',
        bgColor: 'bg-teal-50',
        borderColor: 'border-teal-200'
    },
    {
        icon: Heart,
        title: 'Social Inclusivity',
        description: 'We ensure that community perspectives and local hydro-geological knowledge are integrated into the design and implementation of groundwater conservation strategies.',
        color: 'from-rose-500 to-pink-500',
        bgColor: 'bg-rose-50',
        borderColor: 'border-rose-200'
    }
];

export default function CoreValuesPage() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-rose-50 to-white">
            {/* Hero Section */}
            <section className="py-16 px-4">
                <div className="max-w-6xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-center"
                    >
                        <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-rose-500 to-pink-500 rounded-2xl mb-6 shadow-lg">
                            <Heart className="w-10 h-10 text-white" />
                        </div>
                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-rose-600 to-pink-500">
                            Core Values
                        </h1>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                            Groundwater Management (GWM) operates on a strong foundation of values that guide our research, monitoring, and strategic rejuvenation efforts.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Values Grid */}
            <section className="py-12 px-4 pb-20">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {coreValues.map((value, index) => (
                            <motion.div
                                key={value.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: index * 0.1 }}
                                className={`${value.bgColor} rounded-2xl p-6 border ${value.borderColor} hover:shadow-xl transition-all`}
                            >
                                <div className={`w-14 h-14 bg-gradient-to-br ${value.color} rounded-xl flex items-center justify-center mb-4 shadow-md`}>
                                    <value.icon className="w-7 h-7 text-white" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-800 mb-3">{value.title}</h3>
                                <p className="text-gray-600 leading-relaxed text-justify">{value.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
