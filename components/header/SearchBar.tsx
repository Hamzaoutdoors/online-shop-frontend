import React from "react";

import { GoSearch } from "react-icons/go";
import { useLanguage } from "../../hooks/useLanguage";

//TODO: search by product name.
const SearchBar = () => {
  const { t } = useLanguage();
  return (
    <div className="max-w-[50rem] w-full md:w-[90%] px-4 md:ml-4 md:mr-4 rounded-lg border-gray-400 border-[1px] bg-slate-800 flex items-center flex-grow">
      <input
        className="px-4 py-2 md:py-3 bg-transparent outline-none w-full "
        type="search"
        placeholder={`${t.search}`}
      />
      <GoSearch style={{ color: "rgb(156 163 175)" }} />
    </div>
  );
};

export default SearchBar;
