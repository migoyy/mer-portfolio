import { m } from "framer-motion";
import { FaGithub } from "react-icons/fa6";
import { HiArrowTopRightOnSquare } from "react-icons/hi2";
import Card from "@components/ui/Card";
import Badge from "@components/ui/Badge";
import { fadeInUp } from "@utils/motionVariants";

export default function ProjectCard({ project }) {
  const { title, description, image, stack, liveUrl, githubUrl, featured } =
    project;

  return (
    <m.article variants={fadeInUp} layout>
      <Card hoverable className="group h-full flex flex-col">
        {/* Thumbnail */}
        <div className="relative aspect-[16/10] overflow-hidden">
          <img
            src={image}
            alt={title}
            loading="lazy"
            className="h-full w-full object-cover
                       transition-transform duration-700 ease-out
                       group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-surface-50/95 via-surface-50/30 to-transparent" />
          {featured && (
            <Badge variant="brand" className="absolute top-4 left-4">
              ★ Featured
            </Badge>
          )}
        </div>

        {/* Body */}
        <div className="p-6 flex-1 flex flex-col">
          <h3 className="text-xl font-semibold group-hover:text-brand-300 transition-colors">
            {title}
          </h3>
          <p className="mt-3 text-sm text-ink-300 leading-relaxed">
            {description}
          </p>

          {/* Tech stack */}
          <div className="mt-5 flex flex-wrap gap-2">
            {stack.map((tech) => (
              <Badge key={tech}>{tech}</Badge>
            ))}
          </div>

          {/* Action buttons */}
          <div className="mt-6 pt-5 border-t border-white/[0.05] flex gap-3">
            {githubUrl && (
              <a
                href={githubUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-sm text-ink-200
                           hover:text-brand-300 transition-colors"
              >
                <FaGithub /> Code
              </a>
            )}
            {liveUrl && (
              <a
                href={liveUrl}
                target="_blank"
                rel="noreferrer"
                className="ml-auto inline-flex items-center gap-2 text-sm
                           text-brand-300 hover:text-brand-200 transition-colors"
              >
                Live demo <HiArrowTopRightOnSquare />
              </a>
            )}
          </div>
        </div>
      </Card>
    </m.article>
  );
}
