import Container from "../Container";

import { VscAccount } from "react-icons/vsc";
import SearchInput from "./SearchInput";
const MeddleHeader = () => {
  return (
    <main className="border-b border-gray-500">
    <Container className="flex items-center justify-between  p-4 w-full ">
      {/* Logo */}
      <img src="https://shofy.reactbd.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.0479373e.png&w=256&q=75" alt="" />

      {/* Search Bar */}
        <SearchInput/>
      {/* Buttam Login Button , Icons */}
      <div className="flex justify-between items-center">
        <div className="flex gap-2 items-center cursor-pointer">
          <VscAccount size={28} />
          <div>
            <p className=" text-sm">hello, Guests </p>
            <p>Login / Register</p>
          </div>
        </div>
        <div>
          <div></div>
          <div></div>
        </div>
      </div>
    </Container>

    </main>
  );
};

export default MeddleHeader;
