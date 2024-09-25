import React from "react";

const Warning = () => {
  return (
    <>
      <div className="flex justify-center items-center h-full h-dvh">
        <div className="flex flex-col  p-5 rounded-lg shadow bg-white">
          <div className="flex flex-col items-center text-center">
            <div className="inline-block p-4 bg-yellow-50 rounded-full">
              <svg
                className="w-12 h-12 fill-current text-yellow-500"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M0 0h24v24H0V0z" fill="none" />
                <path d="M12 5.99L19.53 19H4.47L12 5.99M12 2L1 21h22L12 2zm1 14h-2v2h2v-2zm0-6h-2v4h2v-4z" />
              </svg>
            </div>
            <h2 className="mt-2 font-semibold text-gray-800">
              🚧 Website Under Development
            </h2>
            <p className="mt-2 text-sm text-gray-600 leading-relaxed">
              We're working hard to bring you the best mobile experience. Stay
              tuned as we fine-tune our website for your convenience.please
              visit us on a laptop or desktop.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Warning;
