import Badge from "@/components/Badge";
import { TECHNICAL_SKILLS } from "@/data/skills";

const TechnicalSkills = () => {
  return (
    <section>
      <h2>Tech Stack</h2>
      <p className="mb-2">
        This are the technologies that I&apos;ve used for building projects:
      </p>

      <div className="flex w-full flex-wrap gap-2">
        {TECHNICAL_SKILLS.map((skill, index) => (
          <Badge key={index}>{skill}</Badge>
        ))}
      </div>
    </section>
  );
};

export default TechnicalSkills;
