type Module = {
  title: string;
  status: "completed" | "in-progress" | "not-started";
  timeInvested: string; // e.g., "2h 30m"
};

const modules: Module[] = [
  {
    title: "Python Basics",
    status: "completed",
    timeInvested: "5h",
  },
  {
    title: "Data Structures",
    status: "in-progress",
    timeInvested: "2h 30m",
  },
  {
    title: "Introduction to Pandas",
    status: "not-started",
    timeInvested: "0h",
  },
];

export default function Dashboard() {
  return (
    <div className="w-full max-w-4xl mx-auto mt-8">
      <h2 className="text-2xl font-bold mb-4">Your Dashboard</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {modules.map((module, index) => (
          <div key={index} className="bg-white shadow-md rounded p-4">
            <h3 className="text-xl font-bold">{module.title}</h3>
            <p className="text-gray-600 capitalize">Status: {module.status}</p>
            <p className="text-gray-600">Time Invested: {module.timeInvested}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
