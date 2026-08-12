// Site-wide configuration
export const siteConfig = {
  // Site metadata
  name: "Astro Blog",
  title: "Astro Blog",
  description: "A modern blog built with Astro",
  
  // Navigation
  navigation: {
    home: "Home",
    posts: "Posts",
    contact: "Contact",
    comments: "Comments",
  },
  
  // Hero Section
  hero: {
    prefix: "Yo soy",
    name: "Sergio Enrique Caballero Neira",
    intro: "Soy un estudiante de ingenieria de sistemas en la universidad El Bosque",
    avatar: "/image/20943608.jpeg",
    buttons: {
      viewPosts: "Ver post",
      contactMe: "Contactame",
    },
    socialLinks: [
      { name: "Twitter", icon: "/svg/twitter.svg", url: "https://x.com/astrodotbuild" },
      { name: "LinkedIn", icon: "/svg/linkedin.svg", url: "https://www.linkedin.com/company/astrodotbuild" },
      { name: "Facebook", icon: "/svg/facebook.svg", url: "https://www.facebook.com/astrodotbuild" },
      { name: "GitHub", icon: "/svg/github.svg", url: "https://github.com/tomcomtang/astro-cartoon-portfolio" },
    ],
  },
  
  // About Section
  about: {
    title: "Sobre mi",
    text: "Soy alguien que le ah gustado programar desde una temprana edad, mis pasatiempos son principalmente los videojuegos",
  },
  
  // Contact Page
  contact: {
    title: "Ponte en contacto",
    subtitle: "I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.",
    info: {
      email: {
        label: "Email",
        value: "scaballeron@unbosque.edu.co",
        link: "mailto:scaballeron@unbosque.edu.co",
      },
      phone: {
        label: "Telefono",
        value: "+57 311 7277436",
        link: "tel:+1 (311) 7277436",
      },
      location: {
        label: "Ubicacion",
        value: "Bogota D.C., Colombia",
      },
    },
    followMe: {
      title: "Sigueme",
      links: [
        { name: "Twitter", icon: "/svg/twitter.svg", url: "https://x.com/astrodotbuild" },
        { name: "LinkedIn", icon: "/svg/linkedin.svg", url: "https://www.linkedin.com/company/astrodotbuild" },
        { name: "Facebook", icon: "/svg/facebook.svg", url: "https://www.facebook.com/astrodotbuild" },
        { name: "GitHub", icon: "/svg/github.svg", url: "https://github.com/tomcomtang/astro-cartoon-portfolio" },
      ],
    },
    footerText: [
      "I typically respond to messages within 24 hours during business days.",
      "Looking forward to hearing from you! 🚀",
    ],
    messageButton: "💬 Leave a Message",
  },
  
  // Footer
  footer: {
    copyright: "© 2025 Someone. All rights reserved.",
    links: [
      { text: "Privacy Policy", url: "#" },
      { text: "Terms of Service", url: "#" },
      { text: "Sitemap", url: "#" },
    ],
    github: {
      text: "Star this project on Github",
      url: "https://github.com/tomcomtang/astro-cartoon-portfolio",
    },
  },
  
  // Posts Page
  posts: {
    title: "Blog Posts",
    subtitle: "Explore our latest articles on web development, design, and technology",
    searchPlaceholder: "Search posts...",
  },
  
  // Comments Page
  comments: {
    title: "Comments & Discussion",
    subtitle: "Share your thoughts, questions, or suggestions here. Let's connect and discuss!",
    guidelines: {
      title: "Community Guidelines",
      items: [
        "Be respectful and constructive in your comments",
        "No spam, self-promotion, or advertising allowed",
        "No personal attacks, hate speech, or harassment",
        "Stay on topic and keep discussions relevant",
        "No inappropriate, offensive, or illegal content",
        "Use clear, friendly, and inclusive language",
      ],
    },
  },
};

