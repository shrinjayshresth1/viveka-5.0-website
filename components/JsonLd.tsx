export default function JsonLd() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "TechFusion Club - SRMU",
    url: "https://www.vivekatheintelligence.in",
    logo: "https://www.vivekatheintelligence.in/viveka-logo.webp",
    sameAs: [
      "https://www.instagram.com/techfusionclub_srmu/",
      "https://www.linkedin.com/in/techfusion-club/",
      "https://www.facebook.com/people/Techfusion-Club/100088111141332/",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+91-8299399820",
      contactType: "customer service",
      email: "techfusionclub@srmu.ac.in",
    },
  };

  const eventSchema = {
    "@context": "https://schema.org",
    "@type": "Event",
    name: "Viveka 5.0: The Intelligence",
    description:
      "Viveka 5.0 is the flagship technical festival of Shri Ramswaroop Memorial University, featuring 20+ events in Robotics, AI, Gaming, Coding, and more.",
    startDate: "2026-02-18T09:00:00+05:30",
    endDate: "2026-02-20T18:00:00+05:30",
    eventStatus: "https://schema.org/EventScheduled",
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
    location: {
      "@type": "Place",
      name: "Shri Ramswaroop Memorial University",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Village Hadauri, Post Tindola, Lucknow-Deva Road",
        addressLocality: "Barabanki",
        addressRegion: "Uttar Pradesh",
        postalCode: "225003",
        addressCountry: "IN",
      },
    },
    image: "https://www.vivekatheintelligence.in/og-image.png",
    organizer: {
      "@type": "Organization",
      name: "TechFusion Club - SRMU",
      url: "https://www.vivekatheintelligence.in",
    },
    offers: {
      "@type": "Offer",
      url: "https://www.vivekatheintelligence.in/events",
      availability: "https://schema.org/InStock",
      priceCurrency: "INR",
      price: "100",
      validFrom: "2026-01-01",
    },
    subEvent: [
      {
        "@type": "Event",
        name: "CodeX - Coding Competition",
        startDate: "2026-02-18T12:30:00+05:30",
        location: {
           "@type": "Place",
           name: "Computer Labs, SRMU",
           address: "SRMU Campus, Lucknow-Deva Road"
        },
        offers: {
          "@type": "Offer",
          price: "160",
          priceCurrency: "INR"
        }
      },
      {
        "@type": "Event",
        name: "Robo War",
        startDate: "2026-02-19T14:00:00+05:30",
        description: "Robot combat competition.",
        location: {
           "@type": "Place",
           name: "Volleyball Court, SRMU",
           address: "SRMU Campus, Lucknow-Deva Road"
        },
        offers: {
          "@type": "Offer",
          price: "250",
          priceCurrency: "INR"
        }
      },
      {
         "@type": "Event",
         name: "Hack-A-Thon",
         startDate: "2026-02-20T12:30:00+05:30",
         description: "24-hour hackathon solving real world problems.",
         location: {
            "@type": "Place",
            name: "Innovation Hub, SRMU",
            address: "SRMU Campus, Lucknow-Deva Road"
         },
         offers: {
          "@type": "Offer",
          price: "200",
          priceCurrency: "INR"
         }
      },
      {
         "@type": "Event",
         name: "Laser Light Show",
         startDate: "2026-02-18T18:00:00+05:30",
         description: "A spectacular laser light and music show.",
          location: {
            "@type": "Place",
            name: "Mini Auditorium, SRMU",
            address: "SRMU Campus, Lucknow-Deva Road"
         }
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(eventSchema) }}
      />
    </>
  );
}
