"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Sublimation Printing",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>T-shirts</li>
        <li>Flags</li>
        <li>Photo Mug</li>
        <li>BaseBall Caps</li>
        <li>School Jackets</li>
        <li>Gazebo</li>
      </ul>
    ),
  },
  {
    title: "Large Format Printing",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>PVC Banners</li>
        <li>Vinyl Stickers</li>
        <li>Brochures</li>
        <li>Flyers</li>
        <li>Poster Prints</li>
        <li>Signs</li>
        <li>Correx Boards</li>
        <li>Pullup Banners</li>
      </ul>
    ),
  },
  {
    title: "Packaging & Labels",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>Canvas Bags</li>
        <li>Food Packaging</li>
        <li>Labels for Gifts</li>
        <li>Plastic Containers</li>
        <li>Wine Bottles</li>
        <li>Coffee Cups</li>
        <li>Jars</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/hero.png" width={600} height={600} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">Our Services</h2>
          <p className="text-base lg:text-lg">
            

We are Soul Graphics, your expert Sublimation & printing store for everything from large format printing to business cards and banners; we have you covered. We offer the widest range of eco-friendly printing products available in Johannesburg Gauteng, Pretoria and Entire South Africa, using soy inks, including recycled business cards, brochures, presentation folders, sell sheets, stationery, catalogs, booklets, calendars and more. Recycled paper is now our standard stock.

For over 9 years we’ve offered rush printing with same-day delivery in Johannesburg and surrounding areas. Our use of the latest digital tools and technology allows us to offer services not possible with standard offset printers like small runs at cost effective pricing, metallic inks and foil printing. If you need a print job in a hurry, trust us for consistent, high quality, on-time printing.

Need a design for your next print job? Get in touch with one of our array of designers who have experience in branding management all the way from concept to the showroom. We have our team available 24/7 to answer any printing questions you may have. We also offer a range of Web Develpment, SEO marketing and mobile Advanced App development.

          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Sublimation Printing{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Large Format Printing{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Packaging & Labeling{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
