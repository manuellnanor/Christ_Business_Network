export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  iconName: string; // we will use Lucide icons dynamically
  link: string;
}

export interface CauseItem {
  id: string;
  category: string;
  title: string;
  image: string;
  raised: string;
  goal: string;
  percentage: number;
}

export interface ProgramItem {
  id: string;
  category: string;
  title: string;
  date: string;
  image: string;
  description: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface BlogItem {
  id: string;
  category: string;
  title: string;
  date: string;
  image: string;
  author: string;
}

export const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About CBN", href: "#about" },
  { label: "Membership", href: "#membership" },
  { label: "Programmes", href: "#programmes" },
  { label: "Contact", href: "#faq" },
];

export const SERVICES: ServiceItem[] = [
  {
    id: "edu",
    title: "Education Support Programs",
    description: "We offer scholarship, school supply distribution, school supplies, families with essentials, & mentorship.",
    iconName: "GraduationCap",
    link: "#",
  },
  {
    id: "disaster",
    title: "Emergency & Disaster Relief",
    description: "Our healthcare initiatives include free medical camps, health check-ups, and other services.",
    iconName: "FlameKindling", // or ShieldAlert
    link: "#",
  },
  {
    id: "food",
    title: "Food & Nutrition Assistance",
    description: "Through food drives & nutrition programs we distribute essential groceries.",
    iconName: "Apple", // or HeartHandshake
    link: "#",
  },
  {
    id: "shelter",
    title: "Shelter & Housing Support",
    description: "We assist vulnerable families with emergency shelter kits, housing repairs.",
    iconName: "Home",
    link: "#",
  },
];

export const CAUSES: CauseItem[] = [
  {
    id: "cause-1",
    category: "Child Support",
    title: "Education for Underprivileged Children",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=800&auto=format&fit=crop",
    raised: "$24,500",
    goal: "$30,000",
    percentage: 81,
  },
  {
    id: "cause-2",
    category: "Hunger Relief",
    title: "Hunger Relief and Nutrition Programs",
    image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=800&auto=format&fit=crop",
    raised: "$18,200",
    goal: "$25,000",
    percentage: 72,
  },
  {
    id: "cause-3",
    category: "Healthcare",
    title: "Community Healthcare & Medical Aid",
    image: "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?q=80&w=800&auto=format&fit=crop",
    raised: "$35,000",
    goal: "$40,000",
    percentage: 87,
  },
];

export const METRICS = [
  {
    id: "lives",
    value: "18K+",
    label: "Lives Impacted",
    description: "Through education, healthcare, food support, and emergency.",
    iconName: "Users",
  },
  {
    id: "funds",
    value: "$3.8M+",
    label: "Funds Raised",
    description: "Successfully collected through individual donors corporate partners.",
    iconName: "TrendingUp",
  },
  {
    id: "children",
    value: "1200+",
    label: "Children Supported",
    description: "Provided with school supplies, scholar-ships, and access to quality.",
    iconName: "Heart",
  },
];

export const PROGRAMS: ProgramItem[] = [
  {
    id: "prog-1",
    category: "Hunger Relief",
    title: "Monthly Food Distribution & Nutrition Support Program",
    date: "April 22, 2026",
    image: "https://images.unsplash.com/photo-1593113598332-cd288d649433?q=80&w=800&auto=format&fit=crop",
    description: "Ensuring families have access to fresh, healthy groceries and basic vitamins to prevent malnutrition.",
  },
  {
    id: "prog-2",
    category: "Healthcare",
    title: "Free Community Health Check-Up & Medical Awareness Outreach",
    date: "April 22, 2026",
    image: "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?q=80&w=800&auto=format&fit=crop",
    description: "Bringing licensed physicians, essential diagnostic camps, and free prescriptions directly to rural areas.",
  },
  {
    id: "prog-3",
    category: "Disaster Relief",
    title: "Emergency Shelter Support & Disaster Relief Assistance Program",
    date: "April 22, 2026",
    image: "https://images.unsplash.com/photo-1469571486112-7b9501d66711?q=80&w=800&auto=format&fit=crop",
    description: "Deploying response teams with standard clean water filtration units and temporary shelter setups.",
  },
];

export const FAQS: FaqItem[] = [
  {
    id: "faq-1",
    question: "Can I make a recurring monthly donation?",
    answer: "Yes, we offer a monthly giving program that allows you to contribute automatically each month and continuously support your chosen cause. You can change, pause, or cancel your donation plan at any time through our interactive secure donor portal.",
  },
  {
    id: "faq-2",
    question: "How do I know my donation is being used effectively?",
    answer: "We believe in absolute transparency. 92% of all donations go directly to program services on the ground. We provide full real-time impact tracking, audited financial statements, and detailed quarterly progress reports.",
  },
  {
    id: "faq-3",
    question: "Can I volunteer with your organization?",
    answer: "Absolutely! We have over 3,500 active volunteers across global chapters. You can register for upcoming field programs, help coordinate food distributions, or assist with digital tutoring sessions.",
  },
  {
    id: "faq-4",
    question: "How can I make a donation?",
    answer: "You can easily donate using our interactive donation widget. Select a preset amount or input a custom donation value, then click 'Donate Now' to trigger our secure payment simulator.",
  },
  {
    id: "faq-5",
    question: "How do I get updates about the causes I support?",
    answer: "When making a donation, you can opt-in to our real-time impact email notifications. We send photos, video links, and field updates directly from our coordinators on the ground.",
  },
];

export const BLOGS: BlogItem[] = [
  {
    id: "blog-1",
    category: "Empowerment",
    title: "Empowering Women Through Skill Development",
    date: "April 22, 2026",
    image: "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?q=80&w=800&auto=format&fit=crop",
    author: "Elena Petrova",
  },
  {
    id: "blog-2",
    category: "Housing",
    title: "Building Safe Homes for Families in Need",
    date: "April 22, 2026",
    image: "https://images.unsplash.com/photo-1541976844346-f18aeac57b06?q=80&w=800&auto=format&fit=crop",
    author: "David Vance",
  },
  {
    id: "blog-3",
    category: "Partnership",
    title: "Partnering with Local Businesses for Greater Impact",
    date: "April 22, 2026",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=800&auto=format&fit=crop",
    author: "Sarah Jenkins",
  },
];
