export const Header = () => {
  return (
    <div className="relative bg-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-center justify-between border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <a href="#about">
              <span className="sr-only">Your Company</span>
              <svg
                width="56"
                height="36"
                viewBox="0 0 56 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="18" cy="18" r="18" fill="#6366F1" />
                <rect x="24" y="16" width="13" height="3" fill="#72BD36" />
                <rect
                  x="43"
                  y="16"
                  width="13"
                  height="3"
                  fill="#A7E476"
                  fill-opacity="0.2"
                />
                <rect
                  x="40.9995"
                  y="20"
                  width="13"
                  height="3"
                  transform="rotate(88.7006 40.9995 20)"
                  fill="#A7E476"
                />
                <rect
                  x="40.9995"
                  y="1"
                  width="13"
                  height="3"
                  transform="rotate(88.7006 40.9995 1)"
                  fill="#68AC32"
                />
                <rect
                  x="29.4143"
                  y="5"
                  width="13"
                  height="3"
                  transform="rotate(45 29.4143 5)"
                  fill="#68AC32"
                />
                <rect
                  x="43.4143"
                  y="18"
                  width="13"
                  height="3"
                  transform="rotate(45 43.4143 18)"
                  fill="#A7E476"
                  fill-opacity="0.6"
                />
                <rect
                  x="28"
                  y="27.1924"
                  width="13"
                  height="3"
                  transform="rotate(-45 28 27.1924)"
                  fill="#90D856"
                />
              </svg>
            </a>
          </div>
          <div className="-my-2 -mr-2 md:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              aria-expanded="false"
            >
              <span className="sr-only">Open menu</span>
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </button>
          </div>
          <nav className="hidden space-x-10 md:flex">
            <div className="relative"></div>
            <button
              type="button"
              className="text-gray-500 px-3 group inline-flex items-center rounded-md bg-white text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              aria-expanded="false"
            >
              <span>Test</span>
            </button>
            <button
              type="button"
              className="text-gray-500 px-3 group inline-flex items-center rounded-md bg-white text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              aria-expanded="false"
            >
              <span>Test</span>
            </button>
            <button
              type="button"
              className="text-gray-500 px-3 group inline-flex items-center rounded-md bg-white text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              aria-expanded="false"
            >
              <span>Test</span>
            </button>
          </nav>
          <div className="hidden items-center justify-end md:flex md:flex-1 lg:w-0">
            <a
              href="#a"
              className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900"
            >
              Sign in
            </a>
            <a
              href="#b"
              className="ml-8 inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
            >
              Sign up
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
