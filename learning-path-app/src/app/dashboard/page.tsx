import Dashboard from "@/components/Dashboard";
import MentorSupport from "@/components/MentorSupport";

export default function DashboardPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold mb-8">Your Progress</h1>
      <Dashboard />
      <MentorSupport />
    </main>
  );
}
