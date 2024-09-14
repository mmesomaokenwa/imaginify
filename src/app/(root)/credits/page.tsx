import Header from "@/components/shared/Header";
import { plans } from "@/constants";
import PlanCard from "@/components/shared/PlanCard";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Buy Credits",
  description: "Choose a credit package that suits your needs!",
  openGraph: {
    title: "Buy Credits",
    description: "Choose a credit package that suits your needs!",
  },
}

const Credits = () => {
  return (
    <>
      <Header
        title="Buy Credits"
        subtitle="Choose a credit package that suits your needs!"
      />

      <section>
        <ul className="credits-list">
          {plans.map((plan) => (
            <PlanCard key={plan.name} plan={plan} />
          ))}
        </ul>
      </section>
    </>
  );
};

export default Credits;
