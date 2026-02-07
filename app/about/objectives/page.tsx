'use client';

import { motion } from 'framer-motion';
import { Target, CheckCircle } from 'lucide-react';

export default function ObjectivesPage() {
    const objectives = [
        {
            title: 'Scientific Groundwater Monitoring',
            description: 'GWM aims to establish a robust framework for real-time monitoring of groundwater levels and quality. By integrating telemetric sensors and satellite data, we provide a continuous stream of information for effective resource management.'
        },
        {
            title: 'Aquifer Mapping & Analysis',
            description: 'A key objective is to conduct detailed sub-surface mapping to identify high-potential groundwater zones and manage extraction patterns. This scientific approach ensures long-term aquifer sustainability.'
        },
        {
            title: 'Sustainable Extraction Strategies',
            description: 'GWM focuses on developing and implementing governance frameworks for regulated groundwater use. We aim to balance the needs of agriculture, industry, and domestic sectors while preventing over-exploitation.'
        },
        {
            title: 'Evidence-based Decision Making',
            description: 'We prioritize the use of advanced hydrogeological models and GIS-based analytical tools to support planning and policy decisions. This ensures that interventions are based on solid scientific evidence.'
        },
        {
            title: 'Recharge & Rejuvenation Pilots',
            description: 'GWM demonstrates effective groundwater recharge techniques tailored to Indian hydrogeological conditions. These pilot projects serve as templates for basin-wide rejuvenation initiatives.'
        },
        {
            title: 'Knowledge & Capacity Building',
            description: 'We are committed to empowering stakeholders through technical training and knowledge dissemination. GWM supports the exchange of expertise among researchers, policymakers, and communities.'
        }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
            {/* Hero Section */}
            <section className="py-16 px-4">
                <div className="max-w-6xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-center"
                    >
                        <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl mb-6 shadow-lg">
                            <Target className="w-10 h-10 text-white" />
                        </div>
                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-teal-500">
                            Objectives of GWM
                        </h1>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                            The Groundwater Management (GWM) portal is dedicated to fostering sustainable water resources through scientific innovation, interactive monitoring, and strategic aquifer rejuvenation.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Objectives Grid */}
            <section className="py-12 px-4 pb-20">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {objectives.map((objective, index) => (
                            <motion.div
                                key={objective.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: index * 0.1 }}
                                className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all border border-gray-100"
                            >
                                <div className="flex items-start gap-4">
                                    <div className="flex-shrink-0">
                                        <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center">
                                            <CheckCircle className="w-5 h-5 text-blue-600" />
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-800 mb-3">{objective.title}</h3>
                                        <p className="text-gray-600 leading-relaxed text-justify">{objective.description}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
