import React, { useState } from 'react';

const Modal = ({ children, modalIsVisible, HideModal}) =>
{

    return (
        <div>
            {modalIsVisible ?
            <>
                <div className="fixed top-0 left-0 w-full h-screen bg-black bg-opacity-60 z-10" onClick={HideModal}></div>
                <dialog open className="grid w-1/3 inset-y-1/2 border-none rounded-md shadow-md p-10 overflow-hidden z-10">
                {children}
                    </dialog>
            </>
            : null
                    
            }
    </div>    
    );
}

export default Modal;