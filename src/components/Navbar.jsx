import { TextInput } from "@tremor/react";
import { BiSearch } from "react-icons/bi";

const Navbar = () => {
  return (
    <div id="top" className="flex items-center justify-between w-full gap-4">
      <h1>Dashbaord</h1>
      <TextInput icon={BiSearch} placeholder="Search.." className="w-max" />
    </div>
  );
};

export default Navbar;
