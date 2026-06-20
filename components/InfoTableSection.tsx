type InfoTableSectionProps = {
  title: string;
  data: { label: string; value: string }[];
  bgColor?: string;
};

export default function InfoTableSection({ title, data, bgColor = 'bg-slate-50' }: InfoTableSectionProps) {
  return (
    <div className={`${bgColor} rounded-lg p-6 mb-6`}>
      <h3 className="mb-4 text-xl font-bold text-slate-900">{title}</h3>
      <div className="overflow-x-auto">
        <table className="w-full">
          <tbody>
            {data.map((item, idx) => (
              <tr key={idx} className={`border-b ${idx === data.length - 1 ? 'border-b-0' : 'border-slate-200'}`}>
                <td className="px-4 py-3 font-semibold text-slate-700 bg-slate-100 w-1/3">{item.label}</td>
                <td className="px-4 py-3 text-slate-600">{item.value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
