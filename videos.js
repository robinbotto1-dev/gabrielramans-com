const videos = [
    // === Personal (TikTok @gabriel..r) ===
    {
        title: "",
        platform: "TikTok",
        views: 3500000,
        likes: 0,
        comments: 0,
        date: "2023-01-01",
        page: "Personal",
        tags: [],
        roles: ["Full Stack"],
        thumbnailUrl: "thumbs/personal-1.jpg",
        originalUrl: "https://www.tiktok.com/@gabriel..r/video/7020638657233030405",
        orientation: "vertical"
    },
    {
        title: "",
        platform: "TikTok",
        views: 1900000,
        likes: 0,
        comments: 0,
        date: "2022-06-01",
        page: "Personal",
        tags: [],
        roles: ["Full Stack"],
        thumbnailUrl: "thumbs/personal-2.jpg",
        originalUrl: "https://www.tiktok.com/@gabriel..r/video/6836708855980838149",
        orientation: "vertical"
    },
    {
        title: "",
        platform: "TikTok",
        views: 259500,
        likes: 0,
        comments: 0,
        date: "2024-01-01",
        page: "Personal",
        tags: [],
        roles: ["Full Stack"],
        thumbnailUrl: "thumbs/personal-3.jpg",
        originalUrl: "https://www.tiktok.com/@gabriel..r/video/7331190835360369951",
        orientation: "vertical"
    },

    {
        title: "",
        platform: "YouTube",
        views: 30000,
        likes: 0,
        comments: 0,
        date: "2024-08-01",
        page: "The AI Toy Company",
        tags: [],
        roles: ["Full Stack"],
        thumbnailUrl: "thumbs/personal-4.jpg",
        originalUrl: "https://www.youtube.com/shorts/EB6IskV2iOE",
        orientation: "vertical"
    },
    {
        title: "",
        platform: "YouTube",
        views: 26000,
        likes: 0,
        comments: 0,
        date: "2024-09-01",
        page: "The AI Toy Company",
        tags: [],
        roles: ["Full Stack"],
        thumbnailUrl: "thumbs/personal-6.jpg",
        originalUrl: "https://www.youtube.com/shorts/l8H4Qk8jjI0",
        orientation: "vertical"
    },
    {
        title: "",
        platform: "YouTube",
        views: 21000,
        likes: 0,
        comments: 0,
        date: "2024-07-01",
        page: "The AI Toy Company",
        tags: [],
        roles: ["Full Stack"],
        thumbnailUrl: "thumbs/personal-5.jpg",
        originalUrl: "https://www.youtube.com/shorts/nCG_X-V1hts",
        orientation: "vertical"
    },

    // === Sneaker Network (TikTok @sneakernetwork) ===
    {
        title: "",
        platform: "TikTok",
        views: 1700000,
        likes: 0,
        comments: 0,
        date: "2023-06-09",
        page: "Sneaker Network",
        tags: [],
        roles: ["Full Stack"],
        thumbnailUrl: "thumbs/sneaker-1.jpg",
        originalUrl: "https://www.tiktok.com/@sneakernetwork/video/7244282056723746091",
        orientation: "vertical"
    },
    {
        title: "",
        platform: "TikTok",
        views: 1000000,
        likes: 0,
        comments: 0,
        date: "2023-06-07",
        page: "Sneaker Network",
        tags: [],
        roles: ["Full Stack"],
        thumbnailUrl: "thumbs/sneaker-2.jpg",
        originalUrl: "https://www.tiktok.com/@sneakernetwork/video/7243545221286366506",
        orientation: "vertical"
    },
    {
        title: "",
        platform: "TikTok",
        views: 620200,
        likes: 0,
        comments: 0,
        date: "2023-04-19",
        page: "Sneaker Network",
        tags: [],
        roles: ["Full Stack"],
        thumbnailUrl: "thumbs/sneaker-3.jpg",
        originalUrl: "https://www.tiktok.com/@sneakernetwork/video/7223860590031162667",
        orientation: "vertical"
    },

    // === Tidal Marketplace (TikTok @tidalmarketplace) ===
    {
        title: "",
        platform: "TikTok",
        views: 2900000,
        likes: 0,
        comments: 0,
        date: "2023-01-15",
        page: "Tidal Marketplace",
        tags: [],
        roles: ["Full Stack"],
        thumbnailUrl: "thumbs/tidal-1.jpg",
        originalUrl: "https://www.tiktok.com/@tidalmarketplace/video/7048711655458458927",
        orientation: "vertical"
    },
    {
        title: "",
        platform: "TikTok",
        views: 2300000,
        likes: 0,
        comments: 0,
        date: "2023-03-15",
        page: "Tidal Marketplace",
        tags: [],
        roles: ["Full Stack"],
        thumbnailUrl: "thumbs/tidal-2.jpg",
        originalUrl: "https://www.tiktok.com/@tidalmarketplace/video/7156743279390821678",
        orientation: "vertical"
    },
    {
        title: "",
        platform: "TikTok",
        views: 1600000,
        likes: 0,
        comments: 0,
        date: "2023-02-15",
        page: "Tidal Marketplace",
        tags: [],
        roles: ["Full Stack"],
        thumbnailUrl: "thumbs/tidal-3.jpg",
        originalUrl: "https://www.tiktok.com/@tidalmarketplace/video/7127894096835792174",
        orientation: "vertical"
    },

    // === Pump.co (YouTube - horizontal, only 1 video) ===
    {
        title: "How Canva saved $6,500,000 on AWS in 2 days",
        platform: "YouTube",
        views: 0,
        likes: 66,
        comments: 5,
        date: "2025-02-01",
        page: "Pump.co",
        tags: ["aws", "cloud", "saas"],
        roles: ["Full Stack"],
        thumbnailUrl: "thumbs/pump-canva-aws.jpg",
        originalUrl: "https://www.youtube.com/watch?v=DRCJU3ew5qQ",
        orientation: "horizontal"
    },

    // === Personal (YouTube - horizontal) ===
    {
        title: "How Billionaires Can Learn Anything in 3 Steps",
        platform: "YouTube",
        views: 0,
        likes: 0,
        comments: 0,
        date: "2025-03-01",
        page: "Personal",
        tags: ["learning", "billionaires"],
        roles: ["Full Stack"],
        thumbnailUrl: "thumbs/pump-billionaires.jpg",
        originalUrl: "https://www.youtube.com/watch?v=5QSLsepFbxA",
        orientation: "horizontal"
    },

    // === EZ4X4 ===
    {
        title: "",
        platform: "YouTube",
        views: 3000000,
        likes: 7600,
        comments: 39,
        date: "2024-06-01",
        page: "EZ4X4",
        tags: ["product", "door cart"],
        roles: ["Filmed", "Edited", "Wrote Script"],
        thumbnailUrl: "thumbs/ez4x4-door-cart.jpg",
        originalUrl: "https://www.youtube.com/shorts/ONglr8zjo2M",
        orientation: "vertical"
    },
    {
        title: "",
        platform: "Facebook",
        views: 1500000,
        likes: 6900,
        comments: 76,
        date: "2024-07-01",
        page: "EZ4X4",
        tags: ["product", "truck buddiez"],
        roles: ["Filmed", "Edited", "Wrote Script"],
        thumbnailUrl: "thumbs/ez4x4-fb-1.jpg",
        originalUrl: "https://www.facebook.com/reel/1443771197650796",
        orientation: "vertical"
    },
    {
        title: "",
        platform: "Facebook",
        views: 1500000,
        likes: 2800,
        comments: 29,
        date: "2024-08-01",
        page: "EZ4X4",
        tags: ["product", "truck buddiez"],
        roles: ["Filmed", "Edited", "Wrote Script"],
        thumbnailUrl: "thumbs/ez4x4-fb-2.jpg",
        originalUrl: "https://www.facebook.com/reel/3353664334799034",
        orientation: "vertical"
    },

    // === The AI Toy Company (X - horizontal) ===
    {
        title: "Introducing Dino",
        platform: "X",
        views: 408000,
        likes: 2400,
        comments: 0,
        date: "2025-06-01",
        page: "The AI Toy Company",
        tags: ["dino", "ai toy", "launch"],
        roles: ["Full Stack"],
        thumbnailUrl: "thumbs/aitoy-dino.png",
        originalUrl: "https://x.com/gabrielramans/status/1938286214273986783",
        orientation: "horizontal"
    },

    // === The AI Toy Company (Instagram @heybondu) ===
    {
        title: "",
        platform: "Instagram",
        views: 4900000,
        likes: 0,
        comments: 0,
        date: "2025-06-01",
        page: "The AI Toy Company",
        tags: ["bondu", "dino"],
        roles: ["Directed UGC"],
        thumbnailUrl: "thumbs/aitoy-ig-1.jpg",
        originalUrl: "https://www.instagram.com/reel/DNVraU0RfSN/",
        orientation: "vertical"
    },
    {
        title: "",
        platform: "Instagram",
        views: 1400000,
        likes: 0,
        comments: 0,
        date: "2025-06-05",
        page: "The AI Toy Company",
        tags: ["bondu", "dino"],
        roles: ["Directed UGC"],
        thumbnailUrl: "thumbs/aitoy-ig-2.jpg",
        originalUrl: "https://www.instagram.com/reel/DNoKgI6xHU0/",
        orientation: "vertical"
    },
    {
        title: "",
        platform: "Instagram",
        views: 158000,
        likes: 0,
        comments: 0,
        date: "2025-05-28",
        page: "The AI Toy Company",
        tags: ["bondu", "dino"],
        roles: ["Directed UGC"],
        thumbnailUrl: "thumbs/aitoy-ig-3.jpg",
        originalUrl: "https://www.instagram.com/reel/DNTiV3XORqC/",
        orientation: "vertical"
    }
];

// Project metadata
const projects = [
    { id: "personal", name: "Personal", description: "Personal brand content — vlogs, stories, and behind the scenes.", color: "#a78bfa", socialUrl: "https://www.tiktok.com/@gabriel..r", totalViews: 33000000, totalVideos: 15, profilePic: "thumbs/profile-personal.jpg", dateRange: "", endDate: "2024-01-01" },
    { id: "sneaker-network", name: "Sneaker Network", description: "Content for the premier sneaker culture platform.", color: "#f97316", socialUrl: "https://www.tiktok.com/@sneakernetwork", totalViews: 23500000, totalVideos: 216, profilePic: "thumbs/profile-sneaker.jpg", dateRange: "Jan 2023 – Jul 2023", endDate: "2023-07-01" },
    { id: "tidal-marketplace", name: "Tidal Marketplace", description: "Brand content for the sneaker resale marketplace.", color: "#06b6d4", socialUrl: "https://www.tiktok.com/@tidalmarketplace", totalViews: 36800000, totalVideos: 270, profilePic: "thumbs/profile-tidal.jpg", dateRange: "Jan 2021 – May 2023", endDate: "2023-05-01" },
    { id: "pump-co", name: "Pump.co", description: "Video content for the cloud cost optimization platform.", color: "#f43f5e", socialUrl: "https://www.youtube.com/@pumpbilling", profilePic: "thumbs/profile-pump.jpg", dateRange: "", endDate: "2025-02-01" },
    { id: "ez4x4", name: "EZ4X4", description: "Product and UGC content for Jeep, Bronco & truck accessories.", color: "#84cc16", socialUrl: "https://www.facebook.com/ez4x4official/", totalViews: 13500000, totalVideos: 16, profilePic: "thumbs/profile-ez4x4.jpg", dateRange: "Dec 2025 – Present", endDate: "2026-12-01" },
    { id: "the-ai-toy-company", name: "The AI Toy Company", description: "Creative content for bondu, the AI-powered toy.", color: "#8b5cf6", socialUrl: "https://www.instagram.com/heybondu/", totalViews: 10000000, totalVideos: 30, profilePic: "thumbs/profile-aitoy.jpg", dateRange: "Jan 2025 – Aug 2025", endDate: "2025-08-01" }
];
