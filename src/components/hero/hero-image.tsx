"use client";

import { motion } from "framer-motion";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Skeleton } from "@/components/ui/skeleton";
import { PROFILE_IMAGE_PATH } from "@/data/personal";

const AnimatedAvatar = motion(Avatar);

const hoverAnimation = {
  rotate: 1,
  scale: 1.15,
};

export default function HeroImage() {
  return (
    <AnimatedAvatar
      className="mb-4 h-48 w-48"
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: "spring" }}
      whileHover={hoverAnimation}
      whileFocus={hoverAnimation}
      whileTap={hoverAnimation}
    >
      <AvatarFallback>
        <Skeleton className="h-full w-full rounded-full"></Skeleton>
      </AvatarFallback>
      <AvatarImage src={`${PROFILE_IMAGE_PATH}`} />
    </AnimatedAvatar>
  );
}
