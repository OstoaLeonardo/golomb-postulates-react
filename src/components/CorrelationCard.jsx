export function CorrelationCard({ autocorrelation }) {
    return (
        <div className='relative overflow-x-auto shadow-md sm:rounded-lg'>
            <div className='w-full min-w-full block p-5 text-xs uppercase text-left text-gray-700 bg-gray-50 dark:bg-zinc-900 dark:text-gray-400'>
                Postulate 3
            </div>
            <div className='min-w-full max-w-sm p-4 overflow-y-auto bg-white border border-gray-200 rounded-lg shadow sm:p-6 dark:bg-zinc-900 dark:border-zinc-700'>
                <ul className='grid grid-flow-col space-x-3'>
                    {
                        autocorrelation.map((value, index) => {
                            return (
                                <li key={index}>
                                    <a className='flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white'>
                                        <span className='flex-1 ml-3 whitespace-nowrap'>
                                            {index}
                                        </span>
                                        <span className='inline-flex items-center justify-center px-2 py-0.5 ml-3 text-xs font-medium text-gray-500 bg-gray-200 rounded dark:bg-gray-700 dark:text-gray-400'>
                                            {value}
                                        </span>
                                    </a>
                                </li>
                            )
                        }, [])
                    }
                </ul>
            </div>
        </div>
    )
}