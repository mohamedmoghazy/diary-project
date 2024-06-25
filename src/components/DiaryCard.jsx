export default Card;

function Card({props})
{
    return (
        <>
            <li>
                <div className=" h-80 w-52 justify-center items-center"></div>
                <h>props.title</h>
                <p>props.content</p>
                <p>props.date</p>
            </li>
        </>  
    );
}