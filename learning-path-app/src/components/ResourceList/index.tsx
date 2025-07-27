type Resource = {
  title: string;
  type: "video" | "article" | "course" | "exercise";
  url: string;
  recommended?: boolean;
};

const resources: Resource[] = [
  {
    title: "Python for Everybody - Full University Python Course",
    type: "video",
    url: "https://www.youtube.com/watch?v=8DvywoWv6fI",
  },
  {
    title: "Official Python Tutorial",
    type: "article",
    url: "https://docs.python.org/3/tutorial/",
    recommended: true,
  },
  {
    title: "Kaggle - Intro to Programming",
    type: "course",
    url: "https://www.kaggle.com/learn/intro-to-programming",
  },
  {
    title: "HackerRank - Python (Basic) Certificate",
    type: "exercise",
    url: "https://www.hackerrank.com/skills-verification/python_basic",
    recommended: true,
  },
];

export default function ResourceList() {
  return (
    <div className="w-full max-w-md mx-auto mt-8">
      <h2 className="text-2xl font-bold mb-4">Your Learning Pathway</h2>
      <ul>
        {resources.map((resource, index) => (
          <li key={index} className="mb-4 bg-white shadow-md rounded p-4">
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-bold">{resource.title}</h3>
              {resource.recommended && (
                <span className="bg-green-200 text-green-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded-full">
                  Recommended
                </span>
              )}
            </div>
            <p className="text-gray-600 capitalize">{resource.type}</p>
            <a href={resource.url} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
              Go to resource
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
