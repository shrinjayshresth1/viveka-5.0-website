export default function JsonLd() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "TechFusion Club - SRMU",
    url: "https://www.vivekatheintelligence.tech",
    logo: "https://www.vivekatheintelligence.tech/viveka-logo.webp",
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
    startDate: "2026-02-18",
    endDate: "2026-02-20",
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
    image: "https://www.vivekatheintelligence.tech/og-image.png",
    organizer: {
      "@type": "Organization",
      name: "TechFusion Club - SRMU",
      url: "https://www.vivekatheintelligence.tech",
    },
    offers: {
      "@type": "Offer",
      url: "https://www.vivekatheintelligence.tech/events",
      availability: "https://schema.org/InStock",
      priceCurrency: "INR",
      price: "0",
      validFrom: "2026-01-01",
    },
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
