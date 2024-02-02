import { meta, shopify, starbucks, tesla } from "../assets/images";
import {
    car,
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    mui,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    sass,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript,
} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    // {
    //     imageUrl: angular,
    //     name: "Angular",
    //     type: "FrontEnd",
    // },
];

export const experiences = [
    {
        title: "Web Developer (Intern)",
        company_name: "SparkleHaze",
        icon: '',
        iconBg: "#f8d2fc",
        date: "Nov 2023 - present",
        points: [
            "Developing and maintaining web applications using Angular and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "Laboratory Technician",
        company_name: "AsureQuality",
        icon: '',
        iconBg: "#b7e4c7",
        date: "Nov 2022 - Jun 2023",
        points: [
            "Performed laboratory testing and analyses following established protocols and procedures.", 

            "Prepared and maintained laboratory equipment, instruments, and materials for testing.", 
            
            "Maintained laboratory cleanliness and safety standards, including proper disposal of hazardous materials.",
            
            "Conducted quality control checks to ensure the accuracy and reliability of laboratory results.", 
            
            "Calibrated and maintained laboratory equipment, troubleshot technical issues, and performed routine maintenance tasks.", 
            
            "Stayed updated with the latest laboratory techniques, equipment, and safety procedures to enhance laboratory operations.", 
        ],
    },
    {
        title: "Retail Assistant, Flooring Department",
        company_name: "Mitre 10 Mega",
        icon: '',
        iconBg: "#fae787",
        date: "Feb 2021 - Apr 2022",
        points: [
            "Assisted customers in making informed decisions by providing accurate product details, explaining pricing and warranties, and suggesting suitable flooring options based on preferences, budget, and lifestyle.",  

            "Highlighted any ongoing promotions or discounts to maximize sales.", 

            "Assisted customers with placing orders for the selected flooring materials.", 

            "Addressed any post-installation inquiries or concerns from customers, such as warranty claims, maintenance tips, or troubleshooting flooring issues.", 

            "Provided estimates for the cost of materials and installation, including any additional charges for underlayment, transitions, or labor.", 
        ],
    },
    {
        title: "Team Supervisor, Online Warehouse Operations",
        company_name: "Chemist Warehouse",
        icon: '',
        iconBg: "#cafaf9",
        date: "March 2020 - Feb 2021",
        points: [
            "Supervised and led a team of warehouse staff, including assigned tasks, provided training, and conducted performance evaluations. Ensured that the team followed safety protocols and complied with operational procedures.", 

            "Monitored and maintained accurate inventory levels, conducted regular stock checks, and reconciled discrepancies. Implemented inventory control measures to optimize stock levels and minimize losses.", 

            "Addressed any issues or challenges in warehouse operations promptly and effectively. Troubleshoot problems related to inventory, equipment, or workflow disruptions. Implemented corrective actions and preventive measures to avoid future problems.", 

            "Maintained accurate records of inventory, transactions, and other warehouse-related data. Generated regular reports on key performance indicators (KPIs) such as productivity, accuracy, and on-time delivery.", 
        ],
    },
    {
        title: "Online Assistant, Online Warehouse Operations",
        company_name: "Chemist Warehouse",
        icon: '',
        iconBg: "#cafaf9",
        date: "Jan 2020 - Mar 2020",
        points: [
            "Received and processed customer orders, ensuring timely fulfillment and accurate picking and packing of items.", 

            "Kept track of inventory levels, updated stock records, and ensured accurate inventory counts.",  

            "Coordinated with the warehouse team to reconcile discrepancies and monitored stock levels to avoid shortages or overstocking.", 
        ],
    },
    {
        title: "Pharmacy Retail Assistant ",
        company_name: "Chemist Warehouse",
        icon: '',
        iconBg: "#cafaf9",
        date: "Aug 2019 - Jan 2020",
        points: [
            "Helped customers find specific products, explained medication instructions, and offered advice on over-the-counter remedies.", 

            "Developed a good understanding of the pharmacy's product range, including prescription medications, over-the-counter drugs, health and wellness products, vitamins, and supplements.", 

            "Maintained proper cash handling procedures and ensured the security of the cash register and cash drawer.", 

            "Collaborated with the pharmacy team to receive, process, and organize prescription orders.", 

            "Followed privacy and confidentiality regulations when handling sensitive customer information.", 

            "Identified products’ unique selling points (USPs) and created and implemented strategies for promotion.", 
        ],
    },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/YourGitHubUsername',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/YourLinkedInUsername',
    }
];

export const projects = [
    {
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'Amazon Price Tracker',
        description: 'Developed a web application that tracks and notifies users of price changes for products on Amazon, helping users find the best deals.',
        link: 'https://github.com/adrianhajdin/pricewise',
    },
    {
        iconUrl: threads,
        theme: 'btn-back-green',
        name: 'Full Stack Threads Clone',
        description: 'Created a full-stack replica of the popular discussion platform "Threads," enabling users to post and engage in threaded conversations.',
        link: 'https://github.com/adrianhajdin/threads',
    },
    {
        iconUrl: car,
        theme: 'btn-back-blue',
        name: 'Car Finding App',
        description: 'Designed and built a mobile app for finding and comparing cars on the market, streamlining the car-buying process.',
        link: 'https://github.com/adrianhajdin/project_next13_car_showcase',
    },
    {
        iconUrl: snapgram,
        theme: 'btn-back-pink',
        name: 'Full Stack Instagram Clone',
        description: 'Built a complete clone of Instagram, allowing users to share photos and connect with friends in a familiar social media environment.',
        link: 'https://github.com/adrianhajdin/social_media_app',
    },
    {
        iconUrl: estate,
        theme: 'btn-back-black',
        name: 'Real-Estate Application',
        description: 'Developed a web application for real estate listings, facilitating property searches and connecting buyers with sellers.',
        link: 'https://github.com/adrianhajdin/projects_realestate',
    },
    {
        iconUrl: summiz,
        theme: 'btn-back-yellow',
        name: 'AI Summarizer Application',
        description: 'App that leverages AI to automatically generate concise & informative summaries from lengthy text content, or blogs.',
        link: 'https://github.com/adrianhajdin/project_ai_summarizer',
    }
];