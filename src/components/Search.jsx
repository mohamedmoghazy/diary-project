export default function Search() {
  return (
    <div className="p-4 flex justify-between items-center">
      <div className="flex">
        <input
          className="p-2 rounded-md outline-none"
          type="text"
          placeholder="Search diaries..."
        />

        <button
          type="button"
          className="hover:scale-110 rounded-md font-semibold bg-darkkorchid text-white w-36 h-10 font-poppins"
        >
          Search
        </button>
      </div>
    </div>
  );
}

// import React, { useState } from 'react';

// const Search = () => { const [searchValue, setSearchValue] = useState('');
// const handleSearch = () => { console.log('Search value:', searchValue); };

// return ( <div className="p-4 flex justify-between items-center">
//          <div className="flex"> <input className="p-2 rounded-md outline-none" type="text"
//             placeholder="Search diaries..." value={searchValue} onChange={(e) => setSearchValue(e.target.value)} />

// <button
//       type="button"
//       className="hover:scale-110 rounded-md font-semibold bg-darkorchid text-white w-36 h-10 font-poppins"
//       onClick={handleSearch}
//     >
//       Search
// </button>

//   </div>
// </div>

// );
// };

// export default Search;
