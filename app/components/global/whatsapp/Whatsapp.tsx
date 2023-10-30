"use client";
import React from "react";
import WhatsSVG from "../../../../public/images/global/whatsapp-button.svg";
import { Whats, WhatsIcon } from "./whatsapp.styles";

export default function Whatsapp() {
  return (
    <Whats>
      <a
        href="https://api.whatsapp.com/send?phone=5548999406153&text=Ol%C3%A1!%20Vim%20do%20site%20e%20gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20as%20pel%C3%ADculas."
        target="_blank"
      >
        <WhatsIcon src={WhatsSVG} alt="Link para o WhatsApp Mad Digital" />
      </a>
    </Whats>
  );
}
