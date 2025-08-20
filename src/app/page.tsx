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
