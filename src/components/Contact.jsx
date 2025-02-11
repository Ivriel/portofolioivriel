import { forwardRef } from "react"

function Contact(props,ref4) {
  return (
    <div ref={ref4} className="text-white h-96 bg-yellow-400">Kontak</div>
  )
}

export default forwardRef(Contact)