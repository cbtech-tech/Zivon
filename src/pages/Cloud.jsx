import React from 'react';
import { FiArrowRight } from "react-icons/fi";

const Cloud = () => {
  return (
    <main className="w-full bg-white">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 xl:py-24">
        {/* Eyebrow Label */}
        <div className="flex items-center gap-3 sm:gap-4 text-xs sm:text-sm uppercase tracking-wider mb-4 sm:mb-6">
          <div 
            style={{ 
              width: '50px', 
              borderTop: '1px solid #000000',
              height: '0'
            }}
          ></div>
          <span style={{ color: '#000000', fontWeight: 400 }}>ENTERPRISE INFRASTRUCTURE</span>
        </div>

        {/* Main Heading */}
        <div className="mb-6 sm:mb-8">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-[-0.02em] leading-tight">
            <span style={{ color: '#000000', fontWeight: 600 }}>Enterprise </span>
            <span style={{ color: '#94A3B8', fontWeight: 600 }}>Cloud &</span>
            <br />
            <span style={{ color: '#94A3B8', fontWeight: 600 }}>Infrastructure </span>
            <span style={{ color: '#000000', fontWeight: 600 }}>Services</span>
          </h1>
        </div>

        {/* Description Text */}
        <p 
          className="text-base sm:text-lg lg:text-xl max-w-3xl mb-8 sm:mb-10 lg:mb-12 leading-relaxed"
          style={{ color: '#64748B', fontWeight: 400 }}
        >
          Propelling enterprise scale through resilient architecture, automated operations, and zero-trust security governance.
        </p>

        {/* Image Placeholder Card */}
        <div 
          className="w-full rounded-lg"
          style={{ 
            height: '400px',
            backgroundColor: '#F1F5F9',
            borderRadius: '16px'
          }}
        >
          {/* Empty placeholder - no image yet */}
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="w-full bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-0 sm:pt-2 lg:pt-4 xl:pt-6 pb-12 sm:pb-16 lg:pb-20 xl:pb-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
            {[
              {
                index: "01",
                title: "Cloud Transformation",
                description: "Migration & strategy accelerated through fit-for-purpose discovery, planning, and execution frameworks.",
                features: ["Cloud Readiness Assessment", "Legacy Decommissioning"]
              },
              {
                index: "02",
                title: "Managed DevOps & SRE",
                description: "CI/CD, Kubernetes, and observability engineering culture focused on automation, site reliability, and 24/7 visibility.",
                features: ["GitOps Pipelines", "Service Mesh & K8s"]
              },
              {
                index: "03",
                title: "Cybersecurity & Compliance",
                description: "Zero Trust cloud governance. Securing the perimeter and the core through automated policy enforcement and encryption.",
                features: ["IAM & Least Privilege", "SOC / ISO Alignment"]
              },
              {
                index: "04",
                title: "Hybrid & Multi-Cloud",
                description: "Architecture distributed across first- and third-party cloud providers and on-premises assets with unified control planes.",
                features: ["Inter-Cloud Networking", "Data Portability"]
              }
            ].map((service, index) => (
              <div
                key={index}
                className="relative p-8 sm:p-10 lg:p-12"
                style={{
                  borderRight: index % 2 === 0 ? '1px solid #E2E8F0' : 'none',
                  borderBottom: index < 2 ? '1px solid #E2E8F0' : 'none'
                }}
              >
                {/* Index Badge */}
                <div
                  className="inline-block px-3 py-1 mb-6 sm:mb-8"
                  style={{
                    backgroundColor: '#020617',
                    color: '#FFFFFF',
                    borderRadius: '4px',
                    fontSize: '12px',
                    fontWeight: 600
                  }}
                >
                  {service.index}
                </div>

                {/* Title */}
                <h2
                  className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 tracking-[-0.02em]"
                  style={{ color: '#000000' }}
                >
                  {service.title === "Cloud Transformation" && (
                    <>
                      Cloud<br />
                      Transformation
                    </>
                  )}
                  {service.title === "Managed DevOps & SRE" && (
                    <>
                      Managed<br />
                      DevOps & SRE
                    </>
                  )}
                  {service.title === "Cybersecurity & Compliance" && (
                    <>
                      Cybersecurity<br />
                      & Compliance
                    </>
                  )}
                  {service.title === "Hybrid & Multi-Cloud" && (
                    <>
                      Hybrid &<br />
                      Multi-Cloud
                    </>
                  )}
                </h2>

                {/* Description */}
                <p
                  className="text-base sm:text-lg mb-6 sm:mb-8 leading-relaxed max-w-lg"
                  style={{ color: '#64748B', fontWeight: 400 }}
                >
                  {service.description}
                </p>

                {/* Feature List */}
                <div className="space-y-2 sm:space-y-3">
                  {service.features.map((feature, idx) => (
                    <div
                      key={idx}
                      className="text-base sm:text-lg font-bold"
                      style={{ color: '#000000' }}
                    >
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Benefits Section */}
      <section className="w-full py-6 sm:py-8 lg:py-10 xl:py-12" style={{ backgroundColor: '#020617' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Heading */}
          <h2 
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-12 sm:mb-16 lg:mb-20 tracking-[-0.02em]"
            style={{ color: '#FFFFFF' }}
          >
            Core Benefits
          </h2>

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {[
              {
                index: "01",
                title: "Scalability",
                description: "Elastic infrastructure that expands dynamically with demand without manual intervention or performance degradation."
              },
              {
                index: "02",
                title: "Resilience",
                description: "Built-in fault tolerance and automated disaster recovery protocols ensuring maximum uptime for mission-critical applications."
              },
              {
                index: "03",
                title: "Security Compliance",
                description: "Continuous audit-readiness through automated governance that maps technical controls to global regulatory standards."
              }
            ].map((benefit, index) => (
              <div key={index} className="flex flex-col ml-2 sm:ml-4 lg:ml-6">
                {/* Index Number and Title - Same Line */}
                <h3 
                  className="font-bold mb-4 sm:mb-6 tracking-[-0.02em] flex items-center gap-4"
                  style={{ color: '#FFFFFF', fontSize: '32px' }}
                >
                  <span 
                    className="italic"
                    style={{ 
                      color: '#475569', 
                      fontWeight: 600, 
                      fontSize: '48px',
                      lineHeight: '1'
                    }}
                  >
                    {benefit.index}
                  </span>
                  <span className="whitespace-nowrap">{benefit.title}</span>
                </h3>

                {/* Description */}
                <p 
                  className="text-sm sm:text-base leading-relaxed max-w-md"
                  style={{ color: '#94A3B8', fontWeight: 400, marginLeft: '64px' }}
                >
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Strategic Advisory CTA Section */}
      <section className="w-full pt-4 sm:pt-6 lg:pt-8 xl:pt-10 pb-12 sm:pb-16 lg:pb-20 xl:pb-24" style={{ backgroundColor: '#020617' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div 
            className="max-w-6xl mx-auto rounded-lg p-8 sm:p-10 lg:p-12"
            style={{ backgroundColor: '#F8FAFC' }}
          >
            {/* Title */}
            <h2 
              className="text-2xl sm:text-2xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 tracking-[-0.02em]"
              style={{ color: '#000000' }}
            >
              Strategic Advisory
            </h2>

            {/* Description */}
            <p 
              className="text-base sm:text-lg lg:text-xl mb-6 sm:mb-8 leading-relaxed"
              style={{ color: '#64748B', fontWeight: 400 }}
            >
              Unlock the full potential of enterprise cloud through a<br></br> dedicated technical consultation.
            </p>

            {/* CTA Button */}
            <button
              className="w-full flex items-center justify-center gap-3 py-4 sm:py-5 font-semibold text-base sm:text-lg transition-all duration-200 group"
              style={{ 
                backgroundColor: '#020617',
                color: '#FFFFFF',
                borderRadius: '8px'
              }}
            >
              <span>Consult with Our Solutions Architects</span>
              <FiArrowRight 
                className="w-5 h-5 transition-all duration-200 opacity-0 group-hover:opacity-100" 
                style={{ transform: 'rotate(-45deg)' }}
              />
            </button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Cloud;
