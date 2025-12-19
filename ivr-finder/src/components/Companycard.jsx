import ServiceCard from "./Servicecard.jsx";

function CompanyCard({ company, isExpanded, onToggle }) {
  return (
    <div className="bg-white border rounded-2xl p-6 shadow-sm hover:shadow-md transition">
      
      {}
      <div className="flex items-center gap-4">
        <img
          src={company.logo}
          alt={company.name}
          className="w-14 h-14 object-contain"
        />

        <div className="flex-1">
          <h3 className="text-lg font-semibold">
            {company.name}
          </h3>
          <p className="text-sm text-gray-500">
            {company.category}
          </p>
        </div>

        <button
          onClick={() => onToggle(company.id)}
          className="px-4 py-2 bg-blue-600 font-medium text-white rounded-lg text-sm hover:bg-blue-700 transition"
        >
          {isExpanded ? "Hide Services" : "View Services"}
        </button>
      </div>

      {}
      {isExpanded && Array.isArray(company.services) && (
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {company.services.map((service) => (
            <ServiceCard
              key={service.id}
              service={service}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default CompanyCard;
