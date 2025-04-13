"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Calendar, Clock, User } from "lucide-react"

export default function Blog() {
  const posts = [
    {
      title: "The Future of Enterprise Cloud Architecture",
      excerpt: "Explore the latest trends and best practices in enterprise cloud architecture and how they're shaping the future of business.",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80",
      author: "Dr. Sarah Chen",
      date: "March 15, 2024",
      readTime: "8 min read",
      category: "Cloud Computing"
    },
    {
      title: "Digital Transformation Success Stories",
      excerpt: "Real-world examples of successful digital transformation initiatives and the lessons learned along the way.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80",
      author: "Michael Rodriguez",
      date: "March 12, 2024",
      readTime: "6 min read",
      category: "Digital Transformation"
    },
    {
      title: "Securing the Modern Enterprise",
      excerpt: "Essential cybersecurity strategies for protecting your organization in an increasingly digital world.",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80",
      author: "Alex Thompson",
      date: "March 10, 2024",
      readTime: "10 min read",
      category: "Cybersecurity"
    },
    {
      title: "AI in Enterprise Software",
      excerpt: "How artificial intelligence is revolutionizing enterprise software development and business operations.",
      image: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?auto=format&fit=crop&q=80",
      author: "Dr. James Wilson",
      date: "March 8, 2024",
      readTime: "7 min read",
      category: "Artificial Intelligence"
    },
    {
      title: "The Rise of Edge Computing",
      excerpt: "Understanding the impact of edge computing on enterprise architecture and performance.",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80",
      author: "Emily Chang",
      date: "March 5, 2024",
      readTime: "9 min read",
      category: "Technology Trends"
    },
    {
      title: "Microservices Architecture",
      excerpt: "Best practices for implementing microservices in enterprise applications.",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80",
      author: "David Kumar",
      date: "March 3, 2024",
      readTime: "11 min read",
      category: "Software Architecture"
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">INVENTOG Blog</h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Insights, trends, and expertise from our technology leaders.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, index) => (
              <motion.article
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all"
              >
                <Link href={`/blog/${post.title.toLowerCase().replace(/\s+/g, '-')}`}>
                  <div className="relative h-48">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <div className="text-sm text-primary mb-2">{post.category}</div>
                    <h2 className="text-xl font-semibold mb-2 hover:text-primary transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <User className="h-4 w-4 mr-1" />
                      <span className="mr-4">{post.author}</span>
                      <Calendar className="h-4 w-4 mr-1" />
                      <span className="mr-4">{post.date}</span>
                      <Clock className="h-4 w-4 mr-1" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}