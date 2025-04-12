import React, { useState } from "react";

const transactions = Array.from({ length: 20 }, (_, i) => ({
  id: i + 1,
  type: ["Purchase", "Donation", "Trade", "Sell"][i % 4],
  price: (i + 1) * 150,
  tracking: `TRX-23${900 + i}`,
  buyer_id: 1000 + i,
  seller_id: 2000 + i,
}));

const PAGE_SIZE = 8;

const Record = () => {
  const [page, setPage] = useState(0);
  const totalPages = Math.ceil(transactions.length / PAGE_SIZE);

  const currentPageData = transactions.slice(
    page * PAGE_SIZE,
    (page + 1) * PAGE_SIZE
  );

  const nextPage = () => page < totalPages - 1 && setPage(page + 1);
  const prevPage = () => page > 0 && setPage(page - 1);

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">
        Transaction Records
      </h1>

      <div className="overflow-x-auto rounded-xl shadow-lg bg-white border border-gray-200">
        <table className="min-w-full table-auto text-sm text-gray-700">
          <thead className="bg-green-100 text-green-800 uppercase text-xs tracking-wider">
            <tr>
              <th className="px-6 py-4 text-left">ID</th>
              <th className="px-6 py-4 text-left">Type</th>
              <th className="px-6 py-4 text-left">Price</th>
              <th className="px-6 py-4 text-left">Tracking</th>
              <th className="px-6 py-4 text-left">Buyer ID</th>
              <th className="px-6 py-4 text-left">Seller ID</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {currentPageData.map((tx) => (
              <tr
                key={tx.id}
                className="hover:bg-green-50 transition duration-150"
              >
                <td className="px-6 py-4 font-medium text-gray-800">{tx.id}</td>
                <td className="px-6 py-4">
                  <span
                    className={`inline-block px-2 py-1 rounded-full text-xs font-semibold ${tx.type === "Purchase"
                        ? "bg-green-200 text-green-800"
                        : tx.type === "Sell"
                          ? "bg-blue-100 text-blue-800"
                          : "bg-yellow-100 text-yellow-700"
                      }`}
                  >
                    {tx.type}
                  </span>
                </td>
                <td className="px-6 py-4">
                  {tx.price > 0 ? `$${(tx.price / 100).toFixed(2)}` : "Free"}
                </td>
                <td className="px-6 py-4 font-mono text-gray-600">
                  {tx.tracking}
                </td>
                <td className="px-6 py-4">{tx.buyer_id}</td>
                <td className="px-6 py-4">{tx.seller_id}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination Controls */}
      <div className="flex items-center justify-between mt-4">
        <button
          onClick={prevPage}
          disabled={page === 0}
          className="px-4 py-2 text-sm font-medium text-green-700 bg-green-100 hover:bg-green-200 rounded disabled:opacity-40 disabled:cursor-not-allowed"
        >
          Previous
        </button>
        <span className="text-sm text-gray-500">
          Page {page + 1} of {totalPages}
        </span>
        <button
          onClick={nextPage}
          disabled={page >= totalPages - 1}
          className="px-4 py-2 text-sm font-medium text-green-700 bg-green-100 hover:bg-green-200 rounded disabled:opacity-40 disabled:cursor-not-allowed"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Record;
