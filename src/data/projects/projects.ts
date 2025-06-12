export interface App {
  id: string;
  name: string;
  screenshots: string[];
  description: string;
  icon: string;
}

export interface ProjectType {
  mobile: {
    [key: string]: string;
  };
  web: {
    [key: string]: string;
  };
}

export interface Technologies {
  mobile: {
    [key: string]: string[];
  };
  web: {
    [key: string]: string[];
  };
}

export const apps: App[] = [
  {
    id: '1',
    name: 'Resepsion',
    icon: '/app-icons/resepsion.jpg',
    screenshots: [
      '/screenshots/resepsion/1.jpg',
      '/screenshots/resepsion/2.jpg',
      '/screenshots/resepsion/3.jpg',
      '/screenshots/resepsion/4.jpg',
      '/screenshots/resepsion/5.jpg',
      '/screenshots/resepsion/6.jpg',
    ],
    description: 'A hotel, bungalow, and villa reservation application where users can create booking requests and receive offers from various accommodation providers.'
  },
  {
    id: '2',
    name: 'Apparelte',
    icon: '/app-icons/apparelte.png',
    screenshots: [
      '/screenshots/apparelte/1.jpg',
      '/screenshots/apparelte/2.jpg',
      '/screenshots/apparelte/3.jpg',
      '/screenshots/apparelte/4.jpg',
      '/screenshots/apparelte/5.jpg',
      '/screenshots/apparelte/6.jpg',
    ],
    description: 'A fashion combination app where users can discover, create, and share outfit combinations.'
  },
  {
    id: '3',
    name: 'MobiWax',
    icon: '/app-icons/mobiWax.png',
    screenshots: [],
    description: 'A global car wash service application that connects customers with mobile car wash providers.'
  },
  {
    id: '4',
    name: 'AGS Urla',
    icon: '/app-icons/ags.png',
    screenshots: [
      '/screenshots/ags/1.jpg',
      '/screenshots/ags/2.jpg',
      '/screenshots/ags/3.jpg',
      '/screenshots/ags/4.jpg',
      '/screenshots/ags/5.jpg',
    ],
    description: 'A specialized security services application for the Urla region.'
  },
  {
    id: '5',
    name: 'GeVi',
    icon: '/app-icons/GeVi.jpg',
    screenshots: [],
    description: 'A unique video messaging app that allows users to send scheduled video messages to their loved ones in the future.'
  },
  {
    id: '6',
    name: 'Courier',
    icon: '/app-icons/courier.png',
    screenshots: [],
    description: 'An intelligent delivery management system that automatically assigns restaurant orders to available couriers.'
  },
  {
    id: '7',
    name: 'PyLearn',
    icon: '/app-icons/pyLearn.png',
    screenshots: [],
    description: 'An interactive Python programming education platform offering structured learning paths.'
  },
  {
    id: '8',
    name: 'Dispatcher Quiz',
    icon: '/app-icons/dispatcher.png',
    screenshots: [
      '/screenshots/dispatcher/1.jpg',
      '/screenshots/dispatcher/2.jpg',
      '/screenshots/dispatcher/3.jpg',
      '/screenshots/dispatcher/4.jpg',
    ],
    description: 'A specialized training and examination application for aviation dispatchers.'
  },
  {
    id: '9',
    name: 'Resepsion Plus',
    icon: '/app-icons/resepsion_plus.png',
    screenshots: [
      '/screenshots/resepsion_plus/1.jpg',
      '/screenshots/resepsion_plus/2.jpg',
      '/screenshots/resepsion_plus/3.jpg',
      '/screenshots/resepsion_plus/4.jpg',
      '/screenshots/resepsion_plus/5.jpg',
      '/screenshots/resepsion_plus/6.jpg',
    ],
    description: 'A comprehensive hotel and accommodation management platform.'
  }
];

export const projectDetails: ProjectType = {
  mobile: {
    'Apparelte': 'A fashion combination app where users can discover, create, and share outfit combinations. Features include following other users, rating combinations, leaving comments, and building a personalized style community.',
    'Resepsion Plus': 'A comprehensive hotel and accommodation management platform where businesses can create room listings and respond to reservation requests. Enables direct communication between accommodation providers and customers.',
    'Resepsion': 'A hotel, bungalow, and villa reservation application where users can create booking requests and receive offers from various accommodation providers. Streamlines the booking process for both customers and property owners.',
    'MobiWax': 'A global car wash service application that connects customers with mobile car wash providers. Users can request on-demand car wash services at their location, making vehicle maintenance more convenient.',
    'AGS Urla': 'A specialized security services application for the Urla region. Provides information about security services, emergency contacts, and real-time security updates for local businesses and residents.',
    'GeVi': 'A unique video messaging app that allows users to send scheduled video messages to their loved ones in the future. Perfect for creating lasting memories and special moments.',
    'Courier': 'An intelligent delivery management system that automatically assigns restaurant orders to available couriers. Features real-time order tracking and status updates for both restaurants and couriers.',
    'PyLearn': 'An interactive Python programming education platform offering structured learning paths, practical exercises, and real-time coding feedback for beginners and intermediate learners.',
    'Dispatcher Quiz': 'A specialized training and examination application for aviation dispatchers. Provides comprehensive study materials, practice tests, and performance analytics.'
  },
  web: {
    'TridyGames': 'A custom website for TridyGames, featuring game showcases, company information, and interactive elements. Built with modern web technologies to provide an engaging user experience.',
    'Resepsion': 'A comprehensive web platform for the Resepsion reservation system, including an admin panel, booking management, and detailed property listings. Features real-time availability updates and secure payment processing.',
    'Apparelte': 'A landing page and promotional website for the Apparelte mobile app, showcasing features, technology stack, and user benefits. Includes detailed information about the app\'s capabilities and design philosophy.'
  }
};

export const technologies: Technologies = {
  mobile: {
    'Apparelte': ['/tech-icons/flutter.webp', '/tech-icons/firebase.png', '/tech-icons/git.png', '/tech-icons/django.png', '/tech-icons/figma.webp'],
    'Resepsion Plus': ['/tech-icons/flutter.webp', '/tech-icons/firebase.png', '/tech-icons/git.png', '/tech-icons/node_js.png'],
    'Resepsion': ['/tech-icons/flutter.webp', '/tech-icons/firebase.png', '/tech-icons/git.png', '/tech-icons/node_js.png'],
    'MobiWax': ['/tech-icons/flutter.webp', '/tech-icons/firebase.png', '/tech-icons/node_js.png', '/tech-icons/git.png'],
    'AGS Urla': ['/tech-icons/flutter.webp', '/tech-icons/firebase.png','/tech-icons/node_js.png', '/tech-icons/git.png'],
    'GeVi': ['/tech-icons/flutter.webp', '/tech-icons/firebase.png', '/tech-icons/git.png'],
    'Courier': ['/tech-icons/flutter.webp', '/tech-icons/firebase.png','/tech-icons/node_js.png', '/tech-icons/git.png','/tech-icons/figma.webp'],
    'PyLearn': ['/tech-icons/flutter.webp', '/tech-icons/firebase.png', '/tech-icons/git.png'],
    'Dispatcher Quiz': ['/tech-icons/flutter.webp', '/tech-icons/firebase.png', '/tech-icons/git.png']
  },
  web: {
    'TridyGames': ['/tech-icons/next_js.png', '/tech-icons/tailwind.png', '/tech-icons/git.png'],
    'Resepsion': ['/tech-icons/next_js.png', '/tech-icons/tailwind.png','/tech-icons/firebase.png', '/tech-icons/git.png'],
    'Apparelte': ['/tech-icons/flutter.webp', '/tech-icons/git.png'],
  }
};

export const projectLogos: { [key: string]: string } = {
  'Resepsion': '/app-icons/resepsion.jpg',
  'Apparelte': '/app-icons/apparelte.png',
  'MobiWax': '/app-icons/mobiWax.png',
  'AGS Urla': '/app-icons/ags.png',
  'GeVi': '/app-icons/GeVi.jpg',
  'Courier': '/app-icons/courier.png',
  'PyLearn': '/app-icons/pyLearn.png',
  'Dispatcher Quiz': '/app-icons/dispatcher.png',
  'Resepsion Plus': '/app-icons/resepsion_plus.png',
  'TridyGames': '/app-icons/tridygames.jpeg',
  'Resepsion Web': '/app-icons/resepsion.jpg',
  'Apparelte Web': '/app-icons/apparelte.png',
  'Portfolio': '/app-icons/sukrukemuk.png',
  'API Backend': '/app-icons/sukrukemuk.png'
}; 