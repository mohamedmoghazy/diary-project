export default function Navbar() {
  return (
    <header className="p-10 flex justify-between items-center bg-slategray shadow-xl h-32">
      <div className="flex items-center p-32">
        <span className="text-black font-bold text-3xl font-poppins">
          My Diary
        </span>
      </div>
      <Search />
      <button
        type="button"
        className="hover:scale-110 rounded-md font-semibold bg-darkkorchid text-white w-36 h-10 font-poppins"
      >
        Create New{" "}
      </button>
    </header>
  );
}
