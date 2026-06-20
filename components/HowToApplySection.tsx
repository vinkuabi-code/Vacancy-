type Step = {
  number: number;
  title: string;
  description: string;
};

type HowToApplySectionProps = {
  steps: Step[];
};

export default function HowToApplySection({ steps }: HowToApplySectionProps) {
  if (steps.length === 0) return null;

  return (
    <div className="rounded-lg bg-slate-50 p-6 mb-6">
      <h3 className="mb-6 text-xl font-bold text-slate-900">📝 How to Apply</h3>
      <div className="space-y-4">
        {steps.map((step) => (
          <div key={step.number} className="flex gap-4">
            <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-blue-600 text-white font-bold">
              {step.number}
            </div>
            <div className="flex-1 pt-1">
              <h4 className="font-semibold text-slate-900">{step.title}</h4>
              <p className="mt-1 text-sm text-slate-600">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
