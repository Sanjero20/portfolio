import getProjectData from "@/utils/getProjectData";
import Image from "next/image";
import Link from "next/link";

interface Props {
  params: { title: string };
}

const ProjectInfoPage = ({ params }: Props) => {
  const data = getProjectData(params.title);

  if (!data) return <>This project does not exist</>;

  return (
    <div className="prose prose-headings:my-2 prose-p:my-2">
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
      <div className="flex items-center justify-between">
        <h3>{data.title}</h3>

        <div className="flex gap-2">
          <Link href={data.links.code} target="_blank">
            <button className="btn btn-link">View Code</button>
          </Link>

          <Link href={data.links.live} target="_blank">
            <button className="btn btn-link">Live Site</button>
          </Link>
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
