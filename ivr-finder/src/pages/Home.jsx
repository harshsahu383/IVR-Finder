import { useState } from "react";
import Navbar from "../components/Navbar";
import CompanyCard from "../components/CompanyCard";
import companies from "../data/companies";

function Home() {
  const [searchText, setSearchText] = useState("");
  const [results, setResults] = useState([]);
  const [expandedCompanyId, setExpandedCompanyId] = useState(null);

  function handleSearch(e) {
    e.preventDefault();

    const filtered = companies.filter((company) =>
      company.name.toLowerCase().includes(searchText.toLowerCase())
    );

    setResults(filtered);
    setExpandedCompanyId(null);
  }

  function toggleCompany(companyId) {
    setExpandedCompanyId((prev) =>
      prev === companyId ? null : companyId
    );
  }

  return (
    <>
      <Navbar />

      <main className="max-w-4xl mx-auto mt-10 px-4 text-center">
        <h1 className="text-4xl font-bold mb-4">
          Skip the IVR Maze
        </h1>

        <p className="text-gray-600 mb-8">
          Find the fastest way to talk to a human
        </p>

        {}
        <form
          onSubmit={handleSearch}
          className="flex justify-center gap-2"
        >
          <input
            type="text"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            placeholder="Search company (Airtel, Jio...)"
            className="w-full max-w-md px-4 py-3 border rounded-md"
          />
          <button className="px-6 py-3 bg-blue-900 text-white rounded-md TEXT">
            Search
          </button>
        </form>

        {}
        <div className="mt-10 space-y-6">
          {Array.isArray(results) && results.map((company) => (
            <CompanyCard
              key={company.id}
              company={company}
              isExpanded={expandedCompanyId === company.id}
              onToggle={toggleCompany}
            />
          ))}
        </div>
      </main>
    </>
  );
}

export default Home;
