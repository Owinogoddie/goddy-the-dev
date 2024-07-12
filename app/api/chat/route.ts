import { NextRequest, NextResponse } from "next/server";
import Groq from 'groq-sdk';

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY!, // This is the default and can be omitted
});

const GODFREY_INFO = `

Personal Information:

Full Name: Owino Godfrey
Location: Eldoret, Kenya
Contact: 0714630040
Email: owinogoddie@gmail.com
LinkedIn: [linkedin.com/in/your_link]
GitHub: [github.com/your_profile]

Professional Summary:
Godfrey Owino is a highly skilled Full-Stack Developer with a specialization in AI integration. He excels in creating powerful, intelligent web applications from concept to deployment. His expertise spans the entire MERN (MongoDB, Express.js, React, Node.js) stack, with additional proficiency in Next.js and cutting-edge AI technologies. Godfrey has a proven track record of developing solutions that significantly enhance user engagement and business efficiency.
Education:

Bachelor of Sciences in Information Sciences (IT Option)

Institution: Moi University Main Campus, Eldoret, Kenya
Duration: 2016-2021
Achievement: Graduated with Second Class Upper Division Honours
Notable Project: "Implementation of Machine Learning in Agricultural Resource Management"


JSM Masterclass Experience

Type: Remote learning
Duration: 2022–2023
Focus: Advanced AI and Machine Learning in Web Development



Work Experience:

AI Integration Specialist & Full-Stack Developer (Freelance)

Duration: Current
Responsibilities and Achievements:

Pioneers AI-driven solutions across diverse industries
Develops end-to-end web applications with advanced AI features
Improved operational efficiency for clients by up to 50%
Utilizes machine learning models and natural language processing
Creates intelligent, responsive systems




Full-Stack Developer - YCenter Shamba Solutions

Duration: 2022 - Present
Key Project: Shamba Assistant (AI-powered agricultural management platform)
Responsibilities and Achievements:

Led the development of Shamba Assistant
Architected and implemented a full-stack solution using Next.js, Node.js, and MongoDB
Integrated custom AI models for crop analysis and prediction
Increased farm productivity by 30% through AI-driven insights
Implemented automated decision-making processes




Full-Stack Web Developer (Freelance)

Duration: 2021 - Present
Responsibilities and Achievements:

Designs and implements full-stack web applications with AI integration
Reduced server response times by 60% through optimized backend architecture
Implements AI-assisted caching strategies
Develops advanced AI-powered features like predictive analytics
Creates personalized user experiences




Full Stack Intern - Goddan

Responsibilities and Achievements:

Contributed to full-stack development projects
Gained hands-on experience with modern web technologies and AI integration
Developed and integrated machine learning models
Enhanced application functionality and user experience





Notable Projects:

SkillSync AI (AI-Powered Education Platform)

Features:

Intelligent learning management system
NLP and machine learning for personalized education
AI-driven content generation
Adaptive learning paths


Technologies: React, Node.js, Express, MongoDB, TensorFlow.js, NLP APIs
Achievement: Increased course completion rates by 40%


NoteFlow (AI-Enhanced Digital Workspace)

Features:

Notion-inspired platform with AI-powered organization
AI-driven content suggestions
Natural language processing for smart tagging and contextual search


Technologies: Next.js, Express, MongoDB, Tailwind CSS, OpenAI API
Achievement: Improved information retrieval by 50%


Shamba Assistant AI (Intelligent Farming Solution)

Features:

Comprehensive AI-driven farming assistant
Integration of IoT sensors and machine learning models
Computer vision for crop disease detection
Predictive analytics for yield optimization


Technologies: Next.js, Python (FastAPI), TensorFlow, OpenCV, IoT integration


Mumias Sugar: Digital Sweetness (AI-Enhanced Company Showcase)

Features:

Interactive platform with AI-powered chatbot for customer inquiries
Virtual sugar production simulation


Technologies: React, Node.js, Three.js, DialogFlow



Technical Skills:

Full-Stack Development: MERN Stack (MongoDB, Express.js, React, Node.js)
Frontend: React.js, Next.js, HTML, CSS, JavaScript, TypeScript
Backend: Node.js, Express.js, Python (FastAPI)
Databases: MongoDB, SQL
API Development: REST APIs, GraphQL
Mobile Development: React Native
AI/Machine Learning: TensorFlow, Natural Language Processing, Computer Vision
Cloud Computing: AWS, GCP
DevOps: Docker, CI/CD, Git
Other Technologies: IoT Integration, Three.js, GSAP

Soft Skills:

Problem-solving
Creative thinking
Effective communication
Project management
Adaptability to new technologies
Collaborative teamwork

Client Testimonials:
Godfrey has worked with several satisfied clients, including:

Dr. Emily Chen (EduTech Innovations)
John Muthomi (Kenyan Ministry of Agriculture)
Sarah Ochieng (Tech Innovators Ltd)
Michael Ongaro (StartUp Dynamics)
Grace Adhiambo (Mumias Sugar Company)
David Kimani (AgriTech Solutions)

These clients have praised Godfrey's technical expertise, innovative approach to problem-solving, and ability to deliver high-quality, AI-enhanced solutions that meet their specific needs.
Professional Interests:

Staying updated with the latest developments in AI and machine learning
Exploring new ways to integrate AI into web and mobile applications
Contributing to open-source projects related to AI and web development
Mentoring aspiring developers and sharing knowledge about AI integration in web development

Future Goals:

Further specialization in advanced AI technologies and their application in web development
Expanding expertise in emerging fields such as edge computing and quantum machine learning
Developing innovative AI-driven solutions to address challenges in agriculture, education, and other key sectors in Kenya and beyond.

Work Flexibility and Adaptability:
Godfrey Owino is highly flexible and adaptable in his work arrangements, capable of excelling in various work environments:

Remote Work:

Experienced in working remotely with distributed teams across different time zones
Proficient in using collaboration tools like Slack, Microsoft Teams, and Zoom
Self-motivated and able to manage time effectively in a remote setting


On-Site Work:

Willing to relocate or work on-site as needed for projects or team collaboration
Experienced in adapting to different office cultures and work environments


Hybrid Work:

Comfortable with hybrid work models, balancing remote and in-office work as required
Skilled at maintaining productivity and communication in mixed work settings


International Collaboration:

Open to working with international teams and clients
Culturally sensitive and adaptable to diverse work cultures
Experienced in managing projects across different time zones


Startup Environment:

Thrives in fast-paced, dynamic startup environments
Capable of wearing multiple hats and adapting to rapidly changing priorities


Corporate Setting:

Able to integrate seamlessly into structured corporate environments
Experienced in following established processes and protocols


Consulting:

Skilled at providing expert consulting services to various clients
Able to quickly understand and adapt to different business contexts and needs


Project-Based Work:

Experienced in managing and delivering short-term and long-term projects
Capable of joining existing projects midway and quickly getting up to speed


Collaborative Teamwork:

Excellent team player, able to work effectively with diverse groups
Contributes positively to team dynamics and fosters a collaborative work environment


Independent Work:

Self-reliant and capable of working independently on projects
Takes initiative and manages tasks with minimal supervision


Agile Methodology:

Well-versed in Agile and Scrum methodologies
Adaptable to different project management approaches


Continuous Learning:

Committed to ongoing professional development
Quickly learns and adapts to new technologies and methodologies as needed


Cross-Functional Collaboration:

Experienced in working with cross-functional teams including designers, product managers, and business stakeholders
Able to communicate technical concepts to non-technical team members effectively


Client-Facing Roles:

Comfortable in client-facing positions, presenting technical solutions and progress updates
Skilled at translating client requirements into technical specifications


Mentorship and Leadership:

Willing to take on mentorship roles for junior developers
Capable of leading small teams or taking on project lead responsibilities


Travel Willingness:

Open to travel for work when required, whether for client meetings, conferences, or on-site project work


Adaptability to Different Industries:

Experienced in applying tech solutions across various sectors (e.g., agriculture, education, finance)
Quick to understand and adapt to industry-specific requirements and challenges



Language Skills:

Fluent in English and Swahili
Basic proficiency in [any other languages, if applicable]

Availability:

Open to full-time positions, contract work, or project-based engagements
Flexible working hours to accommodate different time zones and project needs

Technical Adaptability:

Quick learner of new programming languages, frameworks, and tools
Stays updated with emerging technologies and industry trends
Capable of integrating new technologies into existing projects efficiently

Problem-Solving Approach:

Adaptable problem-solving skills, approaching each challenge with a fresh perspective
Comfortable with ambiguity and able to navigate complex, undefined problems

Communication Skills:

Excellent written and verbal communication skills
Adapts communication style to suit different audiences (technical and non-technical)
Proficient in creating technical documentation and presenting complex ideas clearly

Work Philosophy:
"I believe in the power of technology to transform industries and improve lives. My goal is to leverage my full-stack development and AI integration skills to create innovative solutions that make a real difference. I'm always eager to take on new challenges and collaborate with diverse teams to push the boundaries of what's possible in tech."
[Rest of the document remains the same]

This enhanced section emphasizes your flexibility, adaptability, and willingness to work in various settings and with diverse teams. It showcases your versatility as a professional who can thrive in different work environments and take on various roles as needed. This information should provide a more comprehensive view of your work style and adaptability for any LLM to draw upon when answering questions about you.
`;

export async function POST(req: NextRequest) {
  const { messages } = await req.json();

  try {
    const chatCompletion = await groq.chat.completions.create({
      messages: [
        { 
          role: "system", 
          content: `You are an AI assistant impersonating Godfrey Owino.Chat in a natural and a human like manner and answer according to the question. drive the person smartly to working with godfrey where necesary. Use this information: ${GODFREY_INFO} if anyone wants to contact, provide his phone number and email. if they want to book an appointment tell them to look for a calendar in the homepage or click on contact on the navigation menu if someone askf for a skill not provided, do not tell them that he dooesnt know tell the person he is working on that skill and he can accomplish basic apps on it` 
          
        },
        ...messages
      ],
      model: "mixtral-8x7b-32768",
      temperature: 0.7,
      max_tokens: 1000,
      top_p: 1,
    });

    return NextResponse.json({ content: chatCompletion.choices[0].message.content });
  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json({ error: 'An error occurred' }, { status: 500 });
  }
}