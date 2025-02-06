import { useState } from "react";
import Link from "next/link";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";

interface LinkItem {
  label: string;
  href: string;
}

interface ExpandableListProps {
  items: LinkItem[];
  title?: string;
}

export function ExpandableList({ items, title }: ExpandableListProps) {
  const [showAll, setShowAll] = useState(false);

  const visibleItems = showAll ? items : items.slice(0, 3);

  return (
    <div className="w-[300px]">
      {title !== undefined ? (
        <h1 className="leading-[18px] font-semibold text-[#737373]">{title}</h1>
      ) : (
        <></>
      )}
      <ul className="flex pt-[10px] flex-col gap-2 pl-[10px]">
        {visibleItems.map((item, index) => (
          <li key={index} className="py-[5px]">
            <Link
              href={item.href}
              className="leading-[22px] text-[#737373] hover:underline"
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
      {items.length > 3 && (
        <button
          onClick={() => setShowAll(!showAll)}
          className="mt-2 text-[#737373] flex flex-row items-center"
        >
          {showAll ? "Ver menos" : "Ver mais"}
          {showAll ? (
            <FaChevronUp className="w-7 h-13 text-[#F47920]" />
          ) : (
            <FaChevronDown className="w-7 h-13 text-[#F47920]" />
          )}
        </button>
      )}
    </div>
  );
}
