import type { NextPage } from 'next';
import Head from 'next/head';
import { Resume } from 'src/core/containers/Resume';
import { Sidebar } from 'src/core/containers/Sidebar';
import { LeftNav } from 'src/core/containers/LeftNav';
import { FlexHC } from 'src/styles/styles';

const Editor: NextPage = () => {
  return (
    <FlexHC>
      <Head>
        <title>Resume Builder For Free Editor Page</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="/draggar.css"></link>
        <meta name="theme-color" content="#3b7df6"></meta>
        {/* Google Analytics Script */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-WVG4DPKP8Z"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-WVG4DPKP8Z');
            `,
          }}
        />
        {/* <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2305974348753248"
     crossOrigin="anonymous"></script> */}
      </Head>
      <div id="navbar1">
          <span>
            <b>Resume Builder For Free</b>
          </span>
        </div>
        <br />
      <LeftNav />
      <Resume />
      <Sidebar />
    </FlexHC>
  );
};

export default Editor;
