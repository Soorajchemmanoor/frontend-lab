const Users = [
    {
        name: "Aarav",
        profession: "Software Engineer",
        image: "https://images.unsplash.com/photo-1474176857210-7287d38d27c6?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fHVzZXJ8ZW58MHwwfDB8fHww",
        description: "Coding my way through life! 💻 | Coffee lover ☕ | Always curious 🚀",
        followers: 1200,
        following: 350,
        username: "aarav_coder",
        posts: [
            {
                id: 1,
                image: "https://images.unsplash.com/photo-1518773553398-650c184e0bb3?w=800&auto=format&fit=crop&q=60",
                caption: "New day, new code! 🌟 #CodingLife",
                likes: 200,
                posted: "2024-06-01"
            },
            {
                id: 2,
                image: "https://plus.unsplash.com/premium_photo-1673292293042-cafd9c8a3ab3?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                caption: "Debugging mode: ON 🐛 #SoftwareEngineer",
                likes: 150,
                posted: "2024-06-05"
            },
            {
                id: 3,
                image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&auto=format&fit=crop&q=60",
                caption: "Coffee and code ☕💻 #CodeLife",
                likes: 180,
                posted: "2024-06-10"
            },
            {
                id: 4,
                image: "https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bmF0dXJlfGVufDB8MXwwfHx8MA%3D%3D",
                caption: "Just launched a new feature! 🚀 #ProductLaunch",
                likes: 220,
                posted: "2024-06-12"
            },
            {
                id: 5,
                image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bmF0dXJlfGVufDB8MXwwfHx8MA%3D%3D",
                caption: "Coding marathon underway 🏃‍♂️ #Hackathon",
                likes: 250,
                posted: "2024-06-15"
            },
            {
                id: 6,
                image: "https://images.unsplash.com/photo-1529419412599-7bb870e11810?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bmF0dXJlfGVufDB8MXwwfHx8MA%3D%3D",
                caption: "Weekend coding session! 🖥️ #WeekendVibes",
                likes: 190,
                posted: "2024-06-17"
            }
        ]
    },
    {
        name: "Riya",
        profession: "Data Scientist",
        image:"https://images.unsplash.com/photo-1598346762291-aee88549193f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fHVzZXJ8ZW58MHwwfDB8fHww",
        description: "Data whisperer 📊 | Exploring the world through numbers 🌍 | Yoga enthusiast 🧘‍♀️",
        followers: 950,
        following: 420,
        username: "riya_data",
        posts: [
            {
                id: 7,
                image: "https://images.unsplash.com/photo-1579226905180-636b76d96082?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGF0YSUyMHNjaWVudGlzdHxlbnwwfDF8MHx8fDA%3D",
                caption: "Analyzing new data sets 📊 #DataScience",
                likes: 210,
                posted: "2024-06-01"
            },
            {
                id: 8,
                image: "https://images.unsplash.com/photo-1613333627123-da097397bcf1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZGF0YSUyMHNjaWVudGlzdHxlbnwwfDF8MHx8fDA%3D",
                caption: "Data visualization is key 🔑 #BigData",
                likes: 190,
                posted: "2024-06-04"
            },
            {
                id: 9,
                image: "https://images.unsplash.com/photo-1517433456452-f9633a875f6f?w=800&auto=format&fit=crop&q=60",
                caption: "Loving my new workspace setup! 🖥️ #WorkFromHome",
                likes: 230,
                posted: "2024-06-07"
            },
            {
                id: 10,
                image: "https://images.unsplash.com/photo-1551033406-611cf9a28f67?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZGF0YSUyMHNjaWVuY2V8ZW58MHwxfDB8fHww",
                caption: "Deep dive into machine learning 🤖 #AI",
                likes: 250,
                posted: "2024-06-09"
            },
            {
                id: 11,
                image: "https://images.unsplash.com/photo-1664854953181-b12e6dda8b7c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZGF0YSUyMHNjaWVuY2V8ZW58MHwxfDB8fHww",
                caption: "Yoga break to clear the mind 🧘‍♀️ #Balance",
                likes: 270,
                posted: "2024-06-12"
            },
            {
                id: 12,
                image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZGF0YSUyMHNjaWVuY2V8ZW58MHwxfDB8fHww",
                caption: "Numbers tell a story 📈 #DataScience",
                likes: 240,
                posted: "2024-06-15"
            }
        ]
    },
    {
        name: "Vivaan",
        profession: "Product Manager",
        image: "https://images.unsplash.com/photo-1463453091185-61582044d556?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHVzZXJ8ZW58MHwwfDB8fHww",
        description: "Building products that matter 🚀 | Tech enthusiast 💡 | Traveler 🌍",
        followers: 1500,
        following: 380,
        username: "vivaan_pm",
        posts: [
            {
                id: 13,
                image: "https://plus.unsplash.com/premium_photo-1661945966032-e8b85e3ca016?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8UHJvZHVjdCUyME1hbmFnZXJ8ZW58MHwxfDB8fHww",
                caption: "Brainstorming new ideas 💡 #ProductManagement",
                likes: 260,
                posted: "2024-06-02"
            },
            {
                id: 14,
                image: "https://images.unsplash.com/photo-1647301710404-17c44b0aee0e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8UHJvZHVjdCUyME1hbmFnZXJ8ZW58MHwxfDB8fHww",
                caption: "Launching our new app 🚀 #ProductLaunch",
                likes: 300,
                posted: "2024-06-06"
            },
            {
                id: 15,
                image: "https://images.unsplash.com/photo-1591201416399-61405f74788e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8UHJvZHVjdCUyME1hbmFnZXJ8ZW58MHwxfDB8fHww",
                caption: "Traveling inspires innovation ✈️ #TravelDiaries",
                likes: 320,
                posted: "2024-06-09"
            },
            {
                id: 16,
                image: "https://images.unsplash.com/photo-1645848949816-686bca41518e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8UHJvZHVjdCUyME1hbmFnZXJ8ZW58MHwxfDB8fHww",
                caption: "User feedback session 🗣️ #UserExperience",
                likes: 290,
                posted: "2024-06-11"
            },
            {
                id: 17,
                image: "https://plus.unsplash.com/premium_photo-1663054927644-9e11ca0fb6f9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8UHJvZHVjdCUyME1hbmFnZXJ8ZW58MHwxfDB8fHww",
                caption: "Working on the go 💻 #RemoteWork",
                likes: 310,
                posted: "2024-06-14"
            },
            {
                id: 18,
                image: "https://images.unsplash.com/photo-1646446824387-f3b946d99c13?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fFByb2R1Y3QlMjBNYW5hZ2VyfGVufDB8MXwwfHx8MA%3D%3D",
                caption: "Collaborating with an amazing team 🤝 #TeamWork",
                likes: 280,
                posted: "2024-06-17"
            }
        ]
    },
    {
        name: "Ananya",
        profession: "UX Designer",
        image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHVzZXJ8ZW58MHwwfDB8fHww",
        description: "Designing delightful experiences 🎨 | Minimalist at heart 🌿 | Bookworm 📚",
        followers: 1100,
        following: 290,
        username: "ananya_designs",
        posts: [
            {
                id: 19,
                image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&auto=format&fit=crop&q=60",
                caption: "Sketching new ideas 🎨 #UXDesign",
                likes: 220,
                posted: "2024-06-03"
            },
            {
                id: 20,
                image: "https://media.istockphoto.com/id/2232843523/photo/ui-ux-design-and-development-concepts-developers-interact-with-cutting-edge-virtual-screens.webp?a=1&b=1&s=612x612&w=0&k=20&c=oRxcqQ6K26SrfueA-zgyxhk28yWC-Mlnlg1GEgVB8FA=",
                caption: "User testing is crucial 🧪 #UserExperience",
                likes: 210,
                posted: "2024-06-06"
            },
            {
                id: 21,
                image: "https://images.unsplash.com/photo-1496180727794-817822f65950?w=800&auto=format&fit=crop&q=60",
                caption: "Minimalist designs speak volumes 🌿 #Minimalism",
                likes: 230,
                posted: "2024-06-08"
            },
            {
                id: 22,
                image: "https://media.istockphoto.com/id/1218511301/photo/asian-ux-developer-and-ui-designer-presenting-mobile-app-interface-design-on-whiteboard-in.webp?a=1&b=1&s=612x612&w=0&k=20&c=r0XU7Yt6jNG7mQ656ioESN5uigcDfQ77XH9fwCxhVIo=",
                caption: "Book recommendations for designers 📚 #Bookworm",
                likes: 250,
                posted: "2024-06-11"
            },
            {
                id: 23,
                image: "https://media.istockphoto.com/id/2169040277/photo/ux-ui-designers-discussing-and-brainstorming-on-wireframes-for-a-website-and-mobile-app.webp?a=1&b=1&s=612x612&w=0&k=20&c=ZY8HpWGsjD385BegSO2y9GP0m_n-Mz1OpedGR2GyA_8=",
                caption: "Nature-inspired designs 🌲 #DesignInspiration",
                likes: 270,
                posted: "2024-06-13"
            },
            {
                id: 24,
                image: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?w=800&auto=format&fit=crop&q=60",
                caption: "Always learning, always growing 🌱 #DesignerLife",
                likes: 260,
                posted: "2024-06-16"
            }
        ]
    },
    {
        name: "Kunal",
        profession: "Marketing Specialist",
        image: "https://images.unsplash.com/photo-1530268729831-4b0b9e170218?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHVzZXJ8ZW58MHwwfDB8fHww",
        description: "Marketing ninja 🥷 | Creative thinker 💡 | Fitness freak 💪",
        followers: 800,
        following: 450,
        username: "kunal_markets",
        posts: [
            {
                id: 25,
                image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&auto=format&fit=crop&q=60",
                caption: "Brainstorming marketing strategies 📈 #Marketing",
                likes: 180,
                posted: "2024-06-02"
            },
            {
                id: 26,
                image: "https://plus.unsplash.com/premium_photo-1661499699482-3fbf9779ccfa?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8TWFya2V0aW5nJTIwU3BlY2lhbGlzdHxlbnwwfDF8MHx8fDA%3D",
                caption: "Creative campaigns drive engagement 💡 #CreativeMarketing",
                likes: 200,
                posted: "2024-06-05"
            },
            {
                id: 27,
                image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?w=800&auto=format&fit=crop&q=60",
                caption: "Fitness fuels my creativity 🏋️‍♂️ #FitLife",
                likes: 220,
                posted: "2024-06-07"
            },
            {
                id: 28,
                image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800&auto=format&fit=crop&q=60",
                caption: "Analyzing marketing trends 📊 #MarketAnalysis",
                likes: 240,
                posted: "2024-06-10"
            },
            {
                id: 29,
                image: "https://images.unsplash.com/photo-1762745103111-b37a7bd82046?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8TWFya2V0aW5nJTIwU3BlY2lhbGlzdHxlbnwwfDF8MHx8fDA%3D",
                caption: "Collaboration is key 🤝 #TeamWork",
                likes: 260,
                posted: "2024-06-13"
            },
            {
                id: 30,
                image: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?w=800&auto=format&fit=crop&q=60",
                caption: "Weekend workout session 🏋️‍♂️ #Fitness",
                likes: 280,
                posted: "2024-06-15"
            }
        ]
    },
    {
        name: "Priya",
        profession: "Financial Analyst",
        image: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHVzZXJ8ZW58MHwwfDB8fHww",
        description: "Crunching numbers 📈 | Finance geek 💹 | Adventure seeker 🏔️",
        followers: 1250,
        following: 300,
        username: "priya_finance",
        posts: [
            {
                id: 31,
                image: "https://images.unsplash.com/photo-1574884280706-7342ca3d4231?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8RmluYW5jaWFsJTIwQW5hbHlzdHxlbnwwfDF8MHx8fDA%3D",
                caption: "Analyzing financial data 📊 #Finance",
                likes: 260,
                posted: "2024-06-03"
            },
            {
                id: 32,
                image: "https://plus.unsplash.com/premium_photo-1688821129567-78f411730f0e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8RmluYW5jaWFsJTIwQW5hbHlzdHxlbnwwfDF8MHx8fDA%3D",
                caption: "Balancing the books 💹 #Accounting",
                likes: 280,
                posted: "2024-06-06"
            },
            {
                id: 33,
                image: "https://plus.unsplash.com/premium_photo-1697738734626-5e93349806ad?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8RmluYW5jaWFsJTIwQW5hbHlzdHxlbnwwfDF8MHx8fDA%3D",
                caption: "Adventure time in the mountains 🏔️ #Travel",
                likes: 300,
                posted: "2024-06-08"
            },
            {
                id: 34,
                image: "https://images.unsplash.com/photo-1767424412548-1a1ac7f4b9bc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8RmluYW5jaWFsJTIwQW5hbHlzaXN8ZW58MHwxfDB8fHww",
                caption: "Investment analysis 🧐 #Finance",
                likes: 320,
                posted: "2024-06-11"
            },
            {
                id: 35,
                image: "https://images.unsplash.com/photo-1766218334217-d2cc74c36fce?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8RmluYW5jaWFsJTIwQW5hbHlzaXN8ZW58MHwxfDB8fHww",
                caption: "Mountain hiking adventure 🏔️ #NatureLover",
                likes: 340,
                posted: "2024-06-14"
            },
            {
                id: 36,
                image: "https://images.unsplash.com/photo-1763730512449-f1a505f432a9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fEZpbmFuY2lhbCUyMEFuYWx5c2lzfGVufDB8MXwwfHx8MA%3D%3D",
                caption: "Financial modeling in progress 📈 #FinancialAnalyst",
                likes: 360,
                posted: "2024-06-16"
            }
        ]
    },
    {
        name: "Rohan",
        profession: "Operations Manager",
        image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHVzZXJ8ZW58MHwwfDB8fHww",
        description: "Streamlining operations ⚙️ | Efficiency expert 📊 | Nature lover 🌲",
        followers: 900,
        following: 410,
        username: "rohan_ops",
        posts: [
            {
                id: 37,
                image: "https://plus.unsplash.com/premium_photo-1682146409174-879dec947d97?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8T3BlcmF0aW9ucyUyME1hbmFnZXJ8ZW58MHwxfDB8fHww",
                caption: "Optimizing operations for efficiency ⚙️ #OperationsManagement",
                likes: 180,
                posted: "2024-06-02"
            },
            {
                id: 38,
                image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&auto=format&fit=crop&q=60",
                caption: "Efficiency is key to success 📊 #ProcessOptimization",
                likes: 200,
                posted: "2024-06-05"
            },
            {
                id: 39,
                image: "https://media.istockphoto.com/id/2220672273/photo/business-analyst-reviewing-digital-charts-and-data-on-interactive-performance-dashboard.webp?a=1&b=1&s=612x612&w=0&k=20&c=KEV4v-pMOeyTDB8IhWZ3_Hp0sY-AjoOan2zYv9i8n8Y=",
                caption: "Streamlining operations for better performance ⚙️ #OperationalExcellence",
                likes: 220,
                posted: "2024-06-07"
            },
            {
                id: 40,
                image: "https://images.unsplash.com/photo-1496180727794-817822f65950?w=800&auto=format&fit=crop&q=60",
                caption: "Nature walk to clear the mind 🌲 #NatureLover",
                likes: 240,
                posted: "2024-06-10"
            },
            {
                id: 41,
                image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&auto=format&fit=crop&q=60",
                caption: "Improving operational efficiency ⚙️ #Efficiency",
                likes: 260,
                posted: "2024-06-12"
            },
            {
                id: 42,
                image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&auto=format&fit=crop&q=60",
                caption: "Nature's beauty 🌲 #NatureWalk",
                likes: 280,
                posted: "2024-06-15"
            }
        ]
    }
];

export default Users;