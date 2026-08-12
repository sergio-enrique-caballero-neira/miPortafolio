// Site-wide configuration
export const siteConfig = {
  // Site metadata
  name: "Portafolio",
  title: "Portafolio",
  description: "Un portafolio moderno creado con astro",
  
  // Navigation
  navigation: {
    home: "Home",
    posts: "Posts",
    contact: "Contacto",
    comments: "Comentarios",
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
    subtitle: "Estoy siempre atento a cualquier sugerencia que puedas darme",
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
        { name: "LinkedIn", icon: "/svg/linkedin.svg", url: "https://www.linkedin.com/company/astrodotbuild" },
        { name: "Facebook", icon: "/svg/facebook.svg", url: "https://www.facebook.com/astrodotbuild" },
        { name: "GitHub", icon: "/svg/github.svg", url: "https://github.com/tomcomtang/astro-cartoon-portfolio" },
      ],
    },
    footerText: [
      "Usualmente respondo los mensajes que me envias dentro de las 24H habiles",
      "Esperando escuchar de ti! 🚀",
    ],
    messageButton: "💬 Deja un mensaje",
  },
  
  // Footer
  footer: {
    copyright: "© 2025 Astro - Sergio Enrique Caballero Neira. All rights reserved.",
    links: [
      { text: "Politicas de privacidad", url: "#" },
      { text: "Terminos de uso", url: "#" },
      { text: "Sitemap", url: "#" },
    ],
    github: {
      text: "",
      url: "",
    },
  },
  
  // Posts Page
  posts: {
    title: "Blog Posts",
    subtitle: "Explora mis ultimos articulos en tecnologia",
    searchPlaceholder: "Buscando Post...",
  },
  
  // Comments Page
  comments: {
    title: "Comentarios y Discusiones",
    subtitle: "Comparte tus pensamientos, Preguntas, o Sugerencias. Conectemos y Discutamos!",
    guidelines: {
      title: "Reglas de la comunidad",
      items: [
        "Se respetuoso y contructivo en tus comentarios",
        "No se permite ningun tipo de spam, anuncios o autopromocion",
        "No se permiten ataques personales ni ningun tipo de discurso de odio",
        "Mantente en el tema y manten comentarios relevantes en la discusion",
        "No se permite contenido inapropiado o ilegal",
      ],
    },
  },
};

