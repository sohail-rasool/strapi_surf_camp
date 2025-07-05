import { HeroSection } from "@/components/blocks/HeroSection";
import { getHomePage } from "@/data/loaders";
import { notFound } from "next/navigation";

async function loader() {
  const data = await getHomePage();
  if (!data) return notFound();
  console.log("data ==>", data);
  return { ...data?.data };
}
export default async function Home() {
  const data = await loader();
  const blocks = data?.blocks

  return (
    <div>
      <HeroSection {...blocks[0]} />
    </div>
  );
}
