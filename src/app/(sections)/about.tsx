import H2 from "@/components/typography/h2";
import P from "@/components/typography/p";

export default function About() {
  return (
    <section
      id="about"
      className="mx-auto max-w-2xl px-4 pt-28 text-justify text-muted-foreground"
    >
      <H2 className="mx-auto w-max text-foreground">About Me</H2>
      <P>
        As a seasoned full-stack developer with seven years of experience,
        I&apos;ve honed my skills to create seamless digital solutions from
        front-end to back-end. My journey began with mastering HTML, CSS, and
        JavaScript for crafting captivating user interfaces that deliver
        exceptional user experiences. Over the years, I&apos;ve delved into
        various frameworks like React, Angular, and Vue.js, leveraging their
        power to build dynamic and responsive web applications.
      </P>
      <P>
        On the back-end side, I&apos;ve become proficient in languages such as
        Python, Node.js, and Java, architecting robust server-side systems that
        handle complex business logic efficiently. I&apos;ve worked extensively
        with databases, including SQL and NoSQL variants, designing schemas and
        optimizing queries for performance. My expertise extends to deploying
        applications on cloud platforms like AWS, Azure, and Google Cloud,
        ensuring scalability and reliability.
      </P>
      <P>
        Collaboration is key in my approach; I thrive in agile environments,
        working closely with cross-functional teams to translate client
        requirements into scalable solutions. Beyond coding, I prioritize clean
        code practices, documentation, and continuous integration and deployment
        strategies to streamline the development process. With a passion for
        staying updated on emerging technologies and trends, I&apos;m committed
        to delivering cutting-edge solutions that exceed client expectations.
      </P>
    </section>
  );
}
