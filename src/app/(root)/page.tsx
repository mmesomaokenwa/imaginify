import Collection from "@/components/shared/Collection";
import NavLinks from "@/components/shared/NavLinks";
import { navLinks } from "@/constants";
import { getAllImages } from "@/lib/actions/image.actions";

const Home = async ({ searchParams }: SearchParamProps) => {
  const page = Number(searchParams?.page) || 1;
  const searchQuery = (searchParams?.query as string) || "";

  const images = await getAllImages({ page, searchQuery });

  return (
    <>
      <section className="home">
        <h1 className="home-heading">
          Unleash Your Creative Vision with Imaginify
        </h1>
        <NavLinks
          links={navLinks.slice(1, 5)}
          classNames={{
            container: "flex-center w-full gap-20",
            link: "flex-center flex-col gap-2",
            iconContainer: "flex-center w-fit rounded-full bg-white p-4",
            label: "p-14-medium text-center text-white",
          }}
          showIcon
        />
      </section>

      <section className="sm:mt-12">
        <Collection
          hasSearch
          images={images?.data}
          totalPages={images?.totalPage}
          page={page}
        />
      </section>
    </>
  );
};

export default Home;
