import { useState } from "react";
export default function CookiePopUp() {
  const [isCustomCookies, setIsCustomCookies] = useState(false);
  return (
    <div className="bg-gray-100 shadow-2xl flex flex-col gap-2 rounded-xl absolute bottom-0 left-0 p-4 z-50 max-w-[460px]">
      {" "}
      {!isCustomCookies ? (
        <div>
          {" "}
          <h1 className="font-bold ">Cookie Preferences</h1>
          <p>
            We use cookies to optimise our website and collect statistics on
            usage.
          </p>
          <div className="flex flex-row w-full gap-4">
            <a className="underline font-medium hover:cursor-pointer">
              {" "}
              Privacy Policy
            </a>
            <a className="underline font-medium hover:cursor-pointer">
              {" "}
              Cookie Policy
            </a>
          </div>
        </div>
      ) : (
        <div className="flex flex-col gap-3">
          <h1 className="font-bold ">Which cookies do you want to accept?</h1>
          <p>
            We use cookies to optimise our website and collect statistics on
            usage.
          </p>
          <div className="flex flex-row w-full justify-between ">
            <div> Necessary</div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" value="" class="sr-only peer" />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
            </label>
          </div>
          <div className="flex flex-row w-full justify-between">
            <div> Statistics</div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" value="" className="sr-only peer" />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
            </label>
          </div>
        </div>
      )}
      <div className="flex flex-row w-full justify-between">
        <div
          onClick={() => setIsCustomCookies(true)}
          className="bg-gray-300 cursor-pointer p-2 rounded-md"
        >
          {" "}
          Custom Permissions
        </div>
        <div className="bg-black text-white cursor-pointer p-2 rounded-md">
          {" "}
          Accept All
        </div>
      </div>
    </div>
  );
}
