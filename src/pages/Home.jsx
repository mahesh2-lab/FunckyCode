import React, { useState, useEffect } from "react";
import useGenerativeAI from "../websockets/Data";
import toast, { Toaster } from "react-hot-toast";
import { Copy, Download } from "lucide-react";
import Loader from "../components/Loader";

const Home = () => {
  const { result, genrate, loading } = useGenerativeAI();
  const [istext, setIstext] = useState(true);

  const handlesubmit = async (e) => {
    e.preventDefault();
    setIstext(false);
    const textarea = e.target.elements.code.value;
    if (!textarea) {
      toast.error("Please enter your prompt");
      return;
    }
    await genrate(textarea);
  };
  const handleCopy = () => {
    navigator.clipboard
      .writeText(result)
      .then(() => {
        toast.success("Copied to clipboard!");
      })
      .catch((err) => {
        toast.error("Failed to copy text");
      });
  };

  const handleDownload = () => {
    const blob = new Blob([result], { type: "text/html" }); // Create a Blob with the content and file type
    const link = document.createElement("a"); // Create a link element
    link.href = URL.createObjectURL(blob); // Create a downloadable URL
    link.download = "index.html"; // Set the file name for the download
    link.click(); // Trigger the download
    URL.revokeObjectURL(link.href); // Clean up the URL object
  };

  const override = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
  };

  return (
    <>
      <div className="h-screen overflow-hidden">
        <nav className="col-span-6 black flex items-center h-16 ps-6 bg-[#172033]">
          <div className="flex items-center gap-4">
            <img src="./logo.png" className="h-10 w-10" alt="" />
            <a
              href="/"
              className="brand-logo text-white text-2xl font-semibold"
            >
              FunckyCode
            </a>
          </div>
        </nav>
        <div className="w-full grid grid-cols-6 h-full">
          <div className="col-span-2">
            <div className="bg-slate-900 h-full">
              <form onSubmit={handlesubmit} className="h-full p-6">
                <textarea
                  className="w-full h-5/6 p-7 border rounded-md text-white bg-transparent resize-none focus:outline-none"
                  placeholder="Enter your prompt here..."
                  name="code"
                />
                <div className="flex justify-end mt-5">
                  <button
                    type="submit"
                    className="btn bg-white py-2 px-9 rounded-md text-center"
                  >
                    Genrate ✨
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="col-span-4 h-full">
            <div className="bg-slate-800 p-4 flex flex-col h-full  ">
              <div className="w-full h-10 my-2 flex justify-start">
                <div className="border-2 h-full w-1/6 rounded-lg flex justify-evenly items-center px-4">
                  <Copy
                    size={24}
                    color="#fff"
                    onClick={handleCopy}
                    className="cursor-pointer"
                  />
                  <Download
                    size={24}
                    color="#fff"
                    onClick={handleDownload}
                    className="cursor-pointer"
                  />
                </div>
              </div>
              {loading ? (
                <Loader />
              ) : istext ? (
                <div className="w-full h-[80%] flex justify-center items-center  flex-col border overflow-auto text-white p-4">
                  <img src="./bg.png" alt="" srcset="" />
                  <h3 className="text-2xl font-medium">Please enter the prompt....</h3>
                </div>
              ) : result ? (
                <iframe
                  srcDoc={result}
                  title="output"
                  className="w-full h-[80%]  border"
                />
              ) : null}
            </div>
          </div>
        </div>
      </div>
      <Toaster />
    </>
  );
};

export default Home;
