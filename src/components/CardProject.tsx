import Image from "next/image";

interface Props {
  title: string;
  description: string;
  imgSrc: string;
  imgAlt: string;
}

const CardProject = (props: Props) => {
  const { title, description, imgSrc, imgAlt } = props;

  return (
    <div className="card card-compact cursor-pointer rounded-xl bg-base-100 shadow-xl">
      <figure>
        <Image width={800} height={800} src={imgSrc} alt={imgAlt} />
      </figure>

      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default CardProject;
