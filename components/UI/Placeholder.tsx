import React from "react";

interface PlaceholderProps {
  width: string;
  height: string;
}

const Placeholder: React.FC<PlaceholderProps> = ({ width, height }) => {
  return (
    <div className="animate-pulse flex space-x-4">
      <div className="flex-1 space-y-6 py-1">
        <div className={`${width} ${height} bg-gray-300 rounded`}></div>
        <div className="space-y-3">
          <div className="grid grid-cols-3 gap-4">
            <div className={`${width} bg-gray-300 rounded col-span-2`}></div>
            <div
              className={`${width} h-2 bg-gray-300 rounded col-span-1`}
            ></div>
          </div>
          <div className={`${width} h-2 bg-gray-300 rounded`}></div>
        </div>
      </div>
    </div>
  );
};

export default Placeholder;

/* <div className="animate-pulse flex space-x-4">
      <div className="flex-1 space-y-6 py-1">
        <div className={`${width} ${height} bg-gray-300 rounded`}></div>
        <div className="space-y-3">
          <div className="grid grid-cols-3 gap-4">
            <div className={`${width} bg-gray-300 rounded col-span-2`}></div>
            <div className={`${width} h-2 bg-gray-300 rounded col-span-1`}></div>
          </div>
          <div className={`${width} h-2 bg-gray-300 rounded`}></div>
        </div>
      </div>
    </div> */
