import React, { useState, useEffect, useRef } from 'react';
import { FireIcon, BuildingOfficeIcon, WrenchScrewdriverIcon, CheckCircleIcon } from '../components/Icons';

// Product data for the professional products section
const products = [
    // Fire Alarm & Detection Systems
    {
        id: 'smoke-detector-001',
        name: 'Advanced Smoke Detector',
        category: 'Fire Alarm & Detection',
        description: 'High-sensitivity photoelectric smoke detector with wireless connectivity and long battery life.',
        imageUrl: 'https://www.dropbox.com/scl/fi/gog9z50lrckq8m8o3pyq9/Smoke_detector.jpeg?rlkey=s03nb1z886lgbuwo4fcep4wpg&raw=1',
        price: 'Contact for Quote',
        features: ['Wireless Connectivity', '10-Year Battery Life', 'Smart Home Integration', 'UL Listed'],
        inStock: true
    },
    {
        id: 'heat-detector-001',
        name: 'Fixed Temperature Heat Detector',
        category: 'Fire Alarm & Detection',
        description: 'Reliable heat detector for areas where smoke detectors may not be suitable.',
        imageUrl: 'https://www.dropbox.com/scl/fi/a457e72qzt8kp7noumogz/Heat-Detector.jpeg?rlkey=2qxl6iilrcqhpu1fv8h4i9fgg&raw=1',
        price: 'Contact for Quote',
        features: ['Fixed Temperature', 'Weather Resistant', 'Easy Installation', 'UL Listed'],
        inStock: true
    },
    {
        id: 'control-panel-001',
        name: 'Fire Alarm Control Panel',
        category: 'Fire Alarm & Detection',
        description: 'Central control panel for managing fire alarm systems with advanced monitoring capabilities.',
        imageUrl: 'https://www.dropbox.com/scl/fi/w2zxaxeunxydx6xvizqu9/fire-alarm-control-panel.jpg?rlkey=mpxwfpikvvoucgqff0x33iwad&raw=1',
        price: 'Contact for Quote',
        features: ['Multi-Zone Control', 'LCD Display', 'Battery Backup', 'Network Connectivity'],
        inStock: true
    },
    {
        id: 'manual-call-001',
        name: 'Manual Call Point',
        category: 'Fire Alarm & Detection',
        description: 'Manual fire alarm activation point with glass break mechanism and LED indicators.',
        imageUrl: 'https://www.dropbox.com/scl/fi/9c1tcr0vckdwnas1uwop9/Manual-Call-Point.jpg?rlkey=0zu3huatg3htuy44psgpzevvn&raw=1',
        price: 'Contact for Quote',
        features: ['Glass Break Activation', 'LED Status Indicators', 'Weatherproof Design', 'Easy Reset'],
        inStock: true
    },

    // Firefighting Equipment
    {
        id: 'fire-extinguisher-001',
        name: 'ABC Dry Chemical Fire Extinguisher',
        category: 'Firefighting Equipment',
        description: 'Multi-purpose fire extinguisher suitable for Class A, B, and C fires.',
        imageUrl: 'https://www.dropbox.com/scl/fi/h084xtibrae79c6muwkq7/Fire-Extinguisher.jpeg?rlkey=il2qdhib5o5dicx8vr5prlm27&raw=1',
        price: 'Contact for Quote',
        features: ['ABC Class Rating', 'Lightweight Design', 'Easy Grip Handle', 'Pressure Gauge'],
        inStock: true
    },
    {
        id: 'fire-hose-001',
        name: 'Fire Hose Reel System',
        category: 'Firefighting Equipment',
        description: 'Complete fire hose reel system with high-pressure water delivery capabilities.',
        imageUrl: 'https://www.dropbox.com/scl/fi/x2v13bxqwhw48lww71kxd/Fire-Hose-Reel.png?rlkey=92pukzjd192alqzc2bsffta71&raw=1',
        price: 'Contact for Quote',
        features: ['High Pressure Rating', 'Corrosion Resistant', 'Easy Deployment', 'Wall Mounted'],
        inStock: true
    },
    {
        id: 'sprinkler-001',
        name: 'Automatic Sprinkler System',
        category: 'Firefighting Equipment',
        description: 'Wet pipe sprinkler system for automatic fire suppression in commercial buildings.',
        imageUrl: 'https://www.dropbox.com/scl/fi/n424fd175ljryxjcib7q1/Sprinkler-System.jpg?rlkey=rzntjptuqutwdpynyejq0srst&raw=1',
        price: 'Contact for Quote',
        features: ['Automatic Activation', 'Wet Pipe System', 'High Flow Rate', 'Easy Maintenance'],
        inStock: true
    },
    {
        id: 'fire-hydrant-001',
        name: 'Underground Fire Hydrant',
        category: 'Firefighting Equipment',
        description: 'Heavy-duty underground fire hydrant for municipal and industrial applications.',
        imageUrl: 'https://www.dropbox.com/scl/fi/nu2w1f1hzngb6947tf7ev/Fire-Hydrant.png?rlkey=83itdqfpz100d9r8zerjbhyxj&raw=1',
        price: 'Contact for Quote',
        features: ['Heavy Duty Construction', 'High Flow Capacity', 'Frost Resistant', 'Easy Access'],
        inStock: true
    },

    // Fire Suppression Systems
    {
        id: 'fm200-001',
        name: 'FM-200 Clean Agent System',
        category: 'Fire Suppression Systems',
        description: 'Clean agent fire suppression system for protecting sensitive equipment and data centers.',
        imageUrl: 'https://www.dropbox.com/scl/fi/5u5fa82roamrzl4ennsns/FM-200-System.jpeg?rlkey=rl7gl1nfa9qlvqlr7o6xbnbqq&raw=1',
        price: 'Contact for Quote',
        features: ['Clean Agent', 'No Residue', 'Fast Discharge', 'Environmentally Safe'],
        inStock: true
    },
    {
        id: 'co2-001',
        name: 'CO2 Fire Suppression System',
        category: 'Fire Suppression Systems',
        description: 'Carbon dioxide suppression system for industrial and commercial applications.',
        imageUrl: 'https://www.dropbox.com/scl/fi/a6yb0wcwrtrhqlwjyr0qh/CO2-System.jpeg?rlkey=eh9k7eaz0t1yjlxppy66wmprm&raw=1',
        price: 'Contact for Quote',
        features: ['High Efficiency', 'No Residue', 'Fast Response', 'Cost Effective'],
        inStock: true
    },

    // Personal Protective Equipment
    {
        id: 'safety-helmet-001',
        name: 'Industrial Safety Helmet',
        category: 'Personal Protective Equipment',
        description: 'High-impact resistant safety helmet with adjustable suspension system.',
        imageUrl: 'https://www.dropbox.com/scl/fi/75eszm57j20v29acxk1wz/Safety-Helmet.jpg?rlkey=jlqzahfn5f8lh9sydhw13ftb0&raw=1',
        price: 'Contact for Quote',
        features: ['High Impact Resistance', 'Adjustable Suspension', 'Ventilation Slots', 'ANSI Z89.1 Certified'],
        inStock: true
    },
    {
        id: 'safety-gloves-001',
        name: 'Cut-Resistant Safety Gloves',
        category: 'Personal Protective Equipment',
        description: 'High-performance cut-resistant gloves for industrial and construction applications.',
        imageUrl: 'https://www.dropbox.com/scl/fi/eapxxe18vhby1qlstwpl5/Safety-Gloves.jpg?rlkey=h8xq320viej4agx6dvxewjem6&raw=1',
        price: 'Contact for Quote',
        features: ['Cut Resistant', 'Comfortable Fit', 'Durable Material', 'EN 388 Certified'],
        inStock: true
    },

    // Piping & Industrial Valves
    {
        id: 'gate-valve-001',
        name: 'Industrial Gate Valve',
        category: 'Piping & Industrial Valves',
        description: 'Heavy-duty gate valve for industrial applications with full bore design.',
        imageUrl: 'https://www.dropbox.com/scl/fi/8wvee4d6nxf6jcjzw3op3/Gate-Valve.jpg?rlkey=900mbvd36ww221hbtwunri07a&raw=1',
        price: 'Contact for Quote',
        features: ['Full Bore Design', 'Heavy Duty Construction', 'Easy Operation', 'High Pressure Rating'],
        inStock: true
    },
    {
        id: 'ball-valve-001',
        name: 'High Pressure Ball Valve',
        category: 'Piping & Industrial Valves',
        description: 'Quarter-turn ball valve with high pressure rating for industrial applications.',
        imageUrl: 'https://www.dropbox.com/scl/fi/u6j87a28p8250o3kvbp2j/Ball-Valve.jpg?rlkey=r49a0ea3gejw9fxmf5rstiw3l&raw=1',
        price: 'Contact for Quote',
        features: ['Quarter Turn Operation', 'High Pressure Rating', 'Corrosion Resistant', 'Long Service Life'],
        inStock: true
    }
];

// Related products data for each main product
const relatedProducts = {
    'smoke-detector-001': [
        {
            id: 'smoke-detector-002',
            name: 'Ionization Smoke Detector',
            description: 'Ionization technology for fast flame fire detection.',
            imageUrl: 'https://www.dropbox.com/scl/fi/gog9z50lrckq8m8o3pyq9/Smoke_detector.jpeg?rlkey=s03nb1z886lgbuwo4fcep4wpg&raw=1',
            price: 'Contact for Quote',
            features: ['Ionization Technology', 'Fast Response', 'Battery Operated', 'Easy Installation']
        },
        {
            id: 'smoke-detector-003',
            name: 'Wireless Smoke Detector',
            description: 'Wireless connectivity with smartphone app integration.',
            imageUrl: 'https://www.dropbox.com/scl/fi/gog9z50lrckq8m8o3pyq9/Smoke_detector.jpeg?rlkey=s03nb1z886lgbuwo4fcep4wpg&raw=1',
            price: 'Contact for Quote',
            features: ['Wireless Technology', 'Smart App Control', 'Battery Backup', 'Remote Monitoring']
        },
        {
            id: 'smoke-detector-004',
            name: 'Multi-Sensor Smoke Detector',
            description: 'Combines photoelectric and heat detection technologies.',
            imageUrl: 'https://www.dropbox.com/scl/fi/gog9z50lrckq8m8o3pyq9/Smoke_detector.jpeg?rlkey=s03nb1z886lgbuwo4fcep4wpg&raw=1',
            price: 'Contact for Quote',
            features: ['Dual Technology', 'Reduced False Alarms', 'High Sensitivity', 'Weather Resistant']
        },
        {
            id: 'smoke-detector-005',
            name: 'Addressable Smoke Detector',
            description: 'Network-connected detector with individual identification.',
            imageUrl: 'https://www.dropbox.com/scl/fi/gog9z50lrckq8m8o3pyq9/Smoke_detector.jpeg?rlkey=s03nb1z886lgbuwo4fcep4wpg&raw=1',
            price: 'Contact for Quote',
            features: ['Network Connected', 'Individual ID', 'Central Monitoring', 'Easy Maintenance']
        },
        {
            id: 'smoke-detector-006',
            name: 'Beam Smoke Detector',
            description: 'Long-range beam detector for large open areas.',
            imageUrl: 'https://www.dropbox.com/scl/fi/gog9z50lrckq8m8o3pyq9/Smoke_detector.jpeg?rlkey=s03nb1z886lgbuwo4fcep4wpg&raw=1',
            price: 'Contact for Quote',
            features: ['Long Range', 'Large Area Coverage', 'High Sensitivity', 'Weather Resistant']
        },
        {
            id: 'smoke-detector-007',
            name: 'Aspirating Smoke Detector',
            description: 'Early warning system with air sampling technology.',
            imageUrl: 'https://www.dropbox.com/scl/fi/gog9z50lrckq8m8o3pyq9/Smoke_detector.jpeg?rlkey=s03nb1z886lgbuwo4fcep4wpg&raw=1',
            price: 'Contact for Quote',
            features: ['Early Detection', 'Air Sampling', 'High Sensitivity', 'Clean Room Compatible']
        }
    ],
    'heat-detector-001': [
        {
            id: 'heat-detector-002',
            name: 'Rate of Rise Heat Detector',
            description: 'Detects rapid temperature increases in protected areas.',
            imageUrl: 'https://www.dropbox.com/scl/fi/a457e72qzt8kp7noumogz/Heat-Detector.jpeg?rlkey=2qxl6iilrcqhpu1fv8h4i9fgg&raw=1',
            price: 'Contact for Quote',
            features: ['Rate of Rise Detection', 'Fast Response', 'Temperature Monitoring', 'Reliable']
        },
        {
            id: 'heat-detector-003',
            name: 'Linear Heat Detector',
            description: 'Continuous heat detection cable for long distances.',
            imageUrl: 'https://www.dropbox.com/scl/fi/a457e72qzt8kp7noumogz/Heat-Detector.jpeg?rlkey=2qxl6iilrcqhpu1fv8h4i9fgg&raw=1',
            price: 'Contact for Quote',
            features: ['Linear Detection', 'Long Distance', 'Flexible Installation', 'Continuous Monitoring']
        },
        {
            id: 'heat-detector-004',
            name: 'Combination Heat Detector',
            description: 'Combines fixed temperature and rate of rise detection.',
            imageUrl: 'https://www.dropbox.com/scl/fi/a457e72qzt8kp7noumogz/Heat-Detector.jpeg?rlkey=2qxl6iilrcqhpu1fv8h4i9fgg&raw=1',
            price: 'Contact for Quote',
            features: ['Dual Detection', 'Fixed Temperature', 'Rate of Rise', 'High Reliability']
        }
    ],
    'fire-extinguisher-001': [
        {
            id: 'fire-extinguisher-002',
            name: 'CO2 Fire Extinguisher',
            description: 'Clean agent extinguisher for electrical fires.',
            imageUrl: 'https://www.dropbox.com/scl/fi/h084xtibrae79c6muwkq7/Fire-Extinguisher.jpeg?rlkey=il2qdhib5o5dicx8vr5prlm27&raw=1',
            price: 'Contact for Quote',
            features: ['Clean Agent', 'No Residue', 'Electrical Safe', 'Fast Discharge']
        },
        {
            id: 'fire-extinguisher-003',
            name: 'Water Fire Extinguisher',
            description: 'Water-based extinguisher for Class A fires.',
            imageUrl: 'https://www.dropbox.com/scl/fi/h084xtibrae79c6muwkq7/Fire-Extinguisher.jpeg?rlkey=il2qdhib5o5dicx8vr5prlm27&raw=1',
            price: 'Contact for Quote',
            features: ['Water Based', 'Class A Rating', 'Environmentally Safe', 'Easy Refill']
        },
        {
            id: 'fire-extinguisher-004',
            name: 'Foam Fire Extinguisher',
            description: 'Foam extinguisher for Class A and B fires.',
            imageUrl: 'https://www.dropbox.com/scl/fi/h084xtibrae79c6muwkq7/Fire-Extinguisher.jpeg?rlkey=il2qdhib5o5dicx8vr5prlm27&raw=1',
            price: 'Contact for Quote',
            features: ['Foam Technology', 'A&B Class Rating', 'Long Range', 'Effective Coverage']
        },
        {
            id: 'fire-extinguisher-005',
            name: 'Wet Chemical Extinguisher',
            description: 'Specialized extinguisher for kitchen fires.',
            imageUrl: 'https://www.dropbox.com/scl/fi/h084xtibrae79c6muwkq7/Fire-Extinguisher.jpeg?rlkey=il2qdhib5o5dicx8vr5prlm27&raw=1',
            price: 'Contact for Quote',
            features: ['Kitchen Safe', 'Class K Rating', 'Cooling Effect', 'No Re-ignition']
        },
        {
            id: 'fire-extinguisher-006',
            name: 'Dry Powder Extinguisher',
            description: 'Multi-purpose extinguisher for various fire types.',
            imageUrl: 'https://www.dropbox.com/scl/fi/h084xtibrae79c6muwkq7/Fire-Extinguisher.jpeg?rlkey=il2qdhib5o5dicx8vr5prlm27&raw=1',
            price: 'Contact for Quote',
            features: ['Multi-Purpose', 'ABC Rating', 'Versatile', 'Long Shelf Life']
        },
        {
            id: 'fire-extinguisher-007',
            name: 'Halon Alternative Extinguisher',
            description: 'Environmentally friendly clean agent extinguisher.',
            imageUrl: 'https://www.dropbox.com/scl/fi/h084xtibrae79c6muwkq7/Fire-Extinguisher.jpeg?rlkey=il2qdhib5o5dicx8vr5prlm27&raw=1',
            price: 'Contact for Quote',
            features: ['Clean Agent', 'Environmentally Safe', 'No Ozone Depletion', 'Effective']
        }
    ],
    'safety-helmet-001': [
        {
            id: 'safety-helmet-002',
            name: 'Hard Hat with Face Shield',
            description: 'Safety helmet with integrated face protection.',
            imageUrl: 'https://www.dropbox.com/scl/fi/75eszm57j20v29acxk1wz/Safety-Helmet.jpg?rlkey=jlqzahfn5f8lh9sydhw13ftb0&raw=1',
            price: 'Contact for Quote',
            features: ['Integrated Face Shield', 'High Impact', 'Comfortable Fit', 'Adjustable']
        },
        {
            id: 'safety-helmet-003',
            name: 'Welding Helmet',
            description: 'Specialized helmet for welding operations.',
            imageUrl: 'https://www.dropbox.com/scl/fi/75eszm57j20v29acxk1wz/Safety-Helmet.jpg?rlkey=jlqzahfn5f8lh9sydhw13ftb0&raw=1',
            price: 'Contact for Quote',
            features: ['Welding Protection', 'Auto Darkening', 'UV Protection', 'Comfortable']
        },
        {
            id: 'safety-helmet-004',
            name: 'Climbing Helmet',
            description: 'Lightweight helmet for construction and climbing.',
            imageUrl: 'https://www.dropbox.com/scl/fi/75eszm57j20v29acxk1wz/Safety-Helmet.jpg?rlkey=jlqzahfn5f8lh9sydhw13ftb0&raw=1',
            price: 'Contact for Quote',
            features: ['Lightweight', 'Climbing Compatible', 'High Impact', 'Ventilated']
        },
        {
            id: 'safety-helmet-005',
            name: 'Electrical Safety Helmet',
            description: 'Non-conductive helmet for electrical work.',
            imageUrl: 'https://www.dropbox.com/scl/fi/75eszm57j20v29acxk1wz/Safety-Helmet.jpg?rlkey=jlqzahfn5f8lh9sydhw13ftb0&raw=1',
            price: 'Contact for Quote',
            features: ['Non-Conductive', 'Electrical Safe', 'High Voltage Rated', 'Insulated']
        },
        {
            id: 'safety-helmet-006',
            name: 'Rescue Helmet',
            description: 'Specialized helmet for rescue operations.',
            imageUrl: 'https://www.dropbox.com/scl/fi/75eszm57j20v29acxk1wz/Safety-Helmet.jpg?rlkey=jlqzahfn5f8lh9sydhw13ftb0&raw=1',
            price: 'Contact for Quote',
            features: ['Rescue Rated', 'High Visibility', 'Communication Ready', 'Durable']
        }
    ],
    'safety-gloves-001': [
        {
            id: 'safety-gloves-002',
            name: 'Chemical Resistant Gloves',
            description: 'Protection against chemical exposure and contamination.',
            imageUrl: 'https://www.dropbox.com/scl/fi/eapxxe18vhby1qlstwpl5/Safety-Gloves.jpg?rlkey=h8xq320viej4agx6dvxewjem6&raw=1',
            price: 'Contact for Quote',
            features: ['Chemical Resistant', 'Long Cuff', 'Durable Material', 'Comfortable']
        },
        {
            id: 'safety-gloves-003',
            name: 'Heat Resistant Gloves',
            description: 'High-temperature protection for hot work environments.',
            imageUrl: 'https://www.dropbox.com/scl/fi/eapxxe18vhby1qlstwpl5/Safety-Gloves.jpg?rlkey=h8xq320viej4agx6dvxewjem6&raw=1',
            price: 'Contact for Quote',
            features: ['Heat Resistant', 'High Temperature', 'Insulated', 'Flexible']
        },
        {
            id: 'safety-gloves-004',
            name: 'Electrical Safety Gloves',
            description: 'Insulated gloves for electrical work protection.',
            imageUrl: 'https://www.dropbox.com/scl/fi/eapxxe18vhby1qlstwpl5/Safety-Gloves.jpg?rlkey=h8xq320viej4agx6dvxewjem6&raw=1',
            price: 'Contact for Quote',
            features: ['Electrical Insulated', 'High Voltage Rated', 'Non-Conductive', 'Tested']
        },
        {
            id: 'safety-gloves-005',
            name: 'Welding Gloves',
            description: 'Heavy-duty gloves for welding and metal work.',
            imageUrl: 'https://www.dropbox.com/scl/fi/eapxxe18vhby1qlstwpl5/Safety-Gloves.jpg?rlkey=h8xq320viej4agx6dvxewjem6&raw=1',
            price: 'Contact for Quote',
            features: ['Welding Protection', 'Heat Resistant', 'Heavy Duty', 'Long Cuff']
        }
    ],
    'gate-valve-001': [
        {
            id: 'gate-valve-002',
            name: 'Rising Stem Gate Valve',
            description: 'Gate valve with rising stem for easy operation.',
            imageUrl: 'https://www.dropbox.com/scl/fi/8wvee4d6nxf6jcjzw3op3/Gate-Valve.jpg?rlkey=900mbvd36ww221hbtwunri07a&raw=1',
            price: 'Contact for Quote',
            features: ['Rising Stem', 'Easy Operation', 'Visual Position', 'Reliable']
        },
        {
            id: 'gate-valve-003',
            name: 'Non-Rising Stem Gate Valve',
            description: 'Compact gate valve for space-constrained applications.',
            imageUrl: 'https://www.dropbox.com/scl/fi/8wvee4d6nxf6jcjzw3op3/Gate-Valve.jpg?rlkey=900mbvd36ww221hbtwunri07a&raw=1',
            price: 'Contact for Quote',
            features: ['Compact Design', 'Space Saving', 'Full Bore', 'Durable']
        },
        {
            id: 'gate-valve-004',
            name: 'Knife Gate Valve',
            description: 'Sharp-edged gate valve for slurry and viscous fluids.',
            imageUrl: 'https://www.dropbox.com/scl/fi/8wvee4d6nxf6jcjzw3op3/Gate-Valve.jpg?rlkey=900mbvd36ww221hbtwunri07a&raw=1',
            price: 'Contact for Quote',
            features: ['Sharp Edge', 'Slurry Compatible', 'Viscous Fluid', 'Self-Cleaning']
        },
        {
            id: 'gate-valve-005',
            name: 'Wedge Gate Valve',
            description: 'Wedge-shaped gate for tight shutoff applications.',
            imageUrl: 'https://www.dropbox.com/scl/fi/8wvee4d6nxf6jcjzw3op3/Gate-Valve.jpg?rlkey=900mbvd36ww221hbtwunri07a&raw=1',
            price: 'Contact for Quote',
            features: ['Wedge Design', 'Tight Shutoff', 'High Pressure', 'Reliable Sealing']
        }
    ],
    'ball-valve-001': [
        {
            id: 'ball-valve-002',
            name: 'Floating Ball Valve',
            description: 'Ball valve with floating ball design for general applications.',
            imageUrl: 'https://www.dropbox.com/scl/fi/u6j87a28p8250o3kvbp2j/Ball-Valve.jpg?rlkey=r49a0ea3gejw9fxmf5rstiw3l&raw=1',
            price: 'Contact for Quote',
            features: ['Floating Ball', 'General Purpose', 'Easy Operation', 'Reliable']
        },
        {
            id: 'ball-valve-003',
            name: 'Trunnion Ball Valve',
            description: 'High-pressure ball valve with trunnion support.',
            imageUrl: 'https://www.dropbox.com/scl/fi/u6j87a28p8250o3kvbp2j/Ball-Valve.jpg?rlkey=r49a0ea3gejw9fxmf5rstiw3l&raw=1',
            price: 'Contact for Quote',
            features: ['Trunnion Support', 'High Pressure', 'Large Diameter', 'Heavy Duty']
        },
        {
            id: 'ball-valve-004',
            name: 'Three-Way Ball Valve',
            description: 'Multi-port ball valve for flow direction control.',
            imageUrl: 'https://www.dropbox.com/scl/fi/u6j87a28p8250o3kvbp2j/Ball-Valve.jpg?rlkey=r49a0ea3gejw9fxmf5rstiw3l&raw=1',
            price: 'Contact for Quote',
            features: ['Three-Way', 'Flow Control', 'Multi-Port', 'Versatile']
        },
        {
            id: 'ball-valve-005',
            name: 'V-Port Ball Valve',
            description: 'Ball valve with V-shaped port for flow control.',
            imageUrl: 'https://www.dropbox.com/scl/fi/u6j87a28p8250o3kvbp2j/Ball-Valve.jpg?rlkey=r49a0ea3gejw9fxmf5rstiw3l&raw=1',
            price: 'Contact for Quote',
            features: ['V-Port Design', 'Flow Control', 'Precise Regulation', 'Linear Flow']
        }
    ],
    'control-panel-001': [
        {
            id: 'control-panel-002',
            name: 'Conventional Fire Panel',
            description: 'Traditional fire alarm control panel with zone-based detection.',
            imageUrl: 'https://www.dropbox.com/scl/fi/w2zxaxeunxydx6xvizqu9/fire-alarm-control-panel.jpg?rlkey=mpxwfpikvvoucgqff0x33iwad&raw=1',
            price: 'Contact for Quote',
            features: ['Zone Based', 'Traditional Design', 'Reliable', 'Easy Maintenance']
        },
        {
            id: 'control-panel-003',
            name: 'Addressable Fire Panel',
            description: 'Advanced panel with individual device identification and monitoring.',
            imageUrl: 'https://www.dropbox.com/scl/fi/w2zxaxeunxydx6xvizqu9/fire-alarm-control-panel.jpg?rlkey=mpxwfpikvvoucgqff0x33iwad&raw=1',
            price: 'Contact for Quote',
            features: ['Addressable System', 'Individual ID', 'Advanced Monitoring', 'Network Ready']
        },
        {
            id: 'control-panel-004',
            name: 'Wireless Fire Panel',
            description: 'Wireless fire alarm control panel for easy installation.',
            imageUrl: 'https://www.dropbox.com/scl/fi/w2zxaxeunxydx6xvizqu9/fire-alarm-control-panel.jpg?rlkey=mpxwfpikvvoucgqff0x33iwad&raw=1',
            price: 'Contact for Quote',
            features: ['Wireless Technology', 'Easy Installation', 'Battery Backup', 'Remote Monitoring']
        },
        {
            id: 'control-panel-005',
            name: 'Hybrid Fire Panel',
            description: 'Combines conventional and addressable technologies.',
            imageUrl: 'https://www.dropbox.com/scl/fi/w2zxaxeunxydx6xvizqu9/fire-alarm-control-panel.jpg?rlkey=mpxwfpikvvoucgqff0x33iwad&raw=1',
            price: 'Contact for Quote',
            features: ['Hybrid System', 'Flexible Design', 'Cost Effective', 'Upgradeable']
        }
    ],
    'manual-call-001': [
        {
            id: 'manual-call-002',
            name: 'Break Glass Call Point',
            description: 'Traditional break glass manual call point for fire alarm activation.',
            imageUrl: 'https://www.dropbox.com/scl/fi/9c1tcr0vckdwnas1uwop9/Manual-Call-Point.jpg?rlkey=0zu3huatg3htuy44psgpzevvn&raw=1',
            price: 'Contact for Quote',
            features: ['Break Glass', 'Traditional Design', 'Reliable', 'Easy Reset']
        },
        {
            id: 'manual-call-003',
            name: 'Push Button Call Point',
            description: 'Modern push button manual call point with LED indicators.',
            imageUrl: 'https://www.dropbox.com/scl/fi/9c1tcr0vckdwnas1uwop9/Manual-Call-Point.jpg?rlkey=0zu3huatg3htuy44psgpzevvn&raw=1',
            price: 'Contact for Quote',
            features: ['Push Button', 'LED Indicators', 'Modern Design', 'Weatherproof']
        },
        {
            id: 'manual-call-004',
            name: 'Key Switch Call Point',
            description: 'Key-operated manual call point for restricted access areas.',
            imageUrl: 'https://www.dropbox.com/scl/fi/9c1tcr0vckdwnas1uwop9/Manual-Call-Point.jpg?rlkey=0zu3huatg3htuy44psgpzevvn&raw=1',
            price: 'Contact for Quote',
            features: ['Key Operated', 'Restricted Access', 'Security', 'Authorized Use']
        }
    ],
    'fire-hose-001': [
        {
            id: 'fire-hose-002',
            name: 'Rubber Fire Hose',
            description: 'Flexible rubber fire hose for general firefighting applications.',
            imageUrl: 'https://www.dropbox.com/scl/fi/x2v13bxqwhw48lww71kxd/Fire-Hose-Reel.png?rlkey=92pukzjd192alqzc2bsffta71&raw=1',
            price: 'Contact for Quote',
            features: ['Flexible Rubber', 'High Pressure', 'Durable', 'Easy Handling']
        },
        {
            id: 'fire-hose-003',
            name: 'Canvas Fire Hose',
            description: 'Traditional canvas fire hose for heavy-duty applications.',
            imageUrl: 'https://www.dropbox.com/scl/fi/x2v13bxqwhw48lww71kxd/Fire-Hose-Reel.png?rlkey=92pukzjd192alqzc2bsffta71&raw=1',
            price: 'Contact for Quote',
            features: ['Canvas Material', 'Heavy Duty', 'Traditional', 'Reliable']
        },
        {
            id: 'fire-hose-004',
            name: 'Synthetic Fire Hose',
            description: 'Modern synthetic fire hose with advanced materials.',
            imageUrl: 'https://www.dropbox.com/scl/fi/x2v13bxqwhw48lww71kxd/Fire-Hose-Reel.png?rlkey=92pukzjd192alqzc2bsffta71&raw=1',
            price: 'Contact for Quote',
            features: ['Synthetic Material', 'Lightweight', 'High Performance', 'Weather Resistant']
        }
    ],
    'sprinkler-001': [
        {
            id: 'sprinkler-002',
            name: 'Wet Pipe Sprinkler System',
            description: 'Traditional wet pipe sprinkler system with water-filled pipes.',
            imageUrl: 'https://www.dropbox.com/scl/fi/n424fd175ljryxjcib7q1/Sprinkler-System.jpg?rlkey=rzntjptuqutwdpynyejq0srst&raw=1',
            price: 'Contact for Quote',
            features: ['Wet Pipe', 'Water Filled', 'Fast Response', 'Reliable']
        },
        {
            id: 'sprinkler-003',
            name: 'Dry Pipe Sprinkler System',
            description: 'Dry pipe sprinkler system for areas prone to freezing.',
            imageUrl: 'https://www.dropbox.com/scl/fi/n424fd175ljryxjcib7q1/Sprinkler-System.jpg?rlkey=rzntjptuqutwdpynyejq0srst&raw=1',
            price: 'Contact for Quote',
            features: ['Dry Pipe', 'Freeze Protection', 'Air Filled', 'Cold Climate']
        },
        {
            id: 'sprinkler-004',
            name: 'Pre-Action Sprinkler System',
            description: 'Advanced sprinkler system with pre-action valve control.',
            imageUrl: 'https://www.dropbox.com/scl/fi/n424fd175ljryxjcib7q1/Sprinkler-System.jpg?rlkey=rzntjptuqutwdpynyejq0srst&raw=1',
            price: 'Contact for Quote',
            features: ['Pre-Action', 'Dual Detection', 'Water Damage Prevention', 'Advanced Control']
        },
        {
            id: 'sprinkler-005',
            name: 'Deluge Sprinkler System',
            description: 'Open sprinkler system for high-hazard areas.',
            imageUrl: 'https://www.dropbox.com/scl/fi/n424fd175ljryxjcib7q1/Sprinkler-System.jpg?rlkey=rzntjptuqutwdpynyejq0srst&raw=1',
            price: 'Contact for Quote',
            features: ['Open Sprinklers', 'High Hazard', 'Fast Discharge', 'Maximum Coverage']
        }
    ],
    'fire-hydrant-001': [
        {
            id: 'fire-hydrant-002',
            name: 'Wet Barrel Fire Hydrant',
            description: 'Traditional wet barrel hydrant with water-filled barrel.',
            imageUrl: 'https://www.dropbox.com/scl/fi/nu2w1f1hzngb6947tf7ev/Fire-Hydrant.png?rlkey=83itdqfpz100d9r8zerjbhyxj&raw=1',
            price: 'Contact for Quote',
            features: ['Wet Barrel', 'Water Filled', 'Traditional Design', 'Reliable']
        },
        {
            id: 'fire-hydrant-003',
            name: 'Dry Barrel Fire Hydrant',
            description: 'Dry barrel hydrant for areas prone to freezing.',
            imageUrl: 'https://www.dropbox.com/scl/fi/nu2w1f1hzngb6947tf7ev/Fire-Hydrant.png?rlkey=83itdqfpz100d9r8zerjbhyxj&raw=1',
            price: 'Contact for Quote',
            features: ['Dry Barrel', 'Freeze Protection', 'Cold Climate', 'Drain Valve']
        },
        {
            id: 'fire-hydrant-004',
            name: 'Wall Hydrant',
            description: 'Wall-mounted fire hydrant for building interiors.',
            imageUrl: 'https://www.dropbox.com/scl/fi/nu2w1f1hzngb6947tf7ev/Fire-Hydrant.png?rlkey=83itdqfpz100d9r8zerjbhyxj&raw=1',
            price: 'Contact for Quote',
            features: ['Wall Mounted', 'Interior Use', 'Space Saving', 'Easy Access']
        }
    ],
    'fm200-001': [
        {
            id: 'fm200-002',
            name: 'FM-200 System with Cylinders',
            description: 'Complete FM-200 system with storage cylinders.',
            imageUrl: 'https://www.dropbox.com/scl/fi/5u5fa82roamrzl4ennsns/FM-200-System.jpeg?rlkey=rl7gl1nfa9qlvqlr7o6xbnbqq&raw=1',
            price: 'Contact for Quote',
            features: ['Storage Cylinders', 'Complete System', 'Professional Installation', 'Certified']
        },
        {
            id: 'fm200-003',
            name: 'FM-200 Control Panel',
            description: 'Control panel for FM-200 fire suppression system.',
            imageUrl: 'https://www.dropbox.com/scl/fi/5u5fa82roamrzl4ennsns/FM-200-System.jpeg?rlkey=rl7gl1nfa9qlvqlr7o6xbnbqq&raw=1',
            price: 'Contact for Quote',
            features: ['Control Panel', 'System Monitoring', 'Manual Override', 'Status Indicators']
        },
        {
            id: 'fm200-004',
            name: 'FM-200 Detection System',
            description: 'Detection system for FM-200 fire suppression.',
            imageUrl: 'https://www.dropbox.com/scl/fi/5u5fa82roamrzl4ennsns/FM-200-System.jpeg?rlkey=rl7gl1nfa9qlvqlr7o6xbnbqq&raw=1',
            price: 'Contact for Quote',
            features: ['Detection System', 'Early Warning', 'Automatic Activation', 'Reliable']
        }
    ],
    'co2-001': [
        {
            id: 'co2-002',
            name: 'CO2 Storage Cylinders',
            description: 'High-pressure CO2 storage cylinders for fire suppression.',
            imageUrl: 'https://www.dropbox.com/scl/fi/a6yb0wcwrtrhqlwjyr0qh/CO2-System.jpeg?rlkey=eh9k7eaz0t1yjlxppy66wmprm&raw=1',
            price: 'Contact for Quote',
            features: ['High Pressure', 'CO2 Storage', 'Durable', 'Certified']
        },
        {
            id: 'co2-003',
            name: 'CO2 Control Panel',
            description: 'Control panel for CO2 fire suppression system.',
            imageUrl: 'https://www.dropbox.com/scl/fi/a6yb0wcwrtrhqlwjyr0qh/CO2-System.jpeg?rlkey=eh9k7eaz0t1yjlxppy66wmprm&raw=1',
            price: 'Contact for Quote',
            features: ['Control Panel', 'System Control', 'Safety Features', 'Monitoring']
        },
        {
            id: 'co2-004',
            name: 'CO2 Discharge Nozzles',
            description: 'Discharge nozzles for CO2 fire suppression system.',
            imageUrl: 'https://www.dropbox.com/scl/fi/a6yb0wcwrtrhqlwjyr0qh/CO2-System.jpeg?rlkey=eh9k7eaz0t1yjlxppy66wmprm&raw=1',
            price: 'Contact for Quote',
            features: ['Discharge Nozzles', 'Precise Distribution', 'High Flow', 'Durable']
        }
    ]
};



const projectsData = [
    {
        title: 'Doha Commercial Tower - Fire Safety Overhaul',
        description: 'Supplied and installed a comprehensive, addressable fire alarm and sprinkler system for a 45-story commercial high-rise.',
        imageUrl: 'https://www.dropbox.com/scl/fi/d4f4g4h4j4k4l4z4x4c4v/project-tower.jpg?rlkey=p1o1i1u1y1t1r1e1w1q1a&raw=1'
    },
    {
        title: 'Al Wakrah Logistics Park - Industrial Supply',
        description: 'Acted as the primary supplier for structural steel, MEP components, and safety equipment for a 500,000 sq. ft. logistics facility.',
        imageUrl: 'https://www.dropbox.com/scl/fi/v5b5n5m5q5w5e5r5t5y5u/project-logistics.jpg?rlkey=z1x1c1v1b1n1m1q1w1e1r&raw=1'
    },
    {
        title: 'Lusail Marina Residential Complex - MEP Contracting',
        description: 'Executed the complete mechanical, electrical, and plumbing works for a luxury residential development, ensuring compliance with all local codes.',
        imageUrl: 'https://www.dropbox.com/scl/fi/c6x6z6l6k6j6h6g6f6d6s/project-residential.jpg?rlkey=f1g1h1j1k1l1z1x1c1v1b&raw=1'
    }
];

// FIX: items is now optional!

const ProjectCard: React.FC<{ title: string, description: string, imageUrl: string }> = ({ title, description, imageUrl }) => (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300">
        <img src={imageUrl} alt={title} className="w-full h-48 md:h-56 object-cover" />
        <div className="p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
            <p className="text-gray-600">{description}</p>
        </div>
    </div>
);

const ServiceCategory: React.FC<{ icon: React.ReactNode, title: string, items: string[] }> = ({ icon, title, items }) => (
    <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="flex items-center mb-4">
            <div className="bg-firetech-red text-white p-3 rounded-full mr-4 flex-shrink-0">
                {icon}
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-gray-800">{title}</h3>
        </div>
        <ul className="space-y-2">
            {items.map((item, index) => (
                <li key={index} className="flex items-start">
                    <CheckCircleIcon className="w-5 h-5 text-firetech-red mr-2 mt-1 flex-shrink-0" />
                    <span className="text-gray-600">{item}</span>
                </li>
            ))}
        </ul>
    </div>
);

// Professional Product Card Component
const ProfessionalProductCard: React.FC<{ product: any; index: number; isVisible: boolean; onProductClick: (product: any) => void; onQuoteClick: (product: any) => void }> = ({ product, index, isVisible, onProductClick, onQuoteClick }) => (
    <div className={`bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-700 ease-out transform hover:-translate-y-3 group overflow-hidden border border-gray-100 cursor-pointer ${
        isVisible 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-16'
    }`} style={{
        transitionDelay: `${index * 120}ms`
    }} onClick={() => onProductClick(product)}>
        {/* Product Image */}
        <div className="relative overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100">
            <img 
                src={product.imageUrl} 
                alt={product.name}
                className="w-full h-64 object-cover group-hover:scale-110 transition-all duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            {/* Category Badge */}
            <div className="absolute top-4 right-4">
                <span className="bg-firetech-red/95 text-white px-3 py-2 rounded-full text-xs font-bold shadow-lg backdrop-blur-sm">
                    {product.category}
                </span>
            </div>

            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-firetech-red/80 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end">
                <div className="p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <p className="text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
                        Click to view details & related products
                    </p>
                </div>
            </div>
        </div>

        {/* Product Info */}
        <div className="p-6">
            <h3 className="text-xl font-bold text-gray-900 group-hover:text-firetech-red transition-colors duration-500 mb-3 leading-tight">
                {product.name}
            </h3>
            <p className="text-gray-600 text-sm mb-4 line-clamp-2">{product.description}</p>

            {/* Price and Action */}
            <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                <div className="flex flex-col">
                    <span className="text-lg font-bold text-firetech-red">{product.price}</span>
                </div>
                <button 
                    onClick={(e) => {
                        e.stopPropagation();
                        onQuoteClick(product);
                    }}
                    className="bg-gradient-to-r from-firetech-red to-red-600 text-white px-6 py-2 rounded-xl hover:from-red-600 hover:to-red-700 transition-all duration-300 font-bold text-sm shadow-lg hover:shadow-xl transform hover:-translate-y-1 hover:scale-105"
                >
                    Get Quote
                </button>
            </div>
        </div>
    </div>
);

// Product Details Modal Component
const ProductDetailsModal: React.FC<{ 
    isOpen: boolean; 
    onClose: () => void; 
    product: any | null;
    relatedProducts: any[];
    onRelatedProductClick: (product: any) => void;
}> = ({ isOpen, onClose, product, relatedProducts, onRelatedProductClick }) => {
    if (!isOpen || !product) return null;

    return (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-3xl shadow-2xl max-w-6xl w-full max-h-[90vh] overflow-y-auto">
                {/* Header */}
                <div className="bg-gradient-to-r from-firetech-red to-red-600 text-white p-8 rounded-t-3xl">
                    <div className="flex justify-between items-center">
                        <div>
                            <h3 className="text-3xl font-bold mb-2">{product.name}</h3>
                            <p className="text-red-100">Product Details & Related Products</p>
                        </div>
                        <button 
                            onClick={onClose}
                            className="text-white/80 hover:text-white text-3xl font-bold transition-colors duration-300 hover:scale-110"
                        >
                            ×
                        </button>
                    </div>
                </div>
                
                <div className="p-8">
                    {/* Main Product Details */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
                        <div>
                            <div className="w-full h-80 bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl overflow-hidden mb-6">
                                <img 
                                    src={product.imageUrl} 
                                    alt={product.name}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                        <div>
                            <h4 className="text-2xl font-bold text-gray-900 mb-4">{product.name}</h4>
                            <p className="text-gray-600 text-lg mb-6 leading-relaxed">{product.description}</p>
                            
                            <div className="mb-6">
                                <h5 className="text-lg font-bold text-gray-900 mb-3">Key Features:</h5>
                                <div className="grid grid-cols-2 gap-2">
                                    {product.features.map((feature: string, index: number) => (
                                        <div key={index} className="flex items-center bg-gradient-to-r from-gray-50 to-gray-100 p-3 rounded-lg">
                                            <svg className="w-4 h-4 text-firetech-red mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                            <span className="text-sm font-medium text-gray-700">{feature}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="flex items-center justify-between p-4 bg-gradient-to-r from-firetech-red/10 to-red-50 rounded-2xl">
                                <div>
                                    <span className="text-2xl font-bold text-firetech-red">{product.price}</span>
                                    <p className="text-sm text-gray-600">Professional pricing</p>
                                </div>
                                <button 
                                    onClick={() => onRelatedProductClick(product)}
                                    className="bg-gradient-to-r from-firetech-red to-red-600 text-white px-8 py-3 rounded-xl hover:from-red-600 hover:to-red-700 transition-all duration-300 font-bold shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                                >
                                    Get Quote
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Related Products */}
                    {relatedProducts.length > 0 && (
                        <div>
                            <h4 className="text-2xl font-bold text-gray-900 mb-6">Related Products</h4>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {relatedProducts.map((relatedProduct, index) => (
                                    <div 
                                        key={relatedProduct.id}
                                        className="bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-200 cursor-pointer"
                                        onClick={() => onRelatedProductClick(relatedProduct)}
                                    >
                                        <div className="p-6">
                                            <div className="w-full h-48 bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl mb-4 overflow-hidden">
                                                <img 
                                                    src={relatedProduct.imageUrl} 
                                                    alt={relatedProduct.name}
                                                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                                                />
                                            </div>
                                            <h5 className="text-lg font-bold text-gray-900 mb-2">{relatedProduct.name}</h5>
                                            <p className="text-gray-600 text-sm mb-4 line-clamp-2">{relatedProduct.description}</p>
                                            <div className="flex items-center justify-between">
                                                <span className="text-firetech-red font-bold">{relatedProduct.price}</span>
                                                <svg className="w-5 h-5 text-firetech-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

// Quote Modal Component
const QuoteModal: React.FC<{ 
    isOpen: boolean; 
    onClose: () => void; 
    product: any | null 
}> = ({ isOpen, onClose, product }) => {
    if (!isOpen || !product) return null;

    return (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-3xl shadow-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto">
                {/* Header */}
                <div className="bg-gradient-to-r from-firetech-red to-red-600 text-white p-8 rounded-t-3xl">
                    <div className="flex justify-between items-center">
                        <div>
                            <h3 className="text-3xl font-bold mb-2">Get Professional Quote</h3>
                            <p className="text-red-100">Contact our experts for detailed pricing</p>
                        </div>
                        <button 
                            onClick={onClose}
                            className="text-white/80 hover:text-white text-3xl font-bold transition-colors duration-300 hover:scale-110"
                        >
                            ×
                        </button>
                    </div>
                </div>
                
                <div className="p-8">
                    {/* Product Info */}
                    <div className="mb-8 p-6 bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl border border-gray-200">
                        <h4 className="text-xl font-bold text-gray-900 mb-3">{product.name}</h4>
                        <p className="text-gray-600 leading-relaxed">{product.description}</p>
                        <div className="mt-4 flex items-center">
                            <span className="bg-firetech-red text-white px-3 py-1 rounded-full text-sm font-bold">
                                {product.category}
                            </span>
                        </div>
                    </div>

                    {/* Contact Information */}
                    <div className="mb-8">
                        <h5 className="text-xl font-bold text-gray-900 mb-6 text-center">Contact Our Sales Team</h5>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 p-6 rounded-2xl border border-emerald-200 hover:shadow-lg transition-all duration-300">
                                <div className="flex items-center mb-3">
                                    <div className="bg-emerald-500 p-3 rounded-full mr-4">
                                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h6 className="font-bold text-gray-900">Phone Support</h6>
                                        <p className="text-sm text-gray-600">Call for immediate assistance</p>
                                    </div>
                                </div>
                                <p className="text-2xl font-bold text-emerald-600">+974 1234 5678</p>
                            </div>
                            
                            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-2xl border border-blue-200 hover:shadow-lg transition-all duration-300">
                                <div className="flex items-center mb-3">
                                    <div className="bg-blue-500 p-3 rounded-full mr-4">
                                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h6 className="font-bold text-gray-900">Email Support</h6>
                                        <p className="text-sm text-gray-600">Send detailed requirements</p>
                                    </div>
                                </div>
                                <p className="text-lg font-bold text-blue-600 break-all">info@firetech.qa</p>
                            </div>
                        </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <button 
                            onClick={() => window.open('tel:+97412345678')}
                            className="bg-gradient-to-r from-emerald-500 to-emerald-600 text-white py-4 px-6 rounded-2xl hover:from-emerald-600 hover:to-emerald-700 transition-all duration-300 font-bold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center"
                        >
                            <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                            </svg>
                            Call Now
                        </button>
                        <button 
                            onClick={() => window.open('mailto:info@firetech.qa?subject=Quote Request for ' + product.name)}
                            className="bg-gradient-to-r from-blue-500 to-blue-600 text-white py-4 px-6 rounded-2xl hover:from-blue-600 hover:to-blue-700 transition-all duration-300 font-bold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center"
                        >
                            <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                            Send Email
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

// Contact Modal Component
const ContactModal: React.FC<{ 
    isOpen: boolean; 
    onClose: () => void; 
}> = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-3xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
                {/* Header */}
                <div className="bg-gradient-to-r from-firetech-red to-red-600 text-white p-8 rounded-t-3xl">
                    <div className="flex justify-between items-center">
                        <div>
                            <h3 className="text-3xl font-bold mb-2">Need Something Specific?</h3>
                            <p className="text-red-100">Contact our professional team for personalized assistance</p>
                        </div>
                        <button 
                            onClick={onClose}
                            className="text-white/80 hover:text-white text-3xl font-bold transition-colors duration-300 hover:scale-110"
                        >
                            ×
                        </button>
                    </div>
                </div>
                
                <div className="p-8">
                    {/* Contact Information */}
                    <div className="mb-8">
                        <h5 className="text-2xl font-bold text-gray-900 mb-6 text-center">Contact Our Sales Team</h5>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 p-8 rounded-2xl border border-emerald-200 hover:shadow-lg transition-all duration-300">
                                <div className="flex items-center mb-4">
                                    <div className="bg-emerald-500 p-4 rounded-full mr-4">
                                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h6 className="text-xl font-bold text-gray-900">Phone Support</h6>
                                        <p className="text-gray-600">Call for immediate assistance</p>
                                    </div>
                                </div>
                                <p className="text-3xl font-bold text-emerald-600 mb-4">+974 1234 5678</p>
                                <button 
                                    onClick={() => window.open('tel:+97412345678')}
                                    className="bg-gradient-to-r from-emerald-500 to-emerald-600 text-white py-3 px-6 rounded-xl hover:from-emerald-600 hover:to-emerald-700 transition-all duration-300 font-bold shadow-lg hover:shadow-xl transform hover:-translate-y-1 w-full"
                                >
                                    Call Now
                                </button>
                            </div>
                            
                            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl border border-blue-200 hover:shadow-lg transition-all duration-300">
                                <div className="flex items-center mb-4">
                                    <div className="bg-blue-500 p-4 rounded-full mr-4">
                                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h6 className="text-xl font-bold text-gray-900">Email Support</h6>
                                        <p className="text-gray-600">Send detailed requirements</p>
                                    </div>
                                </div>
                                <p className="text-xl font-bold text-blue-600 mb-4 break-all">info@firetech.qa</p>
                                <button 
                                    onClick={() => window.open('mailto:info@firetech.qa?subject=Custom Product Quote Request')}
                                    className="bg-gradient-to-r from-blue-500 to-blue-600 text-white py-3 px-6 rounded-xl hover:from-blue-600 hover:to-blue-700 transition-all duration-300 font-bold shadow-lg hover:shadow-xl transform hover:-translate-y-1 w-full"
                                >
                                    Send Email
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* What We Can Help With */}
                    <div className="mb-8 p-6 bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl border border-amber-200">
                        <h5 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                            <svg className="w-6 h-6 mr-3 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            What We Can Help You With:
                        </h5>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <div className="flex items-center"><span className="w-2 h-2 bg-amber-500 rounded-full mr-3"></span>Custom product sourcing</div>
                                <div className="flex items-center"><span className="w-2 h-2 bg-amber-500 rounded-full mr-3"></span>Bulk quantity pricing</div>
                                <div className="flex items-center"><span className="w-2 h-2 bg-amber-500 rounded-full mr-3"></span>Technical specifications</div>
                            </div>
                            <div className="space-y-2">
                                <div className="flex items-center"><span className="w-2 h-2 bg-amber-500 rounded-full mr-3"></span>Installation guidance</div>
                                <div className="flex items-center"><span className="w-2 h-2 bg-amber-500 rounded-full mr-3"></span>Delivery requirements</div>
                                <div className="flex items-center"><span className="w-2 h-2 bg-amber-500 rounded-full mr-3"></span>Project consultation</div>
                            </div>
                        </div>
                    </div>

                    {/* Additional Contact Options */}
                    <div className="text-center">
                        <p className="text-gray-600 mb-4">Or visit our office for in-person consultation</p>
                        <div className="bg-gradient-to-r from-gray-50 to-gray-100 p-6 rounded-2xl">
                            <h6 className="font-bold text-gray-900 mb-2">Firetech Qatar Office</h6>
                            <p className="text-gray-600">Doha, Qatar</p>
                            <p className="text-sm text-gray-500">Open Monday - Friday, 8:00 AM - 6:00 PM</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const ServicesPage: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [showQuoteModal, setShowQuoteModal] = useState(false);
    const [showProductDetailsModal, setShowProductDetailsModal] = useState(false);
    const [showContactModal, setShowContactModal] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState<any>(null);
    const productsRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.1 }
        );

        if (productsRef.current) {
            observer.observe(productsRef.current);
        }

        return () => observer.disconnect();
    }, []);

    const handleProductClick = (product: any) => {
        setSelectedProduct(product);
        setShowProductDetailsModal(true);
    };

    const handleQuoteClick = (product: any) => {
        setSelectedProduct(product);
        setShowQuoteModal(true);
        setShowProductDetailsModal(false);
    };

    const closeQuoteModal = () => {
        setShowQuoteModal(false);
        setSelectedProduct(null);
    };

    const closeProductDetailsModal = () => {
        setShowProductDetailsModal(false);
        setSelectedProduct(null);
    };

    const closeContactModal = () => {
        setShowContactModal(false);
    };

    const getRelatedProducts = (productId: string) => {
        return relatedProducts[productId as keyof typeof relatedProducts] || [];
    };

    return (
        <div className="pt-24 sm:pt-28 bg-gray-50">
            {/* Page Header */}
            <section className="bg-firetech-red text-white py-16 sm:py-20">
                <div className="container mx-auto px-4 sm:px-6 text-center">
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4">Our Products & Services</h1>
                    <p className="text-base md:text-lg lg:text-xl max-w-3xl mx-auto">
                        Delivering integrated, world-class solutions across fire safety, construction, and industrial supply to safeguard your assets and ensure project success.
                    </p>
                </div>
            </section>
            
            {/* Core Services Section */}
            <section className="py-16 sm:py-20">
                <div className="container mx-auto px-4 sm:px-6">
                    <div className="text-center mb-12">
                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800">Our Core Service Areas</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <ServiceCategory 
                            icon={<FireIcon className="w-8 h-8"/>}
                            title="Fire & Safety Solutions"
                            items={[
                                'Advanced Firefighting & Fire Alarm Systems', 
                                'Personal Protective Equipment (PPE)',
                                'Safety & Emergency Lighting'
                            ]}
                        />
                        <ServiceCategory 
                            icon={<BuildingOfficeIcon className="w-8 h-8"/>}
                            title="Construction & Industrial"
                            items={[
                                'Building Materials, Tools & Equipment', 
                                'Piping Products & Accessories', 
                                'Fasteners & Industrial Hardware'
                            ]}
                        />
                        <ServiceCategory 
                            icon={<WrenchScrewdriverIcon className="w-8 h-8"/>}
                            title="Contracting Services"
                            items={[
                                'General Contracting & Construction', 
                                'MEP (Mechanical, Electrical & Plumbing)', 
                                'Civil, Structural & Maintenance Works'
                            ]}
                        />
                    </div>
                </div>
            </section>

            {/* Product Showcase */}
            

            {/* Professional Products Section */}
            <section id="professional-products" ref={productsRef} className="py-20 sm:py-24 bg-gradient-to-b from-gray-50 to-white">
                <div className="container mx-auto px-4 sm:px-6">
                    {/* Section Header */}
                    <div className="text-center mb-16">
                        <div className="inline-block bg-firetech-red/10 rounded-2xl px-6 py-3 mb-6">
                            <span className="text-firetech-red font-bold text-sm uppercase tracking-wider">
                                Professional Product Range
                            </span>
                        </div>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 mb-6">
                            Browse Our
                            <span className="block bg-gradient-to-r from-firetech-red to-red-600 bg-clip-text text-transparent">
                                Professional Products
                            </span>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                            Explore our comprehensive range of professional-grade products across multiple categories
                        </p>
                    </div>

                    {/* Products Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-16">
                        {products.map((product, index) => (
                            <ProfessionalProductCard 
                                key={product.id} 
                                product={product} 
                                index={index}
                                isVisible={isVisible}
                                onProductClick={handleProductClick}
                                onQuoteClick={handleQuoteClick}
                            />
                        ))}
                    </div>

                    {/* Call to Action */}
                    <div className={`text-center transition-all duration-800 ease-out delay-500 ${
                        isVisible 
                            ? 'opacity-100 translate-y-0' 
                            : 'opacity-0 translate-y-12'
                    }`}>
                        <div className="bg-gradient-to-br from-white to-gray-50 rounded-3xl shadow-2xl p-12 max-w-5xl mx-auto border border-gray-200">
                            <div className="max-w-4xl mx-auto">
                                <div className="w-16 h-16 bg-gradient-to-r from-firetech-red to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                    </svg>
                                </div>
                                <h3 className="text-3xl md:text-4xl font-black text-gray-900 mb-6">
                                    Need Something Specific?
                                </h3>
                                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                                    Can't find what you're looking for? Our professional team can help you source any fire safety, 
                                    construction, or industrial product you need. Contact us for personalized assistance and expert consultation.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                                    <button 
                                        onClick={() => setShowContactModal(true)}
                                        className="bg-gradient-to-r from-firetech-red to-red-600 text-white px-10 py-4 rounded-2xl hover:from-red-600 hover:to-red-700 transition-all duration-300 font-bold text-lg shadow-xl hover:shadow-2xl transform hover:-translate-y-1 hover:scale-105"
                                    >
                                        Contact Our Team
                                    </button>
                                    <button 
                                        onClick={() => setShowContactModal(true)}
                                        className="border-2 border-firetech-red text-firetech-red px-10 py-4 rounded-2xl hover:bg-firetech-red hover:text-white transition-all duration-300 font-bold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 hover:scale-105"
                                    >
                                        Request Custom Quote
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Project Showcase */}
            <section className="py-16 sm:py-20 bg-white">
                <div className="container mx-auto px-4 sm:px-6">
                    <div className="text-center mb-12">
                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800">Featured Projects</h2>
                        <p className="text-lg text-gray-600 mt-2">Demonstrating our capability and commitment to excellence across various sectors.</p>
                    </div>
                </div>
            </section>

            {/* Product Details Modal */}
            <ProductDetailsModal 
                isOpen={showProductDetailsModal}
                onClose={closeProductDetailsModal}
                product={selectedProduct}
                relatedProducts={selectedProduct ? getRelatedProducts(selectedProduct.id) : []}
                onRelatedProductClick={handleQuoteClick}
            />

            {/* Quote Modal */}
            <QuoteModal 
                isOpen={showQuoteModal}
                onClose={closeQuoteModal}
                product={selectedProduct}
            />

            {/* Contact Modal */}
            <ContactModal 
                isOpen={showContactModal}
                onClose={closeContactModal}
            />
        </div>
    );
};

export default ServicesPage;
