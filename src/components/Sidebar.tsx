export default function Sidebar() {
    return (
      <div className="tw:w-64 tw:bg-gray-800 tw:text-white tw:p-4 tw:h-screen">
        <h2 className="tw:text-2xl tw:font-bold tw:mb-6">Chat App</h2>
        <ul className="tw:space-y-4">
          <li>
            <a
              href="#"
              className="tw:text-lg tw:text-gray-300 tw:hover:tw:text-white"
            >
              Dashboard
            </a>
          </li>
          <li>
            <a
              href="#"
              className="tw:text-lg tw:text-gray-300 tw:hover:tw:text-white"
            >
              Messages
            </a>
          </li>
          {/* <li>
            <a
              href="#"
              className="tw:text-lg tw:text-gray-300 tw:hover:tw:text-white"
            >
              Settings
            </a>
          </li> */}
          {/* <li>
            <a
              href="#"
              className="tw:text-lg tw:text-gray-300 tw:hover:tw:text-white"
            >
              Logout
            </a>
          </li> */}
        </ul>
      </div>
    );
  }
