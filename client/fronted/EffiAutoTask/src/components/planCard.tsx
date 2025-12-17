import { useState } from "react"
import { useNavigate } from "react-router-dom"

const PlanCard = () => {
  const navigate = useNavigate()
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1>planes </h1>

      <ul>
        <li>
          <section>
            <h2>Early access for limited time</h2>
            <span> Free for limited time</span>
            <button
              onClick={() => navigate("/account/register")}
              type="submit"
              name=""
              id=""
              className="bg-0056B3 text-f5f5dc px-4 py-2 rounded-full"
            >
              resgistrate
            </button>
          </section>
        </li>
      </ul>
    </div>
  )
}
export default PlanCard
