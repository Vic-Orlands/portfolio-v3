import TestImage from "@/assets/test image.png";
import { Project } from "@/types/project";

export const projects: Project[] = [
  {
    id: "1",
    slug: "e-commerce-platform",
    title: "E-Commerce Platform",
    thumbnail: TestImage,
    cover: TestImage,
    shortDescription:
      "A full-featured e-commerce platform with cart, checkout, and payment integration.",
    description: `
      <p>This project involved developing a comprehensive e-commerce solution from the ground up. The platform includes product catalog management, user accounts, shopping cart functionality, secure checkout process, and payment gateway integration.</p>
      
      <p>Key features implemented:</p>
      <ul>
        <li>Responsive design optimized for mobile and desktop</li>
        <li>Product search with filtering and sorting options</li>
        <li>User authentication and profile management</li>
        <li>Shopping cart with persistent storage</li>
        <li>Checkout process with address validation</li>
        <li>Payment processing with Stripe integration</li>
        <li>Order tracking and history</li>
        <li>Admin dashboard for inventory management</li>
      </ul>
      
      <p>The application was built using Next.js for server-side rendering and optimized performance. Tailwind CSS was used for styling, providing a consistent and modern UI. The backend API was developed with Node.js and Express, with MongoDB as the database.</p>
      
      <p>One of the major challenges was implementing a seamless checkout experience while ensuring security and data validation. This was solved by creating a multi-step form with proper validation at each stage and secure handling of sensitive information.</p>
    `,
    tags: ["E-commerce", "Next.js", "React", "Node.js", "MongoDB", "Stripe"],
    stack: [
      "TypeScript",
      "Next.js",
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Tailwind CSS",
      "Stripe API",
    ],
    scope: [
      "Frontend Development",
      "Backend Development",
      "Database Design",
      "Payment Integration",
      "Responsive Design",
    ],
    demoUrl: "https://example-ecommerce.demo",
    githubUrl: "https://github.com/username/e-commerce-platform",
    date: "January 2023",
  },
  {
    id: "2",
    slug: "task-management-app",
    title: "Task Management App",
    thumbnail:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=1000&auto=format&fit=crop",
    cover:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=1000&auto=format&fit=crop",
    shortDescription:
      "A collaborative task management application with real-time updates and team features.",
    description: `
      <p>This task management application was designed to help teams collaborate effectively on projects. The app features real-time updates, task assignment, progress tracking, and team communication tools.</p>
      
      <p>The application includes:</p>
      <ul>
        <li>Kanban board for visual task management</li>
        <li>Task creation with priority levels and due dates</li>
        <li>Task assignment to team members</li>
        <li>Comment system for discussing tasks</li>
        <li>File attachment capabilities</li>
        <li>Real-time notifications</li>
        <li>Team management and permissions</li>
        <li>Performance analytics and reporting</li>
      </ul>
      
      <p>The front end was built with React and TypeScript, utilizing Redux for state management. The backend was implemented with Node.js and Express, with PostgreSQL as the database. Socket.io was used to enable real-time communication.</p>
      
      <p>A significant challenge was implementing the real-time collaboration features while maintaining performance. This was addressed by optimizing the Socket.io implementation and using efficient data transfer protocols.</p>
    `,
    tags: ["Productivity", "React", "Node.js", "Real-time", "PostgreSQL"],
    stack: [
      "TypeScript",
      "React",
      "Redux",
      "Node.js",
      "Express",
      "PostgreSQL",
      "Socket.io",
      "Tailwind CSS",
    ],
    scope: [
      "Frontend Development",
      "Backend Development",
      "Real-time Communication",
      "Database Design",
      "Authentication",
    ],
    demoUrl: "https://example-taskapp.demo",
    githubUrl: "https://github.com/username/task-management-app",
    date: "May 2023",
  },
  {
    id: "3",
    slug: "fitness-tracker",
    title: "Fitness Tracker",
    thumbnail:
      "https://images.unsplash.com/photo-1542744094-3a31f272c490?q=80&w=1000&auto=format&fit=crop",
    cover:
      "https://images.unsplash.com/photo-1542744094-3a31f272c490?q=80&w=1000&auto=format&fit=crop",
    shortDescription:
      "A comprehensive fitness tracking application with workout plans and progress analytics.",
    description: `
      <p>This fitness tracking application helps users monitor their workouts, track progress, and follow personalized training plans. The app includes features for creating custom workouts, logging exercises, and analyzing performance over time.</p>
      
      <p>Key features include:</p>
      <ul>
        <li>Workout plan creation and customization</li>
        <li>Exercise logging with sets, reps, and weights</li>
        <li>Progress tracking with charts and statistics</li>
        <li>Body measurements and weight tracking</li>
        <li>Calorie counting and nutritional information</li>
        <li>Achievement system for motivation</li>
        <li>Community challenges and social sharing</li>
        <li>Integration with fitness wearables</li>
      </ul>
      
      <p>The application was developed using React Native for cross-platform mobile compatibility. The backend was built with Node.js and Express, with MongoDB for data storage. GraphQL was used for efficient API queries.</p>
      
      <p>One of the main challenges was designing an intuitive interface for logging workouts quickly during exercise sessions. This was addressed through extensive user testing and iterative design improvements.</p>
    `,
    tags: ["Fitness", "Mobile", "React Native", "Health", "Analytics"],
    stack: [
      "React Native",
      "TypeScript",
      "Node.js",
      "Express",
      "MongoDB",
      "GraphQL",
      "D3.js",
      "Firebase",
    ],
    scope: [
      "Mobile App Development",
      "UI/UX Design",
      "Backend Development",
      "Data Visualization",
      "Wearable Integration",
    ],
    demoUrl: "https://example-fitness.demo",
    githubUrl: "https://github.com/username/fitness-tracker",
    date: "August 2023",
  },
  {
    id: "4",
    slug: "weather-dashboard",
    title: "Weather Dashboard",
    thumbnail: TestImage,
    cover: TestImage,
    shortDescription:
      "An interactive weather dashboard with forecast data and location-based services.",
    description: `
      <p>This weather dashboard provides users with current weather conditions and forecasts for multiple locations. The application features an interactive map, detailed weather information, and personalized alerts.</p>
      
      <p>The dashboard includes:</p>
      <ul>
        <li>Current weather conditions with detailed metrics</li>
        <li>5-day forecast with hourly breakdowns</li>
        <li>Interactive map with weather layers</li>
        <li>Location-based weather detection</li>
        <li>Saved locations for quick access</li>
        <li>Weather alerts and notifications</li>
        <li>Historical weather data and trends</li>
        <li>Air quality and UV index information</li>
      </ul>
      
      <p>The application was built using React and TypeScript for the frontend, with Redux for state management. The backend was implemented with Python and Flask, using PostgreSQL for data storage. The OpenWeatherMap API and Mapbox API were integrated for weather data and mapping functionality.</p>
      
      <p>A major challenge was optimizing the performance of the interactive map with multiple weather layers. This was resolved by implementing efficient data loading strategies and layer management.</p>
    `,
    tags: ["Weather", "Maps", "React", "API Integration", "Data Visualization"],
    stack: [
      "React",
      "TypeScript",
      "Redux",
      "Python",
      "Flask",
      "PostgreSQL",
      "OpenWeatherMap API",
      "Mapbox API",
    ],
    scope: [
      "Frontend Development",
      "API Integration",
      "Data Visualization",
      "Geolocation Services",
      "User Preferences",
    ],
    demoUrl: "https://example-weather.demo",
    githubUrl: "https://github.com/username/weather-dashboard",
    date: "October 2023",
  },
  {
    id: "5",
    slug: "portfolio-website",
    title: "Portfolio Website",
    thumbnail:
      "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=1000&auto=format&fit=crop",
    cover:
      "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=1000&auto=format&fit=crop",
    shortDescription:
      "A modern portfolio website showcasing projects and skills with animations and interactive elements.",
    description: `
      <p>This portfolio website was designed to showcase my projects and skills in a visually appealing and interactive manner. The site features smooth animations, responsive design, and a clean, modern aesthetic.</p>
      
      <p>Key features of the portfolio include:</p>
      <ul>
        <li>Responsive design optimized for all devices</li>
        <li>Smooth scroll animations and transitions</li>
        <li>Interactive project showcases</li>
        <li>Skills and experience visualization</li>
        <li>Contact form with validation</li>
        <li>Dark/light mode toggle</li>
        <li>Blog section for articles and updates</li>
        <li>Performance optimization for fast loading</li>
      </ul>
      
      <p>The website was built using Next.js for server-side rendering and optimized performance. Framer Motion was used for animations, and Tailwind CSS for styling. The contact form was integrated with a serverless function for handling submissions.</p>
      
      <p>One of the challenges was creating smooth animations that work well across different devices and browsers. This was addressed by using Framer Motion's capabilities and implementing performance optimizations.</p>
    `,
    tags: ["Portfolio", "Next.js", "Animation", "Responsive", "UI/UX"],
    stack: [
      "Next.js",
      "TypeScript",
      "Framer Motion",
      "Tailwind CSS",
      "Vercel",
      "Serverless Functions",
    ],
    scope: [
      "Design",
      "Frontend Development",
      "Animation",
      "Performance Optimization",
      "Deployment",
    ],
    demoUrl: "https://example-portfolio.demo",
    githubUrl: "https://github.com/username/portfolio-website",
    date: "December 2023",
  },
  {
    id: "6",
    slug: "recipe-sharing-platform",
    title: "Recipe Sharing Platform",
    thumbnail: TestImage,
    cover:
      "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=1000&auto=format&fit=crop",
    shortDescription:
      "A community-driven recipe sharing platform with social features and cooking tools.",
    description: `
      <p>This recipe sharing platform allows users to discover, share, and save recipes from around the world. The application includes features for creating and organizing recipes, social interactions, and cooking assistance tools.</p>
      
      <p>The platform includes:</p>
      <ul>
        <li>Recipe creation with step-by-step instructions</li>
        <li>Photo uploading and gallery management</li>
        <li>Ingredient list with measurement conversion</li>
        <li>Cooking timer and tool suggestions</li>
        <li>Recipe rating and review system</li>
        <li>Social features like following and sharing</li>
        <li>Recipe collections and favorites</li>
        <li>Dietary filter and search functionality</li>
      </ul>
      
      <p>The application was developed using React and TypeScript for the frontend, with Redux for state management. The backend was built with Node.js and Express, using MongoDB for data storage. AWS S3 was used for image storage and processing.</p>
      
      <p>A significant challenge was implementing the recipe creation interface to be both comprehensive and user-friendly. This was addressed through iterative design and user testing to create an intuitive step-by-step process.</p>
    `,
    tags: ["Food", "Community", "React", "Node.js", "Social"],
    stack: [
      "React",
      "TypeScript",
      "Redux",
      "Node.js",
      "Express",
      "MongoDB",
      "AWS S3",
      "Firebase Auth",
    ],
    scope: [
      "Frontend Development",
      "Backend Development",
      "User Authentication",
      "Media Management",
      "Search Functionality",
    ],
    demoUrl: "https://example-recipe.demo",
    githubUrl: "https://github.com/username/recipe-sharing-platform",
    date: "February 2024",
  },
  {
    id: "7",
    slug: "language-learning-app",
    title: "Language Learning App",
    thumbnail:
      "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=1000&auto=format&fit=crop",
    cover: TestImage,
    shortDescription:
      "An interactive language learning application with gamification and progress tracking.",
    description: `
      <p>This language learning application helps users learn new languages through interactive lessons, practice exercises, and gamified learning experiences. The app tracks progress and adapts to the user's learning pace.</p>
      
      <p>Key features include:</p>
      <ul>
        <li>Interactive lessons with audio and visual aids</li>
        <li>Vocabulary and grammar practice exercises</li>
        <li>Speech recognition for pronunciation practice</li>
        <li>Gamified learning with points and achievements</li>
        <li>Progress tracking and learning analytics</li>
        <li>Daily practice reminders and goals
        </ul>
        <li>Offline mode for learning on the go</li>
        <li>Community features for practicing with others</li>
            </ul>
            
            <p>The app was built using React Native for cross-platform mobile development. The backend uses Python with Django, and PostgreSQL for the database. AWS Polly was integrated for text-to-speech functionality.</p>
            
            <p>A major challenge was implementing accurate speech recognition across different languages and accents. This was resolved by using a combination of cloud-based speech recognition services and local processing.</p>
          `,
    tags: ["Education", "Mobile", "React Native", "AI", "Gamification"],
    stack: [
      "React Native",
      "TypeScript",
      "Python",
      "Django",
      "PostgreSQL",
      "AWS Polly",
      "TensorFlow",
    ],
    scope: [
      "Mobile Development",
      "Machine Learning",
      "Backend Development",
      "Audio Processing",
      "UX Design",
    ],
    demoUrl: "https://example-language.demo",
    githubUrl: "https://github.com/username/language-learning-app",
    date: "March 2024",
  },
];
