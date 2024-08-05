const SKILLS = {
  "Front-End Development": [
    "HTML",
    "CSS",
    "JS",
    "Angular",
    "React",
    "Vue",
    "Redux",
    "TypeScript",
    "Backbone",
    "Bootstrap",
    "Next.js",
    "TailwindCSS",
  ],
  "Back-End Development": [
    "Python",
    "NumPy",
    "SciPy",
    "Scikit-learn",
    "Keras",
    "Eli5",
    "TensorFlow",
    "MySQL",
    "NodeJS",
    "Redis",
    "AWS",
    "MongoDB",
    "Spark",
  ],
  "Development & Operations": [
    "JUnit",
    "NUnit",
    "PyUnit",
    "TestCafe",
    "Mocha",
    "Jest",
    "Scrum",
    "Agile",
    "GIT",
    "Azure",
    "DevOps",
  ],
};

export default SKILLS;

type SkillsType = typeof SKILLS;

export type SkillKeyType = keyof SkillsType;
