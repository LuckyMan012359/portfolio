import Muted from "@/components/typography/muted";

const currentYear = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="flex flex-col gap-2 border-t p-4 text-center shadow sm:p-8">
      <Muted>&copy; {currentYear} Usama. All rights reserved.</Muted>
      <Muted>
        <strong>Tech Stack: </strong>
        <span>
          This website is built with ♥ using NextJS 14, React, Tailwind CSS,
          Typescript, ShadCN-UI, and Framer Motion. It is hosted by Vercel.
        </span>
      </Muted>
    </footer>
  );
}
