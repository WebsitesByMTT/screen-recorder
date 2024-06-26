import Blogs from "@/components/Blogs";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import OurUsers from "@/components/OurUsers";
import RecordingSteps from "@/components/RecordingSteps";
import TryFree from "@/components/TryFree";
import WaysForRecording from "@/components/WaysForRecording";
import React from "react";

const data = {
  hero: {
    title: "Record With Webcam For Free",
    desc: [
      "<span>This <a href=''>free Webcam recorder</a> allows you to capture your video by using a webcam in top-notch quality. You can even picture yourself with this extension.</span>",
      "So what are you waiting for?",
    ],
    button: "Try this Extension for free!",
    image: "/webcam-recorder-img.png",
  },
  WaysForRecording: {
    heading: "How to use a Free Webcam recorder",
    text:[
      {
        title: "Record Webcam videos on your screen",
        desc: "Record live webcam videos with a high quality by using this free webcam recorder.",
        image: "/record-webcam-videos.png",
      },
      {
        title: "You can also use your phone as a webcam on your Desktop",
        desc: "Record your videos by using your smartphone camera on your computer.",
        image: "/use-your-phone-as-webcam.png",
      },
      {
        title: "Capture your smartphone screen on your desktop",
        desc: "Record high-quality video of your smartphone screen by using this free webcam recorder.",
        image: "/capture-smartphone.png",
      },
    ],
  },
  RecordingStepsdata: [
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
      text: 'Start free webcam recording software',
      arrow: <svg xmlns="http://www.w3.org/2000/svg" width="363" height="116" viewBox="0 0 363 116" fill="none">
        <path d="M0.0602212 6C0.0602212 8.94552 2.44804 11.3333 5.39355 11.3333C8.33907 11.3333 10.7269 8.94552 10.7269 6C10.7269 3.05448 8.33907 0.666667 5.39355 0.666667C2.44804 0.666667 0.0602212 3.05448 0.0602212 6ZM356.394 116L362.167 106H350.62L356.394 116ZM5.39355 7H347.394V5H5.39355V7ZM355.394 15V107H357.394V15H355.394ZM347.394 7C351.812 7 355.394 10.5817 355.394 15H357.394C357.394 9.47715 352.916 5 347.394 5V7Z" fill="#230346" />
      </svg>
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="35" height="40" viewBox="0 0 35 40" fill="none">
        <path d="M1.77129 35.1967L1.77134 35.1967L1.77357 35.1897L4.25426 27.366L4.33122 27.1233L4.18017 26.9183C1.58687 23.3988 0.474019 19.1409 1.02904 14.6887C2.14375 7.27631 8.26387 1.35444 15.4688 0.615473L15.4688 0.615512L15.4751 0.614786C20.2957 0.0585645 24.9238 1.54091 28.442 4.6888C31.961 7.83734 34.0001 12.4721 34.0001 17.1013C34.0001 18.3888 33.8162 19.6783 33.4468 20.9712L33.4413 20.9907L33.4373 21.0105C33.3736 21.3293 33.1387 21.6488 32.8082 21.8507C32.4805 22.051 32.1216 22.0994 31.8234 21.9801L31.7808 21.963L31.7358 21.954C31.417 21.8903 31.0975 21.6554 30.8956 21.3249C30.6953 20.9972 30.6469 20.6383 30.7662 20.3401L30.7833 20.2975L30.7923 20.2525C30.9848 19.2897 31.1836 18.1058 31.1836 16.9105C31.1836 12.9462 29.4017 9.19046 26.6349 6.6213L26.6287 6.61546L26.6222 6.60985C23.6659 4.04775 19.708 2.65318 15.7293 3.24864C9.7902 4.04245 4.65002 8.98102 3.85488 15.124C3.26738 19.0506 4.43222 22.7703 6.74075 25.892C6.75802 25.9518 6.78271 26.0075 6.81352 26.0589C6.84271 26.1075 6.87598 26.1489 6.90327 26.1795V26.2213L6.98725 26.3473C7.26379 26.7621 7.27411 27.1662 7.11975 27.6292L7.11971 27.6292L7.11763 27.6358L4.44612 36.0319L4.23879 36.6835H4.92258H30.302H30.9957L30.7763 36.0254L28.8681 30.3008L28.6355 29.6028L28.0722 30.076C23.4504 33.9583 16.5922 34.8881 11.0369 32.4808L11.0304 32.478L11.0238 32.4753C10.3703 32.2139 10.0505 31.3889 10.3482 30.6446C10.6093 29.992 11.4324 29.6721 12.176 29.9678C16.9255 31.945 22.8344 30.9605 26.7887 27.6134C27.141 27.3698 27.5065 26.9416 27.7612 26.6174C27.8986 26.4425 28.0168 26.2808 28.1007 26.1628C28.1427 26.1036 28.1763 26.0552 28.1997 26.0211L28.2268 25.9812L28.2343 25.9702L28.2363 25.9671L28.237 25.9662L28.2372 25.9659L28.2373 25.9657C28.2373 25.9657 28.2373 25.9657 27.8213 25.6883L28.2373 25.9657C28.4634 25.6265 28.9738 25.4423 29.6082 25.6009C29.9334 25.6822 30.1275 25.7916 30.2585 25.9226C30.3895 26.0536 30.4989 26.2477 30.5802 26.5729L30.5833 26.5851L30.5869 26.5972L33.2585 35.375L33.2583 35.3751L33.2624 35.3876C33.5948 36.3846 33.4229 37.5406 32.7739 38.3519L32.769 38.358L32.7643 38.3642C32.3022 38.9804 31.3181 39.5 30.1112 39.5H4.92258C3.9409 39.5 2.93559 39.0057 2.25985 38.1611C1.61083 37.3498 1.43893 36.1938 1.77129 35.1967ZM17.5169 11.8766C20.4847 11.8766 22.7416 14.1334 22.7416 17.1013C22.7416 19.8892 20.4739 22.326 17.5169 22.326C14.549 22.326 12.2922 20.0691 12.2922 17.1013C12.2922 16.6424 12.443 16.2989 12.6705 16.0714C12.8981 15.8438 13.2416 15.6931 13.7004 15.6931C14.1593 15.6931 14.5028 15.8438 14.7303 16.0714C14.9579 16.2989 15.1086 16.6424 15.1086 17.1013C15.1086 17.7874 15.3395 18.398 15.7799 18.8383C16.2202 19.2786 16.8308 19.5095 17.5169 19.5095C18.203 19.5095 18.8136 19.2786 19.2539 18.8383C19.6942 18.398 19.9251 17.7874 19.9251 17.1013C19.9251 16.4152 19.6942 15.8046 19.2539 15.3643C18.8136 14.9239 18.203 14.6931 17.5169 14.6931C17.058 14.6931 16.7145 14.5423 16.487 14.3148C16.2594 14.0872 16.1086 13.7437 16.1086 13.2848C16.1086 12.826 16.2594 12.4825 16.487 12.2549C16.7145 12.0274 17.058 11.8766 17.5169 11.8766Z" fill="url(#paint0_linear_340_3566)" stroke="#B6A4E6" />
        <defs>
          <linearGradient id="paint0_linear_340_3566" x1="17.4449" y1="0" x2="17.4449" y2="40" gradientUnits="userSpaceOnUse">
            <stop stop-color="#230346" />
            <stop offset="1" stop-color="#5607AC" />
          </linearGradient>
        </defs>
      </svg>,
      steps: 'Step II',
      text: 'Then webcam device',
      arrow: <svg xmlns="http://www.w3.org/2000/svg" width="362" height="116" viewBox="0 0 362 116" fill="none">
        <path d="M361.727 6C361.727 8.94552 359.339 11.3333 356.394 11.3333C353.448 11.3333 351.06 8.94552 351.06 6C351.06 3.05448 353.448 0.666667 356.394 0.666667C359.339 0.666667 361.727 3.05448 361.727 6ZM6.39355 116L0.620056 106H12.1671L6.39355 116ZM356.394 7H15.3936V5H356.394V7ZM7.39355 15V107H5.39355V15H7.39355ZM15.3936 7C10.9753 7 7.39355 10.5817 7.39355 15H5.39355C5.39355 9.47715 9.8707 5 15.3936 5V7Z" fill="#230346" />
      </svg>
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="41" height="45" viewBox="0 0 41 45" fill="none">
        <path d="M30.5237 34.5874L30.5237 34.5874C30.9216 34.3626 31.3924 34.3051 31.8327 34.4275C32.273 34.55 32.6466 34.8423 32.8713 35.2401C33.0961 35.638 33.1536 36.1089 33.0311 36.5492C32.9087 36.9894 32.6165 37.363 32.2186 37.5877C32.2186 37.5877 32.2186 37.5878 32.2185 37.5878L21.3475 43.7255L21.3473 43.7256C21.0888 43.8717 20.7969 43.9485 20.5 43.9485C20.2031 43.9485 19.9112 43.8717 19.6527 43.7256L19.6525 43.7255L1.87489 33.6878C1.6095 33.5378 1.38868 33.3201 1.23498 33.0569C1.08127 32.7936 1.00018 32.4943 1 32.1895L1 12.2609L1 12.2607C0.999877 11.9556 1.08082 11.6559 1.23454 11.3923C1.38823 11.1288 1.60916 10.9109 1.87472 10.7607C1.87478 10.7607 1.87483 10.7607 1.87489 10.7606L19.6525 0.722958L19.6527 0.722864C19.9112 0.576773 20.2031 0.5 20.5 0.5C20.7969 0.5 21.0888 0.576773 21.3473 0.722864L21.3475 0.722958L39.1251 10.7606C39.1252 10.7607 39.1252 10.7607 39.1253 10.7607C39.3906 10.9107 39.6114 11.1284 39.765 11.3916C39.9187 11.6548 39.9998 11.9541 40 12.259V32.1853V32.1854C40 32.4116 39.9555 32.6356 39.869 32.8446C39.7824 33.0536 39.6556 33.2434 39.4957 33.4034C39.3357 33.5633 39.1459 33.6902 38.9369 33.7768C38.7279 33.8633 38.504 33.9079 38.2778 33.9079C38.0516 33.9079 37.8276 33.8633 37.6187 33.7768C37.4097 33.6902 37.2198 33.5633 37.0599 33.4034C36.9 33.2434 36.7731 33.0536 36.6866 32.8446C36.6 32.6356 36.5555 32.4116 36.5556 32.1854V32.1853V13.5587V13.2668L36.3014 13.1233L20.7458 4.34105L20.5 4.20227L20.2542 4.34105L4.69863 13.1233L4.44444 13.2668V13.5587V30.892V31.1839L4.69863 31.3274L20.2542 40.1096L20.5 40.2484L20.7459 40.1096L30.5237 34.5874ZM12.1111 22.2253C12.1111 21.7686 12.2926 21.3305 12.6155 21.0075C12.9385 20.6846 13.3766 20.5031 13.8333 20.5031C14.2901 20.5031 14.7281 20.6846 15.0511 21.0075C15.3741 21.3305 15.5556 21.7686 15.5556 22.2253C15.5556 23.2033 15.8455 24.1592 16.3888 24.9723C16.9321 25.7854 17.7044 26.4192 18.6078 26.7934C19.5113 27.1676 20.5055 27.2656 21.4646 27.0748C22.4237 26.884 23.3048 26.4131 23.9963 25.7216C24.6877 25.0301 25.1587 24.1491 25.3494 23.19C25.5402 22.2308 25.4423 21.2367 25.0681 20.3332C24.6938 19.4297 24.0601 18.6575 23.247 18.1142C22.4339 17.5709 21.4779 17.2809 20.5 17.2809C20.0432 17.2809 19.6052 17.0994 19.2822 16.7765C18.9592 16.4535 18.7778 16.0154 18.7778 15.5587C18.7778 15.1019 18.9592 14.6639 19.2822 14.3409C19.6052 14.0179 20.0432 13.8365 20.5 13.8365C22.1592 13.8365 23.7811 14.3285 25.1606 15.2502C26.5402 16.172 27.6154 17.4822 28.2503 19.0151C28.8853 20.5479 29.0514 22.2346 28.7277 23.8619C28.404 25.4892 27.605 26.984 26.4318 28.1572C25.2586 29.3304 23.7639 30.1294 22.1366 30.453C20.5093 30.7767 18.8226 30.6106 17.2897 29.9757C15.7568 29.3407 14.4467 28.2655 13.5249 26.886C12.6031 25.5064 12.1111 23.8845 12.1111 22.2253Z" fill="url(#paint0_linear_340_3573)" stroke="#B6A4E6" />
        <defs>
          <linearGradient id="paint0_linear_340_3573" x1="20.5" y1="0" x2="20.5" y2="44.4485" gradientUnits="userSpaceOnUse">
            <stop stop-color="#230346" />
            <stop offset="1" stop-color="#5607AC" />
          </linearGradient>
        </defs>
      </svg>,
      steps: 'Step III',
      text: 'Go to format settings',
      arrow: <svg xmlns="http://www.w3.org/2000/svg" width="363" height="116" viewBox="0 0 363 116" fill="none">
        <path d="M0.0602212 6C0.0602212 8.94552 2.44804 11.3333 5.39355 11.3333C8.33907 11.3333 10.7269 8.94552 10.7269 6C10.7269 3.05448 8.33907 0.666667 5.39355 0.666667C2.44804 0.666667 0.0602212 3.05448 0.0602212 6ZM356.394 116L362.167 106H350.62L356.394 116ZM5.39355 7H347.394V5H5.39355V7ZM355.394 15V107H357.394V15H355.394ZM347.394 7C351.812 7 355.394 10.5817 355.394 15H357.394C357.394 9.47715 352.916 5 347.394 5V7Z" fill="#230346" />
      </svg>
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="41" height="40" viewBox="0 0 41 40" fill="none">
        <path d="M20.4997 37.5C24.0168 37.5062 27.4532 36.447 30.3566 34.4621C30.4832 34.3757 30.6255 34.315 30.7755 34.2836C30.9255 34.2522 31.0802 34.2507 31.2308 34.2791C31.3814 34.3074 31.5249 34.3652 31.6532 34.4491C31.7815 34.5329 31.8919 34.6412 31.9784 34.7678C32.0648 34.8943 32.1254 35.0366 32.1568 35.1866C32.1882 35.3366 32.1898 35.4913 32.1614 35.6419C32.133 35.7925 32.0752 35.936 31.9914 36.0643C31.9075 36.1926 31.7992 36.3031 31.6727 36.3895L31.6726 36.3895C28.3815 38.639 24.4866 39.8396 20.5003 39.8333H20.5C9.54671 39.8333 0.666667 30.9533 0.666667 20C0.666667 9.04671 9.54671 0.166667 20.5 0.166667C31.4533 0.166667 40.3333 9.04671 40.3333 20C40.3333 22.5936 39.8344 25.1198 38.8771 27.4723L38.876 27.4753L37.8333 20H38C38 19.9999 38 19.9998 38 19.9998C37.9999 10.3345 30.1653 2.5 20.5 2.5C10.8346 2.5 3 10.3346 3 20C3 29.6653 10.8345 37.4998 20.4997 37.5ZM20.4997 37.5L20.5 37.3333M20.4997 37.5C20.4998 37.5 20.4999 37.5 20.5 37.5V37.3333M20.5 37.3333C23.9834 37.3394 27.387 36.2904 30.2627 34.3244M20.5 37.3333L30.2627 34.3244M30.2627 34.3244C30.4073 34.2257 30.57 34.1564 30.7414 34.1205C30.9128 34.0846 31.0896 34.0828 31.2617 34.1153C31.4338 34.1477 31.5978 34.2137 31.7444 34.3096C31.891 34.4054 32.0172 34.5291 32.116 34.6738C32.2148 34.8184 32.2841 34.9811 32.3199 35.1525C32.3558 35.3239 32.3576 35.5007 32.3252 35.6728C32.2927 35.8449 32.2267 36.0089 32.1309 36.1555C32.0351 36.3021 31.9113 36.4284 31.7667 36.5271C28.4478 38.7956 24.52 40.0063 20.5 40C9.45467 40 0.5 31.0453 0.5 20C0.5 8.95467 9.45467 0 20.5 0C31.5453 0 40.5 8.95467 40.5 20C40.5 22.6151 39.9969 25.1627 39.0316 27.5351L30.2627 34.3244Z" fill="url(#paint0_linear_344_3583)" stroke="#B6A4E6" stroke-width="0.333333" />
        <path d="M20.5001 14.667C24.0556 14.667 25.8334 16.4448 25.8334 20.0003C25.8334 23.5559 24.0556 25.3337 20.5001 25.3337C16.9445 25.3337 15.1667 23.5559 15.1667 20.0003C15.1667 16.4448 16.9445 14.667 20.5001 14.667Z" fill="url(#paint1_linear_344_3583)" />
        <defs>
          <linearGradient id="paint0_linear_344_3583" x1="20.5" y1="0" x2="20.5" y2="40" gradientUnits="userSpaceOnUse">
            <stop stop-color="#230346" />
            <stop offset="1" stop-color="#5607AC" />
          </linearGradient>
          <linearGradient id="paint1_linear_344_3583" x1="20.5001" y1="14.667" x2="20.5001" y2="25.3337" gradientUnits="userSpaceOnUse">
            <stop stop-color="#230346" />
            <stop offset="1" stop-color="#5607AC" />
          </linearGradient>
        </defs>
      </svg>,
      steps: 'Step IV',
      text: 'Start webcam recording or online video recording',
      arrow: <svg xmlns="http://www.w3.org/2000/svg" width="362" height="116" viewBox="0 0 362 116" fill="none">
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
        <path d="M26.2522 2.6087V2.5087H26.1522H14.8478H14.7478V2.6087V11.7391C14.7478 13.0117 15.7491 14.013 17.0217 14.013H23.9783C25.2509 14.013 26.2522 13.0117 26.2522 11.7391V2.6087ZM12.3391 2.6087V2.5087H12.2391H5.28261C4.00999 2.5087 3.0087 3.50999 3.0087 4.78261V35.2174C3.0087 36.49 4.00999 37.4913 5.28261 37.4913H35.7174C36.99 37.4913 37.9913 36.49 37.9913 35.2174V10.9565V10.9151L37.962 10.8858L29.6142 2.53798L29.5849 2.5087H29.5435H28.7609H28.6609V2.6087V11.7391C28.6609 14.2926 26.5317 16.4217 23.9783 16.4217H17.0217C14.4683 16.4217 12.3391 14.2926 12.3391 11.7391V2.6087ZM30.9581 0.425596L40.0744 9.5419C40.243 9.79657 40.4 10.1204 40.4 10.4348V35.2174C40.4 37.7709 38.2709 39.9 35.7174 39.9H5.28261C2.72914 39.9 0.6 37.7709 0.6 35.2174V4.78261C0.6 2.22914 2.72914 0.1 5.28261 0.1H30.0652C30.3796 0.1 30.7034 0.257047 30.9581 0.425596Z" fill="url(#paint0_linear_345_3587)" stroke="#B6A4E6" stroke-width="0.2" />
        <defs>
          <linearGradient id="paint0_linear_345_3587" x1="20.5" y1="0" x2="20.5" y2="40" gradientUnits="userSpaceOnUse">
            <stop stop-color="#230346" />
            <stop offset="1" stop-color="#5607AC" />
          </linearGradient>
        </defs>
      </svg>,
      steps: 'Step VI',
      text: 'Save or share it with your friends',
      arrow: <svg xmlns="http://www.w3.org/2000/svg" width="363" height="116" viewBox="0 0 363 116" fill="none">
        <path d="M0.0602212 6C0.0602212 8.94552 2.44804 11.3333 5.39355 11.3333C8.33907 11.3333 10.7269 8.94552 10.7269 6C10.7269 3.05448 8.33907 0.666667 5.39355 0.666667C2.44804 0.666667 0.0602212 3.05448 0.0602212 6ZM356.394 116L362.167 106H350.62L356.394 116ZM5.39355 7H347.394V5H5.39355V7ZM355.394 15V107H357.394V15H355.394ZM347.394 7C351.812 7 355.394 10.5817 355.394 15H357.394C357.394 9.47715 352.916 5 347.394 5V7Z" fill="#230346" />
      </svg>
    }
  ],
  footerText: 'More than thousands of people rely on our free webcam recorder',
  typeFree: {
    heading:
      "Try this free webcam recorder and capture videos by using a webcam",
    text: "It is a top-notch software from which you can capture videos using many devices, including USB webcams and camcorders. You can even record a webcam with your audio and save or upload it on your personal channel. You can set automatic stopping points and save them in various formats like MP4, AVI, and WAV. Moreover, it ensures fast recording speed, high-quality video, and efficient compression.",
  },
  ourusers : [
    {
        heading: 'Giana',
        para: 'You can customize your video with this free webcam recorder.'
    },
    {
        heading: 'Ann',
        para: 'Now you can save it in any format. Picture yourself with a webcam recorder.'
    },
    {
        heading: 'Franci',
        para: 'It is a great software and easy to use.'
    },
    {
        heading: 'Allison Philips',
        para: 'Capture HD-quality video with this free webcam recorder.'
    },
    {
      heading: 'Ekstrom Bothman',
      para: 'The best part is it does not slow your computer speed while recording.'
  }
]
};

export const metadata = {
  title: "Free Webcam recorder allows you to record external video.",
  description: "Free Webcam recorder extension can record any external video in super high quality. Download the extension now and record a video in super high quality. ",
  icons: {
    icon: '/favicon.png',
  },
  keywords: "Free and Secure screen recorder, best recording software, online video recorder, screen record with audio, free screen recording software, screen recording on Chrome, game recording software, Real-time Draw Tool, Real-Time Blur Display, Download 4K UHD Video Quality, Webcam Recorder, free screen recorder, free screen recorder Chrome, how to screen record on Chrome, screen recorder free download, Chrome screen recorder with audio, free Game recording software, best game recording software, how to Game record on Chrome, Game screen recorder free download, record gameplay with audio, record gameplay, Free Webcam Recorder, webcam recording software, free webcam recording software, online video recorder, Capture HD Quality Video",
  openGraph: {
    title: "Free Webcam recorder allows you to record external video.",
    description: "Free Webcam recorder extension can record any external video in super high quality. Download the extension now and record a video in super high quality.",
    type: 'website',
    siteName: "Screen Recorder",
    images: "/favicon.png",
  },
  alternates: {
    canonical: "/",
  },
};

const WebcamRecorder = () => {
  return (
    <>
      <Hero type="" data={data.hero} />
      <TryFree data={data.typeFree} />
      <WaysForRecording data={data.WaysForRecording} />
      <RecordingSteps data={data.RecordingStepsdata} />
      <OurUsers data={data.ourusers}/>
      <Blogs />
      <Footer FooterText={data.footerText} />
    </>
  );
};

export default WebcamRecorder;
