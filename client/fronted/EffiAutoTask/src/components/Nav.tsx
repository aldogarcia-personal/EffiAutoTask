function Nav() {
  return (
    <nav className="bg-0056B3 flex justify-between items-center p-4 shadow-md ">
      <div className="flex items-center space-x-4">
        <a href="/home" className="text-f5f5dc text-xl font-bold">
          EffiAutoTask
        </a>
      </div>
      <ul className="flex space-x-6">
        <li>
          <a
            href="/home"
            className="text-f5f5dc no-underline hover:text-gray-300 p-4"
          >
            Home
          </a>
        </li>
        <li>
          <a
            href="/about"
            className="text-f5f5dc no-underline hover:text-gray-300 p-4"
          >
            About
          </a>
        </li>
        <li>
          <a
            href="/tasks"
            className="text-f5f5dc no-underline hover:text-gray-300 p-4"
          >
            Tasks
          </a>
        </li>
        <li>
          <div className="">
            <img src="../assets/users/aldo.jpeg" alt="usuario" />
          </div>
        </li>
      </ul>
    </nav>
  );
}

const styles = {
  navbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  navList: {
    listStyle: "none",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  navElement: {
    padding: "1rem",
    textDecoration: "none",
    color: "#F5F5DC",
  },
};
export default Nav;
