import PlanCard from "./planCard"
import { useNavigate } from "react-router-dom"

const FeatureSection = () => {
  const navigate = useNavigate()
  const handleShowRegister = () => {
    navigate("/account/register")
  }
  return (
    <div>
      <main>
        {/* PlanCard individual */}
        <PlanCard />

        {/* Esta sección es la que compara planes */}
        <section>
          <h2>Planes y Features</h2>

          <div className="plans-comparison">
            <article>
              <h3>Free</h3>
              <button
                onClick={handleShowRegister}
                type="submit"
                name=""
                id=""
              />
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

            <article>
              <h3>Student Pro</h3>
              <span>10$ per month</span>
              <button onClick={handleShowRegister} name="" id="">
                verifica tu universidad
              </button>
              <ul>
                <li>Feature 1</li>
                <li>Feature 2</li>
                <li>Feature 3</li>
                <li>Feature 4</li>
              </ul>
            </article>
            <article>
              <h3>Pro</h3>
              <span>20$ per month</span>
              <button onClick={handleShowRegister} name="" id=""></button>
              <ul>
                <li>Feature 1</li>
                <li>Feature 2</li>
                <li>Feature 3</li>
              </ul>
            </article>

            <article>
              <h3>Business</h3>
              <span>30$ per month</span>
              <button onClick={handleShowRegister} name="" id=""></button>
              <ul>
                <li>Feature 1</li>
                <li>Feature 2</li>
                <li>Feature 3</li>
                <li>Feature 4</li>
              </ul>
            </article>
          </div>
        </section>
      </main>
    </div>
  )
}

export default FeatureSection
