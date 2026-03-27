"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  GraduationCap,
  Users,
  BookOpen,
  Award,
  CheckCircle,
  Star,
  MessageCircle,
  Heart,
  Target,
  Lightbulb,
  TrendingUp,
  Shield,
  ChevronUp,
  Menu,
  X,
  Send,
  Calendar,
  Home,
  Sparkles,
  UserCheck,
  BookMarked,
  FileText,
  Brain,
  Users2,
  Building,
} from "lucide-react";

// Teacher Information
const TEACHER_INFO = {
  name: "Goldy Aggarwal",
  title: "B.Ed Qualified Educator",
  experience: "15+ Years",
  phone: "+91 9560517993",
  whatsapp: "919560517993",
  email: "gaurinaveen26@gmail.com",
  address: "House No. 183, Block E, Rohini Sector 4, Delhi - 110085",
  areas: ["Rohini Sector 1", "Rohini Sector 3", "Rohini Sector 4", "Rohini Sector 5"],
  classes: "1st to 8th",
  subjects: ["Hindi", "English", "Social Studies", "Mathematics", "Science", "EVS"],
  qualifications: ["B.Ed. (Hindi & Social Studies)", "B.A. (English & Hindi)"],
  languages: ["Hindi", "English"],
  achievements: [
    "15+ years of dedicated teaching experience",
    "25% improvement in student engagement",
    "Expert in curriculum development",
    "Personalized teaching approach",
  ],
};

const SERVICES = [
  {
    icon: Home,
    title: "Home Tuition",
    description: "Personalized one-on-one home tuition at your doorstep for Classes 1st to 8th.",
  },
  {
    icon: BookOpen,
    title: "All Subjects",
    description: "Complete coverage of all subjects including Hindi, English, Maths, Science, Social Studies & EVS.",
  },
  {
    icon: UserCheck,
    title: "Individual Attention",
    description: "Personalized teaching approach focusing on each student's unique learning needs.",
  },
  {
    icon: FileText,
    title: "Homework Help",
    description: "Regular homework assistance to ensure timely completion and concept clarity.",
  },
  {
    icon: Target,
    title: "Exam Preparation",
    description: "Thorough preparation for school exams with practice tests and revision sessions.",
  },
  {
    icon: Brain,
    title: "Concept Building",
    description: "Strong foundation building with focus on understanding, not just memorization.",
  },
  {
    icon: TrendingUp,
    title: "Progress Tracking",
    description: "Regular assessment and parent updates on student progress and improvements.",
  },
  {
    icon: Users2,
    title: "Parent Communication",
    description: "Open communication with parents about child's development and academic growth.",
  },
];

const WHY_CHOOSE_US = [
  {
    icon: Shield,
    title: "Safe & Trusted",
    description: "Female educator with excellent reputation and verified credentials in the community.",
  },
  {
    icon: Heart,
    title: "Child-Friendly Approach",
    description: "Warm, patient teaching style that makes learning enjoyable for children.",
  },
  {
    icon: Lightbulb,
    title: "Concept Clarity",
    description: "Focus on building strong basics and clear understanding of concepts.",
  },
  {
    icon: TrendingUp,
    title: "Results Oriented",
    description: "Proven track record of improving student performance and confidence.",
  },
  {
    icon: Calendar,
    title: "Regular Practice",
    description: "Daily practice sessions and revision to reinforce learning.",
  },
  {
    icon: Users,
    title: "Individual Focus",
    description: "One-on-one attention ensures no student is left behind.",
  },
];

const TESTIMONIALS = [
  {
    name: "Priya Sharma",
    area: "Rohini Sector 4",
    rating: 5,
    text: "Goldy ma'am has been teaching my daughter for 2 years. Her grades have improved significantly, and she now loves studying. Highly recommended!",
  },
  {
    name: "Rajesh Gupta",
    area: "Rohini Sector 3",
    rating: 5,
    text: "Very dedicated teacher. My son's Hindi and English have improved a lot. She gives personal attention to each child.",
  },
  {
    name: "Sunita Verma",
    area: "Rohini Sector 5",
    rating: 5,
    text: "Excellent teacher! My children look forward to their tuition classes. Very patient and explains concepts clearly.",
  },
];

const FAQS = [
  {
    question: "What classes do you teach?",
    answer: "I provide home tuition for Classes 1st to 8th, covering all subjects including Hindi, English, Mathematics, Science, Social Studies, and EVS.",
  },
  {
    question: "Which areas in Rohini do you cover?",
    answer: "I currently provide home tuition services in Rohini Sector 1, Sector 3, Sector 4, and Sector 5. If you're in nearby areas, please contact me to discuss.",
  },
  {
    question: "What are your qualifications?",
    answer: "I am a B.Ed qualified educator with specialization in Hindi and Social Studies. I also hold a B.A. degree in English and Hindi. I have over 15 years of teaching experience in reputed schools.",
  },
  {
    question: "Do you provide a demo class?",
    answer: "Yes! I offer a free demo class so you can assess my teaching style and see if it suits your child's needs. Contact me to schedule a demo.",
  },
  {
    question: "What is your teaching approach?",
    answer: "I focus on concept clarity, regular practice, and building a strong foundation. My approach is child-friendly with individual attention to each student's needs.",
  },
  {
    question: "How do I contact you for home tuition?",
    answer: "You can call me at +91 9560517993, send a WhatsApp message, or fill out the contact form on this website. I will get back to you promptly.",
  },
];

const CLASSES = [
  { class: "1st", subjects: "All Subjects" },
  { class: "2nd", subjects: "All Subjects" },
  { class: "3rd", subjects: "All Subjects" },
  { class: "4th", subjects: "All Subjects" },
  { class: "5th", subjects: "All Subjects" },
  { class: "6th", subjects: "All Subjects" },
  { class: "7th", subjects: "All Subjects" },
  { class: "8th", subjects: "All Subjects" },
];

export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [formData, setFormData] = useState({
    parentName: "",
    studentName: "",
    studentClass: "",
    area: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  // Review form state
  const [reviewData, setReviewData] = useState({
    parentName: "",
    studentName: "",
    rating: 5,
    review: "",
    area: "",
  });
  const [isReviewSubmitting, setIsReviewSubmitting] = useState(false);
  const [reviewStatus, setReviewStatus] = useState<"idle" | "success" | "error">("idle");

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({
          parentName: "",
          studentName: "",
          studentClass: "",
          area: "",
          phone: "",
          message: "",
        });
      } else {
        setSubmitStatus("error");
      }
    } catch {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReviewSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsReviewSubmitting(true);

    try {
      const response = await fetch("/api/review", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(reviewData),
      });

      if (response.ok) {
        setReviewStatus("success");
        setReviewData({
          parentName: "",
          studentName: "",
          rating: 5,
          review: "",
          area: "",
        });
      } else {
        setReviewStatus("error");
      }
    } catch {
      setReviewStatus("error");
    } finally {
      setIsReviewSubmitting(false);
    }
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border shadow-sm">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center">
                <GraduationCap className="w-7 h-7 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-foreground font-serif">{TEACHER_INFO.name}</h1>
                <p className="text-xs text-muted-foreground">Home Tuition in Rohini</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-6">
              {[
                { label: "Home", id: "home" },
                { label: "About", id: "about" },
                { label: "Services", id: "services" },
                { label: "Subjects", id: "subjects" },
                { label: "Reviews", id: "reviews" },
                { label: "Contact", id: "contact" },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                >
                  {item.label}
                </button>
              ))}
              <Button
                onClick={() => scrollToSection("contact")}
                className="bg-primary hover:bg-primary/90"
              >
                Book Demo
              </Button>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <nav className="md:hidden py-4 border-t border-border mt-3">
              <div className="flex flex-col gap-3">
                {[
                  { label: "Home", id: "home" },
                  { label: "About", id: "about" },
                  { label: "Services", id: "services" },
                  { label: "Subjects", id: "subjects" },
                  { label: "Reviews", id: "reviews" },
                  { label: "Areas Served", id: "areas" },
                  { label: "Contact", id: "contact" },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="text-left py-2 text-muted-foreground hover:text-primary transition-colors"
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </nav>
          )}
        </div>
      </header>

      <main className="flex-grow">
        {/* Hero Section */}
        <section id="home" className="hero-gradient py-12 md:py-20 lg:py-28" aria-label="Home tuition services in Rohini">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div className="space-y-6 text-center lg:text-left">
                <Badge variant="outline" className="bg-emerald-50 text-emerald-700 border-emerald-200 px-4 py-1">
                  <Star className="w-4 h-4 mr-1 fill-current" />
                  Best Home Tutor in Rohini Delhi
                </Badge>
                
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-serif text-foreground leading-tight">
                  Best Home Tuition in Rohini for{" "}
                  <span className="gradient-text">Classes 1st to 8th</span>{" "}
                  All Subjects
                </h1>
                
                <p className="text-lg md:text-xl text-muted-foreground">
                  Home Tuition Available in{" "}
                  <span className="font-semibold text-foreground">Rohini Sector 1, 3, 4, and 5, Delhi</span>
                </p>
                
                <p className="text-base text-muted-foreground max-w-xl mx-auto lg:mx-0">
                  B.Ed qualified home tutor with 15+ years experience. Expert in Hindi, English, Maths, Science, Social Studies. 
                  Personal attention, concept clarity, exam preparation. Book FREE Demo Class today!
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <Button
                    size="lg"
                    className="bg-primary hover:bg-primary/90 text-lg px-8 py-6 animate-pulse-glow"
                    asChild
                  >
                    <a href={`tel:${TEACHER_INFO.phone}`}>
                      <Phone className="w-5 h-5 mr-2" />
                      Call Now
                    </a>
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-emerald-500 text-emerald-600 hover:bg-emerald-50 text-lg px-8 py-6"
                    asChild
                  >
                    <a
                      href={`https://wa.me/${TEACHER_INFO.whatsapp}?text=Hi, I'm interested in home tuition for my child.`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <MessageCircle className="w-5 h-5 mr-2" />
                      WhatsApp Now
                    </a>
                  </Button>
                  <Button
                    size="lg"
                    variant="secondary"
                    className="bg-amber-100 text-amber-800 hover:bg-amber-200 text-lg px-8 py-6"
                    onClick={() => scrollToSection("contact")}
                  >
                    <Calendar className="w-5 h-5 mr-2" />
                    Book Free Demo
                  </Button>
                </div>

                <div className="flex flex-wrap justify-center lg:justify-start gap-4 pt-4">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle className="w-5 h-5 text-emerald-500" />
                    B.Ed Qualified
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle className="w-5 h-5 text-emerald-500" />
                    All Subjects
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle className="w-5 h-5 text-emerald-500" />
                    Personal Attention
                  </div>
                </div>
              </div>

              <div className="relative flex justify-center">
                <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full bg-gradient-to-br from-emerald-100 to-teal-100 flex items-center justify-center animate-float">
                  <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-emerald-200 to-teal-200 flex items-center justify-center">
                    <div className="w-56 h-56 md:w-72 md:h-72 rounded-full bg-gradient-to-br from-emerald-300 to-teal-300 flex items-center justify-center">
                      <div className="text-center p-6">
                        <GraduationCap className="w-16 h-16 md:w-24 md:h-24 text-emerald-600 mx-auto mb-4" />
                        <p className="text-2xl md:text-3xl font-bold text-emerald-700 font-serif">{TEACHER_INFO.name}</p>
                        <p className="text-emerald-600 font-medium">Home Tutor</p>
                        <p className="text-emerald-500 text-sm mt-1">15+ Years Experience</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Floating badges */}
                <div className="absolute top-4 right-4 md:right-8 bg-white rounded-full px-4 py-2 shadow-lg">
                  <div className="flex items-center gap-2">
                    <Award className="w-5 h-5 text-amber-500" />
                    <span className="text-sm font-semibold">B.Ed Qualified</span>
                  </div>
                </div>
                <div className="absolute bottom-8 left-0 md:left-4 bg-white rounded-full px-4 py-2 shadow-lg">
                  <div className="flex items-center gap-2">
                    <Star className="w-5 h-5 text-amber-500 fill-current" />
                    <span className="text-sm font-semibold">Expert Teacher</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Trust Indicators */}
        <section className="py-8 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <p className="text-3xl md:text-4xl font-bold">15+</p>
                <p className="text-sm opacity-90">Years Experience</p>
              </div>
              <div>
                <p className="text-3xl md:text-4xl font-bold">100+</p>
                <p className="text-sm opacity-90">Students Taught</p>
              </div>
              <div>
                <p className="text-3xl md:text-4xl font-bold">4</p>
                <p className="text-sm opacity-90">Areas Covered</p>
              </div>
              <div>
                <p className="text-3xl md:text-4xl font-bold">B.Ed</p>
                <p className="text-sm opacity-90">Qualified</p>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-16 md:py-24 bg-white" aria-label="About Goldy Aggarwal - Home Tutor in Rohini">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <Badge variant="outline" className="bg-emerald-50 text-emerald-700 border-emerald-200 mb-4">
                About Your Tutor
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold font-serif text-foreground mb-4">
                Goldy Aggarwal - B.Ed Qualified Home Tutor in Rohini
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Best home tuition teacher in Rohini Delhi with 15+ years experience in teaching Classes 1-8
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="prose prose-lg max-w-none text-muted-foreground">
                  <p>
                    I am <strong className="text-foreground">{TEACHER_INFO.name}</strong>, a passionate educator with over{" "}
                    <strong className="text-foreground">15 years of teaching experience</strong>. I specialize in teaching
                    students from <strong className="text-foreground">Classes 1st to 8th</strong>, with expertise in Hindi,
                    English, Social Studies, and all other subjects.
                  </p>
                  <p>
                    My teaching philosophy centers around building strong foundational concepts, fostering a love for learning,
                    and ensuring that every child receives the personal attention they deserve. I believe that every student
                    can excel with the right guidance and support.
                  </p>
                  <p>
                    Having taught at reputed schools like New St. Michael Academy and Horizon Model School, I bring both
                    professional expertise and a nurturing approach to my home tuition services. My goal is to help your
                    child not just improve academically, but also develop confidence and a positive attitude towards learning.
                  </p>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="bg-emerald-50 rounded-lg p-4">
                    <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                      <GraduationCap className="w-5 h-5 text-emerald-600" />
                      Qualifications
                    </h4>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      {TEACHER_INFO.qualifications.map((qual, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                          {qual}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-amber-50 rounded-lg p-4">
                    <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                      <Award className="w-5 h-5 text-amber-600" />
                      Key Achievements
                    </h4>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      {TEACHER_INFO.achievements.map((ach, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <Star className="w-4 h-4 text-amber-500 mt-0.5 flex-shrink-0" />
                          {ach}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="bg-emerald-100 text-emerald-700">
                    Hindi Expert
                  </Badge>
                  <Badge variant="secondary" className="bg-blue-100 text-blue-700">
                    English Expert
                  </Badge>
                  <Badge variant="secondary" className="bg-amber-100 text-amber-700">
                    Social Studies
                  </Badge>
                  <Badge variant="secondary" className="bg-purple-100 text-purple-700">
                    Primary Education
                  </Badge>
                </div>
              </div>

              <div className="space-y-6">
                <Card className="border-2 border-emerald-100 shadow-lg">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                      <Sparkles className="w-6 h-6 text-amber-500" />
                      Why Parents Trust Me
                    </h3>
                    <ul className="space-y-3">
                      {[
                        "Personal attention to every student",
                        "Strong focus on concept clarity",
                        "Regular homework support",
                        "Comprehensive exam preparation",
                        "Child-friendly teaching methods",
                        "Regular parent communication",
                        "Safe and trusted environment",
                      ].map((item, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                          <span className="text-muted-foreground">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                <div className="grid grid-cols-2 gap-4">
                  <Card className="text-center p-4 bg-gradient-to-br from-emerald-50 to-teal-50 border-0">
                    <Clock className="w-8 h-8 text-emerald-600 mx-auto mb-2" />
                    <p className="font-semibold">Flexible Timings</p>
                    <p className="text-sm text-muted-foreground">As per your convenience</p>
                  </Card>
                  <Card className="text-center p-4 bg-gradient-to-br from-amber-50 to-orange-50 border-0">
                    <MapPin className="w-8 h-8 text-amber-600 mx-auto mb-2" />
                    <p className="font-semibold">Home Visits</p>
                    <p className="text-sm text-muted-foreground">Learn from comfort</p>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-16 md:py-24 bg-stone-50" aria-label="Home Tuition Services in Rohini">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <Badge variant="outline" className="bg-emerald-50 text-emerald-700 border-emerald-200 mb-4">
                Our Services
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold font-serif text-foreground mb-4">
                Best Home Tuition Services in Rohini Delhi
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                All subjects home tuition for Class 1 to 8. Hindi, English, Maths, Science, Social Studies. Exam preparation, homework help, concept clarity.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {SERVICES.map((service, index) => (
                <Card
                  key={index}
                  className="card-hover border-0 shadow-md bg-white overflow-hidden group"
                >
                  <CardContent className="p-6 text-center">
                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-emerald-100 to-teal-100 flex items-center justify-center mx-auto mb-4 group-hover:from-emerald-200 group-hover:to-teal-200 transition-colors">
                      <service.icon className="w-7 h-7 text-emerald-600" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
                    <p className="text-sm text-muted-foreground">{service.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Areas Served Section */}
        <section id="areas" className="py-16 md:py-24 bg-white" aria-label="Home Tuition Areas in Rohini">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <Badge variant="outline" className="bg-emerald-50 text-emerald-700 border-emerald-200 mb-4">
                Areas We Serve
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold font-serif text-foreground mb-4">
                Home Tuition in Rohini Sector 1, 3, 4 & 5 - Delhi
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Best home tutor available in Rohini Sector 1, Sector 3, Sector 4, and Sector 5. Contact +91 9560517993 for home tuition near you!
              </p>
            </div>

            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {TEACHER_INFO.areas.map((area, index) => (
                <Card
                  key={index}
                  className="card-hover border-2 border-emerald-100 bg-gradient-to-br from-emerald-50 to-white text-center overflow-hidden"
                >
                  <CardContent className="p-8">
                    <Building className="w-12 h-12 text-emerald-600 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-2">{area}</h3>
                    <p className="text-sm text-muted-foreground mb-4">Home tuition available</p>
                    <Badge className="bg-emerald-100 text-emerald-700">
                      <CheckCircle className="w-3 h-3 mr-1" />
                      Service Available
                    </Badge>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-8">
              <p className="text-muted-foreground mb-4">
                Looking for home tuition in nearby areas? Contact us to discuss.
              </p>
              <Button
                variant="outline"
                className="border-emerald-500 text-emerald-600"
                onClick={() => scrollToSection("contact")}
              >
                Contact Us
              </Button>
            </div>
          </div>
        </section>

        {/* Subjects/Classes Section */}
        <section id="subjects" className="py-16 md:py-24 bg-gradient-to-br from-emerald-50 to-teal-50" aria-label="Classes and Subjects">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <Badge variant="outline" className="bg-white text-emerald-700 border-emerald-200 mb-4">
                Classes & Subjects
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold font-serif text-foreground mb-4">
                Home Tuition for Class 1 to 8 - All Subjects
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Hindi, English, Maths, Science, Social Studies, EVS tuition for primary and middle school students in Rohini
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-4xl mx-auto mb-12">
              {CLASSES.map((item, index) => (
                <Card
                  key={index}
                  className="card-hover text-center bg-white border-0 shadow-md"
                >
                  <CardContent className="p-6">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-amber-100 to-orange-100 flex items-center justify-center mx-auto mb-3">
                      <span className="text-2xl font-bold text-amber-600">{item.class}</span>
                    </div>
                    <p className="font-medium text-muted-foreground">{item.subjects}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="max-w-4xl mx-auto">
              <h3 className="text-xl font-semibold text-center mb-6">Subjects Covered</h3>
              <div className="flex flex-wrap justify-center gap-3">
                {TEACHER_INFO.subjects.map((subject, index) => (
                  <Badge
                    key={index}
                    variant="outline"
                    className="px-4 py-2 text-sm bg-white border-emerald-200"
                  >
                    <BookMarked className="w-4 h-4 mr-2 text-emerald-600" />
                    {subject}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <Badge variant="outline" className="bg-emerald-50 text-emerald-700 border-emerald-200 mb-4">
                Why Choose Us
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold font-serif text-foreground mb-4">
                Why Parents Choose {TEACHER_INFO.name}
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Trusted by numerous families in Rohini for quality home tuition
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {WHY_CHOOSE_US.map((item, index) => (
                <Card
                  key={index}
                  className="card-hover border-0 shadow-md bg-gradient-to-br from-white to-stone-50"
                >
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-lg bg-emerald-100 flex items-center justify-center mb-4">
                      <item.icon className="w-6 h-6 text-emerald-600" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 md:py-24 bg-stone-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <Badge variant="outline" className="bg-emerald-50 text-emerald-700 border-emerald-200 mb-4">
                Testimonials
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold font-serif text-foreground mb-4">
                What Parents Say
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Feedback from parents who trusted us with their children's education
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {TESTIMONIALS.map((testimonial, index) => (
                <Card key={index} className="border-0 shadow-lg bg-white">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-amber-400 fill-current" />
                      ))}
                    </div>
                    <p className="text-muted-foreground mb-4 italic">&ldquo;{testimonial.text}&rdquo;</p>
                    <Separator className="my-4" />
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-semibold">{testimonial.name}</p>
                        <p className="text-sm text-muted-foreground">{testimonial.area}</p>
                      </div>
                      <Badge variant="secondary" className="bg-emerald-100 text-emerald-700">
                        Verified Parent
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Reviews Section - Submit Your Review */}
        <section id="reviews" className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <Badge variant="outline" className="bg-emerald-50 text-emerald-700 border-emerald-200 mb-4">
                Submit Your Review
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold font-serif text-foreground mb-4">
                Share Your Experience
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Your feedback helps other parents and encourages us to provide better services
              </p>
            </div>

            <div className="max-w-2xl mx-auto">
              <Card className="border-0 shadow-lg">
                <CardContent className="p-6 md:p-8">
                  <form onSubmit={handleReviewSubmit} className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="reviewParentName">Parent Name *</Label>
                        <Input
                          id="reviewParentName"
                          value={reviewData.parentName}
                          onChange={(e) => setReviewData({ ...reviewData, parentName: e.target.value })}
                          placeholder="Your name"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="reviewStudentName">Student Name *</Label>
                        <Input
                          id="reviewStudentName"
                          value={reviewData.studentName}
                          onChange={(e) => setReviewData({ ...reviewData, studentName: e.target.value })}
                          placeholder="Child's name"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="reviewArea">Area *</Label>
                        <Select
                          value={reviewData.area}
                          onValueChange={(value) => setReviewData({ ...reviewData, area: value })}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select your area" />
                          </SelectTrigger>
                          <SelectContent>
                            {TEACHER_INFO.areas.map((area) => (
                              <SelectItem key={area} value={area}>
                                {area}
                              </SelectItem>
                            ))}
                            <SelectItem value="Other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label>Rating *</Label>
                        <div className="flex items-center gap-2 pt-2">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <button
                              key={star}
                              type="button"
                              onClick={() => setReviewData({ ...reviewData, rating: star })}
                              className="focus:outline-none"
                            >
                              <Star
                                className={`w-8 h-8 cursor-pointer transition-colors ${
                                  star <= reviewData.rating
                                    ? "text-amber-400 fill-current"
                                    : "text-gray-300"
                                }`}
                              />
                            </button>
                          ))}
                          <span className="ml-2 text-sm font-medium">{reviewData.rating}/5</span>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="reviewText">Your Review *</Label>
                      <Textarea
                        id="reviewText"
                        value={reviewData.review}
                        onChange={(e) => setReviewData({ ...reviewData, review: e.target.value })}
                        placeholder="Share your experience with our home tuition services..."
                        rows={5}
                        required
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-primary hover:bg-primary/90"
                      disabled={isReviewSubmitting}
                    >
                      {isReviewSubmitting ? (
                        "Submitting..."
                      ) : (
                        <>
                          <Send className="w-4 h-4 mr-2" />
                          Submit Review
                        </>
                      )}
                    </Button>

                    {reviewStatus === "success" && (
                      <div className="p-4 bg-emerald-50 text-emerald-700 rounded-lg text-center">
                        <CheckCircle className="w-5 h-5 mx-auto mb-2" />
                        Thank you for your review! Your feedback has been submitted successfully.
                      </div>
                    )}
                    {reviewStatus === "error" && (
                      <div className="p-4 bg-red-50 text-red-700 rounded-lg text-center">
                        Something went wrong. Please try again.
                      </div>
                    )}
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <Badge variant="outline" className="bg-emerald-50 text-emerald-700 border-emerald-200 mb-4">
                FAQs
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold font-serif text-foreground mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Common questions parents ask about our home tuition services
              </p>
            </div>

            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="w-full space-y-4">
                {FAQS.map((faq, index) => (
                  <AccordionItem
                    key={index}
                    value={`item-${index}`}
                    className="bg-stone-50 rounded-lg px-6 border-0"
                  >
                    <AccordionTrigger className="text-left font-semibold hover:text-primary">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16 md:py-24 bg-gradient-to-br from-emerald-600 to-teal-600 text-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <Badge variant="outline" className="bg-white/20 text-white border-white/30 mb-4">
                Contact Us
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold font-serif mb-4">
                Book a Free Demo Class
              </h2>
              <p className="text-lg opacity-90 max-w-2xl mx-auto">
                Contact us for home tuition. Fill the form below or call directly.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
              {/* Contact Form */}
              <Card className="border-0 shadow-xl">
                <CardContent className="p-6 md:p-8">
                  <h3 className="text-xl font-semibold text-foreground mb-6">Send Enquiry</h3>
                  
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="parentName">Parent Name *</Label>
                        <Input
                          id="parentName"
                          value={formData.parentName}
                          onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                          placeholder="Your name"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="studentName">Student Name *</Label>
                        <Input
                          id="studentName"
                          value={formData.studentName}
                          onChange={(e) => setFormData({ ...formData, studentName: e.target.value })}
                          placeholder="Child's name"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="studentClass">Class *</Label>
                        <Select
                          value={formData.studentClass}
                          onValueChange={(value) => setFormData({ ...formData, studentClass: value })}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select class" />
                          </SelectTrigger>
                          <SelectContent>
                            {["1st", "2nd", "3rd", "4th", "5th", "6th", "7th", "8th"].map((cls) => (
                              <SelectItem key={cls} value={cls}>
                                Class {cls}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="area">Area *</Label>
                        <Select
                          value={formData.area}
                          onValueChange={(value) => setFormData({ ...formData, area: value })}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select area" />
                          </SelectTrigger>
                          <SelectContent>
                            {TEACHER_INFO.areas.map((area) => (
                              <SelectItem key={area} value={area}>
                                {area}
                              </SelectItem>
                            ))}
                            <SelectItem value="Other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="Your phone number"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message (Optional)</Label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Any specific requirements or questions..."
                        rows={3}
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-primary hover:bg-primary/90"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        "Sending..."
                      ) : (
                        <>
                          <Send className="w-4 h-4 mr-2" />
                          Send Enquiry
                        </>
                      )}
                    </Button>

                    {submitStatus === "success" && (
                      <div className="p-4 bg-emerald-50 text-emerald-700 rounded-lg text-center">
                        Thank you! Your enquiry has been submitted. We will contact you soon.
                      </div>
                    )}
                    {submitStatus === "error" && (
                      <div className="p-4 bg-red-50 text-red-700 rounded-lg text-center">
                        Something went wrong. Please try again or call directly.
                      </div>
                    )}
                  </form>
                </CardContent>
              </Card>

              {/* Contact Info */}
              <div className="space-y-6">
                <Card className="border-0 shadow-xl bg-white/10 backdrop-blur-sm text-white">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
                    <div className="space-y-4">
                      <a
                        href={`tel:${TEACHER_INFO.phone}`}
                        className="flex items-center gap-4 p-4 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
                      >
                        <Phone className="w-6 h-6" />
                        <div>
                          <p className="text-sm opacity-80">Call Us</p>
                          <p className="font-semibold">{TEACHER_INFO.phone}</p>
                        </div>
                      </a>
                      <a
                        href={`https://wa.me/${TEACHER_INFO.whatsapp}?text=Hi, I'm interested in home tuition for my child.`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-4 p-4 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
                      >
                        <MessageCircle className="w-6 h-6" />
                        <div>
                          <p className="text-sm opacity-80">WhatsApp</p>
                          <p className="font-semibold">{TEACHER_INFO.phone}</p>
                        </div>
                      </a>
                      <a
                        href={`mailto:${TEACHER_INFO.email}`}
                        className="flex items-center gap-4 p-4 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
                      >
                        <Mail className="w-6 h-6" />
                        <div>
                          <p className="text-sm opacity-80">Email</p>
                          <p className="font-semibold">{TEACHER_INFO.email}</p>
                        </div>
                      </a>
                      <div className="flex items-center gap-4 p-4 rounded-lg bg-white/10">
                        <MapPin className="w-6 h-6" />
                        <div>
                          <p className="text-sm opacity-80">Address</p>
                          <p className="font-semibold">{TEACHER_INFO.address}</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <div className="grid grid-cols-2 gap-4">
                  <Button
                    size="lg"
                    className="bg-white text-emerald-600 hover:bg-white/90 h-auto py-4"
                    asChild
                  >
                    <a href={`tel:${TEACHER_INFO.phone}`}>
                      <Phone className="w-5 h-5 mr-2" />
                      Call Now
                    </a>
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="bg-green-500 text-white border-green-500 hover:bg-green-600 hover:border-green-600 h-auto py-4"
                    asChild
                  >
                    <a
                      href={`https://wa.me/${TEACHER_INFO.whatsapp}?text=Hi, I'm interested in home tuition for my child.`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <MessageCircle className="w-5 h-5 mr-2" />
                      WhatsApp
                    </a>
                  </Button>
                </div>

                <Card className="border-0 shadow-xl bg-white/10 backdrop-blur-sm text-white">
                  <CardContent className="p-6">
                    <h4 className="font-semibold mb-3 flex items-center gap-2">
                      <Clock className="w-5 h-5" />
                      Available Hours
                    </h4>
                    <p className="opacity-80">Monday - Saturday</p>
                    <p className="font-semibold">8:00 AM - 8:00 PM</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-stone-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center">
                  <GraduationCap className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold font-serif">{TEACHER_INFO.name}</h3>
                  <p className="text-sm text-stone-400">Home Tuition in Rohini</p>
                </div>
              </div>
              <p className="text-stone-400 text-sm">
                Providing quality home tuition services for Classes 1st to 8th in Rohini Sector 1, 3, 4, and 5.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-stone-400 text-sm">
                <li><button onClick={() => scrollToSection("home")} className="hover:text-white transition-colors">Home</button></li>
                <li><button onClick={() => scrollToSection("about")} className="hover:text-white transition-colors">About</button></li>
                <li><button onClick={() => scrollToSection("services")} className="hover:text-white transition-colors">Services</button></li>
                <li><button onClick={() => scrollToSection("subjects")} className="hover:text-white transition-colors">Subjects</button></li>
                <li><button onClick={() => scrollToSection("reviews")} className="hover:text-white transition-colors">Reviews</button></li>
                <li><button onClick={() => scrollToSection("contact")} className="hover:text-white transition-colors">Contact</button></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Contact Info</h4>
              <ul className="space-y-2 text-stone-400 text-sm">
                <li className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  {TEACHER_INFO.phone}
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  {TEACHER_INFO.email}
                </li>
                <li className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  Rohini, Delhi
                </li>
              </ul>
            </div>
          </div>

          <Separator className="bg-stone-700 mb-8" />

          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-stone-400 text-sm">
            <p>&copy; {new Date().getFullYear()} {TEACHER_INFO.name} - Home Tuition Services. All rights reserved.</p>
            <p>Trusted Home Tutor in Rohini | Classes 1st to 8th | All Subjects</p>
          </div>
        </div>
      </footer>

      {/* Floating Action Buttons */}
      <div className="fixed bottom-6 right-6 flex flex-col gap-3 z-50">
        <a
          href={`https://wa.me/${TEACHER_INFO.whatsapp}?text=Hi, I'm interested in home tuition for my child.`}
          target="_blank"
          rel="noopener noreferrer"
          className="w-14 h-14 rounded-full bg-green-500 text-white flex items-center justify-center shadow-lg hover:bg-green-600 transition-colors animate-bounce"
          aria-label="WhatsApp"
        >
          <MessageCircle className="w-7 h-7" />
        </a>
        <a
          href={`tel:${TEACHER_INFO.phone}`}
          className="w-14 h-14 rounded-full bg-primary text-white flex items-center justify-center shadow-lg hover:bg-primary/90 transition-colors"
          aria-label="Call"
        >
          <Phone className="w-7 h-7" />
        </a>
      </div>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 left-6 w-12 h-12 rounded-full bg-stone-800 text-white flex items-center justify-center shadow-lg hover:bg-stone-700 transition-colors z-50"
          aria-label="Scroll to top"
        >
          <ChevronUp className="w-6 h-6" />
        </button>
      )}
    </div>
  );
}
