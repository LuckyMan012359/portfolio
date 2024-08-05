import Blockquote from "@/components/typography/blockquote";
import H2 from "@/components/typography/h2";
import Muted from "@/components/typography/muted";
import P from "@/components/typography/p";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import type { Testimonial } from "@/data/testimonials";
import TESTIMONIALS from "@/data/testimonials";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function Testimonials() {
  return (
    <section id="testimonials" className="mx-auto mb-16 max-w-2xl px-4 pt-28">
      <H2 className="mx-auto mb-8 max-w-max">Testimonials</H2>

      <Carousel className="mx-auto">
        <div className="flex gap-2">
          <CarouselPrevious className="static" />
          <CarouselNext className="static" />
        </div>

        <CarouselContent>
          {TESTIMONIALS.map((testimonial) => (
            <CarouselItem key={testimonial.review}>
              <Testimonial testimonial={testimonial} />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
}

function Testimonial({
  testimonial: { name, imageUrl, review },
}: {
  testimonial: Testimonial;
}) {
  return (
    <Blockquote>
      <Avatar className="not-italic">
        <AvatarImage src={imageUrl?.src} />
        <AvatarFallback>
          {/* Initials of the name should be in fallback */}
          {name
            .split(" ")
            .map((name) => name.charAt(0))
            .join("")}
        </AvatarFallback>
      </Avatar>
      <P className="mb-2">&quot;{review}&quot;</P>
      <Muted>- {name}</Muted>
    </Blockquote>
  );
}
