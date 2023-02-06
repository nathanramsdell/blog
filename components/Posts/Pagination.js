import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid'
import { useEffect, useState } from 'react'

export default function Pagination({ currentPosts, currentPage, setCurrentPage, lastPageNumber, totalResults }) {
    const range = 5
    const [paginationRange, setPaginationRange] = useState([...Array(range).keys()].map(i => i + 1))

    useEffect(() => {
        const start = Math.max(1, Math.min(currentPage + 1, lastPageNumber - range));
        const end = Math.min(lastPageNumber, start + (range - 1));
        const paginationRange = [];
        for (let i = start; i <= end; i++) {
            paginationRange.push(i);
        }
        setPaginationRange(paginationRange);
    }, [currentPage])



    return (
        <div className="flex items-center justify-between border-t border-gray-200 px-4 py-3 sm:px-6">
            <div className="flex flex-1 items-center justify-between sm:hidden">
                <a
                    onClick={() => {
                        if (currentPage == 0) {
                            return;
                        }
                        setCurrentPage(currentPage - 1)
                    }}
                    className={`${currentPage == 0 ? 'text-gray-400 cursor-not-allowed' : 'text-gray-700 hover:bg-gray-50 cursor-pointer'} relative inline-flex items-center rounded-md bg-white px-4 py-2 text-sm font-medium `}
                >
                    Previous
                </a>
                <p className='font-light'>Page {currentPage + 1} of {lastPageNumber}</p>
                <a
                    onClick={() => {
                        if (currentPage + 1 == lastPageNumber) {
                            return;
                        }
                        setCurrentPage(currentPage + 1)
                    }}
                    className={`${currentPage + 1 >= lastPageNumber ? 'text-gray-400 cursor-not-allowed' : 'cursor-pointer text-gray-700 hover:bg-gray-50'} relative ml-3 inline-flex items-center rounded-md bg-white px-4 py-2 text-sm font-medium`}
                >
                    Next
                </a>
            </div>
            <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
                <div>
                    <p className="text-sm text-gray-700">
                        Showing page <span className="font-medium">{currentPage + 1}</span> out of <span className="font-medium">{lastPageNumber}</span> with
                        <span className="font-medium"> {totalResults}</span> total results
                    </p>
                </div>
                <div>
                    <nav className="isolate inline-flex -space-x-px rounded-md" aria-label="Pagination">
                        <a
                            onClick={() => {
                                if (currentPage == 0) {
                                    return;
                                }
                                setCurrentPage(currentPage - 1)
                            }}
                            className={`${currentPage == 0 ? 'text-gray-300 cursor-not-allowed' : 'text-gray-500 hover:bg-gray-50'} relative inline-flex items-center rounded-l-md  bg-white px-2 py-2 text-sm font-medium focus:z-20`}
                        >
                            <span className="sr-only">Previous</span>
                            <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
                        </a>
                        {paginationRange.map(pageNumber => {
                            return (
                                <a
                                    onClick={() => { setCurrentPage(pageNumber - 1) }}
                                    aria-current="page"
                                    className={`relative w-12 flex justify-center items-center pagination__select rounded-lg ${pageNumber - 1 === currentPage ? 'z-20 focus:z-20 pointer-events-none bg-zinc-900 text-white' : 'cursor-pointer  bg-white text-gray-500 hover:bg-gray-50'}  px-4 py-2 text-sm font-medium  `}
                                    key={pageNumber}
                                >
                                    {pageNumber}
                                </a>
                            )
                        })}
                        <span className="relative inline-flex items-center bg-white px-4 py-2 text-sm font-medium text-gray-700">
                            ...
                        </span>
                        <a
                            onClick={() => { setCurrentPage(lastPageNumber - 1) }}
                            aria-current="page"
                            className={`relative inline-flex items-center rounded-lg   ${currentPage === lastPageNumber - 1 ? ' z-20 focus:z-20 pointer-events-none bg-zinc-900 text-white' : 'cursor-pointer  bg-white text-gray-500 hover:bg-gray-50'}  px-4 py-2 text-sm font-medium  `}
                        >
                            {lastPageNumber}
                        </a>
                        <a
                            onClick={() => {
                                if (currentPage + 1 == lastPageNumber) {
                                    return;
                                }
                                setCurrentPage(currentPage + 1)
                            }}
                            className={`${(currentPage + 1 == lastPageNumber) ? 'text-gray-300 cursor-not-allowed' : 'text-gray-500 hover:bg-gray-50'} relative inline-flex items-center rounded-r-md  bg-white px-2 py-2 text-sm font-medium focus:z-20`}
                        >
                            <span className="sr-only">Next</span>
                            <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
                        </a>
                    </nav>
                </div>
            </div>
        </div>
    )
}