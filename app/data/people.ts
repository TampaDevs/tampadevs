export interface TeamMember {
  name: string;
  title: string;
  bio?: string;
  image: string;
  teams: string[];
  href?: {
    type: string;
    url: string;
  };
  order?: number;
}

export const people: TeamMember[] = [
  {
    name: "Matthew Yorkgitis",
    title: "President",
    bio: "Executive level software engineer, manager, and strategist with a passion for leveraging technology to create more impactful businesses and supportive communities.",
    image: "matt_yorkgitis.jpg",
    teams: ["Team Core", "Organizers"],
    href: {
      type: "LinkedIn",
      url: "https://www.linkedin.com/in/matthewyorkgitis/",
    },
    order: 1,
  },
  {
    name: "Josef Sieber",
    title: "Program Manager",
    bio: "Data Scientist, but still a big fan of gut hunches. Ad Hoc Statistician.",
    image: "josef_siber.jpg",
    teams: ["Team Core", "Organizers"],
    href: {
      type: "LinkedIn",
      url: "https://www.linkedin.com/in/josef-sieber/",
    },
    order: 2,
  },
  {
    name: "Nelson Yee",
    title: "Events Coordinator",
    bio: "Driven by a growth mindset, commitment to lifelong learning, and a profound appreciation for technology.",
    image: "nelson_yee.jpg",
    teams: ["Team Core", "Organizers"],
    href: {
      type: "LinkedIn",
      url: "https://www.linkedin.com/in/nelyee/",
    },
    order: 3,
  },
  {
    name: "Justin Herron",
    title: "Principal Cloud Architect, Tampa Devs Community Cloud",
    bio: "Data Center Engineer, Network Engineer and Cloud Architect helping those who are seeking to become better.",
    image: "justin_herron.jpg",
    teams: ["Team Core", "Organizers"],
    href: {
      type: "LinkedIn",
      url: "https://www.linkedin.com/in/desyncit/",
    },
    order: 4,
  },
  {
    name: "Manuel Osorio",
    title: "Lead Open Source Maintainer",
    bio: "Full Stack JavaScript Developer with a passion for supporting Open Source. Primary maintainer of tampadevs.com.",
    image: "manuel_osorio.jpg",
    teams: ["Team Core", "Organizers"],
    href: {
      type: "LinkedIn",
      url: "https://www.linkedin.com/in/manuel-osorio/",
    },
    order: 5,
  },
  {
    name: "Connor Tumbleson",
    title: "Open Source Maintainer",
    bio: "Engineer, Apktool Maintainer, PHP nerd.",
    image: "connor_tumbleson.jpg",
    teams: ["Team Core", "Organizers"],
    href: {
      type: "LinkedIn",
      url: "https://www.linkedin.com/in/connortumbleson/",
    },
    order: 6,
  },
  {
    name: "Vincent Tang",
    title: "Founder of Tampa Devs",
    bio: "Occasional Dance Performer. Runs CodeChefs, a coding podcast for junior devs.",
    image: "vincent_tang.jpg",
    teams: ["Team Core", "Speaker", "Organizers"],
    href: {
      type: "Website",
      url: "https://vincentntang.com",
    },
    order: 7,
  },
  {
    name: "Charlton Trezevant",
    title: "Co-Founder of Tampa Devs",
    bio: "Software engineer and business owner. Developer, tinkerer, and teacher.",
    image: "charlton_trezevant.jpeg",
    teams: ["Team Core", "Speaker", "Organizers"],
    href: {
      type: "Website",
      url: "https://blog.ctis.me/",
    },
    order: 8,
  },
  {
    name: "Haritha Diraneyya",
    title: "Trustee",
    bio: "Project Manager with experience shipping video games on Unity. Passionate about salsa dancing and frontend development.",
    image: "haritha_diraneyya.png",
    teams: ["Team Member", "Organizers"],
    href: {
      type: "LinkedIn",
      url: "https://www.linkedin.com/in/haritha-diraneyya/",
    },
    order: 9,
  },
];

export function getOrganizers(): TeamMember[] {
  return people
    .filter((p) => p.teams.includes("Organizers"))
    .sort((a, b) => (a.order || 99) - (b.order || 99));
}

export function getCoreTeam(): TeamMember[] {
  return people
    .filter((p) => p.teams.includes("Team Core"))
    .sort((a, b) => (a.order || 99) - (b.order || 99));
}
