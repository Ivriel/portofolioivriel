import { forwardRef } from "react";
import ArrowRight from "./ArrowRight";

function Project(props, ref) {
  return (
    <div ref={ref} className="text-white w-full mt-40" id="project">
      <div className="flex justify-between w-full items-center">
        <h1 className="font-medium text-[28px] border border-white px-8 py-2 rounded-full">
          Projects
        </h1>

        <a
          className="group flex items-center gap-2 cursor-pointer transition-colors"
          href="/projects"
        >
          <p className="text-[18px] text-white group-hover:text-gray-400 transition-colors">
            See More
          </p>
          <ArrowRight className="w-6 h-6 text-white group-hover:text-gray-400 transition-colors" />
        </a>
      </div>
      
    </div>
  );
}

export default forwardRef(Project);
