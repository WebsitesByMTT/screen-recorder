import Image from "next/image";
import Link from "next/link";
import React from "react";
import Button from "./Button";

const Footer = ({ FooterText }) => {
  const renderStars = [1, 2, 3, 4, 5];
  const data = [
    {
      solution: [
        {
          text: "Screen Recorder",
          Link: "/screen-recorder",
        },
        {
          text: "Game Recorder",
          Link: "/game-recorder",
        },
        {
          text: "Webcam Recorder",
          Link: "/webcam-recorder",
        },
        {
          text: "Screen Blur",
          Link: "/",
        },
        {
          text: "Real-Time Drawing",
          Link: "/",
        },
      ],
      resources: [
        {
          text: "Blogs",
          Link: "/blogs",
        },
      ],
      Company: [
        {
          text: "About",
          Link: "/about-us",
        },
        {
          text: "Privacy policy",
          Link: "/privacy",
        },
        {
          text: "Eula",
          Link: "/eula",
        },
      ],
    },
  ];
  return (
    <div className="bg-white ">
      <div>
        <div className="py-14">
          <div className="text-[2rem] md:text-[3rem] text-[#1D1D1D]  mx-auto lg:w-[60%] text-center font-normal ">
            {FooterText
              ? FooterText
              : "Over 50K people use our screen recording software."}
          </div>
          <div className="w-full">
            <div className="flex items-center space-x-1 justify-center pt-5">
              {renderStars?.map((item, index) => (
                <svg
                  key={index}
                  xmlns="http://www.w3.org/2000/svg"
                  width="35"
                  height="35"
                  viewBox="0 0 46 45"
                  fill="none"
                >
                  <path
                    d="M20.1856 4.94024C21.0503 2.35325 24.8061 2.35325 25.668 4.94024L28.7522 14.1871C28.9406 14.7503 29.3069 15.241 29.7987 15.5891C30.2905 15.9371 30.8826 16.1248 31.4905 16.1253H41.4695C44.2625 16.1253 45.4213 19.6083 43.1643 21.2094L35.0935 26.9226C34.6007 27.271 34.2338 27.7625 34.0453 28.3267C33.8568 28.8908 33.8564 29.4986 34.0443 30.063L37.1285 39.3099C37.9932 41.8969 34.9523 44.0513 32.6896 42.4502L24.6188 36.7369C24.1264 36.3886 23.5337 36.2011 22.9253 36.2011C22.317 36.2011 21.7242 36.3886 21.2319 36.7369L13.1611 42.4502C10.9013 44.0513 7.86317 41.8969 8.72501 39.3099L11.8092 30.063C11.9971 29.4986 11.9967 28.8908 11.8083 28.3267C11.6198 27.7625 11.2528 27.271 10.76 26.9226L2.69208 21.2122C0.435137 19.6111 1.59676 16.1281 4.38695 16.1281H14.3631C14.9714 16.1282 15.5642 15.9408 16.0566 15.5927C16.5489 15.2446 16.9157 14.7535 17.1042 14.1899L20.1885 4.94305L20.1856 4.94024Z"
                    fill="#FB8627"
                  />
                </svg>
              ))}
            </div>
            <div className="text-black justify-center pt-5 flex items-center space-x-4">
              <div>4.8</div>
              <span className="h-[22px] w-[1.5px] bg-black inline-block"></span>
              <div>Google customer reviews</div>
            </div>
          </div>
          <div className="flex justify-center pt-5">
            <Button style={"border-[#613BC9]"} />
          </div>
        </div>
        <div>
          <div className="p-4 rounded-3xl bg-gradient-to-b from-[#F3F0FC] to-[#5329C4]">
            <div className="grid space-y-6 py-5 md:py-0 grid-cols-12">
              <a href="/" className="col-span-12 md:pl-20 md:col-span-6">
                <Image
                  src={"/dark_logo.svg"}
                  alt="logo"
                  width={200}
                  height={200}
                />
                <div className="text-[#3D2755] text-[.9rem] pt-5">
                  Copyright © 2024 Screen Recorder . All rights reserved.
                </div>
              </a>
              <div className="col-span-12 md:col-span-2">
                <div className="text-black text-[1.6rem]">Solutions</div>
                <div>
                  {data.map((item) =>
                    item.solution.map((subitem, ind) => (
                      <Link
                        className="mt-2 block"
                        key={ind}
                        href={subitem.Link}
                      >
                        <div>{subitem.text}</div>
                      </Link>
                    ))
                  )}
                </div>
              </div>
              <div className="col-span-12 md:col-span-2">
                <div className="text-black text-[1.6rem]">Resources</div>
                <div className="space-y-4 pt-2">
                  {data.map((item) =>
                    item.resources.map((subitem, ind) => (
                      <Link
                        className="mt-2 block"
                        key={ind}
                        href={subitem.Link}
                      >
                        <div>{subitem.text}</div>
                      </Link>
                    ))
                  )}
                </div>
              </div>
              <div className="col-span-12 md:col-span-2">
                <div className="text-black text-[1.6rem]">Company</div>
                <div className="space-y-4 pt-2">
                  {data.map((item) =>
                    item.Company.map((subitem, ind) => (
                      <Link
                        className="mt-2 block"
                        key={ind}
                        href={subitem.Link}
                      >
                        <div>{subitem.text}</div>
                      </Link>
                    ))
                  )}
                </div>
              </div>
            </div>
            <div className="flex pt-12 md:pr-28 items-center space-x-5 justify-center md:justify-end">
              <Link href={"https://www.facebook.com/recordbro7/"} target="blank">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="cursor-pointer w-[50px] h-[50px]"
                  width="45"
                  height="45"
                  viewBox="0 0 46 46"
                  fill="none"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M26.131 44.7956C37.0735 43.2707 45.4968 33.8735 45.4968 22.5066H45.5C45.5 10.0769 35.4261 0 23 0C10.5739 0 0.5 10.0769 0.5 22.5066C0.5 33.7079 8.68211 42.9995 19.3945 44.7247C20.5674 44.9139 21.7719 45.0117 22.9984 45.0117C24.061 45.0117 25.1078 44.9376 26.131 44.7956ZM26.0883 17.7789V12.876L26.0899 12.8745C26.0899 11.7028 27.0406 10.7519 28.2119 10.7519H32.1532V5.04004H26.1215C26.1159 5.04004 26.1108 5.04083 26.1057 5.04162C26.1006 5.04241 26.0954 5.0432 26.0899 5.0432V5.04004C22.3678 5.04004 19.3519 8.05838 19.3519 11.7801V17.7789H13.76V24.3833H19.3519V39.5286C20.5248 39.7178 21.7293 39.8156 22.9558 39.8156C24.0184 39.8156 25.0652 39.7414 26.0883 39.5995V24.3833H31.1915L32.1516 17.7789H26.0883Z"
                    fill="#B6A4E6"
                  />
                </svg>
              </Link>
              <Link href={"https://www.instagram.com/recordbro7/"} target="blank">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="cursor-pointer w-[50px] h-[50px]"
                  width="40"
                  height="40"
                  viewBox="0 0 46 46"
                  fill="none"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M22.948 0H23.0504C35.4481 0 45.4984 10.0533 45.4984 22.4546V22.5571C45.4984 34.9584 35.4481 45.0117 23.0504 45.0117H22.948C10.5503 45.0117 0.5 34.9584 0.5 22.5571V22.4546C0.5 10.0533 10.5503 0 22.948 0ZM16.0381 9.1582H29.9619C33.8085 9.1582 36.9379 12.2885 36.9379 16.1363V28.8783C36.9379 32.7261 33.8085 35.8564 29.9619 35.8564H16.0381C12.1914 35.8564 9.06201 32.7261 9.06201 28.8783V16.1363C9.06201 12.2885 12.1914 9.1582 16.0381 9.1582ZM16.0381 11.6199C13.5488 11.6199 11.523 13.6463 11.523 16.1363V28.8783C11.523 31.3684 13.5488 33.3948 16.0381 33.3948H29.9619C32.4512 33.3948 34.477 31.3684 34.477 28.8783V16.1363C34.477 13.6463 32.4512 11.6199 29.9619 11.6199H16.0381ZM23.0002 28.9964C26.5773 28.9964 29.4891 26.0853 29.4891 22.5055C29.4891 18.9258 26.5788 16.0147 23.0002 16.0147C19.4215 16.0147 16.5112 18.9258 16.5112 22.5055C16.5112 26.0853 19.4215 28.9964 23.0002 28.9964ZM23.0002 18.4779C25.2215 18.4779 27.0282 20.2852 27.0282 22.5071C27.0282 24.7291 25.2215 26.5363 23.0002 26.5363C20.7789 26.5363 18.9722 24.7291 18.9722 22.5071C18.9722 20.2852 20.7789 18.4779 23.0002 18.4779ZM31.838 15.3147C31.838 16.2798 31.0529 17.0636 30.0896 17.0636C29.1248 17.0636 28.3413 16.2798 28.3413 15.3147C28.3413 14.3496 29.1248 13.5658 30.0896 13.5658C31.0544 13.5658 31.838 14.3496 31.838 15.3147Z"
                    fill="#B6A4E6"
                  />
                </svg>
              </Link>
              <Link href={"https://www.youtube.com/@recordbro"} target="blank">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="cursor-pointer w-[50px] h-[50px]"
                  width="40"
                  height="40"
                  viewBox="0 0 46 45"
                  fill="none"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M22.9339 0C35.3246 0 45.3692 10.0476 45.3692 22.442C45.3692 34.8363 35.3246 44.8839 22.9339 44.8839C10.5432 44.8839 0.498535 34.8363 0.498535 22.442C0.498535 10.0476 10.5432 0 22.9339 0ZM35.1061 13.2118C36.5044 14.2022 36.8844 16.0867 37.0609 17.7914C37.3841 20.9312 37.3873 24.1025 37.072 27.2438C36.9427 28.5385 36.7235 29.9057 35.8707 30.8882C35.0256 31.8628 33.7723 32.2397 32.4575 32.3816C31.7891 32.4541 31.1049 32.4667 30.449 32.4652C25.3333 32.462 20.2175 32.4573 15.1032 32.4526C13.4921 32.451 11.739 32.4005 10.4967 31.3771C9.09516 30.2211 8.80351 28.2168 8.68842 26.4033C8.53235 23.9179 8.51816 21.4247 8.64901 18.9379C8.71995 17.5722 8.84291 16.1734 9.43095 14.9386C9.85504 14.0508 10.5597 13.2528 11.4599 12.8334C12.3705 12.4088 13.3179 12.4184 14.2908 12.4282C14.4381 12.4297 14.5859 12.4312 14.7343 12.4312C16.085 12.4297 17.4357 12.4285 18.7863 12.4273C20.1378 12.4261 21.4893 12.4249 22.8408 12.4234C23.965 12.4227 25.0894 12.4216 26.2138 12.4205C27.8995 12.4187 29.5852 12.417 31.2704 12.417C32.5994 12.4155 34.023 12.4439 35.1061 13.2118ZM19.8832 18.0374V26.8448L27.5073 22.4403L19.8832 18.0374Z"
                    fill="#B6A4E6"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
