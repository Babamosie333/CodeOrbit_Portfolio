const config = {
  title: "Vikram Singh | Full-Stack Developer",
  description: {
    long: "Explore the portfolio of Vikram, a full-stack developer and creative technologist specializing in interactive web experiences, 3D animations, and innovative projects. Discover my latest work, including Coding Ducks, The Booking Desk, Ghostchat, and more. Let's build something amazing together!",
    short:
      "Discover the portfolio of Vikram, a full-stack developer creating interactive web experiences and innovative projects.",
  },
  keywords: [
    "Vikram",
    "portfolio",
    "full-stack developer",
    "creative technologist",
    "web development",
    "3D animations",
    "interactive websites",
    "Coding Ducks",
    "The Booking Desk",
    "Ghostchat",
    "web design",
    "GSAP",
    "React",
    "Next.js",
    "Spline",
    "Framer Motion",
  ],
  author: "Vikram Singh",
  email: "vikramsingh14052006@gmail.com",
  site: "https://github.com/Babamosie333",

  // for github stars button
  githubUsername: "Babamosie333",
  githubRepo: "3d-portfolio",

  get ogImg() {
    return this.site + "/assets/seo/og-image.png";
  },
  social: {
    twitter: "https://x.com/vikram14052006",
    linkedin: "https://www.linkedin.com/in/vikram14052006/",
    instagram: "https://www.instagram.com/vikram14052006",
    facebook: "https://www.facebook.com/vikram14052006",
    github: "https://github.com/Babamosie333",
  },
};
export { config };
