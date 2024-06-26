import Counts from "@/components/Counts";
import HomeVideo from "@/components/HomeVideo";
import FeatureOfRecorder from "@/components/FeatureOfRecorder";
import BestScreen from "@/components/BestScreen";
import GraphicsFeature from "@/components/GraphicsFeature";
import RecordingSteps from "@/components/RecordingSteps";
import Blogs from "@/components/Blogs";
import Faq from "@/components/Faq";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";


const data = [
  {
    id: 1,
    title: `<span>Record Your Screen  <br className="hidden lg:block" /> Like A Pro</span>`,
    desc: "Capture everything that you want to record from your screen",
  },
  {
    id: 2,
    title: `<span>Record Games In <br className="hidden lg:block" /> High Quality </span>`,
    desc: "Record while playing the game in high quality and upload it on your channel.",
  },
  {
    id: 3,
    title: `<span>Record Webcam <br className="hidden lg:block" />  Video </span>`,
    desc: "Record any webcam video professionally from any video device including USB webcam cameras, video capture cards, and many more.",
  },
  {
    id: 4,
    title: `<span>Blur Your Screen</span>`,
    desc: "Hide your sensitive details on your browser before or during the screen recording.",
  }
];

const RecordingStepsdata = {
  heading: 'How to screen record',
  data: [
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="41" height="40" viewBox="0 0 41 40" fill="none">
        <path d="M17.4845 11.6358C16.6663 11.1813 15.5754 11.1813 14.7572 11.6358C13.939 12.0904 13.3936 12.9995 13.3936 13.9995V25.9995C13.3936 26.9995 13.939 27.9086 14.7572 28.3631C15.2117 28.6358 15.6663 28.7267 16.1208 28.7267C16.5754 28.7267 17.0299 28.6358 17.4845 28.3631L27.939 22.3631C28.7572 21.9086 29.3026 20.9995 29.3026 19.9995C29.3026 18.9995 28.7572 18.0904 27.939 17.6358L17.4845 11.6358ZM26.939 20.8177L16.4845 26.8177C16.0299 27.0904 15.6663 26.9086 15.5754 26.8177C15.3936 26.7267 15.1208 26.5449 15.1208 25.9995V13.9995C15.1208 13.5449 15.3936 13.2722 15.5754 13.1813C15.6663 13.0904 15.8481 13.0904 16.0299 13.0904C16.1208 13.0904 16.3026 13.0904 16.4845 13.1813L26.939 19.1813C27.3936 19.454 27.3936 19.8177 27.3936 19.9995C27.3936 20.1813 27.3936 20.5449 26.939 20.8177Z" fill="url(#paint0_linear_242_1170)" />
        <path d="M36.4845 8.18182C36.2117 7.81818 35.5754 7.72727 35.2117 8C34.8481 8.27273 34.7572 8.90909 35.0299 9.27273C37.3936 12.3636 38.5754 16.0909 38.5754 20C38.5754 30 30.3936 38.1818 20.3936 38.1818C10.3936 38.1818 2.21174 30 2.21174 20C2.21174 10 10.3936 1.81818 20.3936 1.81818C24.3026 1.81818 28.0299 3 31.1208 5.36364C31.4845 5.63636 32.1208 5.54545 32.3936 5.18182C32.6663 4.81818 32.5754 4.18182 32.2117 3.90909C28.7572 1.36364 24.6663 0 20.3936 0C9.39355 0 0.393555 9 0.393555 20C0.393555 31 9.39355 40 20.3936 40C31.3936 40 40.3936 31 40.3936 20C40.3936 15.7273 39.0299 11.6364 36.4845 8.18182Z" fill="url(#paint1_linear_242_1170)" />
        <defs>
          <linearGradient id="paint0_linear_242_1170" x1="21.3481" y1="11.2949" x2="21.3481" y2="28.7267" gradientUnits="userSpaceOnUse">
            <stop stop-color="#230346" />
            <stop offset="1" stop-color="#5607AC" />
          </linearGradient>
          <linearGradient id="paint1_linear_242_1170" x1="20.3936" y1="0" x2="20.3936" y2="40" gradientUnits="userSpaceOnUse">
            <stop stop-color="#230346" />
            <stop offset="1" stop-color="#5607AC" />
          </linearGradient>
        </defs>
      </svg>,
      steps: 'Step I',
      text: 'Go to get started and select the rectangle area button.',
      arrow: <svg xmlns="http://www.w3.org/2000/svg" width="363" height="116" viewBox="0 0 363 116" fill="none">
        <path d="M0.0602212 6C0.0602212 8.94552 2.44804 11.3333 5.39355 11.3333C8.33907 11.3333 10.7269 8.94552 10.7269 6C10.7269 3.05448 8.33907 0.666667 5.39355 0.666667C2.44804 0.666667 0.0602212 3.05448 0.0602212 6ZM356.394 116L362.167 106H350.62L356.394 116ZM5.39355 7H347.394V5H5.39355V7ZM355.394 15V107H357.394V15H355.394ZM347.394 7C351.812 7 355.394 10.5817 355.394 15H357.394C357.394 9.47715 352.916 5 347.394 5V7Z" fill="#230346" />
      </svg>
    },
    {
      icon:<svg xmlns="http://www.w3.org/2000/svg" width="41" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="lucide text-[#5607AC] lucide-disc"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="2"/></svg>
      ,
      steps: 'Step II',
      text: 'Then select a recording mode.',
      arrow: <svg xmlns="http://www.w3.org/2000/svg" width="362" height="116" viewBox="0 0 362 116" fill="none">
        <path d="M361.727 6C361.727 8.94552 359.339 11.3333 356.394 11.3333C353.448 11.3333 351.06 8.94552 351.06 6C351.06 3.05448 353.448 0.666667 356.394 0.666667C359.339 0.666667 361.727 3.05448 361.727 6ZM6.39355 116L0.620056 106H12.1671L6.39355 116ZM356.394 7H15.3936V5H356.394V7ZM7.39355 15V107H5.39355V15H7.39355ZM15.3936 7C10.9753 7 7.39355 10.5817 7.39355 15H5.39355C5.39355 9.47715 9.8707 5 15.3936 5V7Z" fill="#230346" />
      </svg>
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="57" height="40" viewBox="0 0 57 40" fill="none">
        <path d="M43.4986 10.8366C43.5355 10.808 43.5652 10.78 43.587 10.7584C43.6024 10.7432 43.6198 10.725 43.6296 10.7147C43.632 10.7122 43.6339 10.7102 43.6353 10.7088C43.6378 10.7062 43.6399 10.704 43.6417 10.7022L53.6208 4.71475L53.6212 4.7145C54.0884 4.43356 54.6635 4.42796 55.1324 4.69464L55.134 4.69557C55.6036 4.96028 55.8936 5.45911 55.8936 6V34C55.8936 34.538 55.6042 35.0362 55.1344 35.3034C54.9042 35.4342 54.6495 35.5 54.3936 35.5C54.1279 35.5 53.863 35.4295 53.6284 35.289L53.627 35.2882L46.649 31.1402L45.8936 30.6911V31.57V34C45.8936 37.0319 43.4254 39.5 40.3936 39.5H6.39355C3.3617 39.5 0.893555 37.0319 0.893555 34V6C0.893555 2.96814 3.3617 0.5 6.39355 0.5H40.3936C41.2231 0.5 41.8936 1.17182 41.8936 2C41.8936 2.82818 41.2231 3.5 40.3936 3.5H6.39355C5.01541 3.5 3.89355 4.62186 3.89355 6V34C3.89355 35.3805 5.01574 36.5 6.39355 36.5H40.3936C41.7737 36.5 42.8936 35.3801 42.8936 34V12.0251M43.4986 10.8366C43.4983 10.8369 43.498 10.8371 43.4976 10.8374L43.1916 10.442L43.4995 10.8359C43.4992 10.8361 43.4989 10.8364 43.4986 10.8366ZM43.4986 10.8366C43.3925 10.9196 43.3254 10.9772 43.2707 11.0416L43.2692 11.0434C43.217 11.1043 43.1719 11.1748 43.1151 11.2755C43.0576 11.3776 43.0211 11.4514 42.9967 11.5258L42.9959 11.5281C42.9685 11.6102 42.9531 11.6991 42.9382 11.8276L42.9377 11.832C42.9315 11.8816 42.9216 11.924 42.9134 11.9552C42.9064 11.9818 42.8965 12.0148 42.8942 12.0229C42.894 12.0237 42.8938 12.0244 42.8936 12.0251M42.8936 12.0251V12C42.8936 12.0222 42.89 12.0385 42.89 12.0385C42.89 12.0385 42.8909 12.0345 42.8936 12.0251ZM52.1382 30.9139L52.8936 31.3626V30.484V9.532V8.6489L52.1363 9.10325L46.1363 12.7033L45.8936 12.8489V13.132V26.92V27.2046L46.1382 27.3499L52.1382 30.9139Z" fill="url(#paint0_linear_242_1184)" stroke="#B6A4E6" />
        <path d="M8.39355 12C8.39355 14.206 10.1876 16 12.3936 16C14.5996 16 16.3936 14.206 16.3936 12C16.3936 9.794 14.5996 8 12.3936 8C10.1876 8 8.39355 9.794 8.39355 12Z" fill="url(#paint1_linear_242_1184)" />
        <defs>
          <linearGradient id="paint0_linear_242_1184" x1="28.3936" y1="0" x2="28.3936" y2="40" gradientUnits="userSpaceOnUse">
            <stop stop-color="#230346" />
            <stop offset="1" stop-color="#5607AC" />
          </linearGradient>
          <linearGradient id="paint1_linear_242_1184" x1="12.3936" y1="8" x2="12.3936" y2="16" gradientUnits="userSpaceOnUse">
            <stop stop-color="#230346" />
            <stop offset="1" stop-color="#5607AC" />
          </linearGradient>
        </defs>
      </svg>,
      steps: 'Step III',
      text: 'It will start recording your screen.',
      arrow: <svg xmlns="http://www.w3.org/2000/svg" width="363" height="116" viewBox="0 0 363 116" fill="none">
        <path d="M0.0602212 6C0.0602212 8.94552 2.44804 11.3333 5.39355 11.3333C8.33907 11.3333 10.7269 8.94552 10.7269 6C10.7269 3.05448 8.33907 0.666667 5.39355 0.666667C2.44804 0.666667 0.0602212 3.05448 0.0602212 6ZM356.394 116L362.167 106H350.62L356.394 116ZM5.39355 7H347.394V5H5.39355V7ZM355.394 15V107H357.394V15H355.394ZM347.394 7C351.812 7 355.394 10.5817 355.394 15H357.394C357.394 9.47715 352.916 5 347.394 5V7Z" fill="#230346" />
      </svg>
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="50" height="40" viewBox="0 0 50 40" fill="none">
        <path d="M3.28736 37.7571L3.28754 37.7573C4.81029 39.1187 6.71035 39.8333 8.66582 39.8333C9.52081 39.8333 10.3975 39.6932 11.2536 39.4054L11.2544 39.4052L17.9031 37.208C22.4746 35.6938 27.514 35.6938 32.0926 37.208C32.0926 37.208 32.0926 37.208 32.0926 37.208L38.7414 39.4052L38.7415 39.4052C41.5334 40.3312 44.5128 39.7143 46.7084 37.7571L46.7086 37.757C48.9112 35.7999 49.8646 32.9118 49.2613 30.0288L49.2613 30.0286L46.3627 16.0869L46.3625 16.0857C45.8262 13.4112 44.3652 10.9832 42.2552 9.25416C40.1378 7.52496 37.4697 6.57211 34.7385 6.57211H30.2582C29.563 6.57211 28.9935 7.14161 28.9935 7.83682C28.9935 8.53204 29.563 9.10154 30.2582 9.10154H34.7385C39.1692 9.10154 43.0091 12.2492 43.8837 16.5922C43.8837 16.5924 43.8838 16.5925 43.8838 16.5926L46.7893 30.5475L46.6261 30.5815L46.7893 30.5475C47.2022 32.531 46.5453 34.5238 45.0337 35.8731L45.0334 35.8734C43.5146 37.2227 41.4629 37.6433 39.5387 37.0093L39.5386 37.0092L32.8898 34.812L32.8896 34.812C30.3373 33.9659 27.6855 33.5394 24.9979 33.5394C22.3103 33.5394 19.6514 33.966 17.1063 34.8119L17.106 34.812L10.4577 37.0091C8.53286 37.6507 6.47367 37.2225 4.96205 35.8731C3.45047 34.5238 2.7936 32.531 3.20653 30.5475L3.20653 30.5475L6.10874 16.6155V16.6089L6.11202 16.5926C6.98649 12.2494 10.8265 9.10154 15.2573 9.10154H21.2978C23.8896 9.10154 25.9978 6.9933 25.9978 4.4015V1.43138C25.9978 0.73617 25.4283 0.166667 24.7331 0.166667C24.0379 0.166667 23.4684 0.73617 23.4684 1.43138V4.4015C23.4684 5.59572 22.492 6.57211 21.2978 6.57211H15.2573C12.526 6.57211 9.85086 7.52505 7.74085 9.25398C5.63067 10.9831 4.16965 13.4111 3.63331 16.0857L3.63308 16.0869L0.734556 30.0284L3.28736 37.7571ZM3.28736 37.7571C1.0918 35.8001 0.138286 32.9118 0.734521 30.0286L3.28736 37.7571Z" fill="url(#paint0_linear_242_1192)" stroke="#B6A4E6" stroke-width="0.333333" />
        <path d="M16.5577 19.6746V19.8413H16.7244H19.2293C19.9245 19.8413 20.494 20.4108 20.494 21.106C20.494 21.8012 19.9245 22.3707 19.2293 22.3707H16.7244H16.5577V22.5373V25.0423C16.5577 25.7375 15.9882 26.307 15.293 26.307C14.5978 26.307 14.0283 25.7375 14.0283 25.0423V22.5373V22.3707H13.8616H11.3567C10.6615 22.3707 10.092 21.8012 10.092 21.106C10.092 20.4108 10.6615 19.8413 11.3567 19.8413H13.8616H14.0283V19.6746V17.1697C14.0283 16.4745 14.5978 15.9049 15.293 15.9049C15.9882 15.9049 16.5577 16.4745 16.5577 17.1697V19.6746Z" fill="url(#paint1_linear_242_1192)" stroke="#B6A4E6" stroke-width="0.333333" />
        <path d="M33.8369 18.0933C33.5997 17.8561 33.4665 17.5344 33.4665 17.199C33.4665 16.8635 33.5997 16.5419 33.8369 16.3047C34.0741 16.0675 34.3958 15.9342 34.7312 15.9342C35.0666 15.9342 35.3883 16.0675 35.6255 16.3047C35.8627 16.5419 35.9959 16.8635 35.9959 17.199C35.9959 17.5344 35.8627 17.8561 35.6255 18.0933C35.3883 18.3304 35.0666 18.4637 34.7312 18.4637C34.3958 18.4637 34.0741 18.3304 33.8369 18.0933Z" fill="url(#paint2_linear_242_1192)" stroke="#B6A4E6" stroke-width="0.333333" />
        <path d="M33.8008 25.937C33.5636 25.6998 33.4303 25.3781 33.4303 25.0427C33.4303 24.7073 33.5636 24.3856 33.8008 24.1484C34.0379 23.9112 34.3596 23.778 34.6951 23.778C35.0305 23.778 35.3522 23.9112 35.5893 24.1484C35.8265 24.3856 35.9598 24.7073 35.9598 25.0427C35.9598 25.3781 35.8265 25.6998 35.5893 25.937C35.3522 26.1742 35.0305 26.3074 34.6951 26.3074C34.3596 26.3074 34.0379 26.1742 33.8008 25.937Z" fill="url(#paint3_linear_242_1192)" stroke="#B6A4E6" stroke-width="0.333333" />
        <path d="M37.7373 22.0288C37.5001 21.7916 37.3669 21.4699 37.3669 21.1345C37.3669 20.7991 37.5001 20.4774 37.7373 20.2402C37.9745 20.003 38.2962 19.8698 38.6316 19.8698C38.967 19.8698 39.2887 20.003 39.5259 20.2402C39.763 20.4774 39.8963 20.7991 39.8963 21.1345C39.8963 21.4699 39.763 21.7916 39.5259 22.0288C39.2887 22.266 38.967 22.3992 38.6316 22.3992C38.2962 22.3992 37.9745 22.266 37.7373 22.0288Z" fill="url(#paint4_linear_242_1192)" stroke="#B6A4E6" stroke-width="0.333333" />
        <path d="M29.9004 22.0015C29.6632 21.7643 29.5299 21.4426 29.5299 21.1072C29.5299 20.7717 29.6632 20.4501 29.9004 20.2129C30.1376 19.9757 30.4592 19.8424 30.7947 19.8424C31.1301 19.8424 31.4518 19.9757 31.689 20.2129C31.9261 20.4501 32.0594 20.7717 32.0594 21.1072C32.0594 21.4426 31.9261 21.7643 31.689 22.0015C31.4518 22.2386 31.1301 22.3719 30.7947 22.3719C30.4592 22.3719 30.1376 22.2386 29.9004 22.0015Z" fill="url(#paint5_linear_242_1192)" stroke="#B6A4E6" stroke-width="0.333333" />
        <defs>
          <linearGradient id="paint0_linear_242_1192" x1="24.9996" y1="0" x2="24.9996" y2="40" gradientUnits="userSpaceOnUse">
            <stop stop-color="#230346" />
            <stop offset="1" stop-color="#5607AC" />
          </linearGradient>
          <linearGradient id="paint1_linear_242_1192" x1="15.293" y1="15.7383" x2="15.293" y2="26.4737" gradientUnits="userSpaceOnUse">
            <stop stop-color="#230346" />
            <stop offset="1" stop-color="#5607AC" />
          </linearGradient>
          <linearGradient id="paint2_linear_242_1192" x1="34.7312" y1="15.7676" x2="34.7312" y2="18.6303" gradientUnits="userSpaceOnUse">
            <stop stop-color="#230346" />
            <stop offset="1" stop-color="#5607AC" />
          </linearGradient>
          <linearGradient id="paint3_linear_242_1192" x1="34.6951" y1="23.6113" x2="34.6951" y2="26.4741" gradientUnits="userSpaceOnUse">
            <stop stop-color="#230346" />
            <stop offset="1" stop-color="#5607AC" />
          </linearGradient>
          <linearGradient id="paint4_linear_242_1192" x1="38.6316" y1="19.7031" x2="38.6316" y2="22.5659" gradientUnits="userSpaceOnUse">
            <stop stop-color="#230346" />
            <stop offset="1" stop-color="#5607AC" />
          </linearGradient>
          <linearGradient id="paint5_linear_242_1192" x1="30.7947" y1="19.6758" x2="30.7947" y2="22.5385" gradientUnits="userSpaceOnUse">
            <stop stop-color="#230346" />
            <stop offset="1" stop-color="#5607AC" />
          </linearGradient>
        </defs>
      </svg>,
      steps: 'Step IV',
      text: 'For recording a game, you can go to the game option and record games.',
      arrow: <svg xmlns="http://www.w3.org/2000/svg" width="362" height="116" viewBox="0 0 362 116" fill="none">
        <path d="M361.727 6C361.727 8.94552 359.339 11.3333 356.394 11.3333C353.448 11.3333 351.06 8.94552 351.06 6C351.06 3.05448 353.448 0.666667 356.394 0.666667C359.339 0.666667 361.727 3.05448 361.727 6ZM6.39355 116L0.620056 106H12.1671L6.39355 116ZM356.394 7H15.3936V5H356.394V7ZM7.39355 15V107H5.39355V15H7.39355ZM15.3936 7C10.9753 7 7.39355 10.5817 7.39355 15H5.39355C5.39355 9.47715 9.8707 5 15.3936 5V7Z" fill="#230346" />
      </svg>
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="41" height="40" viewBox="0 0 41 40" fill="none">
        <path d="M39.1898 21.2961C39.5336 20.9524 39.7268 20.4862 39.7269 20L39.1898 21.2961ZM39.1898 21.2961C38.846 21.6398 38.3797 21.833 37.8936 21.833M39.1898 21.2961L37.8936 21.833M37.8936 21.833C37.4074 21.833 36.9411 21.6398 36.5973 21.2961M37.8936 21.833L36.5973 21.2961M36.5973 21.2961C36.2535 20.9524 36.0603 20.4862 36.0602 20L36.5973 21.2961ZM21.6896 36.2037C21.3459 35.86 20.8797 35.6668 20.3936 35.6667L21.6896 36.2037ZM21.6896 36.2037C22.0334 36.5475 22.2265 37.0138 22.2265 37.5M21.6896 36.2037L22.2265 37.5M22.2265 37.5C22.2265 37.9862 22.0334 38.4525 21.6896 38.7963M22.2265 37.5L21.6896 38.7963M21.6896 38.7963C21.3459 39.14 20.8797 39.3332 20.3936 39.3333L21.6896 38.7963ZM34.5504 26.7192L34.5505 26.7191C34.654 26.5017 34.7993 26.3068 34.9782 26.1456C35.157 25.9843 35.3659 25.8599 35.5928 25.7794C35.8198 25.6988 36.0604 25.6638 36.3009 25.6762C36.5413 25.6887 36.777 25.7484 36.9944 25.8519C37.2118 25.9554 37.4067 26.1008 37.568 26.2796C37.7292 26.4585 37.8537 26.6673 37.9342 26.8943L38.5625 26.6714L37.9342 26.8943C38.0147 27.1212 38.0498 27.3618 38.0373 27.6023C38.0249 27.8428 37.9652 28.0784 37.8617 28.2958C35.9476 32.3137 32.7105 35.5515 28.693 37.4664C28.2556 37.6675 27.7566 37.6885 27.3038 37.5248C26.8498 37.3607 26.4789 37.0241 26.2715 36.5882C26.0642 36.1522 26.0371 35.6521 26.1963 35.1963C26.3551 34.7416 26.6864 34.3676 27.1187 34.1552C30.3751 32.6018 32.9989 29.9766 34.5504 26.7192ZM36.0602 19.9999C36.0602 16.9014 35.1414 13.8724 33.4199 11.2961C31.6984 8.7197 29.2516 6.71167 26.3889 5.5259C23.5262 4.34012 20.3762 4.02987 17.3371 4.63437C14.2981 5.23887 11.5066 6.73098 9.31555 8.922C7.12453 11.113 5.63243 13.9046 5.02793 16.9436C4.42343 19.9826 4.73368 23.1327 5.91945 25.9954C7.10522 28.8581 9.11326 31.3049 11.6896 33.0264C14.266 34.7478 17.2949 35.6666 20.3935 35.6667L36.0602 19.9999ZM20.3935 39.3333C16.5697 39.3333 12.8319 38.1994 9.65254 36.0751C6.47319 33.9507 3.99519 30.9313 2.53189 27.3985C1.0686 23.8658 0.685734 19.9786 1.43171 16.2283C2.1777 12.478 4.01902 9.03309 6.72283 6.32928C9.42665 3.62546 12.8715 1.78414 16.6218 1.03816C20.3721 0.292179 24.2594 0.675044 27.7921 2.13834C31.3248 3.60163 34.3443 6.07963 36.4686 9.25898C38.593 12.4383 39.7269 16.1762 39.7269 19.9999L20.3935 39.3333Z" fill="url(#paint0_linear_242_1204)" stroke="#B6A4E6" stroke-width="1.33333" />
        <defs>
          <linearGradient id="paint0_linear_242_1204" x1="20.3936" y1="0" x2="20.3936" y2="40" gradientUnits="userSpaceOnUse">
            <stop stop-color="#230346" />
            <stop offset="1" stop-color="#5607AC" />
          </linearGradient>
        </defs>
      </svg>,
      steps: 'Step V',
      text: 'You can also record external video by selecting video files and devices.',
      arrow: <svg xmlns="http://www.w3.org/2000/svg" width="363" height="116" viewBox="0 0 363 116" fill="none">
        <path d="M0.0602212 6C0.0602212 8.94552 2.44804 11.3333 5.39355 11.3333C8.33907 11.3333 10.7269 8.94552 10.7269 6C10.7269 3.05448 8.33907 0.666667 5.39355 0.666667C2.44804 0.666667 0.0602212 3.05448 0.0602212 6ZM356.394 116L362.167 106H350.62L356.394 116ZM5.39355 7H347.394V5H5.39355V7ZM355.394 15V107H357.394V15H355.394ZM347.394 7C351.812 7 355.394 10.5817 355.394 15H357.394C357.394 9.47715 352.916 5 347.394 5V7Z" fill="#230346" />
      </svg>
    }
  ]
}


const faq = [
  {
    ques: 'What is Recordbro and How to use it?',
    Ans: 'It is a software from where you can record a screen, gameplay, and webcam. You can also blur that particular area that you don’t want to highlight. You can use the extension by installing it from its official website.',
    mdcols: 'md:col-span-4',
  },
  {
    ques: 'How to download the screen recording from recordbro?',
    Ans: 'It is very easy, just to the screen recording page and settings there will be an option to record the screen click that and record your screen.',
    mdcols: 'md:col-span-8',
  },
  {
    ques: 'How can I Record my face?',
    Ans: 'By using a webcam you can record your face and voice.',
    mdcols: 'md:col-span-3',
  },
  {
    ques: 'How to record HD-quality video?',
    Ans: 'While recording any video from this extension, it automatically downloads it in HD quality.',
    mdcols: 'md:col-span-4',
  },
  {
    ques: 'How can I record my screen with audio?',
    Ans: 'In the settings, there is an option where you can record your voice and keep the video in its original form.',
    mdcols: 'md:col-span-5',
  },
  {
    ques: 'Is online Screen Recording secure?',
    Ans: 'Over the last few years, thousands of people have been using this extension without any trouble. So, this extension is safe and secure to use.',
    mdcols: 'md:col-span-4',
  },
  {
    ques: 'How can I record my computer screen online for free?',
    Ans: 'It is very simple, by just installing it on your browser. This extension is free to use. So record anything for free.',
    mdcols: 'md:col-span-8',
  }
]

export default function Home() {
  return (
    <main>
      <Hero type="home" homeData={data} />
      <Counts />
      <HomeVideo />
      <FeatureOfRecorder />
      <BestScreen />
      <GraphicsFeature />
      <RecordingSteps data={RecordingStepsdata.data} heading={RecordingStepsdata.heading} />
      <Blogs/>
      <Faq faq={faq} />
      <Footer />
    </main>
  );
}
