import H2 from "@/components/typography/h2";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import SERVICES from "@/data/services";

export default function Services() {
  return (
    <section id="services" className="px-4 pt-24">
      <H2 className="mx-auto mb-8 w-max">Our Services</H2>

      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-4 md:grid-cols-2">
        {SERVICES.map(({ title, description, icon }) => (
          <Card className="group flex cursor-default" key={title}>
            <CardContent className="flex items-center justify-center py-0 pb-1 pr-0 text-muted-foreground transition-colors group-hover:text-primary group-hover:transition-colors">
              {icon}
            </CardContent>

            <CardHeader>
              <CardTitle className="transition-colors group-hover:text-primary group-hover:transition-colors">
                {title}
              </CardTitle>
              <CardDescription className="transition-colors group-hover:text-foreground group-hover:transition-colors">
                {description}
              </CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>
    </section>
  );
}
