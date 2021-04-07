import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx)
        
        return { ...initialProps }
    
    }
    
    render() {
        
        return (
            <Html lang="en-US">
                
                <Head>
                    <meta name="theme-color" content="" />
                    <meta name="msapplication-TileColor" content="#ffffff" />
                    {/* <meta name="msapplication-TileImage" content="/images/favicon/ms-icon-144x144.png" /> */}
                    
                    <meta httpEquiv="content-type" content="text/html; charset=UTF-8" />
                    <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
                    <meta name="description" content="Aston Gemmy Portfolio" />
                    <meta property="og:description" name="description" content="Aston Gemmy Portfolio" />
                    <meta property="og:author" name="author" content="Aston Gemmy" />
                    <meta property="og:keywords" name="keywords" content="Web development,HTML,HTML5,CSS,CSS3,Javascript,JQuery,PHP,MySQL,UX/UI Design,Blogging,Graphics Design,Frontend,Backend" />
                    <meta property="og:image" name="image" content="/images/thumbnails/thumbnail.png" />
                    {/* <link rel="manifest" href="/manifest.json" /> */}

                    {/* <link rel="apple-touch-icon" sizes="57x57" href="/images/favicon/apple-icon-57x57.png" />
                    <link rel="apple-touch-icon" sizes="60x60" href="/images/favicon/apple-icon-60x60.png" />
                    <link rel="apple-touch-icon" sizes="72x72" href="/images/favicon/apple-icon-72x72.png" />
                    <link rel="apple-touch-icon" sizes="76x76" href="/images/favicon/apple-icon-76x76.png" />
                    <link rel="apple-touch-icon" sizes="114x114" href="/images/favicon/apple-icon-114x114.png" />
                    <link rel="apple-touch-icon" sizes="120x120" href="/images/favicon/apple-icon-120x120.png" />
                    <link rel="apple-touch-icon" sizes="144x144" href="/images/favicon/apple-icon-144x144.png" />
                    <link rel="apple-touch-icon" sizes="152x152" href="/images/favicon/apple-icon-152x152.png" />
                    <link rel="apple-touch-icon" sizes="180x180" href="/images/favicon/apple-icon-180x180.png" />
                    <link rel="icon" type="image/png" sizes="192x192" href="/images/favicon/android-icon-192x192.png" />
                    <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon/favicon-32x32.png" />
                    <link rel="icon" type="image/png" sizes="96x96" href="/images/favicon/favicon-96x96.png" />
                    <link rel="icon" type="image/png" sizes="16x16" href="/images/favicon/favicon-16x16.png" /> */}
                    
                    <link rel="shortcut icon" href="/images/favicon/favicon.png" />
                    {/* <script data-ad-client="ca-pub-3849094578303904" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script> */}

                    {/* Global site tag (gtag.js) - Google Analytics */}
                    {/* <script async src="https://www.googletagmanager.com/gtag/js?id=UA-58774198-2"></script> */}
                    {/* <script>
                    window.dataLayer = window.dataLayer || [];
                    function gtag() {
                        dataLayer.push(arguments);
                    }
                    gtag('js', new Date());
                    gtag('config', 'UA-58774198-2');
                    </script> */}
                </Head>
            
                <body>                    
                    <Main />
                    <NextScript />                    
                </body>
                
            </Html>
        )
    }
}