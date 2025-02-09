import { projectsData } from '@/utils/data/projects-data';
import ProjectCard from './project-card';

const Projects = () => {
  return (
    <div id="projects" className="relative z-50 my-12 lg:my-24">
      <div className="sticky top-10">
        <div className="w-[80px] h-[80px] bg-violet-100 rounded-full absolute -top-3 left-0 translate-x-1/2 filter blur-3xl opacity-30"></div>
        <div className="flex items-center justify-center relative"> {/* Center the title */}
          <span className="bg-[#1a1443] text-center absolute w-fit text-white px-5 py-3 text-xl rounded-md">
           ALL PROJECTS
          </span>
          <span className="w-full h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      <div className="pt-24">
        <div className="relative">
          {projectsData.map((project, index) => (
            <div
              key={index}
              className="sticky-card w-full mx-auto max-w-2xl"
              style={{
                top: `${index * 120}px`, // Adjust spacing between stacked cards
              }}
            >
              <div className="box-border flex items-center justify-center rounded shadow-[0_0_30px_0_rgba(0,0,0,0.3)] transition-all duration-[0.5s]">
                <ProjectCard project={project} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
