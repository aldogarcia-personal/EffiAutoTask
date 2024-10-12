function Login() {
  return function Nav() {
    return (
      <nav className="bg-0056B3 flex justify-between items-center p-4 shadow-md">
        <div className="flex items-center space-x-4">
          <a href="/home" className="text-white text-xl font-bold">
            EffiAutoTask
          </a>
        </div>
        <ul className="flex space-x-6">
          <li>
            <a
              href="/home"
              className="text-white no-underline hover:text-gray-300"
            >
              register
            </a>
          </li>
          <li>
            <a
              href="/Login"
              className="text-white no-underline hover:text-gray-300"
            >
              Login
            </a>
          </li>
        </ul>
      </nav>
    );
  };
}

export default Login;
