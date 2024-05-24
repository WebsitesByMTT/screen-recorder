import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import TypeFree from "@/components/TryFree";
import WaysForRecording from "@/components/WaysForRecording";
import OurUsers from "@/components/OurUsers";
import React from "react";
import RecordingSteps from "@/components/RecordingSteps";
import Blogs from "@/components/Blogs";
import Faq from "@/components/Faq";

const data = {
  hero: {
    title: "Record Live Gameplay With This Free Game Recording Software",
    desc: [
      "It is an advanced game recorder that is suitable for capturing the most demanding gameplay in 4K UHD resolution up to 480 frames per second. You can also record live gameplay along with your original audio and share it with your friends by uploading it on your YouTube channel.",
    ],
    button: "",
    image: "/game-recorder-img.png",
  },
  typeFree: {
    heading: "Experience the most famous game recording software",
    text: "This is the best game recording software that is perfect for capturing high-resolution games with DirectX, OpenGL, and many more technologies while keeping its original resolution. It also lets you record your own video, audio, and camera feed simultaneously. Just select game recording mode to record your gameplay and share your videos on your most preferred streaming platforms. Do you know what's the best part of downloading the extension on your browser? ",
    subtext: "While recording it will not slow down your desktop!",
  },
  WaysForRecording: {
    heading: "Have The High-Performance Game Recorder",
    text: [
      {
        title: "Capture high-resolution game screens in real time",
        desc: "Download the extension and record gameplay from the most demanding high-resolution games. It supports up to 4K UHD and 480 FPS and it also compresses videos to save storage space.",
        image: "/game_recorder/way1.png",
      },
      {
        title: "Capture original game sound and audio simultaneously",
        desc: "With this free game recording software, record gameplay with audio and download 4K UHD video quality. You can also save voice tracks in WAV files.",
        image: "/game_recorder/way2.png",
      },
      {
        title: "Enhance your recording performance",
        desc: "With Hardware acceleration embedded graphics that process unit (GPU) in the computer hardware (CPU or graphics card), you can record it in high-resolution gameplays at high quality. It will not even slow down your browser.",
        image: "/game_recorder/way3.png",
      },
      {
        title: "Capture live player with a webcam",
        desc: "You can record gameplay with your favorite player's live face and audio by using a webcam and a microphone. You can also blur the background with the chroma key feature and save it.",
        image: "/game_recorder/way4.png",
      },
      {
        title: "Record your gameplay and upload it on your YouTube channel",
        desc: "It can record real-time gameplay from the latest online games and upload them to your YouTube channel without additional encoding. You can make videos with 1080p/4K quality.",
        image: "/game_recorder/way5.png",
      },
    ],
  },
  RecordingStepsdata:{
  heading:'How to start a Free Game recorder',
  data:[
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="41" height="40" viewBox="0 0 41 40" fill="none">
        <path d="M33.0509 4.37174L33.0575 4.3784L33.0648 4.3844C37.4829 8.04073 40.3 13.5238 40.3 19.6919C40.3 30.6583 31.4665 39.4919 20.5 39.4919C9.53354 39.4919 0.7 30.6583 0.7 19.6919C0.7 13.5255 3.51555 8.04382 7.93148 4.38748C8.22015 4.17161 8.4851 4.0457 8.80769 4.0457C9.54339 4.0457 10.1462 4.64847 10.1462 5.38416C10.1462 5.84359 9.88247 6.25283 9.52891 6.53568L9.5289 6.53568L9.52737 6.53692C5.71273 9.65092 3.3 14.3996 3.3 19.7688C3.3 29.2639 10.928 36.8919 20.4231 36.8919C29.9181 36.8919 37.5462 29.2639 37.5462 19.7688C37.5462 14.4015 35.0585 9.57957 31.1732 6.38983C30.9063 6.11967 30.7769 5.78826 30.7769 5.46109C30.7769 4.72539 31.3797 4.12263 32.1154 4.12263H32.1319L32.1483 4.11991C32.5474 4.05339 32.8667 4.18754 33.0509 4.37174Z" fill="url(#paint0_linear_340_3571)" stroke="#B6A4E6" stroke-width="0.4" />
        <path d="M20.4999 0.2C21.2356 0.2 21.8383 0.802765 21.8383 1.53846V23.0769C21.8383 23.8126 21.2356 24.4154 20.4999 24.4154C19.7642 24.4154 19.1614 23.8126 19.1614 23.0769V1.53846C19.1614 0.802765 19.7642 0.2 20.4999 0.2Z" fill="url(#paint1_linear_340_3571)" stroke="#B6A4E6" stroke-width="0.4" />
        <defs>
          <linearGradient id="paint0_linear_340_3571" x1="20.5" y1="3.8457" x2="20.5" y2="39.6919" gradientUnits="userSpaceOnUse">
            <stop stop-color="#230346" />
            <stop offset="1" stop-color="#5607AC" />
          </linearGradient>
          <linearGradient id="paint1_linear_340_3571" x1="20.4999" y1="0" x2="20.4999" y2="24.6154" gradientUnits="userSpaceOnUse">
            <stop stop-color="#230346" />
            <stop offset="1" stop-color="#5607AC" />
          </linearGradient>
        </defs>
      </svg>,
      steps: 'Step I',
      text: 'Start game recorder',
      arrow: <svg xmlns="http://www.w3.org/2000/svg" width="363" height="116"viewBox="0 0 363 116" fill="none">
        <path d="M0.0602212 6C0.0602212 8.94552 2.44804 11.3333 5.39355 11.3333C8.33907 11.3333 10.7269 8.94552 10.7269 6C10.7269 3.05448 8.33907 0.666667 5.39355 0.666667C2.44804 0.666667 0.0602212 3.05448 0.0602212 6ZM356.394 116L362.167 106H350.62L356.394 116ZM5.39355 7H347.394V5H5.39355V7ZM355.394 15V107H357.394V15H355.394ZM347.394 7C351.812 7 355.394 10.5817 355.394 15H357.394C357.394 9.47715 352.916 5 347.394 5V7Z" fill="#230346" />
      </svg>
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="50" height="40" viewBox="0 0 50 40" fill="none">
        <path d="M3.18171 37.7571L3.18189 37.7573C4.70464 39.1187 6.6047 39.8333 8.56016 39.8333C9.41516 39.8333 10.2919 39.6932 11.148 39.4054L11.1488 39.4052L17.7974 37.208C22.369 35.6938 27.4084 35.6938 31.9869 37.208C31.987 37.208 31.987 37.208 31.987 37.208L38.6357 39.4052L38.6359 39.4052C41.4277 40.3312 44.4071 39.7143 46.6028 37.7571L46.603 37.757C48.8056 35.7999 49.7589 32.9118 49.1557 30.0288L49.1556 30.0286L46.2571 16.0869L46.2568 16.0857C45.7205 13.4112 44.2596 10.9832 42.1495 9.25416C40.0321 7.52496 37.364 6.57211 34.6328 6.57211H30.1526C29.4574 6.57211 28.8879 7.14161 28.8879 7.83682C28.8879 8.53204 29.4574 9.10154 30.1526 9.10154H34.6328C39.0635 9.10154 42.9034 12.2492 43.778 16.5922C43.7781 16.5924 43.7781 16.5925 43.7781 16.5926L46.6836 30.5475L46.5204 30.5815L46.6836 30.5475C47.0965 32.531 46.4397 34.5238 44.9281 35.8731L44.9278 35.8734C43.4089 37.2227 41.3573 37.6433 39.433 37.0093L39.4329 37.0092L32.7841 34.812L32.784 34.812C30.2316 33.9659 27.5798 33.5394 24.8922 33.5394C22.2046 33.5394 19.5457 33.966 17.0006 34.8119L17.0004 34.812L10.352 37.0091C8.42721 37.6507 6.36801 37.2225 4.8564 35.8731C3.34481 34.5238 2.68795 32.531 3.10088 30.5475L3.10088 30.5475L6.00309 16.6155V16.6089L6.00637 16.5926C6.88084 12.2494 10.7208 9.10154 15.1517 9.10154H21.1921C23.7839 9.10154 25.8922 6.9933 25.8922 4.4015V1.43138C25.8922 0.73617 25.3227 0.166667 24.6274 0.166667C23.9322 0.166667 23.3627 0.73617 23.3627 1.43138V4.4015C23.3627 5.59572 22.3863 6.57211 21.1921 6.57211H15.1517C12.4203 6.57211 9.74521 7.52505 7.6352 9.25398C5.52502 10.9831 4.06399 13.4111 3.52766 16.0857L3.52742 16.0869L0.628904 30.0284L3.18171 37.7571ZM3.18171 37.7571C0.98615 35.8001 0.0326346 32.9118 0.628869 30.0286L3.18171 37.7571Z" fill="url(#paint0_linear_351_4377)" stroke="#B6A4E6" stroke-width="0.333333" />
        <path d="M16.4522 19.6746V19.8413H16.6189H19.1238C19.819 19.8413 20.3885 20.4108 20.3885 21.106C20.3885 21.8012 19.819 22.3707 19.1238 22.3707H16.6189H16.4522V22.5373V25.0423C16.4522 25.7375 15.8827 26.307 15.1875 26.307C14.4923 26.307 13.9228 25.7375 13.9228 25.0423V22.5373V22.3707H13.7561H11.2512C10.556 22.3707 9.98649 21.8012 9.98649 21.106C9.98649 20.4108 10.556 19.8413 11.2512 19.8413H13.7561H13.9228V19.6746V17.1697C13.9228 16.4745 14.4923 15.9049 15.1875 15.9049C15.8827 15.9049 16.4522 16.4745 16.4522 17.1697V19.6746Z" fill="url(#paint1_linear_351_4377)" stroke="#B6A4E6" stroke-width="0.333333" />
        <path d="M33.7314 18.0933C33.4942 17.8561 33.361 17.5344 33.361 17.199C33.361 16.8635 33.4942 16.5419 33.7314 16.3047C33.9686 16.0675 34.2903 15.9342 34.6257 15.9342C34.9611 15.9342 35.2828 16.0675 35.52 16.3047C35.7572 16.5419 35.8904 16.8635 35.8904 17.199C35.8904 17.5344 35.7572 17.8561 35.52 18.0933C35.2828 18.3304 34.9611 18.4637 34.6257 18.4637C34.2903 18.4637 33.9686 18.3304 33.7314 18.0933Z" fill="url(#paint2_linear_351_4377)" stroke="#B6A4E6" stroke-width="0.333333" />
        <path d="M33.6956 25.937C33.4584 25.6998 33.3252 25.3781 33.3252 25.0427C33.3252 24.7073 33.4584 24.3856 33.6956 24.1484C33.9328 23.9112 34.2545 23.778 34.5899 23.778C34.9253 23.778 35.247 23.9112 35.4842 24.1484C35.7214 24.3856 35.8546 24.7073 35.8546 25.0427C35.8546 25.3781 35.7214 25.6998 35.4842 25.937C35.247 26.1742 34.9253 26.3074 34.5899 26.3074C34.2545 26.3074 33.9328 26.1742 33.6956 25.937Z" fill="url(#paint3_linear_351_4377)" stroke="#B6A4E6" stroke-width="0.333333" />
        <path d="M37.6318 22.0288C37.3946 21.7916 37.2614 21.4699 37.2614 21.1345C37.2614 20.7991 37.3946 20.4774 37.6318 20.2402C37.869 20.003 38.1907 19.8698 38.5261 19.8698C38.8615 19.8698 39.1832 20.003 39.4204 20.2402C39.6576 20.4774 39.7908 20.7991 39.7908 21.1345C39.7908 21.4699 39.6576 21.7916 39.4204 22.0288C39.1832 22.266 38.8615 22.3992 38.5261 22.3992C38.1907 22.3992 37.869 22.266 37.6318 22.0288Z" fill="url(#paint4_linear_351_4377)" stroke="#B6A4E6" stroke-width="0.333333" />
        <path d="M29.795 22.0015C29.5578 21.7643 29.4246 21.4426 29.4246 21.1072C29.4246 20.7717 29.5578 20.4501 29.795 20.2129C30.0322 19.9757 30.3539 19.8424 30.6893 19.8424C31.0247 19.8424 31.3464 19.9757 31.5836 20.2129C31.8208 20.4501 31.954 20.7717 31.954 21.1072C31.954 21.4426 31.8208 21.7643 31.5836 22.0015C31.3464 22.2386 31.0247 22.3719 30.6893 22.3719C30.3539 22.3719 30.0322 22.2386 29.795 22.0015Z" fill="url(#paint5_linear_351_4377)" stroke="#B6A4E6" stroke-width="0.333333" />
        <defs>
          <linearGradient id="paint0_linear_351_4377" x1="24.8939" y1="0" x2="24.8939" y2="40" gradientUnits="userSpaceOnUse">
            <stop stop-color="#230346" />
            <stop offset="1" stop-color="#5607AC" />
          </linearGradient>
          <linearGradient id="paint1_linear_351_4377" x1="15.1875" y1="15.7383" x2="15.1875" y2="26.4737" gradientUnits="userSpaceOnUse">
            <stop stop-color="#230346" />
            <stop offset="1" stop-color="#5607AC" />
          </linearGradient>
          <linearGradient id="paint2_linear_351_4377" x1="34.6257" y1="15.7676" x2="34.6257" y2="18.6303" gradientUnits="userSpaceOnUse">
            <stop stop-color="#230346" />
            <stop offset="1" stop-color="#5607AC" />
          </linearGradient>
          <linearGradient id="paint3_linear_351_4377" x1="34.5899" y1="23.6113" x2="34.5899" y2="26.4741" gradientUnits="userSpaceOnUse">
            <stop stop-color="#230346" />
            <stop offset="1" stop-color="#5607AC" />
          </linearGradient>
          <linearGradient id="paint4_linear_351_4377" x1="38.5261" y1="19.7031" x2="38.5261" y2="22.5659" gradientUnits="userSpaceOnUse">
            <stop stop-color="#230346" />
            <stop offset="1" stop-color="#5607AC" />
          </linearGradient>
          <linearGradient id="paint5_linear_351_4377" x1="30.6893" y1="19.6758" x2="30.6893" y2="22.5385" gradientUnits="userSpaceOnUse">
            <stop stop-color="#230346" />
            <stop offset="1" stop-color="#5607AC" />
          </linearGradient>
        </defs>
      </svg>,
      steps: 'Step II',
      text: 'Now choose to record the game',
      arrow: <svg xmlns="http://www.w3.org/2000/svg" width="363" height="116" viewBox="0 0 362 116" fill="none">
        <path d="M361.727 6C361.727 8.94552 359.339 11.3333 356.394 11.3333C353.448 11.3333 351.06 8.94552 351.06 6C351.06 3.05448 353.448 0.666667 356.394 0.666667C359.339 0.666667 361.727 3.05448 361.727 6ZM6.39355 116L0.620056 106H12.1671L6.39355 116ZM356.394 7H15.3936V5H356.394V7ZM7.39355 15V107H5.39355V15H7.39355ZM15.3936 7C10.9753 7 7.39355 10.5817 7.39355 15H5.39355C5.39355 9.47715 9.8707 5 15.3936 5V7Z" fill="#230346" />
      </svg>
    },
    {
      icon:<svg xmlns="http://www.w3.org/2000/svg" width="41" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="lucide text-[#5607AC] lucide-disc"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="2"/></svg>      ,
      steps: 'Step III',
      text: 'Select the game recording option',
      arrow: <svg xmlns="http://www.w3.org/2000/svg" width="363" height="116" viewBox="0 0 363 116" fill="none">
        <path d="M0.0602212 6C0.0602212 8.94552 2.44804 11.3333 5.39355 11.3333C8.33907 11.3333 10.7269 8.94552 10.7269 6C10.7269 3.05448 8.33907 0.666667 5.39355 0.666667C2.44804 0.666667 0.0602212 3.05448 0.0602212 6ZM356.394 116L362.167 106H350.62L356.394 116ZM5.39355 7H347.394V5H5.39355V7ZM355.394 15V107H357.394V15H355.394ZM347.394 7C351.812 7 355.394 10.5817 355.394 15H357.394C357.394 9.47715 352.916 5 347.394 5V7Z" fill="#230346" />
      </svg>
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="41" height="45" viewBox="0 0 41 45" fill="none">
        <path d="M30.5729 34.6744L30.5728 34.6744L20.7951 40.1967L20.5001 40.3633L20.205 40.1967L4.64947 31.4145L4.34444 31.2423V30.892V13.5587V13.2084L4.64947 13.0362L20.205 4.25397L20.5 4.08744L20.795 4.25397L36.3505 13.0362L36.6556 13.2084V13.5587V32.1853V32.1854C36.6555 32.3985 36.6975 32.6095 36.779 32.8063C36.8605 33.0032 36.98 33.182 37.1306 33.3327C37.2812 33.4833 37.4601 33.6029 37.6569 33.6844C37.8538 33.7659 38.0647 33.8079 38.2778 33.8079C38.4908 33.8079 38.7018 33.7659 38.8986 33.6844C39.0955 33.6029 39.2743 33.4833 39.4249 33.3327C39.5756 33.182 39.6951 33.0032 39.7766 32.8063C39.8581 32.6095 39.9 32.3985 39.9 32.1854V32.1853V12.259C39.8998 11.9719 39.8235 11.69 39.6787 11.442C39.5339 11.1941 39.3259 10.989 39.0759 10.8477L21.2983 0.810037L21.2981 0.809923C21.0546 0.672315 20.7797 0.6 20.5 0.6C20.2203 0.6 19.9454 0.672315 19.7019 0.809924L19.7017 0.810037L1.92409 10.8477C1.92402 10.8477 1.92396 10.8478 1.92389 10.8478C1.67376 10.9892 1.46568 11.1945 1.32092 11.4427L0.80648 11.1427L1.32092 11.4427C1.17613 11.691 1.09988 11.9733 1.1 12.2607L1.1 12.2609L1.1 32.1896L30.5729 34.6744ZM30.5729 34.6744C30.9477 34.4627 31.3912 34.4086 31.8059 34.5239C32.2206 34.6392 32.5725 34.9145 32.7843 35.2893C32.996 35.6641 33.0501 36.1077 32.9348 36.5224C32.8195 36.937 32.5442 37.2889 32.1695 37.5006C32.1694 37.5007 32.1694 37.5007 32.1693 37.5007L21.2983 43.6384L21.2981 43.6385M30.5729 34.6744L21.2981 43.6385M21.2981 43.6385C21.0546 43.7761 20.7797 43.8485 20.5 43.8485C20.2203 43.8485 19.9454 43.7761 19.7019 43.6385L19.7017 43.6384M21.2981 43.6385L19.7017 43.6384M19.7017 43.6384L1.92409 33.6008M19.7017 43.6384L1.92409 33.6008M1.92409 33.6008C1.67411 33.4595 1.46611 33.2544 1.32133 33.0065C1.17661 32.7586 1.10023 32.4768 1.1 32.1898L1.92409 33.6008ZM12.2111 22.2253C12.2111 21.7951 12.382 21.3825 12.6862 21.0783C12.9905 20.774 13.4031 20.6031 13.8333 20.6031C14.2636 20.6031 14.6762 20.774 14.9804 21.0783C15.2846 21.3825 15.4556 21.7951 15.4556 22.2253C15.4556 23.223 15.7514 24.1983 16.3057 25.0279C16.86 25.8574 17.6478 26.504 18.5696 26.8858C19.4913 27.2676 20.5056 27.3675 21.4841 27.1729C22.4626 26.9782 23.3615 26.4978 24.067 25.7923C24.7724 25.0868 25.2529 24.188 25.4475 23.2095C25.6422 22.2309 25.5423 21.2167 25.1605 20.2949C24.7787 19.3732 24.1321 18.5853 23.3025 18.031C22.473 17.4768 21.4977 17.1809 20.5 17.1809C20.0698 17.1809 19.6571 17.01 19.3529 16.7058C19.0487 16.4015 18.8778 15.9889 18.8778 15.5587C18.8778 15.1284 19.0487 14.7158 19.3529 14.4116C19.6571 14.1074 20.0698 13.9365 20.5 13.9365C22.1394 13.9365 23.742 14.4226 25.1051 15.3334C26.4682 16.2442 27.5306 17.5387 28.1579 19.0533C28.7853 20.5679 28.9494 22.2345 28.6296 23.8424C28.3098 25.4503 27.5203 26.9273 26.3611 28.0865C25.2019 29.2457 23.725 30.0351 22.1171 30.355C20.5092 30.6748 18.8426 30.5106 17.328 29.8833C15.8134 29.2559 14.5188 28.1935 13.608 26.8304C12.6972 25.4673 12.2111 23.8647 12.2111 22.2253Z" fill="url(#paint0_linear_351_3801)" stroke="#B6A4E6" stroke-width="1.2" />
        <defs>
          <linearGradient id="paint0_linear_351_3801" x1="20.5" y1="0" x2="20.5" y2="44.4485" gradientUnits="userSpaceOnUse">
            <stop stop-color="#230346" />
            <stop offset="1" stop-color="#5607AC" />
          </linearGradient>
        </defs>
      </svg>,
      steps: 'Step IV',
      text: 'Go to FPS settings',
      arrow: <svg xmlns="http://www.w3.org/2000/svg" width="363" height="116" viewBox="0 0 362 116" fill="none">
        <path d="M361.727 6C361.727 8.94552 359.339 11.3333 356.394 11.3333C353.448 11.3333 351.06 8.94552 351.06 6C351.06 3.05448 353.448 0.666667 356.394 0.666667C359.339 0.666667 361.727 3.05448 361.727 6ZM6.39355 116L0.620056 106H12.1671L6.39355 116ZM356.394 7H15.3936V5H356.394V7ZM7.39355 15V107H5.39355V15H7.39355ZM15.3936 7C10.9753 7 7.39355 10.5817 7.39355 15H5.39355C5.39355 9.47715 9.8707 5 15.3936 5V7Z" fill="#230346" />
      </svg>
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="28" height="40" viewBox="0 0 28 40" fill="none">
        <path d="M14 33C6.56 33 0.5 27.62 0.5 21C0.5 20.45 0.95 20 1.5 20C2.05 20 2.5 20.45 2.5 21C2.5 26.51 7.66 31 14 31C20.34 31 25.5 26.51 25.5 21C25.5 20.45 25.95 20 26.5 20C27.05 20 27.5 20.45 27.5 21C27.5 27.62 21.44 33 14 33Z" fill="url(#paint0_linear_344_3579)" />
        <path d="M14.0001 29C9.77008 29 6.33008 25.92 6.33008 22.13V6.87C6.33008 3.08 9.77008 0 14.0001 0C18.2301 0 21.6701 3.08 21.6701 6.87V10.85C21.6701 11.4 21.2201 11.85 20.6701 11.85C20.1201 11.85 19.6701 11.4 19.6701 10.85V6.87C19.6701 4.18 17.1301 2 14.0001 2C10.8701 2 8.33008 4.18 8.33008 6.87V22.13C8.33008 24.81 10.8701 27 14.0001 27C17.1301 27 19.6701 24.82 19.6701 22.13V16.1C19.6701 15.55 20.1201 15.1 20.6701 15.1C21.2201 15.1 21.6701 15.55 21.6701 16.1V22.13C21.6701 25.92 18.2301 29 14.0001 29ZM14.0001 39C13.4501 39 13.0001 38.55 13.0001 38V32C13.0001 31.45 13.4501 31 14.0001 31C14.5501 31 15.0001 31.45 15.0001 32V38C15.0001 38.55 14.5501 39 14.0001 39Z" fill="url(#paint1_linear_344_3579)" />
        <path d="M23.6601 40H4.34009C3.79009 40 3.34009 39.55 3.34009 39C3.34009 38.45 3.79009 38 4.34009 38H23.6601C24.2101 38 24.6601 38.45 24.6601 39C24.6601 39.55 24.2101 40 23.6601 40Z" fill="url(#paint2_linear_344_3579)" />
        <defs>
          <linearGradient id="paint0_linear_344_3579" x1="14" y1="20" x2="14" y2="33" gradientUnits="userSpaceOnUse">
            <stop stop-color="#230346" />
            <stop offset="1" stop-color="#5607AC" />
          </linearGradient>
          <linearGradient id="paint1_linear_344_3579" x1="14.0001" y1="0" x2="14.0001" y2="39" gradientUnits="userSpaceOnUse">
            <stop stop-color="#230346" />
            <stop offset="1" stop-color="#5607AC" />
          </linearGradient>
          <linearGradient id="paint2_linear_344_3579" x1="14.0001" y1="38" x2="14.0001" y2="40" gradientUnits="userSpaceOnUse">
            <stop stop-color="#230346" />
            <stop offset="1" stop-color="#5607AC" />
          </linearGradient>
        </defs>
      </svg>,
      steps: 'Step V',
      text: 'For audio, go to sound recording settings and record your audio',
      arrow: <svg xmlns="http://www.w3.org/2000/svg" width="363" height="116" viewBox="0 0 363 116" fill="none">
        <path d="M0.0602212 6C0.0602212 8.94552 2.44804 11.3333 5.39355 11.3333C8.33907 11.3333 10.7269 8.94552 10.7269 6C10.7269 3.05448 8.33907 0.666667 5.39355 0.666667C2.44804 0.666667 0.0602212 3.05448 0.0602212 6ZM356.394 116L362.167 106H350.62L356.394 116ZM5.39355 7H347.394V5H5.39355V7ZM355.394 15V107H357.394V15H355.394ZM347.394 7C351.812 7 355.394 10.5817 355.394 15H357.394C357.394 9.47715 352.916 5 347.394 5V7Z" fill="#230346" />
      </svg>
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="41" height="40" viewBox="0 0 41 40" fill="none">
        <path d="M26.2522 2.6087V2.5087H26.1522H14.8478H14.7478V2.6087V11.7391C14.7478 13.0117 15.7491 14.013 17.0217 14.013H23.9783C25.2509 14.013 26.2522 13.0117 26.2522 11.7391V2.6087ZM12.3391 2.6087V2.5087H12.2391H5.28261C4.00999 2.5087 3.0087 3.50999 3.0087 4.78261V35.2174C3.0087 36.49 4.00999 37.4913 5.28261 37.4913H35.7174C36.99 37.4913 37.9913 36.49 37.9913 35.2174V10.9565V10.9151L37.962 10.8858L29.6142 2.53798L29.5849 2.5087H29.5435H28.7609H28.6609V2.6087V11.7391C28.6609 14.2926 26.5317 16.4217 23.9783 16.4217H17.0217C14.4683 16.4217 12.3391 14.2926 12.3391 11.7391V2.6087ZM30.9581 0.425596L40.0744 9.5419C40.243 9.79657 40.4 10.1204 40.4 10.4348V35.2174C40.4 37.7709 38.2709 39.9 35.7174 39.9H5.28261C2.72914 39.9 0.6 37.7709 0.6 35.2174V4.78261C0.6 2.22914 2.72914 0.1 5.28261 0.1H30.0652C30.3796 0.1 30.7034 0.257047 30.9581 0.425596Z" fill="url(#paint0_linear_351_3782)" stroke="#B6A4E6" stroke-width="0.2" />
        <defs>
          <linearGradient id="paint0_linear_351_3782" x1="20.5" y1="0" x2="20.5" y2="40" gradientUnits="userSpaceOnUse">
            <stop stop-color="#230346" />
            <stop offset="1" stop-color="#5607AC" />
          </linearGradient>
        </defs>
      </svg>,
      steps: 'Step VI',
      text: 'Save it in the folder',
      arrow: <svg xmlns="http://www.w3.org/2000/svg" width="363" height="116" viewBox="0 0 363 116" fill="none">
        <path d="M0.0602212 6C0.0602212 8.94552 2.44804 11.3333 5.39355 11.3333C8.33907 11.3333 10.7269 8.94552 10.7269 6C10.7269 3.05448 8.33907 0.666667 5.39355 0.666667C2.44804 0.666667 0.0602212 3.05448 0.0602212 6ZM356.394 116L362.167 106H350.62L356.394 116ZM5.39355 7H347.394V5H5.39355V7ZM355.394 15V107H357.394V15H355.394ZM347.394 7C351.812 7 355.394 10.5817 355.394 15H357.394C357.394 9.47715 352.916 5 347.394 5V7Z" fill="#230346" />
      </svg>
    }
  ]},
    faq: [
      {
        ques: 'How can I remove the watermark from the video?',
        Ans: 'You can display its watermark by going to its settings and adding an image or logo to it.',
        mdcols: 'md:col-span-4',
      },
      {
        ques: 'Does this support IOS?',
        Ans: 'No, it only works on Chrome and Firefox.',
        mdcols: 'md:col-span-2',
      },
      {
        ques: 'Can I record the video in high quality?',
        Ans: 'You can capture all your videos in high quality.',
        mdcols: 'md:col-span-6',
      },
      {
        ques: 'How to Game record on Chrome?',
        Ans: 'It is the best extension that works on both Chrome and Firefox. You can install the extension on Chrome by visiting its official website and add to Chrome. Select an option to start recording.',
        mdcols: 'md:col-span-8',
      },
      {
        ques: 'Can I add text, images, and logos to my video?',
        Ans: 'Yes, you can edit your video and insert text, images, and logos into your video.',
        mdcols: 'md:col-span-4',
      }
    ],
    ourusers : [
      {
          heading: 'Stanton',
          para: 'It is very easy to use. Now I can record games with high quality.'
      },
      {
          heading: 'Zain Rhiel Madsen',
          para: 'I have been using this extension for 4 years and I am very happy with it.'
      },
      {
          heading: 'Dulce Botosh',
          para: 'It works flawlessly and is perfect for recording live game plays.'
      },
      {
          heading: 'Gustavo',
          para: 'The game screen recorder is free to download now as it is the best extension.'
      },
      {
        heading: 'Emery',
        para: 'It is very easy to install and use on your browser. I will give it a 5 star.'
    }
  ]
};

const footerText = 'Connecting thousands of people worldwide'


const GameRecorder = () => {
  return (
    <>
      <Hero type="" data={data.hero} />
      <TypeFree data={data.typeFree} />
      <WaysForRecording data={data.WaysForRecording} />
      <RecordingSteps data={data.RecordingStepsdata.data} heading={data.RecordingStepsdata.heading} />
      <OurUsers data={data.ourusers}/>
      <Blogs />
      <Faq faq={data.faq}/>
      <Footer FooterText={footerText} />
    </>
  );
};

export default GameRecorder;
