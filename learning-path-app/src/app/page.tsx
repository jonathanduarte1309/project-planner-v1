import GoalDefinition from "@/components/GoalDefinition";
import ResourceList from "@/components/ResourceList";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold mb-8">Personalized Learning Pathway</h1>
      <GoalDefinition />
      <ResourceList />
    </main>
  );
}
