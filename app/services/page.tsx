import { Filters, ServiceCard } from "@/components/custom";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Filters />

      <ServiceCard />
    </main>
  );
}
