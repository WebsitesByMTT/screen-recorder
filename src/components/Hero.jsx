import React from "react";
import Navbar from "./Navbar";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="rounded-tl-3xl rounded-tr-3xl bg-custom-gradient h-screen overflow-hidden">
      <div className=" h-full relative flex items-end justify-center ">
        <div className=" h-3 w-3 rounded-[50%] bg-white relative">
          <div className=" bg-custom-gradient w-c-1 h-c-1 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-[50%] z-30 flex flex-col items-center justify-start gap-10 pt-10">
            <h1 className=" text-white caption-top text-4xl lg:text-6xl font-[300] text-center">
              Record Your Screen <br /> Like A Pro
            </h1>
            <p className=" text-white text lg:text-xl text-center  w-1/2 lg:w-full">
              Capture everything that you want to record from your screen
            </p>
          </div>
          <div className=" bg-custom-gradient w-c-2 h-c-2 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-[50%] z-20">
            <div className=" w-24 h-24 flex items-center justify-center rounded-[50%] bg-[#230346] absolute bottom-[55%] -left-[2%] ">
              <svg
                width="58"
                height="57"
                viewBox="0 0 58 57"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M23.3611 19.7896C21.8103 19.7896 20.5415 21.0584 20.5415 22.6091C20.5415 24.1599 21.8103 25.4287 23.3611 25.4287C24.9118 25.4287 26.1806 24.1599 26.1806 22.6091C26.1806 21.0584 24.9118 19.7896 23.3611 19.7896ZM23.3611 31.0678C21.8103 31.0678 20.5415 32.3366 20.5415 33.8873C20.5415 35.4381 21.8103 36.7069 23.3611 36.7069C24.9118 36.7069 26.1806 35.4381 26.1806 33.8873C26.1806 32.3366 24.9118 31.0678 23.3611 31.0678ZM14.9024 21.1993C14.1271 21.1993 13.4927 21.8337 13.4927 22.6091C13.4927 23.3845 14.1271 24.0189 14.9024 24.0189C15.6778 24.0189 16.3122 23.3845 16.3122 22.6091C16.3122 21.8337 15.6778 21.1993 14.9024 21.1993ZM23.3611 40.9362C22.5857 40.9362 21.9513 41.5706 21.9513 42.346C21.9513 43.1213 22.5857 43.7557 23.3611 43.7557C24.1365 43.7557 24.7708 43.1213 24.7708 42.346C24.7708 41.5706 24.1365 40.9362 23.3611 40.9362ZM14.9024 32.4775C14.1271 32.4775 13.4927 33.1119 13.4927 33.8873C13.4927 34.6627 14.1271 35.2971 14.9024 35.2971C15.6778 35.2971 16.3122 34.6627 16.3122 33.8873C16.3122 33.1119 15.6778 32.4775 14.9024 32.4775ZM23.3611 15.5603C24.1365 15.5603 24.7708 14.9259 24.7708 14.1505C24.7708 13.3751 24.1365 12.7407 23.3611 12.7407C22.5857 12.7407 21.9513 13.3751 21.9513 14.1505C21.9513 14.9259 22.5857 15.5603 23.3611 15.5603ZM34.6393 19.7896C33.0885 19.7896 31.8197 21.0584 31.8197 22.6091C31.8197 24.1599 33.0885 25.4287 34.6393 25.4287C36.19 25.4287 37.4588 24.1599 37.4588 22.6091C37.4588 21.0584 36.19 19.7896 34.6393 19.7896ZM34.6393 15.5603C35.4146 15.5603 36.049 14.9259 36.049 14.1505C36.049 13.3751 35.4146 12.7407 34.6393 12.7407C33.8639 12.7407 33.2295 13.3751 33.2295 14.1505C33.2295 14.9259 33.8639 15.5603 34.6393 15.5603ZM43.0979 32.4775C42.3225 32.4775 41.6881 33.1119 41.6881 33.8873C41.6881 34.6627 42.3225 35.2971 43.0979 35.2971C43.8733 35.2971 44.5077 34.6627 44.5077 33.8873C44.5077 33.1119 43.8733 32.4775 43.0979 32.4775ZM43.0979 21.1993C42.3225 21.1993 41.6881 21.8337 41.6881 22.6091C41.6881 23.3845 42.3225 24.0189 43.0979 24.0189C43.8733 24.0189 44.5077 23.3845 44.5077 22.6091C44.5077 21.8337 43.8733 21.1993 43.0979 21.1993ZM29.0002 0.0527344C13.4222 0.0527344 0.804688 12.6702 0.804688 28.2482C0.804688 43.8262 13.4222 56.4437 29.0002 56.4437C44.5782 56.4437 57.1957 43.8262 57.1957 28.2482C57.1957 12.6702 44.5782 0.0527344 29.0002 0.0527344ZM29.0002 50.8046C16.5378 50.8046 6.44378 40.7106 6.44378 28.2482C6.44378 15.7858 16.5378 5.69183 29.0002 5.69183C41.4626 5.69183 51.5566 15.7858 51.5566 28.2482C51.5566 40.7106 41.4626 50.8046 29.0002 50.8046ZM34.6393 40.9362C33.8639 40.9362 33.2295 41.5706 33.2295 42.346C33.2295 43.1213 33.8639 43.7557 34.6393 43.7557C35.4146 43.7557 36.049 43.1213 36.049 42.346C36.049 41.5706 35.4146 40.9362 34.6393 40.9362ZM34.6393 31.0678C33.0885 31.0678 31.8197 32.3366 31.8197 33.8873C31.8197 35.4381 33.0885 36.7069 34.6393 36.7069C36.19 36.7069 37.4588 35.4381 37.4588 33.8873C37.4588 32.3366 36.19 31.0678 34.6393 31.0678Z"
                  fill="#B6A4E6"
                />
              </svg>
            </div>

            <div className=" w-28 h-28 flex items-center justify-center rounded-[50%] bg-[#230346] absolute bottom-[60%] -right-[2%]">
              <svg
                width="110"
                height="109"
                viewBox="0 0 110 109"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g filter="url(#filter0_d_416_2)">
                  <path
                    d="M68.999 50.2054C68.999 57.7678 62.7335 63.8937 54.9948 63.8937C47.2698 63.8937 41.001 57.7678 41.001 50.2054C41.001 42.6512 47.2698 36.5272 54.9948 36.5272C62.7335 36.5272 68.999 42.6513 68.999 50.2054ZM90 29.6782V70.7328C90 78.2937 83.7346 84.421 75.9958 84.421H33.9938C26.2688 84.421 20 78.2936 20 70.7328V29.6782C20 22.124 26.2689 16 33.9938 16H75.9958C83.7346 15.9999 90 22.124 90 29.6782ZM83.003 33.106C83.003 27.4313 78.2963 22.839 72.4957 22.839H37.494C31.6968 22.839 26.9968 27.4313 26.9968 33.106V67.3133C26.9968 72.9814 31.6968 77.5804 37.494 77.5804H72.4958C78.2964 77.5804 83.003 72.9814 83.003 67.3133V33.106H83.003Z"
                    fill="#B6A4E6"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_d_416_2"
                    x="0"
                    y="0"
                    width="110"
                    height="108.421"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dy="4" />
                    <feGaussianBlur stdDeviation="10" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_416_2"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_416_2"
                      result="shape"
                    />
                  </filter>
                </defs>
              </svg>
            </div>

            <div className="icon absolute top-[2%] left-[20%]">
              <svg
                viewBox="0 0 70 70"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M45.5024 49.001L49.0019 56.0005H20.9979L24.5043 49.001C24.5043 49.001 27.3889 52.4939 35 52.5007C42.905 52.5077 45.5024 49.001 45.5024 49.001ZM35 28.0054C33.0691 28.0054 31.5003 29.5708 31.5003 31.5017C31.5003 33.4328 33.0691 35.0016 35 35.0016C36.931 35.0016 38.4961 33.4328 38.4961 31.5017C38.4961 29.5709 36.931 28.0054 35 28.0054ZM70 14.0027V56.0006C70 63.7352 63.7319 70 55.9944 70H14.002C6.2679 70 0 63.7352 0 56.0006V14.0027C0 6.27509 6.2679 0 14.002 0H55.9944C63.7319 0 70 6.27509 70 14.0027ZM62.9938 17.4991C62.9938 11.7024 58.298 7.00642 52.4983 7.00642H17.4983C11.702 7.00642 7.00617 11.7024 7.00617 17.4991V52.5008C7.00617 58.2975 11.702 63.0037 17.4983 63.0037H52.4983C58.298 63.0037 62.9938 58.2975 62.9938 52.5008V17.4991ZM52.4983 31.5018C52.4983 41.1675 44.6617 49.0011 35 49.0011C25.335 49.0011 17.4983 41.1675 17.4983 31.5018C17.4983 21.8362 25.335 14.0027 35 14.0027C44.6617 14.0027 52.4983 21.8362 52.4983 31.5018ZM45.5024 31.5018C45.5024 25.7053 40.7963 20.9989 35 20.9989C29.2002 20.9989 24.5044 25.7053 24.5044 31.5018C24.5044 37.2984 29.2002 42.0049 35 42.0049C40.7963 42.0048 45.5024 37.2984 45.5024 31.5018Z"
                  fill=""
                />
              </svg>
              <span className="title">Record Screen</span>
            </div>

            <div className=" w-24 h-24 flex items-center justify-center rounded-[50%] bg-[#230346] absolute top-0 right-[25%]">
              <svg
                width="86"
                height="86"
                viewBox="0 0 86 86"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g filter="url(#filter0_d_242_940)">
                  <path
                    d="M34.9215 29.2318H51.0728C57.0236 29.2318 61.8439 34.0526 61.8439 40.0042C61.8439 45.9491 57.0237 50.7687 51.0728 50.7687H34.9215C28.9774 50.7687 24.1557 45.9491 24.1557 40.0042C24.1557 34.0526 28.9774 29.2318 34.9215 29.2318ZM43.0005 42.6952H48.3821V48.0775H53.7702V42.6952H59.1518V37.3064H53.7702V31.9242H48.3821V37.3064H43.0005V42.6952ZM37.6176 37.3065C39.103 37.3065 40.3084 36.1049 40.3084 34.6153C40.3084 33.1298 39.103 31.9242 37.6176 31.9242C36.1269 31.9242 34.9215 33.1298 34.9215 34.6153C34.9215 36.1048 36.1269 37.3065 37.6176 37.3065ZM32.2294 45.3864C33.72 45.3864 34.9215 44.1795 34.9215 42.6952C34.9215 41.2044 33.72 40.0042 32.2294 40.0042C30.7453 40.0042 29.5386 41.2044 29.5386 42.6952C29.5386 44.1795 30.7454 45.3864 32.2294 45.3864ZM26.8479 13.0771H59.1518C65.096 13.0771 69.9229 17.898 69.9229 23.8496V56.1587C69.9229 62.1023 65.096 66.9233 59.1518 66.9233H26.8478C20.8971 66.9233 16.0767 62.1024 16.0767 56.1587V23.8496C16.0768 17.898 20.8971 13.0771 26.8479 13.0771ZM21.4649 53.4663C21.4649 57.9257 25.0798 61.5411 29.5386 61.5411H56.461C60.9211 61.5411 64.5347 57.9257 64.5347 53.4663V26.5407C64.5347 22.08 60.9211 18.4607 56.461 18.4607H29.5386C25.0798 18.4607 21.4649 22.08 21.4649 26.5407V53.4663Z"
                    fill="#B6A4E6"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_d_242_940"
                    x="0.692044"
                    y="0.769456"
                    width="84.6154"
                    height="84.6149"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dy="3.07692" />
                    <feGaussianBlur stdDeviation="7.69231" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_242_940"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_242_940"
                      result="shape"
                    />
                  </filter>
                </defs>
              </svg>
            </div>
          </div>
          <div className=" bg-custom-gradient w-c-3 h-c-3 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-[50%] z-10">
            <div className=" icon  absolute top-[18%] left-[5%]">
              <svg
                viewBox="0 0 110 110"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g filter="url(#filter0_d_418_587)">
                  <path
                    d="M44.4983 37.0011H65.495C73.231 37.0011 79.4973 43.2681 79.4973 51.0052C79.4973 58.7335 73.2311 64.999 65.495 64.999H44.4983C36.7709 64.999 30.5027 58.7335 30.5027 51.0052C30.5027 43.2681 36.7709 37.0011 44.4983 37.0011ZM55.0009 54.5035H61.997V61.5005H69.0015V54.5035H75.9976V47.498H69.0015V40.5011H61.997V47.498H55.0009V54.5035ZM48.0032 47.4981C49.9342 47.4981 51.5012 45.9361 51.5012 43.9996C51.5012 42.0684 49.9342 40.5012 48.0032 40.5012C46.0653 40.5012 44.4983 42.0684 44.4983 43.9996C44.4983 45.936 46.0653 47.4981 48.0032 47.4981ZM40.9985 58.002C42.9363 58.002 44.4982 56.4331 44.4982 54.5035C44.4982 52.5654 42.9363 51.0051 40.9985 51.0051C39.0692 51.0051 37.5005 52.5654 37.5005 54.5035C37.5005 56.4331 39.0693 58.002 40.9985 58.002ZM34.0025 16H75.9976C83.7251 16 90 22.267 90 30.0042V72.006C90 79.7327 83.7251 86 75.9976 86H34.0024C26.2665 86 20 79.7328 20 72.006V30.0042C20.0001 22.267 26.2665 16 34.0025 16ZM27.0047 68.5059C27.0047 74.3031 31.7041 79.0031 37.5005 79.0031H72.4995C78.2977 79.0031 82.9954 74.3031 82.9954 68.5059V33.5026C82.9954 27.7037 78.2977 22.9987 72.4995 22.9987H37.5005C31.7041 22.9987 27.0047 27.7037 27.0047 33.5026V68.5059Z"
                    fill="#"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_d_418_587"
                    x="0"
                    y="0"
                    width="110"
                    height="110"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dy="4" />
                    <feGaussianBlur stdDeviation="10" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_418_587"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_418_587"
                      result="shape"
                    />
                  </filter>
                </defs>
              </svg>
              <span className="title">Record games</span>
            </div>

            <div className=" w-24 h-24 flex items-center justify-center rounded-[50%] bg-[#230346] absolute -top-[3%] left-[40%] transform -translate-x-1/2 ">
              <svg
                width="53"
                height="54"
                viewBox="0 0 53 54"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M34.5204 37.3995L37.1517 42.6623H16.096L18.7324 37.3995C18.7324 37.3995 20.9012 40.0258 26.6239 40.0309C32.5675 40.0361 34.5204 37.3995 34.5204 37.3995ZM26.6239 21.6133C25.1721 21.6133 23.9926 22.7903 23.9926 24.2421C23.9926 25.694 25.1721 26.8736 26.6239 26.8736C28.0758 26.8736 29.2526 25.694 29.2526 24.2421C29.2526 22.7904 28.0758 21.6133 26.6239 21.6133ZM52.9397 11.085V42.6624C52.9397 48.4779 48.2269 53.1882 42.4092 53.1882H10.8359C5.02081 53.1882 0.308105 48.4779 0.308105 42.6624V11.085C0.308105 5.27476 5.02081 0.556641 10.8359 0.556641H42.4092C48.2269 0.556641 52.9397 5.27476 52.9397 11.085ZM47.6718 13.7139C47.6718 9.35547 44.1412 5.82463 39.7805 5.82463H13.4648C9.10657 5.82463 5.5759 9.35547 5.5759 13.7139V40.0309C5.5759 44.3893 9.10657 47.9278 13.4648 47.9278H39.7805C44.1412 47.9278 47.6718 44.3893 47.6718 40.0309V13.7139ZM39.7805 24.2422C39.7805 31.5096 33.8883 37.3996 26.6239 37.3996C19.357 37.3996 13.4647 31.5097 13.4647 24.2422C13.4647 16.9749 19.357 11.085 26.6239 11.085C33.8883 11.085 39.7805 16.9749 39.7805 24.2422ZM34.5204 24.2422C34.5204 19.8839 30.982 16.3453 26.6239 16.3453C22.2632 16.3453 18.7325 19.8839 18.7325 24.2422C18.7325 28.6006 22.2632 32.1392 26.6239 32.1392C30.982 32.1392 34.5204 28.6006 34.5204 24.2422Z"
                  fill="#B6A4E6"
                />
              </svg>
            </div>

            <div className="icon  -top-[5%] left-[70%] ">
              <svg
                width="75"
                height="75"
                viewBox="0 0 75 75"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M30 26.25C27.9375 26.25 26.25 27.9375 26.25 30C26.25 32.0625 27.9375 33.75 30 33.75C32.0625 33.75 33.75 32.0625 33.75 30C33.75 27.9375 32.0625 26.25 30 26.25ZM30 41.25C27.9375 41.25 26.25 42.9375 26.25 45C26.25 47.0625 27.9375 48.75 30 48.75C32.0625 48.75 33.75 47.0625 33.75 45C33.75 42.9375 32.0625 41.25 30 41.25ZM18.75 28.125C17.7187 28.125 16.875 28.9687 16.875 30C16.875 31.0312 17.7187 31.875 18.75 31.875C19.7812 31.875 20.625 31.0312 20.625 30C20.625 28.9687 19.7812 28.125 18.75 28.125ZM30 54.375C28.9687 54.375 28.125 55.2187 28.125 56.25C28.125 57.2812 28.9687 58.125 30 58.125C31.0312 58.125 31.875 57.2812 31.875 56.25C31.875 55.2187 31.0312 54.375 30 54.375ZM18.75 43.125C17.7187 43.125 16.875 43.9687 16.875 45C16.875 46.0312 17.7187 46.875 18.75 46.875C19.7812 46.875 20.625 46.0312 20.625 45C20.625 43.9687 19.7812 43.125 18.75 43.125ZM30 20.625C31.0312 20.625 31.875 19.7812 31.875 18.75C31.875 17.7187 31.0312 16.875 30 16.875C28.9687 16.875 28.125 17.7187 28.125 18.75C28.125 19.7812 28.9687 20.625 30 20.625ZM45 26.25C42.9375 26.25 41.25 27.9375 41.25 30C41.25 32.0625 42.9375 33.75 45 33.75C47.0625 33.75 48.75 32.0625 48.75 30C48.75 27.9375 47.0625 26.25 45 26.25ZM45 20.625C46.0312 20.625 46.875 19.7812 46.875 18.75C46.875 17.7187 46.0312 16.875 45 16.875C43.9687 16.875 43.125 17.7187 43.125 18.75C43.125 19.7812 43.9687 20.625 45 20.625ZM56.25 43.125C55.2187 43.125 54.375 43.9687 54.375 45C54.375 46.0312 55.2187 46.875 56.25 46.875C57.2812 46.875 58.125 46.0312 58.125 45C58.125 43.9687 57.2812 43.125 56.25 43.125ZM56.25 28.125C55.2187 28.125 54.375 28.9687 54.375 30C54.375 31.0312 55.2187 31.875 56.25 31.875C57.2812 31.875 58.125 31.0312 58.125 30C58.125 28.9687 57.2812 28.125 56.25 28.125ZM37.5 0C16.7812 0 0 16.7812 0 37.5C0 58.2187 16.7812 75 37.5 75C58.2187 75 75 58.2187 75 37.5C75 16.7812 58.2187 0 37.5 0ZM37.5 67.5C20.925 67.5 7.5 54.075 7.5 37.5C7.5 20.925 20.925 7.5 37.5 7.5C54.075 7.5 67.5 20.925 67.5 37.5C67.5 54.075 54.075 67.5 37.5 67.5ZM45 54.375C43.9687 54.375 43.125 55.2187 43.125 56.25C43.125 57.2812 43.9687 58.125 45 58.125C46.0312 58.125 46.875 57.2812 46.875 56.25C46.875 55.2187 46.0312 54.375 45 54.375ZM45 41.25C42.9375 41.25 41.25 42.9375 41.25 45C41.25 47.0625 42.9375 48.75 45 48.75C47.0625 48.75 48.75 47.0625 48.75 45C48.75 42.9375 47.0625 41.25 45 41.25Z"
                  fill="#B6A4E6"
                />
              </svg>
            </div>

            <div className="w-24 h-24 flex items-center justify-center rounded-[50%] bg-[#230346] top-[10%] left-[90%] border border-red-500">
              <svg
                width="53"
                height="52"
                viewBox="0 0 53 52"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M37.1494 26.0269C37.1494 31.713 32.4385 36.3189 26.62 36.3189C20.8117 36.3189 16.0983 31.713 16.0983 26.0269C16.0983 20.3471 20.8117 15.7426 26.62 15.7426C32.4385 15.7426 37.1494 20.3472 37.1494 26.0269ZM52.9397 10.5929V41.4611C52.9397 47.1459 48.2288 51.753 42.4102 51.753H10.8298C5.02148 51.753 0.308105 47.1459 0.308105 41.4611V10.5929C0.308105 4.91311 5.02154 0.308594 10.8298 0.308594H42.4102C48.2288 0.308535 52.9397 4.91311 52.9397 10.5929ZM47.6788 13.1702C47.6788 8.90359 44.1399 5.45067 39.7786 5.45067H13.4615C9.10272 5.45067 5.56885 8.90359 5.56885 13.1702V38.89C5.56885 43.1517 9.10272 46.6096 13.4615 46.6096H39.7786C44.14 46.6096 47.6788 43.1517 47.6788 38.89V13.1702H47.6788Z"
                  fill="#B6A4E6"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
