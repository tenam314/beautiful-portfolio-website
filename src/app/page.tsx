"use client";

import { useState, useEffect, useRef, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";
import {
  Menu,
  Search,
  MessageCircle,
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Code,
  Briefcase,
  User,
  Star,
  Send,
  ChevronDown,
  Sparkles
} from "lucide-react";

export default function Portfolio() {
  const [searchQuery, setSearchQuery] = useState("");
  const [chatMessages, setChatMessages] = useState([
    { role: "assistant", content: "Hi! I'm here to help you find what you're looking for in this portfolio. You can ask me about projects, skills, experience, or anything else!" }
  ]);
  const [currentMessage, setCurrentMessage] = useState("");
  const [activeSection, setActiveSection] = useState("hero");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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

  // Chat functionality for recruiters
  const handleSendMessage = () => {
    if (!currentMessage.trim()) return;

    const userMessage = { role: "user", content: currentMessage };
    setChatMessages(prev => [...prev, userMessage]);

    // Simple AI-like responses for demo
    setTimeout(() => {
      let response = "";
      const query = currentMessage.toLowerCase();

      if (query.includes("react") || query.includes("frontend")) {
        response = "Great question! I have extensive experience with React, Next.js, and modern frontend technologies. Check out the Projects section to see my React applications in action!";
        scrollToSection("projects");
      } else if (query.includes("backend") || query.includes("api") || query.includes("node")) {
        response = "I'm well-versed in backend development with Node.js, Python, and various databases. You can find examples of full-stack projects in my portfolio!";
        scrollToSection("projects");
      } else if (query.includes("experience") || query.includes("years")) {
        response = "I'd be happy to share my professional journey! Take a look at my Experience section for detailed information about my roles and achievements.";
        scrollToSection("experience");
      } else if (query.includes("skills") || query.includes("technologies")) {
        response = "I work with a diverse tech stack! Check out my Skills section to see all the technologies I'm proficient in, from frontend frameworks to cloud platforms.";
        scrollToSection("skills");
      } else if (query.includes("contact") || query.includes("hire") || query.includes("available")) {
        response = "I'm always interested in new opportunities! Feel free to reach out through the Contact section. I typically respond within 24 hours.";
        scrollToSection("contact");
      } else {
        response = "Thanks for your question! Feel free to explore different sections of my portfolio, or ask me more specific questions about my projects, skills, or experience.";
      }

      setChatMessages(prev => [...prev, { role: "assistant", content: response }]);
    }, 1000);

    setCurrentMessage("");
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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
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
              {/* Search/Chat Interface - MOVED TO HERO SECTION */}
              {/*
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="outline" size="sm" className="hidden sm:flex items-center space-x-2">
                    <MessageCircle className="w-4 h-4" />
                    <span>Ask me anything</span>
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-md">
                  <DialogHeader>
                    <DialogTitle>Portfolio Assistant</DialogTitle>
                  </DialogHeader>
                  <div className="space-y-4">
                    <div className="h-64 overflow-y-auto space-y-3 border rounded-lg p-3 bg-slate-50 dark:bg-slate-900">
                      {chatMessages.map((message, index) => (
                        <div key={index} className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                          <div className={`max-w-[80%] p-3 rounded-lg ${
                            message.role === 'user'
                              ? 'bg-blue-500 text-white'
                              : 'bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100'
                          }`}>
                            <p className="text-sm">{message.content}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="flex space-x-2">
                      <Input
                        placeholder="Ask about projects, skills, experience..."
                        value={currentMessage}
                        onChange={(e) => setCurrentMessage(e.target.value)}
                        onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                        className="flex-1"
                      />
                      <Button onClick={handleSendMessage} size="sm">
                        <Send className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
              */}

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

            {/* Chat Widget - Prominent and Mobile-Friendly */}
            <div className="flex flex-col items-center space-y-4">
              <Dialog>
                <DialogTrigger asChild>
                  <Button
                    size="lg"
                    className="h-14 px-8 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center space-x-3"
                  >
                    <MessageCircle className="w-5 h-5" />
                    <span className="text-lg">Chat with me about my work!</span>
                    <Sparkles className="w-5 h-5" />
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-md">
                  <DialogHeader>
                    <DialogTitle className="flex items-center space-x-2">
                      <MessageCircle className="w-5 h-5 text-blue-500" />
                      <span>Portfolio Assistant</span>
                    </DialogTitle>
                  </DialogHeader>
                  <div className="space-y-4">
                    <div className="h-64 overflow-y-auto space-y-3 border rounded-lg p-3 bg-slate-50 dark:bg-slate-900">
                      {chatMessages.map((message, index) => (
                        <div key={index} className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                          <div className={`max-w-[80%] p-3 rounded-lg ${
                            message.role === 'user'
                              ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white'
                              : 'bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 border'
                          }`}>
                            <p className="text-sm">{message.content}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="flex space-x-2">
                      <Input
                        placeholder="Ask about projects, skills, experience..."
                        value={currentMessage}
                        onChange={(e) => setCurrentMessage(e.target.value)}
                        onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                        className="flex-1"
                      />
                      <Button
                        onClick={handleSendMessage}
                        size="sm"
                        className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700"
                      >
                        <Send className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
              <p className="text-sm text-slate-500 text-center max-w-md">
                💬 Ask me anything about my projects, experience, or skills - I'm here to help!
              </p>
            </div>

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
