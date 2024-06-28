import Dropdown from "./Dropdown";
import tags from "../Data/tags";
import { useState } from "react";

function NewCard({HideModal , onAddNewCard})
{
    let [title, setTile] = useState('');
    let [tag, setTag] = useState('');
    let [coverImage, setImage] = useState('');
    let [content, setContent] = useState('');

    return (
        <>
            <form className="grid w-full space-y-4 px-4 pt-4" onSubmit={SubmitForm}>
                <p>
                    <input onChange={onTitleValueChanged} className="font-poppins block w-full h-10 bg-gray-200 p-[10px] rounded-md border-opacity-80 border-[1px]
                    border-gray-300 font-semibold
                    placeholder-gray-400 placeholder:text-2xl placeholder:font-poppins"
                        type="text"
                        id="title"
                        required placeholder="TITLE..." />
                </p>
                <div className="flex w-full space-x-4 h-10">
                    <Dropdown onChange={onTagValueChanged} className="" options={tags}></Dropdown>
                    <div className="flex w-1/2 items-center pl-4 font-poppins h-10 bg-gray-200 rounded-md border-opacity-80 border-[1px]
                    border-gray-300 font-semibold">
                        <h3 className="font-poppins text-gray-400 w-full"> Select cover image </h3>
                        <button className="hover:scale-110 rounded-md font-semibold bg-darkkorchid text-white w-1/3 h-full font-poppins">
                            Upload
                        </button>
                    </div>
                </div>
                <textarea onChange={onContentValueChanged} id="body" className="w-full h-96 font-poppins block bg-gray-200 p-[12px] 
                    rounded-md border-opacity-80 border-[1px] border-gray-300
                    placeholder-gray-400 placeholder:text-sm placeholder:font-poppins"
                    required rows={3}
                    placeholder="Share your content...">
                </textarea>
                
                <div className="flex space-x-4 pt-4 justify-end">
                    <button
                        type="button"
                        onClick={HideModal}
                        className="w-32 h-10 hover:scale-110 rounded-md font-semibold bg-gray-400 text-white font-poppins">
                        Cancel
                    </button>
                    <button
                        className="w-32 hover:scale-110 rounded-md font-semibold bg-darkkorchid text-white font-poppins">
                        Publish
                    </button>
                </div>
            </form>
        </>
    );

    function onTitleValueChanged(event)
    {
        title = event.target.value;
    }

    function onTagValueChanged(event)
    {
        tag = event.target.value
    }

    function onContentValueChanged(event)
    {
        content = event.target.value
    }

    function SubmitForm(event)
    {
        event.preventDefault();

        const data =
        {
            id:0,
            title: title,
            tag: tag,
            coverImage: "https://picsum.photos/id/20/660/400",
            date:  new Date(),
            content: content
        };
        
        onAddNewCard(data)

        HideModal();
    }
}

export default NewCard;

    