/** _app funciona como um wrapper para as páginas da aplicação, mesma função do App no create-react */
import { globalStyle } from '@/styles/global'
import { Container, Header } from '@/styles/pages/app'
import type { AppProps } from 'next/app'
import logoImg from '../assets/logo.svg'

/** Aplicando os estilos globais */
globalStyle()


export default function App({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <Header>
        <img src={logoImg.src} alt="" />
      </Header>

      <Component {...pageProps} />
    </Container>
  )
}
