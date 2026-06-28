export const GYM_INFO = {
  name: "IronTurf Gym & Fitness",
  tagline: "Transform Your Body. Transform Your Life.",
  address: "123 Fitness Boulevard, Patna, Bihar - 800001",
  phone: "+91 98765 43210",
  email: "info@ironturfgym.com",
  hours: {
    weekdays: "5:00 AM - 10:00 PM",
    saturday: "6:00 AM - 9:00 PM",
    sunday: "7:00 AM - 5:00 PM"
  },
  socials: {
    facebook: "https://facebook.com",
    instagram: "https://instagram.com",
    youtube: "https://youtube.com",
    twitter: "https://twitter.com"
  }
};

export const HERO_STATS = [
  { value: "10+", label: "Years Experience" },
  { value: "50+", label: "Expert Trainers" },
  { value: "2000+", label: "Happy Members" },
  { value: "100+", label: "Fitness Programs" }
];

export const WHY_CHOOSE_US = [
  {
    id: 1,
    icon: "UserCheck",
    title: "CERTIFIED TRAINERS",
    description: "Highly qualified certified trainers committed to guiding and motivating you at every step of your fitness transformation."
  },
  {
    id: 2,
    icon: "Dumbbell",
    title: "MODERN EQUIPMENT",
    description: "State-of-the-art biomechanically engineered fitness machinery for safe, ultra-effective workout sessions."
  },
  {
    id: 3,
    icon: "ClipboardCheck",
    title: "PERSONALIZED PLANS",
    description: "Tailor-made workout regimens and science-backed nutrition guidance specifically designed to reach your individual goals."
  },
  {
    id: 4,
    icon: "Clock",
    title: "FLEXIBLE HOURS",
    description: "Workout on your own terms with convenient early morning to late night gym accessibility 7 days a week."
  }
];

export const PROGRAMS = [
  {
    id: "weight-loss",
    title: "WEIGHT LOSS",
    subtitle: "Burn Fat & Get Lean",
    description: "Comprehensive high-calorie burn programs combining metabolic conditioning, cardio intensity, and nutritional tracking.",
    image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "muscle-building",
    title: "MUSCLE BUILDING",
    subtitle: "Build Strength & Hypertrophy",
    description: "Progressive resistance hypertrophy protocols curated to maximize muscle mass gains and physical power.",
    image: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "hiit",
    title: "HIIT TRAINING",
    subtitle: "High Intensity Workouts",
    description: "Burst training sessions designed to push metabolic limits, incinerate body fat, and elevate stamina.",
    image: "https://images.unsplash.com/photo-1549060279-7e168fcee0c2?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "strength",
    title: "STRENGTH TRAINING",
    subtitle: "Increase Raw Power",
    description: "Compound lifting techniques and powerlifting modules focused on functional force and total body strength.",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "crossfit",
    title: "FUNCTIONAL TRAINING",
    subtitle: "Move Better, Live Better",
    description: "Dynamic multi-planar conditioning that enhances agility, core mobility, balance, and athletic endurance.",
    image: "https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "personal-training",
    title: "PERSONAL TRAINING",
    subtitle: "1-on-1 Dedicated Coaching",
    description: "Direct elite supervision and customized bio-individual workouts to accelerate your results safely.",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=800&auto=format&fit=crop"
  }
];

export const MEMBERSHIPS = [
  {
    id: "basic",
    name: "BASIC",
    subtitle: "Perfect for Beginners",
    monthlyPrice: "999",
    quarterlyPrice: "2,699",
    yearlyPrice: "9,999",
    highlighted: false,
    badge: null,
    features: [
      "Access to Gym Floor & Cardio Zone",
      "Standard Locker Room Access",
      "Free Fitness Assessment & Consultation",
      "Basic Workout Orientation",
      "Standard Gym Hours Access"
    ]
  },
  {
    id: "premium",
    name: "PREMIUM",
    subtitle: "Best for Regular Gym Goers",
    monthlyPrice: "1,999",
    quarterlyPrice: "5,399",
    yearlyPrice: "18,999",
    highlighted: true,
    badge: "MOST POPULAR",
    features: [
      "Full Unlimited Gym Floor & HIIT Access",
      "2 Complimentary Personal Training Sessions",
      "Customized Diet & Nutrition Plan",
      "Premium Locker & Shower Facilities",
      "InBody Composition Analysis Monthly",
      "Access to Weekend Group Classes"
    ]
  },
  {
    id: "elite",
    name: "ELITE",
    subtitle: "For Complete Transformation",
    monthlyPrice: "3,499",
    quarterlyPrice: "9,499",
    yearlyPrice: "32,999",
    highlighted: false,
    badge: "VIP EXPERIENCE",
    features: [
      "Unlimited Access to All Facilities & Zones",
      "6 Monthly Personal Training Sessions",
      "Continuous Dedicated Dietitian Coaching",
      "Bi-Weekly InBody Composition Tracking",
      "Priority Booking for Special Classes",
      "Free Recovery & Sauna Lounge Pass"
    ]
  }
];

export const TRAINERS = [
  {
    id: 1,
    name: "RAHUL SHARMA",
    specialization: "Strength & Conditioning Head",
    experience: "6+ Years Exp.",
    image: "https://images.unsplash.com/photo-1567013127542-490d757e51fc?q=80&w=600&auto=format&fit=crop",
    bio: "Former state powerlifting champion specializing in raw strength development and athletic performance."
  },
  {
    id: 2,
    name: "PRIYA VERMA",
    specialization: "Fat Loss & Metabolic Specialist",
    experience: "5+ Years Exp.",
    image: "https://images.unsplash.com/photo-1548690312-e3b507d8c110?q=80&w=600&auto=format&fit=crop",
    bio: "Certified nutritionist and HIIT specialist passionate about helping clients burn fat efficiently."
  },
  {
    id: 3,
    name: "AMIT KHAN",
    specialization: "Bodybuilding & Muscle Coach",
    experience: "7+ Years Exp.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=600&auto=format&fit=crop",
    bio: "Expert in muscle hypertrophy protocols and biomechanics to construct peak physical physiques."
  },
  {
    id: 4,
    name: "NEHA SINGH",
    specialization: "Functional & Wellness Coach",
    experience: "5+ Years Exp.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&auto=format&fit=crop",
    bio: "Focuses on mobility, posture restoration, core strength, and holistic physical well-being."
  }
];

export const TRANSFORMATIONS = [
  {
    id: 1,
    name: "ROHIT S.",
    stat: "Lost 18 Kg",
    time: "In 4 Months",
    beforeImg: "https://images.unsplash.com/photo-1507398941214-572c25f4b1dc?q=80&w=600&auto=format&fit=crop",
    afterImg: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=600&auto=format&fit=crop",
    story: "The personalized diet plan and progressive training at IronTurf changed my energy levels and physique completely!"
  },
  {
    id: 2,
    name: "ANJALI M.",
    stat: "Lost 12 Kg",
    time: "In 3 Months",
    beforeImg: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=600&auto=format&fit=crop",
    afterImg: "https://images.unsplash.com/photo-1548690312-e3b507d8c110?q=80&w=600&auto=format&fit=crop",
    story: "I feel stronger, healthier, and more confident than ever. The supportive atmosphere made working out addictive."
  }
];

export const TESTIMONIALS = [
  {
    id: 1,
    name: "VIKAS MALHOTRA",
    role: "Software Engineer",
    rating: 5,
    comment: "Best gym in Patna hands down! Premium equipment, extremely knowledgeable trainers, and a clean, high-energy environment.",
    avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200&auto=format&fit=crop"
  },
  {
    id: 2,
    name: "SNEHA PATEL",
    role: "Architect",
    rating: 5,
    comment: "The personal training and customized workout guidance transformed my fitness routine. Worth every rupee!",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop"
  },
  {
    id: 3,
    name: "ARJUN MEHRA",
    role: "Entrepreneur",
    rating: 5,
    comment: "Great luxury facilities, top tier equipment, friendly staff, and supportive trainers. IronTurf is simply unmatched.",
    avatar: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?q=80&w=200&auto=format&fit=crop"
  }
];
