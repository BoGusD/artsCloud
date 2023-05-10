const URL = "http://localhost:3000";

export interface iconSrcMapType {
  origin: string;
  hover: string;
  alt: string;
  link: string;
}
export const iconSrcMap: iconSrcMapType[] = [
  {
    origin: `${URL}/discordLogo.svg`,
    hover: `${URL}/discordHover.svg`,
    alt: "discord",
    link: "https://discord.com/invite/DEygdYYySs",
  },
  {
    origin: `${URL}/facebookLogo.svg`,
    hover: `${URL}/facebookHover.svg`,
    alt: "facebook",
    link: "https://www.facebook.com/artscloud.official/",
  },
  {
    origin: `${URL}/instagramLogo.svg`,
    hover: `${URL}/instagramHover.svg`,
    alt: "instagram",
    link: "https://www.instagram.com/artscloud.official/?hl=ko",
  },
  {
    origin: `${URL}/twitterLogo.svg`,
    hover: `${URL}/twitterHover.svg`,
    alt: "twitter",
    link: "https://twitter.com/ARTSCLOUD_STORY",
  },
  {
    origin: `${URL}/youtubeLogo.svg`,
    hover: `${URL}/youtubeHover.svg`,
    alt: "youtube",
    link: "https://www.youtube.com/channel/UCthS_4pi7RhP1pqt0qpfJEQ",
  },
];
