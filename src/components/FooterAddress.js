import { useState } from "react";
import alclairLogoOutline from "../imgs/alclairLogoOutline.png"

export const FooterAddress = (props) => {

  // const [ linkTab, setLinkTab ] = useState("");


  return (
    <div class="">
      <img src={alclairLogoOutline} alt="transperent outline of an ear combined with a C chape" />
      <h4 class="text-color">
        Alclair HQ
      </h4>
      <p>
        8700 Jefferson Hwy<br/>
        Osseo, MN 55369<br/>
        800-933-9899
      </p>
    </div>
  )
}