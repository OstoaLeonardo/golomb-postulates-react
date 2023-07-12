import { useEffect } from 'react';

export function TextAreaCard({ henonText }) {
    // Ajustar textarea al contenido
    useEffect(() => {
        autosize(document.getElementById("henon-input"));
    }, [henonText]);

    return (
        <div className='relative overflow-x-auto p-8 shadow-md sm:rounded-lg bg-white border border-gray-200 rounded-lg dark:bg-zinc-900 dark:border-zinc-700'>
            <label htmlFor='converted-message' className='block mb-6 text-sm font-medium text-gray-900 dark:text-white'>Input:</label>
            <textarea
                type='text'
                id='henon-input'
                className='autosize-textarea text-area-output font-normal bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-zinc-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                value={henonText}
                readOnly>
            </textarea>
        </div>
    )
}