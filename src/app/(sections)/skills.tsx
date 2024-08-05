import type { ReactNode } from "react";

import H2 from "@/components/typography/h2";
import P from "@/components/typography/p";
import {
  Accordion,
  AccordionTrigger,
  AccordionContent,
  AccordionItem,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import SKILLS, { type SkillKeyType } from "@/data/skills";
import { cn } from "@/lib/utils";

const keys = Object.keys(SKILLS) as SkillKeyType[];

export default function Skills() {
  return (
    <section
      id="skills"
      className="mx-auto flex max-w-2xl flex-col items-center justify-center px-4 pt-28"
    >
      <H2 className="mx-auto mb-8 w-max ">My Skills</H2>
      <Accordion
        type="multiple"
        defaultValue={[keys[0]]}
        className="w-full rounded-lg border px-4 shadow"
      >
        {keys.map((key, i) => (
          <AccordionItem
            className={cn("p-4", i === keys.length - 1 && "border-b-0")}
            value={key}
            key={key}
          >
            <AccordionTrigger className="items-center justify-center gap-2">
              {key}
            </AccordionTrigger>

            <AccordionContent className="ites-center flex flex-wrap justify-center gap-2">
              {SKILLS[key].map((skill) => (
                <SkillBadge key={skill}>{skill}</SkillBadge>
              ))}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}

function SkillBadge({ children }: { children: ReactNode }) {
  return (
    <Badge className="cursor-default rounded-lg shadow">
      <P>{children}</P>
    </Badge>
  );
}
