import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

import Header from "@/components/shared/Header";
import { plans } from "@/constants";
import { getUserById } from "@/lib/actions/user.actions";
import PlanCard from "@/components/shared/PlanCard";

const Credits = async () => {
  const { userId } = auth();

  if (!userId) redirect("/sign-in");

  const user = await getUserById(userId);

  if (!user) redirect("/sign-in");

  return (
    <>
      <Header
        title="Buy Credits"
        subtitle="Choose a credit package that suits your needs!"
      />

      <section>
        <ul className="credits-list">
          {plans.map((plan) => (
            <PlanCard key={plan.name} plan={plan} userId={user._id} />
          ))}
        </ul>
      </section>
    </>
  );
};

export default Credits;
