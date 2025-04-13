"use client"

import { motion } from "framer-motion"
import { Cloud, Code2, Cpu, Database, Globe, Lock, Server, Settings } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Services() {
  const services = [
    {
      icon: <Cloud className="h-12 w-12" />,
      title: "Cloud Solutions",
      description: "Scalable and secure cloud infrastructure designed for enterprise needs.",
      features: ["Cloud Migration", "AWS & Azure Solutions", "Serverless Architecture", "Cloud Security"]
    },
    {
      icon: <Cpu className="h-12 w-12" />,
      title: "Digital Transformation",
      description: "End-to-end digital transformation services to modernize your business.",
      features: ["Process Automation", "Legacy System Modernization", "Digital Strategy", "Technology Consulting"]
    },
    {
      icon: <Code2 className="h-12 w-12" />,
      title: "Custom Development",
      description: "Tailored software solutions built with cutting-edge technologies.",
      features: ["Web Applications", "Mobile Apps", "Enterprise Software", "API Development"]
    },
    {
      icon: <Database className="h-12 w-12" />,
      title: "Data Solutions",
      description: "Comprehensive data management and analytics services.",
      features: ["Big Data Analytics", "Data Warehousing", "Business Intelligence", "Data Migration"]
    },
    {
      icon: <Lock className="h-12 w-12" />,
      title: "Cybersecurity",
      description: "Advanced security solutions to protect your digital assets.",
      features: ["Security Audits", "Penetration Testing", "Compliance Solutions", "Security Training"]
    },
    {
      icon: <Settings className="h-12 w-12" />,
      title: "Managed IT Services",
      description: "Proactive IT management and support for your organization.",
      features: ["24/7 Support", "Infrastructure Management", "System Monitoring", "IT Consulting"]
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Enterprise Solutions</h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Comprehensive technology solutions tailored to transform and elevate your business.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card p-6 rounded-lg shadow-lg hover:shadow-xl transition-all"
              >
                <div className="text-primary mb-4">{service.icon}</div>
                <h3 className="text-2xl font-semibold mb-3">{service.title}</h3>
                <p className="text-muted-foreground mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-center text-sm text-muted-foreground">
                      <Globe className="h-4 w-4 mr-2 text-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Our Process</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We follow a systematic approach to ensure successful project delivery.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { number: "01", title: "Discovery", description: "Understanding your needs" },
              { number: "02", title: "Planning", description: "Strategic solution design" },
              { number: "03", title: "Development", description: "Agile implementation" },
              { number: "04", title: "Delivery", description: "Deployment & support" }
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="text-center"
              >
                <div className="text-4xl font-bold text-primary mb-4">{step.number}</div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
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
            <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-xl mb-8">
              Let's discuss how we can help transform your business.
            </p>
            <Button size="lg" variant="secondary" asChild>
              <Link href="/contact">Schedule a Consultation</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  )
}