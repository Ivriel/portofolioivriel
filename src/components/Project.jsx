import { forwardRef } from "react"

function Project(props,ref3) {
  return (
    <div ref={ref3} className="text-white h-96 bg-blue-700">Project</div>
  )
}

export default forwardRef(Project)