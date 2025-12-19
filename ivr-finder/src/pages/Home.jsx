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

      <main className="max-w-5xl mx-auto mt-10 px-4 text-center">
        <h1 className="text-4xl font-extrabold mb-4 sm:text-5xl text-gray-900">
          Skip the IVR Maze
        </h1>

        <p className="text-gray-600 mb-10 text-lg">
          Find the fastest way to talk to a human
        </p>

        <form
          onSubmit={handleSearch}
          className="flex justify-center gap-2 max-w-2xl mx-auto"
        >
          <input
            type="text"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            placeholder="Search company (Airtel, Jio, Amazon...)"
            className=" flex-1  max-w-md px-5 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 trasition text-white font-medium ">
            Search
          </button>
        </form>

        {}
        <div className="mt-12 space-y-8">
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
