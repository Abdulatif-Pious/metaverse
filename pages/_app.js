import Head from 'next/head';

import '../styles/globals.css'

export default function App({ Component, pageProps }) {

  return (
    <>
    <Head>
      <meta charset="utf-8" />
      <meta name="viewport" content="width=screen-width, initial-scale=1.0"  />
      <meta name="description" content="Everything you need to know about Metaverse" />
      <link rel="icon" href="favicon.ico " />
      <title>Abdulatif's metaverse</title>

    </Head>
    <div className="bg-primary-black overflow-hidden">
      <div className="w-full 2xl:max-w-[1536px] mx-auto ">
        <Component {...pageProps} />
      </div>
    </div>
    
      
    </>
  );
};
