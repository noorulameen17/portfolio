"use client";

import { NavBar as TubeNavBar } from "@/components/ui/tubelight-navbar";
import { Briefcase, Code2, FileText, Mail, User } from "lucide-react";

export default function Navbar() {
  const items = [
    { name: "Work", url: "#projects", icon: Briefcase },
    { name: "Skills", url: "#skills", icon: Code2 },
    { name: "About Me", url: "#home", icon: User },
    { name: "Contact", url: "#contact", icon: Mail },
    { name: "Resume", url: "/Noorul%20Ameen%20Resume.pdf", icon: FileText },
  ];

  return <TubeNavBar items={items} />;
}
