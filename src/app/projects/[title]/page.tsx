import getProjectData from "@/utils/getProjectData";
import Image from "next/image";

interface Props {
  params: { title: string };
}

const ProjectInfoPage = ({ params }: Props) => {
  const data = getProjectData(params.title);

  if (!data) return <>This project does not exist</>;

  return (
    <div className="prose">
      {/* Image */}
      <div className="not-prose relative aspect-video w-full bg-base-200">
        <Image
          src={data.imgSrc}
          alt={data.imgAlt}
          className="rounded-lg"
          fill
        />
      </div>

      {/* Title  */}
      <div className="mb-4 flex items-center justify-between">
        <h3 className="my-0">{data.title}</h3>

        <div className="flex gap-2">
          <button className="btn btn-link w-fit">View Code</button>
          <button className="btn btn-link w-fit">Live Site</button>
        </div>
      </div>
      <p>{data.description}</p>

      <h4>Features</h4>

      <h4>Tech Stack</h4>

      <h4>Images</h4>
    </div>
  );
};

export default ProjectInfoPage;
