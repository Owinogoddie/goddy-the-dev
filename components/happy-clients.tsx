"use client";

import React from "react";
import { AnimatedTooltip } from "./magicui/animated-tooltip";

const people = [
  {
    id: 1,
    name: "Dr. Emily Chen",
    designation: "EduTech Innovations",
    image: "/placeholder.png",
  },
  {
    id: 2,
    name: "John Muthomi",
    designation: "Kenyan Ministry of Agriculture",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: 3,
    name: "Sarah Ochieng",
    designation: "Tech Innovators Ltd",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 4,
    name: "Michael Ongaro",
    designation: "StartUp Dynamics",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: 5,
    name: "Grace Adhiambo",
    designation: "Mumias Sugar Company",
    image:
      "https://images.unsplash.com/photo-1598550874175-4d0ef436c909?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: 6,
    name: "David Kimani",
    designation: "AgriTech Solutions",
    image: "/placeholder.png",
  },
];

export function HappyClients() {
  return (
    <div className="flex flex-col items-center justify-center py-10 gap-7">
      <h2 className="text-lg capitalize">Some of My Happy Clients</h2>
      <div className="flex flex-row items-center justify-center mb-10 w-full">
        <AnimatedTooltip items={people} />
      </div>
    </div>
  );
}
