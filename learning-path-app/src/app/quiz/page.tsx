import Quiz from "@/components/Quiz";

export default function QuizPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold mb-8">Quiz</h1>
      <Quiz />
    </main>
  );
}
