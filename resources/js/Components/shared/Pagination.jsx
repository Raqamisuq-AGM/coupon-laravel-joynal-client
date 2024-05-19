import { useEffect, useMemo, useState } from "react";

export const Pagination = ({
    total,
    pageSize,
    handlePageChange,
    pageNumber,
}) => {
    const [currentPage, setCurrentPage] = useState(pageNumber);
    const [currentPageValue, setCurrentPageValue] = useState(pageSize);
    const totalCount = total;
    const [customPage, setCustomPage] = useState("");

    var siblingCount = 2;

    // range detecting
    const range = (start, end) => {
        let length = end - start + 1;
        return Array.from({ length }, (_, idx) => idx + start);
    };

    const Pagenum = () => {
        const paginationRange = useMemo(() => {
            var DOTS = "...";
            const totalPageCount = Math.ceil(totalCount / currentPageValue);

            const totalPageNumbers = siblingCount + 5;

            if (totalPageNumbers >= totalPageCount) {
                return range(1, totalPageCount);
            }

            /*
                Calculate left and right sibling index and make sure they are within range 1 and totalPageCount
            */
            const leftSiblingIndex = Math.max(currentPage - siblingCount, 1);
            const rightSiblingIndex = Math.min(
                currentPage + siblingCount,
                totalPageCount
            );
            /*
              We do not show dots just when there is just one page number to be inserted between the extremes of sibling and the page limits i.e 1 and totalPageCount. Hence we are using leftSiblingIndex > 2 and rightSiblingIndex < totalPageCount - 2
            */
            const shouldShowLeftDots = leftSiblingIndex > 2;
            const shouldShowRightDots = rightSiblingIndex < totalPageCount - 2;

            const firstPageIndex = 1;
            const lastPageIndex = totalPageCount;

            // /*
            //     Case 1: No left dots to show, but right dots to be shown
            if (!shouldShowLeftDots && shouldShowRightDots) {
                let leftItemCount = 3 + 2 * siblingCount;
                let leftRange = range(1, leftItemCount);

                return [...leftRange, DOTS, totalPageCount];
            }

            // /*
            //     Case 3: No right dots to show, but left dots to be shown
            // */
            if (shouldShowLeftDots && !shouldShowRightDots) {
                let rightItemCount = 3 + 2 * siblingCount;
                let rightRange = range(
                    totalPageCount - rightItemCount + 1,
                    totalPageCount
                );
                return [firstPageIndex, DOTS, ...rightRange];
            }

            // /*
            //     Case 4: Both left and right dots to be shown
            // */
            if (shouldShowLeftDots && shouldShowRightDots) {
                let middleRange = range(leftSiblingIndex, rightSiblingIndex);
                return [
                    firstPageIndex,
                    DOTS,
                    ...middleRange,
                    DOTS,
                    lastPageIndex,
                ];
            }
        }, [totalCount, currentPageValue, siblingCount, currentPage]);

        return paginationRange;
    };

    const handleOptionChange = (e) => {
        // setCurrentPageValue(Number(e.target.value))
        handlePageChange(currentPage, Number(e.target.value));
    };

    const pageCalling = (page) => {
        if (typeof page != "number") return;
        setCurrentPage(page);
        handlePageChange(page, currentPageValue);
    };

    const previousCalling = (number) => {
        if (currentPage > 1) {
            pageCalling(currentPage - number);
        }
    };
    const nextCalling = (number) => {
        if (currentPage < Math.ceil(totalCount / currentPageValue)) {
            pageCalling(currentPage + number);
        }
    };

    const setCustomPageHandle = () => {
        if (customPage == "") return;
        let num = Number(customPage);
        setCustomPage("");
        if (num > Math.ceil(totalCount / currentPageValue)) return;
        if (num < 1) return;
        pageCalling(num);
    };

    useEffect(() => {
        setCurrentPage(pageNumber);
        setCurrentPageValue(pageSize);
    }, [pageNumber, pageSize]);

    const previousATagStyle =
        "relative inline-flex items-center px-4 py-2 border text-md font-medium bg-blue-100 text-primary-500 rounded-l-[10px]";
    const dynamicATagStyle = "";
    const nextStyle =
        "relative inline-flex items-center px-2 py-2 border text-md font-medium rounded-r-[10px] bg-blue-100 text-primary-500";
    const currentPageButtonStyle = "bg-primary-600 text-white";
    const renderPageNumbers = Pagenum()?.map((number, i) => {
        return (
            <li key={i}>
                <button
                    className={`${
                        currentPage === number
                            ? currentPageButtonStyle
                            : dynamicATagStyle
                    }  text-md relative inline-flex items-center border px-4 py-2 font-medium`}
                    onClick={() => pageCalling(number)}
                >
                    {number}
                </button>
            </li>
        );
    });

    return (
        <>
            <div className="mx-auto overflow-x-auto w-full lg:flex lg:justify-between lg:items-center">
                <div className="flex items-center justify-center">
                    {/* showing page of  */}
                    <span className="text-md mr-5 text-gray-500">
                        Showing page{" "}
                        <span className="font-bold">{currentPage}</span> of{" "}
                        <span className="font-bold">
                            {Math.ceil(totalCount / currentPageValue)}
                        </span>
                    </span>{" "}
                    |{/* showing total data */}
                    <span className="text-md ml-5 text-gray-700">
                        Total Records:{" "}
                        <span className="font-bold">{totalCount}</span>{" "}
                    </span>
                    {/* <div className="mr-5 w-[80px]">
                        <select
                            className="form-select m-0 ml-5 mr-5 block w-full appearance-none rounded border
                            border-solid border-gray-300 bg-white bg-clip-padding bg-no-repeat
                            px-4 py-2 text-base font-normal text-gray-700 transition ease-in-out focus:border-blue-600 focus:bg-white focus:text-gray-700 focus:outline-none"
                            onChange={handleOptionChange}
                            value={currentPageValue}
                        >
                            <option value="10">10</option>
                            <option value="50">50</option>
                            <option value="100">100</option>
                        </select>
                    </div>
                    <div className="ml-5">
                        <input
                            type="number"
                            onChange={(e) => setCustomPage(e.target.value)}
                            className="mr-2 w-20 rounded-lg border border-slate-300 px-2 py-2  focus:shadow-none focus:outline-none"
                        />
                        <button
                            onClick={setCustomPageHandle}
                            className="rounded-md bg-primary-600 px-2 py-2 text-white hover:bg-blue-900"
                        >
                            GO
                        </button>
                    </div> */}
                </div>

                <nav className="">
                    <ul className="mt-5 flex justify-center lg:mt-0">
                        <li>
                            <button
                                className={previousATagStyle}
                                onClick={() => previousCalling(1)}
                            >
                                Previous
                            </button>
                        </li>
                        {renderPageNumbers}
                        <li>
                            <button
                                className={nextStyle}
                                onClick={() => nextCalling(1)}
                            >
                                Next
                            </button>
                        </li>
                    </ul>
                </nav>
            </div>
        </>
    );
};
