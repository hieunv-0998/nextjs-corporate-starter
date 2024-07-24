"use client";

import React, {useEffect} from "react";
export default function Aioa() {
  useEffect(() => {
    if (typeof document === "undefined") return

    if (document.getElementById('aioa-adawidget')) return;

    const aioa_script_tag = document.createElement("script");
    aioa_script_tag.src = "https://www.skynettechnologies.com/accessibility/js/all-in-one-accessibility-js-widget-minify.js?colorcode=#420083&token=ADAAIOA-7AF984B7E8846DEFF6B744A52D4D3315&position=bottom_right";
    aioa_script_tag.id = "aioa-adawidget";
    aioa_script_tag.defer = "true";
    document.body.appendChild(aioa_script_tag);
  }, []);

  return (
      <></>
  );
}
