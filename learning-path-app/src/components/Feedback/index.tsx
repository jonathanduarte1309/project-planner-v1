type FeedbackProps = {
  score: number;
  totalQuestions: number;
};

export default function Feedback({ score, totalQuestions }: FeedbackProps) {
  const percentage = (score / totalQuestions) * 100;

  let feedbackMessage = "";
  if (percentage === 100) {
    feedbackMessage = "Excellent work! You've mastered this topic.";
  } else if (percentage >= 75) {
    feedbackMessage = "Good job! You have a solid understanding of the material.";
  } else if (percentage >= 50) {
    feedbackMessage = "You're making progress, but there are some areas for improvement.";
  } else {
    feedbackMessage = "It looks like you're struggling with this topic. We recommend reviewing the material and trying again.";
  }

  return (
    <div className="w-full max-w-xl mx-auto mt-8 p-4 bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700">
      <p className="font-bold">Feedback</p>
      <p>{feedbackMessage}</p>
    </div>
  );
}
