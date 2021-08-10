import Head from 'next/head'

const Meta = () => {
    const title = 'Spirit v Spooky'
    const description = 'Caspers DeFi presents Spirit v Spooky, check the latest data from the top 2 Dexs on Fantom Opera.'
    const url = 'https://spiritvboo.casperdefi.com'

    return (
        <Head>
            <title>Spirit v Spooky</title>
            <meta name="description" content={description} />
            <meta property="og:type" content="website" />
            <meta name="og:title" property="og:title" content={title} />
            <meta name="og:description" property="og:description" content={description} />
            <meta property="og:site_name" content={title} />
            <meta property="og:url" content={url} />
            <meta name="twitter:card" content="summary" />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:site" content={url} />
            <link rel="icon" type="image/png" href="https://spiritvboo.casperdefi.com/img/casper_ghost.png`" />
            <meta property="og:image" content="https://spiritvboo.casperdefi.com/img/SpiritvBoo.png" />
            <meta name="twitter:image" content="https://spiritvboo.casperdefi.com/img/SpiritvBoo.png" />
        </Head>
    )
}

export default Meta
