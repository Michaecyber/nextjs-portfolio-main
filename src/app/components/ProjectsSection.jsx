"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "NRC Forms Printing",
    description: "Custom NCR forms (no carbon required forms) are perfect for printing statements, invoices and work orders. These carbonless printed forms will help you keep the carbon mess out of your office. We offer 2-part and 3-part forms in a variety of sizes.",
    image: "/nrc.webp",
    tag: ["Large Format Printing" , "All Products"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "Tshirt Printing",
    description: "We print you can print on t-shirts in excellent quality on high-quality material. Whether as a promo shirt for advertising campaigns in pedestrian zones, as a t-shirt in the corporate design for your employees or as a beautiful gift idea for for friends, t-shirt printing with Soul Graphics offers you a wide range of possibilities for individualisation.",
    image: "/tshirts.png",
    tag: ["All Products", "Sublimation Printing"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "Photo Mugs Printing",
    description: "Soul Graphics is the market leader in the production of the highest quality sublimation mugs, cups, Our policy is one of continuous product high-end quality and development combined with first-class customer service. Each one of our products is handled by a skilled craftsman, maintaining Mugsie reputation of years of excellence in pottery making",
    image: "/photo-mugs.png",
    tag: ["All Products", "Sublimation Printing"],
    gitUrl: "/",
    previewUrl: "/images/projects/3.png",
  },
  {
    id: 4,
    title: "Flags",
    description: "We print you can print flags and banners in perfect quality and at fair prices. The products are ideal for companies who want to make a statement at their own location or to brand their products. In addition, the hoisting flags are suitable for public clients to implement the official flagging on public buildings. Many clubs and fans also use our flags, for example for events or league games.",
    image: "/flag.png",
    tag: ["All Products", "Sublimation Printing"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "BaseBall Caps",
    description: "The baseball cap is fashionable accessory and practical headgear in one. This makes baseball caps the perfect advertising medium. At Soul Graphics, you can have baseball caps professionally printed with your custom designs at low prices. Alternatively, you could have them embroidered. You can choose between two different designs in a range of different colours.",
    image: "/caps.png",
    tag: ["All Products", "Sublimation Printing"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 6,
    title: "Wine Tumbler Printing",
    description: "Our Stemless Travel tumblers are the ideal addition to a bridesmaid gift! Each wine tumbler comes with a clear lid and will be personalized with a name pretty permanent vinyl lettering. Most importantly, These wine tumblers aren’t limited to bridesmaid only, you also can use it for wedding, bachelorette party favor, engagement, honeymoon and even for yourself or any girls who like cute things!",
    image: "/tumbler.png",
    tag: ["All Products", "Sublimation Printing"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 7,
    title: "Pull-Up Banners",
    description: "These Roll-Up Banners are perfectly suitable for promoting your Business. You can also use the banners in multipurpose advertising purpose",
    image: "/pullup-banner.png",
    tag: ["All Products", "Large Format Printing"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 8,
    title: "Gazebo Wall Banners",
    description: "Take your event to the next level with a fully digitally-printed outdoor branding kit designed to make your event hassle-free. This extremely cost effective package includes 1x 2.4m x 2.4m custom branded Cost Effective Gazebo, 1x custom branded Table Cloth, 2x 3m Telescopic Banners and 2 custom branded directors chairs.",
    image: "/gazebo.jpg",
    tag: ["All Products", "Sublimation Printing"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 9,
    title: "Custom Flags",
    description: "These custom banners, outdoor Advertising Flags hang outside of your building to alert passers-by that you are ready to service them! What size and shape do you want for your promotional flags? Our advertising flags come in two shapes. Feather flags are a popular choice because of their unique Shape",
    image: "/custom-flags.jpg",
    tag: ["All Products", "Sublimation Printing"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 10,
    title: "Calender Printing",
    description: "corporate calender, flyers,business,wall painting,calendar design,calendar 2024,business report",
    image: "/calender.png",
    tag: ["All Products", "Large Format Printing"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 11,
    title: "Safety Signs Printing",
    description: "Company signage should work as hard as you do. Appealing signage attracts new customers. Anything from billboard signs and 3D lettering to fascia signs, and more. We print all work and harzards safety signs",
    image: "/safe.jpg",
    tag: ["All Products", "Large Format Printing"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 12,
    title: "Correx Boards Prinint",
    description: "The Correx board printing services that we deliver are matchless as we never compromise on the quality. Correx boards are ideal to use as printed panels, boards, decoration, insulation, protecting floors and windows during construction, estate agent boards and bollard covers. Board Printing Company can also offer custom options and print the Correx board with your brand message and image.",
    image: "/correxb.jpg",
    tag: ["All Products", "Large Format Printing"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 13,
    title: "Food Menu Printing",
    description: "Create the perfect design by our designers in MINUTES! Easily convert your image designs into videos or vice versa! Browse through effective promotional flyers, posters, social media graphics and videos.",
    image: "/foodmenu.jpg",
    tag: ["All Products", "Large Format Printing"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 14,
    title: "Logo Designing",
    description: "Being entrusted with designing a logo or complete brand identity for a customer is a dream job for us",
    image: "/logodesigns.png",
    tag: ["All Products", "Large Format Printing"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 15,
    title: "Web UI & UX Designing",
    description: "Fresh free Web & Graphic Design Resources for UI Designers are here. Handpicked freebies collection are available for commercial usage. Freebies included psd graphics, business cards, free psd mockups, fonts, UI Kits and many useful free files for web UI and graphic UI/UX design.",
    image: "/webdesigning.jpg",
    tag: ["All Products", "Large Format Printing"],
    gitUrl: "/",
    previewUrl: "/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        Printing Products
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
      onClick={handleTagChange}
      name="Sublimation Printing"
      isSelected={tag === "AllProducts"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="All Products"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Large Format Printing"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Retail & Parkaging"
          isSelected={tag === "Mobile"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
