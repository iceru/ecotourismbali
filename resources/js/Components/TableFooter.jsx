import React, { useEffect } from 'react';

const TableFooter = ({ range, setPage, page, slice }) => {
  useEffect(() => {
    if (slice.length < 1 && page !== 1) {
      setPage(page - 1);
    }
  }, [slice, page, setPage]);

  console.log(page);
  return (
    <div className="mt-4 flex justify-center gap-4">
      {range.map((el, index) => (
        <button
          key={index}
          className={`bg-lightSecondary py-1 px-3 rounded bg-opacity-60 ${
            el === page ? 'bg-secondary text-white' : ''
          }`}
          onClick={() => setPage(el)}
        >
          {el}
        </button>
      ))}
    </div>
  );
};

export default TableFooter;
