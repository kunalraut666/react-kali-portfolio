import React from 'react'
import Head from 'next/head';

export default function Meta() {
    return (
        <Head>
            <title>Kunal Raut Portfolio</title>
            <meta charSet="utf-8" />
            <meta name="title" content="Kunal Raut Portfolio" />
            <meta name="description"
                content="Kunal Raut Portfolio Personal Portfolio Website. Made with Kali Linux." />
            <meta name="author" content="Ali Abo Alshamlat" />
            <meta name="keywords"
                content="Kunal Raut, Kunal Raut's portfolio, Kunal Raut linux, kali portfolio, kunal kali, Kunal Raut kali linux portfolio" />
            <meta name="robots" content="index, follow" />
            <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
            <meta name="language" content="English" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="theme-color" content="#2063e9" />

            /* Search Engine */
            <meta name="image" content="images/logos/icons8-kali-linux-100.png" />
            /* Schema.org for Google */
            <meta itemProp="name" content="Kunal Raut Portfolio" />
            <meta itemProp="description"
                content="Kunal Raut Personal Portfolio Website. Made with Kali (Linux) theme by Next.js and Tailwind CSS." />
            <meta itemProp="image" content="images/logos/icons8-kali-linux-100.png" />
            /* Open Graph general (Facebook, Pinterest & Google+) */
            <meta name="og:title" content="Kunal Raut Portfolio" />
            <meta name="og:description"
                content="Kunal Raut Personal Portfolio Website. Made with Kali (Linux) theme by Next.js and Tailwind CSS." />
            <meta name="og:image" content="images/logos/logo_1.png" />
            <meta name="og:url" content="" />
            <meta name="og:site_name" content="Kunal Raut Personal Portfolio" />
            <meta name="og:locale" content="en_IN" />
            <meta name="og:type" content="website" />

            <link rel="icon" href="images/logos/icons8-kali-linux-100.png" />
            <link rel="apple-touch-icon" href="images/logos/pic-2.png" />
            <link rel="preload" href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400;500;700&display=swap" as="style" />
            <link href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400;500;700&display=swap" rel="stylesheet"></link>
        </Head>
    )
}
