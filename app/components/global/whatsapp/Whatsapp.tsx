"use client";
import React from "react";
import WhatsSVG from "../../../../public/images/global/whatsapp-button.svg";
import { Whats, WhatsIcon } from "./whatsapp.styles";

export default function Whatsapp() {
  return (
    <Whats>
      <a href="https://nux514f6cjp.typeform.com/to/itgZsLcm" target="_blank">
        <WhatsIcon src={WhatsSVG} alt="Link para o WhatsApp Mad Digital" />
      </a>
    </Whats>
  );
}
