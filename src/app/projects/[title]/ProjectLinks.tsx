import Link from "next/link";
import { Github, Globe } from "lucide-react";

interface Props {
  links: {
    code: string;
    live: string;
  };
}

const ProjectLinks = ({ links }: Props) => {
  return (
    <div className="flex gap-4">
      <Link href={links.code} target="_blank">
        <span className="link link-primary hidden font-bold sm:block">
          View Code
        </span>

        {/* Icon for mobile */}
        <div className="rounded-lg border-2 border-secondary p-2 sm:hidden">
          <Github />
        </div>
      </Link>

      <Link href={links.live} target="_blank">
        <span className="link link-primary hidden font-bold sm:block">
          Live Site
        </span>

        {/* Icon for mobile */}
        <div className="rounded-lg border-2 border-primary p-2 sm:hidden">
          <Globe />
        </div>
      </Link>
    </div>
  );
};

export default ProjectLinks;
