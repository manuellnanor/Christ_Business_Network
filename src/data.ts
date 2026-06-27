import eventAnnualDinner from "../assets/event-annual-dinner.jpg";
import eventAnnualCongress from "../assets/event-annual-congress.jpg";
import eventCareerMentorship from "../assets/event-career-mentorship.jpg";
import aboutNetworking from "../assets/about-networking.jpeg";
import aboutFellowship from "../assets/about-fellowship.jpeg";
import aboutFamily from "../assets/about-family.jpeg";
import benefitsFellowship from "../assets/benefits-fellowship.jpeg";
import benefitsNetworking from "../assets/benefits-networking.jpeg";
import benefitsWelfare from "../assets/benefits-welfare.jpeg";
import cbnNetworkGroup from "../assets/cbn-network-group.jpg";
import heroCommunity from "../assets/hero-community.jpeg";
import heroEmpoweringProfessionals from "../assets/hero-empowering-professionals.jpg";
import heroNetworking from "../assets/hero-networking.jpeg";
import heroPanel from "../assets/hero-panel.jpeg";

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

export interface GalleryAlbum {
  id: string;
  title: string;
  items: number;
  image: string;
}

export interface GalleryImage {
  id: string;
  title: string;
  album: string;
  image: string;
}

export interface NavLink {
  label: string;
  href: string;
  children?: NavLink[];
}

export const NAV_LINKS: NavLink[] = [
  { label: "Home", href: "#/" },
  { label: "About CBN", href: "#/about" },
  { label: "Membership", href: "#/membership" },
  {
    label: "Programmes",
    href: "#/programmes/events",
    children: [
      { label: "Events", href: "#/programmes/events" },
      { label: "Gallery", href: "#/programmes/gallery" },
    ],
  },
  { label: "Contact", href: "#/contact" },
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
    category: "Dinner",
    title: "Annual Dinner",
    date: "February 28, 2026",
    image: eventAnnualDinner,
    description: "A special evening of fellowship, celebration, and networking for Christ Business Network members and invited guests.",
  },
  {
    id: "prog-2",
    category: "Congress",
    title: "9th Annual Congress",
    date: "December 5, 2025",
    image: eventAnnualCongress,
    description: "A gathering for CBN members to arise, build, and occupy the Kingdom of God through fellowship, learning, and shared purpose.",
  },
  {
    id: "prog-3",
    category: "Mentorship",
    title: "Career Mentorship Seminar",
    date: "September 11-13, 2025",
    image: eventCareerMentorship,
    description: "A career-focused mentorship session designed to guide, equip, and inspire young professionals for purposeful growth.",
  },
];

export const FAQS: FaqItem[] = [
  {
    id: "faq-1",
    question: "What is Christ Business Network (CBN)?",
    answer: "CBN is a network of graduate professionals of the Christ Apostolic Church International committed to fellowship, networking, and service.",
  },
  {
    id: "faq-2",
    question: "Who is eligible to become a member?",
    answer: "Membership is open to graduate professionals who are members of the Christ Apostolic Church International and meet the association's membership requirements.",
  },
  {
    id: "faq-3",
    question: "How do I register as a member?",
    answer: "Request a registration link through CBN, complete the application process, and follow the payment instructions to receive your membership registration number.",
  },
  {
    id: "faq-4",
    question: "What benefits do members receive?",
    answer: "Members enjoy professional networking, mentorship, leadership development, welfare support, subsidized events, and opportunities to serve the Church and society.",
  },
  {
    id: "faq-5",
    question: "How can I get involved in CBN activities?",
    answer: "You can participate in conferences, seminars, workshops, mentorship programmes, networking events, and community outreach initiatives organized throughout the year.",
  },
];

export const GALLERY_ALBUMS: GalleryAlbum[] = [
  {
    id: "annual-dinner",
    title: "CBN Annual Dinner",
    items: 34,
    image: eventAnnualDinner,
  },
  {
    id: "ninth-congress",
    title: "CBN 9th Congress",
    items: 49,
    image: eventAnnualCongress,
  },
  {
    id: "career-mentorship",
    title: "Career Mentorship Session with Accra West T. Youth Ministry",
    items: 71,
    image: eventCareerMentorship,
  },
  {
    id: "end-of-year-dinner",
    title: "End of Year Dinner 2024",
    items: 113,
    image: cbnNetworkGroup,
  },
  {
    id: "eighth-congress",
    title: "CBN 8th Annual Congress 2024",
    items: 66,
    image: heroPanel,
  },
  {
    id: "thanksgiving-service",
    title: "Thanksgiving Service 2022",
    items: 23,
    image: aboutFellowship,
  },
  {
    id: "convofeast",
    title: "ConvoFeast 2022",
    items: 45,
    image: aboutNetworking,
  },
  {
    id: "mentoring-casa",
    title: "Mentoring Session - CASA Congress 2021",
    items: 24,
    image: heroNetworking,
  },
];

export const GALLERY_IMAGES: GalleryImage[] = [
  { id: "gallery-1", title: "Annual Dinner fellowship", album: "CBN Annual Dinner", image: eventAnnualDinner },
  { id: "gallery-2", title: "Congress delegates", album: "CBN 9th Congress", image: eventAnnualCongress },
  { id: "gallery-3", title: "Career mentorship materials", album: "Career Mentorship Session with Accra West T. Youth Ministry", image: eventCareerMentorship },
  { id: "gallery-4", title: "End of year gathering", album: "End of Year Dinner 2024", image: cbnNetworkGroup },
  { id: "gallery-5", title: "Annual congress session", album: "CBN 8th Annual Congress 2024", image: heroPanel },
  { id: "gallery-6", title: "Thanksgiving service moment", album: "Thanksgiving Service 2022", image: aboutFellowship },
  { id: "gallery-7", title: "ConvoFeast group session", album: "ConvoFeast 2022", image: aboutNetworking },
  { id: "gallery-8", title: "CASA congress mentoring", album: "Mentoring Session - CASA Congress 2021", image: heroNetworking },
  { id: "gallery-9", title: "CBN family gathering", album: "CBN Annual Dinner", image: aboutFamily },
  { id: "gallery-10", title: "Professional networking", album: "CBN 9th Congress", image: benefitsNetworking },
  { id: "gallery-11", title: "Fellowship and worship", album: "Thanksgiving Service 2022", image: benefitsFellowship },
  { id: "gallery-12", title: "Welfare and support", album: "ConvoFeast 2022", image: benefitsWelfare },
  { id: "gallery-13", title: "Community impact", album: "Career Mentorship Session with Accra West T. Youth Ministry", image: heroCommunity },
  { id: "gallery-14", title: "Empowered professionals", album: "Mentoring Session - CASA Congress 2021", image: heroEmpoweringProfessionals },
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
