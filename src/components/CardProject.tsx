import Image from "next/image";
import Link from "next/link";

interface Props {
  title: string;
  description: string;
  imgSrc: string;
  imgAlt: string;
}

const CardProject = (props: Props) => {
  const { title, description, imgSrc, imgAlt } = props;
  const project_url = title.toLowerCase().replaceAll(" ", "-");

  return (
    <Link href={`./projects/${project_url}`}>
      <div className="card card-compact cursor-pointer rounded-lg bg-base-100 shadow-xl">
        <figure>
          <Image width={800} height={800} src={imgSrc} alt={imgAlt} />
        </figure>

        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>{description}</p>
        </div>
      </div>
    </Link>
  );
};

export default CardProject;
