import { ImageContainer, SuccessContainer } from "@/styles/pages/sucess";
import Link from "next/link";

export default function Success() {
  return (
    <SuccessContainer>
      <h1>Compra Efetuada</h1>

      <ImageContainer>

      </ImageContainer>

      <p>Uhull <strong>Raamon Paiva</strong>, sua <strong>Camiseta Beyond the Limits</strong> já está a caminho da sua casa</p>

      <Link href="/" >
        Voltar ao catálogo
      </Link>

    </SuccessContainer>
  )
}