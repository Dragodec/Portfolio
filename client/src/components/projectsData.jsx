// projectsData.js
import CalcDemo from '../assets/CalcDemo.mp4'
import MagazineDemo from '../assets/SpringBootDemo.mp4'
import GiftDemo from '../assets/CGPDemo.mp4'
const projectsData = [
  {
    id: "calculator",
    title: "Smart Calculator",
    video: CalcDemo,
    description:
      "A web calculator built with HTML, CSS, and JavaScript. Supports standard arithmetic operations with a responsive UI.",
    techStack: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/dragodec/calculator",
    story: `The Smart Calculator is a sleek and intuitive tool designed for everyday use across devices — whether you're on mobile, tablet, or desktop. 
  It supports the four fundamental arithmetic operations: addition, subtraction, multiplication, and division, along with decimal calculations.
  
  This calculator is fully responsive, adapting seamlessly to various screen sizes without compromising usability or design aesthetics. It includes a clean 'Clear' function to reset the input at any time and features real-time computation with instant feedback, making it perfect for quick calculations.
  
  The minimalist interface focuses on functionality while maintaining a modern UI, providing a smooth user experience without distractions. It's a lightweight, efficient solution that demonstrates solid DOM manipulation and event handling with vanilla JavaScript — no libraries, no bloat.
  
  Great for showcasing core JavaScript logic and frontend precision!`
  }
  ,
  {
    id: "magazine-backend",
    title: "Magazine Management Backend",
    video: MagazineDemo,
    description:
      "Spring Boot based backend app for magazine management and analytical tools for each of the magazines.",
    story:
      "Designed specifically for magazine publishers, this backend system streamlines the management of magazines and publisher information. Developed using Spring Boot, it showcases strong backend skills with advanced API handling and integration. Custom querying with `@Query`, Swagger UI documentation, and entity mapping between Magazine and Publisher provide a robust structure. The app includes pagination for efficient data handling and basic CORS-friendly security configuration, making it a solid demonstration of real-world backend architecture.",
    techStack: ["Spring Boot"],
    github: "https://github.com/dragodec/mmpwsaat",
  },
  {
    id: "gift-portal",
    title: "Custom Gift Portal",
    video: GiftDemo, // Make sure to import and assign your demo video
    description:
      "A simulated online gift store built using React and Bootstrap. Features dynamic product listings, cart logic, and a JSON-server backend.",
    story:
      "The Custom Gift Portal is a full-fledged React-based online gift store that mimics the functionality of real-world e-commerce platforms. Users can explore a collection of gifts filtered by price, color, or type. A smart search bar enhances navigation, while each product can be added to a personalized cart with adjustable quantity controls. The cart dynamically updates the total price in real-time and provides a simple 'Pay' button to finalize the purchase, clearing the cart afterward. Each cart is uniquely tied to the authenticated user using React Context, ensuring privacy. Users' login sessions are maintained via `localStorage`, and account creation utilizes UUID v4 for unique user IDs. The portal includes user authentication with Login, Signup, and Forgot Password pages. All user and cart data is managed and persisted through JSON Server for a seamless backend experience.",
    techStack: ["React", "Bootstrap", "JSON Server"],
    github: "https://github.com/dragodec/gift-portal"
  },
    {
      id: "resq-app",
      title: "RESQ App",
      images: [
        "https://via.placeholder.com/600x400?text=RESQ+App+1",
        "https://via.placeholder.com/600x400?text=RESQ+App+2",
      ],
      description:
        "A MERN stack emergency rescue app. Users can send SOS alerts and locate nearby help centers in real-time.",
      techStack: ["MongoDB", "Express", "React", "Node.js"],
      github: "https://github.com/dragodec/resq-app",
    },
    {
      id: "paatu-n-vibe",
      title: "PaatuNVibe",
      status: "ongoing", // ← New tag added
      images: [
        "https://via.placeholder.com/600x400?text=PaatuNVibe+1",
        "https://via.placeholder.com/600x400?text=PaatuNVibe+2",
      ],
      description:
        "A Spotify-inspired music streaming platform built using the FARM stack. Users can search, play, and vibe to their favorite tunes.",
      techStack: ["FastAPI", "React", "MongoDB"],
      github: "https://github.com/dragodec/paatu-n-vibe",
    }
    ,
  ];
  
  export default projectsData;
  