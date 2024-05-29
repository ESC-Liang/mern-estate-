import { FaSearch } from "react-icons/fa";
import { Link, link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <div className="flex justify-between items-center max-w-6xl mx-auto p-3"></div>
      <h1 className="fond-bold text-sm sm:text-xl flex flex-wrap">
        <span className="text-slate-500">Sean</span>
        <span className="text-slate-700">Estate</span>
      </h1>
      <form className="g9-slate-100 p-3 rounded-lg flex items-center ">
        <input
          type="text"
          placeholder="Search..."
          className="bg-transparent focus:outline-none w-24 sm:w-64"
        />
        <FaSearch className="text-slate-600" />
      </form>
      <ul className="flex gap-4">
        <Link />
        <Link to="/" />
        <li className="hidden sm:inline text-slate-700 hover:underline">
          Home
        </li>
        <Link />
        <Link to="/about" />
        <li className="hidden sm:inline text-slate-700 hover:underline">
          About
        </li>
        <Link />
        <Link to="sign-in" />
        <li className="sm:inline text-slate-700 hover:underline">Sign-in</li>
      </ul>
    </header>
  );
}
