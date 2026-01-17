import React, { useEffect, useState } from 'react';
import InsightBanner from '../assets/latesInsight/InsightBanner.jpg';
import MigratingImage from '../assets/latesInsight/Migrating.jpg';
import TheMoralImage from '../assets/latesInsight/TheMoral.jpg';
import TheArchitectureImage from '../assets/latesInsight/TheArchitecture.jpg';
import VisulizingImage from '../assets/latesInsight/Visulizing.jpg';
import MailIcon from '../assets/Mail.svg';

const Insights = () => {
  const [activeCategory, setActiveCategory] = useState('All Stories');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="w-full bg-white">
      {/* Editorial Banner Section */}
      <section className="w-full pt-6 sm:pt-8 lg:pt-10 xl:pt-12 pb-12 sm:pb-16 lg:pb-20 xl:pb-24">
        <div className="mx-auto" style={{ maxWidth: '1440px', width: '100%', paddingLeft: '60px', paddingRight: '60px' }}>
          {/* Hero Image */}
          <div 
            className="rounded-2xl overflow-hidden mb-6"
            style={{
              width: '100%',
              maxWidth: '1320px',
              height: '596px',
              borderRadius: '16px'
            }}
          >
            <img 
              src={InsightBanner} 
              alt="Editorial Banner"
              className="w-full h-full object-cover"
              style={{
                filter: 'grayscale(100%)',
                width: '100%',
                height: '100%',
                borderRadius: '16px'
              }}
            />
          </div>

          {/* Meta Label - EDITOR'S CHOICE */}
          <div className="flex items-center gap-2 mt-6 mb-3" style={{ maxWidth: '1320px' }}>
            {/* Dot Icon */}
            <div 
              className="rounded-full"
              style={{
                width: '6px',
                height: '6px',
                backgroundColor: '#000000'
              }}
            ></div>
            <div 
              className="uppercase tracking-wide"
              style={{ 
                color: '#000000', 
                fontWeight: 600,
                fontSize: '14px',
                letterSpacing: '0.05em'
              }}
            >
              EDITOR'S CHOICE
            </div>
          </div>

          {/* Article Title */}
          <h1 
            className="font-bold tracking-[-0.02em] mb-4"
            style={{ 
              color: '#000000',
              fontSize: '72px',
              fontWeight: 600,
              lineHeight: '1.1',
              maxWidth: '1320px'
            }}
          >
            The Future of Quantum <br></br>Computing in FinTech
        </h1>

          {/* Subtitle / Description */}
          <p 
            className="text-base sm:text-lg lg:text-xl mb-5 leading-relaxed"
            style={{ 
              color: '#64748B',
              fontWeight: 400,
              lineHeight: '1.6',
              maxWidth: '1320px'
            }}
          >
            Exploring the intersection of theoretical physics and high-frequency <br></br>finance in the modern digital era.
          </p>

          {/* Meta Info Row */}
          <div 
            className="text-xs sm:text-sm uppercase tracking-wide"
            style={{ 
              color: '#94A3B8',
              fontWeight: 500,
              letterSpacing: '0.05em',
              marginTop: '20px',
              maxWidth: '1320px'
            }}
          >
            STRATEGY • 5 MIN READ
          </div>
        </div>
      </section>

      {/* Category Navigation Bar */}
      <section className="w-full bg-white pt-2 sm:pt-3 lg:pt-4 pb-0">
        {/* Top Horizontal Line */}
        <div 
          className="w-full mb-4"
          style={{
            height: '1px',
            backgroundColor: '#E2E8F0',
            width: '100%'
          }}
        ></div>
        
        <div className="mx-auto" style={{ maxWidth: '1440px', width: '100%', paddingLeft: '60px', paddingRight: '60px', paddingBottom: '16px' }}>
          <div className="flex flex-wrap gap-6 sm:gap-8 lg:gap-10">
            {['All Stories', 'Engineering', 'AI & Data', 'Strategy'].map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className="relative transition-colors"
                style={{
                  backgroundColor: 'transparent',
                  border: 'none',
                  cursor: 'pointer',
                  padding: 0
                }}
              >
                <span
                  style={{
                    color: '#000000',
                    fontWeight: 600,
                    fontSize: '30px',
                    fontFamily: 'inherit'
                  }}
                >
                  {category}
                </span>
                {/* Active Underline */}
                {activeCategory === category && (
                  <div
                    className="absolute left-0 right-0"
                    style={{
                      height: '6px',
                      backgroundColor: '#020617',
                      width: '100%',
                      bottom: '-16px'
                    }}
                  ></div>
                )}
              </button>
            ))}
          </div>
        </div>
        
        {/* Bottom Horizontal Line */}
        <div 
          className="w-full"
          style={{
            height: '1px',
            backgroundColor: '#E2E8F0',
            width: '100%',
            marginTop: '0px'
          }}
        ></div>
      </section>

      {/* Featured Insight Section */}
      <section className="w-full bg-white pt-8 sm:pt-12 lg:pt-16 pb-12 sm:pb-16 lg:pb-20 xl:pb-24">
        <div className="mx-auto" style={{ maxWidth: '1440px', width: '100%', paddingLeft: '60px', paddingRight: '60px' }}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
            {/* Left Column - Text Content */}
            <div className="flex flex-col">
              {/* Category Label */}
              <div 
                className="text-xs sm:text-sm uppercase tracking-widest mb-3"
                style={{ 
                  color: '#64748B',
                  fontWeight: 500,
                  letterSpacing: '0.1em',
                  marginBottom: '12px'
                }}
              >
                ENGINEERING
              </div>

              {/* Article Title */}
              <h2 
                className="font-bold tracking-[-0.02em] mb-4"
                style={{ 
                  color: '#000000',
                  fontSize: '48px',
                  fontWeight: 600,
                  lineHeight: '1.1',
                  maxWidth: '90%'
                }}
              >
                <span style={{ whiteSpace: 'nowrap' }}>Migrating Legacy</span><br />System: A Strategic<br />Guide
              </h2>

              {/* Description */}
              <p 
                className="text-base sm:text-lg lg:text-xl leading-relaxed mb-6"
                style={{ 
                  color: '#64748B',
                  fontWeight: 400,
                  lineHeight: '1.6',
                  marginTop: '16px',
                  maxWidth: '85%'
                }}
              >
                A comprehensive breakdown on how to update critical infrastructure without downtime or data loss.
              </p>

              {/* Author & Meta Row */}
              <div className="flex items-center gap-2 mt-6" style={{ marginTop: '24px' }}>
                {/* Circular Avatar */}
                <div 
                  className="rounded-full flex-shrink-0"
                  style={{
                    width: '40px',
                    height: '40px',
                    backgroundColor: '#1E293B'
                  }}
                ></div>
                {/* Author Name */}
                <div 
                  className="text-sm sm:text-base font-medium"
                  style={{ 
                    color: '#000000',
                    fontWeight: 500,
                    marginRight: '8px'
                  }}
                >
                  Sarah Chen
                </div>
                {/* Read Time */}
                <div 
                  className="text-xs sm:text-sm"
                  style={{ 
                    color: '#64748B',
                    fontWeight: 500
                  }}
                >
                  3 MIN READ
                </div>
              </div>
            </div>

            {/* Right Column - Feature Image */}
            <div className="w-full lg:w-auto">
              <img 
                src={MigratingImage} 
                alt="Migrating Legacy System"
                className="rounded-2xl"
                style={{
                  width: '640px',
                  height: '456px',
                  filter: 'grayscale(100%)',
                  borderRadius: '16px',
                  objectFit: 'cover',
                  maxWidth: '100%'
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Horizontal Divider Line */}
      <section className="w-full bg-white py-0">
        <div 
          className="w-full"
          style={{
            height: '1px',
            backgroundColor: '#E2E8F0',
            width: '100%'
          }}
        ></div>
      </section>

      {/* Featured Insight Section 2 - AI & Ethics */}
      <section className="w-full bg-white pt-8 sm:pt-12 lg:pt-16 pb-12 sm:pb-16 lg:pb-20 xl:pb-24">
        <div className="mx-auto" style={{ maxWidth: '1440px', width: '100%', paddingLeft: '60px', paddingRight: '60px' }}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
            {/* Left Column - Text Content */}
            <div className="flex flex-col">
              {/* Category Label */}
              <div 
                className="text-xs sm:text-sm uppercase tracking-widest mb-3"
                style={{ 
                  color: '#64748B',
                  fontWeight: 500,
                  letterSpacing: '0.1em',
                  marginBottom: '12px'
                }}
              >
                AI & ETHICS
              </div>

              {/* Article Title */}
              <h2 
                className="font-bold tracking-[-0.02em] mb-4"
                style={{ 
                  color: '#000000',
                  fontSize: '48px',
                  fontWeight: 600,
                  lineHeight: '1.1',
                  maxWidth: '90%'
                }}
              >
                <span style={{ whiteSpace: 'nowrap' }}>The Moral Landscape of</span><br />Automation
              </h2>

              {/* Description */}
              <p 
                className="text-base sm:text-lg lg:text-xl leading-relaxed mb-6"
                style={{ 
                  color: '#64748B',
                  fontWeight: 400,
                  lineHeight: '1.6',
                  marginTop: '16px',
                  maxWidth: '85%'
                }}
              >
                As algorithms make more decisions, the need for transparent and ethical frameworks becomes...
              </p>

              {/* Author & Meta Row */}
              <div className="flex items-center gap-2 mt-6" style={{ marginTop: '24px' }}>
                {/* Circular Avatar */}
                <div 
                  className="rounded-full flex-shrink-0"
                  style={{
                    width: '40px',
                    height: '40px',
                    backgroundColor: '#1E293B'
                  }}
                ></div>
                {/* Author Name */}
                <div 
                  className="text-sm sm:text-base font-medium"
                  style={{ 
                    color: '#000000',
                    fontWeight: 500,
                    marginRight: '8px'
                  }}
                >
                  James Miller
                </div>
                {/* Read Time */}
                <div 
                  className="text-xs sm:text-sm"
                  style={{ 
                    color: '#64748B',
                    fontWeight: 500
                  }}
                >
                  6 MIN READ
                </div>
              </div>
            </div>

            {/* Right Column - Feature Image */}
            <div className="w-full lg:w-auto">
              <img 
                src={TheMoralImage} 
                alt="The Moral Landscape of Automation"
                className="rounded-2xl"
                style={{
                  width: '640px',
                  height: '456px',
                  filter: 'grayscale(100%)',
                  borderRadius: '16px',
                  objectFit: 'cover',
                  maxWidth: '100%'
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Subscription Banner */}
      <section 
        className="w-full py-12 sm:py-16 lg:py-20"
        style={{
          backgroundColor: '#020617',
          borderRight: '1px solid #F1F5F9'
        }}
      >
        <div className="mx-auto" style={{ maxWidth: '1440px', width: '100%', paddingLeft: '60px', paddingRight: '60px' }}>
          <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6 lg:gap-12">
            {/* Left Content */}
            <div className="flex-1">
              {/* Envelope Icon */}
              <div className="mb-4">
                <div 
                  className="rounded-full border-2 flex items-center justify-center"
                  style={{
                    width: '48px',
                    height: '48px',
                    borderColor: '#FFFFFF',
                    color: '#FFFFFF'
                  }}
                >
                  <img 
                    src={MailIcon}
                    alt="Mail"
                    style={{
                      width: '24px',
                      height: '24px',
                      objectFit: 'contain',
                      filter: 'brightness(0) invert(1)'
                    }}
                  />
                </div>
              </div>

              {/* Heading */}
              <h2 
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4"
                style={{ 
                  color: '#FFFFFF',
                  fontWeight: 600,
                  lineHeight: '1.1'
                }}
              >
                Essential Insights,<br />weekly.
              </h2>

              {/* Supporting Text */}
              <p 
                className="text-base sm:text-lg mb-6"
                style={{ 
                  color: '#94A3B8',
                  fontWeight: 400,
                  marginBottom: '24px'
                }}
              >
                Join 40,000+ software leaders receiving our curated breakdown of tech trends.
              </p>

              {/* Email Input and Subscribe Button */}
              <div className="flex flex-col sm:flex-row gap-3 max-w-md">
                <input
                  type="email"
                  placeholder="Email address"
                  className="px-4 py-3 rounded-lg border"
                  style={{
                    backgroundColor: '#1E293B',
                    borderColor: '#334155',
                    color: '#FFFFFF',
                    borderRadius: '8px',
                    fontSize: '16px',
                    flex: 1
                  }}
                />
                <button
                  className="px-6 py-3 rounded-lg font-medium"
                  style={{
                    backgroundColor: '#FFFFFF',
                    color: '#000000',
                    borderRadius: '8px',
                    fontSize: '16px',
                    fontWeight: 500,
                    whiteSpace: 'nowrap'
                  }}
                >
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Article List Section */}
      <section className="w-full bg-white pt-12 sm:pt-16 lg:pt-20 pb-12 sm:pb-16 lg:pb-20 xl:pb-24 relative">
        <div className="mx-auto" style={{ maxWidth: '1440px', width: '100%', paddingLeft: '60px', paddingRight: '60px' }}>
          {/* Article 1 */}
          <div className="relative pb-8 sm:pb-12" style={{ paddingBottom: '48px', marginBottom: '48px' }}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
              {/* Left Column - Text Content */}
              <div className="flex flex-col">
                {/* Category Label */}
                <div 
                  className="text-xs sm:text-sm uppercase tracking-widest mb-3"
                  style={{ 
                    color: '#64748B',
                    fontWeight: 500,
                    letterSpacing: '0.1em',
                    marginBottom: '12px'
                  }}
                >
                  CULTURE
                </div>

                {/* Article Title */}
                <h2 
                  className="font-bold tracking-[-0.02em] mb-3"
                  style={{ 
                    color: '#000000',
                    fontSize: '48px',
                    fontWeight: 600,
                    lineHeight: '1.1'
                  }}
                >
                  The Architecture of Scale
                </h2>

                {/* Meta Text */}
                <div 
                  className="text-sm sm:text-base"
                  style={{ 
                    color: '#64748B',
                    fontWeight: 500
                  }}
                >
                  4 MIN READ
                </div>
              </div>

            {/* Right Column - Image */}
            <div className="w-full lg:w-auto flex justify-end">
              <img 
                src={TheArchitectureImage} 
                alt="The Architecture of Scale"
                style={{
                  width: '336px',
                  height: '200px',
                  filter: 'grayscale(100%)',
                  borderRadius: '0px',
                  objectFit: 'cover'
                }}
              />
            </div>
            </div>
            {/* Full-width horizontal divider */}
            <div 
              className="absolute bottom-0"
              style={{
                height: '1px',
                backgroundColor: '#E2E8F0',
                width: '100vw',
                left: '50%',
                transform: 'translateX(-50%)'
              }}
            ></div>
          </div>

          {/* Article 2 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
            {/* Left Column - Text Content */}
            <div className="flex flex-col">
              {/* Category Label */}
              <div 
                className="text-xs sm:text-sm uppercase tracking-widest mb-3"
                style={{ 
                  color: '#64748B',
                  fontWeight: 500,
                  letterSpacing: '0.1em',
                  marginBottom: '12px'
                }}
              >
                DATA
              </div>

              {/* Article Title */}
              <h2 
                className="font-bold tracking-[-0.02em] mb-3"
                style={{ 
                  color: '#000000',
                  fontSize: '48px',
                  fontWeight: 600,
                  lineHeight: '1.1'
                }}
              >
                <span style={{ whiteSpace: 'nowrap' }}>Visualizing Complex Systems</span>
              </h2>

                {/* Meta Text */}
                <div 
                  className="text-sm sm:text-base"
                  style={{ 
                    color: '#64748B',
                    fontWeight: 500
                  }}
                >
                  7 MIN READ
                </div>
            </div>

            {/* Right Column - Image */}
            <div className="w-full lg:w-auto flex justify-end">
              <img 
                src={VisulizingImage} 
                alt="Visualizing Complex Systems"
                style={{
                  width: '336px',
                  height: '200px',
                  filter: 'grayscale(100%)',
                  borderRadius: '0px',
                  objectFit: 'cover'
                }}
              />
            </div>
          </div>
      </div>
      </section>
    </main>
  );
};

export default Insights;
