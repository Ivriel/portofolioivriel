import { forwardRef } from "react"

function About(props, ref2) {
  return (
    <div ref={ref2} className="text-white mt-[50px] h-96 bg-red-500" id="about">
      About
      TES VERCEL
    </div>
  )
}

export default forwardRef(About)
