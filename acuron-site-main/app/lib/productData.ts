export interface ProductVariant {
  productCode: string;
  productName: string;
  packingPerBox: string;
  gstPercentage: string;
  hsnCode: string;
}

export interface Product {
  id: number;
  name: string;
  description: string;
  detailedDescription: string;
  category: string;
  image: string;
  secondaryImage: string;
  featured: boolean;
  specs: string[];
  variants: ProductVariant[];
  features: string[];
  applications: string[];
  certifications: string[];
  slug: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
}

export const allProducts: Product[] = [
  // Protective Apparel
  {
    id: 101,
    name: "Surgical Gowns",
    description: "Standard nonwoven surgical gown for basic protection.",
    detailedDescription: "Our surgical gowns are designed to provide optimal protection and comfort for healthcare professionals during surgical procedures. Made from high-quality nonwoven fabric, these gowns offer excellent fluid resistance while maintaining breathability.",
    category: "Protective Apparel",
    image: "/products/surgical-gown.jpeg",
    secondaryImage: "/products/surgical-gown.jpg",
    featured: false,
    specs: ["Nonwoven Fabric", "Fluid Resistant", "Comfortable Fit"],
    variants: [
      {
        productCode: "AP SG 01",
        productName: "Standard Surgical Gown - Regular",
        packingPerBox: "50 pcs",
        gstPercentage: "12.00%",
        hsnCode: "62101000"
      },
      {
        productCode: "AP SG 02",
        productName: "Standard Surgical Gown - Large",
        packingPerBox: "50 pcs",
        gstPercentage: "12.00%",
        hsnCode: "62101000"
      },
      {
        productCode: "AP SG 03",
        productName: "Reinforced Surgical Gown - Premium",
        packingPerBox: "25 pcs",
        gstPercentage: "12.00%",
        hsnCode: "62101000"
      }
    ],
    features: [
      "Fluid-resistant barrier protection",
      "Comfortable and breathable fabric",
      "Easy tie-back closure system",
      "Reinforced seams for durability"
    ],
    applications: [
      "Surgical procedures",
      "Operating room use",
      "Medical examinations",
      "Infection control protocols"
    ],
    certifications: ["ISO 13485", "CE Mark", "FDA Registered"],
    slug: "surgical-gowns",
    metaTitle: "Surgical Gowns - Medical Protection Wear | Acuron Products",
    metaDescription: "High-quality surgical gowns with fluid resistance and comfort. ISO certified medical protection wear for healthcare professionals.",
    keywords: ["surgical gowns", "medical gowns", "protective apparel", "hospital wear"]
  },
  {
    id: 102,
    name: "Patient Gowns",
    description: "Comfortable and dignifying patient gowns.",
    detailedDescription: "Our patient gowns are designed with patient comfort and dignity in mind. Made from soft, breathable materials, these gowns provide easy access for medical procedures while ensuring patient privacy and comfort.",
    category: "Protective Apparel",
    image: "/products/patgown.JPEG",
    secondaryImage: "/products/patgown.JPEG",
    featured: false,
    specs: ["Soft Fabric", "Easy Access", "Disposable"],
    variants: [
      {
        productCode: "AP PG 01",
        productName: "Standard Patient Gown - Adult",
        packingPerBox: "100 pcs",
        gstPercentage: "12.00%",
        hsnCode: "62101000"
      },
      {
        productCode: "AP PG 02",
        productName: "Pediatric Patient Gown",
        packingPerBox: "100 pcs",
        gstPercentage: "12.00%",
        hsnCode: "62101000"
      }
    ],
    features: [
      "Soft and comfortable material",
      "Easy-access design",
      "Patient dignity preservation",
      "Disposable for hygiene"
    ],
    applications: [
      "Hospital patient care",
      "Medical examinations",
      "Outpatient procedures",
      "Emergency care"
    ],
    certifications: ["ISO 13485", "CE Mark"],
    slug: "patient-gowns",
    metaTitle: "Patient Gowns - Comfortable Medical Wear | Acuron Products",
    metaDescription: "Comfortable and dignified patient gowns for medical facilities. Soft, breathable materials ensuring patient comfort and privacy.",
    keywords: ["patient gowns", "hospital gowns", "medical wear", "patient comfort"]
  },
  {
    id: 103,
    name: "Plastic Aprons",
    description: "Waterproof plastic aprons for various medical applications.",
    detailedDescription: "Our plastic aprons provide excellent waterproof protection for healthcare workers and patients during various medical procedures. Made from high-quality LDPE material, these aprons are lightweight yet durable.",
    category: "Protective Apparel",
    image: "/products/plastic-ap.jpg",
    secondaryImage: "/products/plastic-apron.jpg",
    featured: false,
    specs: ["Waterproof LDPE", "Disposable", "Hygienic"],
    variants: [
      {
        productCode: "AP PA 01",
        productName: "Standard Plastic Apron - White",
        packingPerBox: "200 pcs",
        gstPercentage: "18.00%",
        hsnCode: "39262090"
      },
      {
        productCode: "AP PA 02",
        productName: "Heavy Duty Plastic Apron",
        packingPerBox: "100 pcs",
        gstPercentage: "18.00%",
        hsnCode: "39262090"
      }
    ],
    features: [
      "100% waterproof protection",
      "Lightweight and flexible",
      "Easy tie-around design",
      "Chemical resistant"
    ],
    applications: [
      "Food service in hospitals",
      "Laboratory procedures",
      "Cleaning and sanitation",
      "Patient care activities"
    ],
    certifications: ["ISO 13485", "Food Grade"],
    slug: "plastic-aprons",
    metaTitle: "Plastic Aprons - Waterproof Medical Protection | Acuron Products",
    metaDescription: "Waterproof plastic aprons for medical and food service applications. LDPE material providing excellent protection and hygiene.",
    keywords: ["plastic aprons", "waterproof aprons", "medical protection", "LDPE aprons"]
  },
  {
    id: 104,
    name: "Medical Coveralls",
    description: "Nonwoven labcoats for laboratory and general use.",
    detailedDescription: "Our medical coveralls provide comprehensive protection for healthcare workers in various medical environments. Made from high-quality nonwoven polypropylene, these coveralls offer excellent barrier protection while maintaining comfort.",
    category: "Protective Apparel",
    image: "/products/medcoverall.jpg",
    secondaryImage: "/products/coverall-2.jpg",
    featured: false,
    specs: ["Nonwoven Polypropylene", "Splash Resistant", "Knee-Length"],
    variants: [
      {
        productCode: "AP MC 01",
        productName: "Standard Medical Coverall - M",
        packingPerBox: "25 pcs",
        gstPercentage: "12.00%",
        hsnCode: "62101000"
      },
      {
        productCode: "AP MC 02",
        productName: "Standard Medical Coverall - L",
        packingPerBox: "25 pcs",
        gstPercentage: "12.00%",
        hsnCode: "62101000"
      },
      {
        productCode: "AP MC 03",
        productName: "Premium Medical Coverall - XL",
        packingPerBox: "20 pcs",
        gstPercentage: "12.00%",
        hsnCode: "62101000"
      }
    ],
    features: [
      "Full body protection",
      "Breathable nonwoven fabric",
      "Secure zip closure",
      "Elastic cuffs and ankles"
    ],
    applications: [
      "Laboratory work",
      "Medical procedures",
      "Pharmaceutical manufacturing",
      "Research facilities"
    ],
    certifications: ["ISO 13485", "CE Mark", "EN 14126"],
    slug: "medical-coveralls",
    metaTitle: "Medical Coveralls - Full Body Protection | Acuron Products",
    metaDescription: "Medical coveralls providing comprehensive protection for healthcare workers. Nonwoven polypropylene with excellent barrier properties.",
    keywords: ["medical coveralls", "protective coveralls", "laboratory wear", "full body protection"]
  },

  // Masks & Headwear
  {
    id: 201,
    name: "3 Ply Face Masks",
    description: "Standard 3-ply face mask with tie/lace closure.",
    detailedDescription: "Our 3-ply face masks provide excellent filtration efficiency and comfort for extended wear. Featuring a three-layer construction with high-quality meltblown filter media, these masks offer superior protection against airborne particles and droplets.",
    category: "Masks & Headwear",
    image: "/products/3ply-pack.png",
    secondaryImage: "/products/3ply-display.png",
    featured: false,
    specs: ["Tie/Lace Closure", "High BFE", "Comfortable"],
    variants: [
      {
        productCode: "AP FM L 01",
        productName: "3 PLY Loop -NON FILTER (Bulk Pack)",
        packingPerBox: "100 pcs",
        gstPercentage: "5.00%",
        hsnCode: "63079090"
      },
      {
        productCode: "AP FM L 02",
        productName: "3 PLY Loop - FILTER (Bulk Pack)",
        packingPerBox: "100 pcs",
        gstPercentage: "5.00%",
        hsnCode: "63079090"
      },
      {
        productCode: "AP FM L 03",
        productName: "3 PLY - BULK with BOX (Loop) -FILTER",
        packingPerBox: "100 pcs",
        gstPercentage: "5.00%",
        hsnCode: "63079090"
      },
      {
        productCode: "AP FM L 04",
        productName: "3 PLY (LOOP) 25pc Pouch Pack FILTER",
        packingPerBox: "25pcs",
        gstPercentage: "5.00%",
        hsnCode: "63079090"
      },
      {
        productCode: "AP FM T 01",
        productName: "3 PLY TIE with FILTER",
        packingPerBox: "BULK",
        gstPercentage: "5.00%",
        hsnCode: "63079090"
      },
      {
        productCode: "AP FM T 02",
        productName: "3 PLY - BULK with BOX (Lace)",
        packingPerBox: "50 pcs",
        gstPercentage: "5.00%",
        hsnCode: "63079090"
      }
    ],
    features: [
      "3-layer filtration system",
      "≥95% bacterial filtration efficiency",
      "Comfortable earloop or tie design",
      "Latex-free materials",
      "Adjustable nose clip"
    ],
    applications: [
      "Medical procedures",
      "Patient care",
      "General healthcare use",
      "Public health protection"
    ],
    certifications: ["ISO 13485", "CE Mark", "EN 14683 Type IIR"],
    slug: "3-ply-face-masks",
    metaTitle: "3 Ply Face Masks - Medical Grade Protection | Acuron Products",
    metaDescription: "High-quality 3-ply face masks with superior filtration efficiency. Available in tie and loop variants for medical and healthcare use.",
    keywords: ["3 ply masks", "face masks", "medical masks", "surgical masks", "protective masks"]
  },
  {
    id: 202,
    name: "N95/FFP2 Protective Face Masks",
    description: "N95/FFP2 respirator mask with earloops.",
    detailedDescription: "Our N95/FFP2 respirator masks provide the highest level of respiratory protection available in disposable masks. Designed to filter at least 95% of airborne particles, these masks are essential for high-risk medical procedures and environments.",
    category: "Masks & Headwear",
    image: "/products/n95-box.png",
    secondaryImage: "/products/n95-banner.png",
    featured: false,
    specs: ["N95/FFP2 Standard", "High Filtration", "Earloop"],
    variants: [
      {
        productCode: "AP N95 01",
        productName: "N95 Respirator Mask - Standard",
        packingPerBox: "20 pcs",
        gstPercentage: "12.00%",
        hsnCode: "63079090"
      },
      {
        productCode: "AP N95 02",
        productName: "N95 Respirator Mask - With Valve",
        packingPerBox: "20 pcs",
        gstPercentage: "12.00%",
        hsnCode: "63079090"
      }
    ],
    features: [
      "≥95% filtration efficiency",
      "NIOSH approved design",
      "Comfortable cup shape",
      "Secure earloop attachment",
      "Adjustable nose bridge"
    ],
    applications: [
      "High-risk medical procedures",
      "Aerosol generating procedures",
      "Tuberculosis care",
      "Emergency medical services"
    ],
    certifications: ["NIOSH N95", "CE Mark", "ISO 13485"],
    slug: "n95-ffp2-protective-masks",
    metaTitle: "N95/FFP2 Protective Masks - High Filtration | Acuron Products",
    metaDescription: "NIOSH approved N95/FFP2 respirator masks with 95% filtration efficiency. Premium protection for high-risk medical procedures.",
    keywords: ["N95 masks", "FFP2 masks", "respirator masks", "high filtration masks", "NIOSH approved"]
  },
  {
    id: 203,
    name: "Bouffant Caps",
    description: "Standard 18-inch bouffant caps for hair coverage.",
    detailedDescription: "Our bouffant caps provide complete hair coverage and containment in medical and food service environments. Made from lightweight nonwoven material with elastic band for secure and comfortable fit.",
    category: "Masks & Headwear",
    image: "/products/cap.jpeg",
    secondaryImage: "/products/cap.jpeg",
    featured: false,
    specs: ["18 Inch Diameter", "Nonwoven", "Elasticated"],
    variants: [
      {
        productCode: "AP BC 01",
        productName: "Bouffant Cap - 18 inch White",
        packingPerBox: "100 pcs",
        gstPercentage: "12.00%",
        hsnCode: "65050090"
      },
      {
        productCode: "AP BC 02",
        productName: "Bouffant Cap - 21 inch Blue",
        packingPerBox: "100 pcs",
        gstPercentage: "12.00%",
        hsnCode: "65050090"
      }
    ],
    features: [
      "Complete hair coverage",
      "Elastic band for secure fit",
      "Lightweight and breathable",
      "Single-use disposable"
    ],
    applications: [
      "Surgical procedures",
      "Food service",
      "Clean room environments",
      "Manufacturing facilities"
    ],
    certifications: ["ISO 13485", "Food Grade"],
    slug: "bouffant-caps",
    metaTitle: "Bouffant Caps - Hair Coverage Protection | Acuron Products",
    metaDescription: "Disposable bouffant caps for complete hair coverage in medical and food service environments. Lightweight nonwoven material.",
    keywords: ["bouffant caps", "hair nets", "surgical caps", "disposable caps"]
  },
  {
    id: 204,
    name: "Surgeon Caps",
    description: "Traditional surgeon caps for operating room use.",
    detailedDescription: "Our surgeon caps are designed specifically for operating room use, providing secure hair containment while maintaining comfort during long surgical procedures. Available in tie-back and elastic band styles.",
    category: "Masks & Headwear",
    image: "/products/surgeon-cap.png",
    secondaryImage: "/products/surgeon-cap.png",
    featured: false,
    specs: ["Tie-back Design", "Cotton/Nonwoven", "Breathable"],
    variants: [
      {
        productCode: "AP SC 01",
        productName: "Surgeon Cap - Tie Back",
        packingPerBox: "100 pcs",
        gstPercentage: "12.00%",
        hsnCode: "65050090"
      },
      {
        productCode: "AP SC 02",
        productName: "Surgeon Cap - Elastic Band",
        packingPerBox: "100 pcs",
        gstPercentage: "12.00%",
        hsnCode: "65050090"
      }
    ],
    features: [
      "Secure tie-back closure",
      "Comfortable fit",
      "Absorbent material",
      "Professional appearance"
    ],
    applications: [
      "Operating room procedures",
      "Surgical suites",
      "Sterile environments",
      "Medical examinations"
    ],
    certifications: ["ISO 13485", "CE Mark"],
    slug: "surgeon-caps",
    metaTitle: "Surgeon Caps - Operating Room Headwear | Acuron Products",
    metaDescription: "Professional surgeon caps for operating room use. Secure tie-back design with comfortable fit for long surgical procedures.",
    keywords: ["surgeon caps", "operating room caps", "surgical headwear", "medical caps"]
  },
  {
    id: 205,
    name: "Goggles",
    description: "Protective goggles for eye safety.",
    detailedDescription: "Our protective goggles provide comprehensive eye protection against splashes, droplets, and airborne particles. Featuring anti-fog coating and adjustable headband for comfort and clear vision.",
    category: "Masks & Headwear",
    image: "/products/goggles.jpeg",
    secondaryImage: "/products/goggles.jpg",
    featured: false,
    specs: ["Polycarbonate Lens", "Anti-Fog Coating", "Adjustable Headband"],
    variants: [
      {
        productCode: "AP G 01",
        productName: "Safety Goggles - Clear Lens",
        packingPerBox: "50 pcs",
        gstPercentage: "18.00%",
        hsnCode: "90049090"
      },
      {
        productCode: "AP G 02",
        productName: "Safety Goggles - Anti-Fog",
        packingPerBox: "50 pcs",
        gstPercentage: "18.00%",
        hsnCode: "90049090"
      }
    ],
    features: [
      "Impact-resistant polycarbonate lens",
      "Anti-fog coating",
      "Adjustable elastic headband",
      "Side ventilation"
    ],
    applications: [
      "Medical procedures",
      "Laboratory work",
      "Dental procedures",
      "Eye protection protocols"
    ],
    certifications: ["ANSI Z87.1", "CE Mark", "ISO 13485"],
    slug: "protective-goggles",
    metaTitle: "Protective Goggles - Eye Safety Equipment | Acuron Products",
    metaDescription: "Protective goggles with polycarbonate lens and anti-fog coating. Comprehensive eye protection for medical and laboratory use.",
    keywords: ["protective goggles", "safety goggles", "eye protection", "medical goggles"]
  },

  // Continue with other categories...
  // Shoe & Leg Protection
  {
    id: 301,
    name: "Shoe Covers",
    description: "Disposable plastic (LDPE) shoe covers.",
    detailedDescription: "Our disposable shoe covers provide effective protection against contamination and maintain hygiene standards in medical and clean room environments. Made from durable LDPE material with anti-slip options available.",
    category: "Shoe & Leg Protection",
    image: "/products/shoecover.avif",
    secondaryImage: "/products/shoecover-white.avif",
    featured: false,
    specs: ["LDPE Material", "Water Resistant", "Anti-Slip Option"],
    variants: [
      {
        productCode: "AP SC 01",
        productName: "LDPE Shoe Cover - Standard",
        packingPerBox: "100 pcs",
        gstPercentage: "18.00%",
        hsnCode: "39262090"
      },
      {
        productCode: "AP SC 02",
        productName: "LDPE Shoe Cover - Anti-Slip",
        packingPerBox: "100 pcs",
        gstPercentage: "18.00%",
        hsnCode: "39262090"
      }
    ],
    features: [
      "Waterproof LDPE material",
      "Elastic opening for secure fit",
      "Lightweight and comfortable",
      "Anti-slip sole option"
    ],
    applications: [
      "Operating rooms",
      "Clean rooms",
      "Food processing areas",
      "Laboratory environments"
    ],
    certifications: ["ISO 13485", "Food Grade"],
    slug: "shoe-covers",
    metaTitle: "Disposable Shoe Covers - Hygiene Protection | Acuron Products",
    metaDescription: "Disposable LDPE shoe covers for contamination control. Water-resistant with anti-slip options for medical and clean room use.",
    keywords: ["shoe covers", "disposable shoe covers", "LDPE shoe covers", "protective footwear"]
  },
  {
    id: 302,
    name: "PE Shoe Leggings",
    description: "Polyethylene shoe leggings for extended leg protection.",
    detailedDescription: "Our polyethylene shoe leggings provide extended protection covering both feet and lower legs. Ideal for procedures requiring comprehensive lower limb protection against fluids and contamination.",
    category: "Shoe & Leg Protection",
    image: "/products/pe-shoecover.webp",
    secondaryImage: "/products/pe-shoecover.webp",
    featured: false,
    specs: ["Polyethylene", "Knee-High", "Waterproof"],
    variants: [
      {
        productCode: "AP SL 01",
        productName: "PE Shoe Legging - Knee High",
        packingPerBox: "50 pairs",
        gstPercentage: "18.00%",
        hsnCode: "39262090"
      }
    ],
    features: [
      "Extended knee-high protection",
      "100% waterproof",
      "Secure tie closure",
      "Chemical resistant"
    ],
    applications: [
      "Surgical procedures",
      "Veterinary medicine",
      "Food processing",
      "Chemical handling"
    ],
    certifications: ["ISO 13485", "Chemical Resistant"],
    slug: "pe-shoe-leggings",
    metaTitle: "PE Shoe Leggings - Extended Leg Protection | Acuron Products",
    metaDescription: "Polyethylene shoe leggings providing knee-high protection. Waterproof and chemical resistant for comprehensive lower limb coverage.",
    keywords: ["shoe leggings", "leg protection", "polyethylene covers", "waterproof leggings"]
  },

  // Drapes, Linens & Underpads - Additional Products
  {
    id: 401,
    name: "Bedsheets & Pillow Covers",
    description: "Disposable nonwoven bedsheets and pillow covers for hygiene.",
    detailedDescription: "Our disposable bedsheets and pillow covers provide a hygienic barrier for patient care. Made from soft nonwoven fabric, these products ensure comfort while maintaining strict hygiene standards in healthcare facilities.",
    category: "Drapes, Linens & Underpads",
    image: "/products/bed-sheet.webp",
    secondaryImage: "/products/bed-sheet.webp",
    featured: false,
    specs: ["Nonwoven Fabric", "Hygienic", "Various Sizes"],
    variants: [
      {
        productCode: "AP BS 01",
        productName: "Disposable Bedsheet - Single",
        packingPerBox: "50 pcs",
        gstPercentage: "12.00%",
        hsnCode: "63079090"
      },
      {
        productCode: "AP PC 01",
        productName: "Disposable Pillow Cover",
        packingPerBox: "100 pcs",
        gstPercentage: "12.00%",
        hsnCode: "63079090"
      }
    ],
    features: [
      "Soft nonwoven material",
      "Hygienic single-use design",
      "Various sizes available",
      "Comfortable for patients"
    ],
    applications: [
      "Hospital patient care",
      "Long-term care facilities",
      "Emergency medical services",
      "Home healthcare"
    ],
    certifications: ["ISO 13485", "Hygienic Standards"],
    slug: "bedsheets-pillow-covers",
    metaTitle: "Disposable Bedsheets & Pillow Covers | Acuron Products",
    metaDescription: "Hygienic disposable bedsheets and pillow covers for patient care. Soft nonwoven fabric ensuring comfort and cleanliness.",
    keywords: ["disposable bedsheets", "pillow covers", "patient care", "hygienic bedding"]
  },

  // Medical Kits
  {
    id: 501,
    name: "PPE Kit",
    description: "Basic PPE kit for general protection.",
    detailedDescription: "Our comprehensive PPE kit provides essential personal protective equipment for healthcare workers. Each kit contains all necessary components to ensure safety and compliance with infection control protocols.",
    category: "Medical Kits",
    image: "/products/fullppe.png",
    secondaryImage: "/products/fullppe.png",
    featured: true,
    specs: ["Basic Coverage", "ISO Certified", "Cost-Effective"],
    variants: [
      {
        productCode: "AP PPE 01",
        productName: "Basic PPE Kit - Standard",
        packingPerBox: "25 kits",
        gstPercentage: "12.00%",
        hsnCode: "62101000"
      },
      {
        productCode: "AP PPE 02",
        productName: "Premium PPE Kit - Enhanced",
        packingPerBox: "20 kits",
        gstPercentage: "12.00%",
        hsnCode: "62101000"
      }
    ],
    features: [
      "Complete protection kit",
      "ISO certified components",
      "Cost-effective solution",
      "Easy to use packaging"
    ],
    applications: [
      "General medical procedures",
      "Patient care activities",
      "Healthcare facility protocols",
      "Emergency response"
    ],
    certifications: ["ISO 13485", "CE Mark", "Medical Device"],
    slug: "ppe-kit",
    metaTitle: "PPE Kit - Personal Protective Equipment | Acuron Products",
    metaDescription: "Comprehensive PPE kit with ISO certified components for healthcare worker protection. Complete personal protective equipment solution.",
    keywords: ["PPE kit", "personal protective equipment", "healthcare protection", "medical safety kit"]
  },

  {
    id: 502,
    name: "Surgeon's OT Kit",
    description: "Comprehensive kit for surgeons in the operating theatre.",
    detailedDescription: "Our Surgeon's OT Kit is specifically designed for operating theatre use, containing all essential items required for surgical procedures. Each component meets the highest standards of sterility and quality.",
    category: "Medical Kits",
    image: "/products/surgeonotkit.png",
    secondaryImage: "/products/surgeonotkit.png",
    featured: true,
    specs: ["Sterile Components", "OT Specific", "Premium Quality"],
    variants: [
      {
        productCode: "AP SOT 01",
        productName: "Standard Surgeon OT Kit",
        packingPerBox: "20 kits",
        gstPercentage: "12.00%",
        hsnCode: "90189090"
      },
      {
        productCode: "AP SOT 02",
        productName: "Premium Surgeon OT Kit",
        packingPerBox: "15 kits",
        gstPercentage: "12.00%",
        hsnCode: "90189090"
      }
    ],
    features: [
      "Complete surgical kit",
      "Sterile components",
      "Operating theatre specific",
      "Premium quality materials"
    ],
    applications: [
      "Surgical procedures",
      "Operating theatre use",
      "Sterile environments",
      "Medical surgery"
    ],
    certifications: ["ISO 13485", "CE Mark", "Sterile Certification"],
    slug: "surgeons-ot-kit",
    metaTitle: "Surgeon's OT Kit - Operating Theatre Kit | Acuron Products",
    metaDescription: "Comprehensive surgeon's operating theatre kit with sterile components. Premium quality surgical kit for operating room procedures.",
    keywords: ["surgeon kit", "OT kit", "operating theatre", "surgical kit", "sterile kit"]
  },

  // General Medical & Surgical Disposables
  {
    id: 601,
    name: "Skin Blade / Prep Razor",
    description: "Precision surgical prep razors with safety features.",
    detailedDescription: "Our surgical prep razors are designed for safe and effective hair removal before medical procedures. Featuring precision blades with safety guards, these razors ensure patient comfort and procedural safety.",
    category: "General Medical & Surgical Disposables",
    image: "/products/razor.png",
    secondaryImage: "/products/razor-box.png",
    featured: false,
    specs: ["Sterile", "Safety Guard", "Sharp Blade"],
    variants: [
      {
        productCode: "AP SR 01",
        productName: "Single Blade Prep Razor",
        packingPerBox: "100 pcs",
        gstPercentage: "12.00%",
        hsnCode: "82121000"
      },
      {
        productCode: "AP SR 02",
        productName: "Twin Blade Prep Razor",
        packingPerBox: "100 pcs",
        gstPercentage: "12.00%",
        hsnCode: "82121000"
      }
    ],
    features: [
      "Precision cutting blade",
      "Safety guard protection",
      "Ergonomic handle design",
      "Sterile packaging"
    ],
    applications: [
      "Pre-surgical preparation",
      "Medical procedures",
      "Patient care",
      "Hygiene protocols"
    ],
    certifications: ["ISO 13485", "CE Mark", "Medical Device"],
    slug: "skin-blade-prep-razor",
    metaTitle: "Skin Blade Prep Razor - Surgical Razors | Acuron Products",
    metaDescription: "Precision surgical prep razors with safety features for pre-operative hair removal. Sterile and safe for medical procedures.",
    keywords: ["surgical razor", "prep razor", "skin blade", "medical razor", "pre-operative"]
  },

  {
    id: 603,
    name: "Nitrile Gloves",
    description: "High-quality nitrile examination gloves.",
    detailedDescription: "Our nitrile examination gloves provide excellent barrier protection and tactile sensitivity. Made from high-quality nitrile rubber, these gloves are latex-free and suitable for users with latex allergies.",
    category: "General Medical & Surgical Disposables",
    image: "/products/nitrile-gloves.jpg",
    secondaryImage: "/products/nitrile-gloves.jpg",
    featured: true,
    specs: ["Latex-Free", "High Sensitivity", "Chemical Resistant"],
    variants: [
      {
        productCode: "AP NG 01",
        productName: "Nitrile Gloves - Small",
        packingPerBox: "100 pcs",
        gstPercentage: "12.00%",
        hsnCode: "40151900"
      },
      {
        productCode: "AP NG 02",
        productName: "Nitrile Gloves - Medium",
        packingPerBox: "100 pcs",
        gstPercentage: "12.00%",
        hsnCode: "40151900"
      },
      {
        productCode: "AP NG 03",
        productName: "Nitrile Gloves - Large",
        packingPerBox: "100 pcs",
        gstPercentage: "12.00%",
        hsnCode: "40151900"
      },
      {
        productCode: "AP NG 04",
        productName: "Nitrile Gloves - X-Large",
        packingPerBox: "100 pcs",
        gstPercentage: "12.00%",
        hsnCode: "40151900"
      }
    ],
    features: [
      "Latex-free material",
      "Superior puncture resistance",
      "Excellent tactile sensitivity",
      "Chemical resistant"
    ],
    applications: [
      "Medical examinations",
      "Laboratory procedures",
      "Dental procedures",
      "Food handling"
    ],
    certifications: ["ISO 13485", "CE Mark", "FDA Approved"],
    slug: "nitrile-gloves",
    metaTitle: "Nitrile Gloves - Medical Examination Gloves | Acuron Products",
    metaDescription: "High-quality latex-free nitrile examination gloves with superior puncture resistance and tactile sensitivity for medical use.",
    keywords: ["nitrile gloves", "medical gloves", "latex-free gloves", "examination gloves", "disposable gloves"]
  }
];

// Helper function to get product by slug
export function getProductBySlug(slug: string): Product | undefined {
  return allProducts.find(product => product.slug === slug);
}

// Helper function to get related products
export function getRelatedProducts(currentProduct: Product, limit: number = 4): Product[] {
  return allProducts
    .filter(product => 
      product.category === currentProduct.category && 
      product.id !== currentProduct.id
    )
    .slice(0, limit);
}

// Helper function to get all product slugs for static generation
export function getAllProductSlugs(): string[] {
  return allProducts.map(product => product.slug);
}
