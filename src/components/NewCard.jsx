import Dropdown from "./Dropdown";
import tags from "../Data/tags";

function AddNewCard()
{
    return (
        <div className="font-poppins w-full flex justify-center items-center bg-transparent bg-gray-950">
            <form className=" space-y-4 w-1/2 grid bg-white p-14 max-h-full rounded-md shadow-md">
                <p>
                    <input className="font-poppins block w-full h-10 bg-gray-200 p-[10px] rounded-md border-opacity-80 border-[1px]
                    border-gray-300 font-semibold
                    placeholder-gray-400 placeholder:text-2xl placeholder:font-poppins"
                        type="text" id="title" required placeholder="TITLE..." />
                </p>
                <div className="flex space-x-4 h-10">
                    <Dropdown className="" options={tags}></Dropdown>
                    <div className="items-center pl-4 flex w-full font-poppins h-10 bg-gray-200 rounded-md border-opacity-80 border-[1px]
                    border-gray-300 font-semibold">
                        <h3 className="font-poppins text-gray-400 w-full"> Select cover image </h3>
                        <button className="hover:scale-110 rounded-md font-semibold bg-darkkorchid text-white w-1/3 h-full font-poppins">
                            Upload
                        </button>
                    </div>
                </div>
                <textarea id="body" className="font-poppins block w-full h-10 bg-gray-200 p-[12px] 
                    rounded-md border-opacity-80 border-[1px] border-gray-300
                    placeholder-gray-400 placeholder:text-sm placeholder:font-poppins"
                    required rows={3}
                    placeholder="Share your content...">
                </textarea>
                
                <div className="flex space-x-4 pt-4 justify-end">
                    
                    <button className="w-32 h-10 hover:scale-110 rounded-md font-semibold bg-gray-400 text-white font-poppins">
                        Cancel
                    </button>
                    
                    <button className="w-32 hover:scale-110 rounded-md font-semibold bg-darkkorchid text-white font-poppins">
                        Publish
                    </button>
                    
                </div>
            </form>
        </div>
    );
}
export default AddNewCard;

    