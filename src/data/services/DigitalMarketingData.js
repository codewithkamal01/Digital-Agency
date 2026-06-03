import { service_images } from "../../assets/assets";

export const digitalMarketingData = {
  hero: {
    badge: "Digital Marketing Services",
    title: "SEO, GEO & Lead Generation Systems Built For Growth",
    description:
      "From search visibility and AI-powered discovery to verified lead generation and outbound campaigns, we help businesses build predictable growth engines.",
    ctaPrimary: "Book Strategy Call",
    ctaSecondary: "Explore Services",
    image: service_images.digitalmarketing,
  },

  services: [
    {
      id: "foundational-seo",

      title: "Foundational Search Engine Optimization",

      subtitle: "Complimentary Program",

      type: "starter",

      description:
        "A baseline SEO setup designed to establish search visibility for verified businesses beginning their digital journey.",

      idealFor: [
        "Newly Registered Businesses",
        "MSMEs",
        "Local Service Providers",
      ],

      features: [
        "Website SEO Health Check",
        "Basic On-Page Optimization",
        "Google Search Console Setup",
        "Indexing & Sitemap Configuration",
      ],

      eligibility: [
        "Verified Business",
        "Website Must Be Live",
        "Business Information Available",
      ],

      conditions: [
        "Foundational SEO only",
        "Advanced SEO requires separate engagement",
      ],
    },

    {
      id: "advanced-seo",

      title: "Advanced SEO & Organic Growth",

      subtitle: "Long-Term Search Visibility",

      type: "growth",

      description:
        "Comprehensive SEO programs focused on sustained organic traffic growth, rankings, and lead generation.",

      idealFor: [
        "Growing Businesses",
        "B2B Organizations",
        "E-Commerce Brands",
      ],

      features: [
        "Keyword Research",
        "Content Mapping",
        "Technical SEO",
        "Authority Building",
        "Backlink Strategy",
        "Monthly Reporting",
      ],

      eligibility: [],

      conditions: [
        "Minimum 3–6 month engagement recommended",
        "Results depend on competition and industry",
      ],
    },

    {
      id: "geo",

      title: "Generative Engine Optimization (GEO)",

      subtitle: "AI Search Visibility",

      type: "future-ready",

      description:
        "Optimize visibility across AI-powered search engines, answer engines, and LLM-driven discovery platforms.",

      idealFor: ["Consultants", "Thought Leaders", "Knowledge Businesses"],

      features: [
        "AI Search Audit",
        "LLM Content Structuring",
        "Trust Signal Optimization",
        "Brand Authority Building",
        "AI Discovery Strategy",
      ],

      eligibility: [],

      conditions: [
        "Requires content-driven business presence",
        "Best combined with SEO initiatives",
      ],
    },

    {
      id: "verified-leads",

      title: "Verified Lead Generation",

      subtitle: "Sales Pipeline Enablement",

      type: "performance",

      description:
        "Delivering verified and sales-ready leads aligned with your ideal customer profile.",

      idealFor: [
        "B2B Companies",
        "Enterprise Sales Teams",
        "High-Ticket Service Providers",
      ],

      features: [
        "Lead Verification",
        "ICP Targeting",
        "CRM-Ready Delivery",
        "Performance-Based Models",
      ],

      eligibility: [],

      conditions: [
        "Lead quality depends on ICP definition",
        "Requires sales follow-up process",
      ],
    },

    {
      id: "cold-email",

      title: "Cold Email Outreach",

      subtitle: "Outbound Lead Generation",

      type: "outreach",

      description:
        "Scalable outbound email campaigns designed to generate meetings, inquiries, and opportunities.",

      idealFor: ["B2B Businesses", "Consultants", "SaaS Companies"],

      features: [
        "Prospect Research",
        "Email Sequences",
        "Automated Follow-Ups",
        "Performance Tracking",
      ],

      eligibility: [],

      conditions: [
        "Requires approved target audience",
        "Compliance-first campaign execution",
      ],
    },

    {
      id: "whatsapp-outreach",

      title: "WhatsApp Outreach Campaigns",

      subtitle: "Direct Messaging Strategy",

      type: "outreach",

      description:
        "High-engagement WhatsApp campaigns designed for faster responses and direct conversations.",

      idealFor: [
        "Local Businesses",
        "Appointment-Based Businesses",
        "Service Companies",
      ],

      features: [
        "Personalized Messaging",
        "Campaign Scheduling",
        "Response Management",
        "Compliance Monitoring",
      ],

      eligibility: [],

      conditions: [
        "Target audience approval required",
        "Platform compliance maintained",
      ],
    },
  ],

  faqs: [
    {
      question: "How long does SEO take to show results?",
      answer:
        "Most businesses begin seeing measurable improvements within 3-6 months depending on competition and industry.",
    },

    {
      question: "What is GEO?",
      answer:
        "Generative Engine Optimization improves visibility in AI-powered search engines and answer platforms such as ChatGPT, Gemini, and Perplexity.",
    },

    {
      question: "Do you provide verified leads?",
      answer:
        "Yes. We offer verified lead generation programs aligned with your ICP and business goals.",
    },

    {
      question: "Do you manage outreach campaigns?",
      answer:
        "Yes. We manage email, WhatsApp, tele-sales, and SMS campaigns end-to-end.",
    },
  ],
};
