

const siteData = {
    BASE_URL : new URL(process.env.NEXT_PUBLIC_SERVER || "https://greatnerve.com"),
    name: 'Dherraj Sharma | GreatNerve',
    short_name: 'Dherraj Sharma',
    description: "I'm Dheeraj Sharma, a student at NSUT, Delhi. I am a Full Stack Developer. I am passionate about learning new technologies and building projects.",
    logo : '/assets/logo/logo.svg',
    og_image: '/assets/logo/logo.png',
    theme_color: '#020817',
    keywords: "Dheeraj Sharma, Web Development, Software Development, Full Stack Development, GreatNerve, Dherraj Sharma, Engineering, NSUT, Delhi, India, React, Next.js, TailwindCSS, TypeScript, Python, Rust, Git, AWS, Firebase, SQL, NoSQL, MongoDB, PostgreSQL, MySQL, SQLite, Docker, Kubernetes, Linux, Windows, MacOS, Android, iOS, Flutter, Dart, C, C++, Java, JavaScript, TypeScript, HTML, CSS, SCSS, SASS, Web Development, Software Development, Full Stack Development, Competitive Programming, Data Structures, Algorithms, Problem Solving, Open Source, Open Source Contribution, Projects, Portfolio, Blog, Blogging, Technical Blog, Technology, Web Development, Software Development, Full Stack Development, Competitive Programming, Data Structures, Algorithms, Problem Solving, Open Source, Open Source Contribution, Projects, Portfolio, Blog, Blogging, Technical Blog, NSUT IIF, Mars Image, Wikipedia, Dheeraj, Sharma, Dheeraj, Sharama",
}

siteData.og_image = new URL(siteData.og_image, siteData.BASE_URL).toString()

export const { BASE_URL, name, short_name, description, theme_color, logo, keywords, og_image } = siteData
