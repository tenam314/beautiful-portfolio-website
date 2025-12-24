<<<<<<< HEAD
// Knowledge base with Troy's actual experience and achievements
  const knowledgeBase = {
    // StickerGiant Experience (Feb 2020 - Jan 2024)
    stickerGiant: {
      role: "Director of Software Development",
      period: "Feb 2020 - Jan 2024",
      company: "StickerGiant (acquired by Resource Label Group for $110M)",
      keyAchievements: [
        "Increased production deployments from 24/yr to 1,300/yr using AWS cloud infrastructure",
        "Achieved 99.99% uptime using HA best practices: ELB, Route 53, ASG, ECS",
        "Reduced MTTR from 53 minutes to 1 minute 11 seconds",
        "Created first-of-its-kind 0-1 Microservice Application (CRM, ERP, MRP, MRM)",
        "600% increase in developer throughput, increasing 'coding time' to 91%",
        "Reduced Time-To-Market by 79.1%",
        "721% feature ROI increase",
        "Led 14 promotions including Director/VP level",
        "Built global team (GMT-7 to GMT+2) with zero voluntary turnover",
        "Won multiple 'Best Places to Work' awards"
      ],
      technologies: ["AWS", "Terraform", "CI/CD", "ECS", "ELB", "Route 53", "ASG", "Docker", "IaC", "Microservices", "Zero Trust Security", "Containerization"],
      leadership: "Used 'The Miyagi method' - storytelling approach to get people from A to Z. Created cultures where team members felt comfortable telling the boss to 'get out of the code.'"
    },

    // Allie Bolton Experience
    allieBolton: {
      role: "Co-Founder, Software Engineer, Technical Product Manager & Agile Coach",
      period: "May 2017 - Feb 2020, Jan 2024 - Current",
      company: "Allie Bolton LLC (Ad & Transformation Agency)",
      keyAchievements: [
        "Co-founded transformation agency revolutionizing startup clients",
        "Increased total sales growth by over 800% on average",
        "Developed custom AI/ML Data Analysis tools",
        "Multi-million dollar valuations, investment rounds, PE buyouts for clients",
        "Software products using EDA, TDD, BDD, DDD, CI/CD, DevSecOps"
      ],
      technologies: ["Cloud Infrastructure Migrations", "EDA", "TDD", "BDD", "DDD", "CI/CD", "PCI/PII", "DevSecOps", "AI/ML", "Data Analysis"]
    },

    // Envysion Experience
    envysion: {
      role: "Senior SaaS/HiL Deployment Manager",
      period: "Jul 2014 - May 2017",
      company: "Envysion (acquired by Motorola)",
      keyAchievements: [
        "Managed 700+ deployments per year",
        "Led Enterprise Rollout Division of B2B SaaS Platform",
        "Created first-of-its-kind Business Intelligence product powered by AI/ML",
        "Company acquired specifically for the new AI/ML BI Tool IP",
        "5 direct report promotions",
        "Decreased lead time by over 53%"
      ],
      technologies: ["IaC", "Networking", "Bash", "Ansible", "Puppet", "AI/ML", "Business Intelligence"]
    },

    // Target Experience
    target: {
      role: "Executive Team Leader",
      period: "Aug 2010 - Aug 2014",
      company: "Target Corporation",
      keyAchievements: [
        "Led process improvement for Chicago/Milwaukee Market (63 stores)",
        "Sales improvements of 2.06% ($40M revenue increase)",
        "7% shortage decrease ($2.2M cost savings)",
        "11 direct report promotions"
      ],
      technologies: ["SQL", "Python", "POS data", "Heat-mapped walking patterns", "Data analysis"]
    },

    // Skills and Certifications
    skills: {
      leadership: ["Motivation & Inspiration", "Vision", "Empowerment", "Organizational Transformation", "Team Topologies", "Culture Building"],
      management: ["Coaching & Training", "Budgeting", "Change Management", "Project Management", "Product Management", "Succession Planning"],
      technical: ["AWS", "DevOps", "Terraform", "Docker", "Kubernetes", "CI/CD", "Microservices", "IaC", "Zero Trust Security"],
      certifications: ["PMP (Project Management Professional)", "PMI-ACP"],
      education: "Bachelor of Arts in Business Administration from Carthage College"
    },

    // Current Role
    current: {
      role: "VP of Engineering",
      company: "The Flyover (Pop Acta)",
      period: "Jun 2024 - Present",
      focus: "Leading scale of real-time data platform from 10M → 50M+ daily events with FastAPI, PostgreSQL, and Metabase"
    }
  };

  // Enhanced chat functionality with real knowledge base
  const handleSendMessage = () => {
    if (!currentMessage.trim()) return;

    const userMessage = { role: "user", content: currentMessage };
    setChatMessages(prev => [...prev, userMessage]);
    setIsTyping(true);

    // Sophisticated knowledge-based responses
    setTimeout(() => {
      let response = "";
      const query = currentMessage.toLowerCase();

      // StickerGiant specific questions
      if (query.includes("stickergiant") || query.includes("acquisition") || query.includes("$100m")) {
        response = `Great question about StickerGiant! Troy was Director of Software Development there from Feb 2020 - Jan 2024. The company was acquired by Resource Label Group for $110M - the highest valuation of any eCommerce label converter in history. Key achievements included: increasing deployments from 24/yr to 1,300/yr, achieving 99.99% uptime, and creating a first-of-its-kind microservice application (CRM, ERP, MRP, MRM). The team had 600% increase in developer throughput!`;
        scrollToSection("experience");
      }

      // Technical achievements and metrics
      else if (query.includes("deployments") || query.includes("1300") || query.includes("600%")) {
        response = `Troy's technical transformations are impressive! At StickerGiant, he revolutionized their infrastructure: increased production deployments from 24/year to 1,300/year using AWS cloud infrastructure, achieved 99.99% uptime with HA best practices (ELB, Route 53, ASG, ECS), and reduced MTTR from 53 minutes to just 1 minute 11 seconds. The team saw a 600% increase in developer throughput!`;
        scrollToSection("projects");
      }

      // AWS and cloud infrastructure
      else if (query.includes("aws") || query.includes("cloud") || query.includes("infrastructure") || query.includes("terraform")) {
        response = `Troy has deep AWS and cloud expertise! At StickerGiant, he completely revolutionized their environments by adopting 100% AWS cloud infrastructure using Infrastructure as Code (IaC), Terraform, CI/CD Pipelines, Automated Build Testing, SRE, and Containerization. He achieved 99.99% uptime using Elastic Load Balancers, Route 53 DNS monitoring, Auto Scaling Groups, and Elastic Container Service.`;
        scrollToSection("skills");
      }

      // Leadership and team building
      else if (query.includes("leadership") || query.includes("team") || query.includes("culture") || query.includes("miyagi")) {
        response = `Troy's leadership style is unique! He uses "The Miyagi method" - a storytelling approach to help people get from A to Z. He creates cultures where team members feel comfortable telling the boss to "get out of the code!" At StickerGiant, he led 14 promotions (including Director/VP level), built a global team (GMT-7 to GMT+2) with zero voluntary turnover, and won multiple "Best Places to Work" awards. He believes in empathy, vision, and empowerment.`;
        scrollToSection("experience");
      }

      // Specific technologies
      else if (query.includes("microservices") || query.includes("containers") || query.includes("docker")) {
        response = `Troy has extensive microservices experience! At StickerGiant, he created a first-of-its-kind 0-1 Microservice Application handling CRM, ERP, MRP, and MRM functions. He taught development teams microservices best practices including Zero Trust Security (NIST 800 Frameworks), containerization with Docker, and automated E2E testing - while reducing costs by 15.01%.`;
        scrollToSection("projects");
      }

      // Target Corporation experience
      else if (query.includes("target") || query.includes("retail") || query.includes("sql") || query.includes("$40m")) {
        response = `At Target Corporation (2010-2014), Troy led process improvement for the Chicago/Milwaukee Market across 63 stores. He used SQL, Python, POS data, and heat-mapped walking patterns to optimize customer experience. Results: $40M in sales improvements (2.06% increase) and $2.2M in cost savings (7% shortage decrease). He also led 11 direct report promotions during his tenure.`;
        scrollToSection("experience");
      }

      // AI/ML and data experience
      else if (query.includes("ai") || query.includes("ml") || query.includes("machine learning") || query.includes("data")) {
        response = `Troy has significant AI/ML experience! At Envysion, he led development of a first-of-its-kind Business Intelligence product powered by AI/ML for enterprise clients ($450M-$35B). At Allie Bolton, he developed custom AI/ML Data Analysis tools that helped increase client sales growth by over 800% on average. Motorola acquired Envysion specifically for this AI/ML BI Tool IP!`;
        scrollToSection("projects");
      }

      // Current role at The Flyover
      else if (query.includes("flyover") || query.includes("current") || query.includes("vp") || query.includes("50m events")) {
        response = `Troy is currently VP of Engineering at The Flyover (Pop Acta) since June 2024. He's leading the scale of a real-time data platform from 10M to 50M+ daily events using FastAPI, PostgreSQL, and Metabase for ad optimization. This builds on his expertise in high-scale, real-time systems from his previous roles.`;
        scrollToSection("experience");
      }

      // Allie Bolton consulting
      else if (query.includes("allie bolton") || query.includes("consulting") || query.includes("800%") || query.includes("startup")) {
        response = `Troy co-founded Allie Bolton LLC, an Ad & Transformation Agency. He revolutionizes startup clients' data, software best practices, CI, and marketing strategies. Results include: 800% average sales growth increase, multi-million dollar valuations, investment rounds, and PE buyouts for clients. He's currently active with them (Jan 2024 - Present) alongside his VP role.`;
        scrollToSection("experience");
      }

      // Certifications and education
      else if (query.includes("certification") || query.includes("pmp") || query.includes("education") || query.includes("degree")) {
        response = `Troy holds a PMP (Project Management Professional) certification from Feb 2018 and PMI-ACP certification. He has a Bachelor of Arts in Business Administration from Carthage College. His combination of technical expertise and formal project management training makes him effective at leading complex transformations.`;
        scrollToSection("about");
      }

      // Specific numbers and metrics
      else if (query.includes("79%") || query.includes("721%") || query.includes("99.99%")) {
        response = `Troy's track record includes impressive metrics: 79.1% reduction in Time-To-Market at StickerGiant, 721% feature ROI increase, 99.99% uptime achievement, 600% increase in developer throughput, and reducing MTTR from 53 minutes to 1 minute 11 seconds. These aren't just numbers - they represent real business impact and operational excellence.`;
        scrollToSection("about");
      }

      // Awards and recognition
      else if (query.includes("awards") || query.includes("best place") || query.includes("recognition")) {
        response = `Under Troy's leadership, StickerGiant won multiple "Best Places to Work" awards including: Denver-Area Best Places to Work (6th) 2020, 50 Best Places to Work 2020 (Built-in), Best Places to Work Colorado 2021 & 2022 (Built-in). His focus on culture building and employee empowerment creates environments people genuinely love working in.`;
        scrollToSection("experience");
      }

      // Contact and availability
      else if (query.includes("contact") || query.includes("hire") || query.includes("available") || query.includes("opportunity")) {
        response = `Troy is open to discussing new opportunities! You can reach him at troynamath@gmail.com, connect on LinkedIn at linkedin.com/in/troynamath, or visit troynamath.com. Given his track record of transforming organizations and building exceptional teams, he's particularly interested in VP/Director level engineering roles focused on scaling platforms and building culture-first teams.`;
        scrollToSection("contact");
      }

      // General technical questions
      else if (query.includes("backend") || query.includes("api") || query.includes("python") || query.includes("node")) {
        response = `Troy has strong backend development skills (90% proficiency on his portfolio). He's worked with FastAPI, PostgreSQL, Python at The Flyover for real-time event processing, SQL and Python at Target for retail analytics, and various APIs and microservices at StickerGiant. His backend work typically focuses on high-scale, mission-critical systems.`;
        scrollToSection("skills");
      }

      // DevOps specific
      else if (query.includes("devops") || query.includes("ci/cd") || query.includes("automation")) {
        response = `DevOps is one of Troy's core strengths (85% proficiency). At StickerGiant, he revolutionized their DevOps practices: implementing CI/CD pipelines, IaC with Terraform, automated build testing, SRE practices, and containerization. This led to increasing deployments from 24/year to 1,300/year while achieving 99.99% uptime.`;
        scrollToSection("skills");
      }

      // General hello/greeting
      else if (query.includes("hello") || query.includes("hi") || query.includes("hey")) {
        response = "Hello! I'm here to help you learn about Troy Namath's impressive background. He's got 17+ years of technical experience, led multiple successful acquisitions, and is known for transforming organizations. What specifically would you like to know about his experience, achievements, or leadership approach?";
      }

      // Default response with helpful prompts
      else {
        response = "I'd be happy to share more about Troy's background! You could ask me about: his role in the $110M StickerGiant acquisition, how he increased deployments from 24/yr to 1,300/yr, his experience with AWS and cloud infrastructure, his 'Miyagi method' leadership style, his current role scaling 50M+ daily events at The Flyover, or his track record of 721% ROI increases. What interests you most?";
      }

      setIsTyping(false);
      setChatMessages(prev => [...prev, { role: "assistant", content: response }]);
    }, Math.random() * 1000 + 1500);

    setCurrentMessage("");
  };
=======
"use client";

import { useState, useEffect, useRef, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";
import {
  Menu,
  Search,
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Code,
  Briefcase,
  User,
  Star,
  ChevronDown,
  Sparkles,
  Moon,
  Sun
} from "lucide-react";

export default function Portfolio() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeSection, setActiveSection] = useState("hero");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const heroRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const experienceRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const sectionRefs = useMemo(() => ({
    hero: heroRef,
    about: aboutRef,
    projects: projectsRef,
    experience: experienceRef,
    skills: skillsRef,
    contact: contactRef
  }), [heroRef, aboutRef, projectsRef, experienceRef, skillsRef, contactRef]);

  // Comprehensive Knowledge Base from Troy's Documents and Background
  const troyKnowledgeBase = {
    currentRole: {
      title: "VP of Engineering",
      company: "The Flyover (Pop Acta)",
      period: "June 2024 - Present",
      focus: "Leading scale of real-time data platform from 10M → 50M+ daily events",
      technologies: ["FastAPI", "PostgreSQL", "Metabase", "Real-time Event Processing"],
      achievements: [
        "Scaling high-volume data platform for ad optimization",
        "Managing real-time event processing infrastructure",
        "Leading engineering team through rapid growth phase"
      ]
    },
    stickerGiant: {
      title: "Director of Software Development",
      company: "StickerGiant",
      period: "February 2020 - January 2024",
      acquisitionValue: "$110M by Resource Label Group",
      keyMetrics: {
        deployments: "Increased from 24/year to 1,300/year",
        uptime: "99.99% achieved with HA best practices",
        mttr: "Reduced from 53 minutes to 1 minute 11 seconds",
        throughput: "600% increase in developer productivity",
        timeToMarket: "79.1% reduction",
        roi: "721% feature ROI increase",
        promotions: "Led 14 team promotions including Director/VP level",
        retention: "Zero voluntary turnover on global team"
      },
      technologies: ["AWS", "Terraform", "CI/CD", "ECS", "ELB", "Route 53", "ASG", "Docker", "IaC", "Microservices", "Zero Trust Security"],
      achievements: [
        "Created first-of-its-kind 0-1 Microservice Application (CRM, ERP, MRP, MRM)",
        "Implemented industrial laser technology reducing production time by 79%",
        "Built global distributed team (GMT-7 to GMT+2)",
        "Won multiple 'Best Places to Work' awards",
        "Achieved highest valuation for eCommerce label converter in history"
      ],
      leadership: "Used 'The Miyagi Method' - storytelling approach to mentorship"
    },
    allieBolton: {
      title: "Co-Founder, Software Engineer, Technical Product Manager & Agile Coach",
      company: "Allie Bolton LLC",
      period: "May 2017 - February 2020, January 2024 - Current",
      businessType: "Ad & Transformation Agency",
      achievements: [
        "Increased client total sales growth by over 800% on average",
        "Multi-million dollar valuations, investment rounds, PE buyouts for clients",
        "Developed custom AI/ML Data Analysis tools",
        "Client won SXSW Pitch Slam competition",
        "Grew client audiences 10x through ML-driven social analytics"
      ],
      technologies: ["Cloud Infrastructure Migrations", "EDA", "TDD", "BDD", "DDD", "CI/CD", "PCI/PII", "DevSecOps", "AI/ML", "Data Analysis"]
    },
    envysion: {
      title: "Senior SaaS/HiL Deployment Manager",
      company: "Envysion",
      period: "July 2014 - May 2017",
      acquisitionBy: "Motorola",
      businessImpact: "$5M+ in new ARR generated",
      achievements: [
        "Managed 700+ deployments per year",
        "Led Enterprise Rollout Division of B2B SaaS Platform",
        "Created first-of-its-kind Business Intelligence product powered by AI/ML",
        "Company acquired specifically for the AI/ML BI Tool IP",
        "5 direct report promotions",
        "Decreased lead time by over 53%"
      ],
      technologies: ["IaC", "Networking", "Bash", "Ansible", "Puppet", "AI/ML", "Business Intelligence", "Computer Vision", "Motion Video Analysis"]
    },
    target: {
      title: "Executive Team Leader",
      company: "Target Corporation",
      period: "August 2010 - August 2014",
      scope: "Chicago/Milwaukee Market (63 stores)",
      businessImpact: {
        revenue: "$40M increase (2.06% sales improvement)",
        costSavings: "$2.2M (7% shortage decrease)",
        promotions: "11 direct report promotions"
      },
      technologies: ["SQL", "Python", "POS data analysis", "Heat-mapped walking patterns", "Retail analytics"],
      achievements: [
        "Process improvement across 63-store market",
        "Data-driven customer experience optimization",
        "Strong people development track record"
      ]
    },
    skills: {
      backend: {
        proficiency: "90%",
        technologies: ["Python", "FastAPI", "Node.js", "PostgreSQL", "Redis", "Celery", "Kafka", "Microservices Architecture"]
      },
      devops: {
        proficiency: "85%",
        technologies: ["AWS", "Docker", "Kubernetes", "Terraform", "CI/CD", "IaC", "Prometheus", "Grafana", "ECS", "ELB", "ASG", "Route 53"]
      },
      productEngineering: {
        proficiency: "95%",
        focus: "0-1 Product Development",
        achievements: ["Multiple successful product launches", "Startup co-founder experience", "Product-market fit expertise"]
      },
      leadership: {
        proficiency: "80%",
        style: "Culture-first, empowerment-focused",
        achievements: ["Zero voluntary turnover", "High promotion rates", "Award-winning workplace culture"]
      },
      frontend: {
        proficiency: "65%",
        technologies: ["React", "Next.js", "TypeScript", "Modern JavaScript"]
      },
      aiMl: {
        technologies: ["TensorFlow", "PyTorch", "OpenCV", "Computer Vision", "Business Intelligence", "Data Analysis"],
        applications: ["Fraud prevention", "Social analytics", "Operational insights"]
      }
    },
    education: {
      degree: "Bachelor of Arts in Business Administration",
      school: "Carthage College",
      certifications: [
        "PMP (Project Management Professional) - February 2018",
        "PMI-ACP (Agile Certified Practitioner)"
      ]
    },
    awards: [
      "Denver-Area Best Places to Work (6th place) - 2020",
      "50 Best Places to Work 2020 (Built-in)",
      "Best Places to Work Colorado 2021 (Built-in)",
      "Best Places to Work Colorado 2022 (Built-in)",
      "Led team to SXSW Pitch Slam victory (client)"
    ],
    leadership: {
      philosophy: "The Miyagi Method - storytelling approach to get people from A to Z",
      culture: "Creates environments where team members feel comfortable telling the boss to 'get out of the code'",
      focus: ["Empathy", "Vision", "Empowerment", "Organizational Transformation", "Team Topologies", "Culture Building"],
      results: ["Zero voluntary turnover", "High promotion rates", "Award-winning workplace culture"]
    },
    contact: {
      email: "troynamath@gmail.com",
      linkedin: "linkedin.com/in/troynamath",
      website: "troynamath.com",
      github: "Available upon request"
    }
  };

  // Smart search functionality
  const handleSearch = (query: string) => {
    setSearchQuery(query);
    const lowercaseQuery = query.toLowerCase();

    // Smart navigation based on search terms
    if (lowercaseQuery.includes("project") || lowercaseQuery.includes("work") || lowercaseQuery.includes("build")) {
      scrollToSection("projects");
    } else if (lowercaseQuery.includes("experience") || lowercaseQuery.includes("job") || lowercaseQuery.includes("career")) {
      scrollToSection("experience");
    } else if (lowercaseQuery.includes("skill") || lowercaseQuery.includes("tech") || lowercaseQuery.includes("language")) {
      scrollToSection("skills");
    } else if (lowercaseQuery.includes("about") || lowercaseQuery.includes("bio") || lowercaseQuery.includes("background")) {
      scrollToSection("about");
    } else if (lowercaseQuery.includes("contact") || lowercaseQuery.includes("hire") || lowercaseQuery.includes("reach")) {
      scrollToSection("contact");
    }
  };

  // Toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (!darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  const scrollToSection = (section: keyof typeof sectionRefs) => {
    sectionRefs[section].current?.scrollIntoView({ behavior: "smooth" });
    setMobileMenuOpen(false); // Close mobile menu when navigating
  };

  // Intersection Observer for active section tracking
  useEffect(() => {
    const observers = Object.entries(sectionRefs).map(([key, ref]) => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(key);
          }
        },
        { threshold: 0.3 }
      );

      if (ref.current) {
        observer.observe(ref.current);
      }

      return observer;
    });

    return () => observers.forEach(observer => observer.disconnect());
  }, [sectionRefs]);

  const navigationItems = [
    { id: "about", label: "About", icon: User },
    { id: "projects", label: "Projects", icon: Code },
    { id: "experience", label: "Experience", icon: Briefcase },
    { id: "skills", label: "Skills", icon: Star },
    { id: "contact", label: "Contact", icon: Mail }
  ];

  const projects = [
    {
      title: "High-Velocity Data Platform",
      description: "Scaling a real-time event platform from 10M → 50M+ daily email events to optimize ad revenue and analytics.",
      technologies: ["Python", "FastAPI", "PostgreSQL", "Redis", "Celery", "Kafka", "Metabase", "Prometheus", "Grafana"],
      github: "#",
      live: "#",
      featured: true
    },
    {
      title: "Industrial Laser Innovation",
      description: "Implemented industrial lasers to cut production time by 79%, creating the fastest sticker/label manufacturer in history and driving a $100M+ acquisition.",
      technologies: ["AWS", "ECS", "ELB", "ASG", "Terraform", "Docker", "Java", "Python", "Apache Spark", "ElasticSearch", "Auth0", "LaunchDarkly"],
      github: "#",
      live: "#",
      featured: true
    },
    {
      title: "Computer Vision ML System",
      description: "Developed and deployed a computer vision ML platform analyzing motion video for fraud prevention and operational insights.",
      technologies: ["Python", "TensorFlow", "OpenCV", "Kafka", "PostgreSQL", "Redis", "Ansible", "Puppet"],
      github: "#",
      live: "#",
      featured: false
    },
    {
      title: "Developer Experience Transformation",
      description: "Redesigned developer workflows with CI/CD, IaC, and automated testing, increasing release velocity 600% YoY and ROI 4.21×.",
      technologies: ["AWS", "Docker", "Terraform", "GitHub", "CloudFormation", "Apache Spark", "ElasticSearch", "LaunchDarkly", "DataDog"],
      github: "#",
      live: "#",
      featured: false
    },
    {
      title: "Social + Product Growth Strategy",
      description: "Created ML-driven social analytics to optimize engagement and growth, helping a client win SXSW Pitch Slam and grow audiences 10×.",
      technologies: ["Python", "Java", "PyTorch", "TensorFlow", "Jupyter Notebook", "MDE Calculators"],
      github: "#",
      live: "#",
      featured: false
    }
  ];

  const experiences = [
    {
      title: "VP of Engineering",
      company: "The Flyover (Pop Acta)",
      period: "Jun 2024 - Present",
      description: "Leading the scale of a real-time data platform from 10M → 50M+ daily events with FastAPI, PostgreSQL, and Metabase for ad optimization."
    },
    {
      title: "Director of Software Engineering",
      company: "StickerGiant",
      period: "Feb 2020 - Jan 2024",
      description: "Led cloud transformation and industrial laser adoption, making StickerGiant the fastest manufacturer in its industry and driving a $100M+ acquisition."
    },
    {
      title: "Co-Founder / Technical Product Manager",
      company: "Allie Bolton",
      period: "Feb 2017 - Jun 2023",
      description: "Scaled SMB to Fortune 50 clients with ML-powered social analytics, helping a client win SXSW Pitch Slam and grow 10×."
    },
    {
      title: "Senior Deployment Manager",
      company: "Envysion",
      period: "Aug 2014 - May 2017",
      description: "Directed development and deployment of a computer vision ML platform using motion video for operational analysis, generating $5M+ in new ARR."
    },
    {
      title: "Executive Team Leader",
      company: "Target Corp.",
      period: "Aug 2010 - Aug 2014",
      description: "Built SQL-driven retail analytics systems that delivered $40M in revenue growth and $22M in cost savings across 400 stores."
    }
  ];

  const skills = {
    "Frontend": ["React", "Next.js", "TypeScript", "Vue.js", "Tailwind CSS", "SASS"],
    "Backend": ["Node.js", "Python", "Express", "FastAPI", "GraphQL", "REST APIs"],
    "Database": ["PostgreSQL", "MongoDB", "Redis", "MySQL", "Prisma", "Supabase"],
    "Cloud & DevOps": ["AWS", "Docker", "Kubernetes", "CI/CD", "Netlify", "Vercel"],
    "Tools & Others": ["Git", "Jest", "Cypress", "Figma", "Jira", "Agile/Scrum"]
  };

  return (
    <div className={`min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 ${darkMode ? 'dark' : ''}`}>
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 dark:bg-slate-950/90 backdrop-blur-md border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <Sparkles className="w-4 h-4 text-white" />
              </div>
              <span className="font-bold text-xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Portfolio
              </span>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              {navigationItems.map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id as keyof typeof sectionRefs)}
                    className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-all duration-200 ${
                      activeSection === item.id
                        ? "bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400"
                        : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100"
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span className="font-medium">{item.label}</span>
                  </button>
                );
              })}
            </div>

            <div className="flex items-center space-x-4">
              {/* Dark Mode Toggle */}
              <Button
                variant="ghost"
                size="sm"
                onClick={toggleDarkMode}
                className="w-9 h-9 rounded-lg"
              >
                {darkMode ? (
                  <Sun className="h-4 w-4" />
                ) : (
                  <Moon className="h-4 w-4" />
                )}
                <span className="sr-only">Toggle dark mode</span>
              </Button>

              {/* Mobile Menu */}
              <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
                <SheetTrigger asChild>
                  <Button variant="outline" size="sm" className="md:hidden">
                    <Menu className="w-4 h-4" />
                  </Button>
                </SheetTrigger>
                <SheetContent>
                  <SheetHeader>
                    <SheetTitle>Navigation</SheetTitle>
                  </SheetHeader>
                  <div className="mt-6 space-y-4">
                    {navigationItems.map((item) => {
                      const Icon = item.icon;
                      return (
                        <button
                          key={item.id}
                          onClick={() => scrollToSection(item.id as keyof typeof sectionRefs)}
                          className="w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                        >
                          <Icon className="w-5 h-5" />
                          <span>{item.label}</span>
                        </button>
                      );
                    })}
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section ref={sectionRefs.hero} className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-8">
            <div className="space-y-4">
              <Avatar className="w-32 h-32 mx-auto border-4 border-white shadow-xl">
                <AvatarImage src="/api/placeholder/128/128" alt="Profile" />
                <AvatarFallback className="text-2xl font-bold bg-gradient-to-br from-blue-500 to-purple-600 text-white">
                  TN
                </AvatarFallback>
              </Avatar>
              <h1 className="text-5xl sm:text-6xl font-bold bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 dark:from-slate-100 dark:via-blue-100 dark:to-slate-100 bg-clip-text text-transparent">
                Troy Namath
              </h1>
              <p className="text-xl sm:text-2xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
                Engineering & Product Leader driving high-velocity platforms, culture-first teams, and products that transform industries
              </p>
            </div>

            {/* Smart Search Bar - COMMENTED OUT, REPLACED WITH CHAT WIDGET BELOW */}
            {/*
            <div className="max-w-md mx-auto">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4" />
                <Input
                  placeholder="Search for projects, skills, experience..."
                  value={searchQuery}
                  onChange={(e) => handleSearch(e.target.value)}
                  className="pl-10 h-12 text-center bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm border-2 border-slate-200 dark:border-slate-700 focus:border-blue-500 rounded-xl"
                />
              </div>
              <p className="text-sm text-slate-500 mt-2">
                Try searching: "React projects", "backend experience", "contact info"
              </p>
            </div>
            */}

            {/* Chat Widget - REMOVED */}

            <div className="flex flex-wrap justify-center gap-4">
              <Button onClick={() => scrollToSection("projects")} size="lg" className="rounded-xl">
                View Projects
              </Button>
              <Button onClick={() => scrollToSection("contact")} variant="outline" size="lg" className="rounded-xl">
                Get in Touch
              </Button>
            </div>

            <div className="flex justify-center space-x-6 pt-8">
              <a href="#" className="text-slate-600 hover:text-blue-600 transition-colors">
                <Github className="w-6 h-6" />
              </a>
              <a href="#" className="text-slate-600 hover:text-blue-600 transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="#" className="text-slate-600 hover:text-blue-600 transition-colors">
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section ref={sectionRefs.about} className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 dark:text-slate-100 mb-4">About Me</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                I'm Troy Namath, a product and engineering leader with 17+ years of technical experience and 11+ years in management.
                I build high-trust teams, scale systems for millions of users, and deliver products that drive revenue, acquisition, and industry-first innovation.
              </p>
              <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                From leading a $100M+ acquisition at StickerGiant to scaling real-time platforms processing 50M+ daily events,
                I combine deep technical expertise with strategic leadership to transform industries and build exceptional teams.
              </p>
              <div className="flex flex-wrap gap-2">
                {["Product Leader", "Engineering Manager", "Team Builder", "Innovation Driver"].map((trait) => (
                  <Badge key={trait} variant="secondary" className="px-3 py-1">
                    {trait}
                  </Badge>
                ))}
              </div>
            </div>
            <div className="space-y-4">
              <Card className="p-6 border-0 shadow-lg bg-gradient-to-br from-green-50 to-blue-50 dark:from-green-950/20 dark:to-blue-950/20">
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="font-semibold">Backend Development</span>
                    <span className="text-green-600">90%</span>
                  </div>
                  <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2">
                    <div className="bg-gradient-to-r from-green-500 to-blue-500 h-2 rounded-full" style={{width: '90%'}}></div>
                  </div>
                </div>
              </Card>
              <Card className="p-6 border-0 shadow-lg bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20">
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="font-semibold">DevOps</span>
                    <span className="text-purple-600">85%</span>
                  </div>
                  <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2">
                    <div className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full" style={{width: '85%'}}></div>
                  </div>
                </div>
              </Card>
              <Card className="p-6 border-0 shadow-lg bg-gradient-to-br from-orange-50 to-amber-50 dark:from-orange-950/20 dark:to-amber-950/20">
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="font-semibold">0-1 Product Engineering</span>
                    <span className="text-orange-600">95%</span>
                  </div>
                  <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2">
                    <div className="bg-gradient-to-r from-orange-500 to-amber-500 h-2 rounded-full" style={{width: '95%'}}></div>
                  </div>
                </div>
              </Card>
              <Card className="p-6 border-0 shadow-lg bg-gradient-to-br from-indigo-50 to-cyan-50 dark:from-indigo-950/20 dark:to-cyan-950/20">
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="font-semibold">Engineering Leadership</span>
                    <span className="text-indigo-600">80%</span>
                  </div>
                  <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2">
                    <div className="bg-gradient-to-r from-indigo-500 to-cyan-500 h-2 rounded-full" style={{width: '80%'}}></div>
                  </div>
                </div>
              </Card>
              <Card className="p-6 border-0 shadow-lg bg-gradient-to-br from-blue-50 to-teal-50 dark:from-blue-950/20 dark:to-teal-950/20">
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="font-semibold">Frontend Development</span>
                    <span className="text-blue-600">65%</span>
                  </div>
                  <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2">
                    <div className="bg-gradient-to-r from-blue-500 to-teal-500 h-2 rounded-full" style={{width: '65%'}}></div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section ref={sectionRefs.projects} className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 dark:text-slate-100 mb-4">Featured Projects</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
            <p className="text-lg text-slate-600 dark:text-slate-400 mt-6 max-w-2xl mx-auto">
              Here are some of my recent projects that showcase my skills and passion for creating innovative solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className={`group hover:shadow-2xl transition-all duration-300 border-0 overflow-hidden ${
                project.featured ? 'md:col-span-2 lg:col-span-1' : ''
              }`}>
                <div className="h-48 bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-900 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-4 right-4 flex space-x-2">
                    <Button size="sm" variant="secondary" className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Github className="w-4 h-4" />
                    </Button>
                    <Button size="sm" variant="secondary" className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <ExternalLink className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-xl">{project.title}</CardTitle>
                    {project.featured && (
                      <Badge className="bg-gradient-to-r from-blue-500 to-purple-600 text-white">
                        Featured
                      </Badge>
                    )}
                  </div>
                  <CardDescription className="text-base leading-relaxed">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section ref={sectionRefs.experience} className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 dark:text-slate-100 mb-4">Experience</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
          </div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <div>
                      <CardTitle className="text-xl">{exp.title}</CardTitle>
                      <p className="text-lg font-semibold text-blue-600 dark:text-blue-400">{exp.company}</p>
                    </div>
                    <Badge variant="outline" className="self-start sm:self-center">
                      {exp.period}
                    </Badge>
                  </div>
                  <CardDescription className="text-base leading-relaxed">
                    {exp.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section ref={sectionRefs.skills} className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 dark:text-slate-100 mb-4">Skills & Technologies</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(skills).map(([category, skillList]) => (
              <Card key={category} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center space-x-2">
                    <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"></div>
                    <span>{category}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {skillList.map((skill) => (
                      <Badge key={skill} variant="secondary" className="text-sm">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section ref={sectionRefs.contact} className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 dark:text-slate-100 mb-4">Let's Work Together</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
            <p className="text-lg text-slate-600 dark:text-slate-400 mt-6">
              Ready to bring your ideas to life? I'd love to hear from you!
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <Card className="border-0 shadow-lg p-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Email</h3>
                    <p className="text-slate-600 dark:text-slate-400">troynamath@gmail.com</p>
                  </div>
                </div>
              </Card>

              <Card className="border-0 shadow-lg p-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-blue-500 rounded-lg flex items-center justify-center">
                    <Linkedin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">LinkedIn</h3>
                    <p className="text-slate-600 dark:text-slate-400">linkedin.com/in/troynamath</p>
                  </div>
                </div>
              </Card>

              <Card className="border-0 shadow-lg p-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                    <Github className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Website</h3>
                    <p className="text-slate-600 dark:text-slate-400">troynamath.com</p>
                  </div>
                </div>
              </Card>
            </div>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle>Send a Message</CardTitle>
                <CardDescription>
                  I typically respond within 24 hours
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <Input placeholder="First Name" />
                  <Input placeholder="Last Name" />
                </div>
                <Input placeholder="Email Address" type="email" />
                <Input placeholder="Subject" />
                <Textarea placeholder="Your message..." className="min-h-[120px]" />
                <Button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700">
                  Send Message
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-slate-200 dark:border-slate-800">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <Sparkles className="w-4 h-4 text-white" />
            </div>
            <span className="font-bold text-xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Portfolio
            </span>
          </div>
          <p className="text-slate-600 dark:text-slate-400">
            © 2025 Troy Namath. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
>>>>>>> 9e5ff1b (Remove chatbot UI/logic and Docker/Netlify configs; prepare project for AWS Amplify)
