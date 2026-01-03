import express from "express";
import cors from "cors";
const app = express();

app.use(cors());
app.use(express.json());

// MASSIVE 50-ITEM DATASET
const documents = [
    { id: 1, title: "Gravity", description: "A force that pulls objects toward each other.", tags: ["physics", "science", "forces"] },
    { id: 2, title: "Velocity", description: "Speed in a given direction.", tags: ["physics", "motion", "speed"] },
    { id: 3, title: "Acceleration", description: "Rate of change of velocity over time.", tags: ["physics", "motion"] },
    { id: 4, title: "Roblox Studio", description: "A development environment used to create Roblox experiences.", tags: ["roblox", "development"] },
    { id: 5, title: "Lua", description: "A lightweight scripting language used in Roblox.", tags: ["programming", "scripting"] },
    { id: 6, title: "API", description: "A system that allows different software to communicate.", tags: ["web", "backend"] },
    { id: 7, title: "Search Engine", description: "A tool that finds information based on keywords.", tags: ["web", "technology"] },
    { id: 8, title: "JSON", description: "A lightweight data format used for APIs.", tags: ["data", "format"] },
    { id: 9, title: "Render Hosting", description: "A cloud platform used to deploy web services.", tags: ["hosting", "cloud"] },
    { id: 10, title: "HTTP Request", description: "A message sent from a client to a server to request data.", tags: ["web", "networking"] },

    { id: 11, title: "Roblox Physics", description: "The physics engine that powers movement and collisions in Roblox.", tags: ["roblox", "physics"] },
    { id: 12, title: "TweenService", description: "A Roblox service used to animate UI and objects smoothly.", tags: ["roblox", "ui", "animation"] },
    { id: 13, title: "PathfindingService", description: "Allows NPCs to navigate around obstacles.", tags: ["roblox", "ai"] },
    { id: 14, title: "OOP", description: "Object-oriented programming, a way to structure code using objects.", tags: ["programming", "concepts"] },
    { id: 15, title: "ModuleScript", description: "Reusable code container in Roblox.", tags: ["roblox", "scripting"] },
    { id: 16, title: "Node.js", description: "A JavaScript runtime used for backend development.", tags: ["web", "backend"] },
    { id: 17, title: "Express.js", description: "A web framework for Node.js.", tags: ["web", "backend"] },
    { id: 18, title: "Database", description: "A system for storing and retrieving structured data.", tags: ["data", "storage"] },
    { id: 19, title: "MongoDB", description: "A NoSQL database used for scalable applications.", tags: ["database", "web"] },
    { id: 20, title: "SQL", description: "A language used to manage relational databases.", tags: ["database", "query"] },

    { id: 21, title: "UI Design", description: "The process of designing user interfaces.", tags: ["design", "ui"] },
    { id: 22, title: "UX Design", description: "Designing user experiences for clarity and usability.", tags: ["design", "ux"] },
    { id: 23, title: "Frontend Development", description: "Building the visual part of websites.", tags: ["web", "frontend"] },
    { id: 24, title: "Backend Development", description: "Server-side logic and APIs.", tags: ["web", "backend"] },
    { id: 25, title: "Full Stack Developer", description: "A developer skilled in both frontend and backend.", tags: ["web", "development"] },
    { id: 26, title: "JavaScript", description: "A programming language used for web development.", tags: ["programming", "web"] },
    { id: 27, title: "Python", description: "A popular programming language known for readability.", tags: ["programming"] },
    { id: 28, title: "C++", description: "A powerful programming language used for performance-critical apps.", tags: ["programming"] },
    { id: 29, title: "GitHub", description: "A platform for hosting and sharing code.", tags: ["development", "git"] },
    { id: 30, title: "Version Control", description: "Tracking changes in code over time.", tags: ["development", "git"] },

    { id: 31, title: "Artificial Intelligence", description: "Technology that simulates human intelligence.", tags: ["ai", "technology"] },
    { id: 32, title: "Machine Learning", description: "AI that learns from data.", tags: ["ai", "data"] },
    { id: 33, title: "Neural Network", description: "A model inspired by the human brain.", tags: ["ai", "deep learning"] },
    { id: 34, title: "Dataset", description: "A collection of data used for training models.", tags: ["ai", "data"] },
    { id: 35, title: "Cloud Computing", description: "Using remote servers to store and process data.", tags: ["cloud", "technology"] },
    { id: 36, title: "Docker", description: "A tool for packaging applications into containers.", tags: ["devops", "cloud"] },
    { id: 37, title: "Linux", description: "An open-source operating system.", tags: ["os", "technology"] },
    { id: 38, title: "Windows Server", description: "A Microsoft operating system for servers.", tags: ["os", "server"] },
    { id: 39, title: "Firewall", description: "A security system that monitors network traffic.", tags: ["security", "network"] },
    { id: 40, title: "Encryption", description: "Protecting data by converting it into unreadable form.", tags: ["security", "data"] },

    { id: 41, title: "Game Engine", description: "Software used to build video games.", tags: ["gaming", "development"] },
    { id: 42, title: "Unity", description: "A popular game engine for 2D and 3D games.", tags: ["gaming", "development"] },
    { id: 43, title: "Unreal Engine", description: "A high-end game engine known for graphics.", tags: ["gaming", "development"] },
    { id: 44, title: "Shaders", description: "Programs that control how graphics are rendered.", tags: ["graphics", "gaming"] },
    { id: 45, title: "Ray Tracing", description: "A rendering technique for realistic lighting.", tags: ["graphics", "technology"] },
    { id: 46, title: "Networking", description: "Connecting computers to share data.", tags: ["technology", "network"] },
    { id: 47, title: "Latency", description: "Delay between sending and receiving data.", tags: ["network", "performance"] },
    { id: 48, title: "Bandwidth", description: "Amount of data that can be transmitted.", tags: ["network", "performance"] },
    { id: 49, title: "Roblox Marketplace", description: "A place to buy and sell assets.", tags: ["roblox", "economy"] },
    { id: 50, title: "Roblox Avatar", description: "The character representing a player.", tags: ["roblox", "character"] }
];

// SEARCH ENDPOINT
app.get("/search", (req, res) => {
    const q = (req.query.q || "").toLowerCase();

    const results = documents.filter(doc =>
        doc.title.toLowerCase().includes(q) ||
        doc.description.toLowerCase().includes(q) ||
        doc.tags.some(tag => tag.toLowerCase().includes(q))
    );

    res.json({
        query: q,
        total: results.length,
        results: results
    });
});

// START SERVER
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Search API running on port ${PORT}`);
});
