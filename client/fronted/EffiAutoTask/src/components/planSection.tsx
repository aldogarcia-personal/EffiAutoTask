import PlanCard from "./planCard"
import Nav from "./Nav"
import { useNavigate } from "react-router-dom"

const PlanSection = () => {
  const navigate = useNavigate()
  const handleShowRegister = () => {
    navigate("/account/register")
  }
  return (
    <div>
      <Nav />
      <main>
        {/* PlanCard individual */}
        <PlanCard />

        {/* Esta sección es la que compara planes */}
        <section>
          <h2>Planes y Features</h2>

          <div className="plans-comparison">
            <article>
              <h3>Free</h3>
              <input onClick={handleShowRegister} type="submit" name="" id="" />
              <span>0$ per month</span>
              <ul>
                <li>Feature 1</li>
                <li>Feature 2</li>
              </ul>
            </article>

            <article>
              <h3>Early Access</h3>
              <span>Free for limited time</span>
              <ul>
                <li>Feature 1</li>
                <li>Feature 2</li>
                <li>Feature 3</li>
              </ul>
            </article>
          </div>
        </section>
      </main>
    </div>
  )
}

export default PlanSection
