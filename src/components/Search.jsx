export default function Search() { 
  return ( 
    <div className="p-4 flex justify-between items-center"> 
      <div className="flex">
      <input className="p-2 rounded-md outline-none" type="text" placeholder="Search diaries..." /> 
      
      <button type="button" className="hover:scale-110 rounded-md font-semibold bg-darkkorchid text-white w-36 h-10 font-poppins"> 
      Search
      </button>
    
      </div> 
    </div>
  );  
};
