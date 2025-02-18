"use client"

import { motion } from 'framer-motion'
import { CardContent } from "../components/ui/card"

export function AboutMe() {
  return (
    <section id="about" className="py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
        
          <CardContent className="p-6">
            <p className="text-lg mb-4">
              <b> Hi&#44; I&apos;m Noorul Ameen&#33; </b>
              <br></br>I am a Bachelor&apos;s student in Computer Science with a
              strong passion for technology and innovation. My skills include
              programming&#44; working with AI&#44; and solving problems using
              new technologies. I&apos;ve also dabbled in graphic design&#44;
              making cool flyers and content at a local restaurant using Canva.
              I have gained valuable experience as an AI Trainer at Outlier and
            </p>
          </CardContent>
        
      </motion.div>
    </section>
  );
}

