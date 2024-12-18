// src/pages/OurProducts.js
import React, { useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './OurProducts.css'; 

const productData = [
    {
        category: 'Cutters',
        products: [
            {
                image: '/img/cutter/tct-35mm.jpg',
                name: 'TCT SERIES CUTTER',
                description: <div><p><b>Cutting Depth -</b> 35mm</p><p><b>Dia -</b> 12 to 120mm</p></div>,
                pdfLink: '/pdf/cutter/CUTTERS.pdf',
            },
            {
                image: '/img/cutter/tct-50mm.jpg',
                name: 'TCT SERIES CUTTER',
                description: <div><p><b>Cutting Depth -</b> 50mm</p><p><b>Dia -</b> 12 to 120mm</p></div>,
                pdfLink: '/pdf/cutter/CUTTERS.pdf',
            },
            {
                image: '/img/cutter/tct-75mm.jpg',
                name: 'TCT SERIES CUTTER',
                description: <div><p><b>Cutting Depth -</b> 75mm</p><p><b>Dia -</b> 12 to 120mm</p></div>,
                pdfLink: '/pdf/cutter/CUTTERS.pdf',
            },
            {
                image: '/img/cutter/tct-110mm.jpg',
                name: 'TCT SERIES CUTTER',
                description: <div><p><b>Cutting Depth -</b> 110mm</p><p><b>Dia -</b> 12 to 120mm</p></div>,
                pdfLink: '/pdf/cutter/CUTTERS.pdf',
            },
            {
                image: '/img/cutter/M42-25mm.jpg',
                name: 'HIGH SPEED STEEL CUTTERS',
                description: <div><p><b>Cutting Depth -</b> 35mm</p><p><b>Dia -</b> 12 to 50mm</p></div>,
                pdfLink: '/pdf/cutter/CUTTERS.pdf',
            },
            {
                image: '/img/cutter/M42-50mm.jpg',
                name: 'HIGH SPEED STEEL CUTTERS',
                description: <div><p><b>Cutting Depth -</b> 50mm</p><p><b>Dia -</b> 12 to 50mm</p></div>,
                pdfLink: '/pdf/cutter/CUTTERS.pdf',
            }
        ]
    },
    {
        category: 'Magnetic Core Drills',
        products: [
            
            {
                image: '/img/magnetic/YUVA38.jpg',
                name: 'YUVA-38',
                description: <div><p>100% copper motor with overload protection.</p><p>Core and twist drilling with durable guide rail.</p></div>,
                pdfLink: '/pdf/magnetic/YUVA38.pdf',
            },
            {
                image: '/img/magnetic/COMMANDO-40.jpg',
                name: 'COMMANDO-40',
                description: <div><p>Production oriented & accurate core drilling in metal.</p><p>Electronically controlled 6 speed selector switch.</p></div>,
                pdfLink: '/pdf/magnetic/COMMANDO40.pdf',
            },
            {
                image: '/img/magnetic/COMMANDO-50.jpg',
                name: 'COMMANDO-50',
                description: <div><p>Production oriented & accurate core drilling in metal.</p><p>Taper Shank & Twist Drill compatibility.</p></div>,
                pdfLink: '/pdf/magnetic/COMMANDO-50.pdf',
            },
            {
                image: '/img/magnetic/COMMANDO-75.jpg',
                name: 'COMMANDO-75',
                description: <div><p>Production oriented & accurate core drilling in metal.</p><p>Taper Shank & Twist Drill compatibility.</p></div>,
                pdfLink: '/pdf/magnetic/COMMANDO75.pdf',
            },
            {
                image: '/img/magnetic/COMMANDO-100.jpg',
                name: 'COMMANDO-100',
                description: <div><p>Production oriented & accurate core drilling in metal.</p><p>Taper Shank & Twist Drill compatibility.</p></div>,
                pdfLink: '/pdf/magnetic/COMMANDO-100.pdf',
            },
            {
                image: '/img/magnetic/MEGA-45.jpg',
                name: 'MEGA-45',
                description: <div><p>MEGA-45 MT2 drill for precision core drilling.</p><p>Handles 45mm diameter with 50mm depth.</p></div>,
                pdfLink: '/pdf/magnetic/MEGA-45.pdf',
            },
            {
                image: '/img/magnetic/MEGA-150.jpg',
                name: 'MEGA-150',
                description: <div><p>Magnetic drill for versatile tasks on steel.</p><p>Accurate drilling with HSS or TCT bits.</p></div>,
                pdfLink: '/pdf/magnetic/MEGA-150',
            }
        ]
    },
    {
        category: 'Mild Steel Welding Electrodes',
        products: [
            {
                image: '/img/electrodes/Mild Steel Welding Electrodes.webp',
                name: 'ROYAL - SUPER 60',
                description: <div><p><b>AWS Code -</b> E 6013</p><p>Ideal for construction, pipelines, and fabrication.</p><p>All-position electrode with low spatter and soft arc.</p></div>,
                pdfLink: '/pdf/Mild Steel Welding Electrodes/ROYAL-SUPER_60.pdf',
            },
            {
                image: '/img/electrodes/Mild Steel Welding Electrodes.webp',
                name: 'ROYAL BOND',
                description: <div><p><b>AWS Code -</b> E 6013</p><p>Perfect for structures, pipelines, and fabrication.</p><p>All-position electrode with easy slag removal.</p></div>,
                pdfLink: '/pdf/Mild Steel Welding Electrodes/ROYAL-6013.pdf',
            },
            {
                image: '/img/electrodes/Mild Steel Welding Electrodes.webp',
                name: 'ROYAL - S',
                description: <div><p><b>AWS Code -</b> E 6013</p><p>Great for ships, tanks, boilers, and pipes.</p><p>Low spatter electrode with radiographic quality.</p></div>,
                pdfLink: '/pdf/Mild Steel Welding Electrodes/ROYAL-S-6013.pdf',
            }
        ]
    },
    {
        category: 'Low Hydrogen Type Welding Electrodes',
        products: [
            {
                image: '/img/electrodes/low-hydrogen-type-electrodes-500x500.webp',
                name: 'ROYAL - 7016',
                description: <div><p><b>AWS Code -</b> E 7016</p><p>Ideal for joining mild steel to cast iron and rails.</p><p>Hydrogen-controlled electrode for high-tensile steels.</p></div>,
                pdfLink: '/pdf/Low Hydrogen Type Welding Electrodes/ROYAL-7016.pdf',
            },
            {
                image: '/img/electrodes/low-hydrogen-type-electrodes-500x500.webp',
                name: 'ROYAL THERM',
                description: <div><p><b>AWS Code -</b> E 7018</p><p>Perfect for pipelines, bridges, and pressure vessels.</p><p>Low-hydrogen electrode with smooth arc and high efficiency.</p></div>,
                pdfLink: '/pdf/Low Hydrogen Type Welding Electrodes/ROYAL_THERM-7018.pdf',
            },
            {
                image: '/img/electrodes/low-hydrogen-type-electrodes-500x500.webp',
                name: 'ROYAL THERM – (SPL)',
                description: <div><p><b>AWS Code -</b> E 7018 - 1</p><p>Ideal for boilers, bridges, and heavy machinery.</p><p>Crack-resistant electrode with radiographic quality.</p></div>,
                pdfLink: '/pdf/Low Hydrogen Type Welding Electrodes/ROYAL-SPL-7018-1.pdf',
            },
            {
                image: '/img/electrodes/low-hydrogen-type-electrodes-500x500.webp',
                name: 'ROYAL THERM (2H) SPL',
                description: <div><p><b>AWS Code -</b> E 7018 (NACE)</p><p>Perfect for tanks, vessels, and heavy machinery.</p><p>High-tensile electrode with smooth arc and easy slag removal.</p></div>,
                pdfLink: '/pdf/Low Hydrogen Type Welding Electrodes/ROYAL-SPL-7018-2.pdf',
            },
            {
                image: '/img/electrodes/low-hydrogen-type-electrodes-500x500.webp',
                name: 'ROYAL THERM H4R',
                description: <div><p><b>AWS Code -</b> E 7018 H4 R</p><p>Suitable for maintenance of high-tensile and carbon steels.</p><p>Low hydrogen electrode with radiographic quality welds.</p></div>,
                pdfLink: '/pdf/Low Hydrogen Type Welding Electrodes/ROYAL_THERM_H4R.pdf',
            }
        ]
    },
    {
        category: 'Low Alloy High Tensile Welding Electrodes',
        products: [
            {
                image: '/img/electrodes/Low Alloy High Tensile Welding Electrodes.webp',
                name: 'ROYAL CHROME – 1',
                description: <div><p><b>AWS Code -</b> E 8018 B2</p><p>For crack-resistant and low-alloy steels.</p><p>Hydrogen-controlled electrode with radiographic quality.</p></div>,
                pdfLink: '/pdf/Low Alloy High Tensile Welding Electrodes/ROYAL-CHROME-8018-1-B2.pdf',
            },
            {
                image: '/img/electrodes/Low Alloy High Tensile Welding Electrodes.webp',
                name: 'ROYAL CHROM – 2',
                description: <div><p><b>AWS Code -</b> E 9018 B3</p><p>Perfect for Cr-Mo steel and high-temperature pipelines.</p><p>Low hydrogen electrode with creep resistance up to 600°C.</p></div>,
                pdfLink: '/pdf/Low Alloy High Tensile Welding Electrodes/ROYAL-CHROM-9018-B3-2.pdf',
            }
        ]
    },
    {
        category: 'Stainless Steel Welding Electrodes',
        products: [
            {
                image: '/img/electrodes/stainless-steel-electrode.jpg',
                name: 'ROYAL-1C',
                description: <div><p><b>AWS Code -</b> E 308L - 16</p><p>For stainless steel like AISI 301, 304, and 308.</p><p>Corrosion-resistant electrode with smooth slag removal.</p></div>,
                pdfLink: '/pdf/Stainless Steel Welding Electrodes/ROYAL-1C.pdf',
            },
            {
                image: '/img/electrodes/stainless-steel-electrode.jpg',
                name: 'ROYAL - D2',
                description: <div><p><b>AWS Code -</b> E 309 - 16</p><p>Ideal for AISI 309 and straight chrome steels.</p><p>Rutile electrode resistant to corrosion up to 1100°C.</p></div>,
                pdfLink: '/pdf/Stainless Steel Welding Electrodes/ROYAL_D2MO__E_309_MO-16_.pdf',
            },
            {
                image: '/img/electrodes/stainless-steel-electrode.jpg',
                name: 'ROYAL - D2L',
                description: <div><p><b>AWS Code -</b> E 309L - 16</p><p>For 22-26% Cr and 11-14% Ni steels.</p><p>Rutile electrode with Mo for strength and heat resistance.</p></div>,
                pdfLink: '/pdf/Stainless Steel Welding Electrodes/ROYAL_D2L__E_309L-16_.pdf',
            },
            {
                image: '/img/electrodes/stainless-steel-electrode.jpg',
                name: 'ROYAL - 312',
                description: <div><p><b>AWS Code -</b> E 312 - 16</p><p>For heavy machinery, tools, and high-carbon steels.</p><p>Rutile electrode with Cr-Ni for heat and impact resistance.</p></div>,
                pdfLink: '/pdf/Stainless Steel Welding Electrodes/ROYAL_312__E_312-16_.pdf.pdf',
            },
            {
                image: '/img/electrodes/stainless-steel-electrode.jpg',
                name: 'ROYAL-2C',
                description: <div><p><b>AWS Code -</b> E 316 L - 17</p><p>For AISI 316L & 317L in chemical and textile industries.</p><p>Low-carbon electrode with Cr-Ni-Mo for corrosion resistance.</p></div>,
                pdfLink: '/pdf/Stainless Steel Welding Electrodes/ROYAL-2C.pdf',
            }
        ]
    },
    {
        category: 'Hard Facing Electrodes',
        products: [
            {
                image: '/img/electrodes/rhard-facing-electrodes.webp',
                name: 'ROYAL C - II',
                description: <div><p><b>AWS Code -</b></p><p>For blades, rollers, axles, and tractor wheels.</p><p>Rutile electrode with 350 BHN machinable weld metal.</p></div>,
                pdfLink: '/pdf/Hard Facing Electrodes/ROYAL_CII.pdf',
            },
            {
                image: '/img/electrodes/rhard-facing-electrodes.webp',
                name: 'ROYAL C - III',
                description: <div><p><b>AWS Code -</b> E Fe-1C</p><p>For crane wheels, dies, and cutting tools.</p><p>Rutile electrode with 600 BHN for severe abrasion.</p></div>,
                pdfLink: '/pdf/Hard Facing Electrodes/ROYAL_CIII.pdf',
            },
            {
                image: '/img/electrodes/rhard-facing-electrodes.webp',
                name: 'ROYAL C - III (L H)',
                description: <div><p><b>AWS Code -</b></p><p>For earthmoving tools, rails, and cutting knives.</p><p>Low-hydrogen electrode for severe abrasion resistance.</p></div>,
                pdfLink: '/pdf/Hard Facing Electrodes/ROYAL_CIII__LH_.pdf',
            },
            {
                image: '/img/electrodes/rhard-facing-electrodes.webp',
                name: 'ROYAL MANGAN',
                description: <div><p><b>AWS Code -</b> E Fe Mn A</p><p>For rock crushers, bulldozer teeth, and rail points.</p><p>Low hydrogen electrode for hardfacing with 12% Mn composition.</p></div>,
                pdfLink: '/pdf/Hard Facing Electrodes/ROYAL-MANGAN.pdf',
            }
        ]
    },
    {
        category: 'Casting Electrodes',
        products: [
            {
                image: '/img/electrodes/casting-electrodes.webp',
                name: 'ROYAL CAST',
                description: <div><p><b>AWS Code -</b></p><p>For welding gears, motor housings, and cast iron repairs.</p><p>Low hydrogen electrode for strong, rigid cast iron joints.</p></div>,
                pdfLink: '/pdf/Casting Electrodes/ROYAL-CAST.pdf',
            },
            {
                image: '/img/electrodes/casting-electrodes.webp',
                name: 'ROYAL CAST - Fe - Ni (36%)',
                description: <div><p><b>AWS Code -</b> E Ni Fe – Ci (Mod)</p><p>For repairing and joining various types of cast iron.</p><p>Nickel-Iron alloy electrode for high-strength, machinable welds.</p></div>,
                pdfLink: '/pdf/Casting Electrodes/ROYAL_CAST_FE_NI_36___E_NiFeCi-Mod_.pdf',
            }
        ]
    },
    {
        category: 'Cutting & Gouging Electrodes',
        products: [
            {
                image: '/img/electrodes/Cutting & Gouging Electrodes.webp',
                name: 'ROYAL CUT',
                description: <div><p><b>AWS Code -</b></p><p>For cutting mild steel, cast iron, and alloys.</p><p>Extruded coated electrode for all-position use, no gas required.</p></div>,
                pdfLink: '/pdf/Cutting & Gouging Electrodes/ROYAL-CUT.pdf',
            },
            {
                image: '/img/electrodes/Cutting & Gouging Electrodes.webp',
                name: 'ROYAL GAUGE',
                description: <div><p><b>AWS Code -</b></p><p>For cutting and piercing steel, cast iron, copper, and aluminum.</p><p>Stable arc electrode with no oxygen or additional equipment required.</p></div>,
                pdfLink: '/pdf/Cutting & Gouging Electrodes/ROYAL_gauge_123.pdf',
            }
        ]
    },
    {
        category: 'Carbon Steel Flux Cored Wires',
        products: [
            {
                image: '/img/flux/carbon-steel-flux-cored-wire-500x500.webp',
                name: 'ROYAL - SUPER 71',
                description: <div><p><b>AWS Code -</b> E71T-1C</p><p>For welding low and medium carbon steels in structural and vehicle applications.</p><p>Rutile flux-cored wire for smooth transfer and minimal spatter.</p></div>,
                pdfLink: '/pdf/Carbon Steel Flux Cored Wires/Royal_Super_71.pdf',
            },
            {
                image: '/img/flux/carbon-steel-flux-cored-wire-500x500.webp',
                name: 'ROYALFIL GS 12 R',
                description: <div><p><b>AWS Code -</b> E71T-1C</p><p>For welding low and medium carbon steels in structural and vehicle applications.</p><p>Rutile flux-cored wire for smooth transfer and minimal spatter.</p></div>,
                pdfLink: '/pdf/Carbon Steel Flux Cored Wires/ROYALFIL-GS-12-R.pdf',
            }
        ]
    },
    {
        category: 'Low Alloy Steel Flux Cored Wires',
        products: [
            {
                image: '/img/flux/low-alloy.jpg',
                name: 'ROYALFIL GS 18 R',
                description: <div><p><b>AWS Code -</b> E81T1-W2 C</p><p>For welding weathering steels like Resco and corton.</p><p>Rutile flux-cored wire with stable arc and good slag removal.</p></div>,
                pdfLink: '/pdf/Low Alloy Steel Flux Cored Wires/ROYALFIL-GS-18-R.pdf',
            },
            {
                image: '/img/flux/low-alloy.jpg',
                name: 'ROYALFIL GS 19 R',
                description: <div><p><b>AWS Code -</b> E91T1-Ni2 C</p><p>For welding quenched & tempered steels like HY 80, ideal for structural applications.</p><p>Rutile flux-cored wire with stable arc and easy slag removal.</p></div>,
                pdfLink: '/pdf/Low Alloy Steel Flux Cored Wires/ROYALFIL-GS-19-R.pdf',
            }
        ]
    },
    {
        category: 'Stainless Steel Flux Cored Wires',
        products: [
            {
                image: '/img/flux/stainless-steel.jpg',
                name: 'ROYALFIL GS 1 C',
                description: <div><p><b>AWS Code -</b> E308LT1-1</p><p>For welding 18% Cr, 9% Nickel steels like 304, 304L, and 321, ideal for austenitic steels.</p><p>Extra low carbon flux-cored wire with excellent resistance to corrosion and cracking.</p></div>,
                pdfLink: '/pdf/Stainless Steel Flux Cored Wires/ROYALFIL-GS-1-C.pdf',
            },
            {
                image: '/img/flux/stainless-steel.jpg',
                name: 'ROYALFIL GS 2 C',
                description: <div><p><b>AWS Code -</b> E316LT1-1</p><p>For welding 18% Cr, 12% Ni & 2.5% Mo steels and AISI 316L/317L in chemical industries.</p><p>Low carbon flux-cored wire with excellent corrosion resistance and easy slag removal.</p></div>,
                pdfLink: '/pdf/Stainless Steel Flux Cored Wires/ROYALFIL-GS-2-C.pdf',
            },
            {
                image: '/img/flux/stainless-steel.jpg',
                name: 'ROYALFIL GS D2',
                description: <div><p><b>AWS Code -</b> E 309LT1-1</p><p>For welding dissimilar metals like stainless steel and carbon or low alloy steel.</p><p>Flux-cored wire with 23% Cr and 12% Ni for excellent corrosion resistance and radiographic quality welds.</p></div>,
                pdfLink: '/pdf/Stainless Steel Flux Cored Wires/ROYALFIL GS D2.pdf',
            }
        ]
    },
    {
        category: 'Hard Facing Flux Cored Wires',
        products: [
            {
                image: '/img/flux/hard-facing.jpg',
                name: 'ROYALFIL OA C II',
                description: <div><p><b>AWS Code -</b></p><p>For rebuilding worn machinery parts in mining and civil engineering industries.</p><p>Self-shielded flux-cored wire for crack-free welds with 30-40 HRC hardness.</p></div>,
                pdfLink: '/pdf/Hard Facing Flux Cored Wires/ROYALFIL-OA-C-II.pdf',
            },
            {
                image: '/img/flux/hard-facing.jpg',
                name: 'ROYALFIL OA C III',
                description: <div><p><b>AWS Code -</b></p><p>For surfacing crane wheels, dies, and tools in mining and civil engineering.</p><p>High carbon, high chrome flux-cored wire with 55-60 HRC hardness for abrasion and impact resistance.</p></div>,
                pdfLink: '/pdf/Hard Facing Flux Cored Wires/ROYALFIL-OA-C-III',
            }
        ]
    },
    {
        category: 'Tig Wires (Mild Steel & Stainless Steel)',
        products: [
            {
                image: '/img/mig-tig/filler.jpg',
                name: 'ROYAL - Mig - 70 S6',
                description: <div><p><b>AWS Code -</b> ER 70S-6</p><p>Steel for pressure vessels with tensile strength up to 520 N/M² for impact at -51°C.</p><p>Triple deoxidized wire for smooth flow and radiography-quality welds.</p></div>,
                pdfLink: '/pdf/mig-tig/ROYAL-Tig-T2.pdf',
            },
            {
                image: '/img/mig-tig/filler.jpg',
                name: 'ROYAL - CUPRO NICKEL 70 - 30',
                description: <div><p><b>AWS Code -</b> ER Cu Ni</p><p>Used for welding Copper-Nickel alloys.</p><p>Royal Cupro Nickel alloys solid filler wire rods deposit 70% Cu, 30% Ni, enhancing weld strength and corrosion resistance against seawater and saltwater.</p></div>,
                pdfLink: '/pdf/mig-tig/ROYAL-CUPRO-NICKEL-70-30.pdf',
            },
            {
                image: '/img/mig-tig/filler.jpg',
                name: 'ROYAL - CUPRO NICKEL 90 - 10',
                description: <div><p><b>AWS Code -</b> SFA 5.7ER Cu Ni</p><p>Used for welding Copper-Nickel alloys.</p><p>Royal Cupro Nickel alloys solid filler wire rods deposit 90% Cu, 10% Ni, enhancing weld strength and corrosion resistance against seawater and saltwater.</p></div>,
                pdfLink: '/pdf/mig-tig/ROYAL-CUPRO-NICKEL-90-10.pdf',
            },
            {
                image: '/img/mig-tig/filler.jpg',
                name: 'ROYAL - ER 80 SB2',
                description: <div><p><b>AWS Code -</b> ER 80SB2</p><p>For joining dissimilar Cr-Mo and carbon steel or similar tube/pipe components.</p><p>Deposits 1.50% Chromium and 0.50% Molybdenum; requires preheat and post-weld heat treatment.</p></div>,
                pdfLink: '/pdf/mig-tig/ROYAL-ER-80-SB2.pdf',
            },
            {
                image: '/img/mig-tig/filler.jpg',
                name: 'ROYAL - ER 80SB6',
                description: <div><p><b>AWS Code -</b> ER 80SB6</p><p>For welding similar materials, typically pipes/tubing.</p><p>Deposits 4.5-6% Chromium, 0.5% Molybdenum; requires heat treatment.</p></div>,
                pdfLink: '/pdf/mig-tig/ROYAL_ER_80S-B6.pdf',
            },
            {
                image: '/img/mig-tig/filler.jpg',
                name: 'ROYAL - ER 80SB8',
                description: <div><p><b>AWS Code -</b> ER 80SB8</p><p>For welding similar materials, usually in pipe/tubing form.</p><p>Deposits 8-10.5% Chromium, 1% Molybdenum; requires heat treatment.</p></div>,
                pdfLink: '/pdf/mig-tig/ROYAL-ER-80SB8.pdf',
            },
            {
                image: '/img/mig-tig/filler.jpg',
                name: 'ROYAL - ER 80SG',
                description: <div><p><b>AWS Code -</b> ER 80SG</p><p>For welding steel structures, pipelines, machinery, and pressure vessels with strength ≥550 N/mm².</p><p>Royal 80SG solid wire offers high deposition, smooth flow, and radiographic quality welds.</p></div>,
                pdfLink: '/pdf/mig-tig/ROYAL-ER-80SG.pdf',
            },
            {
                image: '/img/mig-tig/stainless-steel-tig-wire.jpg',
                name: 'ROYAL - ER 308',
                description: <div><p><b>AWS Code -</b> ER 308</p><p>For welding AISI 308, 304 Stainless Steel in dairy, chemical, and oil industries, especially for root runs.</p><p>Conforms to AWS-SFA 5.9 ER 308, offering corrosion resistance and controlled ferrite.</p></div>,
                pdfLink: '/pdf/mig-tig/ROYAL-ER-308.pdf',
            },
            {
                image: '/img/mig-tig/stainless-steel-tig-wire.jpg',
                name: 'ROYAL - ER 309',
                description: <div><p><b>AWS Code -</b> 	ER 309</p><p>For welding dissimilar steels like AISI 304 to carbon manganese steel, especially for root runs.</p><p>Conforms to AWS-SFA 5.9 ER 309, offering porosity-free welds with a smooth finish.</p></div>,
                pdfLink: '/pdf/mig-tig/ROYAL-ER-309.pdf',
            },
            {
                image: '/img/mig-tig/stainless-steel-tig-wire.jpg',
                name: 'ROYAL - ER316',
                description: <div><p><b>AWS Code -</b> ER 316</p><p>For welding AISI 316 stainless steel in various industries, especially for root runs.</p><p>Conforms to AWS-SFA 5.9 ER 316, offering corrosion resistance and scale resistance up to 800°C.</p></div>,
                pdfLink: '/pdf/mig-tig/ROYAL-ER316.pdf',
            },
            {
                image: '/img/mig-tig/stainless-steel-tig-wire.jpg',
                name: 'ROYAL - ER 309 Mo',
                description: <div><p><b>AWS Code -</b> ER 309 Mo</p><p>This wire rod is used for welding dissimilar steels like AISI 304, 316, and carbon steel overlays.</p><p>It prevents intergranular corrosion and ensures defect-free welds.</p></div>,
                pdfLink: '/pdf/mig-tig/ROYAL-ER-309-Mo.pdf',
            },
            {
                image: '/img/mig-tig/stainless-steel-tig-wire.jpg',
                name: 'ROYAL - ER 309LMo',
                description: <div><p><b>AWS Code -</b> ER 309 L Mo</p><p>This wire rod is used for welding dissimilar steels and preventing corrosion.</p><p>It ensures defect-free welds, ideal for 316L clad steel and carbon steel overlays.</p></div>,
                pdfLink: '/pdf/mig-tig/ROYAL-ER-309LMo.pdf',
            },
            {
                image: '/img/mig-tig/stainless-steel-tig-wire.jpg',
                name: 'ROYAL - ER 410',
                description: <div><p><b>AWS Code -</b> ER 410</p><p>This wire rod is used for welding 13% Chromium steel, turbines, valves, and pumps.</p><p>It requires heat treatments for adequate ductility.</p></div>,
                pdfLink: '/pdf/mig-tig/ROYAL-ER-410.pdf',
            },
            {
                image: '/img/mig-tig/stainless-steel-tig-wire.jpg',
                name: 'ROYAL - ER 308L',
                description: <div><p><b>AWS Code -</b> ER 308L</p><p>This wire rod is used for welding AISI 308, 304, and 304L stainless steel in various industries.</p><p>It resists intergranular corrosion and is free from porosity.</p></div>,
                pdfLink: '/pdf/mig-tig/ROYAL-ER-308L.pdf',
            },
            {
                image: '/img/mig-tig/stainless-steel-tig-wire.jpg',
                name: 'ROYAL - ER 309L',
                description: <div><p><b>AWS Code -</b> ER 309L</p><p>This wire rod is used for welding dissimilar steels like AISI 304 to carbon steel, especially for root runs and barrier layers.</p><p>It provides porosity-free welds with a good finish.</p></div>,
                pdfLink: '/pdf/mig-tig/ROYAL-ER-309L.pdf',
            },
            {
                image: '/img/mig-tig/stainless-steel-tig-wire.jpg',
                name: 'ROYAL - ER316L',
                description: <div><p><b>AWS Code -</b> ER 316L</p><p>This wire rod is used for welding AISI 316 and 316L in various industries, especially for root runs.</p><p>It resists corrosion, is porosity-free, and withstands high temperatures.</p></div>,
                pdfLink: '/pdf/mig-tig/ROYAL-ER316L.pdf',
            },
            {
                image: '/img/mig-tig/stainless-steel-tig-wire.jpg',
                name: 'ROYAL - ER 312',
                description: <div><p><b>AWS Code -</b> ER 312</p><p>This wire rod is used for welding components like springs and steels prone to corrosion and impact.</p><p>It is free from porosity and defects, ideal for dissimilar steel welding.</p></div>,
                pdfLink: '/pdf/mig-tig/ROYAL-ER-312.pdf',
            },
            {
                image: '/img/mig-tig/stainless-steel-tig-wire.jpg',
                name: 'ROYAL ER 308H',
                description: <div><p><b>AWS Code -</b> ER 308 H</p><p>This wire rod welds AISI 308 and 304 stainless steel, especially for root runs.</p><p>It resists corrosion, is porosity-free, and has controlled ferrite.</p></div>,
                pdfLink: '/pdf/mig-tig/ROYAL-ER-308H.pdf',
            },
            {
                image: '/img/mig-tig/stainless-steel-tig-wire.jpg',
                name: 'ROYAL ER 90SB3',
                description: <div><p><b>AWS Code -</b> ER 90SB3</p><p>This wire rod joins Cr-Mo and carbon steels, requiring care for higher strength levels.</p><p>It’s used for welding 2-1/4 Cr-1Mo steels, with controlled heat treatment to prevent cracking.</p></div>,
                pdfLink: '/pdf/mig-tig/ROYAL-ER-90SB3.pdf',
            },
            {
                image: '/img/mig-tig/stainless-steel-tig-wire.jpg',
                name: 'ROYAL ER 310',
                description: <div><p><b>AWS Code -</b> 	ER 310</p><p>This wire rod is used for MIG welding AISI 310 in various industries, especially for root runs.</p><p>It resists intergranular corrosion and is porosity-free.</p></div>,
                pdfLink: '/pdf/mig-tig/ROYAL-ER-310.pdf',
            },
            {
                image: '/img/mig-tig/stainless-steel-tig-wire.jpg',
                name: 'ROYAL ER 317L',
                description: <div><p><b>AWS Code -</b> ER 317L</p><p>This wire rod is used for welding AISI 317 and 317L in various industries, especially for root runs.</p><p>It resists corrosion, is porosity-free, and withstands high temperatures.</p></div>,
                pdfLink: '/pdf/mig-tig/ROYAL-ER-317L.pdf',
            },
            {
                image: '/img/mig-tig/stainless-steel-tig-wire.jpg',
                name: 'ROYAL ER 347',
                description: <div><p><b>AWS Code -</b> ER 347</p><p>This wire is used for welding AISI 321 and 347 steels in various industries, including gas turbines.</p><p>It resists cracking, corrosion, and high temperatures up to 800°C.</p></div>,
                pdfLink: '/pdf/mig-tig/ROYAL-ER-347.pdf',
            },
            {
                image: '/img/mig-tig/stainless-steel-tig-wire.jpg',
                name: 'ROYAL ER NiCr3',
                description: <div><p><b>AWS Code -</b> ER NiCr3</p><p>This wire is used for welding Nickel chromium iron alloys and surfacing steel.</p><p>It joins steel to stainless steel or nickel alloys.</p></div>,
                pdfLink: '/pdf/mig-tig/ROYAL-ER-NiCr3.pdf',
            },
            {
                image: '/img/mig-tig/stainless-steel-tig-wire.jpg',
                name: 'ROYAL ER NiCu7',
                description: <div><p><b>AWS Code -</b> ER NiCu7</p><p>This wire is used for welding Nickel-copper alloys with multiple welding processes.</p><p>It contains titanium to control porosity and ensures excellent performance.</p></div>,
                pdfLink: '/pdf/mig-tig/ROYAL-ER-NiCu7.pdf',
            },
            {
                image: '/img/mig-tig/filler.jpg',
                name: 'ROYAL ER Cu',
                description: <div><p><b>AWS Code -</b> ER Cu</p><p>This copper rod is used for joining and surfacing copper in various industries.</p><p>It delivers a clean, tough deposit with the color and structure of copper.</p></div>,
                pdfLink: '/pdf/mig-tig/ROYAL-ER-Cu.pdf',
            },
            {
                image: '/img/mig-tig/filler.jpg',
                name: 'ROYAL 70 S - 6',
                description: <div><p><b>AWS Code -</b> ER 70S-6</p><p>This wire is used for welding structural steel in various applications.</p><p>It ensures spatter-free, smooth, and porosity-free welds.</p></div>,
                pdfLink: '/pdf/mig-tig/ROYAL_ER_70S-6_.pdf',
            },
            {
                image: '/img/mig-tig/filler.jpg',
                name: 'Royal ER 90S B9',
                description: <div><p><b>AWS Code -</b> ER 90S B9</p><p>This wire provides strength and corrosion resistance at high temperatures, with heat treatments required.</p><p>It’s used for welding similar composition pipes or tubing.</p></div>,
                pdfLink: '/pdf/mig-tig/ROYAL_-ER_90SB9.pdf',
            }
        ]
    },
    {
        category: 'Mig Wires (Mild Steel & Stainless Steel)',
        products: [
            {
                image: '/img/flux/stainless-steel.jpg',
                name: 'ROYAL - ER 308L',
                description: <div><p><b>AWS Code -</b> ER 308L</p><p>This wire rod is used for welding AISI 308, 304, and 304L stainless steel in various industries.</p><p>It resists intergranular corrosion and is free from porosity.</p></div>,
                pdfLink: '/pdf/mig-tig/ROYAL-ER-308L.pdf',
            },
            {
                image: '/img/flux/stainless-steel.jpg',
                name: 'ROYAL - ER 309L',
                description: <div><p><b>AWS Code -</b> ER 309L</p><p>This wire rod is used for welding dissimilar steels like AISI 304 to carbon steel, especially for root runs and barrier layers.</p><p>It provides porosity-free welds with a good finish.</p></div>,
                pdfLink: '/pdf/mig-tig/ROYAL-ER-309L.pdf',
            },
            {
                image: '/img/flux/stainless-steel.jpg',
                name: 'ROYAL - ER316L',
                description: <div><p><b>AWS Code -</b> ER 316L</p><p>This wire rod is used for welding AISI 316 and 316L in various industries, especially for root runs.</p><p>It resists corrosion, is porosity-free, and withstands high temperatures.</p></div>,
                pdfLink: '/pdf/mig-tig/ROYAL-ER316L.pdf',
            },
            {
                image: '/img/flux/stainless-steel.jpg',
                name: 'ROYAL - ER 312',
                description: <div><p><b>AWS Code -</b> ER 312</p><p>This wire rod is used for welding components like springs and steels prone to corrosion and impact.</p><p>It is free from porosity and defects, ideal for dissimilar steel welding.</p></div>,
                pdfLink: '/pdf/mig-tig/ROYAL-ER-312.pdf',
            },
            {
                image: '/img/flux/stainless-steel.jpg',
                name: 'ROYAL ER 308H',
                description: <div><p><b>AWS Code -</b> ER 308 H</p><p>This wire rod welds AISI 308 and 304 stainless steel, especially for root runs.</p><p>It resists corrosion, is porosity-free, and has controlled ferrite.</p></div>,
                pdfLink: '/pdf/mig-tig/ROYAL-ER-308H.pdf',
            },
            {
                image: '/img/flux/stainless-steel.jpg',
                name: 'ROYAL ER 310',
                description: <div><p><b>AWS Code -</b> 	ER 310</p><p>This wire rod is used for MIG welding AISI 310 in various industries, especially for root runs.</p><p>It resists intergranular corrosion and is porosity-free.</p></div>,
                pdfLink: '/pdf/mig-tig/ROYAL-ER-310.pdf',
            },
            {
                image: '/img/flux/stainless-steel.jpg',
                name: 'ROYAL ER 317L',
                description: <div><p><b>AWS Code -</b> ER 317L</p><p>This wire rod is used for welding AISI 317 and 317L in various industries, especially for root runs.</p><p>It resists corrosion, is porosity-free, and withstands high temperatures.</p></div>,
                pdfLink: '/pdf/mig-tig/ROYAL-ER-317L.pdf',
            },
            {
                image: '/img/flux/stainless-steel.jpg',
                name: 'ROYAL ER 347',
                description: <div><p><b>AWS Code -</b> ER 347</p><p>This wire is used for welding AISI 321 and 347 steels in various industries, including gas turbines.</p><p>It resists cracking, corrosion, and high temperatures up to 800°C.</p></div>,
                pdfLink: '/pdf/mig-tig/ROYAL-ER-347.pdf',
            },
            {
                image: '/img/flux/stainless-steel.jpg',
                name: 'ROYAL ER NiCr3',
                description: <div><p><b>AWS Code -</b> ER NiCr3</p><p>This wire is used for welding Nickel chromium iron alloys and surfacing steel.</p><p>It joins steel to stainless steel or nickel alloys.</p></div>,
                pdfLink: '/pdf/mig-tig/ROYAL-ER-NiCr3.pdf',
            },
            {
                image: '/img/flux/stainless-steel.jpg',
                name: 'ROYAL ER NiCu7',
                description: <div><p><b>AWS Code -</b> ER NiCu7</p><p>This wire is used for welding Nickel-copper alloys with multiple welding processes.</p><p>It contains titanium to control porosity and ensures excellent performance.</p></div>,
                pdfLink: '/pdf/mig-tig/ROYAL-ER-NiCu7.pdf',
            },
            {
                image: '/img/flux/stainless-steel.jpg',
                name: 'ROYAL ER Cu',
                description: <div><p><b>AWS Code -</b> ER Cu</p><p>This copper rod is used for joining and surfacing copper in various industries.</p><p>It delivers a clean, tough deposit with the color and structure of copper.</p></div>,
                pdfLink: '/pdf/mig-tig/ROYAL-ER-Cu.pdf',
            },
            {
                image: '/img/mig-tig/Mig-Tig-Welding-Wire.webp',
                name: 'ROYAL ER 90SB3',
                description: <div><p><b>AWS Code -</b> ER 90SB3</p><p>This wire rod joins Cr-Mo and carbon steels, requiring care for higher strength levels.</p><p>It’s used for welding 2-1/4 Cr-1Mo steels, with controlled heat treatment to prevent cracking.</p></div>,
                pdfLink: '/pdf/mig-tig/ROYAL-ER-90SB3.pdf',
            },
            {
                image: '/img/mig-tig/Mig-Tig-Welding-Wire.webp',
                name: 'ROYAL ER NiCu7',
                description: <div><p><b>AWS Code -</b> ER NiCu7</p><p>This wire is used for welding Nickel-copper alloys with multiple welding processes.</p><p>It contains titanium to control porosity and ensures excellent performance.</p></div>,
                pdfLink: '/pdf/mig-tig/ROYAL-ER-NiCu7.pdf',
            },
            {
                image: '/img/mig-tig/Mig-Tig-Welding-Wire.webp',
                name: 'ROYAL ER Cu',
                description: <div><p><b>AWS Code -</b> ER Cu</p><p>This copper rod is used for joining and surfacing copper in various industries.</p><p>It delivers a clean, tough deposit with the color and structure of copper.</p></div>,
                pdfLink: '/pdf/mig-tig/ROYAL-ER-Cu.pdf',
            },
            {
                image: '/img/mig-tig/Mig-Tig-Welding-Wire.webp',
                name: 'ROYAL 70 S - 6',
                description: <div><p><b>AWS Code -</b> ER 70S-6</p><p>This wire is used for welding structural steel in various applications.</p><p>It ensures spatter-free, smooth, and porosity-free welds.</p></div>,
                pdfLink: '/pdf/mig-tig/ROYAL_ER_70S-6_.pdf',
            },
            {
                image: '/img/mig-tig/Mig-Tig-Welding-Wire.webp',
                name: 'Royal ER 90S B9',
                description: <div><p><b>AWS Code -</b> ER 90S B9</p><p>This wire provides strength and corrosion resistance at high temperatures, with heat treatments required.</p><p>It’s used for welding similar composition pipes or tubing.</p></div>,
                pdfLink: '/pdf/mig-tig/ROYAL_-ER_90SB9.pdf',
            }
        ]
    },
    {
        category: 'SMAW Welding',
        products: [
            {
                image: '/img/smaw/saw-flux.jpg',
                name: 'SAW FLUX',
                description: <div><p>Premium submerged arc welding flux designed for optimal performance, ensuring excellent weld quality, smooth arc stability, and compatibility with various welding wires.</p></div>
            },
            {
                image: '/img/smaw/saw-wire.jpg',
                name: 'SAW WIRE',
                description: <div><p>Copper-coated, low to high manganese-silicon wires suitable for welding mild to high tensile steels in applications such as LPG cylinders, pressure vessels, pipelines, windmill towers, and structural welding with high radiographic quality and toughness.</p></div>,
                pdfLink: '/pdf/smaw/Saw Wire.pdf',
            },
            {
                image: '/img/smaw/saw-wire-flux-drum-pack.jpg',
                name: 'SAW WIRE FLUX DRUM PACK',
                description: <div><p>Available in 250 KG drum packs with a wire diameter of 1.6 MM, ideal for high-efficiency submerged arc welding applications.</p></div>
            }
        ]
    },
    {
        category: 'Welding Machines',
        products: [
            {
                image: '/img/welding-machine/WIZARD ARC SERIES.jpg',
                name: 'WIZARD ARC SERIES',
                description: <div><p>Advanced IGBT Inverter Technology for stable performance.</p><p>Designed for efficient welding of various materials.</p></div>,
                pdfLink: '/pdf/welding/ARC SERIES.pdf',
            },
            {
                image: '/img/welding-machine/WIZARD MIG WELDING SERIES.jpg',
                name: 'WIZARD MIG WELDING SERIES',
                description: <div><p>IGBT-based MIG welding with precise control.</p><p>Handles mild steel, stainless, and aluminum alloys.</p></div>,
                pdfLink: '/pdf/welding/MIG WELDING SERIES.pdf',
            },
            {
                image: '/img/welding-machine/WIZARD INVERTER DC & AC.jpg',
                name: 'WIZARD INVERTER & WELDER SERIES',
                description: <div><p>Compact IGBT inverter for AC & DC welding.</p><p>Ideal for aluminum, steel, and alloy welding tasks.</p></div>,
                pdfLink: '/pdf/welding/INVERTER DC & AC.pdf',
            },
            {
                image: '/img/welding-machine/WIZARD SYNERGIC MIG SERIES.jpg',
                name: 'WIZARD SYNERGIC MIG SERIES',
                description: <div><p>Synergic MIG welding for effortless settings adjustment.</p><p>Optimized for high-quality welds on various materials.</p></div>,
                pdfLink: '/pdf/welding/SYNERGIC MIG SERIES.pdf',
            },
            {
                image: '/img/welding-machine/WIZARD PUG MACHINE.jpg',
                name: 'WIZARD PUG MACHINE',
                description: <div><p>Durable Pug machine for efficient welding operations.</p><p>Ideal for precision welding in industrial applications.</p></div>,
                pdfLink: '/pdf/welding/PUG MACHINE.pdf',
            },
            {
                image: '/img/welding-machine/WIZARD PLASMA CUTTING MACHINE.jpg',
                name: 'WIZARD PLASMA CUTTING MACHINE',
                description: <div><p>High-performance plasma cutting with precise control.</p><p>Efficiently cuts through various metals with minimal slag.</p></div>,
                pdfLink: '/pdf/welding/PLASMA CUTTING MACHINE.pdf',
            },
            {
                image: '/img/welding-machine/WIZARD ARC SUBEMERGE.jpg',
                name: 'WIZARD ARC SUBEMERGE',
                description: <div><p>Arc submerged welding for deep penetration and strong welds.</p><p>Suitable for heavy-duty applications and thick materials.</p></div>,
                pdfLink: '/pdf/welding/ARC%20SUBMERGE.pdf',
            },
            {
                image: '/img/welding-machine/WIZARD SPOT WELDING SERIES.jpg',
                name: 'WIZARD SPOT WELDING SERIES',
                description: <div><p>Spot welding technology for quick and reliable joins.</p><p>Perfect for sheet metal and automotive applications.</p></div>,
                pdfLink: '/pdf/welding/SPOT WELDING SERIES.pdf',
            },
            {
                image: '/img/welding-machine/WIZARD STUD SERIES.jpg',
                name: 'WIZARD STUD SERIES',
                description: <div><p>Stud welding for strong and durable fastening solutions.</p><p>Ideal for construction, automotive, and industrial uses.</p></div>,
                pdfLink: '/pdf/welding/STUD SERIES.pdf',
            },
            {
                image: '/img/welding-machine/WIZARD WELDING POSTINERS.jpg',
                name: 'WIZARD WELDING POSTINERS',
                description: <div><p>Welding positioners for precise angle adjustments.</p><p>Enhances efficiency and accuracy in welding tasks.</p></div>,
                pdfLink: '/pdf/welding/WELDING POSTINERS.pdf',
            }
        ]
    },
    {
        category: 'Power Tools',
        products: [
            {
                image: '/img/power/RG-2100.jpg',
                name: 'RG-2100 HEAT GUN',
                description: <div><p><b>Model -</b> RG-2100</p></div>,
                pdfLink: '/pdf/power/RG2100.pdf',
            },
            {
                image: '/img/power/RB-500.jpg',
                name: 'RB-500 ELECTRIC BLOWER',
                description: <div><p><b>Model -</b> RB-500</p></div>,
                pdfLink: '/pdf/power/RB500.pdf',
            },
            {
                image: '/img/power/PAINT-MIXER-rpm-16-1000x1000.webp',
                name: 'PAINT MIXER RPM-16',
                description: <div><p><b>Model -</b> RPM-16</p></div>,
                pdfLink: '/pdf/power/RPM16.pdf',
            },
            {
                image: '/img/power/RG8-100.jpg',
                name: 'ANGLE GRINDER RG8-100',
                description: <div><p>100mm</p><p>235V / 115V - 50Hz</p></div>,
                pdfLink: '/pdf/power/RG8-100.pdf',
            },
            {
                image: '/img/power/AG100-100mm-AG115-115mm.jpg',
                name: 'ANGLE GRINDER AG100',
                description: <div><p>100mm</p><p>235V / 115V - 50Hz</p></div>,
                pdfLink: '/pdf/power/AG100.pdf',
            },
            {
                image: '/img/power/RWG-610E-100mm.jpg',
                name: 'ANGLE GRINDER RWG610E',
                description: <div><p>100mm</p><p>235V</p></div>,
                pdfLink: '/pdf/power/RWG610E.pdf',
            },
            {
                image: '/img/power/22180-180mm.jpg',
                name: 'ANGLE GRINDER 22180',
                description: <div><p>180mm</p><p>235V - 50Hz</p></div>,
                pdfLink: '/pdf/power/22180.pdf',
            },
            {
                image: '/img/power/35135-125mm.jpg',
                name: 'LIGHT DUTY ANGLE GRINDER 35135',
                description: <div><p>125mm</p><p>235V / 115V - 50Hz</p></div>,
                pdfLink: '/pdf/power/35135.pdf',
            },
            {
                image: '/img/power/AG180-180mm-AG230-230mm-1.jpg',
                name: 'ANGLE GRINDER 180',
                description: <div><p>180mm</p><p>235V - 50Hz</p></div>,
                pdfLink: '/pdf/power/AG180.pdf',
            },
            {
                image: '/img/power/77180-180mm.jpg',
                name: 'ANGLE GRINDER 77180M',
                description: <div><p>180mm</p><p>220V / 235V</p></div>,
                pdfLink: '/pdf/power/77180.pdf',
            }
        ]
    },
    {
        category: 'Welding Accessories',
        products: [
            {
                image: '/img/welding-accessories/Polish_20241209_141920146.jpg',
                name: 'WELDING & CUTTING ACCESSORIES',
                description: <div><p>A wide range of welding accessories, including regulators, gas cutting torches, cutting nozzles, MIG torches, welding holders, earthing clamps, and more, designed for efficient and reliable performance.</p></div>,
                pdfLink: '/pdf/Welding Accessories/WELDING ACCESSORIES.pdf',
            },
            {
                image: '/img/welding-accessories/Polish_20241210_142251820.jpg',   
                name: 'WIZARD GOLD GAS WELDING HOSE',
                description: <div><p>High-quality gas welding hose designed for safety and durability, ensuring efficient gas flow for precise welding and cutting applications.</p></div>,
                pdfLink: '/pdf/Welding Accessories/WELDING ACCESSORIES.pdf',
            },
            {
                image: '/img/welding-accessories/Polish_20241210_142149550.jpg',
                name: 'WIZARD GOLD WELDING CABLES',
                description: <div><p>Available in various sizes for diverse welding needs: 16 sq mm, 25 sq mm, 35 sq mm, 50 sq mm, 70 sq mm, 95 sq mm, and 120 sq mm. Designed for durability and optimal current transmission.</p></div>,
                pdfLink: '/pdf/Welding Accessories/WELDING ACCESSORIES.pdf',
            }
        ]
    }
];

const OurProducts = () => {
    const categoryLinksRef = useRef(null);

    useEffect(() => { 
        const handleLinkClick = (event) => { 
            const targetId = event.target.getAttribute("href"); 
            if (targetId) { 
                const targetElement = document.querySelector(targetId); 
                if (targetElement) { 
                    targetElement.scrollIntoView({ behavior: "smooth" }); 
                } 
            } 
        }; 

        if (categoryLinksRef.current) {
            categoryLinksRef.current.addEventListener("click", handleLinkClick); 
        }

        return () => { 
            if (categoryLinksRef.current) {
                categoryLinksRef.current.removeEventListener("click", handleLinkClick); 
            }
        }; 
    }, []);

    return (
        <div>
            <Helmet>
                <title>Our Products - National Industrial Corporation</title>
                <meta name="description" content="Explore our wide range of industrial products including welding machines, power tools, and welding accessories at National Industrial Corporation." />
                <meta name="keywords" content="Products, National Industrial Corporation, Welding Machines, Power Tools, Industrial Solutions" />
                <meta name="robots" content="index, follow" />
                <script type="application/ld+json">
                    {`
                    {
                        "@context": "https://schema.org",
                        "@type": "Product",
                        "name": "Product Name",
                        "image": "URL to product image",
                        "description": "Description of the product",
                        "brand": {
                            "@type": "Brand",
                            "name": "National Industrial Corporation"
                        },
                        "offers": {
                            "@type": "Offer",
                            "url": "URL to product page",
                            "priceCurrency": "INR",
                            "price": "Price of the product",
                            "itemCondition": "https://schema.org/NewCondition",
                            "availability": "https://schema.org/InStock"
                        }
                    }
                    `}
                </script>
            </Helmet>
            <Navbar />
            <div className="our-products-container">
                <h2>Our Products</h2>

                {/* New Category Links Section */}
                <div className="category-links">
                    <h2>Explore Our Categories</h2>
                    <ul>
                        <li><a href="#cutters">Cutters</a></li>
                        <li><a href="#magnetic-core-drills">Magnetic Core Drills</a></li>
                        <li><a href="#mild-steel-welding-electrodes">Welding Electrodes</a></li>
                        <li><a href="#carbon-steel-flux-cored-wires">Flux Cored Wires</a></li>
                        <li><a href="#tig-wires-(mild-steel-&-stainless-steel)">Tig Wires (Mild Steel & Stainless Steel)</a></li>
                        <li><a href="#mig-wires-(mild-steel-&-stainless-steel)">Mig Wires (Mild Steel & Stainless Steel)</a></li>   
                        <li><a href="#smaw-welding-machines">SMAW Welding Machines</a></li>
                        <li><a href="#welding-machines">Welding Machines</a></li>
                        <li><a href="#power-tools">Power Tools</a></li>
                        <li><a href="#welding-accessories">Welding Accessories</a></li>
                    </ul>
                </div>

                {productData.map((category, categoryIndex) => ( 
                    <div id={category.category.toLowerCase().replace(/ /g, "-")} key={categoryIndex} className="our-product-category"> 
                        <h2>{category.category}</h2> 
                        <div className="our-product-list"> 
                            {category.products.map((product, productIndex) => ( 
                                <div key={productIndex} className="our-product-card"> 
                                    <div className="our-product-image-container"> 
                                        <img src={product.image} alt={`${product.name} - ${product.description}`} />
                                    </div> 
                                    <div className="our-product-info"> 
                                        <h3 className="our-product-name">{product.name}</h3> 
                                        <p>{product.description}</p> 
                                        <a href={product.pdfLink} className="our-product-pdf-link" target="_blank" rel="noopener noreferrer"> 
                                            Get PDF 
                                        </a> 
                                    </div> 
                                </div> 
                            ))} 
                        </div>
                    </div> 
                ))}
            </div>
            <Footer />
        </div>
    );
};

export default OurProducts;