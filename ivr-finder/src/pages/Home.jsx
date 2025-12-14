import { useState } from "react";
import Navbar from "../components/Navbar";
import companiesData from "../data/companies";

function Home() {
  const [searchText, setSearchText] = useState("");
  const [results, setResults] = useState([]);

  function handleSearch(e) {
    e.preventDefault();
    const filtered = companiesData.filter((company) =>
      company.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setResults(filtered);
  }

  return (
    <div>
      <Navbar />

      <main className="max-w-4xl mx-auto mt-10 px-4 text-center">
        {}
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Skip The IVR Maze
        </h1>

        <p className="text-gray-600 mb-8">
          Find the fastest way to talk to a human in customer care
        </p>

        {}
        <div className="flex justify-center">
          <form
          onSubmit={handleSearch}
          className="flex gap-2 w-full max-w-lg">
            <input
              type="text"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              placeholder="Search Company (Airtel, Jio, Amazon..)"
              className="flex-1 px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <button
            type="submit"
              onClick={handleSearch}
              className="px-6 py-3 bg-blue-900 text-white rounded-md"
            >
              Search
            </button>
            </form>
        </div>

        {}
        <div className="mt-10">
          {results.length === 0 ? (
            <p className="text-gray-500">
              No results yet. Try searching a company.
            </p>
          ) : (
            <div className="space-y-4">
              {results.map((company) => (
                <div
                  key={company.id}
                  className="border p-4 rounded-md text-left"
                >
                  <h3 className="text-lg font-semibold">
                    {company.name}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {company.category}
                  </p>
                  <p className="mt-2">
                    📞 <strong>{company.phone}</strong>
                  </p>
                  <p className="mt-1 text-blue-600">
                    Shortcut: {company.shortcut}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>

      </main>
    </div>
  );
}

export default Home;
