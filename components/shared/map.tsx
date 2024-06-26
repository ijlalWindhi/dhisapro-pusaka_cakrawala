"use client";
import React, { useState } from "react";
import { useGlobalStore } from "@/providers/global-store-providers";

function Map() {
  const { setSelectedProvince, setIsModalOpen } = useGlobalStore(
    (state) => state
  );
  const [type, setType] = useState<string | null>(null);

  function handleHover(type: string | null) {
    setType(type);
  }

  function handleClick(type: string | null) {
    setIsModalOpen(true);
    setSelectedProvince(type);
  }

  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1045.24 361.64"
        fill="#e5383b"
      >
        <svg
          fill={type == "kalimantan" ? "#a4161a" : "#e5383b"}
          stroke="#000"
          strokeWidth={1}
          onMouseEnter={() => handleHover("kalimantan")}
          onMouseLeave={() => handleHover(null)}
          onClick={() => handleClick("kalimantan")}
          className={`cursor-pointer`}
        >
          <path
            className="cls-1"
            d="M328,83.72l-6,4-8.2,19.37,5.71,18.38,5.22,6.7-4.22,7.21L326,154l10.93,7.7,12.42,37.5,32-2,5,8.2,15.4,1.49,11.92-4.72,26.08,5.47s4.47,9.93,4.22,10.92,34-7.94,34-7.94l9.44-31.79,1.74-8.95L513,145.32l-.25-30.06,12.67-7.45,18.87,2L531.87,97.88l-7.2-17.14L506.54,65.59l-.25-12.29-2.6-7.08,13.41-.37-3-10.06L502.2,30.2l-29.06.37-6.71,9.69.75,17.51L459,61.12l-3.73,6.33,3,4.48-8.56,6,.74,7.82-8.19,11.55-12.3-3.73-7.08,7.08-17.13-3.35V91.67l-8.57.75-8.94,6.33-3.36,6.7-20.11.38-12.3,4.47-10.06-8.2L331.2,95Z"
          />
        </svg>
        <svg
          fill={type == "sulawesi" ? "#a4161a" : "#e5383b"}
          stroke="#000"
          strokeWidth={1}
          onMouseEnter={() => handleHover("sulawesi")}
          onMouseLeave={() => handleHover(null)}
          onClick={() => handleClick("sulawesi")}
          className="cursor-pointer"
        >
          <path
            className="cls-1"
            d="M560.19,255.46l-4-10.43.75-16.51-2.48-12.67.86-7.08-1.86-1.36-10.8,3.72-1.62-10.43,5.1-10.93,2-13.91,3-.37-.49-19.62,7.82-13.53,2.73-14.53,10.68-18.88,6.09,2.36,7.32-13.66,13.29,2.61,7,4.1,19.87,2.85,6.09,2.49,3.6-2.36,21.73,1.24,7.82-7.2,6.71-.62,6.58-10.31,4.22-1.24,4.47,6.7-13,16-6.83,8.57-24.21,2.61-7.2-4-28.44.75-4-2.11L595.33,120l-8.32-.12a9,9,0,0,0-6-2.48c-4-.25-9.07,4.59-9.07,4.59l-4.34,19,5.09,7.57,10.8,11.06,6,2.6,9.81-13.41,17.76.75,16.15-3.6,7.82-4.85s6.83,3.61,5.71,4.72-2.73,7.33-2.73,7.33l-5.59-3.6-11.92,4.22-14.65,14.16s-4.6,1.36-8,2a8.26,8.26,0,0,0-5,2.86l13.66,12.54,5.34,12.79,1.24,2.74-1.86,10.67,9.81,7.33L633,227.9s-6.71,2.36-9.81,2.48-10.06,3.35-10.06,3.35l.25,7.08a29.56,29.56,0,0,1-7.21-2.48A26.07,26.07,0,0,1,600.3,233l3.23-10.56-12.67-9.06L587,207.66l5-8.7-1.37-9.06-8.69-3.23L569.38,197.6l8.32,7.2-1.12,12.54-4.72,8.2,3.48,13.28L571,245l6.21,12.42-10.06.25Z"
          />
          <path
            className="cls-1"
            d="M627.56,234.79l-6.65,3.1-.87,8.57-.74,5.84s5.71,3.72,5.83,3.54,11-6.15,10.75-6.15a28,28,0,0,1-2.49-3.23l4.22-9.44-6.76.19s-4.72,10.43-4.23,10.31S627.56,234.79,627.56,234.79Z"
          />
        </svg>
        <svg
          fill={type == "papua" ? "#a4161a" : "#e5383b"}
          stroke="#000"
          strokeWidth={1}
          onMouseEnter={() => handleHover("papua")}
          onMouseLeave={() => handleHover(null)}
          onClick={() => handleClick("papua")}
          className="cursor-pointer"
        >
          <path
            className="cls-1"
            d="M1044,334.57V288.62l-2.24-11.42,3.48-5V187.29l-27.32-4.72-26.33-13.66-20.36-5.71-13.41,4.47-.5,7.7-15.9,3L936.71,190l-12.42,9.19-7.7,7-7.7-2.24L898,188l-5.22,1.74-5-20.86,1.49-9.93-6.21-12.42-13.16.25L856,136.38l-11.68,1.24-10.18,7.45-6.46,1-5.71,7.7L817.74,157l-2.48-6.21-8.2.25,8,12.91,16.64-1.49,5.46,4.72,12.42,14.9s7.2-.24,8-.24,24.34-6,24.34-6l2.23,7.95-5.46,6-10.93-5.71-11.42,10.18-12.42-4L838.11,194l18.62,11.17,3.73,8-4.72,5.46,18.38-.25,1.74-13.41,6-5.71-1.74,10.43,3,4.47,23.59,13.17s14.9,3.72,16.15,4,18.62,1,18.62,1l33.78,15.9,7,17.14,11.92,19.37,6.21,4.72-6.46,1,3.48,9.69-9.19-3.73-11.68,8.94s-8.94,14.41-7.94,14.16,31,1.24,31,1.24l8.69-5.46,13.66-2.24Z"
          />
          <path
            className="cls-1"
            d="M746.71,77.51l-8,14.91-2.61,17.13,2.05,11.74,3.73,4.28s-1.31,7.82-.75,8.2,4.84,5.4,4.84,5.4l5.59,8.94.75-2.05L746.58,131l2-14.15s18.07,8.19,18.07,7.63-2.79-6.89-2.79-6.89l-8.76-4.84,6-5,4.85-3.54-2.8-11.36-4.66,1.67-7.26,4.66,1.68,3-3.17.75L746,110.67l-3.53-2.42-.75-2.61,7.27-9.5V91.48l-3.73-4.28L749,79.93Z"
          />
          <polygon
            className="cls-1"
            points="749.19 195.49 766.58 192.01 771.54 195.24 778.75 192.26 796.13 198.22 803.33 196.98 814.51 214.61 814.51 218.09 794.64 210.39 791.91 203.93 783.71 207.9 769.56 206.16 767.82 201.94 759.62 208.9 753.66 203.43 745.47 206.91 748.2 200.7 751.92 199.21 749.19 195.49"
          />
          <polygon
            className="cls-1"
            points="701.88 200.45 724.04 198.4 734.29 208.28 722.74 214.42 711.01 213.68 701.88 200.45"
          />
          <polygon
            className="cls-1"
            points="896.35 251.31 887.59 266.76 887.78 286.14 889.83 289.49 899.51 274.4 903.42 263.41 900.07 254.28 896.35 251.31"
          />
          <polygon
            className="cls-1"
            points="830.78 290.42 820.72 298.99 814.57 310.91 822.96 308.86 830.97 300.11 833.01 294.52 830.78 290.42"
          />
        </svg>
        <svg
          fill={type == "jawa" ? "#a4161a" : "#e5383b"}
          stroke="#000"
          strokeWidth={1}
          onMouseEnter={() => handleHover("jawa")}
          onMouseLeave={() => handleHover(null)}
          onClick={() => handleClick("jawa")}
          className="cursor-pointer"
        >
          <path
            className="cls-1"
            d="M228.87,278.31l7.95,1.62,7.2-5.84,5.59-11.17,15.65,2.6,6.7,4.6,1.37-5.59,7.45.87,6.08,5.09,4-.74,6.7,3.1,1.74-2.23s3.23,4.34,4.23,4.47,5.33,8.69,5.71,8.69,12.66,2.11,12.66,2.11l20.49-1.12L348,285s10.18-10.93,12.3-9.93,10.8,7,10.8,7,18.5,2.73,18.38,3.6,5.71,1.62,5.71,1.62l5.59,11.17,10.31,6.83,16.51-1.49,12.17,1.37.75,4.59-1,12.79,2.74,4H439l-7.45-1.12s-16.52-6.83-17.64-7.2-14.65,3.23-14.65,3.23l-17.51-5.47-5.34,2.24-26.82-5.84-12.42-5.84-9.94-1.61-12.17-2.11-8.19,1.74-4.22,2.85-8.45-1.61s-13-6.21-13.41-6.09-18.88-.74-18.88-.74l-6.08-4,2-5.09-4.35-2.6L245.14,284l-4.72,2.23-9.69-2.48Z"
          />
          <path
            className="cls-1"
            d="M400.21,289.4c.75-.56,9.13-5.13,10.53-5s8.28.84,8.56.84h13.42l-6.62,5.49-10.71,3.54-10.89-.37Z"
          />
          <path
            className="cls-1"
            d="M443.24,313.33l6.71,2,7.45-3.35,8.84,4.19,3.45,3.07s-8.94,3.54-9.78,5.4S459,331,459,331h-5.12l2.23-3-1.39-3.54s-3.17-3.26-6-4.19a49.94,49.94,0,0,0-5.87-1.49l-1.4-5.78Z"
          />
          <path
            className="cls-1"
            d="M477.61,327l-1.12-6.89,8.85-5.59,8.29,3.26-6.9,13.14-12.85-.66S477.33,326.93,477.61,327Z"
          />
          <path
            className="cls-1"
            d="M494.25,323.52l8.57-3.85,11.92,5.58,4.22,2.61,9.56-2.48-5.84-4-5-1.37s-5.59-5.22-5.22-5.22,10.68-.87,10.68-.87,4.35,4.1,4.84,4.1,6.21-2.48,6.21-2.48l11.93,3,2.6,6.7L541.68,330l-3.35-4-4.47,3.23-2.61-3.11-7.07,5.1-10.93.74-4.85,3.11-3.47-1.87-3.36,2.24-7.94-2.61Z"
          />
          <path
            className="cls-1"
            d="M559.94,324.39l22.1-8.45,19.13,6.71,6.21-2.49,5.71,1.74,8.69.5,12.67-5.47s-3.23,7.95-4,7.46-15.89,5-15.89,5l-7.45,3.48-6-3-8.45,3.73-14.4-3.23-8.69.24Z"
          />
          <path
            className="cls-1"
            d="M543.05,342.52c1-.25,20.37-2.49,21.11-2.49s5.71,5.22,5.71,5.22l2.49-.25,2,4,4.47-.49,7.46,8.19-2.74,3.73-13.16.25-7.7-6.46-9.44-2.48-.74-2.24-4.72.5Z"
          />
          <polygon
            className="cls-1"
            points="639.66 360.4 647.11 354.93 650.34 343.26 680.39 329.6 681.88 331.84 687.1 331.84 684.87 337.05 686.36 341.52 672.2 355.18 661.77 361.64 648.85 361.64 639.66 360.4"
          />
          <polygon
            className="cls-1"
            points="655.31 320.41 657.92 317.06 665.74 313.21 673.32 313.83 682.51 313.83 683.25 316.94 671.45 319.92 666.24 322.4 659.53 323.64 658.66 321.4 655.31 320.41"
          />
          <path
            className="cls-1"
            d="M639.54,322.27c.62-.62,5.46-4.84,5.46-4.84l2.11,1.12,6.21-2.36-6.45,8.44Z"
          />
        </svg>
        <svg
          fill={type == "sumatra" ? "#a4161a" : "#e5383b"}
          stroke="#000"
          strokeWidth={1}
          onMouseEnter={() => handleHover("sumatra")}
          onMouseLeave={() => handleHover(null)}
          onClick={() => handleClick("sumatra")}
          className="cursor-pointer"
        >
          <path
            className="cls-1"
            d="M7.83,22.13,24.1,34.3l6.83,8.19,5.71.87,9.93,12.17,4.35,2.24.75,4.84,7.07,5,1.74,10.68L66.69,78l5.09,4.1s4.6,1.86,5,2.11,3.73,2.86,3.73,2.86l10.43,30.67s.49,6.58,1.24,6.7l9.44,1.74,3.1,2.86,2.11,8.19,14.66,15.9,3.53,9.5,7.27,10.74-1.74,5.71,8.69,11.18,7.95,9.19,15.9,11.18-.5,9.93,29.31,22.6,7.45,2.24,15.89,17.13,2.49-7.45,13.41,4.72,1-3.72,10.68,6.08,4-29.55L243,225.54l4.35-8.7-3.73-6.08,7.57-10.68-8.56-8-4.72-6.08-16.89-3.48-.5-8.44-6.21-3.73L209.25,154l-11.3.5-7.82-6.83,4.47-9.07-2.49-7.82,5.22-4.47-10.56-12.55-22.72-7.2L152.63,92.91l-7.7-.74L141.08,82l-9.94-5.58L130.4,81l-5.59-2L110.9,64.47,94.26,50.32,73.52,35.91l1-8.57-7-3.22L53.28,11.2,46,12.44,39,8.72l-7.82,3.35L23.73,9l-8-7.46S-.37-.22,0,0,7.83,22.13,8.33,22.38"
          />
          <path
            className="cls-1"
            d="M234.71,165.81,239,179.4l5.78,1.49s3.54,9.88,4.1,10.06,6.51,3.54,6.51,3.54l8.76-7.08-5.59-3.72L247,164.5,241.79,169Z"
          />
        </svg>
      </svg>
    </>
  );
}

export default Map;
