type VacancyDetails = {
  postName: string;
  totalVacancies: number;
  reservedCategory: string;
};

type VacancyDetailsTableProps = {
  vacancies: VacancyDetails[];
};

export default function VacancyDetailsTable({ vacancies }: VacancyDetailsTableProps) {
  return (
    <div className="rounded-lg bg-slate-50 p-6 mb-6">
      <h3 className="mb-4 text-xl font-bold text-slate-900">Vacancy Details</h3>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-blue-600 text-white">
              <th className="px-4 py-3 text-left font-semibold">Post Name</th>
              <th className="px-4 py-3 text-left font-semibold">Total Vacancies</th>
              <th className="px-4 py-3 text-left font-semibold">Reserved Category</th>
            </tr>
          </thead>
          <tbody>
            {vacancies.map((vacancy, idx) => (
              <tr key={idx} className={`border-b ${idx % 2 === 0 ? 'bg-white' : 'bg-slate-100'}`}>
                <td className="px-4 py-3 text-slate-700">{vacancy.postName}</td>
                <td className="px-4 py-3 text-slate-700 text-center">{vacancy.totalVacancies}</td>
                <td className="px-4 py-3 text-slate-700">{vacancy.reservedCategory}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
