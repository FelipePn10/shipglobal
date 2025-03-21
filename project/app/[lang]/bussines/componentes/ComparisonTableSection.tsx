import React from "react";
import { ComparisonTable } from "../types/contentTypes";

interface ComparisonTableSectionProps {
  comparisonTable: ComparisonTable;
}

const ComparisonTableSection: React.FC<ComparisonTableSectionProps> = ({ comparisonTable }) => {
  return (
    <section className="mb-16">
      <h2 className="text-3xl font-semibold mb-6">{comparisonTable.title}</h2>
      <p className="text-lg mb-6">{comparisonTable.description}</p>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse bg-white shadow-md rounded-lg">
          <thead>
            <tr>
              {comparisonTable.headers.map((header, index) => (
                <th
                  key={index}
                  className="p-4 text-left font-semibold bg-gray-100 border-b"
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {comparisonTable.rows.map((row, rowIndex) => (
              <tr key={rowIndex} className="border-b">
                {row.map((cell, cellIndex) => (
                  <td key={cellIndex} className="p-4 text-gray-700">
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default ComparisonTableSection;