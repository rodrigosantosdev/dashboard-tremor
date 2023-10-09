import React from "react";

import {
  BiHomeSmile,
  BiBarChartAlt,
  BiBell,
  BiLinkExternal,
} from "react-icons/bi";
import {
  HiOutlineDocumentSearch,
  HiOutlineMail,
  HiOutlineCreditCard,
} from "react-icons/hi";

import { BsArrowUpCircle } from "react-icons/bs";

function Sidebar() {
  return (
    <>
      <div className="flex flex-col items-center justify-between flex-none py-8 border-r bg-dark-tremor-brand-faint w-14 sm:w-20 text-slate-100 border-dark-tremor-background-muted">
        <div className="grid gap-8">
          <BiHomeSmile
            size={40}
            className="p-2 transition-colors rounded-lg cursor-pointer hover:text-emerald-400"
          />
          <BiBarChartAlt
            size={40}
            className="p-2 transition-colors rounded-lg cursor-pointer bg-dark-tremor-background-subtle hover:bg-emerald-400 hover:text-zinc-800"
          />
          <HiOutlineDocumentSearch
            size={40}
            className="p-2 transition-colors rounded-lg cursor-pointer bg-dark-tremor-background-subtle hover:bg-emerald-400 hover:text-zinc-800"
          />
          <HiOutlineMail
            size={40}
            className="p-2 transition-colors rounded-lg cursor-pointer bg-dark-tremor-background-subtle hover:bg-emerald-400 hover:text-zinc-800"
          />
          <HiOutlineCreditCard
            size={40}
            className="p-2 transition-colors rounded-lg cursor-pointer bg-dark-tremor-background-subtle hover:bg-emerald-400 hover:text-zinc-800"
          />
          <BiBell
            size={40}
            className="p-2 transition-colors rounded-lg cursor-pointer bg-dark-tremor-background-subtle hover:bg-emerald-400 hover:text-zinc-800"
          />
        </div>
        <div className="grid gap-4">
          <a href="#top">
            <BsArrowUpCircle
              size={40}
              className="p-2 transition-colors rounded-lg cursor-pointer bg-dark-tremor-background-subtle hover:bg-emerald-400 hover:text-zinc-800"
            />
          </a>
          <BiLinkExternal
            size={40}
            className="p-2 transition-colors rounded-lg cursor-pointer bg-dark-tremor-background-subtle hover:bg-emerald-400 hover:text-zinc-800"
          />
        </div>
      </div>
    </>
  );
}

export default Sidebar;
