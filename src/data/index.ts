// Data Type Definitions for MRS Plastic Packaging Website

// ==================== PRODUCTION STAGES ====================
export interface ProductionStage {
  icon: React.ReactNode;
  titlePrimary: string;
  titleSecondary: string;
  description: string;
}

// ==================== BRAND PROMISE ====================
export interface BrandPromise {
  vision: string;
  mission: string[];
  values: {
    icon: string;
    title: string;
    description: string;
  }[];
}

// ==================== INDUSTRIES ====================
export interface Industry {
  icon: string;
  name: string;
  description: string;
  products: string[];
  image: string;
}

// ==================== PROJECTS ====================
export interface Project {
  title: string;
  client: string;
  industry: string;
  year: string;
  capacity: string;
  image: string;
  tags: string[];
}

// ==================== CERTIFICATIONS ====================
export interface Certification {
  name: string;
  issuer: string;
  description: string;
  validUntil: string;
  image: string;
}

// ==================== STATISTICS ====================
export interface Stat {
  value: number;
  unit: string;
  label: string;
}

// ==================== TESTIMONIALS (Phase 2) ====================
export interface Testimonial {
  name: string;
  position: string;
  company: string;
  avatar: string;
  rating: number;
  text: string;
  metrics: {
    value?: string;
    reduction?: string;
    products?: string;
    metric: string;
    period: string;
  };
}

// ==================== TEAM MEMBERS (Phase 2) ====================
export interface TeamMember {
  name: string;
  position: string;
  bio: string;
  photo: string;
  linkedin: string;
}

// ==================== LOCATIONS (Phase 2) ====================
export interface Location {
  name: string;
  address: string;
  type: string;
  capacity: string;
  coordinates: {
    lat: number;
    lng: number;
  };
  image: string;
}

// ==================== INNOVATION AREAS (Phase 2) ====================
export interface Innovation {
  icon: string;
  title: string;
  description: string;
  stats: string[];
}

// ==================== NEWS ARTICLES (Phase 2) ====================
export interface NewsArticle {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  image: string;
  readTime: string;
}

// ==================== COMPANY PROFILE VIDEO ====================
export interface CompanyProfileVideo {
  title: string;
  description: string;
  duration: string;
  poster: string;
  videoUrl: string;
  highlights: string[];
}
