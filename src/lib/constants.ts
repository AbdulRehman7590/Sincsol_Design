import { Monitor, Smartphone, Code } from "@mui/icons-material";
import { Brain, Database } from "lucide-react";

// Landing Page
export const lservices = [
  {
    icon: Monitor,
    title: "Wordpress Development",
    description:
      "Easily automate data and monitor your site with our user-friendly WordPress solutions.",
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description:
      "We create functional, visually engaging mobile apps that captivate users and deliver results.",
  },
  {
    icon: Code,
    title: "Web App Development",
    description:
      "We design, develop and maintain impactful, responsive and user-friendly websites.",
  },
  {
    icon: Brain,
    title: "AI & Machine Learning",
    description:
      "Stand out with custom AI solutions that drive innovation and growth.",
  },
  {
    icon: Database,
    title: "Data Analysis",
    description:
      "Unlock big data's potential for deeper insights & exceptional results.",
  },
];

export const services = [
  {
    id: 1,
    title: 'WordPress Development',
    description: 'Build scalable and secure WordPress solutions for your business needs.',
    image: '/placeholder.svg?height=400&width=600',
    href: '/services/wordpress-development'
  },
  {
    id: 2,
    title: 'Mobile App Development',
    description: 'Create functional, feature-rich mobile applications for iOS and Android.',
    image: '/placeholder.svg?height=400&width=600',
    href: '/services/mobile-app-development'
  },
  {
    id: 3,
    title: 'Web App Development',
    description: 'We design, develop and maintain impactful, responsive and user-friendly websites.',
    image: '/placeholder.svg?height=400&width=600',
    href: '/services/web-app-development'
  },
  {
    id: 4,
    title: 'AI & Machine Learning',
    description: 'Leverage cutting-edge AI and ML solutions to transform your business processes.',
    image: '/placeholder.svg?height=400&width=600',
    href: '/services/ai-ml'
  },
  {
    id: 5,
    title: 'Data Analysis',
    description: 'Transform raw data into actionable insights with our advanced analytics solutions.',
    image: '/placeholder.svg?height=400&width=600',
    href: '/services/data-analysis'
  }
]

export const landingProjects = [
  {
    title: "AI-Powered Healthcare",
    category: "Healthcare",
    description:
      "Revolutionizing patient care with advanced AI diagnostics and monitoring systems.",
    image:
      "/placeholder.svg?height=400&width=600",
  },
  {
    title: "Smart Education Platform",
    category: "Education",
    description:
      "Transforming learning experiences with personalized AI-driven education solutions.",
    image:
      "/placeholder.svg?height=400&width=600",
  },
  {
    title: "Environmental Monitoring",
    category: "Environment",
    description:
      "Real-time environmental analysis and sustainability tracking platform.",
    image:
      "/placeholder.svg?height=400&width=600",
  },
  {
    title: "Fintech Innovation",
    category: "Finance",
    description:
      "Next-generation financial technology solutions for modern banking.",
    image:
      "/placeholder.svg?height=400&width=600",
  },
];

// About Page
export const values1 = [
  {
    icon: "/icons/integrity.ico",
    title: "Integrity",
    description:
      "We conduct our business with honesty and transparency, building trust in every relationship.",
  },
  {
    icon: "/icons/innovation.ico",
    title: "Innovation",
    description:
      "We continuously explore new ideas and embrace cutting-edge technology to bring forward impactful solutions.",
  },
  {
    icon: "/icons/accountability.ico",
    title: "Collaboration",
    description:
      "Working together is our strength, fostering teamwork and mutual support to achieve collective success.",
  },
];

export const values2 = [
  {
    icon: "/icons/agility.ico",
    title: "Agility",
    description:
      "We adapt quickly to changing environments to better serve our clients evolving needs.",
  },
  {
    icon: "/icons/accountability.ico",
    title: "Accountability",
    description:
      "We take responsibility for our work, ensuring reliable and consistent delivery of solutions.",
  },
  {
    icon: "/icons/excellence.ico",
    title: "Excellence",
    description:
      "We strive for high-quality outcomes, always going the extra mile to exceed expectations.",
  },
];

// Career Page
export const MOCK_JOBS = Array.from({ length: 15 }, (_, i) => ({
  id: `${i + 1}`,
  title: "Lead Product Designer",
  company: {
    name: "Name",
    logo: "/images/job-logo.png",
  },
  type: ["Fulltime", "Remote"],
  postedAt: "3 days ago",
  description:
    "We are looking for a lead product designer with more tha 3 years of past experience in tech sector.",
}));

export const recruitmentSteps = [
  {
    step: 1,
    title: "Apply",
    description: "Define the job requirements and ideal candidate profile.",
    icon: "/icons/apply.ico",
  },
  {
    step: 2,
    title: "Select",
    description:
      "Identify and engage potential candidate through various channels.",
    icon: "/icons/select.ico",
  },
  {
    step: 3,
    title: "Interview",
    description: "Review applications and conduct preliminary assessments.",
    icon: "/icons/interview.ico",
  },
  {
    step: 4,
    title: "Onboarding",
    description:
      "Evaluate candidates' technical skills and cultural fit through structured interviews.",
    icon: "/icons/onboarding.ico",
  },
];

export const faqItems = [
  {
    question: "What benefits does SincSol offer?",
    answer:
      "We offer competitive salary, health insurance, flexible work hours, and professional development opportunities.",
  },
  {
    question: "What's the hiring process like?",
    answer:
      "Our hiring process typically includes application review, HR screening, technical interview, and team culture fit assessment.",
  },
  {
    question: "Do you offer remote work?",
    answer: "Yes, we offer flexible remote work options for most positions.",
  },
  {
    question: "What's the company culture like?",
    answer:
      "We foster an innovative, collaborative environment where creativity and initiative are valued.",
  },
  {
    question: "How can I prepare for the interview?",
    answer:
      "We recommend researching the company, practicing common interview questions, and preparing your portfolio.",
  },
  {
    question: "What's the best way to apply?",
    answer:
      "You can apply directly through our website or send your resume and cover letter to SincSol HR.",
  },
];

// Portfolio Page
export const projects = [
  {
    id: 1,
    title: "Building your API Stack",
    description:
      "The rise of RESTful APIs has been met by a rise in tools for creating, testing, and manag...",
    image: "/images/project1.png",
    tags: ["Design", "Research"],
    scope: "Project Scope: Full Development",
    category: "Education",
  },
  {
    id: 2,
    title: "Building your API Stack",
    description:
      "The rise of RESTful APIs has been met by a rise in tools for creating, testing, and manag...",
    image: "/images/project1.png",
    tags: ["Design", "Research"],
    scope: "Project Scope: Full Development",
    category: "Environment",
  },
  {
    id: 3,
    title: "Building your API Stack",
    description:
      "The rise of RESTful APIs has been met by a rise in tools for creating, testing, and manag...",
    image: "/images/project1.png",
    tags: ["Design", "Research"],
    scope: "Project Scope: Full Development",
    category: "Health Care",
  },
  {
    id: 4,
    title: "Building your API Stack",
    description:
      "The rise of RESTful APIs has been met by a rise in tools for creating, testing, and manag...",
    image: "/images/project1.png",
    tags: ["Design", "Research"],
    scope: "Project Scope: Full Development",
    category: "Education",
  },
];

export const Steps = [
  {
    number: "1",
    title: "Planning",
    description:
      "Understand business goals, challenges, and vision to create a tailored strategy.",
  },
  {
    number: "2",
    title: "UI/UX Design",
    description:
      "Develop visually appealing designs focused on enhancing user experience",
  },
  {
    number: "3",
    title: "Development",
    description:
      "Build fully functional and scalable websites or applications from the designs.",
  },
  {
    number: "4",
    title: "Testing & Deployment",
    description:
      "Ensure quality and performance before launch, followed by ongoing support for growth and updates.",
  },
];

export const categories = ["All", "Education", "Environment", "Health Care"];

// Products Page
export const products = [
  {
    id: 1,
    name: "Exam Analyzer",
    number: "#1",
    label: "PRODUCT",
    bgColor: "bg-[#FFD699]",
    image: "/images/exam.png",
    description: "Advanced exam analysis and grading system",
  },
  {
    id: 2,
    name: "Flight Booking",
    number: "#2",
    label: "PRODUCT",
    bgColor: "bg-[#99EBFF]",
    image: "/images/flight.png",
    description: "Seamless flight booking experience",
  },
  {
    id: 3,
    name: "Exam Analyzer",
    number: "#3",
    label: "PRODUCT",
    bgColor: "bg-[#99FF99]",
    image: "/images/exam-2.png",
    description: "Smart notification system for exam updates",
  },
];

// Team Page
export const teamMembers = [
  {
    name: "Waqas Rashid",
    position: "Chief Executive Officer",
    image: "/images/team/waqas.png",
  },
  {
    name: "Alyona Ali",
    position: "Chief Operating Officer",
    image: "/images/team/alyona.png",
  },
  {
    name: "Anam Shayan",
    position: "Chief Marketing Officer",
    image: "/images/team/anam.png",
  },
  {
    name: "Hassan Ali",
    position: "Chief Product Officer",
    image: "/images/team/hassan.png",
  },
  {
    name: "Anam",
    position: "Chief Marketing Officer",
    image: "/images/team/anam.png",
  },
];

// Mobile App Development Page
export const solutions1 = [
  {
    step: 1,
    title: "iOS App Development",
    description:
      "Native iOS apps using the latest tech to create user experience.",
  },
  {
    step: 2,
    title: "Android App Development",
    description:
      "Custom Android apps designed for seamless engagement and market growth.",
  },
  {
    step: 3,
    title: "Wearables & Embedded Software",
    description:
      "Companion apps for wearables that enhance functionality and user interaction.",
  },
];

export const solutions2 = [
  {
    step: 4,
    title: "Native Mobile Apps",
    description:
      "Secure, scalable, and high-performance apps built for specific platforms.",
  },
  {
    step: 5,
    title: "Cross-Platform Apps",
    description:
      "Cost-effective high-quality apps spanning a unified responsive design.",
  },
  {
    step: 6,
    title: "Progressive Web Apps (PWAs)",
    description:
      "Native-like web apps offering fast, reliable experiences on any device.",
  },
];

// Ai Page
export const aiServices = [
  {
    step: 1,
    title: "Custom AI Solutions",
    description:
      "Tailored artificial intelligence solutions for your specific needs",
  },
  {
    step: 2,
    title: "NLP & Sentiment Analysis",
    description: "Advanced natural language processing and sentiment analysis",
  },
  {
    step: 3,
    title: "Computer Vision & Image Processing",
    description: "State-of-the-art computer vision solutions",
  },
  {
    step: 4,
    title: "Predictive Analytics & Forecasting",
    description: "Data-driven predictions and business forecasting",
  },
  {
    step: 5,
    title: "Automation & RPA Integration",
    description: "Robotic Process Automation with AI capabilities",
  },
  {
    step: 6,
    title: "Business Intelligence & Insight Tools",
    description: "Smart business analytics and insights",
  },
  {
    step: 7,
    title: "Cybersecurity & Fraud Detection",
    description: "AI-powered security and fraud prevention",
  },
  {
    step: 8,
    title: "Voice AI & Personalization",
    description: "Voice recognition and personal assistant solutions",
  },
  {
    step: 9,
    title: "AR/VR with AI Integration",
    description: "Augmented and Virtual Reality powered by AI",
  },
  {
    step: 10,
    title: "AI Training & Workshops",
    description: "Educational programs and workshops on AI",
  },
];

export const aiProducts = [
  {
    name: "NetOptima",
    description: "Network Optimization Solution",
    position: { top: "-16%", right: "38%" },
  },
  {
    name: "SecureShield",
    description: "Advanced Cybersecurity Suite",
    position: { top: "7.8%", left: "11%" },
  },
  {
    name: "EngageCRM",
    description: "Customer Relationship Management System",
    position: { top: "18%", right: "11%" },
  },
  {
    name: "DataXplore",
    description: "Data Analytics and Insights Tool",
    position: { bottom: "19%", left: "9%" },
  },
  {
    name: "AutoAI",
    description: "AI-Powered Automation Tool",
    position: { bottom: "-2%", left: "38%" },
  },
  {
    name: "IntelliCloud",
    description: "Cloud Management Platform",
    position: { bottom: "12%", right: "10%" },
  },
];

export const aiCaseStudies = Array.from({ length: 3 }, (_, i) => ({
  id: `${i + 1}`,
  title: "Build the right team to scale",
  description:
    "Finding the right talent is not easy. We help you find the talent that suits your needs, follows your processes, and sticks with you long-term (not the case with freelancers)",
  line: "Our delivery model helps you cut costs and deliver within budget...",
  quote:
    "Simform is quick to identify larger problem with the Software so we decided to expand our scope to build new modules.",
  imageUrl: `/images/case1.png`,
}));
