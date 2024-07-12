import meta from "../assets/meta.png";
import shopify from "../assets/shopify.png";
import starbucks from "../assets/starbucks.png";
import tesla from "../assets/tesla.png";

export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently building a JS Animation library",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "SkillSync AI: Revolutionizing Education",
    des: "Harness the power of AI to create, manage, and personalize courses. Transform learning with AI-generated content, adaptive paths, and interactive assessments.",
    img: "/skillsync.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
    link: "https://skillsync-ai.vercel.app/",
  },
  {
    id: 2,
    title: "NoteFlow: Your Digital Brain",
    des: "Unleash your productivity with this Notion-inspired workspace. Seamlessly organize ideas, plans, and documents in one intuitive platform.",
    img: "/noteflow.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
    link: "https://noteflow-seven.vercel.app/",
  },
  {
    id: 3,
    title: "Mumias Sugar: Digital Sweetness",
    des: "A modern, unofficial tribute to Kenya's sugar giant. Explore the rich history and sweet innovations of Mumias Sugar Company.",
    img: "/mumias.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
    link: "https://mumiassugar.vercel.app/",
  },
  {
    id: 4,
    title: "Shamba Assistant AI: Your Digital Farmhand",
    des: "Revolutionize farming with AI-powered insights. From soil analysis to disease detection, nurture your crops and livestock with cutting-edge technology.",
    img: "/shamba.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "https://shamba-assistant.vercel.app/dashboard",
  },
];

export const testimonials = [
  {
    quote:
      "Godfrey's work on SkillSync AI was nothing short of revolutionary. His ability to seamlessly integrate AI into our education platform elevated our entire learning ecosystem. His technical prowess, coupled with a deep understanding of educational needs, made him an invaluable asset to our project.",
    name: "Dr. Emily Chen",
    title: "Chief Education Officer, EduTech Innovations",
  },
  {
    quote:
      "The Shamba Assistant AI project led by Godfrey has transformed how we approach agriculture in our region. His innovative use of AI for soil analysis and disease detection has empowered countless farmers. Godfrey's dedication to creating practical, user-friendly solutions is truly commendable.",
    name: "John Muthomi",
    title: "Director of Agricultural Development, Kenyan Ministry of Agriculture",
  },
  {
    quote:
      "NoteFlow has completely revolutionized our team's productivity. Godfrey's attention to detail and understanding of user experience shines through in every aspect of the app. His ability to translate complex requirements into an intuitive, powerful tool is remarkable.",
    name: "Sarah Ochieng",
    title: "Project Manager, Tech Innovators Ltd",
  },
  {
    quote:
      "As a freelance client, I was blown away by Godfrey's expertise in AI integration. He didn't just deliver a product; he provided a competitive edge that has significantly boosted our business. His professionalism and clear communication made the entire process smooth and enjoyable.",
    name: "Michael Ongaro",
    title: "CEO, StartUp Dynamics",
  },
  {
    quote:
      "The unofficial Mumias Sugar website Godfrey created is a testament to his versatility as a developer. He managed to capture the essence of our company's rich history while delivering a modern, engaging user experience. His work has significantly enhanced our digital presence.",
    name: "Grace Adhiambo",
    title: "Head of Public Relations, Mumias Sugar Company",
  },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Full Stack Intern - Goddan",
    desc: "Gained hands-on experience in both frontend and backend development, contributing to real-world projects and honing my skills across the entire stack.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Developer - YCenter Shamba Solutions",
    desc: "Developed Shamba Assistant, an AI-powered app helping farmers manage everything from soil testing to harvesting, revolutionizing agricultural practices.",
    className: "md:col-span-2",
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "AI Integration Specialist (Freelance)",
    desc: "Empowers businesses with cutting-edge AI features, enhancing their products and services to stay competitive in the rapidly evolving tech landscape.",
    className: "md:col-span-2", 
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Web Development Freelancer",
    desc: "Crafted bespoke websites for diverse clients, implementing advanced features like session management to deliver seamless user experiences.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
  },
  {
    id: 2,
    img: "/twit.svg",
  },
  {
    id: 3,
    img: "/link.svg",
  },
];
export const timelineExperiences = [
  {
    title: "Full stack Web developer",
    company_name: "Freelancing",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2022 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Implemented payment gateways, user authentication, and authorization features in the web applications",
      "Works with clients from various industries to develop and maintain web applications using Django and Laravel frameworks",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Junior Web Developer",
    company_name: "Busia County Government Office",
    icon: shopify,
    iconBg: "#383E56",
    date: "Sep 2021 - June 2022",
    points: [
      "Improved website performance and speed through optimization techniques.",
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
      "Assisted senior web developers in the development of web applications using Laravel and Django.",
    ],
  },
  {
    title: "Intern Full stack Developer",
    company_name: "Huduma center Busia",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Sep 2020 - June 2021",
    points: [
      "Implemented various plugins and modules to enhance the functionality of websites.",
      "Collaborated with the design team to create visually appealing and user-friendly websites.",
      "Improved website performance and speed through optimization techniques.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];
