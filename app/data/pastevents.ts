export interface PastEvent {
  title: string;
  altText: string;
  image: string;
}

export const pastEvents: PastEvent[] = [
  {
    title: "Rose Bar Tampa - Networking",
    altText: "Jona and Alex at Rose Bar Tampa",
    image: "td-1.webp",
  },
  {
    title: "Git Workshop",
    altText: "Lydia giving a workshop on Git",
    image: "td-2.webp",
  },
  {
    title: "React Workshop",
    altText: "React workshop being recorded",
    image: "td-3.webp",
  },
  {
    title: "TDevs - Networking @ Sparkman's Wharf",
    altText: "Tampa Devs Community Members in front of LightHaus Beer Garden",
    image: "td-4.webp",
  },
  {
    title: "Networking Event",
    altText: "Tampa Devs members networking",
    image: "td-5.webp",
  },
  {
    title: "Community Meetup",
    altText: "Tampa Devs community meetup",
    image: "td-6.webp",
  },
  {
    title: "TADHacks Telecom Hackathon",
    altText: "Room full of TADHacks participants",
    image: "PXL_20210926_200143837.webp",
  },
];

export function getPastEvents(): PastEvent[] {
  return pastEvents;
}
