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
    image: "/products/plain-sheet.jpg",
    secondaryImage: "/products/plain-sheet.jpg",
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
