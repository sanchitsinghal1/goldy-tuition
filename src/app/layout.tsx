import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://goldy-tuition.vercel.app"),
  title: "Best Home Tuition in Rohini Delhi | Goldy Aggarwal | Classes 1-8 | Call Now",
  description: "Looking for the best home tuition in Rohini? Goldy Aggarwal provides expert home tutoring for Classes 1st to 8th in Rohini Sector 1, 3, 4 & 5. B.Ed qualified teacher with 15+ years experience. All subjects covered. FREE Demo Class! Call +91 9560517993 now!",
  keywords: [
    // Primary keywords
    "home tuition in Rohini",
    "home tutor in Rohini",
    "tuition teacher in Rohini",
    "home tuition Rohini Delhi",
    "best home tuition in Rohini",
    
    // Location specific
    "home tuition in Rohini Sector 1",
    "home tuition in Rohini Sector 3",
    "home tuition in Rohini Sector 4",
    "home tuition in Rohini Sector 5",
    "tutor in Rohini Sector 4",
    "home tutor Rohini Sector 3",
    "tuition teacher Rohini Sector 5",
    
    // Class specific
    "tuition for class 1 in Rohini",
    "tuition for class 2 in Rohini",
    "tuition for class 3 in Rohini",
    "tuition for class 4 in Rohini",
    "tuition for class 5 in Rohini",
    "tuition for class 6 in Rohini",
    "tuition for class 7 in Rohini",
    "tuition for class 8 in Rohini",
    "primary class tuition Rohini",
    "middle school tuition Rohini",
    
    // Subject specific
    "Hindi tuition in Rohini",
    "English tuition in Rohini",
    "Maths tuition in Rohini",
    "Science tuition in Rohini",
    "all subjects tuition Rohini",
    
    // Other variations
    "private tutor Rohini",
    "female home tutor Rohini",
    "lady teacher for home tuition Rohini",
    "CBSE tuition Rohini",
    "home tuition near me Rohini",
    "best tutor for primary classes Rohini",
    
    // Name specific
    "Goldy Aggarwal tutor",
    "Goldy Aggarwal home tuition",
    "Goldy teacher Rohini",
    
    // Action keywords
    "home tuition contact number Rohini",
    "home tuition fees Rohini",
    "affordable home tuition Rohini",
  ],
  authors: [{ name: "Goldy Aggarwal", url: "https://goldy-tuition.vercel.app" }],
  creator: "Goldy Aggarwal",
  publisher: "Goldy Aggarwal Home Tuition",
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://goldy-tuition.vercel.app",
    siteName: "Goldy Aggarwal Home Tuition - Best Tutor in Rohini",
    title: "Best Home Tuition in Rohini | Goldy Aggarwal | Classes 1-8 | Call Now",
    description: "Expert home tuition in Rohini Sector 1, 3, 4 & 5 by Goldy Aggarwal. B.Ed qualified, 15+ years experience. Classes 1-8, all subjects. FREE Demo! Call +91 9560517993",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Goldy Aggarwal - Best Home Tuition in Rohini Delhi",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@goldytuition",
    creator: "@goldytuition",
    title: "Best Home Tuition in Rohini | Goldy Aggarwal | Classes 1-8",
    description: "Expert home tuition in Rohini by B.Ed qualified teacher. 15+ years experience. Classes 1-8, all subjects. FREE Demo!",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://goldy-tuition.vercel.app",
  },
  category: "Education",
  classification: "Home Tuition Services",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-IN" className="scroll-smooth">
      <head>
        <link rel="canonical" href="https://goldy-tuition.vercel.app" />
        <meta name="geo.region" content="IN-DL" />
        <meta name="geo.placename" content="Rohini, Delhi, India" />
        <meta name="geo.position" content="28.7406;77.0587" />
        <meta name="ICBM" content="28.7406, 77.0587" />
        <meta name="rating" content="5" />
        <meta name="coverage" content="Rohini, Delhi, India" />
        <meta name="distribution" content="global" />
        <meta name="revisit-after" content="1 days" />
        <meta name="language" content="English, Hindi" />
        <meta name="doc-type" content="Public" />
        <meta name="doc-class" content="Published" />
        <meta name="doc-rights" content="Copywritten Work" />
        <meta name="owner" content="Goldy Aggarwal" />
        <meta name="reply-to" content="gaurinaveen26@gmail.com" />
        <meta name="subject" content="Home Tuition Services in Rohini Delhi" />
        <meta name="topic" content="Home Tuition, Private Tutoring, Education" />
        <meta name="summary" content="Goldy Aggarwal provides expert home tuition services for Classes 1-8 in Rohini Delhi" />
        <meta name="target" content="Parents looking for home tuition in Rohini" />
        <meta name="HandheldFriendly" content="True" />
        <meta name="MobileOptimized" content="320" />
        <meta name="format-detection" content="telephone=yes" />
        <meta property="business:contact_data:street_address" content="House No. 183, Block E, Rohini Sector 4" />
        <meta property="business:contact_data:locality" content="Rohini" />
        <meta property="business:contact_data:region" content="Delhi" />
        <meta property="business:contact_data:postal_code" content="110085" />
        <meta property="business:contact_data:country_name" content="India" />
        <meta property="business:contact_data:phone_number" content="+91 9560517993" />
        <meta property="business:contact_data:email" content="gaurinaveen26@gmail.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* Local Business Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "LocalBusiness",
                  "@id": "https://goldy-tuition.vercel.app/#localbusiness",
                  "name": "Goldy Aggarwal Home Tuition",
                  "alternateName": "Goldy Tuition",
                  "description": "Best home tuition services in Rohini Delhi for Classes 1st to 8th. B.Ed qualified teacher with 15+ years experience. All subjects covered including Hindi, English, Maths, Science.",
                  "url": "https://goldy-tuition.vercel.app",
                  "telephone": "+91-9560517993",
                  "email": "gaurinaveen26@gmail.com",
                  "image": "https://goldy-tuition.vercel.app/og-image.jpg",
                  "logo": "https://goldy-tuition.vercel.app/logo.png",
                  "priceRange": "₹₹",
                  "currenciesAccepted": "INR",
                  "paymentAccepted": "Cash, UPI, Bank Transfer",
                  "address": {
                    "@type": "PostalAddress",
                    "streetAddress": "House No. 183, Block E, Rohini Sector 4",
                    "addressLocality": "Rohini",
                    "addressRegion": "Delhi",
                    "postalCode": "110085",
                    "addressCountry": "IN"
                  },
                  "geo": {
                    "@type": "GeoCoordinates",
                    "latitude": "28.7406",
                    "longitude": "77.0587"
                  },
                  "openingHoursSpecification": [
                    {
                      "@type": "OpeningHoursSpecification",
                      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                      "opens": "08:00",
                      "closes": "20:00"
                    }
                  ],
                  "areaServed": [
                    {
                      "@type": "City",
                      "name": "Rohini Sector 1",
                      "containedInPlace": {"@type": "City", "name": "Delhi"}
                    },
                    {
                      "@type": "City", 
                      "name": "Rohini Sector 3",
                      "containedInPlace": {"@type": "City", "name": "Delhi"}
                    },
                    {
                      "@type": "City",
                      "name": "Rohini Sector 4",
                      "containedInPlace": {"@type": "City", "name": "Delhi"}
                    },
                    {
                      "@type": "City",
                      "name": "Rohini Sector 5",
                      "containedInPlace": {"@type": "City", "name": "Delhi"}
                    }
                  ],
                  "aggregateRating": {
                    "@type": "AggregateRating",
                    "ratingValue": "5",
                    "reviewCount": "50",
                    "bestRating": "5",
                    "worstRating": "1"
                  },
                  "review": [
                    {
                      "@type": "Review",
                      "author": {"@type": "Person", "name": "Priya Sharma"},
                      "datePublished": "2024-01-15",
                      "reviewBody": "Goldy ma'am has been teaching my daughter for 2 years. Her grades have improved significantly. Highly recommended!",
                      "reviewRating": {"@type": "Rating", "ratingValue": "5"}
                    },
                    {
                      "@type": "Review",
                      "author": {"@type": "Person", "name": "Rajesh Gupta"},
                      "datePublished": "2024-02-20",
                      "reviewBody": "Very dedicated teacher. My son's Hindi and English have improved a lot. She gives personal attention to each child.",
                      "reviewRating": {"@type": "Rating", "ratingValue": "5"}
                    }
                  ]
                },
                {
                  "@type": "EducationalService",
                  "@id": "https://goldy-tuition.vercel.app/#educationalservice",
                  "name": "Home Tuition for Classes 1-8",
                  "description": "Professional home tuition services for primary and middle school students in Rohini Delhi",
                  "provider": {
                    "@type": "Person",
                    "@id": "https://goldy-tuition.vercel.app/#person",
                    "name": "Goldy Aggarwal",
                    "jobTitle": "Home Tutor",
                    "description": "B.Ed qualified educator with 15+ years of teaching experience",
                    "knowsAbout": ["Hindi", "English", "Social Studies", "Mathematics", "Science", "Primary Education"],
                    "alumniOf": {
                      "@type": "CollegeOrUniversity",
                      "name": "Chaudhary Charan Singh University, Meerut"
                    }
                  },
                  "areaServed": {
                    "@type": "Place",
                    "name": "Rohini, Delhi"
                  },
                  "hasOfferCatalog": {
                    "@type": "OfferCatalog",
                    "name": "Tuition Services",
                    "itemListElement": [
                      {
                        "@type": "Offer",
                        "itemOffered": {
                          "@type": "Service",
                          "name": "Home Tuition Class 1-5",
                          "description": "All subjects home tuition for primary classes"
                        }
                      },
                      {
                        "@type": "Offer",
                        "itemOffered": {
                          "@type": "Service",
                          "name": "Home Tuition Class 6-8",
                          "description": "All subjects home tuition for middle school"
                        }
                      },
                      {
                        "@type": "Offer",
                        "itemOffered": {
                          "@type": "Service",
                          "name": "Hindi Tuition",
                          "description": "Expert Hindi language tuition"
                        }
                      },
                      {
                        "@type": "Offer",
                        "itemOffered": {
                          "@type": "Service",
                          "name": "English Tuition",
                          "description": "Expert English language tuition"
                        }
                      }
                    ]
                  }
                },
                {
                  "@type": "Person",
                  "@id": "https://goldy-tuition.vercel.app/#person",
                  "name": "Goldy Aggarwal",
                  "jobTitle": "Home Tutor",
                  "description": "B.Ed qualified home tutor in Rohini Delhi with 15+ years experience",
                  "telephone": "+91-9560517993",
                  "email": "gaurinaveen26@gmail.com",
                  "address": {
                    "@type": "PostalAddress",
                    "addressLocality": "Rohini",
                    "addressRegion": "Delhi",
                    "addressCountry": "IN"
                  }
                },
                {
                  "@type": "WebSite",
                  "@id": "https://goldy-tuition.vercel.app/#website",
                  "url": "https://goldy-tuition.vercel.app",
                  "name": "Goldy Aggarwal Home Tuition",
                  "description": "Best home tuition in Rohini Delhi for Classes 1-8",
                  "publisher": {
                    "@id": "https://goldy-tuition.vercel.app/#localbusiness"
                  },
                  "potentialAction": {
                    "@type": "SearchAction",
                    "target": "https://goldy-tuition.vercel.app/?search={search_term_string}",
                    "query-input": "required name=search_term_string"
                  }
                },
                {
                  "@type": "BreadcrumbList",
                  "@id": "https://goldy-tuition.vercel.app/#breadcrumb",
                  "itemListElement": [
                    {
                      "@type": "ListItem",
                      "position": 1,
                      "name": "Home",
                      "item": "https://goldy-tuition.vercel.app"
                    }
                  ]
                },
                {
                  "@type": "FAQPage",
                  "@id": "https://goldy-tuition.vercel.app/#faqpage",
                  "mainEntity": [
                    {
                      "@type": "Question",
                      "name": "What classes do you teach?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "I provide home tuition for Classes 1st to 8th, covering all subjects including Hindi, English, Mathematics, Science, Social Studies, and EVS."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "Which areas in Rohini do you cover?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "I currently provide home tuition services in Rohini Sector 1, Sector 3, Sector 4, and Sector 5."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "Do you provide a demo class?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Yes! I offer a free demo class so you can assess my teaching style. Contact me at +91 9560517993 to schedule."
                      }
                    }
                  ]
                }
              ]
            }),
          }}
        />
      </head>
      <body
        className={`${inter.variable} ${playfair.variable} font-sans antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
