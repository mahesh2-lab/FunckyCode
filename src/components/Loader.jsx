import React from "react";
import Lottie from "react-lottie";
import Animation from "../animation/Animation.json";

const Loader = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: Animation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <>
      <div className="h-full w-full flex justify-center items-center">
        <Lottie options={defaultOptions} height={700} width={534} />
      </div>
    </>
  );
};

export default Loader;
