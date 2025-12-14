function CompanyCard({ company, onSelect }) {
  return (
    <div className="bg-white border rounded-xl p-5 shadow-sm hover:shadow-md transition">
      
     {}
      <img
        src={company.logo}
        alt={company.name}
        className="w-16 h-16 mx-auto object-contain mb-4"
      />

      {}
      <h3 className="text-lg font-semibold text-center">
        {company.name}
      </h3>

      <p className="text-sm text-gray-500 text-center mb-4">
        {company.category}
      </p>

      {}
      <button
        onClick={() => onSelect(company)}
        className="w-full py-2 bg-blue-600 text-white rounded-md"
      >
        View Services
      </button>
    </div>
  );
}

export default CompanyCard;
