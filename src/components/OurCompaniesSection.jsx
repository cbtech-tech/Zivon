import React from "react";
import { useNavigate } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";
import BuildingIcon from "../assets/building.svg";
import LaptopIcon from "../assets/laptop.svg";

const OurCompaniesSection = () => {
  const navigate = useNavigate();

  const handleLinkClick = (e, href) => {
    // Allow default behavior for Ctrl+Click, Middle-click, or Right-click (new tab)
    if (e.ctrlKey || e.metaKey || e.button === 1 || e.button === 2) {
      return;
    }
    // Prevent default for normal clicks and use React Router navigation
    e.preventDefault();
    // Scroll to top immediately before navigation
    window.scrollTo({ top: 0, behavior: "instant" });
    navigate(href);
    // Ensure scroll after navigation
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "instant" });
    }, 0);
  };
  // const companies = [
  //   {
  //     icon: LaptopIcon,
  //     category: "Technology Services",
  //     title: "Codersbay Technologies",
  //     description: "Delivering large-scale infrastructure and mission-critical software architecture for global enterprises and government bodies.",
  //     isSvgIcon: true
  //   },
  //   {
  //     icon: BuildingIcon,
  //     category: "Enterprise Solutions",
  //     title: "Zevon Systems",
  //     description: "Creating intuitive consumer applications and smart devices that integrate seamlessly into everyday life.",
  //     isSvgIcon: true
  //   }
  // ];

  const companies = [
    {
      icon: LaptopIcon,
      category: "Technology Services",
      title: "Codersbay Technologies",
      description:
        "Delivering large-scale infrastructure and mission-critical software architecture for global enterprises and government bodies.",
      isSvgIcon: true,
      link: "https://codersbaytech.com/",
      external: true,
    },
    {
      icon: BuildingIcon,
      category: "Enterprise Solutions",
      title: "Zevon Systems",
      description:
        "Creating intuitive consumer applications and smart devices that integrate seamlessly into everyday life.",
      isSvgIcon: true,
      link: "/company",
      external: false,
    },
  ];

  return (
    <section
      className="w-full py-6 sm:py-8 lg:py-12 xl:py-16"
      style={{
        backgroundColor: "#F8FAFC",
      }}
    >
      <div
        className="mx-auto"
        style={{
          maxWidth: "1440px",
          width: "100%",
          paddingLeft: "clamp(16px, 4vw, 60px)",
          paddingRight: "clamp(16px, 4vw, 60px)",
        }}
      >
        {/* Section Title with Divider */}
        <div style={{ marginBottom: "clamp(32px, 6vw, 64px)" }}>
          <h2
            className="font-semibold tracking-[-0.02em]"
            style={{
              color: "#000000",
              fontSize: "clamp(24px, 4vw, 36px)",
              fontWeight: 600,
              marginBottom: "clamp(16px, 2vw, 24px)",
            }}
          >
            Our Companies
          </h2>
          <div className="border-t" style={{ borderColor: "#E5E7EB" }}></div>
        </div>

        {/* 2-Column Grid */}
        <div
          className="grid grid-cols-1 md:grid-cols-2"
          style={{ gap: "clamp(24px, 4vw, 48px)" }}
        >
          {companies.map((company, index) => {
            const IconComponent = company.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-lg shadow-sm flex flex-col"
                style={{
                  padding: "clamp(24px, 4vw, 32px)",
                  borderRadius: "8px",
                }}
              >
                {/* Icon at top-left */}
                <div style={{ marginBottom: "clamp(16px, 2vw, 20px)" }}>
                  <div
                    className="flex items-center justify-center"
                    style={{
                      width: "clamp(40px, 5vw, 48px)",
                      height: "clamp(40px, 5vw, 48px)",
                      backgroundColor: "#F1F5F9",
                      borderRadius: "8px",
                    }}
                  >
                    {company.isSvgIcon ? (
                      <img
                        src={IconComponent}
                        alt={company.title}
                        style={{
                          width: "clamp(20px, 2.5vw, 24px)",
                          height: "clamp(20px, 2.5vw, 24px)",
                          objectFit: "contain",
                        }}
                      />
                    ) : company.isMaterialIcon ? (
                      <span
                        className="material-symbols-outlined"
                        style={{
                          color: "#000000",
                          fontSize: "clamp(20px, 2.5vw, 24px)",
                        }}
                      >
                        {IconComponent}
                      </span>
                    ) : (
                      <IconComponent
                        className="w-6 h-6"
                        style={{ color: "#000000" }}
                      />
                    )}
                  </div>
                </div>

                {/* Category Badge */}
                <div style={{ marginBottom: "clamp(12px, 1.5vw, 16px)" }}>
                  <span
                    className="inline-block rounded-full tracking-wider"
                    style={{
                      backgroundColor: "#F1F5F9",
                      color: "#000000",
                      padding:
                        "clamp(4px, 0.5vw, 8px) clamp(12px, 1.5vw, 16px)",
                      fontSize: "clamp(12px, 1.5vw, 14px)",
                    }}
                  >
                    {company.category}
                  </span>
                </div>

                {/* Title */}
                <h3
                  className="font-semibold tracking-[-0.02em]"
                  style={{
                    color: "#000000",
                    fontSize: "clamp(20px, 3vw, 28px)",
                    marginBottom: "clamp(12px, 1.5vw, 16px)",
                    fontWeight: 600,
                  }}
                >
                  {company.title}
                </h3>

                {/* Description */}
                <p
                  className="leading-relaxed"
                  style={{
                    color: "#64748B",
                    fontWeight: 400,
                    fontSize: "clamp(14px, 1.8vw, 18px)",
                    lineHeight: "1.6",
                    marginBottom: "clamp(16px, 2vw, 20px)",
                  }}
                >
                  {company.description}
                </p>

                {/* Visit Site Link */}
                {/* <a 
                href="/company"
                onClick={(e) => handleLinkClick(e, '/company')}
                className="inline-flex items-center gap-2 text-primary hover:underline transition-all duration-200 mt-auto group"
                style={{
                  fontSize: 'clamp(14px, 1.8vw, 16px)'
                }}
              > */}
                <a
                  href={company.link}
                  onClick={
                    company.external
                      ? undefined
                      : (e) => handleLinkClick(e, company.link)
                  }
                  target={company.external ? "_blank" : "_self"}
                  rel={company.external ? "noopener noreferrer" : undefined}
                  className="inline-flex items-center gap-2 text-primary hover:underline transition-all duration-200 mt-auto group"
                  style={{
                    fontSize: "clamp(14px, 1.8vw, 16px)",
                  }}
                >
                  <span>Learn More</span>
                  <FiArrowRight
                    className="transition-all duration-200 opacity-0 group-hover:opacity-100"
                    style={{
                      transform: "rotate(-45deg)",
                      width: "clamp(14px, 1.8vw, 16px)",
                      height: "clamp(14px, 1.8vw, 16px)",
                    }}
                  />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default OurCompaniesSection;
