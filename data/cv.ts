export type Experience = {
  company: string;
  role: string;
  period: string;
  highlights: string[];
};

export type Education = {
  title: string;
  institution: string;
  period?: string;
};

export type CompetencyGroup = {
  title: string;
  items: string[];
};

export type Language = {
  name: string;
  level: string;
  certificateUrl?: string;
};

export type OpenSourceItem = {
  project: string;
  role: string;
  period?: string;
  highlights: string[];
};

export const cvData = {
  name: "Diogo Miranda",
  role: "Computer Science and Engineering MSc",
  location: "Oeiras, Lisboa, Portugal",
  phone: "+351 935368880",
  email: "diogomsmiranda@gmail.com",
  githubUrl: "https://github.com/diogomsmiranda",
  linkedinUrl: "https://www.linkedin.com/in/diogomsmiranda/",
  summary:
    "Final year of Master's in Computer Science and Engineering seeking professional experience in the field of computer science. Passionate about programming languages and game development. I am interested in all areas of Computer Science, with a special focus on Data Science, Artificial Intelligence, and Machine Learning.",
  competencies: [
    {
      title: "Programming Languages",
      items: ["Java", "C/C++", "Python"],
    },
    {
      title: "Data and ML",
      items: ["PyTorch", "NumPy", "Pandas", "scikit-learn"],
    },
    {
      title: "Web Dev",
      items: ["HTML5", "JavaScript", "React", "Vue.js", "Tailwind CSS"],
    },
    {
      title: ".NET / Backend",
      items: [".NET", "ASP.NET", "C#"],
    },
    {
      title: "Databases",
      items: ["MySQL", "PostgreSQL"],
    },
    {
      title: "DevOps / Tools",
      items: ["Git", "Docker"],
    },
    {
      title: "Soft skills",
      items: [
        "Critical thinking",
        "Communication",
        "Proactiveness",
        "Time Management",
        "Teamwork",
      ],
    },
  ] as CompetencyGroup[],
  experiences: [
    {
      company: "JUNITEC",
      role: "Backend Developer",
      period: "Sept 2025 - Feb 2026",
      highlights: [
        "Designed and implemented an SSO login/logout flow with WSO2 (OIDC/OWIN), hardening session handling, cookies, and redirect behavior across browsers.",
        "Delivered frontend updates to support the new authentication experience.",
        "Collaborated with different software engineers, system administrators and managers to define requirements and UX.",
      ],
    },
    {
      company: "Safegene Saúde Lda, Oeiras (Part-Time)",
      role: "Frontend Developer",
      period: "Aug 2023 - Dec 2025",
      highlights: [
        "Architected and deployed multiple responsive web applications using React.js and Next.js, improving brand presence and user engagement.",
        "Styled high-performance user interfaces with Tailwind CSS, ensuring mobile-first design and cross-browser consistency.",
        "Integrated frontend components with Node.js backends and RESTful APIs to deliver dynamic, data-driven content.",
        "Optimized application performance and SEO through Google Analytics and Google Tag Manager.",
        "Maintained and updated legacy codebases, migrating key features to modern frameworks to reduce technical debt.",
      ],
    },
    {
      company: "Department of Mechanical Engineering at IST",
      role: "Systems Administrator",
      period: "Jan 2024 - Dec 2024",
      highlights: [
        "Managed the study room website, web server, database server, and remote-access computers.",
        "Handled system administration tickets to resolve hardware and software issues.",
      ],
    },
    {
      company: "JUNITEC",
      role: "Backend Developer",
      period: "Mar 2024 - Oct 2024",
      highlights: [
        "Developed an API for a renowned Portuguese bank to improve external integration and customer experience.",
        "Collaborated with stakeholders, software engineers, and product managers to define API requirements.",
      ],
    },
    {
      company: "Safegene Saúde Lda, Oeiras (Part-Time)",
      role: "Operations Support",
      period: "Mar 2019 - May 2020",
      highlights: [
        "Welcomed employees at COVID-19 testing events in multinational companies.",
        "Managed and escorted attendees to testing areas in an international environment.",
        "Developed communication and fast-thinking soft skills.",
      ],
    },
  ] as Experience[],
  openSource: [
    {
      project: "CUBOS",
      role: "Core Contributor",
      period: "Dec 2023 - Feb 2025",
      highlights: [
        "CUBOS aims to be a simple yet powerful game engine for PC, where everything is made of voxels. It is open-source and free to use for any purpose. Written in modern C++ (20) with a data-oriented design in mind, its goal is to be performant and highly flexible.",
        "Bug fixes and new features.",
      ],
    },
    {
      project: "Pandas",
      role: "Contributor",
      highlights: [
        "Fixed a bug and implemented a feature that preserves cell notes when exporting with to_excel.",
      ],
    },
  ] as OpenSourceItem[],
  education: [
    {
      title: "Bologna Master Degree in Computer Science and Engineering",
      institution: "Instituto Superior Técnico",
      period: "Estimated graduation on October 2026.",
    },
    {
      title: "Bologna Degree in Computer Science and Engineering",
      institution: "Instituto Superior Técnico",
      period: "Graduated July 2024 — avg. 15",
    },
    {
      title: "High School",
      institution: "Escola Secundário Luís Freitas Branco",
    },
  ] as Education[],
  languages: [
    {
      name: "Portuguese",
      level: "Native",
    },
    {
      name: "English",
      level: "C1 Level",
      certificateUrl: "Certificate_CAE_DM.pdf",
    },
  ] as Language[],
  extracurricular: [
    "High-Performance Athlete: Handball — 11 years",
    "Athens Programme: Augmented and Virtual Reality for Engineering",
  ],
};
