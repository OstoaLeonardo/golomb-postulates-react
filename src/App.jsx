import './App.css'

function App() {
  return (
    <div className='flex min-h-screen flex-row bg-gray-100 dark:bg-zinc-700'>
      <aside className='sidebar w-48 -translate-x-full transform bg-white p-4 transition-transform duration-150 ease-in md:translate-x-0 md:shadow-md dark:bg-zinc-800'>
        <div className='mt-6'>
          <button type='button' id='btn-upload' className='w-full text-gray-900 bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-600 dark:bg-zinc-900 dark:border-zinc-700 dark:text-white dark:hover:bg-zinc-800 mr-2 mb-2'>
            <svg className='w-4 h-4 mr-3 dark:text-white' fill='none' stroke='currentColor' strokeWidth='1.5' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg' aria-hidden='true'>
              <path strokeLinecap='round' strokeLinejoin='round' d='M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m6.75 12l-3-3m0 0l-3 3m3-3v6m-1.5-15H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z'></path>
            </svg>
            Subir archivo
          </button>
        </div>
      </aside>
      <main className='main -ml-48 flex flex-grow flex-col p-4 transition-all duration-150 ease-in md:ml-0'>
        <div className='p-10 w-full h-full inline-block items-center justify-center bg-white text-center text-5xl font-bold rounded-lg shadow-md dark:bg-zinc-800 dark:text-white'>
          <h1 className='mb-14 text-4xl font-bold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white'><span className='underline underline-offset-3 decoration-8 decoration-blue-400 dark:decoration-blue-600'>Postulados de Golomb:</span></h1>

          <div id='postulate-one-container' className='m-6 grid gap-4'></div>
          <div id='text-area-container' className='m-6 grid gap-4'></div>
          <div id='bar-graph-postulate-one-container' className='m-6 grid gap-4'></div>
          <div id='postulate-two-container' className='m-6 grid gap-4'></div>
          <div id='bar-graph-postulate-two-container' className='m-6 grid gap-4'></div>
          <div id='postulate-three-container' className='m-6 grid gap-4'></div>
          <div id='graph-postulate-three-container' className='m-6 grid gap-4'></div>
          <div id='graph-fourier-container' className='m-6 grid gap-4'></div>
        </div>
      </main>
    </div>
  )
}

export default App
