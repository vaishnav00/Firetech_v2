import React, { useState, useEffect, useRef } from 'react';
import { FireIcon, BuildingOfficeIcon, WrenchScrewdriverIcon, CheckCircleIcon } from '../components/Icons';
import Brands from '../components/Brands';

// Product data for the professional products section
const products = [
    // Fire Alarm & Detection
    {
        id: 'sprinkler-001',
        name: 'Sprinkler',
        category: 'Firefighting Equipment',
        description: 'Automatic fire sprinkler head for wet pipe and dry pipe systems.',
        imageUrl: '/Images/fire-sprinkler.png',
        price: 'Contact for Quote',
        features: ['Automatic Activation', 'Pendent/Upright/Sidewall', 'UL/FM Approved', 'Viking/Tyco/HD Brands'],
        inStock: true
    },
    {
        id: 'fire-hydrant-001',
        name: 'Fire Hydrant',
        category: 'Firefighting Equipment',
        description: 'Heavy-duty fire hydrant for municipal and industrial applications.',
        imageUrl: '/Images/Fire Hydrant.png',
        price: 'Contact for Quote',
        features: ['Heavy Duty Construction', 'High Flow Capacity', 'UL/FM Approved', 'Weflo/APC/Gala Brands'],
        inStock: true
    },
    {
        id: 'fire-extinguisher-001',
        name: 'Fire Extinguisher',
        category: 'Firefighting Equipment',
        description: 'Multi-purpose fire extinguisher (Dry Powder, CO2, Foam, Wet, Water).',
        imageUrl: '/Images/Fire Extinguisher.jpeg',
        price: 'Contact for Quote',
        features: ['ABC Class Rating', 'CO2 for Electrical', 'Wet Chemical for Kitchens', 'Tianping/Kaixuan Brands'],
        inStock: true
    },
    {
        id: 'sounder-strobe-001',
        name: 'Fire Alarm Sounder/Strobe',
        category: 'Fire Alarm & Detection',
        description: 'Audible and visual alarm device to alert occupants of a fire.',
        imageUrl: '/Images/Fire Alarm Sounder.png',
        price: 'Contact for Quote',
        features: ['High Decibel Sounder', 'Bright LED Strobe', 'UL Listed', 'Numens/Hochiki/GST Brands'],
        inStock: true
    },
    {
        id: 'smoke-detector-001',
        name: 'Smoke Detector',
        category: 'Fire Alarm & Detection',
        description: 'High-sensitivity photoelectric smoke detector with wireless connectivity and long battery life.',
        imageUrl: '/Images/Smoke_detector.jpeg',
        price: 'Contact for Quote',
        features: ['Wireless Connectivity', '10-Year Battery Life', 'Smart Home Integration', 'UL Listed'],
        inStock: true
    },
    {
        id: 'heat-detector-001',
        name: 'Heat Detector',
        category: 'Fire Alarm & Detection',
        description: 'Reliable heat detector for areas where smoke detectors may not be suitable.',
        imageUrl: '/Images/Heat Detector.jpeg',
        price: 'Contact for Quote',
        features: ['Fixed Temperature', 'Weather Resistant', 'Easy Installation', 'UL Listed'],
        inStock: true
    },
    {
        id: 'control-panel-001',
        name: 'Fire Alarm Control Panel',
        category: 'Fire Alarm & Detection',
        description: 'Central control panel for managing addressable & conventional fire alarm systems.',
        imageUrl: '/Images/fire-alarm-control-panel.jpg',
        price: 'Contact for Quote',
        features: ['Addressable & Conventional', 'LCD Display', 'Battery Backup', 'Network Connectivity'],
        inStock: true
    },
    {
        id: 'manual-call-001',
        name: 'Manual Call Point',
        category: 'Fire Alarm & Detection',
        description: 'Manual fire alarm activation point with glass break mechanism and LED indicators.',
        imageUrl: '/Images/Manual Call Point.jpg',
        price: 'Contact for Quote',
        features: ['Glass Break Activation', 'LED Status Indicators', 'Weatherproof Design', 'Easy Reset'],
        inStock: true
    },
    {
        id: 'water-flow-switch-001',
        name: 'Water Flow Switch',
        category: 'Fire Alarm & Detection',
        description: 'Monitors water flow in sprinkler systems to detect activation.',
        imageUrl: '/Images/Water Flow Switch.jpg',
        price: 'Contact for Quote',
        features: ['Potter/Weflo Brands', 'UL Listed', 'Paddle Type', 'System Monitoring'],
        inStock: true
    },
    {
        id: 'tamper-switch-001',
        name: 'Tamper Switch',
        category: 'Fire Alarm & Detection',
        description: 'Supervisory switch to monitor the open state of control valves.',
        imageUrl: '/Images/Tamper Switch.jpg',
        price: 'Contact for Quote',
        features: ['Potter/Weflo Brands', 'UL Listed', 'Valve Monitoring', 'Supervisory Signal'],
        inStock: true
    },
    {
        id: 'emergency-light-001',
        name: 'Emergency Light',
        category: 'Fire Alarm & Detection',
        description: 'Provides backup illumination during a power failure or emergency.',
        imageUrl: '/Images/Emergency Light.jpg',
        price: 'Contact for Quote',
        features: ['Non-Maintained/Maintained', 'Battery Backup', 'LED', 'Lixine/Garrini Brands'],
        inStock: true
    },
    {
        id: 'exit-light-001',
        name: 'Exit Light & Exit Sign',
        category: 'Fire Alarm & Detection',
        description: 'Illuminated sign to guide occupants to the nearest exit.',
        imageUrl: '/Images/Exit Light & Exit Sign.jpeg',
        price: 'Contact for Quote',
        features: ['Maintained', 'Battery Backup', 'Clear Signage', 'Lixine/Garrini Brands'],
        inStock: true
    },
    // Firefighting Equipment
    {
        id: 'fire-blanket-001',
        name: 'Fire Blanket',
        category: 'Firefighting Equipment',
        description: 'Safety blanket designed to extinguish small incipient (starting) fires.',
        imageUrl: '/Images/Fire Blanket.jpg',
        price: 'Contact for Quote',
        features: ['Fiberglass Material', 'Quick Release', 'Wall Mounted', 'Changshu Jiangnan Brand'],
        inStock: true
    },
    {
        id: 'fire-hose-001',
        name: 'Fire Hose Reel System',
        category: 'Firefighting Equipment',
        description: 'Complete fire hose reel system with high-pressure water delivery.',
        imageUrl: '/Images/Fire Hose Reel.png',
        price: 'Contact for Quote',
        features: ['High Pressure Rating', 'Corrosion Resistant', 'Easy Deployment', 'Ningbo Kaixuan/CSJ Brands'],
        inStock: true
    },
    {
        id: 'breeching-inlet-001',
        name: 'Breeching Inlet & Cabinet',
        category: 'Firefighting Equipment',
        description: 'Inlet for firefighting services to pump water into the building\'s system.',
        imageUrl: '/Images/Breeching Inlet.png',
        price: 'Contact for Quote',
        features: ['2-Way or 4-Way', 'Includes Cabinet', 'UL Listed', 'Ningbo Kaixuan/Swati Fire Brands'],
        inStock: true
    },
    {
        id: 'landing-valve-001',
        name: 'Landing Valve',
        category: 'Firefighting Equipment',
        description: '2.5" landing valve for fire hydrant and hose systems.',
        imageUrl: '/Images/Landing Valve.jpg',
        price: 'Contact for Quote',
        features: ['2.5" Size', 'Threaded & Flanged', 'UL Listed', 'Swati Fire/Kaixuan Brands'],
        inStock: true
    },
    {
        id: 'fire-hose-cabinet-001',
        name: 'Fire Hose Cabinet',
        category: 'Firefighting Equipment',
        description: 'Cabinet for storing fire hose reels and landing valves.',
        imageUrl: '/Images/Fire Hose Cabinet.jpg',
        price: 'Contact for Quote',
        features: ['Wall Mounted', 'Recessed/Surface', 'Steel Construction', 'Ningbo Kaixuan/CSJ Brands'],
        inStock: true
    },
    {
        id: 'synthetic-hose-001',
        name: 'Synthetic Fire Hose',
        category: 'Firefighting Equipment',
        description: 'Durable synthetic fire hose for firefighting applications.',
        imageUrl: '/Images/Synthetic fire hose.jpg',
        price: 'Contact for Quote',
        features: ['Type 2', 'Type 3', 'High Burst Pressure', 'Torrent Walcoat/Newage Brands'],
        inStock: true
    },
    {
        id: 'fire-pumps-001',
        name: 'Fire Pumps',
        category: 'Firefighting Equipment',
        description: 'Complete fire pump sets (Electric, Diesel, Jockey) for fire protection systems.',
        imageUrl: '/Images/Fire Pumps.jpg',
        price: 'Contact for Quote',
        features: ['UL Listed', 'QCDD Approved', 'Electric/Diesel/Jockey', 'Complete Skid'],
        inStock: true
    },

    // Fire Suppression Systems
    {
        id: 'fm200-001',
        name: 'FM-200 / Novec System',
        category: 'Fire Suppression Systems',
        description: 'Clean agent fire suppression system for sensitive equipment and data centers.',
        imageUrl: '/Images/FM-200 System.jpeg',
        price: 'Contact for Quote',
        features: ['Clean Agent', 'No Residue', 'Fast Discharge', 'Kidde/Others'],
        inStock: true
    },
    {
        id: 'co2-001',
        name: 'CO2 Fire Suppression System',
        category: 'Fire Suppression Systems',
        description: 'Carbon dioxide suppression system for industrial and commercial applications.',
        imageUrl: '/Images/CO2 System.jpeg',
        price: 'Contact for Quote',
        features: ['High Efficiency', 'No Residue', 'Fast Response', 'Cost Effective'],
        inStock: true
    },
    {
        id: 'aerosol-system-001',
        name: 'Aerosol System',
        category: 'Fire Suppression Systems',
        description: 'Condensed aerosol fire suppression system, environmentally friendly.',
        imageUrl: '/Images/FM-200 System.jpeg',
        price: 'Contact for Quote',
        features: ['Clean Agent', 'No Residue', 'Environmentally Safe', 'FirePro/Greenex Brands'],
        inStock: true
    },

    // Personal Protective Equipment
    {
        id: 'safety-helmet-001',
        name: 'Safety Helmet',
        category: 'Personal Protective Equipment',
        description: 'High-impact resistant safety helmet with adjustable suspension system.',
        imageUrl: '/Images/Safety Helmet.jpg',
        price: 'Contact for Quote',
        features: ['High Impact Resistance', 'Adjustable Suspension', 'Ventilation Slots', 'ANSI Z89.1 Certified'],
        inStock: true
    },

    // Piping & Industrial Valves
    {
        id: 'gate-valve-001',
        name: 'Gate Valve',
        category: 'Piping & Industrial Valves',
        description: 'Heavy-duty gate valve for fire protection systems.',
        imageUrl: '/Images/Gate valves.png',
        price: 'Contact for Quote',
        features: ['Full Bore Design', 'UL/FM Approved', 'Weflo/Fireking/Lede Brands', 'High Pressure Rating'],
        inStock: true
    },
    {
        id: 'ball-valve-001',
        name: 'Ball Valve',
        category: 'Piping & Industrial Valves',
        description: 'Quarter-turn ball valve with high pressure rating for industrial applications.',
        imageUrl: '/Images/Ball Valve.jpg',
        price: 'Contact for Quote',
        features: ['Quarter Turn Operation', 'High Pressure Rating', 'Corrosion Resistant', 'Long Service Life'],
        inStock: true
    },
    {
        id: 'butterfly-valve-001',
        name: 'Butterfly Valve',
        category: 'Piping & Industrial Valves',
        description: 'Butterfly valve for fire protection and industrial systems.',
        imageUrl: '/Images/Butterfly Valve.jpeg',
        price: 'Contact for Quote',
        features: ['Gear Operated/Lever', 'UL/FM Approved', 'Weflo/Fireking/Lede Brands', 'Wafer/Lug Type'],
        inStock: true
    },
    {
        id: 'check-valve-001',
        name: 'Check Valve',
        category: 'Piping & Industrial Valves',
        description: 'Prevents backflow in fire protection and water systems.',
        imageUrl: '/Images/Check Valve.jpg',
        price: 'Contact for Quote',
        features: ['Swing Type/Wafer Type', 'UL/FM Approved', 'Weflo/Fireking/Lede Brands', 'Non-Return'],
        inStock: true
    },
    {
        id: 'alarm-check-valve-001',
        name: 'Alarm Check Valve',
        category: 'Piping & Industrial Valves',
        description: 'Valve for wet pipe sprinkler systems that signals water flow.',
        imageUrl: '/Images/Alarm Check Valve.jpg',
        price: 'Contact for Quote',
        features: ['Signals Water Flow', 'UL/FM Approved', 'Weflo/Viking/Tyco Brands', 'Includes Trim'],
        inStock: true
    },
    {
        id: 'prv-001',
        name: 'Pressure Reducing Valve',
        category: 'Piping & Industrial Valves',
        description: 'Reduces high inlet pressure to a lower, constant outlet pressure.',
        imageUrl: '/Images/Pressure Reducing Valve.png',
        price: 'Contact for Quote',
        features: ['Regulates Pressure', 'UL/FM Approved', 'Cla-Val/Weflo Brands', 'Adjustable'],
        inStock: true
    },
    {
        id: 'prv-002',
        name: 'Pressure Relief Valve',
        category: 'Piping & Industrial Valves',
        description: 'Safety valve to protect systems from overpressure.',
        imageUrl: '/Images/Pressure Relief Valve.jpg',
        price: 'Contact for Quote',
        features: ['Overpressure Protection', 'UL/FM Approved', 'Cla-Val/Weflo Brands', 'Safety Device'],
        inStock: true
    },
    {
        id: 'test-drain-valve-001',
        name: 'Test & Drain Valve',
        category: 'Piping & Industrial Valves',
        description: 'Valve used for testing and draining sprinkler systems.',
        imageUrl: '/Images/Test & Drain Valve.jpeg',
        price: 'Contact for Quote',
        features: ['Test and Drain Function', 'UL/FM Approved', 'Duyar/HD Brands', 'Sight Glass'],
        inStock: true
    },

    // Fire System Components
    {
        id: 'pressure-gauge-001',
        name: 'Pressure Gauge',
        category: 'Fire System Components',
        description: 'Measures water or air pressure within the fire protection system.',
        imageUrl: '/Images/pressure gauge.jpg',
        price: 'Contact for Quote',
        features: ['Measures Pressure', 'UL Listed', 'Winters/Viking Brands', 'Dial Type'],
        inStock: true
    },
    {
        id: 'fire-pipes-001',
        name: 'Fire Pipes',
        category: 'Fire System Components',
        description: 'ERW and seamless steel pipes for fire sprinkler systems.',
        imageUrl: '/Images/Steel Pipes.jpg',
        price: 'Contact for Quote',
        features: ['ERW/Seamless', 'UL/FM Approved', 'Al Jazeera/Surya/UTP Brands', 'Steel'],
        inStock: true
    },
    {
        id: 'grooved-fittings-001',
        name: 'Grooved Fittings',
        category: 'Fire System Components',
        description: 'Fittings (elbows, tees, couplings) for grooved pipe systems.',
        imageUrl: '/Images/Grooved Fittings.jpg',
        price: 'Contact for Quote',
        features: ['For Grooved Pipe', 'UL/FM Approved', 'Lede/National/CNG Brands', 'Ductile Iron'],
        inStock: true
    },
    {
        id: 'threaded-fittings-001',
        name: 'Threaded Fittings',
        category: 'Fire System Components',
        description: 'Fittings (elbows, tees, unions) for threaded pipe systems.',
        imageUrl: '/Images/Pipe Fittings.jpeg',
        price: 'Contact for Quote',
        features: ['For Threaded Pipe', 'UL/FM Approved', 'BIS/Siam Brands', 'Malleable Iron'],
        inStock: true
    },
    {
        id: 'pipe-supports-001',
        name: 'Fire Pipe Supports',
        category: 'Fire System Components',
        description: 'Hangers, brackets, and supports for fire system piping.',
        imageUrl: '/Images/Fire Pipes.jpg',
        price: 'Contact for Quote',
        features: ['Pipe Hangers', 'UL/FM Approved', 'Brackets', 'Steel Construction'],
        inStock: true
    },
    {
        id: 'flow-meter-001',
        name: 'Test Flow Meter',
        category: 'Fire System Components',
        description: 'Device to test and measure water flow in fire pump systems.',
        imageUrl: '/Images/Test Flow Meter.jpg',
        price: 'Contact for Quote',
        features: ['Pump Testing', 'UL/FM Approved', 'Gerand/Global Vision Brands', 'Measures GPM'],
        inStock: true
    },

    // Services & Maintenance
    {
        id: 'water-level-indicator-001',
        name: 'Water Level Indicator',
        category: 'Fire System Components',
        description: 'System to monitor the water level in fire storage tanks.',
        imageUrl: '/Images/Water Level Indicator.jpg',
        price: 'Contact for Quote',
        features: ['Tank Level Monitoring', 'QCDD Approved', 'Alarm Signal', 'Electronic'],
        inStock: true
    },
    {
        id: 'extinguisher-refilling-001',
        name: 'Fire Extinguisher Refilling',
        category: 'Services & Maintenance',
        description: 'Refilling and servicing for all types of fire extinguishers.',
        imageUrl: '/Images/Fire Extinguisher Refilling.jpg',
        price: 'Contact for Quote',
        features: ['DCP Refilling', 'CO2 Refilling', 'Foam/Water Refilling', 'QCDD Approved'],
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
            imageUrl: '/Images/Smoke_detector.jpeg',
            price: 'Contact for Quote',
            features: ['Ionization Technology', 'Fast Response', 'Battery Operated', 'Easy Installation']
        },
        {
            id: 'smoke-detector-003',
            name: 'Wireless Smoke Detector',
            description: 'Wireless connectivity with smartphone app integration.',
            imageUrl: '/Images/Smoke_detector.jpeg',
            price: 'Contact for Quote',
            features: ['Wireless Technology', 'Smart App Control', 'Battery Backup', 'Remote Monitoring']
        },
        {
            id: 'smoke-detector-004',
            name: 'Multi-Sensor Smoke Detector',
            description: 'Combines photoelectric and heat detection technologies.',
            imageUrl: '/Images/Smoke_detector.jpeg',
            price: 'Contact for Quote',
            features: ['Dual Technology', 'Reduced False Alarms', 'High Sensitivity', 'Weather Resistant']
        },
        {
            id: 'smoke-detector-005',
            name: 'Addressable Smoke Detector',
            description: 'Detector with individual identification.',
            imageUrl: '/Images/Smoke_detector.jpeg',
            price: 'Contact for Quote',
            features: ['Network Connected', 'Individual ID', 'Central Monitoring', 'Easy Maintenance']
        },
        {
            id: 'smoke-detector-006',
            name: 'Beam Smoke Detector',
            description: 'Long-range beam detector for large open areas.',
            imageUrl: '/Images/Smoke_detector.jpeg',
            price: 'Contact for Quote',
            features: ['Long Range', 'Large Area Coverage', 'High Sensitivity', 'Weather Resistant']
        },
        {
            id: 'smoke-detector-007',
            name: 'Aspirating Smoke Detector',
            description: 'Early warning system with air sampling technology.',
            imageUrl: '/Images/Smoke_detector.jpeg',
            price: 'Contact for Quote',
            features: ['Early Detection', 'Air Sampling', 'High Sensitivity', 'Clean Room Compatible']
        }
    ],
    'co2-001': [
        {
            id: 'co2-002',
            name: 'CO2 Storage Cylinders',
            description: 'High-pressure CO2 storage cylinders for fire suppression.',
            imageUrl: '/Images/CO2 System.jpeg',
            price: 'Contact for Quote',
            features: ['High Pressure', 'CO2 Storage', 'Durable', 'Certified']
        },
        {
            id: 'co2-003',
            name: 'CO2 Control Panel',
            description: 'Control panel for CO2 fire suppression system.',
            imageUrl: '/Images/CO2 System.jpeg',
            price: 'Contact for Quote',
            features: ['Control Panel', 'System Control', 'Safety Features', 'Monitoring']
        },
        {
            id: 'co2-004',
            name: 'CO2 Discharge Nozzles',
            description: 'Discharge nozzles for CO2 fire suppression system.',
            imageUrl: '/Images/CO2 System.jpeg',
            price: 'Contact for Quote',
            features: ['Discharge Nozzles', 'Precise Distribution', 'High Flow', 'Durable']
        }
    ],
    
    // Add related products for all main products
    'heat-detector-001': [
        {
            id: 'heat-detector-002',
            name: 'Rate of Rise Heat Detector',
            description: 'Detects rapid temperature increases in protected areas.',
            imageUrl: '/Images/Heat Detector.jpeg',
            price: 'Contact for Quote',
            features: ['Rate of Rise Detection', 'Fast Response', 'Temperature Monitoring', 'Reliable']
        },
        {
            id: 'heat-detector-003',
            name: 'Linear Heat Detector',
            description: 'Continuous heat detection cable for long distances.',
            imageUrl: '/Images/Heat Detector.jpeg',
            price: 'Contact for Quote',
            features: ['Linear Detection', 'Long Distance', 'Flexible Installation', 'Continuous Monitoring']
        }
    ],
    
    'control-panel-001': [
        {
            id: 'control-panel-002',
            name: 'Conventional Fire Panel',
            description: 'Traditional fire alarm control panel with zone-based detection.',
            imageUrl: '/Images/fire-alarm-control-panel.jpg',
            price: 'Contact for Quote',
            features: ['Zone Based', 'Traditional Design', 'Reliable', 'Easy Maintenance']
        },
        {
            id: 'control-panel-003',
            name: 'Addressable Fire Panel',
            description: 'Advanced panel with individual device identification and monitoring.',
            imageUrl: '/Images/fire-alarm-control-panel.jpg',
            price: 'Contact for Quote',
            features: ['Addressable System', 'Individual ID', 'Advanced Monitoring', 'Network Ready']
        }
    ],
    
    'fire-extinguisher-001': [
        // Different Types of Fire Extinguishers
        {
            id: 'fire-extinguisher-002',
            name: 'CO2 Fire Extinguisher',
            description: 'Clean agent extinguisher for electrical fires and sensitive equipment. No residue, safe for electronics.',
            imageUrl: '/Images/Fire Extinguisher.jpeg',
            price: 'Contact for Quote',
            features: ['Clean Agent Technology', 'No Residue', 'Electrical Safe', 'Fast Discharge', 'UL Listed']
        },
        {
            id: 'fire-extinguisher-003',
            name: 'Water Fire Extinguisher',
            description: 'Water-based extinguisher for Class A fires. Environmentally friendly and cost-effective.',
            imageUrl: '/Images/Fire Extinguisher.jpeg',
            price: 'Contact for Quote',
            features: ['Class A Rating', 'Environmentally Safe', 'Easy Refill', 'Long Range', 'Durable Construction']
        },
        {
            id: 'fire-extinguisher-004',
            name: 'Foam Fire Extinguisher',
            description: 'AFFF foam extinguisher for Class A and B fires. Provides excellent coverage and cooling effect.',
            imageUrl: '/Images/Fire Extinguisher.jpeg',
            price: 'Contact for Quote',
            features: ['A&B Class Rating', 'Foam Technology', 'Long Range', 'Effective Coverage', 'Cooling Effect']
        },
        {
            id: 'fire-extinguisher-005',
            name: 'Wet Chemical Extinguisher',
            description: 'Specialized extinguisher for kitchen fires and cooking oil fires. Class K rated for commercial kitchens.',
            imageUrl: '/Images/Fire Extinguisher.jpeg',
            price: 'Contact for Quote',
            features: ['Class K Rating', 'Kitchen Safe', 'Cooling Effect', 'No Re-ignition', 'Commercial Grade']
        },
        {
            id: 'fire-extinguisher-006',
            name: 'Dry Powder Extinguisher',
            description: 'Multi-purpose ABC powder extinguisher for various fire types. Versatile and long-lasting.',
            imageUrl: '/Images/Fire Extinguisher.jpeg',
            price: 'Contact for Quote',
            features: ['ABC Rating', 'Multi-Purpose', 'Versatile', 'Long Shelf Life', 'High Performance']
        },
        {
            id: 'fire-extinguisher-007',
            name: 'Halon Alternative Extinguisher',
            description: 'Environmentally friendly clean agent extinguisher. Safe for occupied spaces and sensitive equipment.',
            imageUrl: '/Images/Fire Extinguisher.jpeg',
            price: 'Contact for Quote',
            features: ['Clean Agent', 'Environmentally Safe', 'No Ozone Depletion', 'Occupied Space Safe', 'Zero Residue']
        },
        // Fire Extinguisher Parts & Accessories
        {
            id: 'extinguisher-parts-001',
            name: 'Fire Extinguisher Nozzle (Standard)',
            description: 'High-quality replacement nozzle for fire extinguishers. Compatible with most extinguisher types.',
            imageUrl: '/Images/Fire Extinguisher Accessories.jpg',
            price: 'Contact for Quote',
            features: ['High Quality Brass', 'Universal Compatibility', 'Durable Construction', 'Easy Installation', 'Corrosion Resistant']
        },
        {
            id: 'extinguisher-parts-002',
            name: 'Fire Extinguisher Pressure Gauge',
            description: 'Accurate pressure gauge for monitoring extinguisher pressure. Clear, easy-to-read display.',
            imageUrl: '/Images/pressure gauge.jpg',
            price: 'Contact for Quote',
            features: ['Accurate Reading', 'Clear Display', 'Durable Construction', 'Easy to Read', 'Reliable Performance']
        },
        {
            id: 'extinguisher-parts-003',
            name: 'Fire Extinguisher Safety Pin',
            description: 'Tamper-evident safety pin for fire extinguishers. Prevents accidental discharge.',
            imageUrl: '/Images/Fire Extinguisher Accessories.jpg',
            price: 'Contact for Quote',
            features: ['Tamper Evident', 'Safety Device', 'High Quality', 'Reliable', 'Easy to Use']
        },
        {
            id: 'extinguisher-parts-004',
            name: 'Fire Extinguisher Discharge Hose',
            description: 'Flexible discharge hose for fire extinguishers. High-pressure rated and durable.',
            imageUrl: '/Images/Fire Extinguisher Accessories.jpg',
            price: 'Contact for Quote',
            features: ['High Pressure Rated', 'Flexible Design', 'Durable Material', 'Easy Installation', 'Long Lasting']
        },
        // Fire Extinguisher Cabinets & Mounting
        {
            id: 'extinguisher-cabinet-001',
            name: 'Fire Extinguisher Wall Cabinet',
            description: 'Wall-mounted cabinet for fire extinguisher storage. Lockable and weather-resistant.',
            imageUrl: '/Images/Fire Hose Cabinet.jpg',
            price: 'Contact for Quote',
            features: ['Wall Mounted', 'Lockable Design', 'Weather Resistant', 'Easy Access', 'Durable Construction']
        },
        {
            id: 'extinguisher-bracket-001',
            name: 'Fire Extinguisher Mounting Bracket',
            description: 'Secure mounting bracket for fire extinguishers. Universal fit for most extinguisher types.',
            imageUrl: '/Images/Fire Extinguisher Accessories.jpg',
            price: 'Contact for Quote',
            features: ['Secure Mounting', 'Universal Fit', 'Easy Installation', 'Durable', 'Stainless Steel']
        },
        // Fire Extinguisher Services & Maintenance
        {
            id: 'extinguisher-refilling-001',
            name: 'Fire Extinguisher Refilling Service',
            description: 'Professional refilling and servicing service. QCDD approved and certified technicians.',
            imageUrl: '/Images/Fire Extinguisher Refilling.jpg',
            price: 'Contact for Quote',
            features: ['DCP Refilling', 'CO2 Refilling', 'Foam/Water Refilling', 'QCDD Approved', 'Certified Technicians']
        },
        {
            id: 'extinguisher-inspection-001',
            name: 'Fire Extinguisher Inspection Service',
            description: 'Regular inspection and testing service. Monthly and annual inspections available.',
            imageUrl: '/Images/Fire Extinguisher Inspection.jpeg',
            price: 'Contact for Quote',
            features: ['Monthly Inspection', 'Annual Testing', 'Pressure Check', 'QCDD Compliant', 'Detailed Reports']
        },
        {
            id: 'extinguisher-maintenance-001',
            name: 'Fire Extinguisher Maintenance Service',
            description: 'Complete maintenance and repair service. Parts replacement and certification included.',
            imageUrl: '/Images/Fire Extinguisher Inspection.jpeg',
            price: 'Contact for Quote',
            features: ['Complete Service', 'Parts Replacement', 'Testing & Certification', 'QCDD Compliant', 'Warranty Included']
        },
        // Related Fire Safety Products
        {
            id: 'fire-blanket-001',
            name: 'Fire Blanket',
            description: 'Fiberglass fire blanket for small fires and kitchen safety. Quick release mechanism.',
            imageUrl: '/Images/Fire Blanket.jpg',
            price: 'Contact for Quote',
            features: ['Fiberglass Material', 'Quick Release', 'Wall Mounted', 'Kitchen Safe', 'Easy to Use']
        }
    ],
    
    'fire-hose-001': [
        {
            id: 'fire-hose-002',
            name: 'Rubber Fire Hose',
            description: 'Flexible rubber fire hose for general firefighting applications.',
            imageUrl: '/Images/Synthetic fire hose.jpg',
            price: 'Contact for Quote',
            features: ['Flexible Rubber', 'High Pressure', 'Durable', 'Easy Handling']
        },
        {
            id: 'fire-hose-cabinet-001',
            name: 'Fire Hose Cabinet',
            description: 'Cabinet for storing fire hose reels and landing valves.',
            imageUrl: '/Images/Fire Hose Cabinet.jpg',
            price: 'Contact for Quote',
            features: ['Wall Mounted', 'Recessed/Surface', 'Steel Construction', 'Complete System']
        },
        {
            id: 'landing-valve-001',
            name: 'Landing Valve',
            description: '2.5" landing valve for fire hydrant and hose systems.',
            imageUrl: '/Images/Landing Valve.jpg',
            price: 'Contact for Quote',
            features: ['2.5" Size', 'Threaded & Flanged', 'UL Listed', 'System Compatible']
        }
    ],
    
    'sprinkler-001': [
        {
            id: 'sprinkler-002',
            name: 'Wet Pipe Sprinkler System',
            description: 'Traditional wet pipe sprinkler system with water-filled pipes.',
            imageUrl: '/Images/fire-sprinkler.png',
            price: 'Contact for Quote',
            features: ['Wet Pipe', 'Water Filled', 'Fast Response', 'Reliable']
        },
        {
            id: 'upright-sprinkler-001',
            name: 'Upright Sprinkler Head',
            description: 'Standard upright sprinkler head for ceiling installation. Reliable fire suppression coverage.',
            imageUrl: '/Images/fire-sprinkler.png',
            price: 'Contact for Quote',
            features: ['Upright Design', 'Ceiling Mounted', 'Reliable Coverage', 'UL Listed', 'Easy Installation']
        },
        {
            id: 'pendant-sprinkler-001',
            name: 'Pendant Sprinkler Head',
            description: 'Pendant sprinkler head for suspended ceiling installation. Professional fire protection.',
            imageUrl: '/Images/fire-sprinkler.png',
            price: 'Contact for Quote',
            features: ['Pendant Design', 'Suspended Ceiling', 'Professional Grade', 'UL Listed', 'Reliable']
        },
        {
            id: 'sidewall-sprinkler-001',
            name: 'Sidewall Sprinkler Head',
            description: 'Sidewall sprinkler head for wall installation. Perfect for corridors and narrow spaces.',
            imageUrl: '/Images/fire-sprinkler.png',
            price: 'Contact for Quote',
            features: ['Sidewall Design', 'Wall Mounted', 'Narrow Spaces', 'UL Listed', 'Versatile']
        },
        {
            id: 'concealed-sprinkler-001',
            name: 'Concealed Sprinkler Head',
            description: 'Concealed sprinkler head for aesthetic installations. Hidden until activation.',
            imageUrl: '/Images/fire-sprinkler.png',
            price: 'Contact for Quote',
            features: ['Concealed Design', 'Aesthetic Installation', 'Hidden Activation', 'UL Listed', 'Professional']
        },
        {
            id: 'esfr-sprinkler-001',
            name: 'ESFR Sprinkler Head',
            description: 'Early Suppression Fast Response sprinkler head for high-challenge fires.',
            imageUrl: '/Images/fire-sprinkler.png',
            price: 'Contact for Quote',
            features: ['ESFR Technology', 'Fast Response', 'High Challenge Fires', 'UL Listed', 'Advanced']
        },
        {
            id: 'deluge-sprinkler-001',
            name: 'Deluge Sprinkler Head',
            description: 'Deluge sprinkler head for high-hazard areas. Open head design for maximum coverage.',
            imageUrl: '/Images/fire-sprinkler.png',
            price: 'Contact for Quote',
            features: ['Deluge Design', 'High Hazard Areas', 'Open Head', 'Maximum Coverage', 'Professional']
        }
    ],
    
    'fire-pumps-001': [
        {
            id: 'fire-pumps-002',
            name: 'Electric Fire Pump',
            description: 'Electric motor driven fire pump for reliable water supply.',
            imageUrl: '/Images/Fire Pumps.jpg',
            price: 'Contact for Quote',
            features: ['Electric Motor', 'High Efficiency', 'Reliable Operation', 'UL Listed']
        },
        {
            id: 'fire-pumps-003',
            name: 'Diesel Fire Pump',
            description: 'Diesel engine driven fire pump for backup power applications.',
            imageUrl: '/Images/Fire Pumps.jpg',
            price: 'Contact for Quote',
            features: ['Diesel Engine', 'Backup Power', 'High Performance', 'Emergency Ready']
        }
    ],
    
    'pressure-gauge-001': [
        {
            id: 'pressure-gauge-002',
            name: 'Digital Pressure Gauge',
            description: 'Digital pressure gauge with LCD display for precise readings.',
            imageUrl: '/Images/pressure gauge.jpg',
            price: 'Contact for Quote',
            features: ['Digital Display', 'High Accuracy', 'Easy Reading', 'Battery Powered']
        },
        {
            id: 'pressure-gauge-003',
            name: 'High Pressure Gauge',
            description: 'Heavy-duty pressure gauge for high-pressure applications.',
            imageUrl: '/Images/pressure gauge.jpg',
            price: 'Contact for Quote',
            features: ['High Pressure Rating', 'Durable Construction', 'Precise Readings', 'Industrial Grade']
        }
    ]
};



const projectsData = [
    {
        title: 'Doha Commercial Tower - Fire Safety Overhaul',
        description: 'Supplied and installed a comprehensive, addressable fire alarm and sprinkler system for a 45-story commercial high-rise.',
        imageUrl: '/Images/project-tower.jpg'
    },
    {
        title: 'Al Wakrah Logistics Park - Industrial Supply',
        description: 'Acted as the primary supplier for structural steel, MEP components, and safety equipment for a 500,000 sq. ft. logistics facility.',
        imageUrl: '/Images/project-logistics.jpg'
    },
    {
        title: 'Lusail Marina Residential Complex - MEP Contracting',
        description: 'Executed the complete mechanical, electrical, and plumbing works for a luxury residential development, ensuring compliance with all local codes.',
        imageUrl: '/Images/project-residential.jpg'
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

// Related Products Component
const RelatedProducts: React.FC<{ 
    productId: string; 
    relatedProducts: any[]; 
    onProductClick: (product: any) => void;
}> = ({ productId, relatedProducts, onProductClick }) => {
    if (!relatedProducts || relatedProducts.length === 0) return null;

    return (
        <div className="mt-4">
            <button 
                onClick={() => onProductClick({ id: productId, relatedProducts })}
                className="w-full flex items-center justify-center p-3 bg-gradient-to-r from-gray-50 to-gray-100 rounded-lg hover:from-firetech-red/5 hover:to-red-50 transition-all duration-300 border border-gray-200 hover:border-firetech-red/30"
            >
                <div className="flex items-center">
                    <svg className="w-4 h-4 mr-2 text-firetech-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                    </svg>
                    <span className="text-sm font-bold text-gray-700">View Related Products ({relatedProducts.length})</span>
                </div>
            </button>
        </div>
    );
};

// Professional Product Card Component
const ProfessionalProductCard: React.FC<{ 
    product: any; 
    index: number; 
    isVisible: boolean; 
    onProductClick: (product: any) => void; 
    onQuoteClick: (product: any) => void;
    relatedProducts: any[];
    onRelatedProductClick: (product: any) => void;
}> = ({ product, index, isVisible, onProductClick, onQuoteClick, relatedProducts, onRelatedProductClick }) => {
    return (
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

            {/* Related Products */}
            <RelatedProducts 
                productId={product.id}
                relatedProducts={relatedProducts}
                onProductClick={onProductClick}
            />
        </div>
    </div>
);
};

// Product Details Modal Component
const ProductDetailsModal: React.FC<{ 
    isOpen: boolean; 
    onClose: () => void; 
    product: any | null;
    relatedProducts: any[];
    onRelatedProductClick: (product: any) => void;
}> = ({ isOpen, onClose, product, relatedProducts, onRelatedProductClick }) => {
    if (!isOpen || !product) return null;

    const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    return (
        <div 
            className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4"
            onClick={handleBackdropClick}
        >
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

    const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    return (
        <div 
            className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4"
            onClick={handleBackdropClick}
        >
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
                                <p className="text-2xl font-bold text-emerald-600">+974 5522 1465</p>
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
                                <p className="text-lg font-bold text-blue-600 break-all">suresh@firetechqa.com</p>
                            </div>
                        </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <button 
                            onClick={() => window.open('tel:+97455221465')}
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

    const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    return (
        <div 
            className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4"
            onClick={handleBackdropClick}
        >
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
                                <p className="text-3xl font-bold text-emerald-600 mb-4">+974 5522 1465</p>
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
                                <p className="text-xl font-bold text-blue-600 mb-4 break-all">suresh@firetechqa.com</p>
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
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('All');
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
        // If it's a related products click, use the original product
        if (product.relatedProducts) {
            const originalProduct = products.find(p => p.id === product.id);
            if (originalProduct) {
                setSelectedProduct(originalProduct);
                setShowProductDetailsModal(true);
            }
        } else {
        setSelectedProduct(product);
        setShowProductDetailsModal(true);
        }
    };

    const handleQuoteClick = (product: any) => {
        setSelectedProduct(product);
        setShowQuoteModal(true);
        setShowProductDetailsModal(false);
    };

    const handleRelatedProductClick = (product: any) => {
        setSelectedProduct(product);
        setShowProductDetailsModal(true);
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

    // Get unique categories
    const categories = ['All', ...Array.from(new Set(products.map(product => product.category)))];

    // Filter products based on search term and category
    const filteredProducts = products.filter(product => {
        const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            product.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            product.features.some((feature: string) => feature.toLowerCase().includes(searchTerm.toLowerCase()));
        const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
        return matchesSearch && matchesCategory;
    });

    return (
        <div className="pt-24 sm:pt-28 bg-gray-50">
            {/* Professional Page Header */}
            <section className="bg-gradient-to-br from-firetech-red via-red-700 to-red-800 text-white py-20 sm:py-24">
                
                <div className="container mx-auto px-4 sm:px-6 text-center">
                    <div className="max-w-4xl mx-auto">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                            Professional Fire Safety & Industrial Solutions
                        </h1>
                        
                        <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
                            From advanced fire detection systems to complete industrial solutions, we deliver 
                            world-class products and services that protect your assets and ensure regulatory compliance across Qatar and the region.
                        </p>
                    </div>
                </div>
            </section>
            
            {/* Professional Core Services Section */}
            <section className="py-20 sm:py-24 bg-white">
                <div className="container mx-auto px-4 sm:px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                            Three Pillars of Professional Excellence
                        </h2>
                        <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                            Our comprehensive approach combines cutting-edge technology, industry expertise, and 
                            regulatory compliance to deliver complete fire safety and industrial solutions.
                        </p>
                    </div>
                    
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
                        <div className="group">
                            <div className="bg-white rounded-3xl p-8 h-full border border-gray-200 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                                <div className="flex items-center mb-6">
                                    <div className="bg-gray-100 text-gray-700 p-4 rounded-2xl mr-4 group-hover:scale-110 transition-transform duration-300">
                                        <FireIcon className="w-8 h-8"/>
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-900">Fire & Safety Solutions</h3>
                                </div>
                                <p className="text-gray-600 mb-6 leading-relaxed">
                                    Complete fire protection systems from detection to suppression, ensuring maximum safety 
                                    and regulatory compliance for your facility.
                                </p>
                                <ul className="space-y-3">
                                    <li className="flex items-start">
                                        <CheckCircleIcon className="w-5 h-5 text-gray-500 mr-3 mt-1 flex-shrink-0" />
                                        <span className="text-gray-700 font-medium">Advanced Fire Alarm & Detection Systems</span>
                                    </li>
                                    <li className="flex items-start">
                                        <CheckCircleIcon className="w-5 h-5 text-gray-500 mr-3 mt-1 flex-shrink-0" />
                                        <span className="text-gray-700 font-medium">Fire Suppression & Sprinkler Systems</span>
                                    </li>
                                    <li className="flex items-start">
                                        <CheckCircleIcon className="w-5 h-5 text-gray-500 mr-3 mt-1 flex-shrink-0" />
                                        <span className="text-gray-700 font-medium">Personal Protective Equipment (PPE)</span>
                                    </li>
                                    <li className="flex items-start">
                                        <CheckCircleIcon className="w-5 h-5 text-gray-500 mr-3 mt-1 flex-shrink-0" />
                                        <span className="text-gray-700 font-medium">Emergency & Safety Lighting</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        
                        <div className="group">
                            <div className="bg-white rounded-3xl p-8 h-full border border-gray-200 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                                <div className="flex items-center mb-6">
                                    <div className="bg-gray-100 text-gray-700 p-4 rounded-2xl mr-4 group-hover:scale-110 transition-transform duration-300">
                                        <BuildingOfficeIcon className="w-8 h-8"/>
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-900">Construction & Industrial</h3>
                                </div>
                                <p className="text-gray-600 mb-6 leading-relaxed">
                                    Premium building materials and industrial supplies for construction projects, 
                                    backed by our extensive network of trusted manufacturers.
                                </p>
                                <ul className="space-y-3">
                                    <li className="flex items-start">
                                        <CheckCircleIcon className="w-5 h-5 text-gray-500 mr-3 mt-1 flex-shrink-0" />
                                        <span className="text-gray-700 font-medium">Structural Steel & Building Materials</span>
                                    </li>
                                    <li className="flex items-start">
                                        <CheckCircleIcon className="w-5 h-5 text-gray-500 mr-3 mt-1 flex-shrink-0" />
                                        <span className="text-gray-700 font-medium">Piping Systems & Industrial Valves</span>
                                    </li>
                                    <li className="flex items-start">
                                        <CheckCircleIcon className="w-5 h-5 text-gray-500 mr-3 mt-1 flex-shrink-0" />
                                        <span className="text-gray-700 font-medium">Tools & Industrial Hardware</span>
                                    </li>
                                    <li className="flex items-start">
                                        <CheckCircleIcon className="w-5 h-5 text-gray-500 mr-3 mt-1 flex-shrink-0" />
                                        <span className="text-gray-700 font-medium">Fasteners & Mechanical Components</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        
                        <div className="group">
                            <div className="bg-white rounded-3xl p-8 h-full border border-gray-200 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                                <div className="flex items-center mb-6">
                                    <div className="bg-gray-100 text-gray-700 p-4 rounded-2xl mr-4 group-hover:scale-110 transition-transform duration-300">
                                        <WrenchScrewdriverIcon className="w-8 h-8"/>
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-900">Contracting Services</h3>
                                </div>
                                <p className="text-gray-600 mb-6 leading-relaxed">
                                    End-to-end contracting solutions from design to completion, ensuring quality 
                                    execution and timely delivery of your projects.
                                </p>
                                <ul className="space-y-3">
                                    <li className="flex items-start">
                                        <CheckCircleIcon className="w-5 h-5 text-gray-500 mr-3 mt-1 flex-shrink-0" />
                                        <span className="text-gray-700 font-medium">General Contracting & Construction</span>
                                    </li>
                                    <li className="flex items-start">
                                        <CheckCircleIcon className="w-5 h-5 text-gray-500 mr-3 mt-1 flex-shrink-0" />
                                        <span className="text-gray-700 font-medium">MEP (Mechanical, Electrical & Plumbing)</span>
                                    </li>
                                    <li className="flex items-start">
                                        <CheckCircleIcon className="w-5 h-5 text-gray-500 mr-3 mt-1 flex-shrink-0" />
                                        <span className="text-gray-700 font-medium">Civil & Structural Works</span>
                                    </li>
                                    <li className="flex items-start">
                                        <CheckCircleIcon className="w-5 h-5 text-gray-500 mr-3 mt-1 flex-shrink-0" />
                                        <span className="text-gray-700 font-medium">Maintenance & Service Contracts</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Brands Section */}
            <Brands />

            {/* Professional Products Section */}
            <section id="professional-products" ref={productsRef} className="py-20 sm:py-24 bg-gradient-to-b from-gray-50 to-white">
                <div className="container mx-auto px-4 sm:px-6">
                    {/* Professional Section Header */}
                    <div className="text-center mb-16">
                        <div className="inline-block bg-firetech-red/10 rounded-2xl px-6 py-3 mb-6">
                            <span className="text-firetech-red font-bold text-sm uppercase tracking-wider">
                                Professional Product Catalog
                            </span>
                        </div>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 mb-6">
                            Premium Fire Safety
                            <span className="block bg-gradient-to-r from-firetech-red to-red-600 bg-clip-text text-transparent">
                                & Industrial Products
                            </span>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                            Discover our extensive catalog of <span className="font-bold text-firetech-red">certified, high-quality products</span> 
                            from leading manufacturers. Each product is carefully selected for reliability, performance, and 
                            compliance with international standards.
                        </p>
                    </div>

                    {/* Search and Filter Section */}
                    <div className="mb-12">
                        <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
                            {/* Search Bar */}
                            <div className="mb-8">
                                <div className="relative max-w-2xl mx-auto">
                                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                        <svg className="h-6 w-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                        </svg>
                                    </div>
                                    <input
                                        type="text"
                                        placeholder="Search products by name, description, or features..."
                                        value={searchTerm}
                                        onChange={(e) => setSearchTerm(e.target.value)}
                                        className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-firetech-red focus:border-transparent text-lg placeholder-gray-500"
                                    />
                                </div>
                            </div>

                            {/* Category Filters */}
                            <div className="mb-6">
                                <h3 className="text-lg font-bold text-gray-900 mb-4 text-center">Filter by Category</h3>
                                <div className="flex flex-wrap justify-center gap-3">
                                    {categories.map((category) => (
                                        <button
                                            key={category}
                                            onClick={() => setSelectedCategory(category)}
                                            className={`px-6 py-3 rounded-xl font-bold text-sm transition-all duration-300 transform hover:scale-105 ${
                                                selectedCategory === category
                                                    ? 'bg-gradient-to-r from-firetech-red to-red-600 text-white shadow-lg'
                                                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                            }`}
                                        >
                                            {category}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Results Count */}
                            <div className="text-center">
                                <p className="text-gray-600">
                                    Showing <span className="font-bold text-firetech-red">{filteredProducts.length}</span> of <span className="font-bold text-gray-900">{products.length}</span> products
                                    {searchTerm && (
                                        <span className="block text-sm text-gray-500 mt-1">
                                            for "{searchTerm}"
                                        </span>
                                    )}
                                    {selectedCategory !== 'All' && (
                                        <span className="block text-sm text-gray-500 mt-1">
                                            in {selectedCategory}
                                        </span>
                                    )}
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Products Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-16">
                        {filteredProducts.length > 0 ? (
                            filteredProducts.map((product, index) => (
                            <ProfessionalProductCard 
                                key={product.id} 
                                product={product} 
                                index={index}
                                isVisible={isVisible}
                                onProductClick={handleProductClick}
                                onQuoteClick={handleQuoteClick}
                                    relatedProducts={getRelatedProducts(product.id)}
                                    onRelatedProductClick={handleRelatedProductClick}
                                />
                            ))
                        ) : (
                            <div className="col-span-full text-center py-16">
                                <div className="bg-white rounded-2xl shadow-lg p-12 max-w-2xl mx-auto">
                                    <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                        <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                        </svg>
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-900 mb-4">No Products Found</h3>
                                    <p className="text-gray-600 mb-6">
                                        {searchTerm 
                                            ? `No products match your search for "${searchTerm}"`
                                            : `No products found in the "${selectedCategory}" category`
                                        }
                                    </p>
                                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                        <button
                                            onClick={() => {
                                                setSearchTerm('');
                                                setSelectedCategory('All');
                                            }}
                                            className="bg-gradient-to-r from-firetech-red to-red-600 text-white px-6 py-3 rounded-xl hover:from-red-600 hover:to-red-700 transition-all duration-300 font-bold"
                                        >
                                            Clear Filters
                                        </button>
                                        <button
                                            onClick={() => setShowContactModal(true)}
                                            className="border-2 border-firetech-red text-firetech-red px-6 py-3 rounded-xl hover:bg-firetech-red hover:text-white transition-all duration-300 font-bold"
                                        >
                                            Contact Us
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )}
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
