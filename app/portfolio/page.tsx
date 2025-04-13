"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function Portfolio() {
  const projects = [
    {
      title: "Enterprise Resource Planning System",
      category: "Digital Transformation",
      description: "Complete digital transformation for a Fortune 500 manufacturing company.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80",
      technologies: ["Cloud Architecture", "React", "Node.js", "PostgreSQL"],
      results: ["30% increase in efficiency", "50% reduction in manual processes"]
    },
    {
      title: "Smart City Infrastructure",
      category: "IoT Solutions",
      description: "Innovative IoT solution for urban infrastructure management.",
      image: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?auto=format&fit=crop&q=80",
      technologies: ["IoT", "AI/ML", "Cloud Computing", "Real-time Analytics"],
      results: ["40% energy savings", "Real-time monitoring of city services"]
    },
    {
      title: "Financial Services Platform",
      category: "FinTech",
      description: "Secure and scalable platform for digital banking services.",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80",
      technologies: ["Microservices", "Blockchain", "AWS", "Security"],
      results: ["99.99% uptime", "Military-grade security implementation"]
    },
    {
      title: "Healthcare Management System",
      category: "Healthcare",
      description: "Comprehensive healthcare management solution for hospitals.",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80",
      technologies: ["HIPAA Compliance", "Electronic Health Records", "AI Diagnostics"],
      results: ["45% faster patient processing", "100% HIPAA compliance"]
    },
    {
      title: "E-commerce Platform",
      category: "Retail",
      description: "Scalable e-commerce solution with AI-powered recommendations.",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80",
      technologies: ["Next.js", "AI/ML", "Microservices", "Redis"],
      results: ["200% increase in sales", "Enhanced user engagement"]
    },
    {
      title: "Supply Chain Management",
      category: "Logistics",
      description: "Blockchain-based supply chain tracking system.",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80",
      technologies: ["Blockchain", "IoT", "Real-time Tracking", "Analytics"],
      results: ["100% transparency", "60% reduction in delays"]
    }
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Portfolio</h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Discover how we've helped businesses transform and succeed in the digital age.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.1,
                  duration: 0.5
                }}
                className="bg-card rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="relative h-48">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="text-sm text-primary mb-2">{project.category}</div>
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold mb-2">Technologies</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="text-xs bg-primary/10 text-primary px-2 py-1 rounded"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-2">Key Results</h4>
                    <ul className="list-disc list-inside text-sm text-muted-foreground">
                      {project.results.map((result, resultIndex) => (
                        <li key={resultIndex}>{result}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-4">Ready to Build Something Amazing?</h2>
            <p className="text-xl mb-8">
              Let's create your success story together.
            </p>
            <Button size="lg" variant="secondary" asChild>
              <Link href="/contact">
                Start Your Project <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  )
}