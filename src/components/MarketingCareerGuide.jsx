import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faChartLine, faBullseye, faLightbulb, faChartPie, faBriefcase, 
  faCalendarAlt, faRocket, faUsers, faCertificate,
  faEnvelope, faPhone, faGlobe, faHandshake, faComments,
  faMagnet, faSearch, faTools, faAd, faChartBar, faLaptopCode, 
  faGraduationCap, faCheckCircle, faPen
} from "@fortawesome/free-solid-svg-icons";
import { faTwitter, faInstagram, faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

// Background blob component for visual interest
const PageBackground = () => {
  return (
    <div style={styles.backgroundContainer}>
      <div style={{...styles.blob, top: '5%', left: '5%', background: 'radial-gradient(circle at 30% 30%, rgba(14, 165, 233, 0.05), rgba(14, 165, 233, 0.01))'}}/>
      <div style={{...styles.blob, top: '40%', right: '5%', background: 'radial-gradient(circle at 70% 70%, rgba(14, 165, 233, 0.04), rgba(14, 165, 233, 0.01))'}}/>
      <div style={{...styles.blob, bottom: '10%', left: '25%', background: 'radial-gradient(circle at 50% 50%, rgba(14, 165, 233, 0.03), rgba(14, 165, 233, 0.01))'}}/>
    </div>
  );
};

const MarketingCareerGuide = () => {
  const [activePage, setActivePage] = useState(0);
  
  const pages = [
    { id: 0, title: "Home" },
    { id: 1, title: "Paths" },
    { id: 2, title: "Skills" },
    { id: 3, title: "Tools" },
    { id: 4, title: "Salary" },
    { id: 5, title: "Plan" },
    { id: 6, title: "Connect" }
  ];
  
  const renderPage = () => {
    switch(activePage) {
      case 0: return <HomePage />;
      case 1: return <PathsPage />;
      case 2: return <SkillsPage />;
      case 3: return <ToolsPage />;
      case 4: return <SalaryPage />;
      case 5: return <PlanPage />;
      case 6: return <ConnectPage />;
      default: return <HomePage />;
    }
  };

  return (
    <div style={styles.container}>
      <PageBackground />
      <div style={styles.nav}>
        {pages.map(page => (
          <button 
            key={page.id}
            style={activePage === page.id ? styles.activeTab : styles.tab}
            onClick={() => setActivePage(page.id)}
          >
            {page.title}
          </button>
        ))}
      </div>
      
      <div style={styles.content}>
        {renderPage()}
      </div>
    </div>
  );
};

const HomePage = () => {
  return (
    <div style={styles.page}>
      <div style={styles.heroContainer}>
        {/* Hero SVG Background */}
        <div style={styles.svgBackground}>
          <svg width="100%" height="100%" viewBox="0 0 800 400" preserveAspectRatio="xMidYMid slice">
            <defs>
              <linearGradient id="heroGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#080b14" stopOpacity="0.7" />
                <stop offset="100%" stopColor="#080b14" stopOpacity="0.9" />
              </linearGradient>
              <radialGradient id="spotlight" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
                <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.2" />
                <stop offset="100%" stopColor="#080b14" stopOpacity="0" />
              </radialGradient>
              <filter id="glow">
                <feGaussianBlur stdDeviation="8" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(59, 130, 246, 0.05)" strokeWidth="1"/>
              </pattern>
            </defs>
            <rect x="0" y="0" width="100%" height="100%" fill="url(#heroGradient)" />
            <rect x="0" y="0" width="100%" height="100%" fill="url(#grid)" />
            <circle cx="150" cy="120" r="120" fill="url(#spotlight)" filter="url(#glow)" />
            <circle cx="650" cy="200" r="180" fill="url(#spotlight)" filter="url(#glow)" />
            <circle cx="400" cy="320" r="100" fill="url(#spotlight)" filter="url(#glow)" opacity="0.5" />
            <path d="M0,250 Q200,150 400,250 T800,200 V400 H0 Z" fill="#080b14" opacity="0.8" />
          </svg>
        </div>
        <div style={styles.svgOverlay}></div>
        
        <div style={styles.heroContent}>
          <div style={styles.heroBorder}>
            <h1 style={styles.heroTitle}>MARKETING CAREERS</h1>
            <div style={styles.heroAccent}>
              <FontAwesomeIcon icon={faChartLine} style={styles.heroAccentIcon} />
              <h2 style={styles.heroSubtitle}>INDIA 2025</h2>
              <FontAwesomeIcon icon={faChartLine} style={styles.heroAccentIcon} />
            </div>
            <p style={styles.heroTagline}>The essential guide for fresh graduates</p>
            
            <div style={styles.heroIconsRow}>
              <div style={styles.heroIconBox}>
                <FontAwesomeIcon icon={faChartPie} style={styles.heroIcon} />
                <span style={styles.heroIconLabel}>Analysis</span>
              </div>
              <div style={styles.heroIconBox}>
                <FontAwesomeIcon icon={faBullseye} style={styles.heroIcon} />
                <span style={styles.heroIconLabel}>Strategy</span>
              </div>
              <div style={styles.heroIconBox}>
                <FontAwesomeIcon icon={faLightbulb} style={styles.heroIcon} />
                <span style={styles.heroIconLabel}>Creativity</span>
              </div>
              <div style={styles.heroIconBox}>
                <FontAwesomeIcon icon={faUsers} style={styles.heroIcon} />
                <span style={styles.heroIconLabel}>Community</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div style={styles.statsGrid}>
        <div style={styles.statBox}>
          <FontAwesomeIcon icon={faChartLine} style={styles.statIcon} />
          <h3 style={styles.statNumber}>40%</h3>
          <p style={styles.statLabel}>Growth in digital marketing roles</p>
        </div>
        
        <div style={styles.statBox}>
          <FontAwesomeIcon icon={faBriefcase} style={styles.statIcon} />
          <h3 style={styles.statNumber}>₹4.8L</h3>
          <p style={styles.statLabel}>Average entry-level salary</p>
        </div>
        
        <div style={styles.statBox}>
          <FontAwesomeIcon icon={faCalendarAlt} style={styles.statIcon} />
          <h3 style={styles.statNumber}>90</h3>
          <p style={styles.statLabel}>Days to job-ready skills</p>
        </div>
        
        <div style={styles.statBox}>
          <FontAwesomeIcon icon={faCertificate} style={styles.statIcon} />
          <h3 style={styles.statNumber}>5+</h3>
          <p style={styles.statLabel}>Key certifications</p>
        </div>
      </div>

      <div style={styles.authorBanner}>
        <div style={styles.authorAvatarContainer}>
          <div style={styles.authorAvatar}>AB</div>
        </div>
        <div style={styles.authorInfo}>
          <div style={styles.authorMeta}>
            <h3 style={styles.authorName}>Amit Bhalla</h3>
            <p style={styles.authorTitle}>Marketing Strategist</p>
          </div>
          <a 
            href="https://www.linkedin.com/in/bhalla-amit/" 
            target="_blank" 
            rel="noopener noreferrer" 
            style={styles.authorLinkedIn}
          >
            <FontAwesomeIcon icon={faLinkedin} /> Connect on LinkedIn
          </a>
        </div>
      </div>
    </div>
  );
};

const PathsPage = () => {
  return (
    <div style={styles.page}>
      <h2 style={styles.pageTitle}>Career Paths</h2>
      <p style={styles.pageSubtitle}>High-growth specializations for fresh graduates</p>

      <div style={styles.pathGrid}>
        <div style={styles.pathCard}>
          <div style={styles.pathHeader}>
            <div style={styles.pathIcon}>
              <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"></polygon>
              </svg>
            </div>
            <div>
              <h3 style={styles.pathTitle}>Performance Marketing</h3>
              <div style={styles.pathTag}>+38% YoY</div>
            </div>
          </div>
          
          <p style={styles.pathDesc}>Drive measurable results through paid campaigns on search, social, and display channels.</p>
          
          <div style={styles.pathMeta}>
            <div style={styles.pathMetaItem}>
              <span style={styles.metaLabel}>Starting Role</span>
              <span style={styles.metaValue}>Performance Marketing Associate</span>
            </div>
            <div style={styles.pathMetaItem}>
              <span style={styles.metaLabel}>Salary Range</span>
              <span style={styles.metaValue}>₹4-6 Lakhs</span>
            </div>
          </div>
        </div>

        <div style={styles.pathCard}>
          <div style={styles.pathHeader}>
            <div style={styles.pathIcon}>
              <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
              </svg>
            </div>
            <div>
              <h3 style={styles.pathTitle}>Content Marketing</h3>
              <div style={styles.pathTag}>+32% YoY</div>
            </div>
          </div>
          
          <p style={styles.pathDesc}>Create strategic content that attracts, educates, and converts audiences across channels.</p>
          
          <div style={styles.pathMeta}>
            <div style={styles.pathMetaItem}>
              <span style={styles.metaLabel}>Starting Role</span>
              <span style={styles.metaValue}>Content Marketing Associate</span>
            </div>
            <div style={styles.pathMetaItem}>
              <span style={styles.metaLabel}>Salary Range</span>
              <span style={styles.metaValue}>₹3.5-5 Lakhs</span>
            </div>
          </div>
        </div>
      </div>

      <div style={styles.pathGrid}>
        <div style={styles.pathCard}>
          <div style={styles.pathHeader}>
            <div style={styles.pathIcon}>
              <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21.21 15.89A10 10 0 1 1 8 2.83"></path>
                <path d="M22 12A10 10 0 0 0 12 2v10z"></path>
              </svg>
            </div>
            <div>
              <h3 style={styles.pathTitle}>Marketing Analytics</h3>
              <div style={styles.pathTag}>+45% YoY</div>
            </div>
          </div>
          
          <p style={styles.pathDesc}>Transform marketing data into actionable insights that drive strategy and growth.</p>
          
          <div style={styles.pathMeta}>
            <div style={styles.pathMetaItem}>
              <span style={styles.metaLabel}>Starting Role</span>
              <span style={styles.metaValue}>Marketing Data Analyst</span>
            </div>
            <div style={styles.pathMetaItem}>
              <span style={styles.metaLabel}>Salary Range</span>
              <span style={styles.metaValue}>₹4.5-7 Lakhs</span>
            </div>
          </div>
        </div>

        <div style={styles.pathCard}>
          <div style={styles.pathHeader}>
            <div style={styles.pathIcon}>
              <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path>
                <line x1="7" y1="7" x2="7.01" y2="7"></line>
              </svg>
            </div>
            <div>
              <h3 style={styles.pathTitle}>Brand Marketing</h3>
              <div style={styles.pathTag}>+25% YoY</div>
            </div>
          </div>
          
          <p style={styles.pathDesc}>Build and evolve brand identities that connect with audiences on emotional levels.</p>
          
          <div style={styles.pathMeta}>
            <div style={styles.pathMetaItem}>
              <span style={styles.metaLabel}>Starting Role</span>
              <span style={styles.metaValue}>Brand Associate</span>
            </div>
            <div style={styles.pathMetaItem}>
              <span style={styles.metaLabel}>Salary Range</span>
              <span style={styles.metaValue}>₹4-5.5 Lakhs</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const SkillsPage = () => {
  return (
    <div style={styles.page}>
      <h2 style={styles.pageTitle}>Key Skills</h2>
      <p style={styles.pageSubtitle}>Master these capabilities to stand out in applications</p>

      <div style={styles.skillSectionTitle}>
        <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" style={{marginRight: '8px'}}>
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
          <polyline points="22 4 12 14.01 9 11.01"></polyline>
        </svg>
        <span>Technical Skills</span>
      </div>
      
      <div style={styles.skillsGrid}>
        <div style={styles.skillCard}>
          <div style={styles.skillHeader}>
            <div style={styles.skillIcon}>
              <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17 18a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v9z"></path>
                <polyline points="15 2 22 2 22 9"></polyline>
                <line x1="15" y1="9" x2="22" y2="2"></line>
              </svg>
            </div>
            <h3 style={styles.skillTitle}>Digital Advertising</h3>
            <div style={styles.essentialTag}>Essential</div>
          </div>
          <p style={styles.skillDesc}>Create and optimize campaigns across ad platforms.</p>
          <p style={styles.skillToolsRequired}>Tools: Google Ads, Meta Ads Manager, Analytics</p>
        </div>

        <div style={styles.skillCard}>
          <div style={styles.skillHeader}>
            <div style={styles.skillIcon}>
              <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21.21 15.89A10 10 0 1 1 8 2.83"></path>
                <path d="M22 12A10 10 0 0 0 12 2v10z"></path>
              </svg>
            </div>
            <h3 style={styles.skillTitle}>Marketing Analytics</h3>
            <div style={styles.essentialTag}>Essential</div>
          </div>
          <p style={styles.skillDesc}>Measure campaign performance and extract insights.</p>
          <p style={styles.skillToolsRequired}>Tools: GA4, Excel, SQL basics, Looker Studio</p>
        </div>
      </div>

      <div style={styles.skillsGrid}>
        <div style={styles.skillCard}>
          <div style={styles.skillHeader}>
            <div style={styles.skillIcon}>
              <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
              </svg>
            </div>
            <h3 style={styles.skillTitle}>Content Creation</h3>
            <div style={styles.importantTag}>Important</div>
          </div>
          <p style={styles.skillDesc}>Develop compelling content across formats.</p>
          <p style={styles.skillToolsRequired}>Tools: Canva, Figma basics, WordPress, SEO tools</p>
        </div>

        <div style={styles.skillCard}>
          <div style={styles.skillHeader}>
            <div style={styles.skillIcon}>
              <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
                <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
              </svg>
            </div>
            <h3 style={styles.skillTitle}>Social Media</h3>
            <div style={styles.importantTag}>Important</div>
          </div>
          <p style={styles.skillDesc}>Build brand presence across relevant platforms.</p>
          <p style={styles.skillToolsRequired}>Tools: Meta Suite, Buffer/Hootsuite, Canva, Analytics</p>
        </div>
      </div>

      <div style={styles.skillSectionTitle}>
        <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" style={{marginRight: '8px'}}>
          <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path>
        </svg>
        <span>Soft Skills</span>
      </div>
      
      <div style={styles.skillsGrid}>
        <div style={styles.skillCard}>
          <div style={styles.skillHeader}>
            <div style={styles.skillIcon}>
              <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
                <line x1="12" y1="22.08" x2="12" y2="12"></line>
              </svg>
            </div>
            <h3 style={styles.skillTitle}>Data Storytelling</h3>
            <div style={styles.essentialTag}>Essential</div>
          </div>
          <p style={styles.skillDesc}>Transform complex data into compelling narratives.</p>
          <p style={styles.skillToolsRequired}>Tools: Excel, PowerPoint, visualization software</p>
        </div>

        <div style={styles.skillCard}>
          <div style={styles.skillHeader}>
            <div style={styles.skillIcon}>
              <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3z"></path>
              </svg>
            </div>
            <h3 style={styles.skillTitle}>Adaptability</h3>
            <div style={styles.essentialTag}>Essential</div>
          </div>
          <p style={styles.skillDesc}>Quickly adjust to new tools and approaches.</p>
          <p style={styles.skillToolsRequired}>Knowledge: Continuous learning, tech-savviness</p>
        </div>
      </div>
    </div>
  );
};

const ToolsPage = () => {
  return (
    <div style={styles.page}>
      <h2 style={styles.pageTitle}>Essential Tools</h2>
      <p style={styles.pageSubtitle}>Master these platforms to get hired faster</p>

      <div style={styles.sectionTitle}>
        <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" style={{marginRight: '8px'}}>
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
          <polyline points="22 4 12 14.01 9 11.01"></polyline>
        </svg>
        <span>Must-Have Certifications</span>
      </div>
      
      <div style={styles.certGrid}>
        <div style={styles.certCard}>
          <div style={styles.certBadge}>GA4</div>
          <div style={styles.certInfo}>
            <h3 style={styles.certTitle}>Google Analytics 4</h3>
            <p style={styles.certProvider}>By Google • Free • 4-6 hrs</p>
            <div style={styles.certImpact}>Very High Impact</div>
          </div>
        </div>
        
        <div style={styles.certCard}>
          <div style={styles.certBadge}>META</div>
          <div style={styles.certInfo}>
            <h3 style={styles.certTitle}>Meta Blueprint</h3>
            <p style={styles.certProvider}>By Meta • Free-₹3k • 5-8 hrs</p>
            <div style={styles.certImpact}>Very High Impact</div>
          </div>
        </div>
      </div>

      <div style={styles.toolGrid}>
        <div style={styles.toolCategory}>
          <div style={styles.toolHeader}>
            <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" style={{marginRight: '8px'}}>
              <circle cx="12" cy="12" r="10"></circle>
              <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"></polygon>
            </svg>
            <h3 style={styles.toolTitle}>Advertising</h3>
          </div>
          <div style={styles.toolItems}>
            <div style={styles.toolItem}>
              <span style={styles.toolName}>Google Ads</span>
              <span style={styles.toolTag}>Must Know</span>
            </div>
            <div style={styles.toolItem}>
              <span style={styles.toolName}>Meta Ads Manager</span>
              <span style={styles.toolTag}>Must Know</span>
            </div>
            <div style={styles.toolItem}>
              <span style={styles.toolName}>LinkedIn Campaign Manager</span>
              <span style={styles.toolTagSecondary}>Important</span>
            </div>
            <div style={styles.toolItem}>
              <span style={styles.toolName}>Twitter Ads</span>
              <span style={styles.toolTagSecondary}>Important</span>
            </div>
          </div>
        </div>
        
        <div style={styles.toolCategory}>
          <div style={styles.toolHeader}>
            <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" style={{marginRight: '8px'}}>
              <path d="M21.21 15.89A10 10 0 1 1 8 2.83"></path>
              <path d="M22 12A10 10 0 0 0 12 2v10z"></path>
            </svg>
            <h3 style={styles.toolTitle}>Analytics</h3>
          </div>
          <div style={styles.toolItems}>
            <div style={styles.toolItem}>
              <span style={styles.toolName}>Google Analytics 4</span>
              <span style={styles.toolTag}>Must Know</span>
            </div>
            <div style={styles.toolItem}>
              <span style={styles.toolName}>Looker Studio</span>
              <span style={styles.toolTagSecondary}>Important</span>
            </div>
            <div style={styles.toolItem}>
              <span style={styles.toolName}>Google Tag Manager</span>
              <span style={styles.toolTagSecondary}>Important</span>
            </div>
            <div style={styles.toolItem}>
              <span style={styles.toolName}>Hotjar/Heatmaps</span>
              <span style={styles.toolTagSecondary}>Important</span>
            </div>
          </div>
        </div>
      </div>

      <div style={{...styles.toolGrid, marginTop: '16px'}}>
        <div style={styles.toolCategory}>
          <div style={styles.toolHeader}>
            <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" style={{marginRight: '8px'}}>
              <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
              <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
            </svg>
            <h3 style={styles.toolTitle}>Content & Design</h3>
          </div>
          <div style={styles.toolItems}>
            <div style={styles.toolItem}>
              <span style={styles.toolName}>Canva</span>
              <span style={styles.toolTag}>Must Know</span>
            </div>
            <div style={styles.toolItem}>
              <span style={styles.toolName}>WordPress</span>
              <span style={styles.toolTagSecondary}>Important</span>
            </div>
            <div style={styles.toolItem}>
              <span style={styles.toolName}>Figma (basics)</span>
              <span style={styles.toolTagSecondary}>Important</span>
            </div>
          </div>
        </div>
        
        <div style={styles.toolCategory}>
          <div style={styles.toolHeader}>
            <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" style={{marginRight: '8px'}}>
              <circle cx="18" cy="18" r="3"></circle>
              <circle cx="6" cy="6" r="3"></circle>
              <path d="M13 6h3a2 2 0 0 1 2 2v7"></path>
              <line x1="6" y1="9" x2="6" y2="21"></line>
            </svg>
            <h3 style={styles.toolTitle}>Automation & CRM</h3>
          </div>
          <div style={styles.toolItems}>
            <div style={styles.toolItem}>
              <span style={styles.toolName}>HubSpot (free tier)</span>
              <span style={styles.toolTag}>Must Know</span>
            </div>
            <div style={styles.toolItem}>
              <span style={styles.toolName}>Mailchimp</span>
              <span style={styles.toolTagSecondary}>Important</span>
            </div>
            <div style={styles.toolItem}>
              <span style={styles.toolName}>Zapier (basics)</span>
              <span style={styles.toolTagSecondary}>Important</span>
            </div>
          </div>
        </div>
      </div>

      <div style={styles.toolNote}>
        <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" style={{marginRight: '8px', flexShrink: 0}}>
          <circle cx="12" cy="12" r="10"></circle>
          <line x1="12" y1="8" x2="12" y2="12"></line>
          <line x1="12" y1="16" x2="12.01" y2="16"></line>
        </svg>
        <span>Pro Tip: Create free accounts on all platforms and complete their tutorials to build practical knowledge</span>
      </div>
    </div>
  );
};

const SalaryPage = () => {
  return (
    <div style={styles.page}>
      <h2 style={styles.pageTitle}>Salary Guide</h2>
      <p style={styles.pageSubtitle}>2025 compensation for marketing roles</p>

      <div style={styles.sectionTitle}>
        <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" style={{marginRight: '8px'}}>
          <line x1="12" y1="1" x2="12" y2="23"></line>
          <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
        </svg>
        <span>Entry-Level Salaries</span>
      </div>
      
      <div style={styles.salaryTable}>
        <div style={styles.tableHeader}>
          <div style={{...styles.headerCell, width: '35%'}}>Role</div>
          <div style={{...styles.headerCell, width: '20%'}}>Industry</div>
          <div style={styles.headerCell}>Average</div>
          <div style={styles.headerCell}>Range</div>
          <div style={styles.headerCell}>Growth</div>
        </div>
        
        <div style={styles.tableRow}>
          <div style={{...styles.tableCell, width: '35%'}}>Performance Marketing Associate</div>
          <div style={{...styles.tableCell, width: '20%'}}>E-commerce, SaaS</div>
          <div style={styles.tableCell}>₹4.8L</div>
          <div style={styles.tableCell}>₹4-6L</div>
          <div style={styles.tableCell}>+12%</div>
        </div>
        
        <div style={styles.tableRow}>
          <div style={{...styles.tableCell, width: '35%'}}>Content Marketing Associate</div>
          <div style={{...styles.tableCell, width: '20%'}}>Media, EdTech</div>
          <div style={styles.tableCell}>₹4.2L</div>
          <div style={styles.tableCell}>₹3.5-5L</div>
          <div style={styles.tableCell}>+9%</div>
        </div>
        
        <div style={styles.tableRow}>
          <div style={{...styles.tableCell, width: '35%'}}>Marketing Data Analyst</div>
          <div style={{...styles.tableCell, width: '20%'}}>FinTech, Healthcare</div>
          <div style={styles.tableCell}>₹5.3L</div>
          <div style={styles.tableCell}>₹4.5-7L</div>
          <div style={styles.tableCell}>+15%</div>
        </div>
        
        <div style={styles.tableRow}>
          <div style={{...styles.tableCell, width: '35%'}}>Social Media Specialist</div>
          <div style={{...styles.tableCell, width: '20%'}}>D2C, Entertainment</div>
          <div style={styles.tableCell}>₹3.8L</div>
          <div style={styles.tableCell}>₹3-4.5L</div>
          <div style={styles.tableCell}>+7%</div>
        </div>
      </div>

      <div style={styles.sectionTitle}>
        <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" style={{marginRight: '8px'}}>
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
          <circle cx="12" cy="10" r="3"></circle>
        </svg>
        <span>Salary by Location</span>
      </div>
      
      <div style={styles.locationGrid}>
        <div style={styles.locationCard}>
          <h3 style={styles.locationName}>Bangalore</h3>
          <div style={styles.locationIndex}>100%</div>
          <div style={styles.locationDemand}>Very High Demand</div>
        </div>
        
        <div style={styles.locationCard}>
          <h3 style={styles.locationName}>Mumbai</h3>
          <div style={styles.locationIndex}>95%</div>
          <div style={styles.locationDemand}>High Demand</div>
        </div>
        
        <div style={styles.locationCard}>
          <h3 style={styles.locationName}>Delhi NCR</h3>
          <div style={styles.locationIndex}>90%</div>
          <div style={styles.locationDemand}>High Demand</div>
        </div>
        
        <div style={styles.locationCard}>
          <h3 style={styles.locationName}>Hyderabad</h3>
          <div style={styles.locationIndex}>85%</div>
          <div style={styles.locationDemand}>Medium Demand</div>
        </div>
      </div>
    </div>
  );
};

const PlanPage = () => {
  return (
    <div style={styles.page}>
      <h2 style={styles.pageTitle}>90-Day Plan</h2>
      <p style={styles.pageSubtitle}>Your roadmap to marketing employment</p>

      <div style={styles.timelineContainer}>
        <div style={styles.timelinePhase}>
          <div style={styles.phaseHeader}>
            <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" style={{marginRight: '8px'}}>
              <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
            </svg>
            <span>Phase 1: Days 1-30</span>
          </div>
          
          <div style={styles.phaseContent}>
            <div style={styles.timelineCard}>
              <div style={styles.timelineCardHeader}>Core Certifications</div>
              <ul style={styles.timelineList}>
                <li>Google Analytics 4 certification</li>
                <li>Meta Blueprint fundamentals</li>
                <li><span style={styles.tipText}>Tip: Schedule 2 hours daily for consistent progress</span></li>
              </ul>
            </div>
            
            <div style={styles.timelineCard}>
              <div style={styles.timelineCardHeader}>Professional Profiles</div>
              <ul style={styles.timelineList}>
                <li>Optimized LinkedIn profile with SEO keywords</li>
                <li>Simple portfolio site with 2-3 mock projects</li>
                <li><span style={styles.tipText}>Tip: Add a professional headshot for 40% more profile views</span></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div style={styles.timelinePhase}>
          <div style={styles.phaseHeader}>
            <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" style={{marginRight: '8px'}}>
              <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
            </svg>
            <span>Phase 2: Days 31-60</span>
          </div>
          
          <div style={styles.phaseContent}>
            <div style={styles.timelineCard}>
              <div style={styles.timelineCardHeader}>Sample Projects</div>
              <ul style={styles.timelineList}>
                <li>3 sample ad campaigns with metrics</li>
                <li>Analytics dashboard with actionable insights</li>
                <li><span style={styles.tipText}>Tip: Focus on real business problems, not just vanity metrics</span></li>
              </ul>
            </div>
            
            <div style={styles.timelineCard}>
              <div style={styles.timelineCardHeader}>Network Building</div>
              <ul style={styles.timelineList}>
                <li>Connect with 20+ marketing professionals</li>
                <li>Join 3 marketing communities</li>
                <li><span style={styles.tipText}>Tip: Comment on posts before requesting connections</span></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div style={styles.timelinePhase}>
          <div style={styles.phaseHeader}>
            <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" style={{marginRight: '8px'}}>
              <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
            </svg>
            <span>Phase 3: Days 61-90</span>
          </div>
          
          <div style={styles.phaseContent}>
            <div style={styles.timelineCard}>
              <div style={styles.timelineCardHeader}>Application Materials</div>
              <ul style={styles.timelineList}>
                <li>ATS-optimized resume with metrics</li>
                <li>Prepare for common interview questions</li>
                <li><span style={styles.tipText}>Tip: Tailor resume for each role with matching keywords</span></li>
              </ul>
            </div>
            
            <div style={styles.timelineCard}>
              <div style={styles.timelineCardHeader}>Job Hunt</div>
              <ul style={styles.timelineList}>
                <li>Apply to 40+ positions</li>
                <li>Send 15+ targeted outreach messages</li>
                <li><span style={styles.tipText}>Tip: Apply within 24 hours of job posting for 8x response rate</span></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div style={styles.planNote}>
        <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" style={{marginRight: '8px', flexShrink: 0}}>
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
          <polyline points="22 4 12 14.01 9 11.01"></polyline>
        </svg>
        <span>Pro Insight: The highest success rate comes from focusing 70% on networking and 30% on job applications</span>
      </div>
    </div>
  );
};

const ConnectPage = () => {
  return (
    <div style={styles.page}>
      <PageBackground />
      <div style={styles.connectHeader}>
        <h2 style={styles.connectTitle}>Let's Connect</h2>
        <div style={styles.connectTitleAccent}>
          <div style={styles.connectTitleLine}></div>
          <FontAwesomeIcon icon={faHandshake} style={styles.connectTitleIcon} />
          <div style={styles.connectTitleLine}></div>
        </div>
      </div>
      
      <div style={styles.connectCardWrapper}>
        <div style={styles.connectCard}>
          <div style={styles.connectAvatarSection}>
            <div style={styles.connectAvatar}>AB</div>
            <h3 style={styles.connectName}>Amit Bhalla</h3>
            <p style={styles.connectRole}>Marketing Strategist & Career Coach</p>
            
            <div style={styles.connectContactInfo}>
              <div style={styles.connectContactItem}>
                <FontAwesomeIcon icon={faEnvelope} style={styles.connectContactIcon} />
                <span>amit9815@gmail.com</span>
              </div>
              <div style={styles.connectContactItem}>
                <FontAwesomeIcon icon={faGlobe} style={styles.connectContactIcon} />
                <span>amitbhalla.github.io/mktstart</span>
              </div>
            </div>
          </div>
          
          <div style={styles.connectDivider}></div>
          
          <div style={styles.connectMessageSection}>
            <div style={styles.connectMessageHeader}>
              <FontAwesomeIcon icon={faComments} style={styles.connectMessageIcon} />
              <h4 style={styles.connectMessageTitle}>Thank You</h4>
            </div>
            
            <p style={styles.connectMessageText}>
              Thank you for exploring this marketing career guide. I've designed this resource to help you navigate the exciting world of marketing in 2025 and beyond.
            </p>
            
            <p style={styles.connectMessageText}>
              Success in this field comes from continuous learning and building meaningful connections. I'm here to support your journey.
            </p>
            
            <div style={styles.connectActions}>
              <a 
                href="https://www.linkedin.com/in/bhalla-amit/" 
                target="_blank" 
                rel="noopener noreferrer" 
                style={styles.connectButton}
              >
                <FontAwesomeIcon icon={faLinkedin} style={styles.connectButtonIcon} />
                <span>Connect on LinkedIn</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  // Container
  container: {
    fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    maxWidth: '800px', 
    margin: '0 auto',
    padding: '20px',
    position: 'relative',
    color: '#E2E8F0',
    minHeight: '100vh',
    backgroundColor: '#080b14',
    position: 'relative'
  },
  
  // Background blobs
  backgroundContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 0,
    overflow: 'hidden',
    pointerEvents: 'none', // This ensures clicks pass through to elements below
    background: 'linear-gradient(60deg, rgba(15, 17, 23, 1) 0%, rgba(30, 35, 50, 1) 100%)'
  },
  blob: {
    position: 'absolute',
    width: '400px',
    height: '400px',
    borderRadius: '50%',
    filter: 'blur(100px)',
    opacity: 0.2,
    zIndex: 0
  },
  
  // Navigation
  nav: {
    display: 'flex',
    justifyContent: 'center',
    padding: '16px 16px 0 16px',
    backgroundColor: 'rgba(15, 17, 23, 0.8)',
    borderBottom: '1px solid rgba(59, 130, 246, 0.2)',
    backdropFilter: 'blur(10px)',
    position: 'relative',
    zIndex: 2 // Ensure navigation is above the background
  },
  tab: {
    padding: '10px 18px',
    margin: '0 4px',
    fontSize: '14px',
    fontWeight: '500',
    color: '#94A3B8',
    background: 'none',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
    transition: 'all 0.2s ease'
  },
  activeTab: {
    padding: '10px 18px',
    margin: '0 4px',
    fontSize: '14px',
    fontWeight: '600',
    color: '#3B82F6',
    background: 'rgba(30, 41, 59, 0.5)',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
    boxShadow: '0 0 10px rgba(59, 130, 246, 0.2)'
  },
  
  // Content area
  content: {
    flex: '1',
    overflow: 'auto',
    backgroundColor: '#080b14',
    position: 'relative',
    zIndex: 1
  },
  
  // Page
  page: {
    padding: '24px',
    height: '100%',
    backgroundColor: '#080b14',
    color: '#E2E8F0'
  },
  pageTitle: {
    fontSize: '28px',
    fontWeight: '700',
    color: '#F8FAFC',
    margin: '0 0 4px 0',
    letterSpacing: '-0.02em'
  },
  pageSubtitle: {
    fontSize: '14px',
    color: '#94A3B8',
    margin: '0 0 24px 0'
  },
  
  // Hero section - Home page
  heroContainer: {
    position: 'relative',
    height: '380px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    marginBottom: '30px',
    borderRadius: '8px',
    background: '#0F172A',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
  },
  svgBackground: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 1,
    width: '100%',
    height: '100%',
    backgroundColor: '#080b14',
  },
  svgOverlay: {
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(8, 11, 20, 0.85)',
      backgroundImage: 'linear-gradient(125deg, rgba(59, 130, 246, 0.15), rgba(8, 11, 20, 0.95))',
  },
  heroContent: {
    position: 'relative',
    zIndex: 2,
    textAlign: 'center',
    padding: '20px',
    maxWidth: '750px',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
  },
  heroBorder: {
    border: '1px solid rgba(59, 130, 246, 0.15)',
    borderRadius: '12px',
    padding: '40px 30px',
    backgroundColor: 'rgba(8, 11, 20, 0.7)',
    backdropFilter: 'blur(10px)',
    boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3), 0 0 20px rgba(59, 130, 246, 0.1)',
    width: '100%',
  },
  heroTitle: {
    fontSize: '2.8rem',
    marginBottom: '15px',
    color: '#ffffff',
    fontWeight: '800',
    letterSpacing: '0.5px',
    backgroundImage: 'linear-gradient(90deg, #E2E8F0, #3B82F6)',
    backgroundClip: 'text',
    WebkitBackgroundClip: 'text', 
    WebkitTextFillColor: 'transparent',
  },
  heroAccent: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '15px',
    marginBottom: '20px',
  },
  heroAccentIcon: {
    color: '#3B82F6',
    fontSize: '0.8rem',
  },
  heroSubtitle: {
    fontSize: '1.4rem',
    color: '#3B82F6',
    fontWeight: '500',
    letterSpacing: '3px',
    margin: 0,
  },
  heroTagline: {
    fontSize: '1.1rem',
    color: '#94A3B8',
    marginBottom: '25px',
    fontWeight: '400',
    maxWidth: '600px',
    margin: '0 auto 30px auto',
    lineHeight: '1.5',
  },
  heroIconsRow: {
    display: 'flex',
    justifyContent: 'center',
    gap: '30px',
    marginTop: '30px',

    width: '100%',
  },
  heroIconBox: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '15px 25px',
    borderRadius: '10px',
    
    
    minWidth: '120px',
    transition: 'all 0.3s ease',
    '&:hover': {
      backgroundColor: 'rgba(30, 41, 59, 0.5)',
      boxShadow: '0 4px 12px rgba(59, 130, 246, 0.1)',
      transform: 'translateY(-2px)'
    }
  },
  heroIcon: {
    fontSize: '1.8rem',
    color: '#3B82F6',
    marginBottom: '12px',
  },
  heroIconLabel: {
    margin: '10px auto',
    fontSize: '0.95rem',
    color: '#E2E8F0',
    fontWeight: '500',
  },
  statsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
    gap: '15px',
    marginBottom: '30px',
  },
  statBox: {
    backgroundColor: 'rgba(15, 23, 42, 0.6)',
    padding: '20px 15px',
    borderRadius: '12px',
    border: '1px solid rgba(59, 130, 246, 0.1)',
    boxShadow: '0 8px 20px rgba(0, 0, 0, 0.15)',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    backdropFilter: 'blur(8px)',
    alignItems: 'center',
    transition: 'transform 0.3s ease',
    '&:hover': {
      transform: 'translateY(-5px)',
    },
  },
  statIcon: {
    fontSize: '1.5rem',
    color: '#0EA5E9',
    marginBottom: '10px',
  },
  statNumber: {
    fontSize: '1.6rem',
    fontWeight: 'bold',
    margin: '5px 0',
    color: '#E2E8F0',
  },
  statLabel: {
    fontSize: '0.8rem',
    color: '#94A3B8',
    margin: 0,
    lineHeight: '1.2',
  },
  authorBanner: {
    display: 'flex',
    alignItems: 'center',
    gap: '20px',
    backgroundColor: 'rgba(15, 23, 42, 0.6)',
    borderRadius: '12px',
    padding: '20px',
    boxShadow: '0 8px 20px rgba(0, 0, 0, 0.15)',
    border: '1px solid rgba(59, 130, 246, 0.15)',
    backdropFilter: 'blur(8px)',
  },
  authorAvatarContainer: {
    flexShrink: 0,
  },
  authorAvatar: {
    width: '60px',
    height: '60px',
    borderRadius: '50%',
    backgroundColor: '#0EA5E9',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    fontSize: '1.4rem',
    fontWeight: 'bold',
    boxShadow: '0 4px 8px rgba(14, 165, 233, 0.3)',
  },
  authorInfo: {
    flex: '1',
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
  },
  authorMeta: {
    marginBottom: '5px',
  },
  authorName: {
    fontSize: '1.2rem',
    margin: '0 0 2px 0',
    color: '#E2E8F0',
    fontWeight: '600',
  },
  authorTitle: {
    fontSize: '0.85rem',
    color: '#94A3B8',
    margin: 0,
  },
  authorLinkedIn: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    color: '#0EA5E9',
    textDecoration: 'none',
    fontSize: '0.85rem',
  },
  
  // Path page
  pathGrid: {
    display: 'flex',
    gap: '16px',
    marginBottom: '16px'
  },
  pathCard: {
    backgroundColor: '#1E293B',
    padding: '20px',
    borderRadius: '12px',
    flex: '1',
    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
  },
  pathHeader: {
    display: 'flex',
    alignItems: 'flex-start',
    marginBottom: '14px'
  },
  pathIcon: {
    width: '36px',
    height: '36px',
    borderRadius: '50%',
    backgroundColor: '#0F172A',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: '14px',
    color: '#0EA5E9',
    flexShrink: 0
  },
  pathTitle: {
    fontSize: '16px',
    fontWeight: '600',
    color: '#F8FAFC',
    margin: '0 0 4px 0'
  },
  pathTag: {
    fontSize: '12px',
    fontWeight: '500',
    color: '#10B981',
    backgroundColor: 'rgba(16, 185, 129, 0.1)',
    padding: '3px 8px',
    borderRadius: '12px',
    display: 'inline-block'
  },
  pathDesc: {
    fontSize: '14px',
    color: '#CBD5E1',
    margin: '0 0 16px 0',
    lineHeight: '1.5'
  },
  pathMeta: {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px'
  },
  pathMetaItem: {
    display: 'flex',
    flexDirection: 'column',
    gap: '2px'
  },
  metaLabel: {
    fontSize: '12px',
    color: '#94A3B8',
    fontWeight: '500'
  },
  metaValue: {
    fontSize: '14px',
    color: '#F8FAFC'
  },
  
  // Skills page
  skillSectionTitle: {
    fontSize: '16px',
    fontWeight: '600',
    color: '#F8FAFC',
    margin: '0 0 16px 0',
    display: 'flex',
    alignItems: 'center'
  },
  skillsGrid: {
    display: 'flex',
    gap: '16px',
    marginBottom: '24px'
  },
  skillCard: {
    backgroundColor: '#1E293B',
    padding: '16px',
    borderRadius: '12px',
    flex: '1',
    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
  },
  skillHeader: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '12px'
  },
  skillIcon: {
    width: '28px',
    height: '28px',
    borderRadius: '50%',
    backgroundColor: '#0F172A',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: '12px',
    color: '#0EA5E9'
  },
  skillTitle: {
    fontSize: '15px',
    fontWeight: '600',
    color: '#F8FAFC',
    margin: '0',
    flex: '1'
  },
  essentialTag: {
    fontSize: '11px',
    fontWeight: '500',
    color: '#F43F5E',
    backgroundColor: 'rgba(244, 63, 94, 0.1)',
    padding: '3px 8px',
    borderRadius: '12px'
  },
  importantTag: {
    fontSize: '11px',
    fontWeight: '500',
    color: '#F59E0B',
    backgroundColor: 'rgba(245, 158, 11, 0.1)',
    padding: '3px 8px',
    borderRadius: '12px'
  },
  skillDesc: {
    fontSize: '13px',
    color: '#CBD5E1',
    margin: '0 0 6px 0',
    lineHeight: '1.5'
  },
  skillToolsRequired: {
    fontSize: '11px',
    color: '#94A3B8',
    margin: '0',
    lineHeight: '1.4',
    fontStyle: 'italic'
  },
  
  // Tools page
  sectionTitle: {
    fontSize: '16px',
    fontWeight: '600',
    color: '#F8FAFC',
    margin: '0 0 16px 0',
    display: 'flex',
    alignItems: 'center'
  },
  certGrid: {
    display: 'flex',
    gap: '16px',
    marginBottom: '32px'
  },
  certCard: {
    backgroundColor: '#1E293B',
    padding: '16px',
    borderRadius: '12px',
    display: 'flex',
    flex: '1',
    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
  },
  certBadge: {
    width: '48px',
    height: '48px',
    backgroundColor: '#0F172A',
    borderRadius: '8px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: '600',
    color: '#0EA5E9',
    marginRight: '16px',
    flexShrink: '0',
    fontSize: '14px'
  },
  certInfo: {
    flex: '1'
  },
  certTitle: {
    fontSize: '15px',
    fontWeight: '600',
    color: '#F8FAFC',
    margin: '0 0 4px 0'
  },
  certProvider: {
    fontSize: '12px',
    color: '#94A3B8',
    marginBottom: '8px'
  },
  certImpact: {
    fontSize: '12px',
    fontWeight: '500',
    color: '#10B981',
    display: 'inline-block'
  },
  
  // Tool grid
  toolGrid: {
    display: 'flex',
    gap: '24px'
  },
  toolCategory: {
    flex: '1'
  },
  toolHeader: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '12px'
  },
  toolTitle: {
    fontSize: '15px',
    fontWeight: '600',
    color: '#F8FAFC',
    margin: '0'
  },
  toolItems: {
    backgroundColor: '#1E293B',
    borderRadius: '12px',
    padding: '12px',
    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
  },
  toolItem: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '8px 0',
    borderBottom: '1px solid #2D3748'
  },
  toolName: {
    fontSize: '14px',
    color: '#E2E8F0'
  },
  toolTag: {
    fontSize: '11px',
    color: '#F43F5E',
    fontWeight: '500'
  },
  toolTagSecondary: {
    fontSize: '11px',
    color: '#F59E0B',
    fontWeight: '500'
  },
  toolNote: {
    display: 'flex',
    alignItems: 'center',
    fontSize: '12px',
    color: '#94A3B8',
    backgroundColor: 'rgba(14, 165, 233, 0.05)',
    padding: '12px',
    borderRadius: '8px',
    marginTop: '16px',
    lineHeight: '1.5'
  },
  
  // Salary page
  salaryTable: {
    backgroundColor: '#1E293B',
    borderRadius: '12px',
    overflow: 'hidden',
    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    marginBottom: '24px'
  },
  tableHeader: {
    display: 'flex',
    backgroundColor: '#2D3748',
    padding: '10px 16px',
    fontWeight: '600',
    fontSize: '13px',
    color: '#E2E8F0'
  },
  headerCell: {
    flex: '1'
  },
  tableRow: {
    display: 'flex',
    padding: '12px 16px',
    fontSize: '13px',
    color: '#E2E8F0',
    borderBottom: '1px solid #2D3748'
  },
  tableCell: {
    flex: '1'
  },
  
  // Location grid
  locationGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '16px'
  },
  locationCard: {
    backgroundColor: '#1E293B',
    padding: '16px',
    borderRadius: '12px',
    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
  },
  locationName: {
    fontSize: '15px',
    fontWeight: '600',
    color: '#F8FAFC',
    margin: '0 0 8px 0'
  },
  locationIndex: {
    fontSize: '13px',
    fontWeight: '600',
    color: '#0EA5E9',
    marginBottom: '8px'
  },
  locationDemand: {
    fontSize: '12px',
    color: '#10B981'
  },
  
  // Plan page
  timelineContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px'
  },
  timelinePhase: {
    backgroundColor: '#1E293B',
    borderRadius: '12px',
    overflow: 'hidden',
    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
  },
  phaseHeader: {
    backgroundColor: '#2D3748',
    padding: '12px 16px',
    fontWeight: '600',
    fontSize: '14px',
    color: '#F8FAFC',
    display: 'flex',
    alignItems: 'center'
  },
  phaseContent: {
    display: 'flex',
    gap: '1px',
    backgroundColor: '#2D3748'
  },
  timelineCard: {
    backgroundColor: '#1E293B',
    padding: '12px',
    flex: '1'
  },
  timelineCardHeader: {
    fontSize: '14px',
    fontWeight: '600',
    color: '#0EA5E9',
    marginBottom: '8px'
  },
  timelineList: {
    margin: '0',
    paddingLeft: '16px',
    fontSize: '13px',
    color: '#CBD5E1',
    lineHeight: '1.5'
  },
  tipText: {
    color: '#0EA5E9',
    fontSize: '12px',
    fontStyle: 'italic'
  },
  planNote: {
    display: 'flex',
    alignItems: 'center',
    fontSize: '12px',
    color: '#F8FAFC',
    backgroundColor: 'rgba(14, 165, 233, 0.1)',
    padding: '12px',
    borderRadius: '8px',
    marginTop: '16px',
    lineHeight: '1.5'
  },
  
  // Connect page styles
  connectSvgBackground: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 1,
  },
  connectHeader: {
    textAlign: 'center',
    marginBottom: '30px',
    position: 'relative',
    zIndex: 2,
  },
  connectTitle: {
    fontSize: '2rem',
    fontWeight: 'bold',
    color: '#E2E8F0',
    margin: '0 0 15px 0',
  },
  connectTitleAccent: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '15px',
  },
  connectTitleLine: {
    height: '2px',
    width: '40px',
    backgroundColor: '#0EA5E9',
  },
  connectTitleIcon: {
    color: '#0EA5E9',
    fontSize: '1.2rem',
  },
  connectCardWrapper: {
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    position: 'relative',
    zIndex: 2,
  },
  connectCard: {
    background: 'rgba(15, 23, 42, 0.6)',
    maxWidth: '700px',
    width: '100%',
    display: 'flex',
    borderRadius: '12px',
    boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)',
    overflow: 'hidden',
  },
  content: {
    padding: '20px',
    backgroundColor: 'rgba(15, 23, 42, 0.6)',
    borderRadius: '12px',
    border: '1px solid rgba(59, 130, 246, 0.1)',
    boxShadow: '0 8px 20px rgba(0, 0, 0, 0.2)',
    position: 'relative',
    zIndex: 1,
    marginTop: '20px',
    backdropFilter: 'blur(10px)'
  },
  page: {
    padding: '20px',
    position: 'relative',
  },
  connectAvatarSection: {
    padding: '30px 20px',
    background: 'rgba(15, 23, 42, 0.8)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    borderRight: '1px solid rgba(59, 130, 246, 0.2)',
    width: '220px',
    backdropFilter: 'blur(8px)',
  },
  connectAvatar: {
    width: '80px',
    height: '80px',
    borderRadius: '50%',
    backgroundColor: '#3B82F6',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    fontSize: '1.6rem',
    fontWeight: 'bold',
    boxShadow: '0 4px 12px rgba(59, 130, 246, 0.4)',
    marginBottom: '15px',
  },
  connectName: {
    fontSize: '1.3rem',
    fontWeight: '600',
    color: '#E2E8F0',
    margin: '0 0 5px 0',
    textAlign: 'center',
  },
  connectRole: {
    fontSize: '0.85rem',
    color: '#94A3B8',
    margin: '0 0 20px 0',
    textAlign: 'center',
  },
  connectContactInfo: {
    width: '100%',
    marginTop: 'auto',
  },
  connectContactItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    fontSize: '0.85rem',
    color: '#94A3B8',
    marginBottom: '10px',
  },
  connectContactIcon: {
    color: '#3B82F6',
    fontSize: '0.9rem',
  },
  connectDivider: {
    width: '1px',
    background: 'rgba(59, 130, 246, 0.2)',
  },
  connectMessageSection: {
    flex: 1,
    padding: '30px',
    backgroundColor: 'rgba(15, 23, 42, 0.8)',
  },
  connectMessageHeader: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    marginBottom: '20px',
  },
  connectMessageIcon: {
    color: '#3B82F6',
    fontSize: '1.2rem',
  },
  connectMessageTitle: {
    fontSize: '1.3rem',
    fontWeight: '600',
    color: '#E2E8F0',
    margin: 0,
  },
  connectMessageText: {
    fontSize: '0.95rem',
    lineHeight: '1.6',
    color: '#94A3B8',
    marginBottom: '15px',
  },
  connectActions: {
    marginTop: '25px',
    marginBottom: '20px',
  },
  connectButton: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    padding: '12px 24px',
    backgroundColor: '#3B82F6',
    color: 'white',
    borderRadius: '8px',
    textDecoration: 'none',
    fontWeight: '500',
    fontSize: '0.95rem',
    boxShadow: '0 4px 12px rgba(59, 130, 246, 0.3)',
    transition: 'background-color 0.2s ease',
    '&:hover': {
      backgroundColor: '#005885',
    },
  },
  connectButtonIcon: {
    fontSize: '1.1rem',
  },
  connectSocialBar: {
    display: 'flex',
    gap: '15px',
  },
  socialIcon: {
    width: '36px',
    height: '36px',
    borderRadius: '50%',
    backgroundColor: '#F1F5F9',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#64748B',
    textDecoration: 'none',
    transition: 'all 0.2s ease',
    '&:hover': {
      backgroundColor: '#E2E8F0',
      color: '#0F172A',
      transform: 'translateY(-2px)',
    },
  },
  connectCTA: {
    marginTop: '24px',
    marginBottom: '20px'
  },
  connectLinkedIn: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#0077B5',
    color: '#FFFFFF',
    padding: '12px 24px',
    borderRadius: '30px',
    textDecoration: 'none',
    fontSize: '16px',
    fontWeight: '600',
    transition: 'all 0.3s ease',
    boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.2)',
    '&:hover': {
      transform: 'translateY(-3px)',
      boxShadow: '0 15px 20px -3px rgba(0, 0, 0, 0.3)'
    }
  },
  connectSocialIcon: {
    marginRight: '10px',
    fontSize: '18px'
  },
  connectSocialIcons: {
    display: 'flex',
    justifyContent: 'center',
    gap: '16px',
    marginTop: '30px'
  },
  connectSocialCircle: {
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    backgroundColor: 'rgba(59, 130, 246, 0.1)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#FFFFFF',
    textDecoration: 'none',
    transition: 'all 0.3s ease',
    border: '1px solid rgba(255, 255, 255, 0.2)',
    '&:hover': {
      backgroundColor: 'rgba(59, 130, 246, 0.15)',
      transform: 'translateY(-3px)'
    }
  }
};

export default MarketingCareerGuide;