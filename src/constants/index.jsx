import { Handshake, Users, School, Briefcase, Lightbulb } from "lucide-react";


import user1 from "../assets/profile-pictures/user1.jpg";
import user2 from "../assets/profile-pictures/user2.jpg";
import user3 from "../assets/profile-pictures/user3.jpg";
import user4 from "../assets/profile-pictures/user4.jpg";
import user5 from "../assets/profile-pictures/user5.jpg";
import user6 from "../assets/profile-pictures/user6.jpg";
import youthMentorship from "../assets/objectives/youth-mentorship.jpg";
import healthyLifestyle from "../assets/objectives/healthy-lifestyle.jpg"
import socialCohesion from "../assets/objectives/social-cohesion.jpg"
import skillsDevelopment from "../assets/objectives/Skills-development.jpg"
import youthEmploymentEntrepreneurial from "../assets/objectives/Youth-Employment-Entrepreneurial.jpg"
import reIntergration from "../assets/objectives/Re-intergration.jpg"

export const navItems = [
  { label: "About", href: "#about" },
  { label: "Gallery", href: "#gallery" },
  { label: "Objectives", href: "#objectives" },
  { label: "Testimonials", href: "#testimonials" },
];

export const testimonials = [
  {
    user: "John Doe",
    company: "Stellar Solutions",
    image: user1,
    text: "I am extremely satisfied with the services provided. The team was responsive, professional, and delivered results beyond my expectations.",
  },
  {
    user: "John Doe",
    company: "Stellar Solutions",
    image: user1,
    text: "I am extremely satisfied with the services provided. The team was responsive, professional, and delivered results beyond my expectations.",
  },
  {
    user: "Jane Smith",
    company: "Blue Horizon Technologies",
    image: user2,
    text: "I couldn't be happier with the outcome of our project. The team's creativity and problem-solving skills were instrumental in bringing our vision to life",
  },
  {
    user: "David Johnson",
    company: "Quantum Innovations",
    image: user3,
    text: "Working with this company was a pleasure. Their attention to detail and commitment to excellence are commendable. I would highly recommend them to anyone looking for top-notch service.",
  },
  {
    user: "Ronee Brown",
    company: "Fusion Dynamics",
    image: user4,
    text: "Working with the team at XYZ Company was a game-changer for our project. Their attention to detail and innovative solutions helped us achieve our goals faster than we thought possible. We are grateful for their expertise and professionalism!",
  },
  {
    user: "Michael Wilson",
    company: "Visionary Creations",
    image: user5,
    text: "I am amazed by the level of professionalism and dedication shown by the team. They were able to exceed our expectations and deliver outstanding results.",
  },
  {
    user: "Emily Davis",
    company: "Synergy Systems",
    image: user6,
    text: "The team went above and beyond to ensure our project was a success. Their expertise and dedication are unmatched. I look forward to working with them again in the future.",
  },
];

export const objectives = [
  {
    icon: <Users />,
    title: "Social Cohesion",
    image: socialCohesion,
    description: "To promote and harness social cohesion amongst all community members."
  },
  {
  icon: <Lightbulb />,
    title: "Healthy Lifestyles",
    image: healthyLifestyle,
    description: "Promote and develop healthy lifestyles with coaching and motivational seminars."
  },
  {
    icon: <School />,
    image: youthMentorship,
    title: "Youth Mentorship",
    description: "Mentor and provide guidance to the youth, this will be done by creating programs that will empower and uplift the youth in our respective communities."
  },
  {
    icon: <Briefcase />,
    title: "Skills Development",
    image: skillsDevelopment,
    description: "Facilitate public good, civic and furtherance of education as well as skills development in all our communities."
  },
  {
    icon: <Handshake />,
    title: "Employment Programs",
    image: youthEmploymentEntrepreneurial,
    description: "Promote and Facilitate Youth Employment and Entrepreneurial Programs."
  },
  {
    icon: <Users />,
    title: "Reintegration Programs",
    image: reIntergration,
    description: "Develop workable diversion interventions and pathways for the youth in conflict with the law as well as ex offender reintegration programs."
  },
];

export const checklistItems = [
  {
    title: "Code merge made easy",
    description:
      "Track the performance of your VR apps and gain insights into user behavior.",
  },
  {
    title: "Review code without worry",
    description:
      "Track the performance of your VR apps and gain insights into user behavior.",
  },
  {
    title: "AI Assistance to reduce time",
    description:
      "Track the performance of your VR apps and gain insights into user behavior.",
  },
  {
    title: "Share work in minutes",
    description:
      "Track the performance of your VR apps and gain insights into user behavior.",
  },
];

export const pricingOptions = [
  {
    title: "Free",
    price: "$0",
    features: [
      "Private board sharing",
      "5 Gb Storage",
      "Web Analytics",
      "Private Mode",
    ],
  },
  {
    title: "Pro",
    price: "$10",
    features: [
      "Private board sharing",
      "10 Gb Storage",
      "Web Analytics (Advance)",
      "Private Mode",
    ],
  },
  {
    title: "Enterprise",
    price: "$200",
    features: [
      "Private board sharing",
      "Unlimited Storage",
      "High Performance Network",
      "Private Mode",
    ],
  },
];

export const resourcesLinks = [
  { href: "#", text: "Getting Started" },
  { href: "#", text: "Documentation" },
  { href: "#", text: "Tutorials" },
  { href: "#", text: "API Reference" },
  { href: "#", text: "Community Forums" },
];

export const platformLinks = [
  { href: "#", text: "Features" },
  { href: "#", text: "Supported Devices" },
  { href: "#", text: "System Requirements" },
  { href: "#", text: "Downloads" },
  { href: "#", text: "Release Notes" },
];

export const communityLinks = [
  { href: "#", text: "Events" },
  { href: "#", text: "Meetups" },
  { href: "#", text: "Conferences" },
  { href: "#", text: "Hackathons" },
  { href: "#", text: "Jobs" },
];
