import ContactMe from "@/components/ContactMe"
import Image from "next/image"

const Page = () => {
  return (
    <>
    <div className="bg-[rgb(40,44,52)] w-full text-white pt-8" id="home">
    <div className="container mx-auto max-w-7xl px-4 md:px-8 flex flex-col gap-8 md:flex-row items-center">
      <div className="relative py-12 text-center md:text-left flex flex-col justify-center md:flex-grow">
        <h1 className="text-5xl font-bold mb-4 leading-normal">
          Sudip is a
          <span className="text-[#C778DE] mx-4">IT Specialist</span>
          and
          <span className="text-[#C778DE] ml-4">Networking Enthusiast</span>
        </h1>
        <p className="w-full text-center md:text-left mt-4 text-[#ACB2CF]">Connecting tech and creativity for seamless networks.</p>
        <ContactMe/>
      </div>
      <div className="relative flex md:flex-none">
        <div className="relative z-10">
          <Image
          src="/profile.png"
            alt="techguy"
            width={480}
            height={480}
            className="z-20 relative rounded-full " />
          <div className="flex items-center border border-[#ACB2CF] text-[#ACB2CF] py-2 px-4">
            <span className="inline-block bg-[#C778DE] w-4 h-4 mr-4"></span>
            <p>
              Currently studying 
              
              <span className="text-white"> BSC.CSIT</span>
            </p>
          </div>
        </div>
        <svg
          className="w-20 h-20 absolute right-4 bottom-24 z-30"
          viewBox="0 0 107 108"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <circle
            cx="2.71309"
            cy="3.31761"
            r="2.53001"
            fill="#ABB2BF"></circle>
          <circle
            cx="28.0132"
            cy="3.31761"
            r="2.53001"
            fill="#ABB2BF"></circle>
          <circle
            cx="53.3134"
            cy="3.31761"
            r="2.53001"
            fill="#ABB2BF"></circle>
          <circle
            cx="78.6135"
            cy="3.31761"
            r="2.53001"
            fill="#ABB2BF"></circle>
          <circle
            cx="103.914"
            cy="3.31761"
            r="2.53001"
            fill="#ABB2BF"></circle>
          <circle
            cx="2.71309"
            cy="28.6177"
            r="2.53001"
            fill="#ABB2BF"></circle>
          <circle
            cx="28.0132"
            cy="28.6174"
            r="2.53001"
            fill="#ABB2BF"></circle>
          <circle
            cx="53.3134"
            cy="28.6174"
            r="2.53001"
            fill="#ABB2BF"></circle>
          <circle
            cx="78.6135"
            cy="28.6174"
            r="2.53001"
            fill="#ABB2BF"></circle>
          <circle
            cx="103.914"
            cy="28.6174"
            r="2.53001"
            fill="#ABB2BF"></circle>
          <circle
            cx="2.71309"
            cy="53.918"
            r="2.53001"
            fill="#ABB2BF"></circle>
          <circle
            cx="28.0132"
            cy="53.9182"
            r="2.53001"
            fill="#ABB2BF"></circle>
          <circle
            cx="53.3134"
            cy="53.9182"
            r="2.53001"
            fill="#ABB2BF"></circle>
          <circle
            cx="78.6135"
            cy="53.9182"
            r="2.53001"
            fill="#ABB2BF"></circle>
          <circle
            cx="103.914"
            cy="53.9182"
            r="2.53001"
            fill="#ABB2BF"></circle>
          <circle
            cx="2.71309"
            cy="79.218"
            r="2.53001"
            fill="#ABB2BF"></circle>
          <circle
            cx="28.0132"
            cy="79.218"
            r="2.53001"
            fill="#ABB2BF"></circle>
          <circle
            cx="53.3134"
            cy="79.218"
            r="2.53001"
            fill="#ABB2BF"></circle>
          <circle
            cx="78.6135"
            cy="79.218"
            r="2.53001"
            fill="#ABB2BF"></circle>
          <circle
            cx="103.914"
            cy="79.218"
            r="2.53001"
            fill="#ABB2BF"></circle>
          <circle
            cx="2.71309"
            cy="104.518"
            r="2.53001"
            fill="#ABB2BF"></circle>
          <circle
            cx="28.0132"
            cy="104.518"
            r="2.53001"
            fill="#ABB2BF"></circle>
          <circle
            cx="53.3134"
            cy="104.518"
            r="2.53001"
            fill="#ABB2BF"></circle>
          <circle
            cx="78.6135"
            cy="104.518"
            r="2.53001"
            fill="#ABB2BF"></circle>
          <circle
            cx="103.914"
            cy="104.518"
            r="2.53001"
            fill="#ABB2BF"></circle></svg
        ><svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-40 h-40 absolute top-20 z-0"
          viewBox="0 0 198 198"
          fill="none">
          <mask
            id="path-1-inside-1_116_2033"
            fill="white">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M0.39537 50.8755H49.4144H98.4334V99.8945H49.4144V148.914L98.4334 148.914V197.933H49.4144H0.39537V148.914V99.8945V50.8755Z"></path>
          </mask>
          <path
            d="M0.39537 50.8755V49.6105H-0.869637V50.8755H0.39537ZM98.4334 50.8755H99.6984V49.6105H98.4334V50.8755ZM98.4334 99.8945V101.16H99.6984V99.8945H98.4334ZM49.4144 99.8945V98.6295H48.1494V99.8945H49.4144ZM49.4144 148.914H48.1494V150.179L49.4144 150.179L49.4144 148.914ZM98.4334 148.914H99.6984V147.649L98.4334 147.649L98.4334 148.914ZM98.4334 197.933V199.198H99.6984V197.933H98.4334ZM0.39537 197.933H-0.869637V199.198H0.39537V197.933ZM49.4144 49.6105H0.39537V52.1405H49.4144V49.6105ZM98.4334 49.6105H49.4144V52.1405H98.4334V49.6105ZM99.6984 99.8945V50.8755H97.1684V99.8945H99.6984ZM49.4144 101.16H98.4334V98.6295H49.4144V101.16ZM50.6794 148.914V99.8945H48.1494V148.914H50.6794ZM49.4144 150.179L98.4334 150.179L98.4334 147.649L49.4144 147.649L49.4144 150.179ZM97.1684 148.914V197.933H99.6984V148.914H97.1684ZM98.4334 196.668H49.4144V199.198H98.4334V196.668ZM0.39537 199.198H49.4144V196.668H0.39537V199.198ZM-0.869637 148.914V197.933H1.66038V148.914H-0.869637ZM-0.869637 99.8945V148.914H1.66038V99.8945H-0.869637ZM-0.869637 50.8755V99.8945H1.66038V50.8755H-0.869637Z"
            fill="#C778DD"
            mask="url(#path-1-inside-1_116_2033)"></path>
          <mask
            id="path-3-outside-2_116_2033"
            maskUnits="userSpaceOnUse"
            x="96.4334"
            y="-0.143555"
            width="102"
            height="151"
            fill="black">
            <rect
              fill="white"
              x="96.4334"
              y="-0.143555"
              width="102"
              height="151"></rect>
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M98.4334 1.85645H147.452H196.472V50.8755V99.8945V148.914H147.452H98.4334V99.8945H147.452V50.8755H98.4334V1.85645Z"></path>
          </mask>
          <path
            d="M98.4334 1.85645V0.591438H97.1684V1.85645H98.4334ZM196.472 1.85645H197.737V0.591438H196.472V1.85645ZM196.472 148.914V150.179H197.737V148.914H196.472ZM98.4334 148.914H97.1684V150.179H98.4334V148.914ZM98.4334 99.8945V98.6295H97.1684V99.8945H98.4334ZM147.452 99.8945V101.16H148.717V99.8945H147.452ZM147.452 50.8755H148.717V49.6105H147.452V50.8755ZM98.4334 50.8755H97.1684V52.1405H98.4334V50.8755ZM147.452 0.591438H98.4334V3.12145H147.452V0.591438ZM196.472 0.591438H147.452V3.12145H196.472V0.591438ZM197.737 50.8755V1.85645H195.207V50.8755H197.737ZM197.737 99.8945V50.8755H195.207V99.8945H197.737ZM197.737 148.914V99.8945H195.207V148.914H197.737ZM147.452 150.179H196.472V147.649H147.452V150.179ZM147.452 147.649H98.4334V150.179H147.452V147.649ZM99.6985 148.914V99.8945H97.1684V148.914H99.6985ZM98.4334 101.16H147.452V98.6295H98.4334V101.16ZM146.187 50.8755V99.8945H148.717V50.8755H146.187ZM98.4334 52.1405H147.452V49.6105H98.4334V52.1405ZM97.1684 1.85645V50.8755H99.6985V1.85645H97.1684Z"
            fill="#C778DD"
            mask="url(#path-3-outside-2_116_2033)"></path>
        </svg>
      </div>
    </div>
  </div>
  <div className="bg-[#282C34] w-full text-white py-24 text-2xl relative">
    <div className="container mx-auto max-w-7xl px-4 md:px-8 flex justify-center items-center">
      
      <div className="flex flex-col items-end">
        <div className="border border-[#ACB2CF] text-white p-8 relative">
          <svg
            className="w-12 h-12 absolute left-2 -top-6"
            viewBox="0 0 53 37"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <rect
              width="52.4624"
              height="36.3108"
              transform="translate(0.307556 0.664551)"
              fill="#282C33"></rect>
            <path
              d="M23.7861 25.4792C23.7861 27.2873 23.1249 28.8121 21.8026 30.0535C20.5072 31.2949 18.9285 31.9156 17.0664 31.9156C15.1503 31.9156 13.5581 31.2949 12.2897 30.0535C11.0483 28.8121 10.4276 27.2873 10.4276 25.4792C10.4276 24.6156 10.5491 23.6981 10.7919 22.7265C11.0348 21.755 11.5206 20.5001 12.2492 18.9619L18.5237 5.72485H24.5957L21.2358 20.3787C21.9915 20.9184 22.5987 21.6336 23.0574 22.5241C23.5432 23.3877 23.7861 24.3727 23.7861 25.4792ZM41.7998 25.4792C41.7998 27.2873 41.1386 28.8121 39.8163 30.0535C38.4939 31.2949 36.9152 31.9156 35.0801 31.9156C33.218 31.9156 31.6393 31.2949 30.3439 30.0535C29.0755 28.8121 28.4413 27.2873 28.4413 25.4792C28.4413 24.6156 28.5628 23.6981 28.8056 22.7265C29.0485 21.755 29.5478 20.5001 30.3034 18.9619L36.6183 5.72485H42.6499L39.2495 20.3787C40.0322 20.9184 40.6529 21.6336 41.1116 22.5241C41.5704 23.3877 41.7998 24.3727 41.7998 25.4792Z"
              fill="#ABB2BF"></path>
          </svg>
          My computer's always hot cause it's windowless!
        </div>
        <div className="inline-block text-right mt-[-1px] border border-[#ACB2CF] p-4 relative">
          <svg
            className="w-12 h-12 absolute right-4 -top-6"
            viewBox="0 0 53 37"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <rect
              width="52.4624"
              height="36.3108"
              transform="translate(0.307556 0.664551)"
              fill="#282C33"></rect>
            <path
              d="M23.7861 25.4792C23.7861 27.2873 23.1249 28.8121 21.8026 30.0535C20.5072 31.2949 18.9285 31.9156 17.0664 31.9156C15.1503 31.9156 13.5581 31.2949 12.2897 30.0535C11.0483 28.8121 10.4276 27.2873 10.4276 25.4792C10.4276 24.6156 10.5491 23.6981 10.7919 22.7265C11.0348 21.755 11.5206 20.5001 12.2492 18.9619L18.5237 5.72485H24.5957L21.2358 20.3787C21.9915 20.9184 22.5987 21.6336 23.0574 22.5241C23.5432 23.3877 23.7861 24.3727 23.7861 25.4792ZM41.7998 25.4792C41.7998 27.2873 41.1386 28.8121 39.8163 30.0535C38.4939 31.2949 36.9152 31.9156 35.0801 31.9156C33.218 31.9156 31.6393 31.2949 30.3439 30.0535C29.0755 28.8121 28.4413 27.2873 28.4413 25.4792C28.4413 24.6156 28.5628 23.6981 28.8056 22.7265C29.0485 21.755 29.5478 20.5001 30.3034 18.9619L36.6183 5.72485H42.6499L39.2495 20.3787C40.0322 20.9184 40.6529 21.6336 41.1116 22.5241C41.5704 23.3877 41.7998 24.3727 41.7998 25.4792Z"
              fill="#ABB2BF"></path>
          </svg>
          ~  just for fun ~
        </div>
      </div>
    </div>
  </div>
    </>
  )
}

export default Page