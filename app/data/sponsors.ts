export interface Sponsor {
  name: string;
  logo: string;
  href: string;
  type?: "gold" | "silver" | "none";
}

export const sponsors: Sponsor[] = [
  {
    name: "Ace Host",
    logo: "ace_host.png",
    href: "https://www.acehost.com/?utm_source=tampadevs&utm_medium=referral&utm_campaign=community_sponsor",
    type: "gold",
  },
  {
    name: "xByte Technologies",
    logo: "xbyte_technologies.svg",
    href: "https://www.xbyte.com/?utm_source=tampadevs&utm_medium=referral&utm_campaign=community_sponsor",
    type: "gold",
  },
  {
    name: "Packfiles",
    logo: "packfiles.svg",
    href: "https://packfiles.io/?utm_source=tampadevs&utm_medium=referral&utm_campaign=community_sponsor",
    type: "silver",
  },
  {
    name: "Fair Economy",
    logo: "fair_economy.jpg",
    href: "https://www.faireconomy.com/?utm_source=tampadevs&utm_medium=referral&utm_campaign=community_sponsor",
    type: "silver",
  },
  {
    name: "Donut",
    logo: "donut_app_150.png",
    href: "https://www.donut.com/?utm_source=tampadevs&utm_medium=referral&utm_campaign=community_sponsor",
    type: "silver",
  },
  {
    name: "redirect.pizza",
    logo: "redirect_pizza.svg",
    href: "https://redirect.pizza/?utm_source=tampadevs&utm_medium=referral&utm_campaign=community_sponsor",
    type: "silver",
  },
  {
    name: "Brooksource",
    logo: "brooksource.png",
    href: "https://www.brooksource.com/?utm_source=tampadevs&utm_medium=referral&utm_campaign=community_sponsor",
  },
  {
    name: "Embarc Collective",
    logo: "embarc_logo.svg",
    href: "https://www.embarccollective.com/?utm_source=tampadevs&utm_medium=referral&utm_campaign=community_sponsor",
  },
  {
    name: "USF College of Engineering",
    logo: "usf-engineering-logo.png",
    href: "https://www.usf.edu/engineering/?utm_source=tampadevs&utm_medium=referral&utm_campaign=community_sponsor",
  },
];

export function getGoldSponsors(): Sponsor[] {
  return sponsors.filter((s) => s.type === "gold");
}

export function getSilverSponsors(): Sponsor[] {
  return sponsors.filter((s) => s.type === "silver");
}

export function getAllSponsors(): Sponsor[] {
  return sponsors;
}
