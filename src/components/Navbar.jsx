export default function Navbar() {
  return (
    <header className = "p-10 flex justify-between items-center bg-slategray shadow-xl h-32">
      <div class="flex items-center p-32">
            <span class="text-black font-bold text-3xl font-poppins">My Diary</span>
      </div>
      
      <button type="button" class="hover:scale-110 rounded-md font-semibold bg-darkkorchid text-white w-36 h-10 font-poppins">
        Create New </button>
      
    </header>
  );
}
