"use client";

import {
  ArrowRight,
  Code2,
  Laptop,
  Palette,
  Server,
  Cpu,
  Database,
  Lock,
  Star,
  CheckCircle2,
  Phone,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { Phone } from "lucide-react";


export default function Home() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CTO at TechCorp",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80",
      content:
        "INVENTOG transformed our digital infrastructure completely. Their expertise in software solutions and commitment to innovation helped us achieve our technological goals.",
      rating: 5,
    },
    {
      name: "Michael Chang",
      role: "CEO at InnovateCo",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80",
      content:
        "The team at INVENTOG delivered beyond our expectations. Their agile approach and technical excellence made our digital transformation journey smooth and successful.",
      rating: 5,
    },
    {
      name: "Emily Rodriguez",
      role: "Product Manager at DataFlow",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80",
      content:
        "Working with INVENTOG was a game-changer for our business. Their innovative solutions and attention to detail set them apart from other development companies.",
      rating: 5,
    },
  ];

  const services = [
    {
      icon: <Laptop className="h-12 w-12" />,
      title: "Web Development",
      description:
        "Custom web applications built with modern technologies and best practices.",
      features: [
        "React & Next.js",
        "Progressive Web Apps",
        "E-commerce Solutions",
        "CMS Integration",
      ],
    },
    {
      icon: <Palette className="h-12 w-12" />,
      title: "Mobile Development",
      description:
        "Native and cross-platform mobile applications for iOS and Android.",
      features: [
        "React Native",
        "Native iOS/Android",
        "App Store Optimization",
        "Mobile UI/UX",
      ],
    },
    {
      icon: <Database className="h-12 w-12" />,
      title: "Backend Development",
      description:
        "Scalable and secure backend solutions for your applications.",
      features: [
        "API Development",
        "Database Design",
        "Microservices",
        "Real-time Systems",
      ],
    },
    {
      icon: <Server className="h-12 w-12" />,
      title: "Enterprise Solutions",
      description: "Custom enterprise software and digital transformation.",
      features: [
        "ERP Systems",
        "CRM Integration",
        "Business Intelligence",
        "Legacy Modernization",
      ],
    },
  ];

  const technologies = [
    "React.js",
    "Next.js",
    "Node.js",
    "TypeScript",
    "React Native",
    "PostgreSQL",
    "MongoDB",
    "GraphQL",
    "Docker",
    "Kubernetes",
    "Redis",
    "AWS",
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80"
            alt="INVENTOG Hero Background"
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Innovate. Transform. Succeed.
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-2xl mx-auto">
              Empowering businesses through innovative software solutions and
              digital transformation.
            </p>
            <div className="flex  flex-col justify-center gap-4">
              <Button size="lg" asChild>
                <Link href="/contact">
                  Start Your Journey <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/portfolio">View Our Work</Link>
              </Button>

              <Button size="lg" variant="outline" asChild>
                <a href="tel:+917845931744" className="flex items-center gap-2">
                  <Phone className="w-5 h-5" />
                  Call us for a Free Consultation
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Services</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Comprehensive software solutions tailored for modern enterprise
              needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-card p-6 rounded-lg shadow-lg hover:shadow-xl transition-all"
              >
                <div className="text-primary mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-muted-foreground mb-4">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-center text-sm">
                      <ArrowRight className="h-4 w-4 mr-2 text-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Technologies We Master</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We use cutting-edge technologies to build robust and scalable
              solutions.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className="bg-card p-4 rounded-lg text-center hover:shadow-md transition-all"
              >
                <span className="font-medium">{tech}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Choose INVENTOG?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We deliver excellence through our commitment to quality and
              innovation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Expert Team",
                description:
                  "Our team consists of experienced developers, designers, and architects who are passionate about technology.",
              },
              {
                title: "Proven Process",
                description:
                  "We follow industry best practices and agile methodologies to ensure successful project delivery.",
              },
              {
                title: "Quality Assurance",
                description:
                  "Rigorous testing and quality control processes ensure robust and reliable solutions.",
              },
              {
                title: "Timely Delivery",
                description:
                  "We understand the importance of deadlines and ensure on-time project completion.",
              },
              {
                title: "Ongoing Support",
                description:
                  "We provide continuous support and maintenance to keep your solutions running smoothly.",
              },
              {
                title: "Cost Effective",
                description:
                  "Competitive pricing without compromising on quality or performance.",
              },
            ].map((item, index) => (
              <div key={index} className="bg-card p-6 rounded-lg shadow-lg">
                <CheckCircle2 className="h-8 w-8 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Client Testimonials</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Don&apos;t just take our word for it - hear what our clients have
              to say about working with INVENTOG.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-card p-6 rounded-lg shadow-lg">
                <div className="flex items-center mb-4">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={48}
                    height={48}
                    className="rounded-full"
                  />
                  <div className="ml-4">
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                <p className="text-muted-foreground">{testimonial.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "500+", label: "Projects Delivered" },
              { number: "98%", label: "Client Satisfaction" },
              { number: "50+", label: "Enterprise Clients" },
              { number: "24/7", label: "Support Available" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let&apos;s discuss how INVENTOG can help you achieve your digital
            transformation goals.
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link href="/contact">
              Schedule a Consultation <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
