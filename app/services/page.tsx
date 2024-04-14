import { Filters } from "@/components/custom";
import axios from "@/api";

const getServicesCategories = async () => {
  try {
    const { data } = await axios.get("/services/categories");

    return data;
  } catch (error) {
    console.log("error", error);
  }
};

export default async function Home() {
  const serviceCategories = await getServicesCategories();

  console.log("serviceCategories", serviceCategories);

  return <Filters />;
}
