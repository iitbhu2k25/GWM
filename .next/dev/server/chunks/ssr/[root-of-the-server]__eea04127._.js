module.exports = [
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[project]/lib/data.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "categories",
    ()=>categories,
    "technologies",
    ()=>technologies
]);
const categories = {
    decentralized: 'Decentralized Units & NBS (Nature based Solutions)',
    'stp_improvement': 'STP Improvement',
    'smart_monitoring': 'Smart Monitoring',
    'sludge_treatment': 'Sludge/Solid Waste Treatment'
};
const technologies = [
    {
        id: 1,
        name: 'Floating Wetlands',
        country: 'Denmark, USA',
        category: 'decentralized',
        currentGap: 'In India, natural based treatment solutions like wetlands are underutilized and often poorly maintained.',
        technology: 'Growing plants over floating platforms helps in absorbing and degrading pollutants from water bodies.',
        novelty: 'Selected plants and biofilm have been checked for showing its effectiveness in removing the specific pollutants.',
        details: 'Remove dissolved nutrients and heavy metals from water bodies\n• FW size is scalable and has modular design\n•  Plants and the plant-microbe interactions in the lower surface of the floating island absorb and remove contaminants from the water while supporting other natural processes such as denitrification and sedimentation\n•  Heavy metals (Cd, Cr(VI), Pb, Co, Cu, Pb, Ni, Se, Zn) and Nutrients (e.g. nitrate, ammonium, phosphate) removal from water body has been removed',
        fieldApplication: 'Has been applied successfully in Denmark.',
        limitations: 'Requires regular monitoring and maintenance. To remove carbon from water bodies, microbial culturing needs to be done.',
        status: 'Communication is under progress.',
        references: [
            {
                "Eco Island": "https://www.ecoisland.dk/services/",
                "Floating Island International Inc": "https://www.floatingislandinternational.com/contact.html"
            }
        ],
        images: [
            '/Photos/Floating Wetlands-/Picture1.jpg',
            '/Photos/Floating Wetlands-/Picture2.png'
        ]
    },
    {
        id: 2,
        name: 'Photosynthesis Based Wastewater Treatment Using Gir Cow Urine,',
        country: 'India',
        category: 'decentralized',
        currentGap: 'Conventional wetland treatment requires longer treatment time with less efficiency.',
        technology: 'Wastewater passed through wetland plants mixed with Gir cow urine gives high efficiency for pollutant degradation.',
        novelty: 'Gir cow urine has been tested along with wetland plants and found to have high catalytic properties for the degradation of domestic wastewater.',
        details: '• Leverage the nutrients in urine to support microbial and algal growth, aiding in purification\n•  Gir Cow Urine’s nutrients-rich composition enhances microbial activity\n•  Microalgae and purple phototrophic bacteria can play a role in purifying wastewater by absorbing nutrients and break down organic matter\n•  Photosynthetic microorganism utilize its nutrients to enhance purification efficiency.',
        fieldApplication: 'Lab testing has been conducted with successful results.',
        limitations: 'Takes longer treatment time compared to conventional wastewater technologies.',
        status: 'Initial presentation conducted. Second phase meeting is in progress.',
        references: [
            {
                "Pinakin Technology Solutions Pvt Ltd": "https://pinakin.co.in/"
            }
        ],
        images: [
            '/Photos/Photosynthesis Based/Picture3.jpg',
            '/Photos/Photosynthesis Based/Picture5.png'
        ]
    },
    {
        id: 3,
        name: 'Soil Biotechnology (SBT)',
        country: 'India',
        category: 'decentralized',
        currentGap: 'Treating wastewater using nature based solutions with less cost than STP is a big challenge.',
        technology: 'Soil biotechnology (SBT) is a terrestrial system for wastewater treatment based on the principle of the trickling filter.',
        novelty: 'Has potential to be used in place of STP, ETP, ZLD for industries and rivers and lake rejuvenation.',
        details: '• SBT systems are constructed from RCC, stonemasonry or soil bunds. They comprise a raw-water tank, bioreactor containment, treated water tank, piping and pumps.\n• Suitable mineral constitution, bacterial culture and bio-indicator plants are the components of the system.\n• Water passes through the artificial wetland vertically from top to down.\n• Removal processes involves adsorption & filtration on media and biological degradation.',
        fieldApplication: 'SBT plant has been developed in IIT Bombay and has been implemented successfully in Bengaluru and Mumbai.',
        limitations: 'SBT type wastewater treatment plants require high land area of around 2.5 m²/m³ of wastewater treatment.',
        status: 'Communication is under progress.',
        references: [
            {
                'visionearthcare': "https://www.visionearthcare.com/technology/sbt"
            }
        ],
        images: [
            '/Photos/Soil biotechnology (SBT)/Picture6.jpg',
            '/Photos/Soil biotechnology (SBT)/Picture7.png',
            '/Photos/Soil biotechnology (SBT)/Picture8.jpg'
        ]
    },
    {
        id: 4,
        name: 'Phytorid',
        country: 'India',
        category: 'decentralized',
        currentGap: 'In India, natural wetland treatment systems occupy a lot of area.',
        technology: 'Treats the water using natural wetland technology.',
        novelty: 'Produces better output in less area requirement compared with conventional wetland systems.',
        details: '• Constructed wetland capable of treatment of municipal, urban, agricultural and industrial wastewater.\n• The system consists of the 3 zones - Inlet zone of crushed bricks and different sizes of stones; Treatment zone consisting of the same media as in inlet zone with plant species; outlet zone.\n• The total area required for the system is approximately 35 m² for 20 m³/day of wastewater.',
        fieldApplication: 'Has been successfully implemented in various places such as in Mumbai and Buldhana.',
        limitations: 'Initial cost and time taken for complete cleaning of water body is high.',
        status: 'Communication is in progress.',
        references: [
            {
                'NEERI Nagpur': "https://www.neeri.res.in/contents/banner_details/phytorid-wastewater-treatment-technology/5b193f6eaacd7googtrans(en%7Cen)"
            }
        ],
        images: [
            '/Photos/Phytorid/Picture9.png',
            '/Photos/Phytorid/Picture10.png'
        ]
    },
    {
        id: 5,
        name: 'Freeze Technology',
        country: 'India',
        category: 'decentralized',
        currentGap: 'Conventional technologies for industrial wastewater like evaporators require high energy, crystallizers are costly, and RO has high reject.',
        technology: 'Freezing the wastewater at the water freezing temperature causes easy separation of pollutant and pure ice.',
        novelty: 'Suitable for high strength wastewater and economical compared to conventional RO and evaporation method.',
        details: '• Recovery of salts from wastewater like NaCl, Na2SO4, CaCl2, CaCO3 with efficiency up to 90-95% can be achieved.\n• Suitable for recovery of clean water from various high strength industrial effluents like Dyes, Textile, Agrochemical, Insecticides & Pharmaceutical units.\n• Recovery of expensive minerals from waste discharge of Mining Industry is possible.\n• Desalination (making sea water drinkable).',
        fieldApplication: 'Successfully implemented and got results for mining industry in India.',
        limitations: 'Less efficient for domestic sewage having less organics (BOD < 500 mg/L).',
        status: 'Initial presentation conducted by company. Second phase meeting is in progress.',
        references: [
            {
                "Pinakin Technologies Company": "https://pinakin.co.in/"
            }
        ],
        images: [
            '/Photos/Freeze Technology/Picture11.png',
            '/Photos/Freeze Technology/Picture12.png'
        ]
    },
    {
        id: 6,
        name: 'Nano-Bubble Generators',
        country: 'USA',
        category: 'decentralized',
        currentGap: 'Conventional aerators produce very less oxygen and have low oxygen dissolution capability.',
        technology: 'The generators produce very fine air bubbles in nanometer size.',
        novelty: 'Nanobubble generators deliver >85% oxygen transfer efficiency in the water body.',
        details: '• It is scalable, retrofittable, and can be easily used for any kind of water body.\n• The system works with gases like oxygen, ozone, and CO₂, and supports a wide range of system capacities.\n• No chemical usage and the oxygen helps in degrading organics which improves water quality.',
        fieldApplication: 'Used in agriculture to boost plant growth, aquaculture to improve fish health, and wastewater to enhance water quality.',
        limitations: 'High initial investment needed.',
        status: 'Initial response received. Presentation was scheduled; no response.',
        references: [
            {
                "http://www.moleaer.com/": "http://www.moleaer.com/"
            }
        ],
        images: [
            '/Photos/Nano-Bubble Generators/Picture13.jpg',
            '/Photos/Nano-Bubble Generators/Picture14.jpg'
        ]
    },
    {
        id: 7,
        name: 'Watopi',
        country: 'Denmark',
        category: 'decentralized',
        currentGap: 'Many rural and peri-urban areas in India lack scalable, affordable, and easily manageable decentralized wastewater treatment infrastructure.',
        technology: 'Modular, prefabricated plug-and-play decentralized wastewater treatment units (e.g., MBRs, SBRs), incorporated with smart monitoring systems.',
        novelty: 'Scalable, low operation & management, minimal land and energy needs, solar-enabled and ideal for small communities where centralized systems are not feasible.',
        details: '• Can treat sewage generated from 5 to 1000 persons.\n• Suitable for schools, apartments, townships and promotes local water reuse.',
        fieldApplication: 'Similar decentralized solutions deployed across 50+ countries including India by various providers.',
        limitations: 'Requires regular service visits for consistent long-term functionality.',
        status: 'Communication is under process.',
        references: [
            {
                "http://www.biokube.dk/": "http://www.biokube.dk/"
            }
        ],
        images: [
            '/Photos/Watopi- BioKube, Denmark/Picture15.png',
            '/Photos/Watopi- BioKube, Denmark/Picture16.jpg',
            '/Photos/Watopi- BioKube, Denmark/Picture17.jpg'
        ]
    },
    {
        id: 8,
        name: 'Microbial Fuel Cell',
        country: 'USA',
        category: 'decentralized',
        currentGap: 'High strength aerobic wastewater degradation requires a lot of energy consumption.',
        technology: 'Produces electricity by degrading pollutants.',
        novelty: 'Patented technology (BETT®, USA) - Can produce electricity while degrading pollutants.',
        details: '• Can treat very highly polluted wastewater.\n• The process requires only added oxygen from outside and converts organic pollutants into electricity and water.',
        fieldApplication: 'Pilot-based study on USA swine wastewater showed maximum 93% COD removal.',
        limitations: 'Not very effective for less polluted wastewater such as domestic sewage (BOD < 500 mg/L).',
        status: 'Initial response received. Presentation was scheduled; no response.',
        references: [
            {
                "Aquacycl company, USA": "https://aquacycl.com/services/carbon-removal/",
                "Hsu et al., 2017": "https://aquacycl.com/wp-content/uploads/2024/07/2017_ECS-Trans.-2017-Hsu-19-29.pdf",
                "https://www.youtube.com/watch?v=IxsG8G0YTEE": "https://www.youtube.com/watch?v=IxsG8G0YTEE"
            }
        ],
        images: [
            '/Photos/Microbial Fuel Cell- Aquacyl; USA/Picture18.png',
            '/Photos/Microbial Fuel Cell- Aquacyl; USA/Picture19.jpg'
        ]
    },
    {
        id: 9,
        name: 'Water Mantra',
        country: 'Singapore',
        category: 'decentralized',
        currentGap: 'RO technology produces a high amount of reject water while giving clean water.',
        technology: 'The water to be treated has to be fed through the pipe and the hand pump pressure produces clean water through the membranes.',
        novelty: 'Membrane has been modified. Better alternative to RO as the ultrafiltration membrane produces very less reject. No electricity requirement, simple in operation, and can be used anywhere.',
        details: '• Ultrafiltration membranes and nanofiltration are used.\n• Water wasting is very low compared to RO. In RO, rejected water is almost 70%, but for WaterMantra water purifier pump, reject is only 2–3% water.\n• TDS is maintained at healthier levels compared to RO (which reduces TDS to 20–30 ppm).\n• Ideal for drinking water systems where mineral retention is essential.',
        fieldApplication: 'On-field application performed at Hindon Canal, Ghaziabad, Uttar Pradesh.',
        limitations: 'Maximum treatment capacity is 150 L/Hr.',
        status: 'Response of SLCR email is awaited.',
        references: [
            {
                "http://h2omantra.com/": "http://h2omantra.com/",
                "https://www.youtube.com/watch?v=fAXTCBhkWGc": "https://www.youtube.com/watch?v=fAXTCBhkWGc",
                "https://youtu.be/RTfi1cFEzT8?si=LZjQMbP2_6L10v_6": "https://youtu.be/RTfi1cFEzT8?si=LZjQMbP2_6L10v_6"
            }
        ],
        images: [
            '/Photos/Water Mantra-h2Omantra; Singapore/Picture20.png',
            '/Photos/Water Mantra-h2Omantra; Singapore/Picture21.png',
            '/Photos/Water Mantra-h2Omantra; Singapore/Picture22.png'
        ]
    },
    {
        id: 9.1,
        name: 'Water Mantra',
        country: 'Singapore',
        category: 'decentralized',
        currentGap: 'RO technology produces a high amount of reject water while giving clean water.',
        technology: 'The membranes convert contaminated water into clean water through the membranes with very less space requirement.',
        novelty: 'Can easily convert contaminated water into purified water without need of electricity.',
        details: ' • Ideal for commercial establishments, rural community where availability of electricity is limited.\n• Can be used at emergency & disaste rrelief, military troops, schools, hospitals.',
        fieldApplication: ' Onfield application performed at Ramnagar, Bhopal, MadhyaPradesh.',
        limitations: 'Maximum treatment capacity is 50L/Hr.',
        status: 'Mail has been sent. At present waiting for their reply.',
        references: [
            {
                "http://h2omantra.com/": "http://h2omantra.com/",
                "https://www.youtube.com/watch?v=W5cNmFTn5Rw": "https://www.youtube.com/watch?v=W5cNmFTn5Rw"
            }
        ],
        images: [
            '/Photos/Water Mantra-h2Omantra; Singapore/Picture20.png',
            '/Photos/Water Mantra-h2Omantra; Singapore/Picture21.png',
            '/Photos/Water Mantra-h2Omantra; Singapore/Picture22.png'
        ]
    },
    {
        id: 10,
        name: 'Electro Oxidation Technology',
        country: 'India',
        category: 'decentralized',
        currentGap: 'Conventional electrodes have corrosion problems and lower efficiency.',
        technology: 'Applying external current through electrodes causes oxidants formation in water, leading to pollutant degradation.',
        novelty: 'Novel electrode gives higher operational life (15–20 years) compared to conventional electrodes (0.5–3 years).',
        details: '• Wastewater is treated by applying electric current through electrodes in a reactor.\n• Applicable for removal of organic pollutants (high strength and low strength) from wastewater.\n• Does not need auxiliary chemicals, high pressure, or temperature.\n• Titanium-coated electrodes provide higher life compared to conventional electrodes.\n• Domestic sewage operation cost is very low.',
        fieldApplication: 'Applied at some places in India.',
        limitations: 'Initial installation cost is very high.',
        status: 'Initial presentation conducted by Pinkain Technology, India. Second phase meeting is in progress.',
        references: [
            {
                "Pinakin Technology Solutions Pvt Ltd": "https://pinakin.co.in/",
                "Technology- HPNow": "https://hpnow.com/technology/"
            }
        ],
        images: [
            '/Photos/Electro Oxidation Technology; Pinakin/Picture23.jpg',
            '/Photos/Electro Oxidation Technology; Pinakin/Picture24.png',
            '/Photos/Electro Oxidation Technology; Pinakin/Picture25.png'
        ]
    },
    {
        id: 11,
        name: 'Onsite Oxidation',
        country: 'Denmark',
        category: 'decentralized',
        currentGap: 'Persistent compounds do not undergo oxidation by conventional processes.',
        technology: 'Generation of radicals using external power supply and electrodes causing pollutant degradation.',
        novelty: 'Onsite generation of Hydrogen Peroxide (H₂O₂) using water, air, and electricity causing in situ water treatment.',
        details: '• Produces ultra-pure H₂O₂ and other radicals which cause oxidation of contaminants and disinfection.\n• Environmentally friendly, with no chemical waste or byproduct buildup.\n• Highly scalable design with cells arranged in stacks and systems supporting multiple stacks.',
        fieldApplication: 'Demonstrated at Evonik, Germany – integration with Xylem’s UV reactor for real-time contaminant removal.',
        limitations: 'Initial investment cost may be high for small facilities. The process is electricity-dependent and not ideal for areas with unreliable power.',
        status: 'No initial response received.',
        references: [
            {
                "https://hpnow.com/technology/": "https://hpnow.com/technology/",
                "https://hpnow.com/introducing-hpgen-i-series/": "https://hpnow.com/introducing-hpgen-i-series/",
                "https://smartwatermagazine.com/news/hpnow/green-peroxide-generation-enables-safe-and-chemical-free-aop": "https://smartwatermagazine.com/news/hpnow/green-peroxide-generation-enables-safe-and-chemical-free-aop"
            }
        ],
        images: [
            '/Photos/Onsite Oxidation- hpnow; Denmark/Picture26.jpg',
            '/Photos/Onsite Oxidation- hpnow; Denmark/Picture27.jpg'
        ]
    },
    {
        id: 12,
        name: 'Pulse Plasma',
        country: 'Germany',
        category: 'decentralized',
        currentGap: 'Conventional advanced oxidation processes take longer treatment time with lesser efficiency.',
        technology: 'Plasma, the fourth state of matter, rapidly generates radicals inside water which causes pollutant degradation.',
        novelty: 'High-voltage nanosecond and picosecond pulse generators produce precise, high-speed pulses suitable for advanced plasma applications.',
        details: '• The pulse generators are designed for versatility, accommodating various applications requiring rapid, high-voltage pulses.\n• They are customizable to meet specific client requirements, ensuring optimal integration into existing systems.',
        fieldApplication: 'Has been implemented successfully in various pilot plant studies with good removal efficiency such as IIT Madras sewage treatment plant.',
        limitations: 'High-voltage operations require high safety protocols, trained personnel, and treatment cost. The process generates nitrate release into water after treatment.',
        status: 'No initial response received.',
        references: [
            {
                "https://fidtech.com/high-voltage-pulse-generators/": "https://fidtech.com/high-voltage-pulse-generators/"
            }
        ],
        images: [
            '/Photos/Pulse Plasma- Fidtech; Germany/Picture28.png',
            '/Photos/Pulse Plasma- Fidtech; Germany/Picture29.png',
            '/Photos/Pulse Plasma- Fidtech; Germany/Picture30.jpg'
        ]
    },
    {
        id: 13,
        name: 'Mechanical Vapor Recompression (MVR) Technology',
        country: 'Denmark',
        category: 'decentralized',
        currentGap: 'Indian industries face challenges in treating complex wastewater and achieving Zero Liquid Discharge (ZLD) or Minimal Liquid Discharge (MLD).',
        technology: 'Patented Mechanical Vapor Recompression (MVR) technology for industrial wastewater treatment.',
        novelty: 'Efficiently separates wastewater into high-purity distillate (95–99% reuse) with minimum concentrate, with low energy consumption and automated operation.',
        details: 'Treats harsh industrial effluents (e.g., from automotive, food & beverage) to enable significant water reuse and minimize hazardous waste.\n• Field Application Successfully implemented across various industrial sectors globally',
        fieldApplication: 'Successfully implemented across various industrial sectors globally.',
        limitations: 'Primarily for industrial wastewater; requires careful pre-treatment for heavily polluted wastewater.',
        status: 'Communication is under progress.',
        references: [
            {
                "Envotherm": "http://www.envotherm.dk/"
            }
        ],
        images: [
            '/Photos/MVR Technology- Envotherm; Denmark/Picture31.png',
            '/Photos/MVR Technology- Envotherm; Denmark/Picture32.png'
        ]
    },
    {
        id: 14,
        name: 'Geotubes',
        country: 'India , Australia',
        category: 'decentralized',
        currentGap: 'In India, natural filtration is not much explored.',
        technology: 'Treats the water using a natural filtration system with improved filtration tubes.',
        novelty: 'Sludge dewatering separates the solid and liquid components of the sludge/slurry, causing effective elimination of liquids before disposal.',
        details: '• Sludge or wastewater is pumped into the geotube container. Environmentally safe polymers are added to the sludge, which makes the solids bind together and separate water from it.\n• Clear effluent water simply drains from the geotube container. Over 99% of solids are captured, and clear filtrate can be collected and recirculated through the system.\n• Solids remain in the container and the content can be deposited at landfill or land-applied.',
        fieldApplication: 'Has been successfully implemented in various places in India such as during Kumbh, Prayagraj.',
        limitations: 'Utilization of chemical polymer for binding the solids is a concern for discharging. The filter pores are not suitable for long run.',
        status: 'Communication is in progress.',
        references: [
            {
                "Ocean Global": "https://oceangeosynthetics.com/geotubes-the-effective-solution-for-dewatering-sludge/",
                "Solamax": "https://www.solmax.com/me/en/blog/how-to-achieve-sustainable-dewatering-with-geotube",
                "https://www.geofabrics.co/sites/default/files/2024-07/GEOTUBE_Dewatering_Technology_APAC_0923_Web.pdf": "https://www.geofabrics.co/sites/default/files/2024-07/GEOTUBE_Dewatering_Technology_APAC_0923_Web.pdf"
            }
        ],
        images: [
            '/Photos/Geotubes/Picture33.jpg',
            '/Photos/Geotubes/Picture34.png'
        ]
    },
    {
        id: 15,
        name: 'Poseidon Pellets – Phosphorous removal',
        country: 'USA',
        category: 'decentralized',
        currentGap: 'Removal of nutrients by adsorption from ponds and lakes is difficult.',
        technology: 'Can remove phosphorus by using pellets.',
        novelty: 'The pellets can be reused again and also as fertilizer.',
        details: '• Can bind phosphorus in water as well as in sediment.\n• Helps in controlling algal blooms in water bodies.\n• Pellets can be reused as a soil amendment.\n• In wastewater treatment, they can be used as pre or post treatment.\n• Does not pose any risk to freshwater biota or human health.',
        fieldApplication: 'Laguna Niguel Lake, USA had total initial phosphorus of ~270 µg/L which achieved >80% removal. Serpentine Lake, UK had initial phosphorus of ~0.3 mg/L which was reduced to 0.05 mg/L.',
        limitations: 'Treatment cost is comparatively higher than conventional biological processes. Only applicable for phosphorus and not for other nutrients or pollutants.',
        status: 'No initial response received.',
        references: [
            {
                "https://www.waterwarriorsinc.com/": "https://www.waterwarriorsinc.com/",
                "https://petwatersolutions.com/products/water-treatment-phoslock/": "https://petwatersolutions.com/products/water-treatment-phoslock/",
                "https://www.youtube.com/watch?v=8XlDY84WIP8": "https://www.youtube.com/watch?v=8XlDY84WIP8"
            }
        ],
        images: [
            '/Photos/Poseidon Pellets/Picture35.jpg',
            '/Photos/Poseidon Pellets/Picture36.jpg',
            '/Photos/Poseidon Pellets/Picture37.jpg'
        ]
    },
    {
        id: 16,
        name: 'Coagulation - Flocculation',
        country: 'China',
        category: 'decentralized',
        currentGap: 'Conventional coagulants produce lesser dense flocs with longer treatment time.',
        technology: 'Coagulants addition produces flocs with wastewater pollutants followed by their removal.',
        novelty: ' Very high floc formation & pollutant removal for any type of wastewater.',
        details: '• Excellent coagulants which forms flocs with any type of wastewater.\n• Flocs formed are dense and has high settling properties.\n• Requires very less treatment time compared with conventional coagulants like alum.',
        fieldApplication: 'Used extensively for municipal WWTP and Industrial wastewater.',
        limitations: 'Coagulants once used can’t be reused again. Coagulants may pose issue after the test',
        status: 'Negative response received.',
        references: [
            {
                "Henan SECCO Company, China": "https://www.hnsecco.com/",
                "https://www.youtube.com/watch?v=H2-G9dMw4Lw": "https://www.youtube.com/watch?v=H2-G9dMw4Lw"
            }
        ],
        images: [
            '/Photos/Coagulation/Picture38.png',
            '/Photos/Coagulation/Picture39.png'
        ]
    },
    // STP Improvement
    {
        id: 17,
        name: 'Membrane Bioreactor (MBR)',
        country: 'France & USA',
        category: 'stp_improvement',
        currentGap: 'Conventional technologies such as ASP and SBR require high land, tanks requirement and less solids separation (% ).',
        technology: 'Utilizes membranes inbiological tank causing less area requirement and moreefficient solids removal.',
        novelty: ' Provides advanced solids-liquid separation and eliminates the need for secondary clarifiers and can meet the stringent STP norms.  Can also be used as a modular standalone system. Causes less land area requirement (~40% less) and more efficient solids removal (less than 2 mg/l). It is sustainable; lasting for around 15-20 years and economical in long run',
        details: '• Membrane Bioreactor (MBR) combines biological treatment with membrane filtration.\n• Suitable for municipal sewage, industrial effluents and recycled water systems.\n• Operates at higher MLSS, causing reduced footprint and enhancing treatment capacity.',
        fieldApplication: 'Used by leading companies like Xylem and Veolia for high-quality wastewater treatment. Xylem’s Sanitaire MBR and Veolia’s Biosep™ are established globally.',
        limitations: 'High initial capital costs due to membrane purchase and installation.',
        status: ' Veolia company made their presentation & Xylem company didn’t respond.',
        references: [
            {
                "https://www.veoliawatertech.com/en/products/biosep-neosep": "https://www.veoliawatertech.com/en/products/biosep-neosep",
                "https://www.xylem.com/en-us/brands/sanitaire/about-sanitaire/": "https://www.xylem.com/en-us/brands/sanitaire/about-sanitaire/"
            }
        ],
        images: [
            '/Photos/Membrane Bioreactor/Picture40.png',
            '/Photos/Membrane Bioreactor/Picture41.jpg'
        ]
    },
    {
        id: 18,
        name: 'MBBR – Moving Bed Biofilm Reactor',
        country: 'Denmark',
        category: 'stp_improvement',
        currentGap: 'Conventional ASP or SBR has suspended technology which gives comparatively lesser  efficiency.High-strength wastewater treatment requires large footprint and complex sludge management systems',
        technology: 'Combined suspended and attached growth technology. Utilizes media on which microbes grow and degrades pollutants.',
        novelty: 'Advanced biological treatment using biofilm carriers in an aeration tank. High surface-area novel plastic media enhances biofilm growth efficiency.Handles variable loading conditions. Can provide phosphate removal of order of 95 %.',
        details: '• Treats highly contaminated wastewater effectively using free-floating plastic carriers with high surface area which promotes biofilm growth.\n• Requires minimal space and is compatible with existing treatment systems.\n• Meteor™ by SUEZ – a patented MBBR system used globally for complex industrial wastewater.',
        fieldApplication: 'World’s largest Produced Water treatment plant using MBBR in Fredericia, Denmark. Successfully demonstrated in Banning, CA, USA pilot with aerobic-aerobic-anoxic- aerobic configuration.',
        limitations: 'Some insects, like sewage flies, mosquitoes and red worms, will be attracted to the biofilm and causing decrease in effectiveness of the system. • Manual monitoring is required to ensure the bacteria on the carriers is still alive.',
        status: 'Initial response is awaited.',
        references: [
            {
                "https://www.suez.com/en/denmark/references/danish-oil-pipe": "https://www.suez.com/en/denmark/references/danish-oil-pipe",
                "https://bio-blok.com/applications/wastewater-treatment-municipality": "https://bio-blok.com/applications/wastewater-treatment-municipality"
            }
        ],
        images: [
            '/Photos/Membrane Bioreactor/Picture40.png',
            '/Photos/Membrane Bioreactor/Picture41.jpg'
        ]
    },
    {
        id: 19,
        name: 'IFAS Technology',
        country: 'Canada',
        category: 'stp_improvement',
        currentGap: 'The existing STP biological treatment units (mostly ASP’s and SBR) have low efficiency.',
        technology: 'Membranes or modules are installed inside the existing STP’s biological units. Microbes get themselves attach on these modules and degrade the organics in wastewater.',
        novelty: 'Hybrid system combining suspended and attached growth for enhanced treatment',
        details: '• Biofilm carriers support attached microbial growth which increases the treatment efficiency.\n• Improves nutrient removal and increases treatment capacity.\n• Useful for Indian plants needing capacity upgrades without large footprint expansion.\n• Improves nitrogen and phosphorus removal efficiency',
        fieldApplication: 'Applied successfully in Copenhagen, Denmark and other EU plants — 5-15 MLD scale.',
        limitations: 'Requires monitoring of biofilm thickness and carrier integrity. Operational complexity higher than conventional activated sludge.',
        status: 'Meeting held; follow up is being done by sending water quality data',
        references: [
            {
                "https://www.ovivowater.com/en/product/clearfas/": "https://www.ovivowater.com/en/product/clearfas/"
            }
        ],
        images: [
            '/Photos/Integrated Fixed-film Activated Sludge/Picture46.png',
            '/Photos/Integrated Fixed-film Activated Sludge/Picture47.emf'
        ]
    },
    {
        id: 20,
        name: 'Membranes',
        country: 'Denmark',
        category: 'stp_improvement',
        currentGap: 'General membranes causes high power requirement.',
        technology: 'Aquaporin is a protein which is selective in nature and causes efficient water pass through it under less applied pressure.',
        novelty: 'Aquaporin® membranes add natural aquaporin proteins, causing cellular water channels for selective and efficient water filtration. • This biomimetic approach offers enhanced water permeability and selectivity compared to conventional membranes under less feed pressure. Thus, it helps in power saving (~20 %)',
        details: '• Available in flat sheet and hollow fiber configurations, suitable for forward osmosis (FO) and reverse osmosis (RO) applications. Operates effectively at ambient temperatures, reducing energy requirements and treatment cost. Membranes offer high contaminant rejection and upto 40% higher permeability, enhancing residential water purification systems.',
        fieldApplication: 'Applied in wastewater treatment, food and beverage concentration, and pharmaceutical industries for efficient water separation.',
        limitations: 'Membrane performance can be affected by fouling; requires proper pre-treatment and maintenance.',
        status: 'Meeting held on on 6th June and further follow -up is under way..',
        references: [
            {
                "https://aquaporin.com/products/": "https://aquaporin.com/products/"
            }
        ],
        images: [
            '/Photos/Membranes; Aquaporin/Picture48.png',
            '/Photos/Membranes; Aquaporin/Picture49.png',
            '/Photos/Membranes; Aquaporin/Picture50.png'
        ]
    },
    {
        id: 21,
        name: 'Ceramic Membrane Filtration',
        country: 'Denmark',
        category: 'stp_improvement',
        currentGap: 'Indian industries and municipal plants need robust, durable filtration solutions for challenging wastewater streams and to achieve high water reuse.',
        technology: 'Unique, patented Silicon Carbide (SiC) ceramic membrane technology for liquid filtration.',
        novelty: 'Extremely durable (chemically/thermally inert), high flux, low power usage, and long lifespan compared to polymeric membranes, enabling reliable treatment of difficult waters.',
        details: '• Filters can tolerate harsh wastewater from industries and municipal effluent.\n• Suitable for zero or minimum liquid discharge (ZLD/MLD) applications.\n• Achieves high-purity water for reuse.',
        fieldApplication: 'Widely used in various industrial liquid filtration processes and municipal wastewater applications globally.',
        limitations: 'Higher initial capital cost than some conventional filtration methods.',
        status: 'Communication is under process',
        references: [
            {
                "Liq Tech International": "http://www.liqtech.com/"
            }
        ],
        images: [
            '/Photos/Ceramic Membrane Filtration/Picture51.png'
        ]
    },
    {
        id: 22,
        name: 'Revolving Algal Biofilm System',
        country: 'USA',
        category: 'stp_improvement',
        currentGap: 'Conventional ASP having suspended process has lesser efficiency.',
        technology: 'Rotating biofilm reactor where algae grow on slowly revolving vertical surfaces alternately exposed to wastewater and air/sunlight.',
        novelty: 'Patented technology (RAB™, USA)- Algae is grown on moving belts surface.',
        details: '• Algae or Bacteria grows on the revolving belt inside wastewater.\n• Algae consumes nitrogen and phosphorous from the wastewater.\n• Nutrient- rich algae produced which can be made into pellets & used for other purpose.\n• Nutrient- rich algae can be used as fertilizer use or in replacing plastics to some extent.\n• Bacteria can also be cultured on belts for the removal of organics (BOD).\n•  Reduces carbon footprints.\n• Can be used as a tertiary treatment',
        fieldApplication: 'Applied successfully in Canadian municipality with obtained effluent (P< 0.05, NH3< 1 and BOD5< 10 mg/L) reaching standard.',
        limitations: 'The moving belt requires extra energy consumption & maintenance.',
        status: 'Initial response is awaited.',
        references: [
            {
                "Technology | Gross-Wen Technologies": "https://algae.com/technology",
                "https://algae.com/wp-content/uploads/2024/04/5-Municiapal-Pilot_Case-Study.pdf": "https://algae.com/wp-content/uploads/2024/04/5-Municiapal-Pilot_Case-Study.pdf"
            }
        ],
        images: [
            '/Photos/Revolving Algal Biofilm System/Picture52.png',
            '/Photos/Revolving Algal Biofilm System/Picture53.png',
            '/Photos/Revolving Algal Biofilm System/Picture54.png'
        ]
    },
    {
        id: 23,
        name: 'Nicotinamide Adenine Dinucleotide (NADH) Probes',
        country: 'U.S.A',
        category: 'stp_improvement',
        currentGap: 'Nitrogen and carbon removal in single STP tank is not happening. It requires making different tanks for Carbon and nitrogen removal.',
        technology: 'NADH process probes can be used to check appropriate aeration to maintain simultaneous nitrification and denitrification conditions.',
        novelty: 'Under controlled aeration conditions, simultaneous carbon and nitrogen removal is possible.',
        details: '• Nicotinamide adenine dinucleotide (NAD) is an intermediate compound in biological reactions that functions to transport electrons from a reduced substrate (i.e., chemical oxygen demand) to the biosynthetic pathways.\n• In its reduced form, it exists as NADH or NADPH. When light at 340 nm strikes NADH, it fluoresces and emits light at 460 nm.\n• NADH probes measure the concentration of NADH by emitting 340 nm and detecting 460 nm light. It can then help in carbon removal in aerobic zone and nitrogen in anoxic zone.',
        fieldApplication: 'More than 40 municipal applications are in the United States.',
        limitations: 'Requires very skilled manpower and continuous monitoring to operate.',
        status: 'Communication is under progress.',
        references: [
            {
                "Sci-Hub": "https://sci-hub.st/10.2175/193864700784545036",
                "https://www.epa.gov/sites/default/files/2019-02/documents/emerging-tech-wastewater-treatment-management.pdf": "https://www.epa.gov/sites/default/files/2019-02/documents/emerging-tech-wastewater-treatment-management.pdf"
            }
        ],
        images: [
            '/Photos/Nicotinamide Adenine Dinucleotide/Picture55.png',
            '/Photos/Nicotinamide Adenine Dinucleotide/Picture56.png'
        ]
    },
    {
        id: 24,
        name: 'Supercritical Water Oxidation',
        country: 'USA',
        category: 'stp_improvement',
        currentGap: 'Persistent/complex compounds are not removed from STP’s secondary biological treatment.',
        technology: 'Treating wastewater under temperature and pressure at water critical condition completely destroy toxic organics into CO₂ and water.',
        novelty: 'Utilises critical water condition to degrade pollutants causing pollutant complete destruction, including challenging substances like PFAS, without generating secondary waste streams.',
        details: '• When wastewater is heated above 374 oC temperature and 221 bar pressurize, then it reaches supercritical condition.\n• Heat and pressure during the process produces oxidants which is used to treat waste water constituents.\n• Can degrade even persistent pollutants such as PFAS.\n• Requires small installation area.',
        fieldApplication: 'Worked in collaboration with “OC San wastewater treatment company” and other US company for the treatment of emerging contaminants',
        limitations: 'Requires lot of energy, specialized equipment and safety measures during its operation.',
        status: 'No initial response came through mail.',
        references: [
            {
                "https://aquarden.com/superox-scwo/": "https://aquarden.com/superox-scwo/",
                "https://374water.com/technology/": "https://374water.com/technology/",
                "Supercritical Water Oxidation Project": "https://www.ocsan.gov/construction-project/supercritical-water-oxidation-project/"
            }
        ],
        images: [
            '/Photos/Supercritical Water Oxidation/Picture57.png',
            '/Photos/Supercritical Water Oxidation/Picture58.jpg',
            '/Photos/Supercritical Water Oxidation/Picture59.png',
            '/Photos/Supercritical Water Oxidation/Picture60.png'
        ]
    },
    {
        id: 25,
        name: 'Energy-Positive Wastewater Treatment',
        country: '',
        category: 'stp_improvement',
        currentGap: 'Indian municipal utilities need to upgrade wastewater treatment to meet stricter discharge norms and also achieve energy neutrality and recover resources.',
        technology: 'Operates as a showcase for advanced wastewater treatment, energy optimization (self-sufficient/positive), and resource recovery (e.g., sludge to energy).',
        novelty: 'Demonstrates how large WWTPs can become energy-positive bio-refineries through smart operation, asset management, and low NRW practices.',
        details: '• Focuses on optimizing water distribution, reducing Non-Revenue Water, and achieving high-quality effluent; applicable for large urban utilities.',
        fieldApplication: 'Ejby Mølle is a fully operational, highly optimized plant in Denmark, serving as a benchmark for water management.',
        limitations: 'Represents a state-of-the-art facility; full replication requires significant investment and skilled operation.',
        status: 'Received initial response. Requested for presentation; response is awaited.',
        references: [
            {
                "VCSDenmark": "http://www.vcs.dk/",
                "Aarhus Vand": "http://www.aarhusvand.com/"
            }
        ],
        images: [
            '/Photos/Energy-Positive Wastewater Treatment/Picture61.jpg'
        ]
    },
    {
        id: 26,
        name: 'UV Systems',
        country: 'Denmark',
        category: 'stp_improvement',
        currentGap: 'Conventional UV lamps have less light penetration & gets affected by turbid solutions.',
        technology: 'UV Lamps having different configuration for waster treatment.',
        novelty: 'Has more energy compared to conventional UV lamps.',
        details: '• Produces UV light at 185 nm wavelength having more energy and penetration than conventional 254 nm lights.\n• Has more water penetrating power than conventional ones.\n• Able to remove total organic carbon also from water system.\n• Efficiency can be further increased by adding ozone or hydrogen peroxide.',
        fieldApplication: 'Has been applied in various countries like Canada, UK, USA.',
        limitations: 'Not suitable for highly turbid water.',
        status: 'Received initial response. Requested for presentation; response is awaited.',
        references: [
            {
                "Ultra Aqua": "https://ultraaqua.com/product/ultratox-series/?_gl=1*110abdh*_up*MQ..*_ga*NjQyOTc0MjQuMTc0ODUxNDQ5Mw..*_ga_FM5MZLCMJ4*czE3NDg1MTQ0OTMkbzEkZzEkdDE3NDg1MTQ1MTckajM2JGwwJGgw"
            }
        ],
        images: [
            '/Photos/UV System/Picture62.png',
            '/Photos/UV System/Picture63.jpg'
        ]
    },
    {
        id: 27,
        name: 'Rotary Drum Filter',
        country: 'France',
        category: 'stp_improvement',
        currentGap: 'The solids content coming out of conventional treatment process is not completely removed.',
        technology: '10 or 20 mm filters the suspended solids to make the effluent solids less than 10 mg/L.',
        novelty: 'A mechanical filtration system that separates solids from water using a rotating drum and screen filter to almost completely removes suspended solids.',
        details: '• Continuously removes suspended solids from wastewater with minimal energy consumption.\n• Ideal for tertiary treatment, aquaculture and pre-filtration before biological systems.',
        fieldApplication: 'Used in JC France’s projects for sewage filtration, food processing, and textile industry effluent treatment.',
        limitations: 'Not effective for dissolved pollutants – only removes particulate matter. Requires regular maintenance to prevent clogging and ensuring effective filtration.',
        status: 'Response is awaited',
        references: [
            {
                "https://www.jcfranceindustrie.fr/en/rotary-drum-filter/": "https://www.jcfranceindustrie.fr/en/rotary-drum-filter/"
            }
        ],
        images: [
            '/Photos/Rotary drum/Picture65.jpg',
            '/Photos/Rotary drum/Picture64.png'
        ]
    },
    // Smart Monitoring
    {
        id: 28,
        name: 'Remote Sensing & Earth Observation',
        country: 'Denmark',
        category: 'smart_monitoring',
        currentGap: 'India needs the cost-effective, wide-area monitoring of water quality ,land use changes affecting water bodies, and environmental impact assessments.',
        technology: 'Processes satellite image and Earth Observation data using machine learning to provide actionable insights for environmental and water management.',
        novelty: 'Converts vast satellite data into practical information for water quality mapping, flood risk assessment, urban planning, and environmental monitoring.',
        details: '• Provides large-scale environmental intelligence for hydrologic modeling, water quality assessment (e.g., algae blooms), and infrastructure planning.',
        fieldApplication: 'Used in national and international projects globally, including collaborations with the European Space Agency.',
        limitations: 'Requires expertise in data interpretation; dependent on satellite data availability and resolution. • Usually measures chlorophyll and turbidity of water bodies. Difficult to analyze other major parameters like BOD, COD, etc.',
        status: 'Operational technology with growing adoption as satellite data becomes freely available.',
        references: [
            {
                "DHI GRAS": "http://www.dhigras.com/"
            }
        ],
        images: [
            '/Photos/Rotary drum/Picture64.png',
            '/Photos/Rotary drum/Picture65.jpg'
        ]
    },
    {
        id: 29,
        name: 'Multi Parameter Water Quality Monitoring',
        country: 'England',
        category: 'smart_monitoring',
        currentGap: 'Analysis various water quality parameters in lab is a tedious job.',
        technology: 'Utilizes various probes at a time for measuring various water parameters with ease.',
        novelty: 'Can measure multiple water quality parameters.',
        details: '• Real-time water quality monitoring solutions.\n• Innovative sensor technology enables continuous, accurate measurement of key parameters (30 parameters) such as BOD, COD, TOC, and coliform bacteria, sodium, nitrate, calcium, chloride, bromide, ammonium, Turbidity, dissolved oxygen, pH, temperature, TDS, fluorescence, tryptophan, blue- green algae, coliforms, fluorescein dye, chlorophyll.\n• Requires minimal maintenance and no reagent is required.',
        fieldApplication: 'Has been installed in UK with over 250 outstations monitoring water quality,level and weather.• Has been installed in Denmark and Philippines coastal area.',
        limitations: '+5% error in the determined parameters values and initial cost is high.',
        status: 'Initial response received. In the process of scheduling presentation.',
        references: [
            {
                "https://proteus-instruments.com/": "https://proteus-instruments.com/",
                "How the UK's largest real-time catchment monitoring network is leading the way": "https://proteus-instruments.com/2024/01/24/how-the-uks-largest-real-time-catchment-monitoring-network-is-leading-the-way/"
            }
        ],
        images: [
            '/Photos/Multi parameter Water Quality/Picture68.jpg',
            '/Photos/Multi parameter Water Quality/Picture69.jpg'
        ]
    },
    {
        id: 30,
        name: 'AI-Driven Cloud Optimization for WWTPs',
        country: 'Denmark',
        category: 'smart_monitoring',
        currentGap: 'Indian wastewater treatment plants face challenges in optimizing energy consumption, reducing greenhouse gas emissions, and adapting to fluctuating influent loads due to reliance on manual control and static operating strategies.',
        technology: 'Cloud-based artificial intelligence and machine learning platform that connects with SCADA systems to monitor, predict, and optimize wastewater treatment plant operations in real time.',
        novelty: 'Leverages advanced AI algorithms and predictive analytics to dynamically adjust aeration, nutrient removal, and process control, reducing energy and GHG emissions by 15–30%. Integrates with existing systems for adaptive, data-driven optimization.',
        details: '• The platform collects operational and sensor data from SCADA and uploads it to a secure cloud environment. Machine learning models are trained on historical data to understand relationships between influent load, process conditions, and effluent quality. The system predicts incoming loads and optimizes process parameters such as aeration intensity, chemical dosing, and flow distribution. It supports predictive maintenance and integrates weather and rainfall data for feed-forward control.\n• Applicable to large-scale municipal WWTPs, the system helps improve compliance, stability, and energy efficiency while reducing manual intervention.',
        fieldApplication: 'Successfully implemented at advanced WWTPs in Denmark, Italy, the Netherlands, the UK, and the USA. Demonstrated 15–25% energy and 10–20% GHG reduction with improved effluent stability. Applicable for Indian utilities seeking digital transformation in WWTP operations.',
        limitations: 'Requires reliable and comprehensive SCADA data integration. Data quality directly affects model accuracy. Initial setup, calibration, and operator training are required. Ongoing subscription costs and cybersecurity considerations apply.',
        status: 'Initial response received. Presentation requested; awaiting further communication.',
        references: [
            {
                "DHI": "http://www.dhi.com/",
                "BIOFOS": "https://en.biofos.dk/"
            }
        ],
        images: [
            '/Photos/AI-Driven Cloud/Picture70.jpg',
            '/Photos/AI-Driven Cloud/Picture71.jpg'
        ]
    },
    {
        id: 31,
        name: 'Energy-Efficient Smart Control Systems- Danfoss; Denmark',
        country: 'Denmark',
        category: 'smart_monitoring',
        currentGap: 'High energy consumption constitutes major operational cost for Indian wastewater treatment plants and water supply systems.',
        technology: 'Energy-efficient Variable Frequency Drives (VFDs) and smart controls for pumps, blowers, and mixers, including solutions for ZLD/MLD.',
        novelty: 'Optimizes energy use in water infrastructure (up to 25-50% savings), improves process control, and enables precise operation crucial for ZLD/MLD.',
        details: 'Applicable across municipal WWTPs, water pumping stations, and industrial processes requiring precise flow/pressure control and energy optimization.',
        fieldApplication: 'Widely installed globally in WWTPs and industrial facilities, known for their energy-saving capabilities.',
        limitations: 'Requires proper sizing and integration with existing motor/pump systems.',
        status: 'Communication is under progress.',
        references: [
            {
                "Danfoss": "www.danfoss.com/en-in"
            }
        ],
        images: [
            '/Photos/Energy-Efficient Smart/Picture72.png'
        ]
    },
    {
        id: 32,
        name: 'IoT Monitoring for Real-Time Water Network- Aqua Robur; Denmark',
        country: 'Denmark',
        category: 'smart_monitoring',
        currentGap: 'Remote or inaccessible areas in India\'s water networks lack real-time monitoring of crucial parameters (flow, pressure, quality) due to power and resource limitations.',
        technology: 'IoT devices with integrated energy harvesting technology (micro-hydro-system) and software for water network monitoring.',
        novelty: 'Self-powered sensors convert water flow into energy, eliminating batteries or grid connections for continuous, real-time data on pressure, flow, and quality.',
        details: 'Monitors water networks for leaks, quality anomalies, and usage; ideal for vast, dispersed pipelines or remote infrastructure.',
        fieldApplication: 'Piloting installations with utilities in Denmark for real-time network monitoring.',
        limitations: 'Requires water flow for energy generation; specific to water network monitoring.',
        status: 'Contacting.',
        references: [
            {
                "Aqua Robur Technologies": "www.aquarobur.com"
            }
        ],
        images: [
            '/Photos/IoT Monitoring for Real-Time Water Network-/Picture73.jpg'
        ]
    },
    {
        id: 33,
        name: 'Advanced Biological Nutrient Removal (BNR) System - Veolia; France',
        country: 'France',
        category: 'decentralized',
        currentGap: 'Most Indian wastewater treatment plants lack efficient nitrogen and phosphorus removal, leading to eutrophication in receiving waters.',
        technology: 'Integrated fixed-film activated sludge (IFAS) and Moving Bed Biofilm Reactor (MBBR) systems for enhanced nutrient removal.',
        novelty: 'Combines biofilm and activated sludge processes to improve nitrification-denitrification and phosphorus uptake.\n• Provides higher process stability and compactness.',
        details: 'Applicable to municipal and industrial WWTPs for nutrient removal and upgrading existing activated sludge systems.',
        fieldApplication: 'Widely implemented in Europe and Asia; demonstrated success in achieving <10 mg/L TN and <1 mg/L TP.',
        limitations: 'Requires proper process control and monitoring of dissolved oxygen and carbon source balance.',
        status: 'Communication initiated.',
        references: [
            {
                "Veolia Water Technologies": "www.veoliawatertechnologies.com"
            }
        ],
        images: [
            '/Photos/Advanced Biological Nutrient Removal/Picture74.png'
        ]
    },
    {
        id: 34,
        name: 'Decentralized Containerized WWTP – Biomicrobics; USA',
        country: 'USA',
        category: 'decentralized',
        currentGap: 'India faces challenges in treating wastewater from small communities and remote areas due to limited infrastructure and operation capacity.',
        technology: 'Prefabricated, modular wastewater treatment systems (BioBarrier®/MicroFAST®) in containerized units.',
        novelty: 'Compact, factory-built systems allowing “plug-and-play” installation and operation.\n• Utilizes fixed-film biological treatment for high-quality effluent.',
        details: 'Suitable for decentralized wastewater treatment in rural communities, institutions, and resorts.\n• Designed for low maintenance and rapid deployment.',
        fieldApplication: 'Implemented in several countries for decentralized sanitation, including pilot installations in Asia.',
        limitations: 'Higher initial cost per unit capacity compared to large-scale plants.',
        status: 'Communication ongoing.',
        references: [
            {
                "BioMicrobics Inc.": "www.biomicrobics.com"
            }
        ],
        images: [
            '/Photos/Decentralized Containerized WWTP/Picture75.png'
        ]
    },
    {
        id: 35,
        name: 'Membrane Aerated Biofilm Reactor (MABR) – Fluence; Israel',
        country: 'Israel',
        category: 'smart_monitoring',
        currentGap: 'Conventional aeration systems consume up to 60% of WWTP energy, and oxygen transfer efficiency remains low.',
        technology: 'Innovative membrane-based biofilm reactor that delivers oxygen directly to biofilm through gas-permeable membranes.',
        novelty: 'Improves oxygen transfer efficiency up to 300% over conventional aeration.\n• Enables simultaneous nitrification and denitrification within a single reactor.\n• Reduces energy use significantly.',
        details: 'Applicable for both decentralized and centralized treatment plants.\n• Suitable for energy-efficient nutrient removal.',
        fieldApplication: 'Deployed across Israel, China, and the USA; proven reduction in operational energy costs.',
        limitations: 'Membrane fouling control and periodic maintenance required.',
        status: 'Communication established.',
        references: [
            {
                "Fluence Corporation": "www.fluencecorp.com"
            }
        ],
        images: [
            '/Photos/Membrane Aerated Biofilm Reactor/Picture76.png'
        ]
    },
    {
        id: 36,
        name: 'Sludge Concentration Sensor',
        country: 'China',
        category: 'smart_monitoring',
        currentGap: 'Knowing the solids concentration of sludge and how much it needs to be densified everytime is difficult to analyze through conventional solids lab test.',
        technology: 'Determines the solids content and concentration of sludge.',
        novelty: 'Easy to measure the concentration of sludge and suspended solids compare to conventional process.',
        details: 'Sensor equipped with an air cleaning function which performs automatically. Basic principle is multi-beam infrared light transmission. Optical bandpass filtering and modulated excitation light effectively prevent the influence of ambient light on measurement data. Digital sensor has strong anti-interference capability and stability. Applications- WTP, Paper mill, Coal washing plant, power industry.',
        fieldApplication: 'No report.',
        limitations: 'Can’t be used for higher concentration of activated sludge (< 25g/l).',
        status: 'Initial response received. In the process of scheduling presentation.',
        references: [
            {
                "Tenjine, China": "https://en.tengine.com.cn/"
            }
        ],
        images: [
            '/Photos/Sludge Concentration Sensor- Tengine; China/Picture79.jpg',
            '/Photos/Sludge Concentration Sensor- Tengine; China/Picture80.png'
        ]
    },
    {
        id: 37,
        name: 'Reed Beds',
        country: 'Denmark',
        category: 'sludge_treatment',
        currentGap: 'Sludge treatment through natural processes requires lot of land area and gas problems.',
        technology: 'Engineered wetlands planted with reeds (Phragmites australis) which treat sludge by dewatering, stabilizing & mineralizing.',
        novelty: 'Natural way of treatment of sludge.',
        details: 'Microbial activity in the root zone. Sludge (from primary or secondary treatment) is applied in layers to the reed beds. Water percolates down and drains through a gravel or sand filter base. Organic matter decomposes over time through aerobic and anaerobic microbial processes. After several years, the mineralized sludge is removed & used as soil conditioner or disposed.',
        fieldApplication: 'Has been applied in various places in Denmark.',
        limitations: 'Takes longer treatment time compared with thermal or other pyrolysis method. Groundwater may get contaminated because of leaching.',
        status: 'Communication is under progress.',
        references: [
            {
                "Reed Beds": "https://vbn.aau.dk/ws/portalfiles/portal/424057861/Reed_bed_vegetation_structure_and_plant_species_diversity_depend_on_management_type_and_the_time_period_since_last_management.pdf"
            }
        ],
        images: [
            '/Photos/Reed Beds- Aarhusvand; Denmark/Picture82.jpg',
            '/Photos/Reed Beds- Aarhusvand; Denmark/Picture81.png'
        ]
    },
    {
        id: 38,
        name: 'High Temperature & Pressure with Catalyst Technology - Suez, Denmark',
        country: 'Denmark',
        category: 'sludge_treatment',
        currentGap: 'Conventional sludge drier densifies the sludge to few extent only which causes disposal problem.',
        technology: 'Sludge dried under high temperature and pressure in presence of catalyst.',
        novelty: 'Dehydris™ Ultra (Patented technology) is capable of drying sludge more compared to conventional process.',
        details: 'HydroThermal Carbonization in closed reactor. Produces ultra-dewatered sludge with 70% dry solids. Increase biogas production by 30–40% compared to thermal drying. No odor & further use as bio solid (a fertilizer). 2–3 times less energy consumption compared to thermal drying.',
        fieldApplication: 'Applied successfully in municipal wastewater plant in Handan, China.',
        limitations: 'Produces partial removal of micropollutants.',
        status: 'No initial response received.',
        references: [
            {
                'Suez': 'https://www.suez.com/en/denmark/wastewater/sludge_treatment-via-sludge-carbonization',
                'https://www.suez.com/-/media/suez-global/files/dk/brochures/brochure_dehydris_ultra.pdf?open=true': 'https://www.suez.com/-/media/suez-global/files/dk/brochures/brochure_dehydris_ultra.pdf?open=true'
            }
        ],
        images: [
            '/Photos/High Temperature & Pressure with catalyst technology-Suez; Denmark/Picture83.jpg',
            '/Photos/High Temperature & Pressure with catalyst technology-Suez; Denmark/Picture84.png'
        ]
    },
    {
        id: 39,
        name: 'Steam-drying and pyrolysis technology (Aquagreen; Denmark)',
        country: 'Denmark',
        category: 'sludge_treatment',
        currentGap: 'Conventional sludge drier densifies the sludge to few extent only which causes disposal problem.',
        technology: 'Biomass is dewatered then drying under steam followed by pyrolysis (heating it in absence of air).',
        novelty: 'HECLA® 1,000 Turn the waste biomass into useful resource with minimal manpower for operation & can be monitored remotely.',
        details: 'Transforms sewage sludge into renewable thermal energy, soil-improving biochar and activated carbon. Steam-dryer dries dewatered biomass in an oxygen-free atmosphere with superheated steam at 200°C. In the pyrolysis oven, dried biomass is heated to 650°C in an oxygen-free atmosphere. Biochar use - soil improvement, fertilization and upcycle to activated carbon.',
        fieldApplication: 'Full-scale implementation at several Danish wastewater treatment plants has demonstrated up to 90% reduction in sludge volume and significant carbon capture.',
        limitations: 'Requires consistent sludge input and involves high initial capital investment. Release of harmful gases during pyrolysis such as dioxins & furans (if toxic solids are used).',
        status: 'Not positive response obtained.',
        references: [
            {
                'Aquagreen company, Denmark': 'https://aquagreen.dk/',
                'https://www.youtube.com/watch?v=RxOmnZtBwnc&t=2s': 'https://www.youtube.com/watch?v=RxOmnZtBwnc&t=2s',
                'https://www.sn.dk/art716024/odsherred-kommune/nyhed/epokegoerende-forsoeg-pyrolyse-fjerner-pfas-i-slam/': 'https://www.sn.dk/art716024/odsherred-kommune/nyhed/epokegoerende-forsoeg-pyrolyse-fjerner-pfas-i-slam/'
            }
        ],
        images: [
            '/Photos/Steam-drying and pyrolysis technology/Picture85.png'
        ]
    },
    {
        id: 40,
        name: 'Cyclones Sludge Settler - Suez; Denmark',
        country: 'France; Denmark',
        category: 'sludge_treatment',
        currentGap: 'The sludge generated from conventional ASP is highly dilute (~1-5% concentration) and requires heavy treatment for discharge & return feed.',
        technology: 'Cyclonic feed of sludge through the instrument causes densification of sludge by centrifugation of solids.',
        novelty: 'The patented InDense™ technology Improves the sludge concentration and overall efficiency of activated sludge process.',
        details: 'Employs high centrifugal forces within hydrocyclones to concentrate sludge. Cyclone devices separate the sludge into two fractions. The good concentrated sludge is returned to the plant while the bad fraction is taken out of the plant as excess sludge. Efficiency of STP increases (especially winter months) because of recycling good sludge with higher solid concentrations. Reduces secondary clarifier area requirement and enhances treatment capacity. Sludge settles 4-5 times more than in conventional settling tank.',
        fieldApplication: 'Increased the hydraulic capacity of Søholt wastewater treatment plant in Europe by 30%.',
        limitations: 'Only applicable for retrofitting in conventional activated sludge process.',
        status: 'Initial response not received.',
        references: [
            {
                'SUEZ in Denmark': 'https://www.suez.com/en/denmark',
                'Suez': 'https://www.suez.com/en/news/press-releases/suez-increases-30-percent-hydraulic-capacity-soholt-wastewater-treatment-plant-thanks-biomass-densification-technology-first-its-kind-scandinavia'
            }
        ],
        images: [
            '/Photos/Cyclones Sludge Settler- Suez; Denmark/Picture86.png',
            '/Photos/Cyclones Sludge Settler- Suez; Denmark/Picture87.png'
        ]
    },
    {
        id: 41,
        name: 'Smart Waste Management Solution',
        country: 'Denmark',
        category: 'sludge_treatment',
        currentGap: 'Indian cities suffer from overflowing bins, inefficient waste collection routes, high operational costs, and poor urban hygiene.',
        technology: 'IoT sensors (3D optical laser) in waste containers provide real-time fill level data to a cloud platform, enabling intelligent routing and optimized collection.',
        novelty: 'Automated real-time monitoring and AI-driven route optimization significantly reduce collection costs, environmental impact, and improve city cleanliness.',
        details: 'Applicable for municipal and commercial waste collection; optimizes routes, reduces trips, and improves resource allocation.',
        fieldApplication: 'Deployed for customers worldwide, showcasing improved efficiency and cost savings in urban waste collection.',
        limitations: 'Requires sensor installation in bins and an initial investment in the platform.',
        status: 'Communication is under progress.',
        references: [
            {
                Nordsense: 'http://www.nordsense.com/'
            }
        ],
        images: [
            '/Photos/Smart Waste Management Solution- Nordsense; Denmark/Picture89.jpg',
            '/Photos/Smart Waste Management Solution- Nordsense; Denmark/Picture88.png'
        ]
    },
    {
        id: 42,
        name: 'Ecogi System',
        country: 'Denmark',
        category: 'sludge_treatment',
        currentGap: 'India faces challenges in efficiently segregating and pre-treating organic waste for biogas production, limiting its energy and fertilizer potential.',
        technology: 'Mechanical pre-treatment system for source-separated organic waste, creating a pure biopulp suitable for anaerobic digestion.',
        novelty: 'Handles diverse packaging and efficiently removes impurities, maximizing biogas yield and producing a clean, ready-to-use fertilizer (biopulp).',
        details: 'Processes municipal organic waste to feed biogas plants, improving efficiency and output. Enhances circular economy for food waste.',
        fieldApplication: 'Utilized by public authorities and private companies in waste management, with pulp use as fertilizer.',
        limitations: 'Requires organized collection of organic waste for optimal performance.',
        status: 'Communication is under progress.',
        references: [
            {
                "Ecogi": "https://ecogi.dk/en/"
            }
        ],
        images: [
            '/Photos/Ecogi System- Ecogi; Denmark/Picture90.png',
            '/Photos/Ecogi System- Ecogi; Denmark/Picture91.png'
        ]
    },
    {
        id: 43,
        name: 'Solid Waste Recycling',
        country: 'Denmark',
        category: 'sludge_treatment',
        currentGap: 'India needs efficient, specialized machinery to process diverse and challenging waste streams (e.g., tires, e-waste, plastics) for higher recycling rates.',
        technology: 'Develops and manufactures machinery for recycling various waste types, including tires, cables, aluminum, e-waste, and MSW.',
        novelty: 'Provides robust, specialized equipment and complete recycling solutions for specific, hard-to-process waste streams to maximize material recovery.',
        details: 'Offers shredders, granulators, and sorting systems for large-scale recycling facilities, converting waste into valuable secondary raw materials.',
        fieldApplication: 'Global presence with installations in numerous countries for tire recycling, e-waste processing, and other specialized waste streams.',
        limitations: 'High capital investment for full-scale recycling plants.',
        status: 'Communication is under progress.',
        references: [
            {
                " ELDAN Recycling": "http://www.eldan-recycling.com/"
            }
        ],
        images: [
            '/Photos/Solid waste Recycling/Picture92.jpg',
            '/Photos/Solid waste Recycling/Picture93.jpg'
        ]
    },
    {
        id: 44,
        name: 'Azortum Solid Waste Sorting',
        country: 'Estonia; Finland',
        category: 'sludge_treatment',
        currentGap: "India's mixed waste streams often have low recycling rates due to inefficient and labor-intensive sorting processes.",
        technology: 'Advanced sorting and recovery technology for plastics, papers, tyres, and construction waste using sensor-based identification.',
        novelty: 'Offers modular and scalable solutions to improve recycling performance, allowing higher purity and recovery from complex waste streams.',
        details: 'Designed for large-scale Material Recovery Facilities and suitable for modernizing existing plants or building new efficient sorting lines. Construction and demolition waste is reused as filling material for roads and underlayers. Tyres are converted into oils through pyrolysis. Wood chips and paper are reused as external fuel. Plastic packaging materials are sent to companies to be used for making new products.',
        fieldApplication: 'The company has installed successful plants in several countries like Latvia and Estonia.',
        limitations: 'Requires investment in specialized sorting equipment.',
        status: 'Communication is under progress.',
        references: [
            {
                "Azortum": "http://www.azortum.com/"
            }
        ],
        images: [
            '/Photos/Azortum solid waste sorting/Picture1.png',
            '/Photos/Azortum solid waste sorting/Picture2.png'
        ]
    },
    {
        id: 45,
        name: 'WAGABOX® Technology – Upgrading Landfill Gas into Renewable Natural Gas (RNG)',
        country: 'France, USA, Canada, Spain',
        category: 'sludge_treatment',
        currentGap: 'India needs sustainable methods to manage organic waste and landfill gas, converting them into renewable energy sources.',
        technology: 'Collects, stores & converts landfill gas into biomethane using advanced membrane filtration.',
        novelty: 'Transforms a major source of greenhouse gas emissions (landfill gas) into a high-value, vehicle-fuel biomethane.',
        details: 'Waste is stored in airtight geotextile membrane. The methane gas released from organic breakdown is collected & stored filtered to make it pure (~98% purity). Methane produced is used in homes & other purposes throughout the city. Reduction in emissions and generating revenue.',
        fieldApplication: 'Multiple operational sites in France, US, Canada, and Spain converting landfill gas into biomethane. 30 landfill gas have been upgraded units in operation worldwide.',
        limitations: 'Requires sufficient methane production from landfill gas and is capital intensive.',
        status: 'Communication is under progress.',
        references: [
            {
                "WAGA Energy": "http://www.waga-energy.com/"
            }
        ],
        images: [
            '/Photos/WAGABOX® technology/Picture3.jpg',
            '/Photos/WAGABOX® technology/Picture4.png'
        ]
    }
];
}),
"[project]/app/technology/[id]/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>TechnologyDetailPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/data.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
function TechnologyDetailPage() {
    const { id } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useParams"])();
    const techId = Number(id);
    const technology = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["technologies"].find((tech)=>tech.id === techId);
    // ✅ State for modal image
    const [selectedImage, setSelectedImage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    // ✅ Close modal on ESC key
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const handleEsc = (e)=>{
            if (e.key === "Escape") setSelectedImage(null);
        };
        window.addEventListener("keydown", handleEsc);
        return ()=>window.removeEventListener("keydown", handleEsc);
    }, []);
    if (!technology) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
            className: "min-h-screen flex items-center justify-center bg-gray-50",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "text-2xl font-semibold text-gray-700",
                children: "Technology not found"
            }, void 0, false, {
                fileName: "[project]/app/technology/[id]/page.tsx",
                lineNumber: 28,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/technology/[id]/page.tsx",
            lineNumber: 27,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "min-h-screen bg-white",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-slate-900 text-white py-10 px-6 border-b-4 border-blue-600",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-6xl mx-auto",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-4xl md:text-5xl font-serif font-bold mb-6 leading-tight",
                        children: technology.name
                    }, void 0, false, {
                        fileName: "[project]/app/technology/[id]/page.tsx",
                        lineNumber: 38,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/technology/[id]/page.tsx",
                    lineNumber: 37,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/technology/[id]/page.tsx",
                lineNumber: 36,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-[85%] mx-auto py-10 px-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 lg:grid-cols-4 gap-10",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "lg:col-span-3 space-y-10",
                            children: [
                                technology.currentGap && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "text-2xl font-serif font-bold text-gray-900 mb-4 pb-2 border-b-2 border-gray-900",
                                            children: "Current Gap"
                                        }, void 0, false, {
                                            fileName: "[project]/app/technology/[id]/page.tsx",
                                            lineNumber: 53,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-gray-50 border-l-4 border-blue-600 p-6",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-gray-800 leading-relaxed text-justify",
                                                children: technology.currentGap
                                            }, void 0, false, {
                                                fileName: "[project]/app/technology/[id]/page.tsx",
                                                lineNumber: 57,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/technology/[id]/page.tsx",
                                            lineNumber: 56,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/technology/[id]/page.tsx",
                                    lineNumber: 52,
                                    columnNumber: 15
                                }, this),
                                technology.technology && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Section, {
                                    title: "1. Introduction",
                                    text: technology.technology
                                }, void 0, false, {
                                    fileName: "[project]/app/technology/[id]/page.tsx",
                                    lineNumber: 65,
                                    columnNumber: 15
                                }, this),
                                technology.novelty && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Section, {
                                    title: "2. Innovation & Novel Contributions",
                                    text: technology.novelty
                                }, void 0, false, {
                                    fileName: "[project]/app/technology/[id]/page.tsx",
                                    lineNumber: 68,
                                    columnNumber: 15
                                }, this),
                                technology.details && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Section, {
                                    title: "3. Methodology & Technical Details",
                                    text: technology.details
                                }, void 0, false, {
                                    fileName: "[project]/app/technology/[id]/page.tsx",
                                    lineNumber: 71,
                                    columnNumber: 15
                                }, this),
                                technology.fieldApplication && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Section, {
                                    title: "4. Applications & Use Cases",
                                    text: technology.fieldApplication
                                }, void 0, false, {
                                    fileName: "[project]/app/technology/[id]/page.tsx",
                                    lineNumber: 74,
                                    columnNumber: 15
                                }, this),
                                technology.limitations && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Section, {
                                    title: "5. Limitations & Future Work",
                                    text: technology.limitations
                                }, void 0, false, {
                                    fileName: "[project]/app/technology/[id]/page.tsx",
                                    lineNumber: 77,
                                    columnNumber: 15
                                }, this),
                                Array.isArray(technology.references) && technology.references?.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                    className: "border-t-2 border-gray-200 pt-8",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "text-2xl font-serif font-bold text-gray-900 mb-6",
                                            children: "References"
                                        }, void 0, false, {
                                            fileName: "[project]/app/technology/[id]/page.tsx",
                                            lineNumber: 82,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ol", {
                                            className: "space-y-3",
                                            children: technology.references.map((ref, i)=>{
                                                const [key, value] = Object.entries(ref)[0];
                                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    className: "flex gap-3 text-sm",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "font-mono text-gray-500 min-w-[2rem]",
                                                            children: [
                                                                "[",
                                                                i + 1,
                                                                "]"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/technology/[id]/page.tsx",
                                                            lineNumber: 88,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                            href: value,
                                                            target: "_blank",
                                                            rel: "noopener noreferrer",
                                                            className: "text-blue-600 hover:underline leading-relaxed break-all",
                                                            children: key
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/technology/[id]/page.tsx",
                                                            lineNumber: 89,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, i, true, {
                                                    fileName: "[project]/app/technology/[id]/page.tsx",
                                                    lineNumber: 87,
                                                    columnNumber: 23
                                                }, this);
                                            })
                                        }, void 0, false, {
                                            fileName: "[project]/app/technology/[id]/page.tsx",
                                            lineNumber: 83,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/technology/[id]/page.tsx",
                                    lineNumber: 81,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/technology/[id]/page.tsx",
                            lineNumber: 48,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                            className: "lg:col-span-1 space-y-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-slate-50 border border-slate-200 rounded-lg p-5 space-y-4 sticky top-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Info, {
                                            label: "Category",
                                            value: technology.category.replace(/-/g, " ")
                                        }, void 0, false, {
                                            fileName: "[project]/app/technology/[id]/page.tsx",
                                            lineNumber: 108,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Info, {
                                            label: "Institution",
                                            value: technology.institution || technology.country
                                        }, void 0, false, {
                                            fileName: "[project]/app/technology/[id]/page.tsx",
                                            lineNumber: 109,
                                            columnNumber: 15
                                        }, this),
                                        technology.status && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "border-t border-slate-200 pt-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "text-xs uppercase tracking-wider text-slate-500 font-semibold mb-2",
                                                    children: "Status"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/technology/[id]/page.tsx",
                                                    lineNumber: 112,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "inline-block px-3 py-1 bg-blue-100 text-blue-800 text-xs font-semibold rounded",
                                                    children: technology.status
                                                }, void 0, false, {
                                                    fileName: "[project]/app/technology/[id]/page.tsx",
                                                    lineNumber: 115,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/technology/[id]/page.tsx",
                                            lineNumber: 111,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/technology/[id]/page.tsx",
                                    lineNumber: 107,
                                    columnNumber: 13
                                }, this),
                                Array.isArray(technology.images) && technology.images?.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-white border border-slate-200 rounded-lg overflow-hidden",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-slate-100 px-4 py-3 border-b border-slate-200",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-xs uppercase tracking-wider text-slate-700 font-semibold",
                                                children: "Figures"
                                            }, void 0, false, {
                                                fileName: "[project]/app/technology/[id]/page.tsx",
                                                lineNumber: 126,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/technology/[id]/page.tsx",
                                            lineNumber: 125,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "p-4 space-y-4",
                                            children: technology.images.map((img, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("figure", {
                                                    className: "space-y-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "relative h-48 bg-slate-100 rounded overflow-hidden border border-slate-200 cursor-pointer",
                                                            onClick: ()=>setSelectedImage(img),
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                                src: img,
                                                                alt: `Figure ${index + 1}`,
                                                                fill: true,
                                                                className: "object-cover hover:scale-105 transition-transform duration-300"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/technology/[id]/page.tsx",
                                                                lineNumber: 137,
                                                                columnNumber: 25
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/technology/[id]/page.tsx",
                                                            lineNumber: 133,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("figcaption", {
                                                            className: "text-xs text-slate-600 text-center",
                                                            children: [
                                                                "Figure ",
                                                                index + 1
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/technology/[id]/page.tsx",
                                                            lineNumber: 144,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, index, true, {
                                                    fileName: "[project]/app/technology/[id]/page.tsx",
                                                    lineNumber: 132,
                                                    columnNumber: 21
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/app/technology/[id]/page.tsx",
                                            lineNumber: 130,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/technology/[id]/page.tsx",
                                    lineNumber: 124,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/technology/[id]/page.tsx",
                            lineNumber: 106,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/technology/[id]/page.tsx",
                    lineNumber: 46,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/technology/[id]/page.tsx",
                lineNumber: 45,
                columnNumber: 7
            }, this),
            selectedImage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 bg-black/80 flex items-center justify-center z-50",
                onClick: ()=>setSelectedImage(null),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative w-[90vw] h-[80vh] max-w-5xl",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        src: selectedImage,
                        alt: "Expanded view",
                        fill: true,
                        className: "object-contain rounded-lg"
                    }, void 0, false, {
                        fileName: "[project]/app/technology/[id]/page.tsx",
                        lineNumber: 163,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/technology/[id]/page.tsx",
                    lineNumber: 162,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/technology/[id]/page.tsx",
                lineNumber: 158,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/technology/[id]/page.tsx",
        lineNumber: 34,
        columnNumber: 5
    }, this);
}
/* ---------- Reusable Small Components ---------- */ function Section({ title, text }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "text-2xl font-serif font-bold text-gray-900 mb-4 pb-2 border-b-2 border-gray-900",
                children: title
            }, void 0, false, {
                fileName: "[project]/app/technology/[id]/page.tsx",
                lineNumber: 180,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-gray-800 leading-relaxed text-justify whitespace-pre-line",
                children: text
            }, void 0, false, {
                fileName: "[project]/app/technology/[id]/page.tsx",
                lineNumber: 183,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/technology/[id]/page.tsx",
        lineNumber: 179,
        columnNumber: 5
    }, this);
}
function Info({ label, value }) {
    if (!value) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "border-t border-slate-200 pt-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                className: "text-xs uppercase tracking-wider text-slate-500 font-semibold mb-2",
                children: label
            }, void 0, false, {
                fileName: "[project]/app/technology/[id]/page.tsx",
                lineNumber: 192,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-sm font-medium text-slate-900",
                children: value
            }, void 0, false, {
                fileName: "[project]/app/technology/[id]/page.tsx",
                lineNumber: 195,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/technology/[id]/page.tsx",
        lineNumber: 191,
        columnNumber: 5
    }, this);
}
}),
"[project]/node_modules/next/dist/server/route-modules/app-page/vendored/contexts/hooks-client-context.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['contexts'].HooksClientContext; //# sourceMappingURL=hooks-client-context.js.map
}),
"[project]/node_modules/next/dist/client/components/readonly-url-search-params.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/**
 * ReadonlyURLSearchParams implementation shared between client and server.
 * This file is intentionally not marked as 'use client' or 'use server'
 * so it can be imported by both environments.
 */ /** @internal */ Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "ReadonlyURLSearchParams", {
    enumerable: true,
    get: function() {
        return ReadonlyURLSearchParams;
    }
});
class ReadonlyURLSearchParamsError extends Error {
    constructor(){
        super('Method unavailable on `ReadonlyURLSearchParams`. Read more: https://nextjs.org/docs/app/api-reference/functions/use-search-params#updating-searchparams');
    }
}
class ReadonlyURLSearchParams extends URLSearchParams {
    /** @deprecated Method unavailable on `ReadonlyURLSearchParams`. Read more: https://nextjs.org/docs/app/api-reference/functions/use-search-params#updating-searchparams */ append() {
        throw new ReadonlyURLSearchParamsError();
    }
    /** @deprecated Method unavailable on `ReadonlyURLSearchParams`. Read more: https://nextjs.org/docs/app/api-reference/functions/use-search-params#updating-searchparams */ delete() {
        throw new ReadonlyURLSearchParamsError();
    }
    /** @deprecated Method unavailable on `ReadonlyURLSearchParams`. Read more: https://nextjs.org/docs/app/api-reference/functions/use-search-params#updating-searchparams */ set() {
        throw new ReadonlyURLSearchParamsError();
    }
    /** @deprecated Method unavailable on `ReadonlyURLSearchParams`. Read more: https://nextjs.org/docs/app/api-reference/functions/use-search-params#updating-searchparams */ sort() {
        throw new ReadonlyURLSearchParamsError();
    }
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=readonly-url-search-params.js.map
}),
"[project]/node_modules/next/dist/server/route-modules/app-page/vendored/contexts/server-inserted-html.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['contexts'].ServerInsertedHtml; //# sourceMappingURL=server-inserted-html.js.map
}),
"[project]/node_modules/next/dist/client/components/unrecognized-action-error.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    UnrecognizedActionError: null,
    unstable_isUnrecognizedActionError: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    UnrecognizedActionError: function() {
        return UnrecognizedActionError;
    },
    unstable_isUnrecognizedActionError: function() {
        return unstable_isUnrecognizedActionError;
    }
});
class UnrecognizedActionError extends Error {
    constructor(...args){
        super(...args);
        this.name = 'UnrecognizedActionError';
    }
}
function unstable_isUnrecognizedActionError(error) {
    return !!(error && typeof error === 'object' && error instanceof UnrecognizedActionError);
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=unrecognized-action-error.js.map
}),
"[project]/node_modules/next/dist/client/components/redirect-status-code.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "RedirectStatusCode", {
    enumerable: true,
    get: function() {
        return RedirectStatusCode;
    }
});
var RedirectStatusCode = /*#__PURE__*/ function(RedirectStatusCode) {
    RedirectStatusCode[RedirectStatusCode["SeeOther"] = 303] = "SeeOther";
    RedirectStatusCode[RedirectStatusCode["TemporaryRedirect"] = 307] = "TemporaryRedirect";
    RedirectStatusCode[RedirectStatusCode["PermanentRedirect"] = 308] = "PermanentRedirect";
    return RedirectStatusCode;
}({});
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=redirect-status-code.js.map
}),
"[project]/node_modules/next/dist/client/components/redirect-error.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    REDIRECT_ERROR_CODE: null,
    RedirectType: null,
    isRedirectError: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    REDIRECT_ERROR_CODE: function() {
        return REDIRECT_ERROR_CODE;
    },
    RedirectType: function() {
        return RedirectType;
    },
    isRedirectError: function() {
        return isRedirectError;
    }
});
const _redirectstatuscode = __turbopack_context__.r("[project]/node_modules/next/dist/client/components/redirect-status-code.js [app-ssr] (ecmascript)");
const REDIRECT_ERROR_CODE = 'NEXT_REDIRECT';
var RedirectType = /*#__PURE__*/ function(RedirectType) {
    RedirectType["push"] = "push";
    RedirectType["replace"] = "replace";
    return RedirectType;
}({});
function isRedirectError(error) {
    if (typeof error !== 'object' || error === null || !('digest' in error) || typeof error.digest !== 'string') {
        return false;
    }
    const digest = error.digest.split(';');
    const [errorCode, type] = digest;
    const destination = digest.slice(2, -2).join(';');
    const status = digest.at(-2);
    const statusCode = Number(status);
    return errorCode === REDIRECT_ERROR_CODE && (type === 'replace' || type === 'push') && typeof destination === 'string' && !isNaN(statusCode) && statusCode in _redirectstatuscode.RedirectStatusCode;
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=redirect-error.js.map
}),
"[project]/node_modules/next/dist/client/components/redirect.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    getRedirectError: null,
    getRedirectStatusCodeFromError: null,
    getRedirectTypeFromError: null,
    getURLFromRedirectError: null,
    permanentRedirect: null,
    redirect: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    getRedirectError: function() {
        return getRedirectError;
    },
    getRedirectStatusCodeFromError: function() {
        return getRedirectStatusCodeFromError;
    },
    getRedirectTypeFromError: function() {
        return getRedirectTypeFromError;
    },
    getURLFromRedirectError: function() {
        return getURLFromRedirectError;
    },
    permanentRedirect: function() {
        return permanentRedirect;
    },
    redirect: function() {
        return redirect;
    }
});
const _redirectstatuscode = __turbopack_context__.r("[project]/node_modules/next/dist/client/components/redirect-status-code.js [app-ssr] (ecmascript)");
const _redirecterror = __turbopack_context__.r("[project]/node_modules/next/dist/client/components/redirect-error.js [app-ssr] (ecmascript)");
const actionAsyncStorage = ("TURBOPACK compile-time truthy", 1) ? __turbopack_context__.r("[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)").actionAsyncStorage : "TURBOPACK unreachable";
function getRedirectError(url, type, statusCode = _redirectstatuscode.RedirectStatusCode.TemporaryRedirect) {
    const error = Object.defineProperty(new Error(_redirecterror.REDIRECT_ERROR_CODE), "__NEXT_ERROR_CODE", {
        value: "E394",
        enumerable: false,
        configurable: true
    });
    error.digest = `${_redirecterror.REDIRECT_ERROR_CODE};${type};${url};${statusCode};`;
    return error;
}
function redirect(/** The URL to redirect to */ url, type) {
    type ??= actionAsyncStorage?.getStore()?.isAction ? _redirecterror.RedirectType.push : _redirecterror.RedirectType.replace;
    throw getRedirectError(url, type, _redirectstatuscode.RedirectStatusCode.TemporaryRedirect);
}
function permanentRedirect(/** The URL to redirect to */ url, type = _redirecterror.RedirectType.replace) {
    throw getRedirectError(url, type, _redirectstatuscode.RedirectStatusCode.PermanentRedirect);
}
function getURLFromRedirectError(error) {
    if (!(0, _redirecterror.isRedirectError)(error)) return null;
    // Slices off the beginning of the digest that contains the code and the
    // separating ';'.
    return error.digest.split(';').slice(2, -2).join(';');
}
function getRedirectTypeFromError(error) {
    if (!(0, _redirecterror.isRedirectError)(error)) {
        throw Object.defineProperty(new Error('Not a redirect error'), "__NEXT_ERROR_CODE", {
            value: "E260",
            enumerable: false,
            configurable: true
        });
    }
    return error.digest.split(';', 2)[1];
}
function getRedirectStatusCodeFromError(error) {
    if (!(0, _redirecterror.isRedirectError)(error)) {
        throw Object.defineProperty(new Error('Not a redirect error'), "__NEXT_ERROR_CODE", {
            value: "E260",
            enumerable: false,
            configurable: true
        });
    }
    return Number(error.digest.split(';').at(-2));
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=redirect.js.map
}),
"[project]/node_modules/next/dist/client/components/http-access-fallback/http-access-fallback.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    HTTPAccessErrorStatus: null,
    HTTP_ERROR_FALLBACK_ERROR_CODE: null,
    getAccessFallbackErrorTypeByStatus: null,
    getAccessFallbackHTTPStatus: null,
    isHTTPAccessFallbackError: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    HTTPAccessErrorStatus: function() {
        return HTTPAccessErrorStatus;
    },
    HTTP_ERROR_FALLBACK_ERROR_CODE: function() {
        return HTTP_ERROR_FALLBACK_ERROR_CODE;
    },
    getAccessFallbackErrorTypeByStatus: function() {
        return getAccessFallbackErrorTypeByStatus;
    },
    getAccessFallbackHTTPStatus: function() {
        return getAccessFallbackHTTPStatus;
    },
    isHTTPAccessFallbackError: function() {
        return isHTTPAccessFallbackError;
    }
});
const HTTPAccessErrorStatus = {
    NOT_FOUND: 404,
    FORBIDDEN: 403,
    UNAUTHORIZED: 401
};
const ALLOWED_CODES = new Set(Object.values(HTTPAccessErrorStatus));
const HTTP_ERROR_FALLBACK_ERROR_CODE = 'NEXT_HTTP_ERROR_FALLBACK';
function isHTTPAccessFallbackError(error) {
    if (typeof error !== 'object' || error === null || !('digest' in error) || typeof error.digest !== 'string') {
        return false;
    }
    const [prefix, httpStatus] = error.digest.split(';');
    return prefix === HTTP_ERROR_FALLBACK_ERROR_CODE && ALLOWED_CODES.has(Number(httpStatus));
}
function getAccessFallbackHTTPStatus(error) {
    const httpStatus = error.digest.split(';')[1];
    return Number(httpStatus);
}
function getAccessFallbackErrorTypeByStatus(status) {
    switch(status){
        case 401:
            return 'unauthorized';
        case 403:
            return 'forbidden';
        case 404:
            return 'not-found';
        default:
            return;
    }
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=http-access-fallback.js.map
}),
"[project]/node_modules/next/dist/client/components/not-found.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "notFound", {
    enumerable: true,
    get: function() {
        return notFound;
    }
});
const _httpaccessfallback = __turbopack_context__.r("[project]/node_modules/next/dist/client/components/http-access-fallback/http-access-fallback.js [app-ssr] (ecmascript)");
/**
 * This function allows you to render the [not-found.js file](https://nextjs.org/docs/app/api-reference/file-conventions/not-found)
 * within a route segment as well as inject a tag.
 *
 * `notFound()` can be used in
 * [Server Components](https://nextjs.org/docs/app/building-your-application/rendering/server-components),
 * [Route Handlers](https://nextjs.org/docs/app/building-your-application/routing/route-handlers), and
 * [Server Actions](https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions-and-mutations).
 *
 * - In a Server Component, this will insert a `<meta name="robots" content="noindex" />` meta tag and set the status code to 404.
 * - In a Route Handler or Server Action, it will serve a 404 to the caller.
 *
 * Read more: [Next.js Docs: `notFound`](https://nextjs.org/docs/app/api-reference/functions/not-found)
 */ const DIGEST = `${_httpaccessfallback.HTTP_ERROR_FALLBACK_ERROR_CODE};404`;
function notFound() {
    const error = Object.defineProperty(new Error(DIGEST), "__NEXT_ERROR_CODE", {
        value: "E394",
        enumerable: false,
        configurable: true
    });
    error.digest = DIGEST;
    throw error;
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=not-found.js.map
}),
"[project]/node_modules/next/dist/client/components/forbidden.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "forbidden", {
    enumerable: true,
    get: function() {
        return forbidden;
    }
});
const _httpaccessfallback = __turbopack_context__.r("[project]/node_modules/next/dist/client/components/http-access-fallback/http-access-fallback.js [app-ssr] (ecmascript)");
// TODO: Add `forbidden` docs
/**
 * @experimental
 * This function allows you to render the [forbidden.js file](https://nextjs.org/docs/app/api-reference/file-conventions/forbidden)
 * within a route segment as well as inject a tag.
 *
 * `forbidden()` can be used in
 * [Server Components](https://nextjs.org/docs/app/building-your-application/rendering/server-components),
 * [Route Handlers](https://nextjs.org/docs/app/building-your-application/routing/route-handlers), and
 * [Server Actions](https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions-and-mutations).
 *
 * Read more: [Next.js Docs: `forbidden`](https://nextjs.org/docs/app/api-reference/functions/forbidden)
 */ const DIGEST = `${_httpaccessfallback.HTTP_ERROR_FALLBACK_ERROR_CODE};403`;
function forbidden() {
    if ("TURBOPACK compile-time truthy", 1) {
        throw Object.defineProperty(new Error(`\`forbidden()\` is experimental and only allowed to be enabled when \`experimental.authInterrupts\` is enabled.`), "__NEXT_ERROR_CODE", {
            value: "E488",
            enumerable: false,
            configurable: true
        });
    }
    const error = Object.defineProperty(new Error(DIGEST), "__NEXT_ERROR_CODE", {
        value: "E394",
        enumerable: false,
        configurable: true
    });
    error.digest = DIGEST;
    throw error;
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=forbidden.js.map
}),
"[project]/node_modules/next/dist/client/components/unauthorized.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "unauthorized", {
    enumerable: true,
    get: function() {
        return unauthorized;
    }
});
const _httpaccessfallback = __turbopack_context__.r("[project]/node_modules/next/dist/client/components/http-access-fallback/http-access-fallback.js [app-ssr] (ecmascript)");
// TODO: Add `unauthorized` docs
/**
 * @experimental
 * This function allows you to render the [unauthorized.js file](https://nextjs.org/docs/app/api-reference/file-conventions/unauthorized)
 * within a route segment as well as inject a tag.
 *
 * `unauthorized()` can be used in
 * [Server Components](https://nextjs.org/docs/app/building-your-application/rendering/server-components),
 * [Route Handlers](https://nextjs.org/docs/app/building-your-application/routing/route-handlers), and
 * [Server Actions](https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions-and-mutations).
 *
 *
 * Read more: [Next.js Docs: `unauthorized`](https://nextjs.org/docs/app/api-reference/functions/unauthorized)
 */ const DIGEST = `${_httpaccessfallback.HTTP_ERROR_FALLBACK_ERROR_CODE};401`;
function unauthorized() {
    if ("TURBOPACK compile-time truthy", 1) {
        throw Object.defineProperty(new Error(`\`unauthorized()\` is experimental and only allowed to be used when \`experimental.authInterrupts\` is enabled.`), "__NEXT_ERROR_CODE", {
            value: "E411",
            enumerable: false,
            configurable: true
        });
    }
    const error = Object.defineProperty(new Error(DIGEST), "__NEXT_ERROR_CODE", {
        value: "E394",
        enumerable: false,
        configurable: true
    });
    error.digest = DIGEST;
    throw error;
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=unauthorized.js.map
}),
"[project]/node_modules/next/dist/server/dynamic-rendering-utils.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    isHangingPromiseRejectionError: null,
    makeDevtoolsIOAwarePromise: null,
    makeHangingPromise: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    isHangingPromiseRejectionError: function() {
        return isHangingPromiseRejectionError;
    },
    makeDevtoolsIOAwarePromise: function() {
        return makeDevtoolsIOAwarePromise;
    },
    makeHangingPromise: function() {
        return makeHangingPromise;
    }
});
function isHangingPromiseRejectionError(err) {
    if (typeof err !== 'object' || err === null || !('digest' in err)) {
        return false;
    }
    return err.digest === HANGING_PROMISE_REJECTION;
}
const HANGING_PROMISE_REJECTION = 'HANGING_PROMISE_REJECTION';
class HangingPromiseRejectionError extends Error {
    constructor(route, expression){
        super(`During prerendering, ${expression} rejects when the prerender is complete. Typically these errors are handled by React but if you move ${expression} to a different context by using \`setTimeout\`, \`after\`, or similar functions you may observe this error and you should handle it in that context. This occurred at route "${route}".`), this.route = route, this.expression = expression, this.digest = HANGING_PROMISE_REJECTION;
    }
}
const abortListenersBySignal = new WeakMap();
function makeHangingPromise(signal, route, expression) {
    if (signal.aborted) {
        return Promise.reject(new HangingPromiseRejectionError(route, expression));
    } else {
        const hangingPromise = new Promise((_, reject)=>{
            const boundRejection = reject.bind(null, new HangingPromiseRejectionError(route, expression));
            let currentListeners = abortListenersBySignal.get(signal);
            if (currentListeners) {
                currentListeners.push(boundRejection);
            } else {
                const listeners = [
                    boundRejection
                ];
                abortListenersBySignal.set(signal, listeners);
                signal.addEventListener('abort', ()=>{
                    for(let i = 0; i < listeners.length; i++){
                        listeners[i]();
                    }
                }, {
                    once: true
                });
            }
        });
        // We are fine if no one actually awaits this promise. We shouldn't consider this an unhandled rejection so
        // we attach a noop catch handler here to suppress this warning. If you actually await somewhere or construct
        // your own promise out of it you'll need to ensure you handle the error when it rejects.
        hangingPromise.catch(ignoreReject);
        return hangingPromise;
    }
}
function ignoreReject() {}
function makeDevtoolsIOAwarePromise(underlying, requestStore, stage) {
    if (requestStore.stagedRendering) {
        // We resolve each stage in a timeout, so React DevTools will pick this up as IO.
        return requestStore.stagedRendering.delayUntilStage(stage, undefined, underlying);
    }
    // in React DevTools if we resolve in a setTimeout we will observe
    // the promise resolution as something that can suspend a boundary or root.
    return new Promise((resolve)=>{
        // Must use setTimeout to be considered IO React DevTools. setImmediate will not work.
        setTimeout(()=>{
            resolve(underlying);
        }, 0);
    });
} //# sourceMappingURL=dynamic-rendering-utils.js.map
}),
"[project]/node_modules/next/dist/server/lib/router-utils/is-postpone.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "isPostpone", {
    enumerable: true,
    get: function() {
        return isPostpone;
    }
});
const REACT_POSTPONE_TYPE = Symbol.for('react.postpone');
function isPostpone(error) {
    return typeof error === 'object' && error !== null && error.$$typeof === REACT_POSTPONE_TYPE;
} //# sourceMappingURL=is-postpone.js.map
}),
"[project]/node_modules/next/dist/shared/lib/lazy-dynamic/bailout-to-csr.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

// This has to be a shared module which is shared between client component error boundary and dynamic component
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    BailoutToCSRError: null,
    isBailoutToCSRError: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    BailoutToCSRError: function() {
        return BailoutToCSRError;
    },
    isBailoutToCSRError: function() {
        return isBailoutToCSRError;
    }
});
const BAILOUT_TO_CSR = 'BAILOUT_TO_CLIENT_SIDE_RENDERING';
class BailoutToCSRError extends Error {
    constructor(reason){
        super(`Bail out to client-side rendering: ${reason}`), this.reason = reason, this.digest = BAILOUT_TO_CSR;
    }
}
function isBailoutToCSRError(err) {
    if (typeof err !== 'object' || err === null || !('digest' in err)) {
        return false;
    }
    return err.digest === BAILOUT_TO_CSR;
} //# sourceMappingURL=bailout-to-csr.js.map
}),
"[project]/node_modules/next/dist/client/components/is-next-router-error.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "isNextRouterError", {
    enumerable: true,
    get: function() {
        return isNextRouterError;
    }
});
const _httpaccessfallback = __turbopack_context__.r("[project]/node_modules/next/dist/client/components/http-access-fallback/http-access-fallback.js [app-ssr] (ecmascript)");
const _redirecterror = __turbopack_context__.r("[project]/node_modules/next/dist/client/components/redirect-error.js [app-ssr] (ecmascript)");
function isNextRouterError(error) {
    return (0, _redirecterror.isRedirectError)(error) || (0, _httpaccessfallback.isHTTPAccessFallbackError)(error);
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=is-next-router-error.js.map
}),
"[project]/node_modules/next/dist/client/components/hooks-server-context.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    DynamicServerError: null,
    isDynamicServerError: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    DynamicServerError: function() {
        return DynamicServerError;
    },
    isDynamicServerError: function() {
        return isDynamicServerError;
    }
});
const DYNAMIC_ERROR_CODE = 'DYNAMIC_SERVER_USAGE';
class DynamicServerError extends Error {
    constructor(description){
        super(`Dynamic server usage: ${description}`), this.description = description, this.digest = DYNAMIC_ERROR_CODE;
    }
}
function isDynamicServerError(err) {
    if (typeof err !== 'object' || err === null || !('digest' in err) || typeof err.digest !== 'string') {
        return false;
    }
    return err.digest === DYNAMIC_ERROR_CODE;
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=hooks-server-context.js.map
}),
"[project]/node_modules/next/dist/client/components/static-generation-bailout.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    StaticGenBailoutError: null,
    isStaticGenBailoutError: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    StaticGenBailoutError: function() {
        return StaticGenBailoutError;
    },
    isStaticGenBailoutError: function() {
        return isStaticGenBailoutError;
    }
});
const NEXT_STATIC_GEN_BAILOUT = 'NEXT_STATIC_GEN_BAILOUT';
class StaticGenBailoutError extends Error {
    constructor(...args){
        super(...args), this.code = NEXT_STATIC_GEN_BAILOUT;
    }
}
function isStaticGenBailoutError(error) {
    if (typeof error !== 'object' || error === null || !('code' in error)) {
        return false;
    }
    return error.code === NEXT_STATIC_GEN_BAILOUT;
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=static-generation-bailout.js.map
}),
"[project]/node_modules/next/dist/lib/framework/boundary-constants.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    METADATA_BOUNDARY_NAME: null,
    OUTLET_BOUNDARY_NAME: null,
    ROOT_LAYOUT_BOUNDARY_NAME: null,
    VIEWPORT_BOUNDARY_NAME: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    METADATA_BOUNDARY_NAME: function() {
        return METADATA_BOUNDARY_NAME;
    },
    OUTLET_BOUNDARY_NAME: function() {
        return OUTLET_BOUNDARY_NAME;
    },
    ROOT_LAYOUT_BOUNDARY_NAME: function() {
        return ROOT_LAYOUT_BOUNDARY_NAME;
    },
    VIEWPORT_BOUNDARY_NAME: function() {
        return VIEWPORT_BOUNDARY_NAME;
    }
});
const METADATA_BOUNDARY_NAME = '__next_metadata_boundary__';
const VIEWPORT_BOUNDARY_NAME = '__next_viewport_boundary__';
const OUTLET_BOUNDARY_NAME = '__next_outlet_boundary__';
const ROOT_LAYOUT_BOUNDARY_NAME = '__next_root_layout_boundary__'; //# sourceMappingURL=boundary-constants.js.map
}),
"[project]/node_modules/next/dist/lib/scheduler.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    atLeastOneTask: null,
    scheduleImmediate: null,
    scheduleOnNextTick: null,
    waitAtLeastOneReactRenderTask: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    atLeastOneTask: function() {
        return atLeastOneTask;
    },
    scheduleImmediate: function() {
        return scheduleImmediate;
    },
    scheduleOnNextTick: function() {
        return scheduleOnNextTick;
    },
    waitAtLeastOneReactRenderTask: function() {
        return waitAtLeastOneReactRenderTask;
    }
});
const scheduleOnNextTick = (cb)=>{
    // We use Promise.resolve().then() here so that the operation is scheduled at
    // the end of the promise job queue, we then add it to the next process tick
    // to ensure it's evaluated afterwards.
    //
    // This was inspired by the implementation of the DataLoader interface: https://github.com/graphql/dataloader/blob/d336bd15282664e0be4b4a657cb796f09bafbc6b/src/index.js#L213-L255
    //
    Promise.resolve().then(()=>{
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        else {
            process.nextTick(cb);
        }
    });
};
const scheduleImmediate = (cb)=>{
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    else {
        setImmediate(cb);
    }
};
function atLeastOneTask() {
    return new Promise((resolve)=>scheduleImmediate(resolve));
}
function waitAtLeastOneReactRenderTask() {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    else {
        return new Promise((r)=>setImmediate(r));
    }
} //# sourceMappingURL=scheduler.js.map
}),
"[project]/node_modules/next/dist/server/app-render/staged-rendering.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    RenderStage: null,
    StagedRenderingController: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    RenderStage: function() {
        return RenderStage;
    },
    StagedRenderingController: function() {
        return StagedRenderingController;
    }
});
const _invarianterror = __turbopack_context__.r("[project]/node_modules/next/dist/shared/lib/invariant-error.js [app-ssr] (ecmascript)");
const _promisewithresolvers = __turbopack_context__.r("[project]/node_modules/next/dist/shared/lib/promise-with-resolvers.js [app-ssr] (ecmascript)");
var RenderStage = /*#__PURE__*/ function(RenderStage) {
    RenderStage[RenderStage["Static"] = 1] = "Static";
    RenderStage[RenderStage["Runtime"] = 2] = "Runtime";
    RenderStage[RenderStage["Dynamic"] = 3] = "Dynamic";
    return RenderStage;
}({});
class StagedRenderingController {
    constructor(abortSignal = null){
        this.abortSignal = abortSignal;
        this.currentStage = 1;
        this.runtimeStagePromise = (0, _promisewithresolvers.createPromiseWithResolvers)();
        this.dynamicStagePromise = (0, _promisewithresolvers.createPromiseWithResolvers)();
        if (abortSignal) {
            abortSignal.addEventListener('abort', ()=>{
                const { reason } = abortSignal;
                if (this.currentStage < 2) {
                    this.runtimeStagePromise.promise.catch(ignoreReject) // avoid unhandled rejections
                    ;
                    this.runtimeStagePromise.reject(reason);
                }
                if (this.currentStage < 3) {
                    this.dynamicStagePromise.promise.catch(ignoreReject) // avoid unhandled rejections
                    ;
                    this.dynamicStagePromise.reject(reason);
                }
            }, {
                once: true
            });
        }
    }
    advanceStage(stage) {
        // If we're already at the target stage or beyond, do nothing.
        // (this can happen e.g. if sync IO advanced us to the dynamic stage)
        if (this.currentStage >= stage) {
            return;
        }
        this.currentStage = stage;
        // Note that we might be going directly from Static to Dynamic,
        // so we need to resolve the runtime stage as well.
        if (stage >= 2) {
            this.runtimeStagePromise.resolve();
        }
        if (stage >= 3) {
            this.dynamicStagePromise.resolve();
        }
    }
    getStagePromise(stage) {
        switch(stage){
            case 2:
                {
                    return this.runtimeStagePromise.promise;
                }
            case 3:
                {
                    return this.dynamicStagePromise.promise;
                }
            default:
                {
                    stage;
                    throw Object.defineProperty(new _invarianterror.InvariantError(`Invalid render stage: ${stage}`), "__NEXT_ERROR_CODE", {
                        value: "E881",
                        enumerable: false,
                        configurable: true
                    });
                }
        }
    }
    waitForStage(stage) {
        return this.getStagePromise(stage);
    }
    delayUntilStage(stage, displayName, resolvedValue) {
        const ioTriggerPromise = this.getStagePromise(stage);
        const promise = makeDevtoolsIOPromiseFromIOTrigger(ioTriggerPromise, displayName, resolvedValue);
        // Analogously to `makeHangingPromise`, we might reject this promise if the signal is invoked.
        // (e.g. in the case where we don't want want the render to proceed to the dynamic stage and abort it).
        // We shouldn't consider this an unhandled rejection, so we attach a noop catch handler here to suppress this warning.
        if (this.abortSignal) {
            promise.catch(ignoreReject);
        }
        return promise;
    }
}
function ignoreReject() {}
// TODO(restart-on-cache-miss): the layering of `delayUntilStage`,
// `makeDevtoolsIOPromiseFromIOTrigger` and and `makeDevtoolsIOAwarePromise`
// is confusing, we should clean it up.
function makeDevtoolsIOPromiseFromIOTrigger(ioTrigger, displayName, resolvedValue) {
    // If we create a `new Promise` and give it a displayName
    // (with no userspace code above us in the stack)
    // React Devtools will use it as the IO cause when determining "suspended by".
    // In particular, it should shadow any inner IO that resolved/rejected the promise
    // (in case of staged rendering, this will be the `setTimeout` that triggers the relevant stage)
    const promise = new Promise((resolve, reject)=>{
        ioTrigger.then(resolve.bind(null, resolvedValue), reject);
    });
    if (displayName !== undefined) {
        // @ts-expect-error
        promise.displayName = displayName;
    }
    return promise;
} //# sourceMappingURL=staged-rendering.js.map
}),
"[project]/node_modules/next/dist/server/app-render/dynamic-rendering.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/**
 * The functions provided by this module are used to communicate certain properties
 * about the currently running code so that Next.js can make decisions on how to handle
 * the current execution in different rendering modes such as pre-rendering, resuming, and SSR.
 *
 * Today Next.js treats all code as potentially static. Certain APIs may only make sense when dynamically rendering.
 * Traditionally this meant deopting the entire render to dynamic however with PPR we can now deopt parts
 * of a React tree as dynamic while still keeping other parts static. There are really two different kinds of
 * Dynamic indications.
 *
 * The first is simply an intention to be dynamic. unstable_noStore is an example of this where
 * the currently executing code simply declares that the current scope is dynamic but if you use it
 * inside unstable_cache it can still be cached. This type of indication can be removed if we ever
 * make the default dynamic to begin with because the only way you would ever be static is inside
 * a cache scope which this indication does not affect.
 *
 * The second is an indication that a dynamic data source was read. This is a stronger form of dynamic
 * because it means that it is inappropriate to cache this at all. using a dynamic data source inside
 * unstable_cache should error. If you want to use some dynamic data inside unstable_cache you should
 * read that data outside the cache and pass it in as an argument to the cached function.
 */ Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    Postpone: null,
    PreludeState: null,
    abortAndThrowOnSynchronousRequestDataAccess: null,
    abortOnSynchronousPlatformIOAccess: null,
    accessedDynamicData: null,
    annotateDynamicAccess: null,
    consumeDynamicAccess: null,
    createDynamicTrackingState: null,
    createDynamicValidationState: null,
    createHangingInputAbortSignal: null,
    createRenderInBrowserAbortSignal: null,
    delayUntilRuntimeStage: null,
    formatDynamicAPIAccesses: null,
    getFirstDynamicReason: null,
    isDynamicPostpone: null,
    isPrerenderInterruptedError: null,
    logDisallowedDynamicError: null,
    markCurrentScopeAsDynamic: null,
    postponeWithTracking: null,
    throwIfDisallowedDynamic: null,
    throwToInterruptStaticGeneration: null,
    trackAllowedDynamicAccess: null,
    trackDynamicDataInDynamicRender: null,
    trackSynchronousPlatformIOAccessInDev: null,
    useDynamicRouteParams: null,
    useDynamicSearchParams: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    Postpone: function() {
        return Postpone;
    },
    PreludeState: function() {
        return PreludeState;
    },
    abortAndThrowOnSynchronousRequestDataAccess: function() {
        return abortAndThrowOnSynchronousRequestDataAccess;
    },
    abortOnSynchronousPlatformIOAccess: function() {
        return abortOnSynchronousPlatformIOAccess;
    },
    accessedDynamicData: function() {
        return accessedDynamicData;
    },
    annotateDynamicAccess: function() {
        return annotateDynamicAccess;
    },
    consumeDynamicAccess: function() {
        return consumeDynamicAccess;
    },
    createDynamicTrackingState: function() {
        return createDynamicTrackingState;
    },
    createDynamicValidationState: function() {
        return createDynamicValidationState;
    },
    createHangingInputAbortSignal: function() {
        return createHangingInputAbortSignal;
    },
    createRenderInBrowserAbortSignal: function() {
        return createRenderInBrowserAbortSignal;
    },
    delayUntilRuntimeStage: function() {
        return delayUntilRuntimeStage;
    },
    formatDynamicAPIAccesses: function() {
        return formatDynamicAPIAccesses;
    },
    getFirstDynamicReason: function() {
        return getFirstDynamicReason;
    },
    isDynamicPostpone: function() {
        return isDynamicPostpone;
    },
    isPrerenderInterruptedError: function() {
        return isPrerenderInterruptedError;
    },
    logDisallowedDynamicError: function() {
        return logDisallowedDynamicError;
    },
    markCurrentScopeAsDynamic: function() {
        return markCurrentScopeAsDynamic;
    },
    postponeWithTracking: function() {
        return postponeWithTracking;
    },
    throwIfDisallowedDynamic: function() {
        return throwIfDisallowedDynamic;
    },
    throwToInterruptStaticGeneration: function() {
        return throwToInterruptStaticGeneration;
    },
    trackAllowedDynamicAccess: function() {
        return trackAllowedDynamicAccess;
    },
    trackDynamicDataInDynamicRender: function() {
        return trackDynamicDataInDynamicRender;
    },
    trackSynchronousPlatformIOAccessInDev: function() {
        return trackSynchronousPlatformIOAccessInDev;
    },
    useDynamicRouteParams: function() {
        return useDynamicRouteParams;
    },
    useDynamicSearchParams: function() {
        return useDynamicSearchParams;
    }
});
const _react = /*#__PURE__*/ _interop_require_default(__turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)"));
const _hooksservercontext = __turbopack_context__.r("[project]/node_modules/next/dist/client/components/hooks-server-context.js [app-ssr] (ecmascript)");
const _staticgenerationbailout = __turbopack_context__.r("[project]/node_modules/next/dist/client/components/static-generation-bailout.js [app-ssr] (ecmascript)");
const _workunitasyncstorageexternal = __turbopack_context__.r("[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)");
const _workasyncstorageexternal = __turbopack_context__.r("[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)");
const _dynamicrenderingutils = __turbopack_context__.r("[project]/node_modules/next/dist/server/dynamic-rendering-utils.js [app-ssr] (ecmascript)");
const _boundaryconstants = __turbopack_context__.r("[project]/node_modules/next/dist/lib/framework/boundary-constants.js [app-ssr] (ecmascript)");
const _scheduler = __turbopack_context__.r("[project]/node_modules/next/dist/lib/scheduler.js [app-ssr] (ecmascript)");
const _bailouttocsr = __turbopack_context__.r("[project]/node_modules/next/dist/shared/lib/lazy-dynamic/bailout-to-csr.js [app-ssr] (ecmascript)");
const _invarianterror = __turbopack_context__.r("[project]/node_modules/next/dist/shared/lib/invariant-error.js [app-ssr] (ecmascript)");
const _stagedrendering = __turbopack_context__.r("[project]/node_modules/next/dist/server/app-render/staged-rendering.js [app-ssr] (ecmascript)");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const hasPostpone = typeof _react.default.unstable_postpone === 'function';
function createDynamicTrackingState(isDebugDynamicAccesses) {
    return {
        isDebugDynamicAccesses,
        dynamicAccesses: [],
        syncDynamicErrorWithStack: null
    };
}
function createDynamicValidationState() {
    return {
        hasSuspenseAboveBody: false,
        hasDynamicMetadata: false,
        hasDynamicViewport: false,
        hasAllowedDynamic: false,
        dynamicErrors: []
    };
}
function getFirstDynamicReason(trackingState) {
    var _trackingState_dynamicAccesses_;
    return (_trackingState_dynamicAccesses_ = trackingState.dynamicAccesses[0]) == null ? void 0 : _trackingState_dynamicAccesses_.expression;
}
function markCurrentScopeAsDynamic(store, workUnitStore, expression) {
    if (workUnitStore) {
        switch(workUnitStore.type){
            case 'cache':
            case 'unstable-cache':
                // Inside cache scopes, marking a scope as dynamic has no effect,
                // because the outer cache scope creates a cache boundary. This is
                // subtly different from reading a dynamic data source, which is
                // forbidden inside a cache scope.
                return;
            case 'private-cache':
                // A private cache scope is already dynamic by definition.
                return;
            case 'prerender-legacy':
            case 'prerender-ppr':
            case 'request':
                break;
            default:
                workUnitStore;
        }
    }
    // If we're forcing dynamic rendering or we're forcing static rendering, we
    // don't need to do anything here because the entire page is already dynamic
    // or it's static and it should not throw or postpone here.
    if (store.forceDynamic || store.forceStatic) return;
    if (store.dynamicShouldError) {
        throw Object.defineProperty(new _staticgenerationbailout.StaticGenBailoutError(`Route ${store.route} with \`dynamic = "error"\` couldn't be rendered statically because it used \`${expression}\`. See more info here: https://nextjs.org/docs/app/building-your-application/rendering/static-and-dynamic#dynamic-rendering`), "__NEXT_ERROR_CODE", {
            value: "E553",
            enumerable: false,
            configurable: true
        });
    }
    if (workUnitStore) {
        switch(workUnitStore.type){
            case 'prerender-ppr':
                return postponeWithTracking(store.route, expression, workUnitStore.dynamicTracking);
            case 'prerender-legacy':
                workUnitStore.revalidate = 0;
                // We aren't prerendering, but we are generating a static page. We need
                // to bail out of static generation.
                const err = Object.defineProperty(new _hooksservercontext.DynamicServerError(`Route ${store.route} couldn't be rendered statically because it used ${expression}. See more info here: https://nextjs.org/docs/messages/dynamic-server-error`), "__NEXT_ERROR_CODE", {
                    value: "E550",
                    enumerable: false,
                    configurable: true
                });
                store.dynamicUsageDescription = expression;
                store.dynamicUsageStack = err.stack;
                throw err;
            case 'request':
                if ("TURBOPACK compile-time truthy", 1) {
                    workUnitStore.usedDynamic = true;
                }
                break;
            default:
                workUnitStore;
        }
    }
}
function throwToInterruptStaticGeneration(expression, store, prerenderStore) {
    // We aren't prerendering but we are generating a static page. We need to bail out of static generation
    const err = Object.defineProperty(new _hooksservercontext.DynamicServerError(`Route ${store.route} couldn't be rendered statically because it used \`${expression}\`. See more info here: https://nextjs.org/docs/messages/dynamic-server-error`), "__NEXT_ERROR_CODE", {
        value: "E558",
        enumerable: false,
        configurable: true
    });
    prerenderStore.revalidate = 0;
    store.dynamicUsageDescription = expression;
    store.dynamicUsageStack = err.stack;
    throw err;
}
function trackDynamicDataInDynamicRender(workUnitStore) {
    switch(workUnitStore.type){
        case 'cache':
        case 'unstable-cache':
            // Inside cache scopes, marking a scope as dynamic has no effect,
            // because the outer cache scope creates a cache boundary. This is
            // subtly different from reading a dynamic data source, which is
            // forbidden inside a cache scope.
            return;
        case 'private-cache':
            // A private cache scope is already dynamic by definition.
            return;
        case 'prerender':
        case 'prerender-runtime':
        case 'prerender-legacy':
        case 'prerender-ppr':
        case 'prerender-client':
            break;
        case 'request':
            if ("TURBOPACK compile-time truthy", 1) {
                workUnitStore.usedDynamic = true;
            }
            break;
        default:
            workUnitStore;
    }
}
function abortOnSynchronousDynamicDataAccess(route, expression, prerenderStore) {
    const reason = `Route ${route} needs to bail out of prerendering at this point because it used ${expression}.`;
    const error = createPrerenderInterruptedError(reason);
    prerenderStore.controller.abort(error);
    const dynamicTracking = prerenderStore.dynamicTracking;
    if (dynamicTracking) {
        dynamicTracking.dynamicAccesses.push({
            // When we aren't debugging, we don't need to create another error for the
            // stack trace.
            stack: dynamicTracking.isDebugDynamicAccesses ? new Error().stack : undefined,
            expression
        });
    }
}
function abortOnSynchronousPlatformIOAccess(route, expression, errorWithStack, prerenderStore) {
    const dynamicTracking = prerenderStore.dynamicTracking;
    abortOnSynchronousDynamicDataAccess(route, expression, prerenderStore);
    // It is important that we set this tracking value after aborting. Aborts are executed
    // synchronously except for the case where you abort during render itself. By setting this
    // value late we can use it to determine if any of the aborted tasks are the task that
    // called the sync IO expression in the first place.
    if (dynamicTracking) {
        if (dynamicTracking.syncDynamicErrorWithStack === null) {
            dynamicTracking.syncDynamicErrorWithStack = errorWithStack;
        }
    }
}
function trackSynchronousPlatformIOAccessInDev(requestStore) {
    // We don't actually have a controller to abort but we do the semantic equivalent by
    // advancing the request store out of the prerender stage
    if (requestStore.stagedRendering) {
        // TODO: error for sync IO in the runtime stage
        // (which is not currently covered by the validation render in `spawnDynamicValidationInDev`)
        requestStore.stagedRendering.advanceStage(_stagedrendering.RenderStage.Dynamic);
    }
}
function abortAndThrowOnSynchronousRequestDataAccess(route, expression, errorWithStack, prerenderStore) {
    const prerenderSignal = prerenderStore.controller.signal;
    if (prerenderSignal.aborted === false) {
        // TODO it would be better to move this aborted check into the callsite so we can avoid making
        // the error object when it isn't relevant to the aborting of the prerender however
        // since we need the throw semantics regardless of whether we abort it is easier to land
        // this way. See how this was handled with `abortOnSynchronousPlatformIOAccess` for a closer
        // to ideal implementation
        abortOnSynchronousDynamicDataAccess(route, expression, prerenderStore);
        // It is important that we set this tracking value after aborting. Aborts are executed
        // synchronously except for the case where you abort during render itself. By setting this
        // value late we can use it to determine if any of the aborted tasks are the task that
        // called the sync IO expression in the first place.
        const dynamicTracking = prerenderStore.dynamicTracking;
        if (dynamicTracking) {
            if (dynamicTracking.syncDynamicErrorWithStack === null) {
                dynamicTracking.syncDynamicErrorWithStack = errorWithStack;
            }
        }
    }
    throw createPrerenderInterruptedError(`Route ${route} needs to bail out of prerendering at this point because it used ${expression}.`);
}
function Postpone({ reason, route }) {
    const prerenderStore = _workunitasyncstorageexternal.workUnitAsyncStorage.getStore();
    const dynamicTracking = prerenderStore && prerenderStore.type === 'prerender-ppr' ? prerenderStore.dynamicTracking : null;
    postponeWithTracking(route, reason, dynamicTracking);
}
function postponeWithTracking(route, expression, dynamicTracking) {
    assertPostpone();
    if (dynamicTracking) {
        dynamicTracking.dynamicAccesses.push({
            // When we aren't debugging, we don't need to create another error for the
            // stack trace.
            stack: dynamicTracking.isDebugDynamicAccesses ? new Error().stack : undefined,
            expression
        });
    }
    _react.default.unstable_postpone(createPostponeReason(route, expression));
}
function createPostponeReason(route, expression) {
    return `Route ${route} needs to bail out of prerendering at this point because it used ${expression}. ` + `React throws this special object to indicate where. It should not be caught by ` + `your own try/catch. Learn more: https://nextjs.org/docs/messages/ppr-caught-error`;
}
function isDynamicPostpone(err) {
    if (typeof err === 'object' && err !== null && typeof err.message === 'string') {
        return isDynamicPostponeReason(err.message);
    }
    return false;
}
function isDynamicPostponeReason(reason) {
    return reason.includes('needs to bail out of prerendering at this point because it used') && reason.includes('Learn more: https://nextjs.org/docs/messages/ppr-caught-error');
}
if (isDynamicPostponeReason(createPostponeReason('%%%', '^^^')) === false) {
    throw Object.defineProperty(new Error('Invariant: isDynamicPostpone misidentified a postpone reason. This is a bug in Next.js'), "__NEXT_ERROR_CODE", {
        value: "E296",
        enumerable: false,
        configurable: true
    });
}
const NEXT_PRERENDER_INTERRUPTED = 'NEXT_PRERENDER_INTERRUPTED';
function createPrerenderInterruptedError(message) {
    const error = Object.defineProperty(new Error(message), "__NEXT_ERROR_CODE", {
        value: "E394",
        enumerable: false,
        configurable: true
    });
    error.digest = NEXT_PRERENDER_INTERRUPTED;
    return error;
}
function isPrerenderInterruptedError(error) {
    return typeof error === 'object' && error !== null && error.digest === NEXT_PRERENDER_INTERRUPTED && 'name' in error && 'message' in error && error instanceof Error;
}
function accessedDynamicData(dynamicAccesses) {
    return dynamicAccesses.length > 0;
}
function consumeDynamicAccess(serverDynamic, clientDynamic) {
    // We mutate because we only call this once we are no longer writing
    // to the dynamicTrackingState and it's more efficient than creating a new
    // array.
    serverDynamic.dynamicAccesses.push(...clientDynamic.dynamicAccesses);
    return serverDynamic.dynamicAccesses;
}
function formatDynamicAPIAccesses(dynamicAccesses) {
    return dynamicAccesses.filter((access)=>typeof access.stack === 'string' && access.stack.length > 0).map(({ expression, stack })=>{
        stack = stack.split('\n') // Remove the "Error: " prefix from the first line of the stack trace as
        // well as the first 4 lines of the stack trace which is the distance
        // from the user code and the `new Error().stack` call.
        .slice(4).filter((line)=>{
            // Exclude Next.js internals from the stack trace.
            if (line.includes('node_modules/next/')) {
                return false;
            }
            // Exclude anonymous functions from the stack trace.
            if (line.includes(' (<anonymous>)')) {
                return false;
            }
            // Exclude Node.js internals from the stack trace.
            if (line.includes(' (node:')) {
                return false;
            }
            return true;
        }).join('\n');
        return `Dynamic API Usage Debug - ${expression}:\n${stack}`;
    });
}
function assertPostpone() {
    if (!hasPostpone) {
        throw Object.defineProperty(new Error(`Invariant: React.unstable_postpone is not defined. This suggests the wrong version of React was loaded. This is a bug in Next.js`), "__NEXT_ERROR_CODE", {
            value: "E224",
            enumerable: false,
            configurable: true
        });
    }
}
function createRenderInBrowserAbortSignal() {
    const controller = new AbortController();
    controller.abort(Object.defineProperty(new _bailouttocsr.BailoutToCSRError('Render in Browser'), "__NEXT_ERROR_CODE", {
        value: "E721",
        enumerable: false,
        configurable: true
    }));
    return controller.signal;
}
function createHangingInputAbortSignal(workUnitStore) {
    switch(workUnitStore.type){
        case 'prerender':
        case 'prerender-runtime':
            const controller = new AbortController();
            if (workUnitStore.cacheSignal) {
                // If we have a cacheSignal it means we're in a prospective render. If
                // the input we're waiting on is coming from another cache, we do want
                // to wait for it so that we can resolve this cache entry too.
                workUnitStore.cacheSignal.inputReady().then(()=>{
                    controller.abort();
                });
            } else {
                // Otherwise we're in the final render and we should already have all
                // our caches filled.
                // If the prerender uses stages, we have wait until the runtime stage,
                // at which point all runtime inputs will be resolved.
                // (otherwise, a runtime prerender might consider `cookies()` hanging
                //  even though they'd resolve in the next task.)
                //
                // We might still be waiting on some microtasks so we
                // wait one tick before giving up. When we give up, we still want to
                // render the content of this cache as deeply as we can so that we can
                // suspend as deeply as possible in the tree or not at all if we don't
                // end up waiting for the input.
                const runtimeStagePromise = (0, _workunitasyncstorageexternal.getRuntimeStagePromise)(workUnitStore);
                if (runtimeStagePromise) {
                    runtimeStagePromise.then(()=>(0, _scheduler.scheduleOnNextTick)(()=>controller.abort()));
                } else {
                    (0, _scheduler.scheduleOnNextTick)(()=>controller.abort());
                }
            }
            return controller.signal;
        case 'prerender-client':
        case 'prerender-ppr':
        case 'prerender-legacy':
        case 'request':
        case 'cache':
        case 'private-cache':
        case 'unstable-cache':
            return undefined;
        default:
            workUnitStore;
    }
}
function annotateDynamicAccess(expression, prerenderStore) {
    const dynamicTracking = prerenderStore.dynamicTracking;
    if (dynamicTracking) {
        dynamicTracking.dynamicAccesses.push({
            stack: dynamicTracking.isDebugDynamicAccesses ? new Error().stack : undefined,
            expression
        });
    }
}
function useDynamicRouteParams(expression) {
    const workStore = _workasyncstorageexternal.workAsyncStorage.getStore();
    const workUnitStore = _workunitasyncstorageexternal.workUnitAsyncStorage.getStore();
    if (workStore && workUnitStore) {
        switch(workUnitStore.type){
            case 'prerender-client':
            case 'prerender':
                {
                    const fallbackParams = workUnitStore.fallbackRouteParams;
                    if (fallbackParams && fallbackParams.size > 0) {
                        // We are in a prerender with cacheComponents semantics. We are going to
                        // hang here and never resolve. This will cause the currently
                        // rendering component to effectively be a dynamic hole.
                        _react.default.use((0, _dynamicrenderingutils.makeHangingPromise)(workUnitStore.renderSignal, workStore.route, expression));
                    }
                    break;
                }
            case 'prerender-ppr':
                {
                    const fallbackParams = workUnitStore.fallbackRouteParams;
                    if (fallbackParams && fallbackParams.size > 0) {
                        return postponeWithTracking(workStore.route, expression, workUnitStore.dynamicTracking);
                    }
                    break;
                }
            case 'prerender-runtime':
                throw Object.defineProperty(new _invarianterror.InvariantError(`\`${expression}\` was called during a runtime prerender. Next.js should be preventing ${expression} from being included in server components statically, but did not in this case.`), "__NEXT_ERROR_CODE", {
                    value: "E771",
                    enumerable: false,
                    configurable: true
                });
            case 'cache':
            case 'private-cache':
                throw Object.defineProperty(new _invarianterror.InvariantError(`\`${expression}\` was called inside a cache scope. Next.js should be preventing ${expression} from being included in server components statically, but did not in this case.`), "__NEXT_ERROR_CODE", {
                    value: "E745",
                    enumerable: false,
                    configurable: true
                });
            case 'prerender-legacy':
            case 'request':
            case 'unstable-cache':
                break;
            default:
                workUnitStore;
        }
    }
}
function useDynamicSearchParams(expression) {
    const workStore = _workasyncstorageexternal.workAsyncStorage.getStore();
    const workUnitStore = _workunitasyncstorageexternal.workUnitAsyncStorage.getStore();
    if (!workStore) {
        // We assume pages router context and just return
        return;
    }
    if (!workUnitStore) {
        (0, _workunitasyncstorageexternal.throwForMissingRequestStore)(expression);
    }
    switch(workUnitStore.type){
        case 'prerender-client':
            {
                _react.default.use((0, _dynamicrenderingutils.makeHangingPromise)(workUnitStore.renderSignal, workStore.route, expression));
                break;
            }
        case 'prerender-legacy':
        case 'prerender-ppr':
            {
                if (workStore.forceStatic) {
                    return;
                }
                throw Object.defineProperty(new _bailouttocsr.BailoutToCSRError(expression), "__NEXT_ERROR_CODE", {
                    value: "E394",
                    enumerable: false,
                    configurable: true
                });
            }
        case 'prerender':
        case 'prerender-runtime':
            throw Object.defineProperty(new _invarianterror.InvariantError(`\`${expression}\` was called from a Server Component. Next.js should be preventing ${expression} from being included in server components statically, but did not in this case.`), "__NEXT_ERROR_CODE", {
                value: "E795",
                enumerable: false,
                configurable: true
            });
        case 'cache':
        case 'unstable-cache':
        case 'private-cache':
            throw Object.defineProperty(new _invarianterror.InvariantError(`\`${expression}\` was called inside a cache scope. Next.js should be preventing ${expression} from being included in server components statically, but did not in this case.`), "__NEXT_ERROR_CODE", {
                value: "E745",
                enumerable: false,
                configurable: true
            });
        case 'request':
            return;
        default:
            workUnitStore;
    }
}
const hasSuspenseRegex = /\n\s+at Suspense \(<anonymous>\)/;
// Common implicit body tags that React will treat as body when placed directly in html
const bodyAndImplicitTags = 'body|div|main|section|article|aside|header|footer|nav|form|p|span|h1|h2|h3|h4|h5|h6';
// Detects when RootLayoutBoundary (our framework marker component) appears
// after Suspense in the component stack, indicating the root layout is wrapped
// within a Suspense boundary. Ensures no body/html/implicit-body components are in between.
//
// Example matches:
//   at Suspense (<anonymous>)
//   at __next_root_layout_boundary__ (<anonymous>)
//
// Or with other components in between (but not body/html/implicit-body):
//   at Suspense (<anonymous>)
//   at SomeComponent (<anonymous>)
//   at __next_root_layout_boundary__ (<anonymous>)
const hasSuspenseBeforeRootLayoutWithoutBodyOrImplicitBodyRegex = new RegExp(`\\n\\s+at Suspense \\(<anonymous>\\)(?:(?!\\n\\s+at (?:${bodyAndImplicitTags}) \\(<anonymous>\\))[\\s\\S])*?\\n\\s+at ${_boundaryconstants.ROOT_LAYOUT_BOUNDARY_NAME} \\([^\\n]*\\)`);
const hasMetadataRegex = new RegExp(`\\n\\s+at ${_boundaryconstants.METADATA_BOUNDARY_NAME}[\\n\\s]`);
const hasViewportRegex = new RegExp(`\\n\\s+at ${_boundaryconstants.VIEWPORT_BOUNDARY_NAME}[\\n\\s]`);
const hasOutletRegex = new RegExp(`\\n\\s+at ${_boundaryconstants.OUTLET_BOUNDARY_NAME}[\\n\\s]`);
function trackAllowedDynamicAccess(workStore, componentStack, dynamicValidation, clientDynamic) {
    if (hasOutletRegex.test(componentStack)) {
        // We don't need to track that this is dynamic. It is only so when something else is also dynamic.
        return;
    } else if (hasMetadataRegex.test(componentStack)) {
        dynamicValidation.hasDynamicMetadata = true;
        return;
    } else if (hasViewportRegex.test(componentStack)) {
        dynamicValidation.hasDynamicViewport = true;
        return;
    } else if (hasSuspenseBeforeRootLayoutWithoutBodyOrImplicitBodyRegex.test(componentStack)) {
        // For Suspense within body, the prelude wouldn't be empty so it wouldn't violate the empty static shells rule.
        // But if you have Suspense above body, the prelude is empty but we allow that because having Suspense
        // is an explicit signal from the user that they acknowledge the empty shell and want dynamic rendering.
        dynamicValidation.hasAllowedDynamic = true;
        dynamicValidation.hasSuspenseAboveBody = true;
        return;
    } else if (hasSuspenseRegex.test(componentStack)) {
        // this error had a Suspense boundary above it so we don't need to report it as a source
        // of disallowed
        dynamicValidation.hasAllowedDynamic = true;
        return;
    } else if (clientDynamic.syncDynamicErrorWithStack) {
        // This task was the task that called the sync error.
        dynamicValidation.dynamicErrors.push(clientDynamic.syncDynamicErrorWithStack);
        return;
    } else {
        const message = `Route "${workStore.route}": Uncached data was accessed outside of ` + '<Suspense>. This delays the entire page from rendering, resulting in a ' + 'slow user experience. Learn more: ' + 'https://nextjs.org/docs/messages/blocking-route';
        const error = createErrorWithComponentOrOwnerStack(message, componentStack);
        dynamicValidation.dynamicErrors.push(error);
        return;
    }
}
/**
 * In dev mode, we prefer using the owner stack, otherwise the provided
 * component stack is used.
 */ function createErrorWithComponentOrOwnerStack(message, componentStack) {
    const ownerStack = ("TURBOPACK compile-time value", "development") !== 'production' && _react.default.captureOwnerStack ? _react.default.captureOwnerStack() : null;
    const error = Object.defineProperty(new Error(message), "__NEXT_ERROR_CODE", {
        value: "E394",
        enumerable: false,
        configurable: true
    });
    error.stack = error.name + ': ' + message + (ownerStack ?? componentStack);
    return error;
}
var PreludeState = /*#__PURE__*/ function(PreludeState) {
    PreludeState[PreludeState["Full"] = 0] = "Full";
    PreludeState[PreludeState["Empty"] = 1] = "Empty";
    PreludeState[PreludeState["Errored"] = 2] = "Errored";
    return PreludeState;
}({});
function logDisallowedDynamicError(workStore, error) {
    console.error(error);
    if (!workStore.dev) {
        if (workStore.hasReadableErrorStacks) {
            console.error(`To get a more detailed stack trace and pinpoint the issue, start the app in development mode by running \`next dev\`, then open "${workStore.route}" in your browser to investigate the error.`);
        } else {
            console.error(`To get a more detailed stack trace and pinpoint the issue, try one of the following:
  - Start the app in development mode by running \`next dev\`, then open "${workStore.route}" in your browser to investigate the error.
  - Rerun the production build with \`next build --debug-prerender\` to generate better stack traces.`);
        }
    }
}
function throwIfDisallowedDynamic(workStore, prelude, dynamicValidation, serverDynamic) {
    if (serverDynamic.syncDynamicErrorWithStack) {
        logDisallowedDynamicError(workStore, serverDynamic.syncDynamicErrorWithStack);
        throw new _staticgenerationbailout.StaticGenBailoutError();
    }
    if (prelude !== 0) {
        if (dynamicValidation.hasSuspenseAboveBody) {
            // This route has opted into allowing fully dynamic rendering
            // by including a Suspense boundary above the body. In this case
            // a lack of a shell is not considered disallowed so we simply return
            return;
        }
        // We didn't have any sync bailouts but there may be user code which
        // blocked the root. We would have captured these during the prerender
        // and can log them here and then terminate the build/validating render
        const dynamicErrors = dynamicValidation.dynamicErrors;
        if (dynamicErrors.length > 0) {
            for(let i = 0; i < dynamicErrors.length; i++){
                logDisallowedDynamicError(workStore, dynamicErrors[i]);
            }
            throw new _staticgenerationbailout.StaticGenBailoutError();
        }
        // If we got this far then the only other thing that could be blocking
        // the root is dynamic Viewport. If this is dynamic then
        // you need to opt into that by adding a Suspense boundary above the body
        // to indicate your are ok with fully dynamic rendering.
        if (dynamicValidation.hasDynamicViewport) {
            console.error(`Route "${workStore.route}" has a \`generateViewport\` that depends on Request data (\`cookies()\`, etc...) or uncached external data (\`fetch(...)\`, etc...) without explicitly allowing fully dynamic rendering. See more info here: https://nextjs.org/docs/messages/next-prerender-dynamic-viewport`);
            throw new _staticgenerationbailout.StaticGenBailoutError();
        }
        if (prelude === 1) {
            // If we ever get this far then we messed up the tracking of invalid dynamic.
            // We still adhere to the constraint that you must produce a shell but invite the
            // user to report this as a bug in Next.js.
            console.error(`Route "${workStore.route}" did not produce a static shell and Next.js was unable to determine a reason. This is a bug in Next.js.`);
            throw new _staticgenerationbailout.StaticGenBailoutError();
        }
    } else {
        if (dynamicValidation.hasAllowedDynamic === false && dynamicValidation.hasDynamicMetadata) {
            console.error(`Route "${workStore.route}" has a \`generateMetadata\` that depends on Request data (\`cookies()\`, etc...) or uncached external data (\`fetch(...)\`, etc...) when the rest of the route does not. See more info here: https://nextjs.org/docs/messages/next-prerender-dynamic-metadata`);
            throw new _staticgenerationbailout.StaticGenBailoutError();
        }
    }
}
function delayUntilRuntimeStage(prerenderStore, result) {
    if (prerenderStore.runtimeStagePromise) {
        return prerenderStore.runtimeStagePromise.then(()=>result);
    }
    return result;
} //# sourceMappingURL=dynamic-rendering.js.map
}),
"[project]/node_modules/next/dist/client/components/unstable-rethrow.server.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "unstable_rethrow", {
    enumerable: true,
    get: function() {
        return unstable_rethrow;
    }
});
const _dynamicrenderingutils = __turbopack_context__.r("[project]/node_modules/next/dist/server/dynamic-rendering-utils.js [app-ssr] (ecmascript)");
const _ispostpone = __turbopack_context__.r("[project]/node_modules/next/dist/server/lib/router-utils/is-postpone.js [app-ssr] (ecmascript)");
const _bailouttocsr = __turbopack_context__.r("[project]/node_modules/next/dist/shared/lib/lazy-dynamic/bailout-to-csr.js [app-ssr] (ecmascript)");
const _isnextroutererror = __turbopack_context__.r("[project]/node_modules/next/dist/client/components/is-next-router-error.js [app-ssr] (ecmascript)");
const _dynamicrendering = __turbopack_context__.r("[project]/node_modules/next/dist/server/app-render/dynamic-rendering.js [app-ssr] (ecmascript)");
const _hooksservercontext = __turbopack_context__.r("[project]/node_modules/next/dist/client/components/hooks-server-context.js [app-ssr] (ecmascript)");
function unstable_rethrow(error) {
    if ((0, _isnextroutererror.isNextRouterError)(error) || (0, _bailouttocsr.isBailoutToCSRError)(error) || (0, _hooksservercontext.isDynamicServerError)(error) || (0, _dynamicrendering.isDynamicPostpone)(error) || (0, _ispostpone.isPostpone)(error) || (0, _dynamicrenderingutils.isHangingPromiseRejectionError)(error) || (0, _dynamicrendering.isPrerenderInterruptedError)(error)) {
        throw error;
    }
    if (error instanceof Error && 'cause' in error) {
        unstable_rethrow(error.cause);
    }
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=unstable-rethrow.server.js.map
}),
"[project]/node_modules/next/dist/client/components/unstable-rethrow.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/**
 * This function should be used to rethrow internal Next.js errors so that they can be handled by the framework.
 * When wrapping an API that uses errors to interrupt control flow, you should use this function before you do any error handling.
 * This function will rethrow the error if it is a Next.js error so it can be handled, otherwise it will do nothing.
 *
 * Read more: [Next.js Docs: `unstable_rethrow`](https://nextjs.org/docs/app/api-reference/functions/unstable_rethrow)
 */ Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "unstable_rethrow", {
    enumerable: true,
    get: function() {
        return unstable_rethrow;
    }
});
const unstable_rethrow = ("TURBOPACK compile-time truthy", 1) ? __turbopack_context__.r("[project]/node_modules/next/dist/client/components/unstable-rethrow.server.js [app-ssr] (ecmascript)").unstable_rethrow : "TURBOPACK unreachable";
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=unstable-rethrow.js.map
}),
"[project]/node_modules/next/dist/client/components/navigation.react-server.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    ReadonlyURLSearchParams: null,
    RedirectType: null,
    forbidden: null,
    notFound: null,
    permanentRedirect: null,
    redirect: null,
    unauthorized: null,
    unstable_isUnrecognizedActionError: null,
    unstable_rethrow: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    ReadonlyURLSearchParams: function() {
        return _readonlyurlsearchparams.ReadonlyURLSearchParams;
    },
    RedirectType: function() {
        return _redirecterror.RedirectType;
    },
    forbidden: function() {
        return _forbidden.forbidden;
    },
    notFound: function() {
        return _notfound.notFound;
    },
    permanentRedirect: function() {
        return _redirect.permanentRedirect;
    },
    redirect: function() {
        return _redirect.redirect;
    },
    unauthorized: function() {
        return _unauthorized.unauthorized;
    },
    unstable_isUnrecognizedActionError: function() {
        return unstable_isUnrecognizedActionError;
    },
    unstable_rethrow: function() {
        return _unstablerethrow.unstable_rethrow;
    }
});
const _readonlyurlsearchparams = __turbopack_context__.r("[project]/node_modules/next/dist/client/components/readonly-url-search-params.js [app-ssr] (ecmascript)");
const _redirect = __turbopack_context__.r("[project]/node_modules/next/dist/client/components/redirect.js [app-ssr] (ecmascript)");
const _redirecterror = __turbopack_context__.r("[project]/node_modules/next/dist/client/components/redirect-error.js [app-ssr] (ecmascript)");
const _notfound = __turbopack_context__.r("[project]/node_modules/next/dist/client/components/not-found.js [app-ssr] (ecmascript)");
const _forbidden = __turbopack_context__.r("[project]/node_modules/next/dist/client/components/forbidden.js [app-ssr] (ecmascript)");
const _unauthorized = __turbopack_context__.r("[project]/node_modules/next/dist/client/components/unauthorized.js [app-ssr] (ecmascript)");
const _unstablerethrow = __turbopack_context__.r("[project]/node_modules/next/dist/client/components/unstable-rethrow.js [app-ssr] (ecmascript)");
function unstable_isUnrecognizedActionError() {
    throw Object.defineProperty(new Error('`unstable_isUnrecognizedActionError` can only be used on the client.'), "__NEXT_ERROR_CODE", {
        value: "E776",
        enumerable: false,
        configurable: true
    });
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=navigation.react-server.js.map
}),
"[project]/node_modules/next/dist/client/components/navigation.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    ReadonlyURLSearchParams: null,
    RedirectType: null,
    ServerInsertedHTMLContext: null,
    forbidden: null,
    notFound: null,
    permanentRedirect: null,
    redirect: null,
    unauthorized: null,
    unstable_isUnrecognizedActionError: null,
    unstable_rethrow: null,
    useParams: null,
    usePathname: null,
    useRouter: null,
    useSearchParams: null,
    useSelectedLayoutSegment: null,
    useSelectedLayoutSegments: null,
    useServerInsertedHTML: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    ReadonlyURLSearchParams: function() {
        return _navigationreactserver.ReadonlyURLSearchParams;
    },
    RedirectType: function() {
        return _navigationreactserver.RedirectType;
    },
    ServerInsertedHTMLContext: function() {
        return _serverinsertedhtmlsharedruntime.ServerInsertedHTMLContext;
    },
    forbidden: function() {
        return _navigationreactserver.forbidden;
    },
    notFound: function() {
        return _navigationreactserver.notFound;
    },
    permanentRedirect: function() {
        return _navigationreactserver.permanentRedirect;
    },
    redirect: function() {
        return _navigationreactserver.redirect;
    },
    unauthorized: function() {
        return _navigationreactserver.unauthorized;
    },
    unstable_isUnrecognizedActionError: function() {
        return _unrecognizedactionerror.unstable_isUnrecognizedActionError;
    },
    unstable_rethrow: function() {
        return _navigationreactserver.unstable_rethrow;
    },
    useParams: function() {
        return useParams;
    },
    usePathname: function() {
        return usePathname;
    },
    useRouter: function() {
        return useRouter;
    },
    useSearchParams: function() {
        return useSearchParams;
    },
    useSelectedLayoutSegment: function() {
        return useSelectedLayoutSegment;
    },
    useSelectedLayoutSegments: function() {
        return useSelectedLayoutSegments;
    },
    useServerInsertedHTML: function() {
        return _serverinsertedhtmlsharedruntime.useServerInsertedHTML;
    }
});
const _interop_require_wildcard = __turbopack_context__.r("[project]/node_modules/@swc/helpers/cjs/_interop_require_wildcard.cjs [app-ssr] (ecmascript)");
const _react = /*#__PURE__*/ _interop_require_wildcard._(__turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)"));
const _approutercontextsharedruntime = __turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/contexts/app-router-context.js [app-ssr] (ecmascript)");
const _hooksclientcontextsharedruntime = __turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/contexts/hooks-client-context.js [app-ssr] (ecmascript)");
const _segment = __turbopack_context__.r("[project]/node_modules/next/dist/shared/lib/segment.js [app-ssr] (ecmascript)");
const _readonlyurlsearchparams = __turbopack_context__.r("[project]/node_modules/next/dist/client/components/readonly-url-search-params.js [app-ssr] (ecmascript)");
const _serverinsertedhtmlsharedruntime = __turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/contexts/server-inserted-html.js [app-ssr] (ecmascript)");
const _unrecognizedactionerror = __turbopack_context__.r("[project]/node_modules/next/dist/client/components/unrecognized-action-error.js [app-ssr] (ecmascript)");
const _navigationreactserver = __turbopack_context__.r("[project]/node_modules/next/dist/client/components/navigation.react-server.js [app-ssr] (ecmascript)");
const useDynamicRouteParams = ("TURBOPACK compile-time truthy", 1) ? __turbopack_context__.r("[project]/node_modules/next/dist/server/app-render/dynamic-rendering.js [app-ssr] (ecmascript)").useDynamicRouteParams : "TURBOPACK unreachable";
const useDynamicSearchParams = ("TURBOPACK compile-time truthy", 1) ? __turbopack_context__.r("[project]/node_modules/next/dist/server/app-render/dynamic-rendering.js [app-ssr] (ecmascript)").useDynamicSearchParams : "TURBOPACK unreachable";
function useSearchParams() {
    useDynamicSearchParams?.('useSearchParams()');
    const searchParams = (0, _react.useContext)(_hooksclientcontextsharedruntime.SearchParamsContext);
    // In the case where this is `null`, the compat types added in
    // `next-env.d.ts` will add a new overload that changes the return type to
    // include `null`.
    const readonlySearchParams = (0, _react.useMemo)(()=>{
        if (!searchParams) {
            // When the router is not ready in pages, we won't have the search params
            // available.
            return null;
        }
        return new _readonlyurlsearchparams.ReadonlyURLSearchParams(searchParams);
    }, [
        searchParams
    ]);
    // Instrument with Suspense DevTools (dev-only)
    if (("TURBOPACK compile-time value", "development") !== 'production' && 'use' in _react.default) {
        const navigationPromises = (0, _react.use)(_hooksclientcontextsharedruntime.NavigationPromisesContext);
        if (navigationPromises) {
            return (0, _react.use)(navigationPromises.searchParams);
        }
    }
    return readonlySearchParams;
}
function usePathname() {
    useDynamicRouteParams?.('usePathname()');
    // In the case where this is `null`, the compat types added in `next-env.d.ts`
    // will add a new overload that changes the return type to include `null`.
    const pathname = (0, _react.useContext)(_hooksclientcontextsharedruntime.PathnameContext);
    // Instrument with Suspense DevTools (dev-only)
    if (("TURBOPACK compile-time value", "development") !== 'production' && 'use' in _react.default) {
        const navigationPromises = (0, _react.use)(_hooksclientcontextsharedruntime.NavigationPromisesContext);
        if (navigationPromises) {
            return (0, _react.use)(navigationPromises.pathname);
        }
    }
    return pathname;
}
function useRouter() {
    const router = (0, _react.useContext)(_approutercontextsharedruntime.AppRouterContext);
    if (router === null) {
        throw Object.defineProperty(new Error('invariant expected app router to be mounted'), "__NEXT_ERROR_CODE", {
            value: "E238",
            enumerable: false,
            configurable: true
        });
    }
    return router;
}
function useParams() {
    useDynamicRouteParams?.('useParams()');
    const params = (0, _react.useContext)(_hooksclientcontextsharedruntime.PathParamsContext);
    // Instrument with Suspense DevTools (dev-only)
    if (("TURBOPACK compile-time value", "development") !== 'production' && 'use' in _react.default) {
        const navigationPromises = (0, _react.use)(_hooksclientcontextsharedruntime.NavigationPromisesContext);
        if (navigationPromises) {
            return (0, _react.use)(navigationPromises.params);
        }
    }
    return params;
}
function useSelectedLayoutSegments(parallelRouteKey = 'children') {
    useDynamicRouteParams?.('useSelectedLayoutSegments()');
    const context = (0, _react.useContext)(_approutercontextsharedruntime.LayoutRouterContext);
    // @ts-expect-error This only happens in `pages`. Type is overwritten in navigation.d.ts
    if (!context) return null;
    // Instrument with Suspense DevTools (dev-only)
    if (("TURBOPACK compile-time value", "development") !== 'production' && 'use' in _react.default) {
        const navigationPromises = (0, _react.use)(_hooksclientcontextsharedruntime.NavigationPromisesContext);
        if (navigationPromises) {
            const promise = navigationPromises.selectedLayoutSegmentsPromises?.get(parallelRouteKey);
            if (promise) {
                // We should always have a promise here, but if we don't, it's not worth erroring over.
                // We just won't be able to instrument it, but can still provide the value.
                return (0, _react.use)(promise);
            }
        }
    }
    return (0, _segment.getSelectedLayoutSegmentPath)(context.parentTree, parallelRouteKey);
}
function useSelectedLayoutSegment(parallelRouteKey = 'children') {
    useDynamicRouteParams?.('useSelectedLayoutSegment()');
    const navigationPromises = (0, _react.useContext)(_hooksclientcontextsharedruntime.NavigationPromisesContext);
    const selectedLayoutSegments = useSelectedLayoutSegments(parallelRouteKey);
    // Instrument with Suspense DevTools (dev-only)
    if (("TURBOPACK compile-time value", "development") !== 'production' && navigationPromises && 'use' in _react.default) {
        const promise = navigationPromises.selectedLayoutSegmentPromises?.get(parallelRouteKey);
        if (promise) {
            // We should always have a promise here, but if we don't, it's not worth erroring over.
            // We just won't be able to instrument it, but can still provide the value.
            return (0, _react.use)(promise);
        }
    }
    return (0, _segment.computeSelectedLayoutSegment)(selectedLayoutSegments, parallelRouteKey);
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=navigation.js.map
}),
"[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/client/components/navigation.js [app-ssr] (ecmascript)");
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__eea04127._.js.map