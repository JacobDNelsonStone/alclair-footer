import { useState } from "react";
// import alclairLogoOutline from "../imgs/alclairLogoOutline.png"
import alclairIcon from "../imgs/alclairIcon.svg";

export const FooterAddress = (props) => {

  // const [ linkTab, setLinkTab ] = useState("");


  return (
    <div class="flex flex-col content-center flex-wrap">

      <img src={alclairIcon} alt="outline of an ear combined with a C chape" class="p-2" />
      <div class="px-2 py-1 mb-2 flex flex-col items-center bg-gray-200 rounded ">
        <a class="underline text-base font-bold hover:scale-110 hover:transition-all" href="https://www.google.com/maps/place/Alclair+Audio/@45.112607,-93.4017703,15z/data=!4m6!3m5!1s0x52b33833cb37cf6f:0xd4d706c111cedb09!8m2!3d45.112607!4d-93.4017703!16s%2Fg%2F1q6jzmkf7?entry=ttu">
          Alclair HQ
        </a>
        <center>
          <p>
            8700 Jefferson Hwy<br />
            Osseo, MN 55369<br />
            800-933-9899
          </p>
        </center>
      </div>
      <div class="px-2 py-1 flex flex-col items-center bg-gray-200 rounded">
        <a class="underline text-base font-bold hover:scale-110 hover:transition-all" href="https://www.google.com/maps/place/Alclair+Nashville/@36.1306695,-86.775335,17z/data=!3m1!4b1!4m6!3m5!1s0x8864657e577b03dd:0x3e7cb94e6c574052!8m2!3d36.1306652!4d-86.7727601!16s%2Fg%2F11g_r5p1xh?entry=ttu">
          Alclair Nashville
        </a>
        <center>
          <p>
            2028c Lindell Ave <br/>
            Nashville, TN 37203 <br/>
            615-613-1664
          </p>
        </center>
      </div>

    </div>
  )
}