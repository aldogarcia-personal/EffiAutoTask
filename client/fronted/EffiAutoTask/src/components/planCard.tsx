import { useState } from "react"
import { useNavigate } from "react-router-dom"

const PlanCard = () => {
  const navigate = useNavigate()
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold">Plan</h1>
      <p className="text-xl">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod,
        nisl eget ultricies aliquam, nisi nisl aliquet nisi, in vehicula nisl
        nunc nec erat. Sed euismod, nisl eget ultricies aliquam, nisi nisl
        aliquet nisi, in vehicula nisl nunc nec erat. Sed euismod, nisl eget
        ultricies aliquam, nisi nisl aliquet nisi, in vehicula nisl nunc nec
        erat. Sed euismod, nisl eget ultricies aliquam, nisi nisl aliquet nisi,
        in vehicula nisl nunc nec erat. Sed euismod, nisl eget ultricies
        aliquam, nisi nisl aliquet nisi, in vehicula nisl nunc nec erat. Sed
        euismod, nisl eget ultricies aliquam, nisi nisl aliquet nisi, in
        vehicula nisl nunc nec erat.
      </p>
    </div>
  )
}
export default PlanCard
