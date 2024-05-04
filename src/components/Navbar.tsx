import Link from "next/link";



const Navbar = () => {
  return (
    <nav className="bg-[#282C34] text-white relative" >
    <div className="container mx-auto flex justify-between items-center max-w-7xl p-8">
      <div className="flex items-center font-semibold">
        <svg
          className="w-4 h-4"
          viewBox="0 0 21 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M15.4964 0.860352H10.4363V5.92038H5.37631H0.316284V10.9804V16.0404V21.1005H5.37631H10.4363V16.0404H15.4964H20.5564V10.9804V5.92038V0.860352H15.4964ZM5.37631 16.0404H10.4363V10.9804H15.4964V5.92038H10.4363V10.9804H5.37631V16.0404Z"
            fill="white"></path>
        </svg>
        <p className="text-white ml-2">Sudip</p>
      </div>
      <div className="lg:hidden">
        <button>
          <svg
            className="w-4 h-4"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            viewBox="0 0 24 24"
            stroke="currentColor">
            <path d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>
      </div>
      <ul className="flex-col lg:flex-row lg:flex space-x-0 lg:space-x-8 hidden">
        <li>
          {/* <Link
            className="cursor-pointer hover:text-white text-white"
            href="/home"

            >
               <span className="text-[#C778DE]">#</span>
            home
          </Link> */}
        </li>
       
        <li>
          <Link
            className="cursor-pointer hover:text-white text-[#ACB2CF]"
            href="/about"
            >
                             <span className="text-[#C778DE]">#</span>


            about-me
          </Link>
        </li>
        <li>
          <Link
            className="cursor-pointer hover:text-white text-[#ACB2CF]"
            href="/skills"
            
            >
                             <span className="text-[#C778DE]">#</span>

            skills
          </Link>
        </li>
        <li>
          <Link
            className="cursor-pointer hover:text-white text-[#ACB2CF]"
            href="/works"
            
            >
                             <span className="text-[#C778DE]">#</span>

            works
          </Link>
        </li>
        <li>
          <Link
            className="cursor-pointer hover:text-white text-[#ACB2CF]"
            href="/contact"
            >
                             <span className="text-[#C778DE]">#</span>

           
            contacts
          </Link>
        </li>
        
      </ul>
    </div>
    <div className="hidden 2xl:flex absolute left-8 top-0 flex-col items-center">
      <div className="border-l border-[#ACB2CF] h-36"></div>
      <div className="flex flex-col justify-center mt-2 space-y-4">
        <svg
          className="w-8 h-8"
          viewBox="0 0 41 42"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M20.1128 8.32617C12.7742 8.32617 6.8302 14.1303 6.8302 21.2962C6.8302 27.0355 10.6323 31.883 15.9122 33.6015C16.5763 33.715 16.8253 33.3259 16.8253 32.9855C16.8253 32.6774 16.8087 31.656 16.8087 30.5698C13.4715 31.1697 12.6081 29.7754 12.3425 29.0458C12.193 28.6729 11.5455 27.5218 10.981 27.2138C10.5161 26.9706 9.85199 26.3707 10.9644 26.3545C12.0104 26.3383 12.7576 27.2949 13.0066 27.684C14.202 29.6457 16.1114 29.0945 16.8751 28.754C16.9914 27.9109 17.34 27.3435 17.7219 27.0192C14.7665 26.695 11.6783 25.5763 11.6783 20.6153C11.6783 19.2048 12.193 18.0375 13.0398 17.1296C12.907 16.8053 12.4421 15.4759 13.1726 13.6925C13.1726 13.6925 14.285 13.3521 16.8253 15.022C17.8879 14.7301 19.017 14.5842 20.146 14.5842C21.275 14.5842 22.404 14.7301 23.4666 15.022C26.0069 13.3359 27.1193 13.6925 27.1193 13.6925C27.8499 15.4759 27.385 16.8053 27.2522 17.1296C28.0989 18.0375 28.6136 19.1886 28.6136 20.6153C28.6136 25.5925 25.5088 26.695 22.5535 27.0192C23.0349 27.4246 23.45 28.2028 23.45 29.4187C23.45 31.1534 23.4334 32.5477 23.4334 32.9855C23.4334 33.3259 23.6825 33.7312 24.3466 33.6015C26.9836 32.7325 29.275 31.0778 30.8983 28.8703C32.5215 26.6629 33.3949 24.0138 33.3954 21.2962C33.3954 14.1303 27.4514 8.32617 20.1128 8.32617Z"
            fill="#ABB2BF"></path></svg><svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-8 h-8"
          viewBox="0 0 41 41"
          fill="none">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M21.3778 5.39648C13.3475 5.39648 6.8302 11.9138 6.8302 19.9441C6.8302 27.9743 13.3475 34.4917 21.3778 34.4917C29.3935 34.4917 35.9254 27.9743 35.9254 19.9441C35.9254 11.9138 29.3935 5.39648 21.3778 5.39648ZM30.9865 12.1029C32.7773 14.2837 33.7687 17.0114 33.796 19.8331C33.385 19.755 29.2826 18.9185 25.1492 19.4385C25.0547 19.2349 24.9747 19.013 24.8801 18.793C24.6274 18.1929 24.3437 17.5783 24.06 16.9927C28.6352 15.1325 30.7192 12.4502 30.9883 12.1011L30.9865 12.1029ZM21.3778 7.54225C24.5328 7.54225 27.4205 8.72424 29.6154 10.6663C29.3935 10.9828 27.515 13.4904 23.098 15.147C21.0614 11.4083 18.8065 8.34601 18.4592 7.87321C19.4159 7.64983 20.3954 7.53876 21.3778 7.54225V7.54225ZM16.0916 8.7097C17.7567 11.0174 19.2949 13.414 20.6995 15.8889C14.8932 17.4346 9.76518 17.4037 9.21237 17.4037C9.61216 15.5229 10.441 13.7599 11.6343 12.2522C12.8275 10.7444 14.3529 9.53272 16.0916 8.71152V8.7097ZM8.94506 19.9623V19.5804C9.4815 19.5986 15.5097 19.6768 21.7106 17.8147C22.0724 18.5075 22.4034 19.2185 22.7198 19.9277L22.2288 20.0695C15.8242 22.1371 12.4165 27.7852 12.131 28.2598C10.0794 25.9824 8.94442 23.0256 8.94506 19.9604V19.9623ZM21.3778 32.3768C18.6166 32.3811 15.9337 31.4591 13.7585 29.7582C13.9767 29.3 16.5025 24.4411 23.5072 21.9953C23.5399 21.9789 23.5545 21.9789 23.5872 21.9644C24.7681 25.0127 25.6553 28.1669 26.2367 31.3839C24.7019 32.0434 23.0482 32.3813 21.3778 32.3768V32.3768ZM28.3061 30.2474C28.1788 29.4891 27.515 25.8613 25.8912 21.3952C29.7881 20.7806 33.1959 21.7898 33.6214 21.9316C33.3564 23.6094 32.7472 25.2143 31.8321 26.6454C30.9171 28.0764 29.716 29.3028 28.3043 30.2474H28.3061Z"
            fill="#ABB2BF"></path></svg
        ><svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-8 h-8"
          viewBox="0 0 41 41"
          fill="none">
          <path
            d="M20.3134 20.4628C20.3134 19.3444 20.7799 18.2719 21.6102 17.4811C22.4405 16.6903 23.5667 16.2461 24.7409 16.2461C25.9152 16.2461 27.0413 16.6903 27.8717 17.4811C28.702 18.2719 29.1684 19.3444 29.1684 20.4628C29.1684 21.5811 28.702 22.6536 27.8717 23.4444C27.0413 24.2352 25.9152 24.6794 24.7409 24.6794C23.5667 24.6794 22.4405 24.2352 21.6102 23.4444C20.7799 22.6536 20.3134 21.5811 20.3134 20.4628ZM11.4583 28.8961C11.4583 27.7778 11.9248 26.7053 12.7551 25.9145C13.5855 25.1237 14.7116 24.6794 15.8859 24.6794H20.3134V28.8961C20.3134 30.0145 19.8469 31.087 19.0166 31.8778C18.1863 32.6686 17.0601 33.1128 15.8859 33.1128C14.7116 33.1128 13.5855 32.6686 12.7551 31.8778C11.9248 31.087 11.4583 30.0145 11.4583 28.8961ZM20.3134 7.81268V16.2461H24.7409C25.9152 16.2461 27.0413 15.8018 27.8717 15.011C28.702 14.2202 29.1684 13.1477 29.1684 12.0294C29.1684 10.911 28.702 9.83851 27.8717 9.04772C27.0413 8.25694 25.9152 7.81268 24.7409 7.81268H20.3134ZM11.4583 12.0294C11.4583 13.1477 11.9248 14.2202 12.7551 15.011C13.5855 15.8018 14.7116 16.2461 15.8859 16.2461H20.3134V7.81268H15.8859C14.7116 7.81268 13.5855 8.25694 12.7551 9.04772C11.9248 9.83851 11.4583 10.911 11.4583 12.0294V12.0294ZM11.4583 20.4628C11.4583 21.5811 11.9248 22.6536 12.7551 23.4444C13.5855 24.2352 14.7116 24.6794 15.8859 24.6794H20.3134V16.2461H15.8859C14.7116 16.2461 13.5855 16.6903 12.7551 17.4811C11.9248 18.2719 11.4583 19.3444 11.4583 20.4628V20.4628Z"
            fill="#ABB2BF"></path>
        </svg>
      </div>
    </div>
  </nav>
  )
}

export default Navbar