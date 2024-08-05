import Image from "next/image";

import H2 from "@/components/typography/h2";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import PORTFOLIO, {
  type PortfolioItem,
  type ProjectType,
} from "@/data/portfolio";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";

const PROJECT_TYPES = Object.keys(PORTFOLIO) as ProjectType[];

export default function Portfolio() {
  return (
    <section id="portfolio" className="mx-auto max-w-7xl px-4 pt-28">
      <H2 className="mx-auto mb-8 w-max text-center">Portfolio</H2>

      <Tabs
        className="grid max-w-7xl grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-[max-content_minmax(0,1fr)]"
        defaultValue={Object.keys(PORTFOLIO)[0]}
      >
        <TabsList className="h-min flex-col items-start justify-start border p-3 shadow">
          {PROJECT_TYPES.map((projectType) => (
            <TabsTrigger
              className="w-full justify-start"
              key={projectType}
              value={projectType}
            >
              {projectType}
            </TabsTrigger>
          ))}
        </TabsList>

        <div className="overflow-hidden rounded-lg border bg-muted pt-4">
          <ScrollArea className="pb-6">
            <ScrollBar orientation="horizontal" className="" />
            {PROJECT_TYPES.map((projectType) => (
              <TabsContent
                className="m-0 flex w-max "
                key={projectType}
                value={projectType}
              >
                {PORTFOLIO[projectType].map((portfolioItem, i) => (
                  <PortfolioCard
                    key={portfolioItem.title}
                    portfolioItem={portfolioItem}
                    isLastCard={i === PORTFOLIO[projectType].length - 1}
                  />
                ))}
              </TabsContent>
            ))}
          </ScrollArea>
        </div>
      </Tabs>
    </section>
  );
}

function PortfolioCard({
  portfolioItem: { url, description, imageUrl, technologies, title },
  isLastCard = false,
}: {
  portfolioItem: PortfolioItem;
  isLastCard: boolean;
}) {
  return (
    <a className="" target="_blank" href={url}>
      <Card
        className={cn(
          "ml-4 max-w-[23rem] transition-colors hover:border-primary",
          isLastCard && "mr-4",
        )}
      >
        <CardHeader>
          <CardTitle>{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
        <CardContent className="mx-0 px-0">
          <Image priority={true} src={imageUrl} alt={title} quality={100} />
        </CardContent>
        <CardFooter className="flex-wrap gap-2">
          {technologies.map((technology) => (
            <Badge key={technology}>{technology}</Badge>
          ))}
        </CardFooter>
      </Card>
    </a>
  );
}
