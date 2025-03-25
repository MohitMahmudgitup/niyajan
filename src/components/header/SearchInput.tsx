"use client";
import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { IoClose } from "react-icons/io5";

function SearchInput() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="hidden sm:flex flex-col mx-4 max-w-sm w-full relative">
      {/* Search Box */}
      <div className="flex pl-2 border border-gray-300 rounded-lg justify-between items-center">
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full focus:outline-none"
          aria-label="Search"
        />
        <div className="flex items-center gap-2">
          {searchTerm && (
            <IoClose
              className="cursor-pointer text-gray-500 hover:text-gray-700"
              onClick={() => setSearchTerm("")}
              size={18}
              aria-label="Clear search"
            />
          )}
          <div
            className={`bg-blue-600 text-white p-2 ${
              searchTerm ? "rounded-lg" : "rounded-r-lg"
            } cursor-pointer`}
          >
            <CiSearch size={18} />
          </div>
        </div>
      </div>

      {/* Display Search Term */}
      {searchTerm && (
        <div className="mt-2 text-gray-700 bg-gray-100 p-2 rounded-md absolute top-full left-0 w-full shadow-md">
          You searched for: <strong>{searchTerm}</strong>
        </div>
      )}
    </div>
  );
}

export default SearchInput;
