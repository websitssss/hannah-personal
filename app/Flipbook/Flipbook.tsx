"use client";
import Script from 'next/script';
import React from 'react'


function Flipbook() {
  return (
    <>
    <Script src="https://online.flippingbook.com/EmbedScriptUrl.aspx?m=redir&hid=127178758" />
    <a href="https://online.flippingbook.com/view/127178758/" data-fbo-id="36bc86f8b9" data-fbo-ratio="3:2" data-fbo-lightbox="yes" data-fbo-width="100%" data-fbo-height="auto" data-fbo-version="1" className=' fbo-embed w-full'>Hannah Kraft</a>
    </>
  )
}

export default Flipbook