"use client"

import { motion } from 'framer-motion'
import { Card, CardContent } from "../components/ui/card"

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
        <Card>
          <CardContent className="p-6">
  <p className="text-lg mb-4" >
   <b> Hi, I&apos;m Noorul Ameen! </b><br></br>
     I am a Bachelor's student in Computer Science with a strong passion for technology and innovation. My skills include programming, working with AI, and solving problems using new technologies. I’ve also dabbled in graphic design, making cool flyers and content at a local restaurant using Canva. I have gained valuable experience as an AI Trainer at Outlier and as a Software Engineering Fellow at Headstarter AI, where I developed my technical and leadership skills.
            </p>
            
  <p className="text-lg mb-4">
    Lowkey obsessed with AI tools - not just for work, but for pretty much everything <b>(yep, everything)</b>. Always learning, always leveling up!
    </p>
              
          </CardContent>
        </Card>
      </motion.div>
    </section>
  )
}

