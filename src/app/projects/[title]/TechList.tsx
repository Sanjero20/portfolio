import Badge from "@/components/Badge";

interface Props {
  techs: string[];
}

const TechList = ({ techs }: Props) => {
  return (
    <div className="flex flex-wrap gap-2">
      {techs.map((tech, index) => (
        <Badge key={index}>{tech}</Badge>
      ))}
    </div>
  );
};

export default TechList;
