'use client'
import { Dock, DockIcon } from "@/components/magicui/dock";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import * as Tooltip from '@radix-ui/react-tooltip';

export type IconProps = React.HTMLAttributes<SVGElement>;
const ClickableDockIcon = ({ onClick, children, tooltip, ...props }:any) => (
  <Tooltip.Provider>
    <Tooltip.Root>
      <Tooltip.Trigger asChild>
        <div onClick={onClick} style={{ cursor: 'pointer' }}>
          <DockIcon {...props}>{children}</DockIcon>
        </div>
      </Tooltip.Trigger>
      <Tooltip.Portal>
        <Tooltip.Content
          className="bg-white text-black px-2 py-1 rounded shadow-md text-sm"
          sideOffset={5}
        >
          {tooltip}
          <Tooltip.Arrow className="fill-white" />
        </Tooltip.Content>
      </Tooltip.Portal>
    </Tooltip.Root>
  </Tooltip.Provider>
);
export function Navbar() {
    const [isMounted, setIsMounted] = useState(false)
    
    useEffect(() => {
        setIsMounted(true)
    }, [])

    const scrollToSection = (sectionId:any) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    }

    if (!isMounted) return null;

    return (
      <motion.div 
      className="bg-black z-[999] md:shadow-xl rounded-full"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
  >
      <Dock>
          <ClickableDockIcon onClick={() => scrollToSection('hero')} tooltip="Home">
              <Icons.home className="h-6 w-6 text-blue-500" />
          </ClickableDockIcon>
          <ClickableDockIcon onClick={() => scrollToSection('introduction')} tooltip="About Me">
              <Icons.user className="h-6 w-6 text-green-500" />
          </ClickableDockIcon>
          <ClickableDockIcon onClick={() => scrollToSection('projects')} tooltip="Projects">
              <Icons.briefcase className="h-6 w-6 text-yellow-500" />
          </ClickableDockIcon>
          <ClickableDockIcon onClick={() => scrollToSection('clients')} tooltip="Clients">
              <Icons.users className="h-6 w-6 text-purple-500" />
          </ClickableDockIcon>
          <ClickableDockIcon onClick={() => scrollToSection('experience')} tooltip="Experience">
              <Icons.award className="h-6 w-6 text-red-500" />
          </ClickableDockIcon>
          <ClickableDockIcon onClick={() => scrollToSection('approach')} tooltip="Approach">
              <Icons.lightbulb className="h-6 w-6 text-orange-500" />
          </ClickableDockIcon>
          <ClickableDockIcon onClick={() => scrollToSection('contact')} tooltip="Contact">
              <Icons.mail className="h-6 w-6 text-pink-500" />
          </ClickableDockIcon>
      </Dock>
  </motion.div>
    );
}

const Icons = {
    home: (props: IconProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#000319" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
    ),
    user: (props: IconProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
    ),
    briefcase: (props: IconProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#000319" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>
    ),
    users: (props: IconProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
    ),
    award: (props: IconProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#000319" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><circle cx="12" cy="8" r="7"></circle><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline></svg>
    ),
    lightbulb: (props: IconProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M9 18h6"></path><path d="M10 22h4"></path><path d="M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0 0 18 8 6 6 0 0 0 6 8c0 1 .23 2.23 1.5 3.5A4.61 4.61 0 0 1 8.91 14"></path></svg>
    ),
    mail: (props: IconProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#000319" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
    ),
};