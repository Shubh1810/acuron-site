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
    image: "/products/surgical-gown2.png",
    secondaryImage: "/products/surgical-gown2.png",
    featured: false,
    specs: ["Nonwoven Fabric", "Fluid Resistant", "Comfortable Fit"],
    variants: [
      {
        productCode: "AP SG 01",
        productName: "Nonwoven Gown 40 gsm",
        packingPerBox: "Ind. Pack",
        gstPercentage: "5.00%",
        hsnCode: "62101000"
      },
      {
        productCode: "AP SG L 01",
        productName: "LAMINATED Gown 20 + 15 gsm",
        packingPerBox: "Ind. Pack",
        gstPercentage: "5.00%",
        hsnCode: "62101000"
      },
      {
        productCode: "AP SG35 01",
        productName: "SMS Gown 35 gsm",
        packingPerBox: "Ind. Pack",
        gstPercentage: "5.00%",
        hsnCode: "62101000"
      },
      {
        productCode: "AP SG43 01",
        productName: "SMMS Gown 43 gsm",
        packingPerBox: "Ind. Pack",
        gstPercentage: "5.00%",
        hsnCode: "62101000"
      },
      {
        productCode: "AP SG43U01",
        productName: "SSMMS Gown (L) with Ultrasonic Stitching (ARAS) with Towel",
        packingPerBox: "Ind. Pack",
        gstPercentage: "5.00%",
        hsnCode: "62101000"
      },
      {
        productCode: "AP SGW 01",
        productName: "SMS WRAP AROUND Gown with Towel",
        packingPerBox: "Ind. Pack",
        gstPercentage: "5.00%",
        hsnCode: "62101000"
      },
      {
        productCode: "AP SGR4301",
        productName: "Reinforced Surgeon Gown 43 gsm Eco",
        packingPerBox: "Ind. Pack",
        gstPercentage: "5.00%",
        hsnCode: "62101000"
      },
      {
        productCode: "AP SGR50 01",
        productName: "Reinforced Surgeon Gown 50 gsm with Towel",
        packingPerBox: "Ind. Pack",
        gstPercentage: "5.00%",
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
  // Individual Surgical Gown variants as separate products
  {
    id: 1011,
    name: "Nonwoven Gown 40 gsm",
    description: "Standard nonwoven surgical gown 40 gsm.",
    detailedDescription: "Nonwoven surgical gown made from high-quality fabric offering fluid resistance and comfort for routine procedures.",
    category: "Protective Apparel",
    image: "/products/surgical-gown.jpeg",
    secondaryImage: "/products/surgical-gown.jpg",
    featured: false,
    specs: ["Nonwoven Fabric", "40 gsm", "Fluid Resistant"],
    variants: [],
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
    slug: "surgical-gown-nonwoven-40-gsm",
    metaTitle: "Nonwoven Surgical Gown 40 gsm | Acuron Products",
    metaDescription: "Nonwoven surgical gown 40 gsm with fluid resistance and comfort for medical procedures.",
    keywords: ["surgical gown", "nonwoven gown", "40 gsm", "AP SG 01"]
  },
  {
    id: 1012,
    name: "LAMINATED Gown 20 + 15 gsm",
    description: "Laminated surgical gown 20 + 15 gsm.",
    detailedDescription: "Laminated gown offering enhanced barrier performance with comfortable wear for extended procedures.",
    category: "Protective Apparel",
    image: "/products/surgical-gown.jpeg",
    secondaryImage: "/products/surgical-gown.jpg",
    featured: false,
    specs: ["Laminated", "20 + 15 gsm", "Fluid Resistant"],
    variants: [],
    features: [
      "Enhanced barrier protection",
      "Breathable laminated fabric",
      "Tie-back closure",
      "Reinforced seams"
    ],
    applications: ["Surgical procedures", "Operating room use"],
    certifications: ["ISO 13485", "CE Mark"],
    slug: "surgical-gown-laminated-20-15-gsm",
    metaTitle: "Laminated Surgical Gown 20 + 15 gsm | Acuron Products",
    metaDescription: "Laminated surgical gown 20 + 15 gsm providing enhanced barrier performance.",
    keywords: ["surgical gown", "laminated gown", "AP SG L 01"]
  },
  {
    id: 1013,
    name: "SMS Gown 35 gsm",
    description: "SMS surgical gown 35 gsm.",
    detailedDescription: "SMS 35 gsm gown delivering reliable protection and comfort for clinical use.",
    category: "Protective Apparel",
    image: "/products/surgical-gown.jpeg",
    secondaryImage: "/products/surgical-gown.jpg",
    featured: false,
    specs: ["SMS Fabric", "35 gsm", "Fluid Resistant"],
    variants: [],
    features: ["Barrier protection", "Comfortable fit"],
    applications: ["Surgical procedures", "Medical examinations"],
    certifications: ["ISO 13485", "CE Mark"],
    slug: "surgical-gown-sms-35-gsm",
    metaTitle: "SMS Surgical Gown 35 gsm | Acuron Products",
    metaDescription: "SMS surgical gown 35 gsm offering reliable barrier protection and comfort.",
    keywords: ["surgical gown", "sms gown", "AP SG35 01"]
  },
  {
    id: 1014,
    name: "SMMS Gown 43 gsm",
    description: "SMMS surgical gown 43 gsm.",
    detailedDescription: "SMMS 43 gsm gown designed for superior fluid resistance with breathability.",
    category: "Protective Apparel",
    image: "/products/surgical-gown.jpeg",
    secondaryImage: "/products/surgical-gown.jpg",
    featured: false,
    specs: ["SMMS Fabric", "43 gsm", "Fluid Resistant"],
    variants: [],
    features: ["Superior barrier", "Breathable"],
    applications: ["OR procedures", "Clinical use"],
    certifications: ["ISO 13485", "CE Mark"],
    slug: "surgical-gown-smms-43-gsm",
    metaTitle: "SMMS Surgical Gown 43 gsm | Acuron Products",
    metaDescription: "SMMS surgical gown 43 gsm with superior barrier and comfort.",
    keywords: ["surgical gown", "smms gown", "AP SG43 01"]
  },
  {
    id: 1015,
    name: "SSMMS Gown (L) Ultrasonic (ARAS) with Towel",
    description: "SSMMS (L) gown with ultrasonic stitching and towel.",
    detailedDescription: "Large SSMMS gown with ultrasonic stitching (ARAS) including towel for high-demand procedures.",
    category: "Protective Apparel",
    image: "/products/surgical-gown.jpeg",
    secondaryImage: "/products/surgical-gown.jpg",
    featured: false,
    specs: ["SSMMS", "Ultrasonic Stitching", "Includes Towel"],
    variants: [],
    features: ["Reinforced design", "Durable seams"],
    applications: ["Surgical procedures"],
    certifications: ["ISO 13485", "CE Mark"],
    slug: "ssmms-gown-ultrasonic-aras-with-towel",
    metaTitle: "SSMMS Gown Ultrasonic with Towel | Acuron Products",
    metaDescription: "SSMMS gown with ultrasonic stitching (ARAS) and towel for enhanced performance.",
    keywords: ["ssmms gown", "ultrasonic", "AP SG43U01"]
  },
  {
    id: 1016,
    name: "SMS Wrap Around Gown with Towel",
    description: "SMS wrap around gown including towel.",
    detailedDescription: "SMS wrap-around surgical gown with included towel for convenience and protection.",
    category: "Protective Apparel",
    image: "/products/surgical-gown.jpeg",
    secondaryImage: "/products/surgical-gown.jpg",
    featured: false,
    specs: ["SMS", "Wrap Around", "Includes Towel"],
    variants: [],
    features: ["Easy wrap design", "Comfortable"],
    applications: ["Operating room"],
    certifications: ["ISO 13485", "CE Mark"],
    slug: "sms-wrap-around-gown-with-towel",
    metaTitle: "SMS Wrap Around Surgical Gown with Towel | Acuron Products",
    metaDescription: "SMS wrap around surgical gown including towel for operating room procedures.",
    keywords: ["sms gown", "wrap around", "AP SGW 01"]
  },
  {
    id: 1017,
    name: "Reinforced Surgeon Gown 43 gsm Eco",
    description: "Reinforced surgeon gown 43 gsm eco.",
    detailedDescription: "Reinforced surgeon gown offering additional protection at critical zones, 43 gsm eco variant.",
    category: "Protective Apparel",
    image: "/products/surgical-gown.jpeg",
    secondaryImage: "/products/surgical-gown.jpg",
    featured: false,
    specs: ["Reinforced", "43 gsm", "Eco"],
    variants: [],
    features: ["Reinforced critical zones", "Durable"],
    applications: ["Surgical procedures"],
    certifications: ["ISO 13485", "CE Mark"],
    slug: "reinforced-surgeon-gown-43-gsm-eco",
    metaTitle: "Reinforced Surgeon Gown 43 gsm Eco | Acuron Products",
    metaDescription: "Reinforced surgeon gown 43 gsm eco variant for added protection.",
    keywords: ["reinforced gown", "surgeon gown", "AP SGR4301"]
  },
  {
    id: 1018,
    name: "Reinforced Surgeon Gown 50 gsm with Towel",
    description: "Reinforced surgeon gown 50 gsm with towel.",
    detailedDescription: "Premium reinforced surgeon gown 50 gsm including towel for demanding procedures.",
    category: "Protective Apparel",
    image: "/products/surgical-gown.jpeg",
    secondaryImage: "/products/surgical-gown.jpg",
    featured: false,
    specs: ["Reinforced", "50 gsm", "Includes Towel"],
    variants: [],
    features: ["High protection", "Comfortable"],
    applications: ["Operating theatre"],
    certifications: ["ISO 13485", "CE Mark"],
    slug: "reinforced-surgeon-gown-50-gsm-with-towel",
    metaTitle: "Reinforced Surgeon Gown 50 gsm with Towel | Acuron Products",
    metaDescription: "Reinforced surgeon gown 50 gsm including towel for premium protection.",
    keywords: ["reinforced gown", "surgeon gown", "AP SGR50 01"]
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
        productName: "Patient Gown (Half Sleeve) NON STERILE",
        packingPerBox: "Ind. Pack",
        gstPercentage: "5.00%",
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
    image: "/products/coverall.jpg",
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
  // Labcoat and Scrub Suit as separate medical apparel
  {
    id: 1041,
    name: "Labcoat 40gsm Nonwoven",
    description: "Nonwoven 40 gsm labcoat.",
    detailedDescription: "Lightweight 40 gsm nonwoven labcoat suitable for labs and general medical use.",
    category: "Protective Apparel",
    image: "/products/medcoverall.jpg",
    secondaryImage: "/products/coverall-2.jpg",
    featured: false,
    specs: ["Nonwoven", "40 gsm", "Knee-Length"],
    variants: [
      { productCode: "AP LC 01", productName: "Labcoat 40gsm Nonwoven", packingPerBox: "Ind. Pack", gstPercentage: "5.00%", hsnCode: "62101000" }
    ],
    features: ["Lightweight", "Breathable", "Hygienic"],
    applications: ["Laboratory work", "General medical use"],
    certifications: ["ISO 13485"],
    slug: "labcoat-40gsm-nonwoven",
    metaTitle: "Labcoat 40gsm Nonwoven | Acuron Products",
    metaDescription: "Nonwoven labcoat 40 gsm for laboratory and general medical use.",
    keywords: ["labcoat", "nonwoven", "AP LC 01"]
  },
  {
    id: 1043,
    name: "Labcoat & Pant 40gsm Nonwoven",
    description: "Nonwoven 40 gsm labcoat & pant set.",
    detailedDescription: "Labcoat and pant set made from 40 gsm nonwoven fabric for hygienic protection.",
    category: "Protective Apparel",
    image: "/products/gown.jpg",
    secondaryImage: "/products/coverall-2.jpg",
    featured: false,
    specs: ["Nonwoven", "40 gsm", "Two-piece set"],
    variants: [
      { productCode: "AP LC 03", productName: "Labcoat & Pant 40gsm Nonwoven", packingPerBox: "Ind. Pack", gstPercentage: "5.00%", hsnCode: "62101000" }
    ],
    features: ["Comfortable", "Breathable"],
    applications: ["Laboratory work", "Clinical environments"],
    certifications: ["ISO 13485"],
    slug: "labcoat-pant-40gsm-nonwoven",
    metaTitle: "Labcoat & Pant 40gsm Nonwoven | Acuron Products",
    metaDescription: "Nonwoven 40 gsm labcoat and pant set for clinical and lab use.",
    keywords: ["labcoat", "pant", "nonwoven", "AP LC 03"]
  },
  {
    id: 1045,
    name: "Scrub Suit - Shirt & Pant SSMMS",
    description: "Disposable SSMMS scrub suit (shirt & pant).",
    detailedDescription: "Disposable scrub suit made from SSMMS fabric offering comfort and protection for medical staff.",
    category: "Protective Apparel",
    image: "/products/patgown.JPEG",
    secondaryImage: "/products/coverall-2.jpg",
    featured: false,
    specs: ["SSMMS", "Two-piece", "Breathable"],
    variants: [
      { productCode: "AP SS 01", productName: "Scrub Suit - Shirt & Pant SSMMS", packingPerBox: "Ind. Pack", gstPercentage: "5.00%", hsnCode: "62101000" }
    ],
    features: ["Comfortable", "Hygienic"],
    applications: ["Operating rooms", "General ward"],
    certifications: ["ISO 13485"],
    slug: "scrub-suit-ssmms",
    metaTitle: "Scrub Suit - Shirt & Pant SSMMS | Acuron Products",
    metaDescription: "Disposable SSMMS scrub suit (shirt & pant) for medical staff.",
    keywords: ["scrub suit", "ssmms", "AP SS 01"]
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
        productName: "N95 - BULK with BOX (Ear Loop)",
        packingPerBox: "50 pcs",
        gstPercentage: "5.00%",
        hsnCode: "63079090"
      },
      {
        productCode: "AP N95 02",
        productName: "N95 - Ind. Pack (Ear Loop) - Ind. Pack",
        packingPerBox: "50 pcs",
        gstPercentage: "5.00%",
        hsnCode: "63079090"
      },
      {
        productCode: "AP N95 03",
        productName: "N95 - Ind. Pack (Head Loop) - Ind. Pack",
        packingPerBox: "50 pcs",
        gstPercentage: "5.00%",
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
        productName: "Bouffant Cap 18 inch (Blue)",
        packingPerBox: "100 pcs",
        gstPercentage: "5.00%",
        hsnCode: "63079090"
      },
      {
        productCode: "AP BC 02",
        productName: "Bouffant Cap 18 inch (Blue) - Box Pack",
        packingPerBox: "100 pcs",
        gstPercentage: "5.00%",
        hsnCode: "63079090"
      },
      {
        productCode: "AP BC 03",
        productName: "Bouffant Cap 21 inch (Blue) - MOQ 50,000 pcs",
        packingPerBox: "100 pcs",
        gstPercentage: "5.00%",
        hsnCode: "63079090"
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
        productName: "Surgeon Cap (Bulk Pack)",
        packingPerBox: "100 pcs",
        gstPercentage: "5.00%",
        hsnCode: "62104090"
      },
      {
        productCode: "AP SC 02",
        productName: "Surgeon Cap - Box Pack",
        packingPerBox: "50 pcs",
        gstPercentage: "5.00%",
        hsnCode: "62104090"
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
  {
    id: 206,
    name: "Hood Cap / Monkey Cap",
    description: "25 gsm hood cap for comprehensive head coverage.",
    detailedDescription: "Our hood cap (monkey cap) provides comprehensive head and neck coverage for enhanced protection in medical and industrial environments. Made from 25 gsm nonwoven material for comfort and breathability.",
    category: "Masks & Headwear",
    image: "/products/cap.jpeg",
    secondaryImage: "/products/cap-display.png",
    featured: false,
    specs: ["25 GSM", "Full Coverage", "Nonwoven"],
    variants: [
      {
        productCode: "AP HC 01",
        productName: "Hood Cap / Monkey Cap 25 gsm",
        packingPerBox: "50 pcs",
        gstPercentage: "5.00%",
        hsnCode: "63079090"
      }
    ],
    features: [
      "Complete head and neck coverage",
      "25 gsm lightweight material",
      "Breathable nonwoven fabric",
      "Secure fit design"
    ],
    applications: [
      "Medical procedures",
      "Food processing",
      "Clean room environments",
      "Industrial applications"
    ],
    certifications: ["ISO 13485", "Food Grade"],
    slug: "hood-cap-monkey-cap",
    metaTitle: "Hood Cap Monkey Cap - Full Head Coverage | Acuron Products",
    metaDescription: "25 gsm hood cap (monkey cap) for comprehensive head and neck coverage in medical and industrial environments.",
    keywords: ["hood cap", "monkey cap", "head coverage", "medical headwear", "25 gsm"]
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
  
  // Individual Bedsheet and Set products
  {
    id: 405,
    name: "Nonwoven Bedsheet 40 gsm (120 x 210) cm",
    description: "Disposable nonwoven bedsheet 40 gsm, 120 x 210 cm.",
    detailedDescription: "Soft nonwoven bedsheet offering hygienic protection for patient care.",
    category: "Drapes, Linens & Underpads",
    image: "/products/bed-sheet.webp",
    secondaryImage: "/products/bed-sheet.webp",
    featured: false,
    specs: ["Nonwoven", "40 gsm", "120 x 210 cm"],
    variants: [ { productCode: "AP BS 01", productName: "Nonwoven Bedsheet 40 gsm (120 x 210) cm", packingPerBox: "Ind. Pack", gstPercentage: "5.00%", hsnCode: "63041940" } ],
    features: ["Soft nonwoven material", "Hygienic single-use design"],
    applications: ["Hospital patient care", "Long-term care facilities"],
    certifications: ["ISO 13485"],
    slug: "nonwoven-bedsheet-40gsm-120x210",
    metaTitle: "Nonwoven Bedsheet 40 gsm (120x210 cm) | Acuron Products",
    metaDescription: "Disposable nonwoven bedsheet 40 gsm, size 120 x 210 cm.",
    keywords: ["bedsheet", "nonwoven", "AP BS 01"]
  },
  {
    id: 406,
    name: "SMS Bedsheet 35 gsm (160 x 225) cm",
    description: "Disposable SMS bedsheet 35 gsm, 160 x 225 cm.",
    detailedDescription: "SMS bedsheet providing barrier protection and comfort in clinical environments.",
    category: "Drapes, Linens & Underpads",
    image: "/products/bed-sheet.webp",
    secondaryImage: "/products/bed-sheet.webp",
    featured: false,
    specs: ["SMS", "35 gsm", "160 x 225 cm"],
    variants: [ { productCode: "AP BS 02", productName: "SMS Bedsheet 35 gsm (160 x 225) cm", packingPerBox: "Ind. Pack", gstPercentage: "5.00%", hsnCode: "63041940" } ],
    features: ["Hygienic single-use design", "Barrier protection"],
    applications: ["Hospitals", "Clinics"],
    certifications: ["ISO 13485"],
    slug: "sms-bedsheet-35gsm-160x225",
    metaTitle: "SMS Bedsheet 35 gsm (160x225 cm) | Acuron Products",
    metaDescription: "Disposable SMS bedsheet 35 gsm, size 160 x 225 cm.",
    keywords: ["bedsheet", "sms", "AP BS 02"]
  },
  {
    id: 407,
    name: "Nonwoven Bedsheet & Pillow Cover Set (120 x 210 cm)",
    description: "Nonwoven bedsheet and pillow cover set, 120 x 210 cm.",
    detailedDescription: "Convenient nonwoven set for hygienic bedding in healthcare settings.",
    category: "Drapes, Linens & Underpads",
    image: "/products/bed-sheet.webp",
    secondaryImage: "/products/bed-sheet.webp",
    featured: false,
    specs: ["Nonwoven", "Sheet + Pillow Cover", "120 x 210 cm"],
    variants: [ { productCode: "AP BS P 01", productName: "Nonwoven Bedsheet & Pillow Cover Set (120 x 210 cm)", packingPerBox: "Ind. Pack", gstPercentage: "5.00%", hsnCode: "63041940" } ],
    features: ["Soft material", "Hygienic"],
    applications: ["Patient care", "Home healthcare"],
    certifications: ["ISO 13485"],
    slug: "nonwoven-bedsheet-pillow-cover-set-120x210",
    metaTitle: "Nonwoven Bedsheet & Pillow Cover Set (120x210 cm) | Acuron Products",
    metaDescription: "Nonwoven bedsheet and pillow cover set, size 120 x 210 cm.",
    keywords: ["bedsheet set", "nonwoven", "AP BS P 01"]
  },
  {
    id: 408,
    name: "SMS Bedsheet & Pillow Cover Set 35 gsm (160 x 225) cm",
    description: "SMS bedsheet & pillow cover set 35 gsm, 160 x 225 cm.",
    detailedDescription: "SMS set combining bedsheet and pillow cover for clinical usage.",
    category: "Drapes, Linens & Underpads",
    image: "/products/bed-sheet.webp",
    secondaryImage: "/products/bed-sheet.webp",
    featured: false,
    specs: ["SMS", "Sheet + Pillow Cover", "160 x 225 cm"],
    variants: [ { productCode: "AP BS P 02", productName: "SMS Bedsheet & Pillow Cover Set 35 gsm (160 x 225) cm", packingPerBox: "Ind. Pack", gstPercentage: "5.00%", hsnCode: "63041940" } ],
    features: ["Barrier protection", "Comfortable"],
    applications: ["Hospitals", "Clinics"],
    certifications: ["ISO 13485"],
    slug: "sms-bedsheet-pillow-cover-set-35gsm-160x225",
    metaTitle: "SMS Bedsheet & Pillow Cover Set 35 gsm (160x225 cm) | Acuron Products",
    metaDescription: "SMS bedsheet & pillow cover set 35 gsm, size 160 x 225 cm.",
    keywords: ["bedsheet set", "sms", "AP BS P 02"]
  },
  // Surgery Drapes & Packs from catalog image
  {
    id: 409,
    name: "CABG Pack (Cardiovascular-Thoracic)",
    description: "Comprehensive CABG surgical drape pack.",
    detailedDescription: "CABG Pack includes: Square Sheet, Large Sheet, Towel-02pcs, Bottom Drape Sheet, Drape Sheet with Adhesive, Wing Drape with Towel, Iodophor Incise, Trolley Cover, Towel, Basin Stand Cover, Waist Band, Saddle Bag, Disposable Bag, Tubing Organizer Small-02pcs, Tubing Organizer Big; Wraparound Gown with Hand Towel Medium, Wraparound Gown with Hand Towel Large - 02 pcs.",
    category: "Drapes, Linens & Underpads",
    image: "/cabg-drape.png",
    secondaryImage: "/products/plain-sheet.jpg",
    featured: false,
    specs: ["OT Pack", "Cardiovascular-Thoracic"],
    variants: [ { productCode: "AP 999", productName: "CABG Pack", packingPerBox: "1 KIT", gstPercentage: "12.00%", hsnCode: "63079090" } ],
    features: ["Comprehensive pack", "Multiple components"],
    applications: ["Cardiovascular-Thoracic surgery"],
    certifications: ["ISO 13485"],
    slug: "cabg-pack-ap-999",
    metaTitle: "CABG Pack - Cardiovascular-Thoracic Drapes & Pack | Acuron Products",
    metaDescription: "Comprehensive CABG surgical drape pack for cardiovascular-thoracic procedures.",
    keywords: ["drape pack", "CABG", "AP 999"]
  },
  {
    id: 410,
    name: "TURP Drape (Adhesive) 160x200 cm",
    description: "TURP drape with adhesive area 24x17 cm with 3 cm condom catheter.",
    detailedDescription: "Transurethral Resection of Prostate (TURP) drape size 160x200 cm with adhesive area 24x17 cm and 3 cm condom catheter.",
    category: "Drapes, Linens & Underpads",
    image: "/turp-drape.png",
    secondaryImage: "/products/plain-sheet.jpg",
    featured: false,
    specs: ["160x200 cm", "Adhesive area 24x17 cm"],
    variants: [ { productCode: "AP 507", productName: "TURP Drape Set", packingPerBox: "1 KIT", gstPercentage: "5.00%", hsnCode: "63079090" } ],
    features: ["Adhesive incise", "Included catheter"],
    applications: ["Urology procedures"],
    certifications: ["ISO 13485"],
    slug: "turp-drape-160x200-ap-507",
    metaTitle: "TURP Drape 160x200 cm (Adhesive) | Acuron Products",
    metaDescription: "TURP drape set 160x200 cm with adhesive area and condom catheter.",
    keywords: ["TURP drape", "urology", "AP 507"]
  },
  {
    id: 411,
    name: "On/Off Kit for Dialysis",
    description: "Dialysis On/Off kit with swabs, balls, towels, and SMS sheet.",
    detailedDescription: "On/Off Kit for Dialysis includes: Gauze Swabs-02 pcs, Cotton Balls-03 pcs, Arm Rest Towel, Tissue Towel, SMS Sheet, Pouch.",
    category: "Drapes, Linens & Underpads",
    image: "/dialysis-on-off-kit.jpg",
    secondaryImage: "/products/plain-sheet.jpg",
    featured: false,
    specs: ["Dialysis kit", "Single-use"],
    variants: [ { productCode: "AP 5174", productName: "On/Off Kit for Dialysis", packingPerBox: "1 KIT", gstPercentage: "5.00%", hsnCode: "90189099" } ],
    features: ["Convenient kit", "Procedure-ready"],
    applications: ["Dialysis"],
    certifications: ["ISO 13485"],
    slug: "dialysis-on-off-kit-ap-5174",
    metaTitle: "On/Off Kit for Dialysis | Acuron Products",
    metaDescription: "Dialysis On/Off kit with swabs, cotton balls, towels, SMS sheet, and pouch.",
    keywords: ["dialysis kit", "AP 5174"]
  },
  {
    id: 412,
    name: "PCNL Drape 160x300 cm (Incise 20x25 cm with Funnel)",
    description: "PCNL drape with 20x25 cm incise and drainage funnel.",
    detailedDescription: "Percutaneous Nephrolithotomy (PCNL) drape size 160x300 cm, incise area 20x25 cm with drainage funnel.",
    category: "Drapes, Linens & Underpads",
    image: "/PCNL-Drape.webp",
    secondaryImage: "/products/plain-sheet.jpg",
    featured: false,
    specs: ["160x300 cm", "Incise 20x25 cm", "Drainage funnel"],
    variants: [ { productCode: "AP 913", productName: "PCNL Drape Set", packingPerBox: "1 KIT", gstPercentage: "5.00%", hsnCode: "63079090" } ],
    features: ["Incise area", "Drainage funnel"],
    applications: ["Urology procedures"],
    certifications: ["ISO 13485"],
    slug: "pcnl-drape-160x300-ap-913",
    metaTitle: "PCNL Drape 160x300 cm with Incise and Funnel | Acuron Products",
    metaDescription: "PCNL drape set 160x300 cm with 20x25 cm incise and drainage funnel.",
    keywords: ["PCNL drape", "urology", "AP 913"]
  },
  // Additional Orthopedic and Extremity Drapes
  {
    id: 413,
    name: "Leg U Drape",
    description: "Leg U-cut surgical drape.",
    detailedDescription: "Leg U Drape, size 160 x 200 cm with U Cut 70 x 15 cm for optimized limb isolation.",
    category: "Drapes, Linens & Underpads",
    image: "/legu.png",
    secondaryImage: "/legu.png",
    featured: false,
    specs: ["160 x 200 cm", "U Cut 70 x 15 cm"],
    variants: [ { productCode: "AP DR ULEG 01", productName: "Leg U Drape 160x200 cm, U Cut 70x15 cm", packingPerBox: "Ind. Pack", gstPercentage: "5.00%", hsnCode: "63079090" } ],
    features: ["U-cut aperture", "Barrier protection"],
    applications: ["Orthopedic procedures", "Extremity draping"],
    certifications: ["ISO 13485", "CE Mark"],
    slug: "leg-u-drape-160x200-u70x15",
    metaTitle: "Leg U Drape 160x200 cm (U Cut 70x15 cm) | Acuron Products",
    metaDescription: "Leg U Drape with U cut 70x15 cm, size 160x200 cm for orthopedic extremity procedures.",
    keywords: ["leg drape", "u cut drape", "orthopedic drape"]
  },
  {
    id: 414,
    name: "Arm U Drape",
    description: "Arm U-cut surgical drape.",
    detailedDescription: "Arm U Drape, size 150 x 160 cm with U Cut 50 x 12 cm for upper limb procedures.",
    category: "Drapes, Linens & Underpads",
    image: "/legu.png",
    secondaryImage: "/legu.png",
    featured: false,
    specs: ["150 x 160 cm", "U Cut 50 x 12 cm"],
    variants: [ { productCode: "AP DR UARM 01", productName: "Arm U Drape 150x160 cm, U Cut 50x12 cm", packingPerBox: "Ind. Pack", gstPercentage: "5.00%", hsnCode: "63079090" } ],
    features: ["U-cut aperture", "Barrier protection"],
    applications: ["Orthopedic procedures", "Upper extremity draping"],
    certifications: ["ISO 13485", "CE Mark"],
    slug: "arm-u-drape-150x160-u50x12",
    metaTitle: "Arm U Drape 150x160 cm (U Cut 50x12 cm) | Acuron Products",
    metaDescription: "Arm U Drape with U cut 50x12 cm, size 150x160 cm for upper limb procedures.",
    keywords: ["arm drape", "u cut drape", "orthopedic drape"]
  },
  {
    id: 415,
    name: "Leg O Drape",
    description: "Leg O-cut surgical drape.",
    detailedDescription: "Leg O Drape, size 150 x 200 cm with elastic aperture 12 cm for secure seal around limb.",
    category: "Drapes, Linens & Underpads",
    image: "/products/lego.png",
    secondaryImage: "/products/plain-sheet.jpg",
    featured: false,
    specs: ["150 x 200 cm", "Elastic Aperture 12 cm"],
    variants: [ { productCode: "AP DR OLEG 01", productName: "Leg O Drape 150x200 cm, Elastic Aperture 12 cm", packingPerBox: "Ind. Pack", gstPercentage: "5.00%", hsnCode: "63079090" } ],
    features: ["Elastic aperture", "Fluid control"],
    applications: ["Orthopedic procedures", "Extremity draping"],
    certifications: ["ISO 13485", "CE Mark"],
    slug: "leg-o-drape-150x200-elastic-12",
    metaTitle: "Leg O Drape 150x200 cm (Elastic Aperture 12 cm) | Acuron Products",
    metaDescription: "Leg O Drape with elastic aperture 12 cm, size 150x200 cm for orthopedic extremity procedures.",
    keywords: ["leg drape", "o drape", "elastic aperture drape"]
  },
  {
    id: 416,
    name: "Arm O Drape",
    description: "Arm O-cut surgical drape.",
    detailedDescription: "Arm O Drape, size 150 x 150 cm with elastic aperture 8 cm for secure seal around upper limb.",
    category: "Drapes, Linens & Underpads",
    image: "/products/lego.png",
    secondaryImage: "/products/lego.png",
    featured: false,
    specs: ["150 x 150 cm", "Elastic Aperture 8 cm"],
    variants: [ { productCode: "AP DR OARM 01", productName: "Arm O Drape 150x150 cm, Elastic Aperture 8 cm", packingPerBox: "Ind. Pack", gstPercentage: "5.00%", hsnCode: "63079090" } ],
    features: ["Elastic aperture", "Barrier protection"],
    applications: ["Orthopedic procedures", "Upper extremity draping"],
    certifications: ["ISO 13485", "CE Mark"],
    slug: "arm-o-drape-150x150-elastic-8",
    metaTitle: "Arm O Drape 150x150 cm (Elastic Aperture 8 cm) | Acuron Products",
    metaDescription: "Arm O Drape with elastic aperture 8 cm, size 150x150 cm for upper extremity procedures.",
    keywords: ["arm drape", "o drape", "elastic aperture drape"]
  },
  {
    id: 417,
    name: "TKR Drape",
    description: "Total knee replacement drape.",
    detailedDescription: "TKR Drape sized 355 x 190 x 260 cm designed for total knee replacement procedures with fluid control zones.",
    category: "Drapes, Linens & Underpads",
    image: "/products/trk.png",
    secondaryImage: "/products/trk.png",
    featured: false,
    specs: ["355 x 190 x 260 cm"],
    variants: [ { productCode: "AP DR TKR 01", productName: "TKR Drape 355x190x260 cm", packingPerBox: "Ind. Pack", gstPercentage: "5.00%", hsnCode: "63079090" } ],
    features: ["Fluid control", "Procedure specific"],
    applications: ["Orthopedic surgery", "TKR"],
    certifications: ["ISO 13485", "CE Mark"],
    slug: "tkr-drape-355x190x260",
    metaTitle: "TKR Drape 355x190x260 cm | Acuron Products",
    metaDescription: "TKR drape sized 355x190x260 cm for total knee replacement procedures.",
    keywords: ["TKR drape", "knee replacement drape"]
  },
  {
    id: 418,
    name: "THR Drape",
    description: "Total hip replacement drape.",
    detailedDescription: "THR Drape sized 355 x 190 x 260 cm designed for total hip replacement procedures with integrated fluid collection.",
    category: "Drapes, Linens & Underpads",
    image: "/products/hipu.png",
    secondaryImage: "/products/hipu.png",
    featured: false,
    specs: ["355 x 190 x 260 cm"],
    variants: [ { productCode: "AP DR THR 01", productName: "THR Drape 355x190x260 cm", packingPerBox: "Ind. Pack", gstPercentage: "5.00%", hsnCode: "63079090" } ],
    features: ["Fluid control", "Procedure specific"],
    applications: ["Orthopedic surgery", "THR"],
    certifications: ["ISO 13485", "CE Mark"],
    slug: "thr-drape-355x190x260",
    metaTitle: "THR Drape 355x190x260 cm | Acuron Products",
    metaDescription: "THR drape sized 355x190x260 cm for total hip replacement procedures.",
    keywords: ["THR drape", "hip replacement drape"]
  },
  {
    id: 419,
    name: "Arthroscopy Drape",
    description: "Arthroscopy drape with drainage funnel.",
    detailedDescription: "Arthroscopy Drape, size 150 x 300 cm with drainage funnel to manage irrigation fluids.",
    category: "Drapes, Linens & Underpads",
    image: "/anthroscopy.jpg",
    secondaryImage: "/anthroscopy.jpg",
    featured: false,
    specs: ["150 x 300 cm", "Drainage Funnel"],
    variants: [ { productCode: "AP DR AR 01", productName: "Arthroscopy Drape 150x300 cm with Drainage Funnel", packingPerBox: "Ind. Pack", gstPercentage: "5.00%", hsnCode: "63079090" } ],
    features: ["Drainage funnel", "Fluid control"],
    applications: ["Arthroscopy"],
    certifications: ["ISO 13485", "CE Mark"],
    slug: "arthroscopy-drape-150x300-funnel",
    metaTitle: "Arthroscopy Drape 150x300 cm with Drainage Funnel | Acuron Products",
    metaDescription: "Arthroscopy drape 150x300 cm with integrated drainage funnel for irrigation fluid management.",
    keywords: ["arthroscopy drape", "funnel drape"]
  },
  {
    id: 420,
    name: "Universal Extremity Drape",
    description: "Universal extremity surgical drape.",
    detailedDescription: "Universal Extremity Drape sized 300 x 195 cm suitable for a variety of limb procedures.",
    category: "Drapes, Linens & Underpads",
    image: "/universaldrape.png",
    secondaryImage: "/products/plain-sheet.jpg",
    featured: false,
    specs: ["300 x 195 cm"],
    variants: [ { productCode: "AP DR UED 01", productName: "Universal Extremity Drape 300x195 cm", packingPerBox: "Ind. Pack", gstPercentage: "5.00%", hsnCode: "63079090" } ],
    features: ["Versatile coverage", "Barrier protection"],
    applications: ["Orthopedic procedures", "Extremity draping"],
    certifications: ["ISO 13485", "CE Mark"],
    slug: "universal-extremity-drape-300x195",
    metaTitle: "Universal Extremity Drape 300x195 cm | Acuron Products",
    metaDescription: "Universal extremity drape sized 300x195 cm for orthopedic limb procedures.",
    keywords: ["extremity drape", "universal drape"]
  },
  {
    id: 4030,
    name: "Sterilization Wraps",
    description: "Sterilization wraps in multiple sizes, 35 gsm.",
    detailedDescription: "High-quality 35 gsm sterilization wraps available in a range of sizes for instrument and tray wrapping.",
    category: "Drapes, Linens & Underpads",
    image: "/products/plain-sheet.jpg",
    secondaryImage: "/products/plain-sheet.jpg",
    featured: false,
    specs: ["35 gsm", "Multiple sizes", "Medical grade"],
    variants: [
      { productCode: "AP 028 E", productName: "Sterilization Wraps, Size: 38x38cm, 35gsm", packingPerBox: "100 pcs", gstPercentage: "5.00%", hsnCode: "63079090" },
      { productCode: "AP 029 E", productName: "Sterilization Wraps, Size: 50x50cm, 35gsm", packingPerBox: "100 pcs", gstPercentage: "5.00%", hsnCode: "63079090" },
      { productCode: "AP 030 E", productName: "Sterilization Wraps, Size: 61x61cm, 35gsm", packingPerBox: "50 pcs", gstPercentage: "5.00%", hsnCode: "63079090" },
      { productCode: "AP 031 E", productName: "Sterilization Wraps, Size: 76x76cm, 35gsm", packingPerBox: "50 pcs", gstPercentage: "5.00%", hsnCode: "63079090" },
      { productCode: "AP 032 E", productName: "Sterilization Wraps, Size: 91x91cm, 35gsm", packingPerBox: "50 pcs", gstPercentage: "5.00%", hsnCode: "63079090" },
      { productCode: "AP 033 E", productName: "Sterilization Wraps, Size: 101x101cm, 35gsm", packingPerBox: "20 pcs", gstPercentage: "5.00%", hsnCode: "63079090" },
      { productCode: "AP 034 E", productName: "Sterilization Wraps, Size: 121x121cm, 35gsm", packingPerBox: "20 pcs", gstPercentage: "5.00%", hsnCode: "63079090" },
      { productCode: "AP 035 E", productName: "Sterilization Wraps, Size: 160x120cm, 35gsm", packingPerBox: "20 pcs", gstPercentage: "5.00%", hsnCode: "63079090" },
      { productCode: "AP 036 E", productName: "Sterilization Wraps, Size: 150x150cm, 35gsm", packingPerBox: "20 pcs", gstPercentage: "5.00%", hsnCode: "63079090" },
      { productCode: "AP 037 E", productName: "Sterilization Wraps, Size: 160x160cm, 35gsm", packingPerBox: "20 pcs", gstPercentage: "5.00%", hsnCode: "63079090" }
    ],
    features: ["Excellent barrier properties", "Tear resistant", "Multiple sizes"],
    applications: ["Instrument wrapping", "Tray wrapping", "Sterilization processes"],
    certifications: ["ISO 13485", "CE Mark"],
    slug: "sterilization-wraps-35gsm",
    metaTitle: "Sterilization Wraps 35 gsm - Multiple Sizes | Acuron Products",
    metaDescription: "Sterilization wraps 35 gsm available in multiple sizes for instrument and tray wrapping.",
    keywords: ["sterilization wrap", "wraps", "35 gsm", "instrument wrap"]
  },
  // Individual Sterilization Wrap variants as separate products
  {
    id: 4031,
    name: "Sterilization Wrap 38x38 cm - 35 gsm",
    description: "Sterilization wrap 35 gsm, size 38x38 cm.",
    detailedDescription: "Medical-grade 35 gsm sterilization wrap ideal for small instruments and trays.",
    category: "Drapes, Linens & Underpads",
    image: "/products/plain-sheet.jpg",
    secondaryImage: "/products/plain-sheet.jpg",
    featured: false,
    specs: ["35 gsm", "38x38 cm"],
    variants: [ { productCode: "AP 028 E", productName: "Sterilization Wrap 38x38 cm - 35 gsm", packingPerBox: "100 pcs", gstPercentage: "5.00%", hsnCode: "63079090" } ],
    features: ["Excellent barrier", "Tear resistant"],
    applications: ["Instrument wrapping", "Tray wrapping"],
    certifications: ["ISO 13485", "CE Mark"],
    slug: "sterilization-wrap-38x38-35gsm",
    metaTitle: "Sterilization Wrap 38x38 cm, 35 gsm | Acuron Products",
    metaDescription: "Sterilization wrap 35 gsm, size 38x38 cm.",
    keywords: ["sterilization wrap", "AP 028 E"]
  },
  {
    id: 4032,
    name: "Sterilization Wrap 50x50 cm - 35 gsm",
    description: "Sterilization wrap 35 gsm, size 50x50 cm.",
    detailedDescription: "Medical-grade 35 gsm sterilization wrap for instrument and tray wrapping.",
    category: "Drapes, Linens & Underpads",
    image: "/products/plain-sheet.jpg",
    secondaryImage: "/products/plain-sheet.jpg",
    featured: false,
    specs: ["35 gsm", "50x50 cm"],
    variants: [ { productCode: "AP 029 E", productName: "Sterilization Wrap 50x50 cm - 35 gsm", packingPerBox: "100 pcs", gstPercentage: "5.00%", hsnCode: "63079090" } ],
    features: ["Excellent barrier", "Tear resistant"],
    applications: ["Instrument wrapping", "Tray wrapping"],
    certifications: ["ISO 13485", "CE Mark"],
    slug: "sterilization-wrap-50x50-35gsm",
    metaTitle: "Sterilization Wrap 50x50 cm, 35 gsm | Acuron Products",
    metaDescription: "Sterilization wrap 35 gsm, size 50x50 cm.",
    keywords: ["sterilization wrap", "AP 029 E"]
  },
  {
    id: 4033,
    name: "Sterilization Wrap 61x61 cm - 35 gsm",
    description: "Sterilization wrap 35 gsm, size 61x61 cm.",
    detailedDescription: "Medical-grade 35 gsm sterilization wrap for instrument and tray wrapping.",
    category: "Drapes, Linens & Underpads",
    image: "/products/plain-sheet.jpg",
    secondaryImage: "/products/plain-sheet.jpg",
    featured: false,
    specs: ["35 gsm", "61x61 cm"],
    variants: [ { productCode: "AP 030 E", productName: "Sterilization Wrap 61x61 cm - 35 gsm", packingPerBox: "50 pcs", gstPercentage: "5.00%", hsnCode: "63079090" } ],
    features: ["Excellent barrier", "Tear resistant"],
    applications: ["Instrument wrapping", "Tray wrapping"],
    certifications: ["ISO 13485", "CE Mark"],
    slug: "sterilization-wrap-61x61-35gsm",
    metaTitle: "Sterilization Wrap 61x61 cm, 35 gsm | Acuron Products",
    metaDescription: "Sterilization wrap 35 gsm, size 61x61 cm.",
    keywords: ["sterilization wrap", "AP 030 E"]
  },
  {
    id: 4034,
    name: "Sterilization Wrap 76x76 cm - 35 gsm",
    description: "Sterilization wrap 35 gsm, size 76x76 cm.",
    detailedDescription: "Medical-grade 35 gsm sterilization wrap for instrument and tray wrapping.",
    category: "Drapes, Linens & Underpads",
    image: "/products/plain-sheet.jpg",
    secondaryImage: "/products/plain-sheet.jpg",
    featured: false,
    specs: ["35 gsm", "76x76 cm"],
    variants: [ { productCode: "AP 031 E", productName: "Sterilization Wrap 76x76 cm - 35 gsm", packingPerBox: "50 pcs", gstPercentage: "5.00%", hsnCode: "63079090" } ],
    features: ["Excellent barrier", "Tear resistant"],
    applications: ["Instrument wrapping", "Tray wrapping"],
    certifications: ["ISO 13485", "CE Mark"],
    slug: "sterilization-wrap-76x76-35gsm",
    metaTitle: "Sterilization Wrap 76x76 cm, 35 gsm | Acuron Products",
    metaDescription: "Sterilization wrap 35 gsm, size 76x76 cm.",
    keywords: ["sterilization wrap", "AP 031 E"]
  },
  {
    id: 4035,
    name: "Sterilization Wrap 91x91 cm - 35 gsm",
    description: "Sterilization wrap 35 gsm, size 91x91 cm.",
    detailedDescription: "Medical-grade 35 gsm sterilization wrap for instrument and tray wrapping.",
    category: "Drapes, Linens & Underpads",
    image: "/products/plain-sheet.jpg",
    secondaryImage: "/products/plain-sheet.jpg",
    featured: false,
    specs: ["35 gsm", "91x91 cm"],
    variants: [ { productCode: "AP 032 E", productName: "Sterilization Wrap 91x91 cm - 35 gsm", packingPerBox: "50 pcs", gstPercentage: "5.00%", hsnCode: "63079090" } ],
    features: ["Excellent barrier", "Tear resistant"],
    applications: ["Instrument wrapping", "Tray wrapping"],
    certifications: ["ISO 13485", "CE Mark"],
    slug: "sterilization-wrap-91x91-35gsm",
    metaTitle: "Sterilization Wrap 91x91 cm, 35 gsm | Acuron Products",
    metaDescription: "Sterilization wrap 35 gsm, size 91x91 cm.",
    keywords: ["sterilization wrap", "AP 032 E"]
  },
  {
    id: 4036,
    name: "Sterilization Wrap 101x101 cm - 35 gsm",
    description: "Sterilization wrap 35 gsm, size 101x101 cm.",
    detailedDescription: "Medical-grade 35 gsm sterilization wrap for instrument and tray wrapping.",
    category: "Drapes, Linens & Underpads",
    image: "/products/plain-sheet.jpg",
    secondaryImage: "/products/plain-sheet.jpg",
    featured: false,
    specs: ["35 gsm", "101x101 cm"],
    variants: [ { productCode: "AP 033 E", productName: "Sterilization Wrap 101x101 cm - 35 gsm", packingPerBox: "20 pcs", gstPercentage: "5.00%", hsnCode: "63079090" } ],
    features: ["Excellent barrier", "Tear resistant"],
    applications: ["Instrument wrapping", "Tray wrapping"],
    certifications: ["ISO 13485", "CE Mark"],
    slug: "sterilization-wrap-101x101-35gsm",
    metaTitle: "Sterilization Wrap 101x101 cm, 35 gsm | Acuron Products",
    metaDescription: "Sterilization wrap 35 gsm, size 101x101 cm.",
    keywords: ["sterilization wrap", "AP 033 E"]
  },
  {
    id: 4037,
    name: "Sterilization Wrap 121x121 cm - 35 gsm",
    description: "Sterilization wrap 35 gsm, size 121x121 cm.",
    detailedDescription: "Medical-grade 35 gsm sterilization wrap for instrument and tray wrapping.",
    category: "Drapes, Linens & Underpads",
    image: "/products/plain-sheet.jpg",
    secondaryImage: "/products/plain-sheet.jpg",
    featured: false,
    specs: ["35 gsm", "121x121 cm"],
    variants: [ { productCode: "AP 034 E", productName: "Sterilization Wrap 121x121 cm - 35 gsm", packingPerBox: "20 pcs", gstPercentage: "5.00%", hsnCode: "63079090" } ],
    features: ["Excellent barrier", "Tear resistant"],
    applications: ["Instrument wrapping", "Tray wrapping"],
    certifications: ["ISO 13485", "CE Mark"],
    slug: "sterilization-wrap-121x121-35gsm",
    metaTitle: "Sterilization Wrap 121x121 cm, 35 gsm | Acuron Products",
    metaDescription: "Sterilization wrap 35 gsm, size 121x121 cm.",
    keywords: ["sterilization wrap", "AP 034 E"]
  },
  {
    id: 4038,
    name: "Sterilization Wrap 160x120 cm - 35 gsm",
    description: "Sterilization wrap 35 gsm, size 160x120 cm.",
    detailedDescription: "Medical-grade 35 gsm sterilization wrap for instrument and tray wrapping.",
    category: "Drapes, Linens & Underpads",
    image: "/products/plain-sheet.jpg",
    secondaryImage: "/products/plain-sheet.jpg",
    featured: false,
    specs: ["35 gsm", "160x120 cm"],
    variants: [ { productCode: "AP 035 E", productName: "Sterilization Wrap 160x120 cm - 35 gsm", packingPerBox: "20 pcs", gstPercentage: "5.00%", hsnCode: "63079090" } ],
    features: ["Excellent barrier", "Tear resistant"],
    applications: ["Instrument wrapping", "Tray wrapping"],
    certifications: ["ISO 13485", "CE Mark"],
    slug: "sterilization-wrap-160x120-35gsm",
    metaTitle: "Sterilization Wrap 160x120 cm, 35 gsm | Acuron Products",
    metaDescription: "Sterilization wrap 35 gsm, size 160x120 cm.",
    keywords: ["sterilization wrap", "AP 035 E"]
  },
  {
    id: 4039,
    name: "Sterilization Wrap 150x150 cm - 35 gsm",
    description: "Sterilization wrap 35 gsm, size 150x150 cm.",
    detailedDescription: "Medical-grade 35 gsm sterilization wrap for instrument and tray wrapping.",
    category: "Drapes, Linens & Underpads",
    image: "/products/plain-sheet.jpg",
    secondaryImage: "/products/plain-sheet.jpg",
    featured: false,
    specs: ["35 gsm", "150x150 cm"],
    variants: [ { productCode: "AP 036 E", productName: "Sterilization Wrap 150x150 cm - 35 gsm", packingPerBox: "20 pcs", gstPercentage: "5.00%", hsnCode: "63079090" } ],
    features: ["Excellent barrier", "Tear resistant"],
    applications: ["Instrument wrapping", "Tray wrapping"],
    certifications: ["ISO 13485", "CE Mark"],
    slug: "sterilization-wrap-150x150-35gsm",
    metaTitle: "Sterilization Wrap 150x150 cm, 35 gsm | Acuron Products",
    metaDescription: "Sterilization wrap 35 gsm, size 150x150 cm.",
    keywords: ["sterilization wrap", "AP 036 E"]
  },
  {
    id: 4040,
    name: "Sterilization Wrap 160x160 cm - 35 gsm",
    description: "Sterilization wrap 35 gsm, size 160x160 cm.",
    detailedDescription: "Medical-grade 35 gsm sterilization wrap for instrument and tray wrapping.",
    category: "Drapes, Linens & Underpads",
    image: "/products/plain-sheet.jpg",
    secondaryImage: "/products/plain-sheet.jpg",
    featured: false,
    specs: ["35 gsm", "160x160 cm"],
    variants: [ { productCode: "AP 037 E", productName: "Sterilization Wrap 160x160 cm - 35 gsm", packingPerBox: "20 pcs", gstPercentage: "5.00%", hsnCode: "63079090" } ],
    features: ["Excellent barrier", "Tear resistant"],
    applications: ["Instrument wrapping", "Tray wrapping"],
    certifications: ["ISO 13485", "CE Mark"],
    slug: "sterilization-wrap-160x160-35gsm",
    metaTitle: "Sterilization Wrap 160x160 cm, 35 gsm | Acuron Products",
    metaDescription: "Sterilization wrap 35 gsm, size 160x160 cm.",
    keywords: ["sterilization wrap", "AP 037 E"]
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
    image: "/products/operation-kit.webp",
    secondaryImage: "/products/operation-kit.webp",
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
  {
    id: 503,
    name: "HIV Test & Safety Kit",
    description: "Comprehensive HIV procedure safety kit.",
    detailedDescription: "A complete HIV procedure safety kit including PPE essentials and disposables required for safe handling and testing protocols.",
    category: "Medical Kits",
    image: "/products/plain-sheet.jpg",
    secondaryImage: "/products/plain-sheet.jpg",
    featured: false,
    specs: ["PPE Essentials", "Procedure Disposables", "Sterile Components"],
    variants: [
      {
        productCode: "AP HIV 01",
        productName: "HIV Safety Kit - Standard",
        packingPerBox: "20 kits",
        gstPercentage: "12.00%",
        hsnCode: "90189090"
      }
    ],
    features: [
      "Includes PPE and disposables",
      "Supports safe testing protocols",
      "Convenient kit packaging"
    ],
    applications: [
      "HIV testing",
      "Sample handling",
      "Infection control"
    ],
    certifications: ["ISO 13485", "CE Mark"],
    slug: "hiv-test-safety-kit",
    metaTitle: "HIV Test & Safety Kit | Acuron Products",
    metaDescription: "Comprehensive HIV procedure safety kit with PPE and disposables for safe testing and handling.",
    keywords: ["HIV kit", "safety kit", "testing kit"]
  },
  {
    id: 504,
    name: "Delivery Kit",
    description: "Complete sterile delivery kit for maternity care.",
    detailedDescription: "A sterile delivery kit designed for maternity care, including essential drapes, disposables, and PPE for safe delivery procedures.",
    category: "Medical Kits",
    image: "/products/plain-sheet.jpg",
    secondaryImage: "/products/plain-sheet.jpg",
    featured: false,
    specs: ["Sterile", "OT Grade", "Comprehensive Set"],
    variants: [
      {
        productCode: "AP DEL 01",
        productName: "Delivery Kit - Standard",
        packingPerBox: "10 kits",
        gstPercentage: "12.00%",
        hsnCode: "90189090"
      }
    ],
    features: [
      "Comprehensive components",
      "Sterile packaging",
      "Convenient and ready-to-use"
    ],
    applications: [
      "Maternity care",
      "Labour and delivery",
      "Emergency delivery"
    ],
    certifications: ["ISO 13485", "CE Mark"],
    slug: "delivery-kit",
    metaTitle: "Delivery Kit - Sterile Maternity Care | Acuron Products",
    metaDescription: "Sterile delivery kit for maternity care with comprehensive components and OT-grade disposables.",
    keywords: ["delivery kit", "maternity kit", "sterile kit"]
  },
  {
    id: 505,
    name: "OT Premium On/Off Kit",
    description: "Premium operating theatre on/off procedure kit.",
    detailedDescription: "A premium OT on/off kit including gowns, towels, drapes, and disposables for efficient pre/post procedure workflows.",
    category: "Medical Kits",
    image: "/products/ot-premium-kit.jpg",
    secondaryImage: "/products/ot-premium-kit.jpg",
    featured: true,
    specs: ["Premium Components", "OT Workflow", "Sterile"],
    variants: [
      {
        productCode: "AP OTPOK 01",
        productName: "OT Premium On/Off Kit",
        packingPerBox: "15 kits",
        gstPercentage: "12.00%",
        hsnCode: "90189090"
      }
    ],
    features: [
      "Optimized for OT workflows",
      "High quality materials",
      "Sterile components"
    ],
    applications: [
      "Operating theatre",
      "Pre/Post procedure",
      "General surgery"
    ],
    certifications: ["ISO 13485", "CE Mark"],
    slug: "ot-premium-on-off-kit",
    metaTitle: "OT Premium On/Off Kit | Acuron Products",
    metaDescription: "Premium OT on/off kit with gowns, drapes, and disposables for efficient operating theatre workflows.",
    keywords: ["OT kit", "on/off kit", "premium OT kit"]
  },
  {
    id: 506,
    name: "OT Premium Kit (Blister Pack)",
    description: "Premium OT kit in blister pack format.",
    detailedDescription: "Operating Theatre premium kit packaged in convenient blister pack for fast sterile access.",
    category: "Medical Kits",
    image: "/products/ot-premium-kit.jpg",
    secondaryImage: "/products/OT Premium Kit Product Pics.png",
    featured: false,
    specs: ["Blister Pack", "Sterile", "OT Grade"],
    variants: [
      { productCode: "AP OTPK 01", productName: "OT Premium Kit - Blister Pack", packingPerBox: "20 kits", gstPercentage: "12.00%", hsnCode: "90189090" }
    ],
    features: ["Convenient blister packaging", "Premium OT disposables"],
    applications: ["Operating theatre"],
    certifications: ["ISO 13485", "CE Mark"],
    slug: "ot-premium-kit-blister-pack",
    metaTitle: "OT Premium Kit (Blister Pack) | Acuron Products",
    metaDescription: "Premium OT kit in blister pack with sterile components for operating theatre use.",
    keywords: ["OT kit", "blister pack", "premium kit"]
  },
  {
    id: 507,
    name: "HIV Kit (Regular) - Box Pack",
    description: "Regular HIV safety kit in box pack.",
    detailedDescription: "HIV procedure safety kit (regular) packaged in a protective box pack for safe handling protocols.",
    category: "Medical Kits",
    image: "/products/hivkit.png",
    secondaryImage: "/products/hivkit.png",
    featured: false,
    specs: ["Regular", "Box Pack", "PPE + Disposables"],
    variants: [
      { productCode: "AP HIV 02", productName: "HIV Kit - Regular (Box Pack)", packingPerBox: "20 kits", gstPercentage: "12.00%", hsnCode: "90189090" }
    ],
    features: ["Complete safety kit", "Convenient box pack"],
    applications: ["HIV testing", "Sample handling"],
    certifications: ["ISO 13485", "CE Mark"],
    slug: "hiv-kit-regular-box-pack",
    metaTitle: "HIV Kit Regular - Box Pack | Acuron Products",
    metaDescription: "Regular HIV safety kit in box pack with PPE and disposables for safe testing.",
    keywords: ["HIV kit", "regular", "box pack"]
  },
  {
    id: 508,
    name: "HIV Kit (Premium) - Box Pack",
    description: "Premium HIV safety kit in box pack.",
    detailedDescription: "Premium HIV procedure safety kit with enhanced components, packaged in box pack.",
    category: "Medical Kits",
    image: "/products/hivkit.png",
    secondaryImage: "/products/hivkit.png",
    featured: false,
    specs: ["Premium", "Box Pack", "Enhanced Components"],
    variants: [
      { productCode: "AP HIV 03", productName: "HIV Kit - Premium (Box Pack)", packingPerBox: "15 kits", gstPercentage: "12.00%", hsnCode: "90189090" }
    ],
    features: ["Enhanced PPE set", "Comprehensive disposables"],
    applications: ["HIV testing", "Infection control"],
    certifications: ["ISO 13485", "CE Mark"],
    slug: "hiv-kit-premium-box-pack",
    metaTitle: "HIV Kit Premium - Box Pack | Acuron Products",
    metaDescription: "Premium HIV safety kit in box pack with enhanced components.",
    keywords: ["HIV kit", "premium", "box pack"]
  },
  {
    id: 509,
    name: "Surgeon's OT Kit (Pouch Pack)",
    description: "Surgeon's OT kit in pouch pack format.",
    detailedDescription: "Surgeon's operating theatre kit with sterile components packaged in pouch pack for quick access.",
    category: "Medical Kits",
    image: "/products/operation-kit.webp",
    secondaryImage: "/products/operation-kit.webp",
    featured: false,
    specs: ["Pouch Pack", "Sterile", "OT Specific"],
    variants: [
      { productCode: "AP SOT 03", productName: "Surgeon's OT Kit - Pouch Pack", packingPerBox: "20 kits", gstPercentage: "12.00%", hsnCode: "90189090" }
    ],
    features: ["Sterile components", "Compact pouch packaging"],
    applications: ["Operating theatre"],
    certifications: ["ISO 13485", "CE Mark"],
    slug: "surgeons-ot-kit-pouch-pack",
    metaTitle: "Surgeon's OT Kit (Pouch Pack) | Acuron Products",
    metaDescription: "Surgeon's OT pouch pack with sterile components for surgical procedures.",
    keywords: ["surgeon kit", "OT kit", "pouch pack"]
  },
  {
    id: 510,
    name: "Delivery Kit (Regular) - Pouch Pack",
    description: "Regular delivery kit in pouch pack.",
    detailedDescription: "Maternity delivery kit (regular) including essential sterile disposables in pouch pack.",
    category: "Medical Kits",
    image: "/products/operation-kit.webp",
    secondaryImage: "/products/operation-kit.webp",
    featured: false,
    specs: ["Regular", "Pouch Pack", "Sterile"],
    variants: [
      { productCode: "AP DEL 02", productName: "Delivery Kit (Regular) - Pouch Pack", packingPerBox: "10 kits", gstPercentage: "12.00%", hsnCode: "90189090" }
    ],
    features: ["Essential delivery components", "Sterile pouch"],
    applications: ["Maternity care", "Emergency delivery"],
    certifications: ["ISO 13485", "CE Mark"],
    slug: "delivery-kit-regular-pouch-pack",
    metaTitle: "Delivery Kit (Regular) - Pouch Pack | Acuron Products",
    metaDescription: "Regular delivery kit with sterile components in pouch pack for maternity care.",
    keywords: ["delivery kit", "regular", "pouch pack"]
  },
  {
    id: 511,
    name: "Delivery Kit (Ultra) - Pouch Pack",
    description: "Ultra delivery kit in pouch pack.",
    detailedDescription: "Enhanced delivery kit (ultra) with expanded components in sterile pouch pack.",
    category: "Medical Kits",
    image: "/products/operation-kit.webp",
    secondaryImage: "/products/operation-kit.webp",
    featured: false,
    specs: ["Ultra", "Pouch Pack", "Enhanced Components"],
    variants: [
      { productCode: "AP DEL 03", productName: "Delivery Kit (Ultra) - Pouch Pack", packingPerBox: "10 kits", gstPercentage: "12.00%", hsnCode: "90189090" }
    ],
    features: ["Expanded components", "Sterile packaging"],
    applications: ["Maternity care"],
    certifications: ["ISO 13485", "CE Mark"],
    slug: "delivery-kit-ultra-pouch-pack",
    metaTitle: "Delivery Kit (Ultra) - Pouch Pack | Acuron Products",
    metaDescription: "Ultra delivery kit with enhanced components in sterile pouch pack.",
    keywords: ["delivery kit", "ultra", "pouch pack"]
  },
  {
    id: 512,
    name: "Disposable Z Kit",
    description: "Disposable Z kit for general procedures.",
    detailedDescription: "Versatile disposable Z kit including essential single-use items for various procedures.",
    category: "Medical Kits",
    image: "/products/operation-kit.webp",
    secondaryImage: "/products/operation-kit.webp",
    featured: false,
    specs: ["Disposable", "Multi-use"],
    variants: [
      { productCode: "AP DZ 01", productName: "Disposable Z Kit", packingPerBox: "20 kits", gstPercentage: "12.00%", hsnCode: "90189090" }
    ],
    features: ["Convenient", "Procedure-ready"],
    applications: ["General procedures"],
    certifications: ["ISO 13485"],
    slug: "disposable-z-kit",
    metaTitle: "Disposable Z Kit | Acuron Products",
    metaDescription: "Disposable Z kit including essential items for general procedures.",
    keywords: ["disposable kit", "z kit"]
  },
  {
    id: 513,
    name: "Personal Protection Kit (PPE)",
    description: "Personal protection kit with PPE components.",
    detailedDescription: "Comprehensive personal protection kit including PPE apparel and essentials.",
    category: "Medical Kits",
    image: "/products/fullppe.png",
    secondaryImage: "/products/fullppe.png",
    featured: false,
    specs: ["PPE", "ISO Certified"],
    variants: [
      { productCode: "AP PPE 03", productName: "Personal Protection Kit (PPE)", packingPerBox: "25 kits", gstPercentage: "12.00%", hsnCode: "62101000" }
    ],
    features: ["Complete PPE set", "ISO certified"],
    applications: ["General medical procedures", "Infection control"],
    certifications: ["ISO 13485", "CE Mark"],
    slug: "personal-protection-kit-ppe",
    metaTitle: "Personal Protection Kit (PPE) | Acuron Products",
    metaDescription: "Comprehensive PPE personal protection kit with ISO-certified components.",
    keywords: ["PPE kit", "personal protection kit"]
  },
  {
    id: 514,
    name: "Minor Drape Set (Kit)",
    description: "Minor drape set packaged as a surgical kit.",
    detailedDescription: "Minor drape set including drape, towel, gown and wrap, packaged as a single-use sterile kit.",
    category: "Medical Kits",
    image: "/products/minordrape.png",
    secondaryImage: "/products/minordrape.png",
    featured: false,
    specs: ["Surgical drape kit", "Single-use", "Sterile"],
    variants: [ { productCode: "AP MD K 01", productName: "Minor Drape Set (1 KIT)", packingPerBox: "1 KIT", gstPercentage: "5.00%", hsnCode: "63071010" } ],
    features: ["Essential components", "Convenient kit packaging"],
    applications: ["Minor surgical procedures"],
    certifications: ["ISO 13485", "CE Mark"],
    slug: "minor-drape-set-kit",
    metaTitle: "Minor Drape Set (Kit) | Acuron Products",
    metaDescription: "Minor drape set packaged as a sterile surgical kit.",
    keywords: ["minor drape set", "surgical drape kit"]
  },
  {
    id: 515,
    name: "Major Drape Set (Kit)",
    description: "Major drape set packaged as a surgical kit.",
    detailedDescription: "Major drape set with expanded components packaged as a single-use sterile kit.",
    category: "Medical Kits",
    image: "/products/operation-kit.webp",
    secondaryImage: "/products/operation-kit.webp",
    featured: false,
    specs: ["Surgical drape kit", "Single-use", "Sterile"],
    variants: [ { productCode: "AP MD K 02", productName: "Major Drape Set (1 KIT)", packingPerBox: "1 KIT", gstPercentage: "5.00%", hsnCode: "63071010" } ],
    features: ["Expanded components", "OT ready"],
    applications: ["Major surgical procedures"],
    certifications: ["ISO 13485", "CE Mark"],
    slug: "major-drape-set-kit",
    metaTitle: "Major Drape Set (Kit) | Acuron Products",
    metaDescription: "Major drape set packaged as a sterile surgical kit.",
    keywords: ["major drape set", "surgical drape kit"]
  },
  {
    id: 516,
    name: "HIV Drape Kit",
    description: "Sterile HIV drape kit.",
    detailedDescription: "HIV drape kit with incise and required disposables for safe procedures.",
    category: "Medical Kits",
    image: "/products/hivkit.png",
    secondaryImage: "/products/hivkit.png",
    featured: false,
    specs: ["Sterile", "Procedure Ready"],
    variants: [ { productCode: "AP HIV DK 01", productName: "HIV Drape Kit", packingPerBox: "1 KIT", gstPercentage: "5.00%", hsnCode: "63079090" } ],
    features: ["Procedure-ready", "Sterile components"],
    applications: ["HIV procedures"],
    certifications: ["ISO 13485", "CE Mark"],
    slug: "hiv-drape-kit",
    metaTitle: "HIV Drape Kit | Acuron Products",
    metaDescription: "Sterile HIV drape kit including required disposables for safe procedures.",
    keywords: ["HIV drape kit", "drape kit"]
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
    id: 602,
    name: "Biodegradable Waste Bags",
    description: "Eco-friendly biodegradable waste disposal bags for medical waste.",
    detailedDescription: "Our biodegradable waste bags are specifically designed for the safe containment of used medical supplies and waste. Made from environmentally friendly biodegradable materials, these bags break down naturally while providing secure containment during use.",
    category: "General Medical & Surgical Disposables",
    image: "/products/waste-bag.avif",
    secondaryImage: "/products/waste-bag.avif",
    featured: false,
    specs: ["Biodegradable Material", "Medical Waste Safe", "Various Sizes"],
    variants: [
      {
        productCode: "AP WB 01",
        productName: "Biodegradable Waste Bag - Small (30x40 cm)",
        packingPerBox: "100 pcs",
        gstPercentage: "12.00%",
        hsnCode: "39232990"
      },
      {
        productCode: "AP WB 02",
        productName: "Biodegradable Waste Bag - Medium (45x60 cm)",
        packingPerBox: "100 pcs",
        gstPercentage: "12.00%",
        hsnCode: "39232990"
      },
      {
        productCode: "AP WB 03",
        productName: "Biodegradable Waste Bag - Large (60x80 cm)",
        packingPerBox: "50 pcs",
        gstPercentage: "12.00%",
        hsnCode: "39232990"
      },
      {
        productCode: "AP WB A 01",
        productName: "Autoclave-Safe Biodegradable Bag (45x60 cm)",
        packingPerBox: "100 pcs",
        gstPercentage: "12.00%",
        hsnCode: "39232990"
      }
    ],
    features: [
      "100% biodegradable material",
      "Safe for medical waste containment",
      "Puncture and tear resistant",
      "Autoclave-safe options available",
      "Environmentally friendly disposal"
    ],
    applications: [
      "Medical waste disposal",
      "Infectious waste containment",
      "Hospital waste management",
      "Laboratory waste disposal",
      "Healthcare facility protocols"
    ],
    certifications: ["ISO 13485", "Biodegradable Certification", "Medical Waste Safe"],
    slug: "biodegradable-waste-bags",
    metaTitle: "Biodegradable Waste Bags - Eco-Friendly Medical Waste | Acuron Products",
    metaDescription: "Biodegradable waste disposal bags for safe medical waste containment. Environmentally friendly with autoclave-safe options available.",
    keywords: ["biodegradable bags", "medical waste bags", "eco-friendly bags", "waste disposal", "autoclave safe bags"]
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
