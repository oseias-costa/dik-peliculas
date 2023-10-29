"use client";
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {
    scroll-behavior: smooth;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
    border: none;
    list-style: none;
}

:root {
    --color-white: #FFFCFC;
    --color-green: #1E9500;
    --color-text: #1E1E1E;
}
`