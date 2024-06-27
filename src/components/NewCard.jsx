import Dropdown from "./Dropdown";
import tags from "../Data/tags";


function AddNewCard()
{
    return (
        <>
            <form className="grid w-full space-y-4 px-4 pt-4">
                <p>
                    <input className="font-poppins block w-full h-10 bg-gray-200 p-[10px] rounded-md border-opacity-80 border-[1px]
                    border-gray-300 font-semibold
                    placeholder-gray-400 placeholder:text-2xl placeholder:font-poppins"
                        type="text" id="title" required placeholder="TITLE..." />
                </p>
                <div className="flex w-full space-x-4 h-10">
                    <Dropdown className="" options={tags}></Dropdown>
                    <div className="flex w-1/2 items-center pl-4 font-poppins h-10 bg-gray-200 rounded-md border-opacity-80 border-[1px]
                    border-gray-300 font-semibold">
                        <h3 className="font-poppins text-gray-400 w-full"> Select cover image </h3>
                        <button className="hover:scale-110 rounded-md font-semibold bg-darkkorchid text-white w-1/3 h-full font-poppins">
                            Upload
                        </button>
                    </div>
                </div>
                <textarea id="body" className="w-full h-96 font-poppins block bg-gray-200 p-[12px] 
                    rounded-md border-opacity-80 border-[1px] border-gray-300
                    placeholder-gray-400 placeholder:text-sm placeholder:font-poppins"
                    required rows={3}
                    placeholder="Share your content...">
                </textarea>
                
                <div className="flex space-x-4 pt-4 justify-end">
                    <button
                        onKeyDown={OnCancelClicked}
                        className="w-32 h-10 hover:scale-110 rounded-md font-semibold bg-gray-400 text-white font-poppins">
                        Cancel
                    </button>
                    <button
                        onKeyDown={OnpublishClicked}
                        className="w-32 hover:scale-110 rounded-md font-semibold bg-darkkorchid text-white font-poppins">
                        Publish
                    </button>
                </div>
            </form>
        </>
    );
}

function OnpublishClicked(event)
{

}

function OnCancelClicked(event)
{

}

export default AddNewCard;

    