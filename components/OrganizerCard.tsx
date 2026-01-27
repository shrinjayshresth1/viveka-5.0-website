"use client";

import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import { Linkedin } from "lucide-react";

interface OrganizerCardProps {
  name: string;
  role: string;
  image: string;
  linkedin?: string;
  course?: string;
}

export default function OrganizerCard({ name, role, image, linkedin, course }: OrganizerCardProps) {
  return (
    <CardContainer className="inter-var">
      <CardBody className="bg-black/40 relative group/card dark:hover:shadow-2xl dark:hover:shadow-neon-cyan/[0.1] border-white/10 w-auto sm:w-[20rem] h-auto rounded-xl p-6 border transition-colors hover:border-neon-cyan/50">
        
        {/* Name (Floats on hover) */}
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-white font-space-grotesk"
        >
          {name}
        </CardItem>
        
        {/* Role (Floats slightly less) */}
        <CardItem
          as="p"
          translateZ="60"
          className="text-neon-cyan text-sm max-w-sm mt-2 font-mono uppercase tracking-wider"
        >
          {role}
        </CardItem>

        {/* Course/Year (Adding this) */}
        {course && (
          <CardItem
            as="p"
            translateZ="55"
            className="text-gray-400 text-xs mt-1 font-mono uppercase"
          >
            {course}
          </CardItem>
        )}
        
        {/* Image (Deep layer) */}
        <CardItem translateZ="100" className="w-full mt-4">
          <div className="relative w-full h-64 overflow-hidden rounded-xl group-hover/card:shadow-xl">
               <img
                src={image}
                height="1000"
                width="1000"
                className="h-full w-full object-cover object-top rounded-xl group-hover/card:scale-110 transition-transform duration-500"
                alt={name}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />
          </div>
        </CardItem>
        
        {/* Social Buttons (Highest layer) */}
        <div className="flex justify-between items-center mt-8">
          <CardItem
            translateZ={20}
            as="button"
            className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
          >
            View Profile →
          </CardItem>
          
          <CardItem
            translateZ={20}
            className="flex gap-2"
          >
            {linkedin && (
                <a 
                    href={linkedin} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-white/10 hover:bg-white hover:text-black transition-colors inline-flex items-center justify-center"
                >
                    <Linkedin size={16} />
                </a>
            )}
          </CardItem>
        </div>

      </CardBody>
    </CardContainer>
  );
}
