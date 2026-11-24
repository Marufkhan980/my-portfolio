export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  year: string;
  summary: string;
  technologies: string[];
  liveUrl: string;
  imageUrl: string;
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  category: 'tech' | 'marketing';
  categoryLabel: string;
  date: string;
  durationOrGrade: string;
  credentialId?: string;
  verifyUrl?: string;
  imageUrl: string;
}

export interface EducationItem {
  degree: string;
  field: string;
  institution: string;
  result: string;
  period: string;
}

export interface StackItem {
  id: string;
  name: string;
  shortCode: string;
  category: string;
  color: string;
}

export const PROFILE = {
  name: 'Maruf Khan',
  role: 'MERN Stack Developer & Digital Marketer',
  location: 'Dhaka, Bangladesh',
  fullAddress: '119/1, Meradia, Khilgaon, Dhaka-1219',
  email: 'marufkhan54443@gmail.com',
  phone: '01758768226',
  linkedin: 'https://www.linkedin.com/in/maruf-khan-5aa053273/',
  github: 'https://github.com/Marufkhan980',
  portraitUrl: '/assets/aistudio/Professional_Studio_Headshot_58b5c48e.png',
  resumeDevPdf: '/assets/aistudio/maruf_dev_a8b1b1ab.pdf',
  resumeDevFilename: 'Maruf_Khan_MERN_Resume.pdf',
  resumeFullCvPdf: '/assets/aistudio/Maruf_Khan_CV_22e0bcb9.pdf',
  resumeFullCvFilename: 'Maruf_Khan_Full_CV.pdf',
  summary:
    'MERN stack developer crafting fast web apps with React, TypeScript, Node.js, and MongoDB—paired with certified digital marketing skills.',
  aboutMe:
    'I am a Computer Science & Engineering student at Northern University Bangladesh focused on building responsive full-stack web applications using MongoDB, Express.js, React.js, Node.js, and TypeScript. Alongside software development, I bring certified expertise in Shopify, Meta Ads, Google Ads, and SEO to help digital products launch cleanly and convert effectively.',
};

export const STACK_ITEMS: StackItem[] = [
  { id: 'react', name: 'React.js', shortCode: 'Re', category: 'Frontend', color: '#38BDF8' },
  { id: 'js', name: 'JavaScript', shortCode: 'JS', category: 'Language', color: '#FACC15' },
  { id: 'ts', name: 'TypeScript', shortCode: 'TS', category: 'Language', color: '#3B82F6' },
  { id: 'node', name: 'Node.js', shortCode: 'Node', category: 'Backend', color: '#22C55E' },
  { id: 'express', name: 'Express.js', shortCode: 'Ex', category: 'Backend', color: '#94A3B8' },
  { id: 'mongo', name: 'MongoDB', shortCode: 'Mg', category: 'Database', color: '#10B981' },
  { id: 'mysql', name: 'MySQL', shortCode: 'SQL', category: 'Database', color: '#0EA5E9' },
  { id: 'firebase', name: 'Firebase', shortCode: 'Fb', category: 'Cloud', color: '#F59E0B' },
  { id: 'tailwind', name: 'Tailwind CSS', shortCode: 'Tw', category: 'Styling', color: '#14B8A6' },
  { id: 'git', name: 'Git & GitHub', shortCode: 'Git', category: 'Tools', color: '#F97316' },
  { id: 'shopify', name: 'Shopify', shortCode: 'Sh', category: 'Commerce', color: '#22C55E' },
  { id: 'marketing', name: 'Digital Marketing', shortCode: 'Ads', category: 'Growth', color: '#34D399' },
];

export const PROJECTS: ProjectItem[] = [
  {
    id: 'tekohub',
    title: 'Tekohub',
    subtitle: 'Smart Gadgets E-Commerce Platform',
    year: '2026',
    summary:
      'Responsive smart-gadget store with product detail views, cart drawer, WhatsApp & bKash/Nagad checkout verification, and an admin product manager.',
    technologies: ['React.js', 'TypeScript', 'Vite', 'Firebase', 'Vercel'],
    liveUrl: 'https://tekohub-xi.vercel.app/',
    imageUrl: '/assets/aistudio/image_c9139676.png',
  },
  {
    id: 'teko-news-hub',
    title: 'Teko News Hub',
    subtitle: 'Full-Stack News Management Platform',
    year: '2026',
    summary:
      'News management platform built with an MVC REST API in Node.js and Express.js, protected user auth routes, and MongoDB data models.',
    technologies: ['Node.js', 'Express.js', 'React.js', 'MongoDB', 'Vercel'],
    liveUrl: 'https://teko-news-hub.vercel.app/',
    imageUrl: '/assets/aistudio/image_dc6429a6.png',
  },
];

export const CERTIFICATIONS: CertificationItem[] = [
  {
    id: 'webcoder-dm-shopify',
    title: 'Advanced Digital Marketing and Shopify',
    issuer: 'Webcoder-IT Institute',
    category: 'marketing',
    categoryLabel: 'Digital Marketing',
    date: 'May 2023',
    durationOrGrade: 'Grade: A+',
    credentialId: 'WCDM10838',
    verifyUrl: 'https://www.webcoder-it.com/student/certification',
    imageUrl: '/assets/aistudio/1686471276_a39ef447.jpg',
  },
  {
    id: 'creative-it-fbm',
    title: 'Facebook Marketing Training',
    issuer: 'Creative IT Institute',
    category: 'marketing',
    categoryLabel: 'Digital Marketing',
    date: 'Aug 2021',
    durationOrGrade: 'Completed',
    credentialId: 'ESS HSC FBM 21040114',
    imageUrl: '/assets/aistudio/FBM_2a35c91b.jpg',
  },
  {
    id: 'datacamp-deep-learning',
    title: 'Deep Learning in Python',
    issuer: 'DataCamp',
    category: 'tech',
    categoryLabel: 'AI & Python',
    date: 'Aug 2026',
    durationOrGrade: '18 Hours',
    credentialId: '#922,689',
    imageUrl: '/assets/aistudio/certificate__9__page-0001_c139912d.jpg',
  },
  {
    id: 'datacamp-ml-fundamentals',
    title: 'Machine Learning Fundamentals in Python',
    issuer: 'DataCamp',
    category: 'tech',
    categoryLabel: 'AI & Python',
    date: 'Aug 2026',
    durationOrGrade: '16 Hours',
    credentialId: '#927,188',
    imageUrl: '/assets/aistudio/certificate__10__page-0001_f27beacc.jpg',
  },
];

export const EDUCATION: EducationItem[] = [
  {
    degree: 'B.Sc. in Computer Science and Engineering',
    field: 'CSE',
    institution: 'Northern University Bangladesh',
    result: 'CGPA: 3.42 / 4.00',
    period: 'Ongoing',
  },
  {
    degree: 'Higher Secondary Certificate (HSC)',
    field: 'Science',
    institution: "Motijheel Govt. Boys' High School and College",
    result: 'GPA: 5.00 / 5.00',
    period: '2020',
  },
  {
    degree: 'Secondary School Certificate (SSC)',
    field: 'Science',
    institution: 'Dakhin Banasree Model High School',
    result: 'GPA: 5.00 / 5.00',
    period: '2018',
  },
];
