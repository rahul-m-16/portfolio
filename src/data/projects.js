export const projects = [
  {
  id: 1,
  title: 'TrackLyt – Personal Finance Dashboard',
  description: 'A full-stack web application to track income, expenses, and visualize financial data through interactive dashboards.',
  problem: 'Managing personal finances manually makes it difficult to track expenses and gain meaningful financial insights.',
  approach: 'Developed a MERN-based application with intuitive UI and real-time data updates to simplify financial tracking and analysis.',
  techStack: ['React', 'Node.js', 'Express', 'MongoDB'],
  challenges: 'Handling real-time data updates and designing intuitive dashboards for clear financial visualization.',
  outcome: 'Successfully deployed a scalable finance tracking application enabling users to monitor spending and make informed financial decisions.',
  liveLink: 'https://tracklyt.vercel.app/',
  githubLink: 'https://github.com/yourusername/tracklyt',
  category: 'fullstack',
  featured: true
},
  {
    id: 2,
    title: 'Task Management Dashboard',
    description: 'A collaborative task management tool with real-time updates and intuitive drag-and-drop interface.',
    problem: 'Teams needed a simple way to track project progress without the complexity of enterprise tools.',
    approach: 'Designed a clean, intuitive interface with real-time synchronization using WebSockets.',
    techStack: ['React', 'Firebase', 'Tailwind CSS', 'Framer Motion'],
    challenges: 'Handling real-time data synchronization across multiple users and implementing smooth drag-and-drop.',
    outcome: 'Achieved 95% user satisfaction in testing with 50+ active users managing 200+ tasks daily.',
    liveLink: 'https://example.com',
    githubLink: 'https://github.com/yourusername/task-manager',
    category: 'frontend',
    featured: true
  },
  {
    id: 3,
    title: 'Weather Forecast App',
    description: 'Real-time weather application with location-based forecasts and interactive weather maps.',
    problem: 'Existing weather apps were cluttered with ads and had poor user experience.',
    approach: 'Created a clean, ad-free interface focusing on essential weather information with beautiful visualizations.',
    techStack: ['React', 'OpenWeather API', 'Chart.js', 'Tailwind CSS'],
    challenges: 'Handling API rate limits and creating responsive charts for weather data visualization.',
    outcome: 'Deployed app with 1000+ monthly users and 4.5-star rating on feedback surveys.',
    liveLink: 'https://example.com',
    githubLink: 'https://github.com/yourusername/weather-app',
    category: 'frontend',
    featured: false
  },
  {
    id: 4,
    title: 'Blog Platform with CMS',
    description: 'A modern blogging platform with markdown support and content management system.',
    problem: 'Writers needed a simple platform to publish content without technical knowledge.',
    approach: 'Built an intuitive CMS with markdown editor and automatic SEO optimization.',
    techStack: ['Next.js', 'MongoDB', 'Tailwind CSS', 'MDX'],
    challenges: 'Implementing server-side rendering for SEO and creating a user-friendly markdown editor.',
    outcome: 'Platform hosting 50+ blogs with 5000+ monthly readers and excellent SEO performance.',
    liveLink: 'https://example.com',
    githubLink: 'https://github.com/yourusername/blog-platform',
    category: 'fullstack',
    featured: false
  }
]

export const categories = ['all', 'frontend', 'fullstack']
