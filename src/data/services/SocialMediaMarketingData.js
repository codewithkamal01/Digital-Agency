import { service_images } from "../../assets/assets";

export const socialMediaMarketingData = {
  hero: {
    badge: "Social Media Marketing",
    title: "Build Visibility, Engagement & Brand Authority",
    description:
      "From organic growth and influencer campaigns to paid social advertising and video content production, we help brands scale their social presence.",
    ctaPrimary: "Book Consultation",
    ctaSecondary: "View Packages",
    image: service_images.socialmedia,
  },

  offerings: [
    {
      id: "organic-growth",

      title: "Organic Social Media Growth",

      subtitle: "Community & Brand Building",

      type: "growth",

      description:
        "Consistent content creation, publishing, and community management designed to strengthen brand visibility, credibility, and audience trust.",

      idealFor: [
        "Local Brands",
        "Consultants",
        "Service Businesses",
        "Personal Brands",
      ],

      features: [
        "Content Planning",
        "Creative Design",
        "Community Management",
        "Engagement Tracking",
        "Analytics Reporting",
      ],

      eligibility: [],

      conditions: [
        "Client approval required for content publishing",
        "Consistent posting schedule recommended",
      ],
    },

    {
      id: "influencer-marketing",

      title: "Influencer Campaign Management",

      subtitle: "Influencer-Led Brand Promotion",

      type: "awareness",

      description:
        "Strategic influencer collaborations designed to expand reach, build trust, and increase brand awareness among targeted audiences.",

      idealFor: [
        "Consumer Brands",
        "Retail Businesses",
        "Product Launches",
        "D2C Companies",
      ],

      features: [
        "Influencer Discovery",
        "Influencer Vetting",
        "Campaign Management",
        "Content Review",
        "ROI Reporting",
      ],

      eligibility: [],

      conditions: [
        "Influencer selection subject to availability",
        "Campaign budget determined separately",
      ],
    },

    {
      id: "paid-social",

      title: "Paid Social Advertising",

      subtitle: "Performance Marketing Campaigns",

      type: "performance",

      description:
        "Data-driven advertising campaigns across Facebook, Instagram, and LinkedIn focused on lead generation, conversions, and measurable ROI.",

      idealFor: [
        "Lead Generation",
        "B2B Companies",
        "Fast-Growing Startups",
        "Scaling Businesses",
      ],

      features: [
        "Audience Targeting",
        "Ad Creative Design",
        "Campaign Setup",
        "Conversion Tracking",
        "Continuous Optimization",
      ],

      eligibility: [],

      conditions: [
        "Advertising budget excluded from management fees",
        "Performance depends on market competition and offer quality",
      ],
    },

    {
      id: "video-production",

      title: "AI-Led & Human-Led Video Production",

      subtitle: "Modern Video Content Creation",

      type: "content",

      description:
        "Scalable video production combining AI-generated content and real human presenters to create engaging marketing assets efficiently.",

      idealFor: [
        "Educational Content",
        "Product Demonstrations",
        "Social Media Campaigns",
        "Promotional Marketing",
      ],

      features: [
        "AI Avatars",
        "Voice Generation",
        "Human Presenters",
        "Reels Production",
        "Editing & Post Production",
      ],

      eligibility: [],

      conditions: [
        "Scripts require client approval",
        "Video output varies based on production requirements",
      ],
    },
  ],

  faqs: [
    {
      question: "Which social platforms do you manage?",
      answer:
        "We manage Instagram, Facebook, LinkedIn, YouTube, and other platforms based on your audience.",
    },

    {
      question: "Do you create content?",
      answer:
        "Yes. We handle content strategy, creative design, copywriting, reels, and video production.",
    },

    {
      question: "Do you run paid advertising campaigns?",
      answer:
        "Yes. We create, launch, monitor and optimize Meta and LinkedIn advertising campaigns.",
    },

    {
      question: "Can you work with influencers?",
      answer:
        "Absolutely. We identify, vet, negotiate and manage influencer collaborations.",
    },
  ],
};
