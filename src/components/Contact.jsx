import { forwardRef } from "react"

function Contact(props,ref4) {
  return (
    <div ref={ref4} className="text-white w-full mt-40 h-[250px] bg-red-500 mb-10" id="contact">
      Kontak
    </div>
  )
}

export default forwardRef(Contact)