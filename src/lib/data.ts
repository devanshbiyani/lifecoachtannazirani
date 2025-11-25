export const languages = ['en'];

export const locations = ['india'];

export const services = [
  {
    slug: 'life-mindset-coaching',
    name: 'Life and Mindset Coaching',
    description: 'Unlocking individual potential and overcoming mental blocks for personal transformation.',
    color: 'bg-blue-600',
    icon: '🧠', // Will replace with SVG later
  },
  {
    slug: 'relationship-counselling',
    name: 'Relationship Counselling',
    description: 'Helping couples and individuals resolve conflicts and strengthen bonds.',
    color: 'bg-red-600',
    icon: '❤️',
  },
  {
    slug: 'parenting-coaching',
    name: 'Parenting Coaching (Conscious Parenting)',
    description: 'Guiding parents in raising emotionally healthy children.',
    color: 'bg-green-600',
    icon: '👨‍👩‍👧‍👦',
  },
  {
    slug: 'bollywood-career-mentorship',
    name: 'Bollywood Career Mentorship',
    description: 'Providing mentorship for aspiring artists in the Bollywood industry.',
    color: 'bg-purple-600',
    icon: '🎭',
  },
  {
    slug: 'motivational-speaker',
    name: 'Motivational Speaker',
    description: 'Delivering inspiring talks for corporate and social events.',
    color: 'bg-yellow-600',
    icon: '🎤',
  },
];

export const serviceInfo = {
  duration: 'Approximately 45 minutes',
  mode: 'Video calls (such as Google Meet)',
  fee: '₹3,499',
  methodology: 'Advanced NLP (Neuro-Linguistic Programming), Emotional Intelligence, Subconscious Rewiring',
  group: 'Masterclasses and webinars (longer duration, starting from ₹499)',
  booking: 'Platforms like Advice Bazaar or personal Tannaz Irani Academy website',
};

export const contact = {
  phone: '8850289982',
};

export const getServiceBySlug = (slug: string) =>
  services.find((s) => s.slug === slug);
