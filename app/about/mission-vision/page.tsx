'use client';

import { motion } from 'framer-motion';
import { Eye, Rocket } from 'lucide-react';

export default function VisionMissionPage() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
            {/* Hero Section */}
            <section className="py-16 px-4">
                <div className="max-w-6xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-center"
                    >
                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-500">
                            Vision & Mission
                        </h1>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                            Strategic principles guiding our commitment to sustainable groundwater management and resources development.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Vision Section */}
            <section className="py-12 px-4">
                <div className="max-w-5xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="bg-white rounded-3xl p-8 md:p-10 shadow-lg border border-purple-100 mb-8"
                    >
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg">
                                <Eye className="w-8 h-8 text-white" />
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold text-purple-700">Vision</h2>
                        </div>
                        <div className="space-y-4 text-gray-700 leading-relaxed text-lg">
                            <p>
                                The vision of Groundwater Management (GWM) is to emerge as a <strong className="text-purple-700">globally recognized center of excellence</strong> for aquifer rejuvenation and sustainable water resource development.
                            </p>
                            <p>
                                We envision a future where groundwater systems are managed through advanced scientific insights and adaptive governance, ensuring long-term <strong className="text-purple-700">water security</strong> for agriculture, industry, and ecosystems alike.
                            </p>
                        </div>
                    </motion.div>

                    {/* Mission Section */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="bg-white rounded-3xl p-8 md:p-10 shadow-lg border border-pink-100"
                    >
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-rose-500 rounded-2xl flex items-center justify-center shadow-lg">
                                <Rocket className="w-8 h-8 text-white" />
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold text-pink-700">Mission</h2>
                        </div>
                        <div className="space-y-4 text-gray-700 leading-relaxed text-lg text-justify">
                            <p>
                                Establishing a <strong className="text-pink-700">comprehensive digital platform</strong> for real-time monitoring and hydrogeological analysis that empowers stakeholders with actionable data.
                            </p>
                            <p>
                                Strengthening the <strong className="text-pink-700">science–policy interface</strong> by integrating advanced aquifer modeling and extraction data into regional water management strategies.
                            </p>
                            <p>
                                Leveraging international strategic partnerships to implement and upscale <strong className="text-pink-700">innovative groundwater recharge solutions</strong> tailored to diverse hydrogeological settings.
                            </p>
                            <p>
                                Supporting national priorities in water conservation by developing <strong className="text-pink-700">replicable models</strong> for groundwater governance and sustainable resource utilization across river basins.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Bottom spacing */}
            <div className="h-20" />
        </div>
    );
}
