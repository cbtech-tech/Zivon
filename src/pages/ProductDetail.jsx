import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ProductBanner from '../assets/Product_Banner.jpg';
import LogoIpsum1 from '../assets/ourProducts/LogoIpsum1.svg';
import LogoIpsum2 from '../assets/ourProducts/LogoIpsum2.svg';
import LogoIpsum3 from '../assets/ourProducts/Logo.Ipsum3svg.svg';
import LogoIpsum4 from '../assets/ourProducts/LogoIpsum4.svg';
import Logo from '../assets/Logo.png';
import Icon1 from '../assets/ourProducts/1.svg';
import Icon2 from '../assets/ourProducts/2.svg';
import Icon3 from '../assets/ourProducts/3.svg';
import Icon4 from '../assets/ourProducts/4.svg';
import PaychequeIcon from '../assets/ourProducts/Paycheque.svg';
import StethoscopeIcon from '../assets/ourProducts/Stethoscope.svg';
import OnlineShopIcon from '../assets/ourProducts/Online Shop.svg';
import PhoneLaptopIcon from '../assets/ourProducts/ic-fluent-phone-laptop-24-filled 1.svg';
import SmartThingIcon from '../assets/ourProducts/smartThing.png';
import Icon20131 from '../assets/ourProducts/20131 (1) 1.svg';
import SystemDesignIcon from '../assets/ourProducts/product_stsytemDesign.svg';

const ProductDetail = () => {
  const { productId } = useParams();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, []);

  // Product data mapping
  const productData = {
    'nexus-analytics-pro': {
      name: 'Nexus Analytics Pro',
      description: 'Real-time data processing for enterprise scale. Turn chaos into clarity with zero latency.',
      capabilities: [
        {
          icon: 'speed',
          title: 'Zero Latency',
          subtitle: 'Sub-millisecond processing speeds'
        },
        {
          icon: 'security',
          title: 'Bank Security',
          subtitle: 'AES-256 encryption at rest'
        },
        {
          icon: 'api',
          title: 'Custom API',
          subtitle: 'Full RESTful access endpoints.'
        },
        {
          icon: 'cloud',
          title: 'Cloud Native',
          subtitle: 'Auto-scaling microservices'
        }
      ]
    },
    'nexus-core': {
      name: 'Nexus Analytics Pro',
      description: 'Real-time data processing for enterprise scale. Turn chaos into clarity with zero latency.',
      capabilities: [
        {
          icon: 'speed',
          title: 'Zero Latency',
          subtitle: 'Sub-millisecond processing speeds'
        },
        {
          icon: 'security',
          title: 'Bank Security',
          subtitle: 'AES-256 encryption at rest'
        },
        {
          icon: 'api',
          title: 'Custom API',
          subtitle: 'Full RESTful access endpoints.'
        },
        {
          icon: 'cloud',
          title: 'Cloud Native',
          subtitle: 'Auto-scaling microservices'
        }
      ]
    },
    'sentinel-ai': {
      name: 'Sentinel AI',
      description: 'Autonomous threat detection and response system for financial networks, reducing risk by 40%.',
      capabilities: [
        {
          icon: 'security',
          title: 'Zero Latency',
          subtitle: 'Sub-millisecond processing speeds'
        },
        {
          icon: 'shield',
          title: 'Bank Security',
          subtitle: 'AES-256 encryption at rest'
        },
        {
          icon: 'api',
          title: 'Custom API',
          subtitle: 'Full RESTful access endpoints.'
        },
        {
          icon: 'cloud',
          title: 'Cloud Native',
          subtitle: 'Auto-scaling microservices'
        }
      ]
    },
    'nexus-core': {
      name: 'Nexus Core',
      description: 'The backbone for global supply chain transparency, providing real-time visibility across continents.',
      capabilities: [
        {
          icon: 'speed',
          title: 'Zero Latency',
          subtitle: 'Sub-millisecond processing speeds'
        },
        {
          icon: 'security',
          title: 'Bank Security',
          subtitle: 'AES-256 encryption at rest'
        },
        {
          icon: 'api',
          title: 'Custom API',
          subtitle: 'Full RESTful access endpoints.'
        },
        {
          icon: 'cloud',
          title: 'Cloud Native',
          subtitle: 'Auto-scaling microservices'
        }
      ]
    },
    'quasar-data': {
      name: 'Quasar Data',
      description: 'Enterprise analytics with predictive modeling capabilities to forecast market trends.',
      capabilities: [
        {
          icon: 'analytics',
          title: 'Zero Latency',
          subtitle: 'Sub-millisecond processing speeds'
        },
        {
          icon: 'security',
          title: 'Bank Security',
          subtitle: 'COUNTRIES'
        },
        {
          icon: 'api',
          title: 'Custom API',
          subtitle: 'Full RESTful access endpoints.'
        },
        {
          icon: 'cloud',
          title: 'Cloud Native',
          subtitle: 'Auto-scaling microservices'
        }
      ]
    }
  };

  const product = productData[productId] || productData['nexus-analytics-pro'];

  // Icons array for Key Capabilities
  const capabilityIcons = [Icon1, Icon2, Icon3, Icon4];

  return (
    <main className="w-full bg-white">
      {/* Hero Image Section */}
      <section className="w-full pb-8 sm:pb-10 lg:pb-12">
        <div className="mx-auto" style={{ maxWidth: '1440px', width: '100%', paddingLeft: 'clamp(16px, 4vw, 60px)', paddingRight: 'clamp(16px, 4vw, 60px)' }}>
          <div 
            className="relative"
            style={{
              width: '1280px',
              height: '596px',
              borderRadius: '16px',
              backgroundImage: `url(${ProductBanner})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              filter: 'grayscale(100%)',
              maxWidth: '100%'
            }}
          >
            {/* Greyish Overlay */}
            <div 
              className="absolute inset-0"
              style={{
                backgroundColor: 'rgba(0, 0, 0, 0.3)',
                borderRadius: '16px'
              }}
            />
          </div>
        </div>
      </section>

      {/* Product Header Content */}
      <section className="w-full bg-white pb-8 sm:pb-10 lg:pb-12">
        <div className="mx-auto" style={{ maxWidth: '1440px', width: '100%', paddingLeft: 'clamp(16px, 4vw, 60px)', paddingRight: 'clamp(16px, 4vw, 60px)' }}>
          {/* Product Name */}
          <h1 
            className="mb-2 sm:mb-3 tracking-[-0.02em]"
            style={{ 
              color: '#000000',
              fontSize: 'clamp(36px, 6vw, 72px)',
              fontWeight: 600
            }}
          >
            Nexus Analytics Pro
          </h1>

          {/* Product Description */}
          <p 
            className="text-base sm:text-lg lg:text-xl leading-relaxed max-w-3xl"
            style={{ color: '#64748B', fontWeight: 400 }}
          >
            Real-time data processing for enterprise scale. Turn chaos into<br />
            clarity with zero latency.
          </p>
        </div>
      </section>

      {/* Key Capabilities Section */}
      <section className="w-full bg-white pt-4 sm:pt-6 lg:pt-8 pb-8 sm:pb-10 lg:pb-12 xl:pb-16">
        <div className="mx-auto" style={{ maxWidth: '1440px', width: '100%', paddingLeft: 'clamp(16px, 4vw, 60px)', paddingRight: 'clamp(16px, 4vw, 60px)' }}>
          {/* Section Title */}
          <h2 
            className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-[-0.02em]"
            style={{ color: '#000000', fontWeight: 600, marginBottom: '20px' }}
          >
            Key Capabilities
          </h2>

          {/* Capabilities Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4" style={{ gap: '10px' }}>
            {product.capabilities.map((capability, index) => (
              <div
                key={index}
                className="bg-white border flex flex-col"
                style={{
                  width: '296px',
                  height: '232px',
                  padding: '32px',
                  borderRadius: '16px',
                  borderWidth: '1px',
                  borderColor: '#E2E8F0',
                  borderStyle: 'solid',
                  maxWidth: '100%'
                }}
              >
                {/* Icon - Top Left */}
                <div style={{ marginBottom: '4px', width: '24px', height: '24px' }}>
                  <img 
                    src={capabilityIcons[index]} 
                    alt={capability.title}
                    style={{
                      width: '24px',
                      height: '24px',
                      objectFit: 'contain'
                    }}
                  />
                </div>

                {/* Title */}
                <h3 
                  className="font-bold"
                  style={{ color: '#000000', fontSize: '24px', marginBottom: '8px', marginTop: '16px' }}
                >
                  {capability.title}
                </h3>

                {/* Subtitle */}
                <div 
                  className="uppercase tracking-wider mt-auto"
                  style={{ color: '#64748B', fontWeight: 500, fontSize: '20px' }}
                >
                  {capability.subtitle}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Architecture Section */}
      <section className="w-full bg-white pt-12 sm:pt-16 lg:pt-20">
        <div 
          className="mx-auto"
          style={{
            maxWidth: '1440px',
            width: '100%',
            paddingRight: 'clamp(16px, 4vw, 60px)',
            paddingLeft: 'clamp(16px, 4vw, 60px)',
            gap: '32px'
          }}
        >
          {/* Section Title */}
          <h2 
            className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-[-0.02em]"
            style={{ 
              color: '#000000', 
              fontWeight: 600,
              marginBottom: '48px'
            }}
          >
            Technical Architecture
          </h2>
        </div>
      </section>

      {/* System Architecture Section */}
      <section 
        className="w-full"
        style={{ 
          backgroundColor: '#020617'
        }}
      >
        <div 
          className="mx-auto"
          style={{
            width: '100%',
            maxWidth: '1441px',
            height: 'clamp(400px, 50vh, 487px)',
            minHeight: '400px',
            gap: '10px',
            paddingTop: 'clamp(16px, 2vw, 32px)',
            paddingRight: 'clamp(16px, 4vw, 80px)',
            paddingBottom: 'clamp(16px, 2vw, 32px)',
            paddingLeft: 'clamp(16px, 4vw, 80px)',
            borderRightWidth: '1px',
            borderRightStyle: 'solid',
            borderRightColor: '#475569',
            backgroundColor: '#020617'
          }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 items-start" style={{ gap: '32px', height: '100%' }}>
            {/* Left Content Area */}
            <div className="flex flex-col" style={{ paddingTop: '24px' }}>
              {/* Small Label */}
              <div 
                className="flex items-center gap-2 text-xs sm:text-sm uppercase tracking-widest mb-1 sm:mb-2"
                style={{ color: '#FFFFFF', fontWeight: 600 }}
              >
                <img 
                  src={SystemDesignIcon} 
                  alt="System Design" 
                  style={{ 
                    width: '18px', 
                    height: '18px',
                    top: '3px',
                    left: '3px',
                    position: 'relative',
                    objectFit: 'contain'
                  }} 
                />
                SYSTEM DIAGRAM
              </div>

              {/* Main Title */}
              <h2 
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 tracking-[-0.02em]"
                style={{ color: '#FFFFFF' }}
              >
                Microsoft Core
              </h2>

              {/* Description Text */}
              <p 
                className="text-base sm:text-lg leading-relaxed"
                style={{ color: '#94A3B8', fontWeight: 400, maxWidth: '480px' }}
              >
                Built on a decoupled architecture leveraging Kubernetes for<br />
                intelligent auto-scaling. Data flows through our proprietary<br />
                ingest engine before being distributed to isolated processing<br />
                nodes.
              </p>
            </div>

            {/* Right Architecture Diagram Card */}
            <div 
              className="border flex items-center justify-center"
              style={{
                width: '100%',
                maxWidth: '674px',
                height: 'clamp(300px, 40vh, 367px)',
                minHeight: '300px',
                gap: '24px',
                paddingLeft: 'clamp(16px, 2vw, 32px)',
                paddingRight: 'clamp(16px, 2vw, 32px)',
                paddingBottom: 'clamp(16px, 2vw, 32px)',
                paddingTop: 'clamp(16px, 2vw, 32px)',
                marginTop: 'clamp(12px, 2vw, 24px)',
                borderRadius: '16px',
                borderWidth: '1px',
                borderStyle: 'solid',
                borderColor: '#475569',
                backgroundColor: '#020617'
              }}
            >
              {/* System Nodes - Horizontal Flow */}
              <div className="flex items-center justify-center flex-wrap" style={{ gap: 'clamp(8px, 2vw, 16px)' }}>
                {/* Node 1 - Client / Device */}
                <div className="flex items-center">
                  <div 
                    className="rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{
                      width: 'clamp(48px, 6vw, 64px)',
                      height: 'clamp(48px, 6vw, 64px)',
                      backgroundColor: '#1E293B'
                    }}
                  >
                    <img 
                      src={PhoneLaptopIcon} 
                      alt="Client / Device"
                      style={{
                        width: 'clamp(20px, 3vw, 28px)',
                        height: 'clamp(20px, 3vw, 28px)',
                        objectFit: 'contain',
                        filter: 'brightness(0) invert(1)'
                      }}
                    />
                  </div>
                </div>

                {/* Connection Line */}
                <div 
                  style={{ 
                    width: 'clamp(40px, 8vw, 93px)',
                    height: '0px',
                    borderWidth: '1px',
                    borderStyle: 'solid',
                    borderColor: '#FFFFFF',
                    margin: '0 clamp(4px, 1vw, 8px)'
                  }}
                ></div>

                {/* Node 2 - Distributed Processing / Network */}
                <div className="flex items-center">
                  <div 
                    className="rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{
                      width: 'clamp(48px, 6vw, 64px)',
                      height: 'clamp(48px, 6vw, 64px)',
                      backgroundColor: '#1E293B'
                    }}
                  >
                    <img 
                      src={SmartThingIcon} 
                      alt="Distributed Processing / Network"
                      style={{
                        width: 'clamp(20px, 3vw, 28px)',
                        height: 'clamp(20px, 3vw, 28px)',
                        objectFit: 'contain',
                        filter: 'brightness(0) invert(1)'
                      }}
                    />
                  </div>
                </div>

                {/* Connection Line */}
                <div 
                  style={{ 
                    width: 'clamp(40px, 8vw, 93px)',
                    height: '0px',
                    borderWidth: '1px',
                    borderStyle: 'solid',
                    borderColor: '#FFFFFF',
                    margin: '0 clamp(4px, 1vw, 8px)'
                  }}
                ></div>

                {/* Node 3 - Database / Storage */}
                <div className="flex items-center">
                  <div 
                    className="rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{
                      width: 'clamp(48px, 6vw, 64px)',
                      height: 'clamp(48px, 6vw, 64px)',
                      backgroundColor: '#1E293B'
                    }}
                  >
                    <img 
                      src={Icon20131} 
                      alt="Database / Storage"
                      style={{
                        width: 'clamp(20px, 3vw, 28px)',
                        height: 'clamp(20px, 3vw, 28px)',
                        objectFit: 'contain',
                        filter: 'brightness(0) invert(1)'
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Solution Section */}
      <section className="w-full bg-white pt-12 sm:pt-16 lg:pt-20">
        <div 
          className="mx-auto"
          style={{
            maxWidth: '1440px',
            width: '100%',
            paddingRight: 'clamp(16px, 4vw, 60px)',
            paddingLeft: 'clamp(16px, 4vw, 60px)',
            gap: '32px'
          }}
        >
          {/* Section Title */}
          <h2 
            className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-12 tracking-[-0.02em]"
            style={{ color: '#000000', fontWeight: 600, marginBottom: '48px' }}
          >
            Industries Solution
          </h2>

          {/* Industry Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3" style={{ gap: '32px' }}>
            {[
              {
                icon: PaychequeIcon,
                title: 'Finance',
                description: 'Real-time fraud detection analyzing millions of transactions per second to flag anomalies'
              },
              {
                icon: StethoscopeIcon,
                title: 'Healthcare',
                description: 'High-throughput analytics for patient data, diagnostics, and operational systems—enabling faster insights while maintaining strict data privacy and compliance.'
              },
              {
                icon: OnlineShopIcon,
                title: 'Retail & E-commerce',
                description: 'Real-time demand forecasting and behavioral analytics to optimize inventory, pricing, and personalized customer experiences at scale.'
              }
            ].map((industry, index) => (
              <div
                key={index}
                className="bg-white border flex flex-col"
                style={{
                  width: '100%',
                  maxWidth: '400px',
                  height: '442px',
                  borderRadius: '16px',
                  borderWidth: '1px',
                  borderStyle: 'solid',
                  borderColor: '#E2E8F0',
                  padding: '32px',
                  gap: '24px'
                }}
              >
                {/* Icon Container - Top Left */}
                <div style={{ marginBottom: '4px' }}>
                  <div 
                    className="rounded-lg flex items-center justify-center"
                    style={{
                      width: '40px',
                      height: '40px',
                      backgroundColor: '#F1F5F9'
                    }}
                  >
                    <img 
                      src={industry.icon} 
                      alt={industry.title}
                      style={{
                        width: '24px',
                        height: '24px',
                        objectFit: 'contain'
                      }}
                    />
                  </div>
                </div>

                {/* Title */}
                <h3 
                  className="text-xl sm:text-2xl font-semibold"
                  style={{ color: '#000000', fontWeight: 600, marginBottom: '4px' }}
                >
                  {industry.title}
                </h3>

                {/* Description */}
                <p 
                  className="text-base sm:text-lg leading-relaxed flex-grow"
                  style={{ 
                    color: '#475569', 
                    fontWeight: 400,
                    lineHeight: '1.6'
                  }}
                >
                  {industry.description}
                </p>

                {/* Bottom CTA */}
                <div 
                  className="text-sm sm:text-base font-medium mt-auto"
                  style={{ color: '#0F172A', fontWeight: 500 }}
                >
                  View Case Studies
                </div>
              </div>
            ))}
          </div>

          {/* Trusted By Section */}
          <section 
            className="w-full text-center"
            style={{
              backgroundColor: '#FFFFFF',
              paddingTop: '72px',
              paddingBottom: '64px'
            }}
          >
            {/* Section Label */}
            <div className="flex flex-col items-center" style={{ marginBottom: '48px' }}>
              <div 
                className="text-xs sm:text-sm uppercase"
                style={{ 
                  color: '#64748B', 
                  fontWeight: 500,
                  letterSpacing: '0.08em'
                }}
              >
                TRUSTED BY INDUSTRY LEADER
              </div>
            </div>

            {/* Logos Row */}
            <div 
              className="flex flex-wrap items-center justify-center"
              style={{
                gap: 'clamp(32px, 4vw, 64px)' // Responsive gap: smaller on tablet/mobile
              }}
            >
              {[LogoIpsum1, LogoIpsum2, LogoIpsum3, LogoIpsum4, Logo].map((logo, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center"
                  style={{
                    height: '32px'
                  }}
                >
                  <img 
                    src={logo} 
                    alt={`Logo ${index + 1}`}
                    style={{
                      height: '32px',
                      width: 'auto',
                      objectFit: 'contain',
                      filter: index === 4 ? 'grayscale(100%)' : 'none', // LogoIpsum5 - grayscale, others black
                      opacity: 1
                    }}
                  />
                </div>
              ))}
            </div>
          </section>
        </div>
      </section>
    </main>
  );
};

export default ProductDetail;
