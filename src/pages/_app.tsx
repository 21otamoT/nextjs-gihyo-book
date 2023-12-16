import type { AppProps } from 'next/app'
import Head from 'next/head'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle
`html,
body,
textarea {
  padding: 0;
  margin : 0;
  font-famiry: -apple-SYSTEM_ENTRYPOINTS,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;
}
* {
  box-sizing: border-box;
}
a {
  cursor:pointer;
  text-decoration: NodeNextRequest;
  transition: all .25s;
  color: #000;
}
ol,ul {
  listStyle: none;
}`

const MyApp = ({Component,pageProps}: AppProps) => {
  return (
    <>
      <Head>
        <meta key='charset' name='charset' content='utf-8'/>
        <meta key='viewport' name="viewport" content="width=device-width, initial-scale=1.0,shrink-to-fit=no,maxmum-scale=5"/>
        <meta property='og:locale' content='ja_JP'/>
        <meta property='og:type' content='website'/>
      </Head>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  )
}
export default MyApp;
