/** _app funciona como um wrapper para as páginas da aplicação, mesma função do App no create-react */
import { globalStyle } from '@/styles/global'
import { Container, Header } from '@/styles/pages/app'
import type { AppProps } from 'next/app'

/** Import do Logo */
import Image from 'next/image'
import logoImg from '../assets/logo.png'

/** Aplicando os estilos globais */
globalStyle()


export default function App({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <Header>
        <Image
          src={logoImg}
          width={129}
          height={52}
          alt='Logo Ignite'
        />
      </Header>

      <Component {...pageProps} />
    </Container>
  )
}
