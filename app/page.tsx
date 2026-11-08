"use client";

import React, { useState } from "react";

// 🔥 1. OFFICIAL FIXIFIY TECHNOLOGY LOGO COMPONENT (Exact Replica of Uploaded Brand Image) 🔥
// Automatically loads "/fixifiy-technology.jpg" if placed in your `public/` folder, OR renders the exact 3D Vector Logo!
const FixifiyTechOriginalLogo = ({
  size = "md",
  cardStyle = false,
}: {
  size?: "sm" | "md" | "lg";
  cardStyle?: boolean;
}) => {
  const [imgError, setImgError] = useState(false);

  const widthMap = {
    sm: 190,
    md: 250,
    lg: 340,
  };

  const w = widthMap[size];

  return (
    <div
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        background: cardStyle ? "#ffffff" : "transparent",
        padding: cardStyle ? (size === "lg" ? "14px 26px" : "8px 16px") : "0px",
        borderRadius: cardStyle ? "18px" : "0px",
        boxShadow: cardStyle ? "0 12px 32px rgba(0, 26, 77, 0.25)" : "none",
        border: cardStyle ? "2px solid rgba(255, 107, 0, 0.4)" : "none",
        userSelect: "none",
      }}
    >
      {!imgError ? (
        <img
          src="/fixifiy-technology.jpg"
          alt="Fixifiy Technology - Innovate • Develop • Empower"
          onError={() => setImgError(true)}
          style={{
            width: `${w}px`,
            maxWidth: "100%",
            height: "auto",
            objectFit: "contain",
            display: "block",
          }}
        />
      ) : (
        /* Exact 3D Vector Replica of Your Uploaded Fixifiy Technology Logo */
        <svg
          width={w}
          viewBox="0 0 540 245"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ maxWidth: "100%", height: "auto", display: "block" }}
        >
          <defs>
            <linearGradient id="ftRoyalBlue" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#0066FF" />
              <stop offset="50%" stopColor="#002B7F" />
              <stop offset="100%" stopColor="#001238" />
            </linearGradient>
            <linearGradient id="ftVibrantOrange" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFB700" />
              <stop offset="45%" stopColor="#FF6B00" />
              <stop offset="100%" stopColor="#D93800" />
            </linearGradient>
          </defs>

          {/* Left Digital Pixels */}
          <rect x="28" y="45" width="11" height="11" fill="#0052CC" />
          <rect x="43" y="34" width="9" height="9" fill="#002B7F" />
          <rect x="44" y="50" width="13" height="13" fill="#001E5A" />
          <rect x="20" y="62" width="10" height="10" fill="#FF6B00" />
          <rect x="35" y="67" width="12" height="12" fill="#001E5A" />

          {/* Top Code Symbol = </> = */}
          <path d="M210 35 H255 M218 41 H255" stroke="#0052CC" strokeWidth="3" strokeLinecap="round" />
          <text
            x="262"
            y="45"
            fill="#001E5A"
            fontSize="24"
            fontWeight="900"
            fontFamily="monospace"
          >
            &lt;/&gt;
          </text>
          <path d="M312 35 H357 M312 41 H349" stroke="#0052CC" strokeWidth="3" strokeLinecap="round" />

          {/* Right Cloud & Tech Pixels */}
          <path
            d="M412 42 C416 20 448 18 456 36 C474 28 496 42 490 62 C505 68 502 92 484 95"
            stroke="url(#ftRoyalBlue)"
            strokeWidth="6.5"
            strokeLinecap="round"
            fill="none"
          />
          <rect x="458" y="54" width="9" height="9" fill="#002B7F" />
          <rect x="471" y="48" width="10" height="10" fill="#0052CC" />
          <rect x="470" y="63" width="11" height="11" fill="#001E5A" />

          {/* Big Dynamic 'F' Orbital Swoosh */}
          <path
            d="M32 145 C8 190 68 202 135 142 C198 85 218 18 160 12 C112 8 65 42 48 80"
            stroke="url(#ftVibrantOrange)"
            strokeWidth="12"
            strokeLinecap="round"
            fill="none"
          />
          <path
            d="M24 155 C12 204 82 205 148 140 C208 80 222 22 172 14"
            stroke="#001E5A"
            strokeWidth="4.5"
            strokeLinecap="round"
            fill="none"
          />

          {/* Stylized 'F' */}
          <path
            d="M52 148 L78 56 C82 44 92 38 108 38 L168 38 L158 64 L106 64 L98 88 L146 88 L136 112 L90 112 L78 148 Z"
            fill="url(#ftRoyalBlue)"
          />

          {/* 'ixi' in Deep Metallic Blue */}
          <text
            x="170"
            y="146"
            fontSize="102"
            fontWeight="900"
            fontStyle="italic"
            fontFamily="'Montserrat', 'Arial Black', sans-serif"
            fill="url(#ftRoyalBlue)"
            letterSpacing="-3"
          >
            ixi
          </text>

          {/* 'fiy' in Vibrant Metallic Orange */}
          <text
            x="312"
            y="146"
            fontSize="102"
            fontWeight="900"
            fontStyle="italic"
            fontFamily="'Montserrat', 'Arial Black', sans-serif"
            fill="url(#ftVibrantOrange)"
            letterSpacing="-3"
          >
            fiy
          </text>

          {/* Orange Swoosh from 'f' to Cloud */}
          <path
            d="M345 64 C385 38 442 28 485 45"
            stroke="url(#ftVibrantOrange)"
            strokeWidth="4"
            fill="none"
          />

          {/* Circuit Lines & Frame around 'Technology' */}
          <path
            d="M30 175 H75 L90 162 H125 L112 198 H418 L434 162 H475 L488 175 H515"
            stroke="#002B7F"
            strokeWidth="3.2"
            fill="none"
          />
          <path
            d="M48 188 H88 L102 175 M430 186 H472 L485 196 H508"
            stroke="#0052CC"
            strokeWidth="2.5"
            fill="none"
          />
          <circle cx="26" cy="175" r="4.5" stroke="#002B7F" strokeWidth="2.5" fill="#ffffff" />
          <circle cx="44" cy="188" r="4.5" stroke="#0052CC" strokeWidth="2.5" fill="#ffffff" />
          <circle cx="519" cy="175" r="4.5" stroke="#002B7F" strokeWidth="2.5" fill="#ffffff" />
          <circle cx="512" cy="196" r="4.5" stroke="#0052CC" strokeWidth="2.5" fill="#ffffff" />

          {/* 'Technology' Text */}
          <text
            x="268"
            y="191"
            textAnchor="middle"
            fontSize="41"
            fontWeight="900"
            fontStyle="italic"
            fontFamily="'Montserrat', 'Arial Black', sans-serif"
            fill="url(#ftRoyalBlue)"
            letterSpacing="0.5"
          >
            Technology
          </text>

          {/* Tagline: Innovate • Develop • Empower */}
          <text
            x="148"
            y="222"
            textAnchor="middle"
            fontSize="16"
            fontWeight="800"
            fontFamily="'Inter', sans-serif"
            fill="#001E5A"
            letterSpacing="2.5"
          >
            Innovate
          </text>
          <circle cx="212" cy="216" r="4.5" fill="#FF6B00" />
          <text
            x="275"
            y="222"
            textAnchor="middle"
            fontSize="16"
            fontWeight="800"
            fontFamily="'Inter', sans-serif"
            fill="#001E5A"
            letterSpacing="2.5"
          >
            Develop
          </text>
          <circle cx="338" cy="216" r="4.5" fill="#FF6B00" />
          <text
            x="402"
            y="222"
            textAnchor="middle"
            fontSize="16"
            fontWeight="800"
            fontFamily="'Inter', sans-serif"
            fill="#001E5A"
            letterSpacing="2.5"
          >
            Empower
          </text>

          {/* Bottom Swoosh Accent */}
          <path d="M85 232 Q270 244 465 230" stroke="#FF6B00" strokeWidth="2.5" fill="none" />
          <path d="M160 238 Q275 230 390 238" stroke="#002B7F" strokeWidth="3.5" fill="none" />
        </svg>
      )}
    </div>
  );
};

// 🔥 2. BRAND COLORED TEXT COMPONENT (Used everywhere 'Fixifiy Technology' is written) 🔥
const FixifiyTechName = ({ darkBg = false }: { darkBg?: boolean }) => (
  <span
    style={{
      fontWeight: 900,
      fontStyle: "italic",
      fontFamily: "'Montserrat', 'Inter', sans-serif",
      letterSpacing: "-0.3px",
    }}
  >
    <span style={{ color: darkBg ? "#38bdf8" : "#0038A8" }}>Fixi</span>
    <span style={{ color: "#FF6B00" }}>fiy</span>{" "}
    <span style={{ color: darkBg ? "#ffffff" : "#001E5A" }}>Technology</span>
  </span>
);

export default function FixifiyTechnologyPage() {
  const [lang, setLang] = useState<"EN" | "HI">("EN");

  const [clientName, setClientName] = useState("");
  const [clientPhone, setClientPhone] = useState("");
  const [serviceType, setServiceType] = useState("Custom Website Development");
  const [projectBudget, setProjectBudget] = useState("₹15,000 - ₹30,000");
  const [projectDetails, setProjectDetails] = useState("");

  const t = (en: string, hi: string) => (lang === "EN" ? en : hi);

  const handleQuoteSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!clientName.trim() || !clientPhone.trim()) {
      alert(
        t(
          "Please enter your Name and Phone Number.",
          "कृपया अपना नाम और मोबाइल नंबर दर्ज करें।"
        )
      );
      return;
    }

    const message = `*💻 New IT Project Inquiry - Fixifiy Technology*%0A*(Innovate • Develop • Empower)*%0A%0A👤 *Client / Company:* ${clientName}%0A📞 *Phone:* ${clientPhone}%0A🛠️ *Solution Needed:* ${serviceType}%0A💰 *Estimated Budget:* ${projectBudget}%0A📝 *Project Scope:* ${
      projectDetails || "Requesting software consultation & live demo"
    }`;

    window.open(`https://wa.me/919709740882?text=${message}`, "_blank");
  };

  const servicesList = [
    {
      code: "01",
      icon: "🌐",
      titleEn: "Enterprise & Business Websites",
      titleHi: "एंटरप्राइज और बिजनेस वेबसाइट्स",
      descEn:
        "High-speed, SEO-architected web applications for corporations, schools, hospitals, real estate, and emerging brands built on Next.js & React.",
      descHi:
        "कंपनी, स्कूल, हॉस्पिटल, रियल एस्टेट और शोरूम के लिए सुपर-फास्ट, गूगल रैंकिंग (SEO) और आधुनिक एडमिन पैनल वाली हाई-टेक वेबसाइट्स।",
      featuresEn: ["Next.js Server-Side Speed", "Custom Admin CMS Dashboard", "SSL Security & Cloud Hosting"],
      featuresHi: ["सुपर-फास्ट Next.js आर्किटेक्चर", "कस्टम एडमिन कंट्रोल पैनल", "फ्री SSL सुरक्षा और क्लाउड होस्टिंग"],
      badge: "Web Engineering",
    },
    {
      code: "02",
      icon: "📱",
      titleEn: "Android & iOS Mobile App Studio",
      titleHi: "एंड्रॉइड और iOS मोबाइल ऐप डेवलपमेंट",
      descEn:
        "Full-cycle native & hybrid mobile apps (APK & Google Play Store) featuring real-time database sync, push alerts, and live GPS tracking.",
      descHi:
        "आपके बिजनेस के लिए कस्टम Android APK और Play Store मोबाइल ऐप्स — लाइव डेटाबेस, नोटिफिकेशन, जीपीएस ट्रैकिंग और पेमेंट गेटवे के साथ।",
      featuresEn: ["Play Store & Direct APK Build", "Real-Time Push Notifications", "Biometric & OTP Login Flow"],
      featuresHi: ["Play Store और डायरेक्ट APK बिल्ड", "रियल-टाइम पुश नोटिफिकेशन", "सुरक्षित OTP लॉगिन सिस्टम"],
      badge: "Mobile First",
    },
    {
      code: "03",
      icon: "🛒",
      titleEn: "E-Commerce & Multi-Vendor Platforms",
      titleHi: "ई-कॉमर्स और मल्टी-वेंडर शॉपिंग पोर्टल",
      descEn:
        "Scalable B2B & B2C marketplaces with multi-shop vendor onboarding, automated inventory sync, UPI payment gateways, and delivery routing.",
      descHi:
        "Amazon, Flipkart या Fixifiy जैसा खुद का ई-कॉमर्स शॉपिंग पोर्टल और डिलीवरी ऐप बनवाएं — ऑनलाइन ऑर्डर, पेमेंट और स्टॉक सिस्टम के साथ।",
      featuresEn: ["Vendor & Customer Portals", "Razorpay / PhonePe UPI Integration", "Automated GST Invoicing"],
      featuresHi: ["वेंडर, कस्टमर और डिलीवरी पैनल", "UPI और ऑनलाइन पेमेंट गेटवे", "ऑटोमैटिक बिल और ऑर्डर ट्रैकिंग"],
      badge: "High Scalability",
    },
    {
      code: "04",
      icon: "🧾",
      titleEn: "Smart Retail POS & Inventory ERP",
      titleHi: "स्मार्ट POS बिलिंग और गोदाम स्टॉक सॉफ्टवेयर",
      descEn:
        "Cloud-connected counter billing software for hardware, iron/steel, garment, and wholesale stores with barcode & thermal invoice printing.",
      descHi:
        "हार्डवेयर, आयरन/स्टील, कपड़ा शोरूम और होलसेल दुकानों के लिए काउंटर बिलिंग, उधार-खाता (Ledger) और लाइव गोदाम स्टॉक सॉफ्टवेयर।",
      featuresEn: ["Thermal & A4 GST Bill Print", "Multi-Unit Stock Calculation", "Digital Customer Khata Ledger"],
      featuresHi: ["1-क्लिक थर्मल और A4 बिल प्रिंट", "लाइव गोदाम स्टॉक और लो-स्टॉक अलर्ट", "डिजिटल ग्राहक खाता और बकाया रिकॉर्ड"],
      badge: "Retail ERP",
    },
    {
      code: "05",
      icon: "🏢",
      titleEn: "Custom CRM, HR & Job Portals",
      titleHi: "कस्टम CRM, HR और जॉब पोर्टल सॉफ्टवेयर",
      descEn:
        "Role-based enterprise portals for recruitment agencies, workforce management, school/coaching ERP, and automated internal operations.",
      descHi:
        "रिक्रूटमेंट एजेंसियों, कंपनियों और संस्थानों के लिए जॉब पोर्टल, स्टाफ अटेंडेंस, पेरोल और मल्टी-रोल मैनेजमेंट सॉफ्टवेयर।",
      featuresEn: ["Multi-Role Access Control", "PostgreSQL Cloud Security", "One-Click Excel/PDF Analytics"],
      featuresHi: ["अलग-अलग स्टाफ और एडमिन लॉगिन", "100% सुरक्षित क्लाउड डेटाबेस", "1-क्लिक पीडीएफ और एक्सेल रिपोर्ट"],
      badge: "Enterprise Cloud",
    },
    {
      code: "06",
      icon: "🗺️",
      titleEn: "GIS Map Studio & Logistics Tech",
      titleHi: "कस्टम मैप स्टूडियो और डिलीवरी रूट सिस्टम",
      descEn:
        "Zero-API-cost custom mapping solutions using Leaflet, OpenStreetMap & OSRM for fleet tracking, territory marking, and delivery routing.",
      descHi:
        "बिना किसी महंगे मंथली मैप चार्ज के आपकी गाड़ियों और डिलीवरी टीम के लिए लाइव रूट प्लानिंग और कस्टम मैप सॉफ्टवेयर।",
      featuresEn: ["Zero Recurring Map API Fees", "Vehicle-Specific Route Engine", "Live Delivery Boy Tracking"],
      featuresHi: ["जीरो मंथली मैप API खर्च", "गाड़ी के अनुसार स्मार्ट रूट मैप", "लाइव डिलीवरी ट्रैकिंग सिस्टम"],
      badge: "Custom GIS",
    },
  ];

  const workflowSteps = [
    {
      step: "01",
      titleEn: "Innovate & Architect",
      titleHi: "इनोवेशन और प्रोजेक्ट ब्लूप्रिंट",
      descEn: "We analyze your business workflow and design the database schema & modern UI/UX wireframe.",
      descHi: "सबसे पहले हम आपके बिजनेस की जरूरत को समझकर डेटाबेस और आधुनिक स्क्रीन डिज़ाइन तैयार करते हैं।",
    },
    {
      step: "02",
      titleEn: "Develop & Code",
      titleHi: "हाई-स्पीड कोडिंग और डेवलपमेंट",
      descEn: "Our full-stack engineers write clean, scalable code using Next.js, TypeScript, Tailwind & Supabase.",
      descHi: "हमारी इंजीनियरिंग टीम लेटेस्ट टेक्नोलॉजी से आपकी वेबसाइट, ऐप और सॉफ्टवेयर की कोडिंग करती है।",
    },
    {
      step: "03",
      titleEn: "Audit & QA Testing",
      titleHi: "टेस्टिंग और डेटा सुरक्षा जांच",
      descEn: "Rigorous speed benchmarks, mobile responsiveness checks, and Row-Level Security (RLS) setup.",
      descHi: "लॉन्च से पहले मोबाइल, कंप्यूटर स्पीड और क्लाउड डेटा सुरक्षा की पूरी तरह से जांच की जाती है।",
    },
    {
      step: "04",
      titleEn: "Empower & Scale",
      titleHi: "लाइव लॉन्च और 24/7 सपोर्ट",
      descEn: "Instant cloud deployment with custom domain, SSL certificate, and dedicated team training.",
      descHi: "आपके डोमेन पर सॉफ्टवेयर लाइव करके आपकी टीम को पूरा ट्रेनिंग और 24/7 सपोर्ट दिया जाता है।",
    },
  ];

  const portfolioList = [
    {
      titleEn: "Fixifiy Super App Ecosystem",
      titleHi: "Fixifiy सुपर ऐप इकोसिस्टम (4 Apps)",
      categoryEn: "Multi-App E-Commerce & Service Cloud",
      categoryHi: "मल्टी-ऐप ई-कॉमर्स और सर्विस मार्केटप्लेस",
      descEn:
        "Engineered a complete 4-application ecosystem (Customer, Shop Owner POS, Skilled Mistri, and Delivery Partner) with real-time Supabase inventory sync.",
      descHi:
        "कस्टमर, दुकानदार, मिस्त्री और डिलीवरी पार्टनर के लिए 4 अलग-अलग एंड्रॉइड ऐप्स और वेब प्लेटफॉर्म का लाइव नेटवर्क।",
      tech: ["Next.js App Router", "TypeScript", "Supabase PostgreSQL", "Capacitor APK"],
      color: "#FF6B00",
    },
    {
      titleEn: "Enterprise Recruitment & Job Portal",
      titleHi: "एंटरप्राइज जॉब पोर्टल और HR सिस्टम",
      categoryEn: "Workforce & Talent Management SaaS",
      categoryHi: "रिक्रूटमेंट और वर्कफोर्स मैनेजमेंट प्लेटफॉर्म",
      descEn:
        "Full-scale recruitment cloud supporting Candidate Profiles, Employer Job Postings, Recruiter Pipelines, and Super-Admin Verification.",
      descHi:
        "कैंडिडेट जॉब अप्लाई, कंपनी जॉब पोस्टिंग, रिक्रूटर पैनल और एडमिन कंट्रोल वाला हाई-सिक्योरिटी जॉब पोर्टल।",
      tech: ["React.js", "Tailwind CSS", "Row-Level Security", "Cloud Storage"],
      color: "#0052CC",
    },
    {
      titleEn: "Retail ERP & OSRM Route Studio",
      titleHi: "रिटेल बिलिंग ERP और कस्टम मैप स्टूडियो",
      categoryEn: "Supply Chain, Hardware & Iron POS",
      categoryHi: "हार्डवेयर, आयरन और सप्लाई चेन सॉफ्टवेयर",
      descEn:
        "Custom GST/Non-GST billing engine integrated with open-source Leaflet & OSRM vehicle routing for regional material dispatch.",
      descHi:
        "ऑटोमैटिक इनवॉइस प्रिंटिंग, गोदाम स्टॉक लेजर और डिलीवरी गाड़ियों के लिए कस्टम रूट मैपिंग सॉफ्टवेयर।",
      tech: ["Next.js", "Leaflet GIS", "OSRM Engine", "Thermal Print API"],
      color: "#16a34a",
    },
  ];

  const pricingPlans = [
    {
      nameEn: "Corporate / Business Website",
      nameHi: "कॉर्पोरेट / बिजनेस वेबसाइट",
      price: "₹7,999",
      subEn: "Ideal for Companies, Clinics, Schools & Showrooms",
      subHi: "कंपनी, स्कूल, हॉस्पिटल और शोरूम के लिए परफेक्ट",
      featuresEn: [
        "5 to 8 Custom Designed Web Pages",
        "100% Mobile, Tablet & Desktop Responsive",
        "Admin Panel to Update Photos & Content",
        "WhatsApp Lead Integration & Google Map",
        "Google Search Console (SEO) Indexing",
        "1 Year Free Technical Support",
      ],
      featuresHi: [
        "5 से 8 प्रोफेशनल और सुपर-फास्ट वेब पेजेज",
        "मोबाइल, टैबलेट और कंप्यूटर पर शानदार लुक",
        "फोटो और जानकारी बदलने के लिए एडमिन पैनल",
        "डायरेक्ट WhatsApp इंक्वायरी और गूगल मैप",
        "गूगल सर्च (SEO) में नाम लाने की सेटिंग",
        "1 साल का फ्री टेक्निकल मेंटेनेंस",
      ],
      popular: false,
    },
    {
      nameEn: "E-Commerce Web + Android App",
      nameHi: "ई-कॉमर्स वेबसाइट + एंड्रॉइड ऐप",
      price: "₹24,999",
      subEn: "Complete Online Store + Native Android APK",
      subHi: "ऑनलाइन शॉपिंग वेबसाइट + आपके नाम का मोबाइल ऐप",
      featuresEn: [
        "Full Dynamic E-Commerce Web Portal",
        "Branded Android App (APK / Play Store Ready)",
        "Merchant Dashboard (Manage Products/Stock/Orders)",
        "UPI / Card Payment Gateway + Cash on Delivery",
        "Automated GST/Non-GST Bill Printing",
        "High-Speed Cloud Database & Priority Support",
      ],
      featuresHi: [
        "संपूर्ण ऑनलाइन शॉपिंग वेबसाइट",
        "साथ में आपके ब्रांड का Android मोबाइल ऐप (APK)",
        "दुकानदार एडमिन पैनल (रेट, फोटो, स्टॉक कंट्रोल)",
        "UPI पेमेंट गेटवे और कैश ऑन डिलीवरी (COD)",
        "ऑटोमैटिक बिल/इनवॉइस प्रिंटिंग सुविधा",
        "हाई-स्पीड क्लाउड डेटाबेस और VIP सपोर्ट",
      ],
      popular: true,
    },
    {
      nameEn: "Custom SaaS / Super App / ERP",
      nameHi: "कस्टम सुपर ऐप / ERP सॉफ्टवेयर",
      price: lang === "EN" ? "Custom Quote" : "कस्टम कोटेशन",
      subEn: "For Multi-Vendor Marketplaces & Large Enterprises",
      subHi: "मल्टी-वेंडर प्लेटफॉर्म, जॉब पोर्टल और बड़ी कंपनियों के लिए",
      featuresEn: [
        "Multi-App Architecture (User, Partner, Delivery, Admin)",
        "Custom PostgreSQL Database & API Engineering",
        "Live GPS Tracking, Wallet Ledger & Commission Split",
        "Dedicated Full-Stack Engineering Team",
        "High-Availability Cloud Server Deployment",
        "100% Source Code & IP Ownership",
      ],
      featuresHi: [
        "मल्टी-ऐप सिस्टम (कस्टमर, वेंडर, डिलीवरी, एडमिन)",
        "कस्टम क्लाउड डेटाबेस और हाई-सिक्योरिटी आर्किटेक्चर",
        "लाइव GPS ट्रैकिंग, डिजिटल वॉलेट और कमीशन सिस्टम",
        "डेडिकेटेड सॉफ्टवेयर इंजीनियरिंग टीम",
        "हाई-स्पीड क्लाउड सर्वर सेटअप",
        "100% सोर्स कोड और ब्रांड मालिकाना हक",
      ],
      popular: false,
    },
  ];

  return (
    <div className="tech-page-wrapper">
      <style>{`
        .tech-page-wrapper {
          background: #f8fafc;
          min-height: 100vh;
          font-family: 'Inter', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          color: #0f172a;
        }
        .tech-header {
          background: rgba(255, 255, 255, 0.98);
          backdrop-filter: blur(16px);
          position: sticky;
          top: 0;
          z-index: 100;
          padding: 10px 28px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-bottom: 3px solid #FF6B00;
          box-shadow: 0 6px 25px rgba(0, 30, 90, 0.08);
        }
        .tech-hero-office {
          position: relative;
          background-image: 
            linear-gradient(105deg, rgba(0, 14, 42, 0.94) 0%, rgba(0, 30, 90, 0.88) 55%, rgba(0, 43, 127, 0.84) 100%),
            url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=2000&q=85');
          background-size: cover;
          background-position: center;
          background-attachment: fixed;
          color: white;
          padding: 75px 24px 105px 24px;
          border-bottom: 5px solid #FF6B00;
          overflow: hidden;
        }
        .hero-grid {
          max-width: 1220px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 45px;
          align-items: center;
        }
        .code-window-card {
          background: rgba(8, 18, 44, 0.88);
          backdrop-filter: blur(16px);
          border: 1.5px solid rgba(255, 107, 0, 0.45);
          border-radius: 20px;
          padding: 24px;
          box-shadow: 0 25px 50px rgba(0, 0, 0, 0.5);
          font-family: 'Consolas', 'Courier New', monospace;
          text-align: left;
        }
        .tech-grid-3 {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 28px;
        }
        .tech-grid-4 {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
          gap: 22px;
        }
        .service-card {
          background: #ffffff;
          border-radius: 20px;
          padding: 30px 26px;
          border: 1px solid #e2e8f0;
          border-top: 4px solid #002B7F;
          box-shadow: 0 8px 25px rgba(0, 30, 90, 0.05);
          transition: all 0.3s ease;
          display: flex;
          flex-direction: column;
          position: relative;
        }
        .service-card:hover {
          transform: translateY(-7px);
          border-top-color: #FF6B00;
          border-color: #FF6B00;
          box-shadow: 0 20px 40px rgba(0, 30, 90, 0.14);
        }
        .tech-pill {
          background: #ffffff;
          color: #001E5A;
          font-weight: 800;
          font-size: 13px;
          padding: 10px 18px;
          border-radius: 14px;
          border: 1.5px solid #cbd5e1;
          box-shadow: 0 4px 10px rgba(0,0,0,0.03);
          display: inline-flex;
          align-items: center;
          gap: 8px;
          transition: 0.2s;
        }
        .tech-pill:hover {
          border-color: #FF6B00;
          color: #FF6B00;
          transform: translateY(-2px);
        }
        .input-box {
          width: 100%;
          padding: 13px 16px;
          border-radius: 12px;
          border: 1.5px solid #cbd5e1;
          font-size: 14.5px;
          color: #0f172a;
          background: #f8fafc;
          outline: none;
          transition: 0.2s;
          box-sizing: border-box;
        }
        .input-box:focus {
          border-color: #0052CC;
          background: #ffffff;
          box-shadow: 0 0 0 3px rgba(0, 82, 204, 0.12);
        }
        .live-dot {
          width: 10px;
          height: 10px;
          background: #FF6B00;
          border-radius: 50%;
          display: inline-block;
          box-shadow: 0 0 12px #FF6B00;
        }
        @media (max-width: 768px) {
          .tech-header {
            padding: 10px 16px;
          }
          .tech-hero-office {
            padding: 50px 18px 80px 18px;
            background-attachment: scroll;
          }
        }
      `}</style>

      {/* 1. STICKY HEADER WITH ORIGINAL FIXIFIY TECHNOLOGY LOGO */}
      <header className="tech-header">
        <div
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          style={{ cursor: "pointer" }}
        >
          <FixifiyTechOriginalLogo size="sm" cardStyle={false} />
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "14px", flexWrap: "wrap" }}>
          <a
            href="#services"
            style={{
              color: "#001E5A",
              textDecoration: "none",
              fontSize: "14px",
              fontWeight: 800,
              padding: "6px 10px",
            }}
          >
            {t("Solutions", "सेवाएं")}
          </a>
          <a
            href="#portfolio"
            style={{
              color: "#001E5A",
              textDecoration: "none",
              fontSize: "14px",
              fontWeight: 800,
              padding: "6px 10px",
            }}
          >
            {t("Our Work", "प्रोजेक्ट्स")}
          </a>
          <a
            href="#pricing"
            style={{
              color: "#001E5A",
              textDecoration: "none",
              fontSize: "14px",
              fontWeight: 800,
              padding: "6px 10px",
            }}
          >
            {t("Packages", "प्राइसिंग")}
          </a>

          <button
            type="button"
            onClick={() => setLang(lang === "EN" ? "HI" : "EN")}
            style={{
              background: "#f0f7ff",
              color: "#002B7F",
              border: "1.5px solid #0052CC",
              padding: "8px 14px",
              borderRadius: "20px",
              fontSize: "12.5px",
              fontWeight: 800,
              cursor: "pointer",
            }}
          >
            🌐 {lang === "EN" ? "हिंदी" : "English"}
          </button>

          <a
            href="#quote-section"
            style={{
              background: "linear-gradient(90deg, #FF6B00 0%, #D93800 100%)",
              color: "white",
              textDecoration: "none",
              padding: "10px 22px",
              borderRadius: "25px",
              fontSize: "13.5px",
              fontWeight: 900,
              boxShadow: "0 4px 14px rgba(255, 107, 0, 0.35)",
            }}
          >
            🚀 {t("Book Consultation", "प्रोजेक्ट शुरू करें")}
          </a>
        </div>
      </header>

      {/* 2. HERO BANNER (SOFTWARE OFFICE CODING STAFF + ORIGINAL BRAND LOGO CARD) */}
      <section className="tech-hero-office">
        <div className="hero-grid">
          <div style={{ textAlign: "left" }}>
            <div style={{ marginBottom: "22px" }}>
              <FixifiyTechOriginalLogo size="md" cardStyle={true} />
            </div>

            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                background: "rgba(0, 18, 56, 0.85)",
                border: "1px solid #FF6B00",
                color: "#FFB700",
                padding: "7px 16px",
                borderRadius: "30px",
                fontSize: "12px",
                fontWeight: 800,
                letterSpacing: "1px",
                textTransform: "uppercase",
                marginBottom: "20px",
              }}
            >
              <span className="live-dot"></span>
              INNOVATE • DEVELOP • EMPOWER
            </div>

            <h1
              style={{
                fontSize: "clamp(28px, 4.4vw, 48px)",
                fontWeight: 900,
                lineHeight: 1.18,
                margin: "0 0 18px 0",
                color: "#ffffff",
                letterSpacing: "-0.5px",
              }}
            >
              {t("Welcome to ", "स्वागत है ")}
              <FixifiyTechName darkBg={true} />
              {" — "}
              <span
                style={{
                  background: "linear-gradient(90deg, #FF6B00 0%, #FFB700 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                {t("Websites, Apps & Cloud Software", "वेबसाइट, मोबाइल ऐप और सॉफ्टवेयर कंपनी")}
              </span>
            </h1>

            <p
              style={{
                fontSize: "clamp(15px, 2vw, 17px)",
                color: "#e2e8f0",
                margin: "0 0 30px 0",
                lineHeight: 1.65,
                maxWidth: "620px",
              }}
            >
              {t(
                "Our dedicated office of full-stack software engineers designs, codes, and deploys high-speed websites, Android/iOS mobile applications, E-Commerce portals, and POS billing software.",
                "हमारी अनुभवी सॉफ्टवेयर इंजीनियरिंग टीम आपके बिजनेस, शोरूम, स्कूल, हॉस्पिटल और स्टार्टअप के लिए सुपर-फास्ट वेबसाइट, एंड्रॉइड ऐप और कस्टम बिलिंग सॉफ्टवेयर तैयार करती है।"
              )}
            </p>

            <div style={{ display: "flex", gap: "14px", flexWrap: "wrap" }}>
              <a
                href="#quote-section"
                style={{
                  background: "linear-gradient(90deg, #FF6B00 0%, #FF9900 100%)",
                  color: "#ffffff",
                  padding: "15px 30px",
                  borderRadius: "14px",
                  fontWeight: 900,
                  fontSize: "15.5px",
                  textDecoration: "none",
                  boxShadow: "0 10px 25px rgba(255, 107, 0, 0.4)",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                }}
              >
                💻 {t("Discuss Your Project", "अपना सॉफ्टवेयर बनवाएं")}
              </a>

              <a
                href="tel:+919709740882"
                style={{
                  background: "rgba(0, 82, 204, 0.35)",
                  backdropFilter: "blur(10px)",
                  color: "#ffffff",
                  border: "1.5px solid #38bdf8",
                  padding: "15px 26px",
                  borderRadius: "14px",
                  fontWeight: 800,
                  fontSize: "15.5px",
                  textDecoration: "none",
                }}
              >
                📞 +91 9709740882
              </a>
            </div>
          </div>

          <div className="code-window-card">
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                borderBottom: "1px solid rgba(255,255,255,0.15)",
                paddingBottom: "12px",
                marginBottom: "16px",
              }}
            >
              <div style={{ display: "flex", gap: "7px" }}>
                <span style={{ width: "12px", height: "12px", borderRadius: "50%", background: "#FF6B00" }}></span>
                <span style={{ width: "12px", height: "12px", borderRadius: "50%", background: "#FFB700" }}></span>
                <span style={{ width: "12px", height: "12px", borderRadius: "50%", background: "#0066FF" }}></span>
              </div>
              <span style={{ fontSize: "11.5px", color: "#FFB700", fontWeight: 700 }}>
                =&lt;/&gt;= FixifiyTechnology.tsx
              </span>
            </div>

            <div style={{ fontSize: "13px", lineHeight: 1.75, color: "#cbd5e1" }}>
              <div>
                <span style={{ color: "#FF6B00" }}>const</span>{" "}
                <span style={{ color: "#38bdf8" }}>FixifiyTechnology</span> ={" "}
                <span style={{ color: "#FFB700" }}>{"{"}</span>
              </div>
              <div style={{ paddingLeft: "18px" }}>
                tagline: <span style={{ color: "#4ade80" }}>&quot;Innovate • Develop • Empower&quot;</span>,
              </div>
              <div style={{ paddingLeft: "18px" }}>
                architecture: <span style={{ color: "#38bdf8" }}>&quot;Next.js + TypeScript + Cloud&quot;</span>,
              </div>
              <div style={{ paddingLeft: "18px" }}>
                mobileApps: <span style={{ color: "#4ade80" }}>&quot;Native Android APK &amp; iOS&quot;</span>,
              </div>
              <div style={{ paddingLeft: "18px" }}>
                database: <span style={{ color: "#4ade80" }}>&quot;Supabase PostgreSQL + RLS&quot;</span>,
              </div>
              <div style={{ paddingLeft: "18px" }}>
                deliveryStatus: <span style={{ color: "#FFB700" }}>&quot;100% On-Time Deployment ✓&quot;</span>
              </div>
              <div>
                <span style={{ color: "#FFB700" }}>{"}"}</span>;
              </div>
            </div>

            <div
              style={{
                marginTop: "18px",
                background: "rgba(0, 82, 204, 0.22)",
                border: "1px solid rgba(56, 189, 248, 0.3)",
                borderRadius: "12px",
                padding: "12px 14px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: "12px",
                fontFamily: "system-ui, sans-serif",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <span className="live-dot"></span>
                <div>
                  <div style={{ fontSize: "12.5px", fontWeight: 800, color: "#ffffff" }}>
                    <FixifiyTechName darkBg={true} />
                  </div>
                  <div style={{ fontSize: "11px", color: "#cbd5e1" }}>
                    {t("Full-Stack Developers • UI/UX • Cloud DevOps", "वेब, ऐप और क्लाउड इंजीनियर्स की समर्पित टीम")}
                  </div>
                </div>
              </div>
              <span
                style={{
                  background: "#FF6B00",
                  color: "#ffffff",
                  fontSize: "11px",
                  fontWeight: 900,
                  padding: "4px 10px",
                  borderRadius: "20px",
                  whiteSpace: "nowrap",
                }}
              >
                24/7 LIVE
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. KEY METRICS BAR */}
      <section style={{ maxWidth: "1180px", margin: "-45px auto 65px auto", padding: "0 20px", position: "relative", zIndex: 10 }}>
        <div
          style={{
            background: "#ffffff",
            borderRadius: "22px",
            padding: "28px 24px",
            boxShadow: "0 18px 45px rgba(0, 30, 90, 0.14)",
            border: "2px solid #002B7F",
            borderBottom: "5px solid #FF6B00",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(210px, 1fr))",
            gap: "20px",
            textAlign: "center",
          }}
        >
          <div>
            <div style={{ fontSize: "32px", fontWeight: 900, color: "#002B7F" }}>&lt;/&gt; 100%</div>
            <div style={{ fontSize: "13.5px", fontWeight: 800, color: "#475569" }}>
              {t("Custom Coded Architecture", "कस्टम कोडिंग आर्किटेक्चर")}
            </div>
          </div>
          <div>
            <div style={{ fontSize: "32px", fontWeight: 900, color: "#FF6B00" }}>Web + APK</div>
            <div style={{ fontSize: "13.5px", fontWeight: 800, color: "#475569" }}>
              {t("Cross-Platform App Studio", "वेबसाइट और मोबाइल ऐप स्टूडियो")}
            </div>
          </div>
          <div>
            <div style={{ fontSize: "32px", fontWeight: 900, color: "#0052CC" }}>99.9%</div>
            <div style={{ fontSize: "13.5px", fontWeight: 800, color: "#475569" }}>
              {t("Cloud Uptime & RLS Security", "क्लाउड सर्वर अपटाइम और सुरक्षा")}
            </div>
          </div>
          <div>
            <div style={{ fontSize: "32px", fontWeight: 900, color: "#FF6B00" }}>24/7</div>
            <div style={{ fontSize: "13.5px", fontWeight: 800, color: "#475569" }}>
              {t("Dedicated Engineer Support", "डायरेक्ट इंजीनियर सपोर्ट")}
            </div>
          </div>
        </div>
      </section>

      {/* 4. SOFTWARE ENGINEERING OFFICE SHOWCASE BANNER */}
      <section style={{ maxWidth: "1200px", margin: "0 auto 75px auto", padding: "0 20px" }}>
        <div
          style={{
            background: "#ffffff",
            borderRadius: "24px",
            border: "1.5px solid #cbd5e1",
            overflow: "hidden",
            boxShadow: "0 12px 35px rgba(0,30,90,0.08)",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          }}
        >
          <div
            style={{
              minHeight: "340px",
              backgroundImage:
                "url('https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1200&q=80')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              position: "relative",
            }}
          >
            <div
              style={{
                position: "absolute",
                bottom: "16px",
                left: "16px",
                background: "rgba(0, 18, 56, 0.92)",
                backdropFilter: "blur(8px)",
                color: "white",
                padding: "10px 18px",
                borderRadius: "12px",
                borderLeft: "4px solid #FF6B00",
                fontSize: "12.5px",
                fontWeight: 800,
              }}
            >
              👨‍💻 <FixifiyTechName darkBg={true} /> — {t("Development Wing", "डेवलपमेंट सेंटर")}
            </div>
          </div>

          <div style={{ padding: "36px 32px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
            <div style={{ marginBottom: "14px" }}>
              <FixifiyTechOriginalLogo size="sm" cardStyle={false} />
            </div>
            <h2 style={{ fontSize: "clamp(22px, 3vw, 30px)", fontWeight: 900, color: "#001E5A", margin: "0 0 14px 0", lineHeight: 1.3 }}>
              {t(
                "A Dedicated Team of Developers Building Scalable Digital Products",
                "आपकी हर डिजिटल ज़रूरत के लिए प्रोफेशनल कोडिंग और इंजीनियरिंग टीम"
              )}
            </h2>
            <p style={{ color: "#475569", fontSize: "14.5px", lineHeight: 1.7, margin: "0 0 20px 0" }}>
              <FixifiyTechName />{" "}
              {t(
                "(the IT & Software Engineering division of Mahadev Enterprises) specializes in turning complex offline business workflows into effortless web and mobile applications. From retail POS billing to multi-app marketplaces, our engineers build software that scales.",
                "(महादेव एंटरप्राइजेज की आईटी डिवीजन) पारंपरिक ऑफलाइन व्यापार को आधुनिक वेब और मोबाइल ऐप्स में बदलने में माहिर है। चाहे आपकी रिटेल दुकान हो, स्टार्टअप हो या बड़ी कंपनी — हमारी टीम आपके बजट में हाई-सिक्योरिटी सॉफ्टवेयर तैयार करती है।"
              )}
            </p>
            <div style={{ display: "flex", gap: "18px", flexWrap: "wrap", fontSize: "13px", fontWeight: 800, color: "#002B7F" }}>
              <span>✔ {t("In-House Coding Team", "इन-हाउस डेवलपर टीम")}</span>
              <span>✔ {t("100% Source Code Security", "100% सुरक्षित कोड")}</span>
              <span>✔ {t("GST Verified Billing", "पक्का जीएसटी बिल")}</span>
            </div>
          </div>
        </div>
      </section>

      {/* 5. OUR SOFTWARE & IT SERVICES */}
      <section id="services" style={{ maxWidth: "1200px", margin: "0 auto 75px auto", padding: "0 20px" }}>
        <div style={{ textAlign: "center", marginBottom: "45px" }}>
          <span
            style={{
              background: "#fff7ed",
              color: "#FF6B00",
              padding: "6px 16px",
              borderRadius: "20px",
              fontSize: "12px",
              fontWeight: 900,
              border: "1px solid #fed7aa",
              textTransform: "uppercase",
            }}
          >
            =&lt;/&gt;= {t("Software & IT Services", "हमारी सॉफ्टवेयर और आईटी सेवाएं")}
          </span>
          <h2 style={{ fontSize: "clamp(24px, 3.5vw, 36px)", fontWeight: 900, color: "#001E5A", margin: "12px 0 10px 0" }}>
            {t("End-to-End Solutions by ", "संपूर्ण सॉफ्टवेयर और ऐप समाधान — ")}
            <FixifiyTechName />
          </h2>
          <p style={{ color: "#64748b", maxWidth: "680px", margin: "0 auto", fontSize: "15px" }}>
            {t(
              "Every product we build is mobile-responsive, cloud-backed, and engineered for speed.",
              "हमारा हर सॉफ्टवेयर और वेबसाइट मोबाइल-फ्रेंडली, सुपर-फास्ट और क्लाउड डेटाबेस से लैस होता है।"
            )}
          </p>
        </div>

        <div className="tech-grid-3">
          {servicesList.map((srv, idx) => (
            <div key={idx} className="service-card">
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "18px" }}>
                <div
                  style={{
                    width: "58px",
                    height: "58px",
                    borderRadius: "16px",
                    background: "linear-gradient(135deg, #f0f7ff 0%, #fff7ed 100%)",
                    border: "1.5px solid #0052CC",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "28px",
                  }}
                >
                  {srv.icon}
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <span
                    style={{
                      background: "linear-gradient(90deg, #002B7F 0%, #0052CC 100%)",
                      color: "#ffffff",
                      fontSize: "11px",
                      fontWeight: 800,
                      padding: "4px 12px",
                      borderRadius: "20px",
                    }}
                  >
                    {srv.badge}
                  </span>
                  <span style={{ fontSize: "18px", fontWeight: 900, color: "#FF6B00" }}>{srv.code}</span>
                </div>
              </div>

              <h3 style={{ fontSize: "20px", fontWeight: 900, color: "#001E5A", margin: "0 0 10px 0" }}>
                {t(srv.titleEn, srv.titleHi)}
              </h3>

              <p style={{ fontSize: "14px", color: "#475569", lineHeight: 1.65, margin: "0 0 18px 0", flex: 1 }}>
                {t(srv.descEn, srv.descHi)}
              </p>

              <div style={{ borderTop: "1px dashed #cbd5e1", paddingTop: "14px", marginBottom: "18px" }}>
                {(lang === "EN" ? srv.featuresEn : srv.featuresHi).map((feat, i) => (
                  <div
                    key={i}
                    style={{
                      fontSize: "13px",
                      fontWeight: 700,
                      color: "#0f172a",
                      marginBottom: "6px",
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                    }}
                  >
                    <span style={{ color: "#FF6B00", fontWeight: 900 }}>✔</span> {feat}
                  </div>
                ))}
              </div>

              <a
                href="#quote-section"
                onClick={() => setServiceType(srv.titleEn)}
                style={{
                  textAlign: "center",
                  background: "linear-gradient(90deg, #001E5A 0%, #0038A8 100%)",
                  color: "#ffffff",
                  border: "none",
                  padding: "12px",
                  borderRadius: "12px",
                  fontWeight: 800,
                  fontSize: "13.5px",
                  textDecoration: "none",
                  transition: "0.2s",
                }}
              >
                {t("Request Quote & Demo →", "डेमो और कोटेशन लें →")}
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* 6. HOW WE WORK (4-STEP DEVELOPMENT PROCESS) */}
      <section style={{ background: "linear-gradient(135deg, #001238 0%, #002B7F 100%)", color: "white", padding: "65px 20px", marginBottom: "75px", borderTop: "5px solid #FF6B00", borderBottom: "5px solid #FF6B00" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "45px" }}>
            <span style={{ color: "#FFB700", fontSize: "12px", fontWeight: 900, letterSpacing: "1.5px", textTransform: "uppercase" }}>
              ⚙️ INNOVATE • DEVELOP • EMPOWER
            </span>
            <h2 style={{ fontSize: "clamp(24px, 3.5vw, 34px)", fontWeight: 900, margin: "8px 0 0 0", color: "#ffffff" }}>
              {t("How ", "कैसे ")}
              <FixifiyTechName darkBg={true} />
              {t(" Turns Your Idea Into Live Software", " आपका सॉफ्टवेयर और वेबसाइट तैयार करती है?")}
            </h2>
          </div>

          <div className="tech-grid-4">
            {workflowSteps.map((wf, idx) => (
              <div
                key={idx}
                style={{
                  background: "rgba(255,255,255,0.07)",
                  border: "1px solid rgba(255,107,0,0.35)",
                  borderRadius: "18px",
                  padding: "24px",
                }}
              >
                <div
                  style={{
                    fontSize: "28px",
                    fontWeight: 900,
                    color: "#FF6B00",
                    marginBottom: "10px",
                  }}
                >
                  {wf.step}
                </div>
                <h4 style={{ fontSize: "18px", fontWeight: 800, margin: "0 0 8px 0", color: "#ffffff" }}>
                  {t(wf.titleEn, wf.titleHi)}
                </h4>
                <p style={{ fontSize: "13.5px", color: "#cbd5e1", lineHeight: 1.6, margin: 0 }}>
                  {t(wf.descEn, wf.descHi)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. LIVE PORTFOLIO / FLAGSHIP PRODUCTS */}
      <section id="portfolio" style={{ maxWidth: "1200px", margin: "0 auto 75px auto", padding: "0 20px" }}>
        <div style={{ textAlign: "center", marginBottom: "40px" }}>
          <span
            style={{
              background: "#e0f2fe",
              color: "#002B7F",
              padding: "6px 16px",
              borderRadius: "20px",
              fontSize: "12px",
              fontWeight: 900,
              textTransform: "uppercase",
            }}
          >
            🏆 {t("Production Case Studies", "हमारे द्वारा विकसित प्रमुख प्रोजेक्ट्स")}
          </span>
          <h2 style={{ fontSize: "clamp(24px, 3.5vw, 34px)", fontWeight: 900, color: "#001E5A", margin: "12px 0 0 0" }}>
            {t("Enterprise Platforms Engineered by ", "लाइव प्लेटफॉर्म्स — ")}
            <FixifiyTechName />
          </h2>
        </div>

        <div className="tech-grid-3">
          {portfolioList.map((item, idx) => (
            <div
              key={idx}
              style={{
                background: "#ffffff",
                borderRadius: "20px",
                padding: "28px",
                borderTop: `5px solid ${item.color}`,
                borderLeft: "1px solid #e2e8f0",
                borderRight: "1px solid #e2e8f0",
                borderBottom: "1px solid #e2e8f0",
                boxShadow: "0 10px 25px rgba(0,0,0,0.04)",
              }}
            >
              <div style={{ fontSize: "12px", fontWeight: 800, color: item.color, textTransform: "uppercase", marginBottom: "6px" }}>
                {t(item.categoryEn, item.categoryHi)}
              </div>
              <h3 style={{ fontSize: "20px", fontWeight: 900, color: "#001E5A", margin: "0 0 12px 0" }}>
                {t(item.titleEn, item.titleHi)}
              </h3>
              <p style={{ fontSize: "14px", color: "#475569", lineHeight: 1.65, margin: "0 0 18px 0" }}>
                {t(item.descEn, item.descHi)}
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                {item.tech.map((tItem, j) => (
                  <span
                    key={j}
                    style={{
                      background: "#f0f7ff",
                      border: "1px solid #bae6fd",
                      color: "#002B7F",
                      fontSize: "11px",
                      fontWeight: 800,
                      padding: "4px 10px",
                      borderRadius: "8px",
                    }}
                  >
                    {tItem}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 8. TECH STACK WE USE */}
      <section style={{ maxWidth: "1150px", margin: "0 auto 75px auto", padding: "0 20px", textAlign: "center" }}>
        <h3 style={{ fontSize: "20px", fontWeight: 900, color: "#001E5A", margin: "0 0 20px 0" }}>
          💻 {t("Technologies & Cloud Stack Mastered by ", "हमारी कोडिंग और क्लाउड टेक्नोलॉजी — ")}
          <FixifiyTechName />
        </h3>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "12px", justifyContent: "center" }}>
          {[
            "⚛️ React.js & Next.js",
            "📘 TypeScript",
            "🎨 Tailwind CSS",
            "⚡ Supabase & PostgreSQL",
            "📱 Capacitor Android APK",
            "🗺️ Leaflet & OSRM Maps",
            "▲ Vercel Edge Cloud",
            "🔒 Row-Level Security (RLS)",
            "💳 UPI & Payment Gateways",
          ].map((tech, i) => (
            <span key={i} className="tech-pill">
              {tech}
            </span>
          ))}
        </div>
      </section>

      {/* 9. TRANSPARENT PRICING PACKAGES */}
      <section id="pricing" style={{ maxWidth: "1200px", margin: "0 auto 80px auto", padding: "0 20px" }}>
        <div style={{ textAlign: "center", marginBottom: "45px" }}>
          <h2 style={{ fontSize: "clamp(24px, 3.5vw, 36px)", fontWeight: 900, color: "#001E5A", margin: "0 0 10px 0" }}>
            💎 {t("Transparent Development Packages", "किफायती और पारदर्शी सॉफ्टवेयर पैकेज")}
          </h2>
          <p style={{ color: "#64748b", fontSize: "15px", margin: 0 }}>
            {t(
              "Clear deliverables with zero hidden maintenance surprises.",
              "बिना किसी छुपे हुए चार्ज के अपने बिजनेस के लिए सही पैकेज चुनें।"
            )}
          </p>
        </div>

        <div className="tech-grid-3">
          {pricingPlans.map((plan, idx) => (
            <div
              key={idx}
              style={{
                background: plan.popular ? "linear-gradient(180deg, #001E5A 0%, #002B7F 100%)" : "#ffffff",
                color: plan.popular ? "#ffffff" : "#0f172a",
                borderRadius: "24px",
                padding: "32px 26px",
                border: plan.popular ? "3px solid #FF6B00" : "1.5px solid #cbd5e1",
                boxShadow: plan.popular ? "0 20px 45px rgba(0, 30, 90, 0.28)" : "0 8px 25px rgba(0,0,0,0.04)",
                position: "relative",
                display: "flex",
                flexDirection: "column",
              }}
            >
              {plan.popular && (
                <div
                  style={{
                    position: "absolute",
                    top: "-14px",
                    left: "50%",
                    transform: "translateX(-50%)",
                    background: "linear-gradient(90deg, #FF6B00 0%, #FF9900 100%)",
                    color: "white",
                    fontSize: "11px",
                    fontWeight: 900,
                    padding: "5px 16px",
                    borderRadius: "20px",
                    textTransform: "uppercase",
                  }}
                >
                  🔥 {t("Most Popular Choice", "सबसे ज्यादा लोकप्रिय")}
                </div>
              )}

              <h3 style={{ fontSize: "21px", fontWeight: 900, margin: "0 0 6px 0", color: plan.popular ? "#ffffff" : "#001E5A" }}>
                {t(plan.nameEn, plan.nameHi)}
              </h3>
              <p style={{ fontSize: "13px", color: plan.popular ? "#cbd5e1" : "#64748b", margin: "0 0 18px 0" }}>
                {t(plan.subEn, plan.subHi)}
              </p>

              <div style={{ fontSize: "34px", fontWeight: 900, color: plan.popular ? "#FFB700" : "#0052CC", marginBottom: "22px" }}>
                {plan.price}
                <span style={{ fontSize: "12px", fontWeight: 600, color: plan.popular ? "#cbd5e1" : "#64748b" }}>
                  {" "}
                  / {t("complete setup", "संपूर्ण सेटअप")}
                </span>
              </div>

              <div style={{ flex: 1, marginBottom: "24px" }}>
                {(lang === "EN" ? plan.featuresEn : plan.featuresHi).map((f, i) => (
                  <div
                    key={i}
                    style={{
                      fontSize: "13.5px",
                      marginBottom: "10px",
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                      color: plan.popular ? "#f1f5f9" : "#334155",
                    }}
                  >
                    <span style={{ color: "#FF6B00", fontWeight: 900 }}>✔</span> {f}
                  </div>
                ))}
              </div>

              <a
                href="#quote-section"
                onClick={() => setServiceType(plan.nameEn)}
                style={{
                  textAlign: "center",
                  background: plan.popular ? "linear-gradient(90deg, #FF6B00 0%, #FF9900 100%)" : "#001E5A",
                  color: "#ffffff",
                  padding: "13px",
                  borderRadius: "12px",
                  fontWeight: 900,
                  fontSize: "14px",
                  textDecoration: "none",
                }}
              >
                {t("Choose This Package", "यह पैकेज चुनें")}
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* 10. PROJECT CONSULTATION & WHATSAPP LEAD FORM */}
      <section id="quote-section" style={{ maxWidth: "1120px", margin: "0 auto 80px auto", padding: "0 20px" }}>
        <div
          style={{
            background: "#ffffff",
            borderRadius: "28px",
            border: "2.5px solid #002B7F",
            boxShadow: "0 20px 50px rgba(0, 30, 90, 0.14)",
            overflow: "hidden",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          }}
        >
          <div
            style={{
              background: "linear-gradient(135deg, #001238 0%, #002B7F 100%)",
              color: "white",
              padding: "42px 34px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <div>
              <div style={{ marginBottom: "18px" }}>
                <FixifiyTechOriginalLogo size="sm" cardStyle={true} />
              </div>

              <h2 style={{ fontSize: "27px", fontWeight: 900, margin: "12px 0 12px 0", lineHeight: 1.3 }}>
                {t("Ready to Launch Your Website or App?", "आइए आपके प्रोजेक्ट की शुरुआत करें!")}
              </h2>
              <p style={{ color: "#cbd5e1", fontSize: "14.5px", lineHeight: 1.65, marginBottom: "26px" }}>
                {t(
                  "Share your requirements below and our lead software architect will connect with you on WhatsApp with a live demo and cost estimate.",
                  "नीचे अपनी जरूरत भरें — हमारी इंजीनियरिंग टीम आपको WhatsApp पर लाइव डेमो और पूरा कोटेशन तुरंत भेजेगी।"
                )}
              </p>

              <div style={{ display: "flex", flexDirection: "column", gap: "15px", fontSize: "14px" }}>
                <div>
                  <strong style={{ color: "#FF6B00", display: "block" }}>📍 {t("Corporate & Development Office:", "कॉर्पोरेट कार्यालय:")}</strong>
                  Fixifiy Technology (A Unit of Mahadev Enterprises), Plot No. 271, Samastipur, Bihar - 848207
                </div>
                <div>
                  <strong style={{ color: "#FF6B00", display: "block" }}>📱 {t("Direct Helpline / WhatsApp:", "हेल्पलाइन / व्हाट्सऐप:")}</strong>
                  +91 9709740882
                </div>
                <div>
                  <strong style={{ color: "#FF6B00", display: "block" }}>✉️ {t("Official Email:", "आधिकारिक ईमेल:")}</strong>
                  support@fixifiy.in | fixifiyindia@gmail.com
                </div>
              </div>
            </div>

            <div style={{ marginTop: "28px", paddingTop: "18px", borderTop: "1px solid rgba(255,255,255,0.15)", fontSize: "12px", color: "#FFB700", fontWeight: 700 }}>
              ✔ Innovate • Develop • Empower | GST Verified Enterprise
            </div>
          </div>

          <form onSubmit={handleQuoteSubmit} style={{ padding: "42px 34px", background: "#ffffff" }}>
            <h3 style={{ margin: "0 0 20px 0", fontSize: "22px", fontWeight: 900, color: "#001E5A" }}>
              📝 {t("Get Free Demo & Project Estimate", "फ्री डेमो और कोटेशन फॉर्म")}
            </h3>

            <div style={{ marginBottom: "16px" }}>
              <label style={{ display: "block", fontSize: "13px", fontWeight: 800, color: "#334155", marginBottom: "6px" }}>
                {t("Your Name / Company Name *", "आपका नाम या कंपनी/दुकान का नाम *")}
              </label>
              <input
                type="text"
                required
                className="input-box"
                placeholder={t("e.g. Rajesh Sharma / Apex Enterprises", "उदा. राजेश शर्मा / एपेक्स एंटरप्राइजेज")}
                value={clientName}
                onChange={(e) => setClientName(e.target.value)}
              />
            </div>

            <div style={{ marginBottom: "16px" }}>
              <label style={{ display: "block", fontSize: "13px", fontWeight: 800, color: "#334155", marginBottom: "6px" }}>
                {t("WhatsApp / Mobile Number *", "व्हाट्सऐप / मोबाइल नंबर *")}
              </label>
              <input
                type="tel"
                required
                className="input-box"
                placeholder={t("Enter 10-digit mobile number", "10 अंकों का मोबाइल नंबर दर्ज करें")}
                value={clientPhone}
                onChange={(e) => setClientPhone(e.target.value)}
              />
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px", marginBottom: "16px" }}>
              <div>
                <label style={{ display: "block", fontSize: "13px", fontWeight: 800, color: "#334155", marginBottom: "6px" }}>
                  {t("Service Required", "क्या बनवाना है?")}
                </label>
                <select
                  className="input-box"
                  value={serviceType}
                  onChange={(e) => setServiceType(e.target.value)}
                >
                  <option value="Custom Website Development">{t("Business / Corporate Website", "बिजनेस / कॉर्पोरेट वेबसाइट")}</option>
                  <option value="E-Commerce Web + Android App">{t("E-Commerce + Android App", "ई-कॉमर्स वेबसाइट + ऐप")}</option>
                  <option value="Android Mobile App (APK)">{t("Android Mobile App (APK)", "एंड्रॉइड मोबाइल ऐप")}</option>
                  <option value="Smart Retail POS & Billing ERP">{t("POS Billing & Stock Software", "POS बिलिंग और स्टॉक सॉफ्टवेयर")}</option>
                  <option value="Custom CRM / HR / Job Portal">{t("Custom ERP / Job Portal", "कस्टम ERP / जॉब पोर्टल")}</option>
                </select>
              </div>

              <div>
                <label style={{ display: "block", fontSize: "13px", fontWeight: 800, color: "#334155", marginBottom: "6px" }}>
                  {t("Estimated Budget", "अनुमानित बजट")}
                </label>
                <select
                  className="input-box"
                  value={projectBudget}
                  onChange={(e) => setProjectBudget(e.target.value)}
                >
                  <option value="₹7,999 - ₹15,000">₹7,999 - ₹15,000</option>
                  <option value="₹15,000 - ₹30,000">₹15,000 - ₹30,000</option>
                  <option value="₹30,000 - ₹60,000">₹30,000 - ₹60,000</option>
                  <option value="₹60,000+ (Enterprise)">₹60,000+ (Enterprise)</option>
                </select>
              </div>
            </div>

            <div style={{ marginBottom: "22px" }}>
              <label style={{ display: "block", fontSize: "13px", fontWeight: 800, color: "#334155", marginBottom: "6px" }}>
                {t("Project Brief / Features Needed", "प्रोजेक्ट के बारे में संक्षेप में लिखें")}
              </label>
              <textarea
                rows={3}
                className="input-box"
                placeholder={t(
                  "Tell us about your business and the features you need...",
                  "बताएं कि आपका किस चीज़ का बिजनेस है और आपको सॉफ्टवेयर में क्या-क्या चाहिए..."
                )}
                value={projectDetails}
                onChange={(e) => setProjectDetails(e.target.value)}
              />
            </div>

            <button
              type="submit"
              style={{
                width: "100%",
                background: "linear-gradient(90deg, #FF6B00 0%, #D93800 100%)",
                color: "white",
                border: "none",
                padding: "15px",
                borderRadius: "14px",
                fontSize: "16px",
                fontWeight: 900,
                cursor: "pointer",
                boxShadow: "0 8px 20px rgba(255, 107, 0, 0.35)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "8px",
              }}
            >
              <span>📲</span> {t("Send Inquiry on WhatsApp", "WhatsApp पर कोटेशन मंगाएं")}
            </button>
          </form>
        </div>
      </section>

      {/* 11. CORPORATE FOOTER WITH ORIGINAL FIXIFIY TECHNOLOGY LOGO */}
      <footer
        style={{
          background: "#000d26",
          color: "#94a3b8",
          padding: "55px 20px 35px 20px",
          borderTop: "5px solid #FF6B00",
        }}
      >
        <div
          style={{
            maxWidth: "1180px",
            margin: "0 auto",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <div style={{ marginBottom: "20px" }}>
            <FixifiyTechOriginalLogo size="md" cardStyle={true} />
          </div>
          <p style={{ fontSize: "14.5px", maxWidth: "680px", margin: "0 auto 22px auto", lineHeight: 1.65, color: "#cbd5e1" }}>
            <FixifiyTechName darkBg={true} /> (IT &amp; Software Division of Mahadev Enterprises) —{" "}
            <span style={{ color: "#FFB700", fontWeight: 700 }}>Innovate • Develop • Empower</span>. Building high-performance Websites, Native Android Applications, E-Commerce Marketplaces, and Cloud ERP Software across India.
          </p>
          <div style={{ fontSize: "12.5px", color: "#64748b", borderTop: "1px solid rgba(255,255,255,0.1)", paddingTop: "20px", width: "100%" }}>
            © {new Date().getFullYear()} Fixifiy Technology (A Unit of Mahadev Enterprises). All Rights Reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}