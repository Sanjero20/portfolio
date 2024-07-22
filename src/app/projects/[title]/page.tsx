import Image from "next/image";
import ProjectLinks from "./ProjectLinks";
import TechList from "./TechList";
import SectionList from "./SectionList";
import getProjectData from "@/utils/getProjectData";

interface Props {
  params: { title: string };
}

const ProjectInfoPage = ({ params }: Props) => {
  const data = getProjectData(params.title);

  if (!data) return <>This project does not exist</>;

  return (
    <div className="prose prose-p:my-0">
      {/* Image */}
      <div className="not-prose relative aspect-video w-full bg-base-200">
        <Image
          src={data.imgSrc}
          alt={data.imgAlt}
          className="rounded-lg"
          width={1280}
          height={720}
          priority
        />
      </div>

      {/* Title  */}
      <div className="flex items-center justify-between">
        <h3 className="my-4">{data.title}</h3>

        <ProjectLinks links={data.links} />
      </div>

      <p>{data.description}</p>

      <h4>Tech</h4>
      <TechList techs={data.tech} />

      <SectionList header="Features" data={data.features} />

      {data.responsibilities && (
        <SectionList header="Responsibilities" data={data.responsibilities} />
      )}
    </div>
  );
};

export default ProjectInfoPage;
