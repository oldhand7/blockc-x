import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <header className="text-gray-600 body-font border-b-2 border-fuchsia-600">
        <div className="container mx-auto flex flex-wrap flex-col md:flex-row items-center">
          <Link
            to="/"
            className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
          >
            <img src="/logo.png" className="h-20" alt="BlockTheDoc" />
          </Link>
        </div>
      </header>
    </div>
  );
}

export default Navbar;
