import FeatureSection from "./featureSection"
import PlanCard from "./planCard"
import useDarkMode from "../hooks/useDarkMode"

const PlanSection = () => {
  const { darkMode } = useDarkMode()
  return (
    <main>
      <section>
        <PlanCard />
      </section>

      <section>
        <FeatureSection darkMode={darkMode} />
      </section>
    </main>
  )
}
export default PlanSection
