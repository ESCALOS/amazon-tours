export const SITE_TITLE = "Iquitos Expedition";

export const SITE_DESCRIPTION =
  "Descubre los mejores Paquetes Turísticos, junto a nosotros.  Somos tu mejor opción en tus viajes en Pareja, En Familia y amigos. Celebra junto a nosotros tu viaje de Luna de miel, viajes de Cumpleaños, aniversarios. En los Mejores hoteles y Lodge en la Selva.";

export const mainSlides = [
  "Bienvenidos a la Amazonía",
  "Monos y aves en su habitat",
  "Descubramos Pacaya Samiria",
  "Exploremos el río amazonas",
  "Heliconia Amazon Lodge",
  "Irapay Amazon Lodge",
];

export const programsOptions = [
  "Irapay Amazon",
  "Heliconia Lodge",
  "Cumaceba Lodge",
  "Pacaya Samiria",
  "Tours Diarios",
];

export const activityOptions = [
  "Actividad 1",
  "Actividad 2",
  "Actividad 3",
  "Actividad 4",
  "Actividad 5",
];

export const navItems = [
  {
    id: 1,
    path: "/",
    text: "Inicio",
  },
  {
    id: 2,
    path: "/nosotros",
    text: "Nosotros",
  },
  {
    id: 3,
    path: "/",
    text: "Irapay amazon",
  },
  {
    id: 4,
    path: "/",
    text: "Heliconia Lodge",
  },
  {
    id: 5,
    path: "/",
    text: "Cumaceba Lodge",
  },
  {
    id: 6,
    path: "/tours-pacaya-samiria",
    text: "Pacaya Samiria",
  },
  {
    id: 7,
    path: "/tours-diarios",
    text: "Tours Diarios",
  },
  {
    id: 8,
    path: "/galeria",
    text: "Galería",
  },
  {
    id: 9,
    path: "/contactenos",
    text: "Contáctenos",
  },
];

export const tourCardItems = [
  {
    id: 1,
    imgPath: "/src/images/slide/1.png",
    title: "Iquitos de Lujo en Irapay Amazon Lodge",
    description:
      "Explora junto a nosotros las maravillas turísticas de la Amazonía peruana. Iquitos te espera para vivir la mejor aventura de tu vida, navegando el río más caudaloso del mundo, observar delfines, tener contacto con la naturaleza y comunidades nativas con sus costumbres ancestrales.",
    duration: "3 días/2 noches",
  },
  {
    id: 2,
    imgPath: "/src/images/slide/2.png",
    title: "Explorando el Amazonas en Heliconia Amazon Lodge",
    description:
      "Explora junto a nosotros las maravillas turísticas de la Amazonía peruana. Iquitos te espera para vivir la mejor aventura de tu vida, navegando el río más caudaloso del mundo, observar delfines, tener contacto con la naturaleza y comunidades nativas con sus costumbres ancestrales.",
    duration: "4 días/3 noches",
  },
  {
    id: 3,
    imgPath: "/src/images/slide/3.png",
    title: "Relax en la selva Cumaceba",
    description:
      "Explora junto a nosotros las maravillas turísticas de la Amazonía peruana. Iquitos te espera para vivir la mejor aventura de tu vida, navegando el río más caudaloso del mundo, observar delfines, tener contacto con la naturaleza y comunidades nativas con sus costumbres ancestrales.",
    duration: "3 días/2 noches",
  },
  {
    id: 4,
    imgPath: "/src/images/slide/4.png",
    title: "Tours diarios Isla  de los monos",
    description:
      "Explora junto a nosotros las maravillas turísticas de la Amazonía peruana. Iquitos te espera para vivir la mejor aventura de tu vida, navegando el río más caudaloso del mundo, observar delfines, tener contacto con la naturaleza y comunidades nativas con sus costumbres ancestrales.",
    duration: "Todos los días",
  },
  {
    id: 5,
    imgPath: "/src/images/slide/5.png",
    title: "Pacaya Samiria desde Iquitos",
    description:
      "Explora junto a nosotros las maravillas turísticas de la Amazonía peruana. Iquitos te espera para vivir la mejor aventura de tu vida, navegando el río más caudaloso del mundo, observar delfines, tener contacto con la naturaleza y comunidades nativas con sus costumbres ancestrales.",
    duration: "4 días/3 noches",
  },
  {
    id: 6,
    imgPath: "/src/images/slide/6.png",
    title: "Pacaya Samiria desde Tarapoto",
    description:
      "Explora junto a nosotros las maravillas turísticas de la Amazonía peruana. Iquitos te espera para vivir la mejor aventura de tu vida, navegando el río más caudaloso del mundo, observar delfines, tener contacto con la naturaleza y comunidades nativas con sus costumbres ancestrales.",
    duration: "6 días/5 noches",
  },
];

export const contactItems = [
  {
    title: "Llámanos",
    text: import.meta.env.PUBLIC_PHONE_NUMBER,
    href: `tel:+51${import.meta.env.PUBLIC_PHONE_NUMBER}`,
    icon: "phone",
    target: false,
  },
  {
    title: "Correo electrónico",
    text: import.meta.env.PUBLIC_EMAIL,
    href: `mailto:${import.meta.env.PUBLIC_EMAIL}`,
    icon: "envelope-open",
    target: false,
  },
  {
    title: "Facebook",
    text: "Iquitos Expedition",
    href: "https://www.facebook.com/profile.php?id=100094933690034&mibextid=ZbWKwL",
    icon: "facebook",
    target: true,
  },
  {
    title: "Instagram",
    text: "iquitosexpeditionperu",
    href: "https://www.instagram.com/iquitosexpeditionperu?igsh=dGtpeGZhbnZ5cTV4",
    icon: "instagram",
    target: true,
  },
  {
    title: "TikTok",
    text: "iquitos.expedition",
    href: "https://www.tiktok.com/@iquitos.expedition?is_from_webapp=1&sender_device=pc",
    icon: "tiktok",
    target: true,
  },
];

export const socialMedias = [
  {
    id: 1,
    icon: "facebook",
    link: "https://www.facebook.com/profile.php?id=100094933690034&mibextid=ZbWKwL",
  },
  {
    id: 2,
    icon: "instagram",
    link: "https://www.instagram.com/iquitosexpeditionperu?igsh=dGtpeGZhbnZ5cTV4",
  },
  {
    id: 3,
    icon: "tiktok",
    link: "https://www.tiktok.com/@iquitos.expedition?is_from_webapp=1&sender_device=pc",
  },
];

export const relatedLinks = [
  {
    id: 1,
    title: "Mincetur",
    link: "https://www.google.com/",
  },
  {
    id: 2,
    title: "¿Y tú que planes?",
    link: "https://www.google.com/",
  },
  {
    id: 3,
    title: "GORE Amazonas",
    link: "https://www.google.com/",
  },
  {
    id: 4,
    title: "Tripadvisor",
    link: "https://www.google.com/",
  },
  {
    id: 5,
    title: "Marca Perú",
    link: "https://www.google.com/",
  },
];

export const otherInterests = [
  {
    id: 1,
    title: "Irapay Amazon",
    link: "https://www.google.com/",
  },
  {
    id: 2,
    title: "Heliconia Lodge",
    link: "https://www.google.com/",
  },
  {
    id: 3,
    title: "Cumaceba Lodge",
    link: "https://www.google.com/",
  },
  {
    id: 4,
    title: "Pacaya Samiria",
    link: "/tours-pacaya-samiria",
  },
  {
    id: 5,
    title: "Tours Diarios",
    link: "/tours-diarios",
  },
];
