import React, { useEffect, useRef } from "react";
import Clock from "./clock";
import PersianDate from "./calender";
import { Link } from "react-router-dom";
import {
  AiOutlineCalendar,
  AiOutlineHome,
  AiOutlineSetting,
} from "react-icons/ai";
import { BsClock, BsBarChart } from "react-icons/bs";
import { BiExit } from "react-icons/bi";
import { GiSpanner } from "react-icons/gi";

const SketchfabViewer = ({ modelId }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current || containerRef.current.hasChildNodes()) {
      return;
    }

    const iframe = document.createElement("iframe");
    iframe.width = "100%";
    iframe.height = "480px";
    iframe.src = `https://sketchfab.com/models/${modelId}/embed`;
    iframe.frameBorder = "0";
    iframe.allow = "autoplay; fullscreen; vr";
    iframe.style.borderRadius = "5%"; 
    containerRef.current.appendChild(iframe);
  }, [modelId]);

  return (
    <div>
      <nav className="bg-gray-800 p-7">
        <div className="container mx-auto">
          <div className="flex items-center justify-start">
            <ul className="ml-4 space-x-4 flex">
              <li className="text-red-600 text-4xl">
                <Link to="/">
                  <BiExit />
                </Link>
              </li>
              <li className="   flex">
                <div className="text-3xl mr-2 text-blue-500">
                  <AiOutlineCalendar />
                </div>
                <div className="text-white">
                  {" "}
                  <PersianDate />
                </div>
              </li>
              <li className="  flex">
                <div className="text-3xl mr-2 text-blue-500">
                  <BsClock />
                </div>
                <div className="text-white">
                  <Clock />
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <nav className="bg-gray-800 text-white w-16 h-screen fixed top-0 right-0 flex flex-col justify-between">
        <ul className="space-y-2 mt-20">
          <li className="p-5 text-3xl">
            <Link to="##">
              <AiOutlineHome />
            </Link>
          </li>
          <li className="p-5 text-3xl">
            <Link to="##">
              <BsBarChart />
            </Link>
          </li>
          <li className="p-5 text-3xl">
            <Link to="##">
              <GiSpanner />
            </Link>
          </li>
          <li className="p-5 text-3xl">
            <Link to="##">
              <AiOutlineSetting />
            </Link>
          </li>
        </ul>
      </nav>
      <div>
        <div className="text-white text-2xl text-right	mr-32 my-8 ">
          همتا شریف{" "}
        </div>
        <div className="w-full	 border-b-2 mr-28 border-white"></div>

        <div class="flex flex-col justify-center items-center h-screen ">
          <div
            className=" w-3/6  shadow-lg "
            ref={containerRef}
            id="sketchfab-container"
          ></div>
        </div>
      </div>
    </div>
  );
};

export default SketchfabViewer;
