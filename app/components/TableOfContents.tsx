"use client";

import { useState, FC } from "react";
import { BsDot } from "react-icons/bs";
import { BiSolidRightArrow } from "react-icons/bi";
import { BiSolidDownArrow } from "react-icons/bi";

type Props = {
  props: any;
};

const TableOfContents: FC<Props> = (props): any => {
  const [showTable, setShowTable] = useState(false);

  const handleShowTable = () => {
    setShowTable(!showTable);
  };

  return (
    <div className="bg-dark mb-10 py-1 px-6 rounded-md">
      <div
        onClick={handleShowTable}
        className={`flex items-center gap-2 py-2 ${
          showTable ? "cursor-zoom-out" : "cursor-zoom-in"
        }`}
      >
        {showTable ? <BiSolidDownArrow /> : <BiSolidRightArrow />}
        <h3 className="text-lg">Table of Contents</h3>
      </div>
      {showTable && (
        <ol className="px-4">
          {props.props.frontMatter.tableOfContent?.map((content: any) => (
            <li key={content} className="flex items-center text-lg">
              <span className="text-2xl">
                <BsDot />
              </span>
              <span>{content}</span>
            </li>
          ))}
        </ol>
      )}
    </div>
  );
};

export default TableOfContents;