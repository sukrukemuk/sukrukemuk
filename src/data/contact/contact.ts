import { IconType } from 'react-icons';
import { FaGithub, FaLinkedin, FaEnvelope, FaInstagram, FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

interface ContactInfo {
  icon: IconType;
  title: string;
  value: string;
  link: string;
  color: string;
}

interface SocialLink {
  icon: IconType;
  name: string;
  url: string;
  color: string;
  ariaLabel?: string;
}

export const contactInfo: ContactInfo[] = [
  {
    icon: FaEnvelope,
    title: "Email",
    value: "sukrukemuk@gmail.com",
    link: "mailto:sukrukemuk@gmail.com",
    color: "blue"
  }
];

export const socialLinks: SocialLink[] = [
  {
    icon: FaGithub,
    name: "GitHub",
    url: "https://github.com/sukrukemuk",
    color: "purple"
  },
  {
    icon: FaLinkedin,
    name: "LinkedIn",
    url: "https://linkedin.com/in/sukrukemuk",
    color: "blue"
  },
  {
    icon: FaInstagram,
    name: "Instagram",
    url: "https://instagram.com/sukrukemuk",
    color: "pink"
  },
  {
    icon: FaXTwitter,
    name: "X",
    url: "https://x.com/sukrukemuk",
    color: "gray",
    ariaLabel: "Visit my X profile"
  },
  {
    icon: FaFacebook,
    name: "Facebook",
    url: "https://facebook.com/sukrukemukk",
    color: "blue",
    ariaLabel: "Visit my Facebook profile"
  }
]; 