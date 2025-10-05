// components/recipe/Instructions.tsx
import { AnalyzedInstruction } from "../recipe/[id]/data";

export default function Instructions({ instructions }: { instructions: AnalyzedInstruction[] }) {
  const steps = instructions[0]?.steps || [];

  return (
    <div className="bg-white rounded-xl shadow-md p-6 mb-6 ml-6 w-[60vw]">
      <h2 className="text-xl font-bold text-green-700 mb-3">Instructions</h2>
      <div className="space-y-3">
        {steps.map(step => (
          <div key={step.number} className="flex gap-3 items-start bg-gray-50 p-3 rounded">
            <span className="bg-green-600 text-white rounded-full w-6 h-6 flex items-center justify-center font-bold">
              {step.number}
            </span>
            <div className="w-[95%]">
              <p>{step.step}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
