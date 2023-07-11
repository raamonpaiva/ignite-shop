/** _app funciona como um wrapper para as páginas da aplicação */
import { globalStyle } from '@/styles/global'
import type { AppProps } from 'next/app'

/** Aplicando os estilos globais */
globalStyle()


export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
