"use client";

import { useState } from "react";

type LearningStyle = "visual" | "auditory" | "hands-on";

export default function LearningStyleSelector() {
  const [learningStyle, setLearningStyle] = useState<LearningStyle>("visual");

  return (
    <div className="mb-6">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="learning-style">
        Preferred Learning Style
      </label>
      <select
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id="learning-style"
        value={learningStyle}
        onChange={(e) => setLearningStyle(e.target.value as LearningStyle)}
      >
        <option value="visual">Visual</option>
        <option value="auditory">Auditory</option>
        <option value="hands-on">Hands-on</option>
      </select>
    </div>
  );
}
