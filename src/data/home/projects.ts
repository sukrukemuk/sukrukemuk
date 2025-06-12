interface Project {
  name: string;
  img: string;
  desc: string;
  tech: {
    name: string;
    icon: string;
  }[];
  link: string;
}

export const projects: Project[] = [
  {
    name: 'Resepsion',
    img: '/app-icons/resepsion.jpg',
    desc: 'A comprehensive hotel and accommodation management platform where businesses can create room listings and respond to reservation requests.',
    tech: [
      { name: 'Flutter', icon: '/tech-icons/flutter.webp' },
      { name: 'Firebase', icon: '/tech-icons/firebase.png' },
      { name: 'Node.js', icon: '/tech-icons/node_js.png' }
    ],
    link: '/projects'
  },
  {
    name: 'Apparelte',
    img: '/app-icons/apparelte.png',
    desc: 'A fashion combination app where users can discover, create, and share outfit combinations.',
    tech: [
      { name: 'Flutter', icon: '/tech-icons/flutter.webp' },
      { name: 'Firebase', icon: '/tech-icons/firebase.png' },
      { name: 'Django', icon: '/tech-icons/django.png' },
      { name: 'Figma', icon: '/tech-icons/figma.webp' }
    ],
    link: '/projects'
  },
  {
    name: 'TridyGames',
    img: '/app-icons/tridygames.jpeg',
    desc: 'A custom website for TridyGames, featuring game showcases, company information, and interactive elements.',
    tech: [
      { name: 'Next.js', icon: '/tech-icons/next_js.png' },
      { name: 'Tailwind', icon: '/tech-icons/tailwind.png' }
    ],
    link: 'https://tridy-games.vercel.app/'
  }
]; 