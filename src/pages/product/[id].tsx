import { stripe } from "@/lib/stripe";
import { ImageContainer, ProductContainer, ProductDetails } from "@/styles/pages/product";
import { GetStaticPaths, GetStaticProps } from "next";
import Image from "next/image";
import Stripe from "stripe";

interface ProductProps {
  product: {
    id: string,
    name: string,
    imageUrl: string,
    price: string,
    description: string
  }
}


export default function Product(product: ProductProps) {

  return (

    <ProductContainer>
      <ImageContainer>
        <Image src={product.product.imageUrl} width={520} height={480} alt="" />
      </ImageContainer>

      <ProductDetails>
        <h1>{product.product.name}</h1>
        <span>{product.product.price}</span>

        <p>{product.product.description}</p>

        <button>
          Comprar Agora
        </button>
      </ProductDetails>
    </ProductContainer>
  )
}

/** Para gerar paginas estaticas com parametros é necessario utilizar o getStatiPaths, porque ele procura e retorna uma
 * pagina para determinado id
 */
export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [
      { params: { id: 'prod_OGHjkDL0AqcapZ' } }
    ],
    fallback: false
  }
}

export const getStaticProps: GetStaticProps<any, { id: string }> = async ({ params }) => {

  const productId = params.id

  const product = await stripe.products.retrieve(productId, {
    expand: ['default_price']
  })

  const price = product.default_price as Stripe.Price


  return {
    props: {
      product: {
        id: product.id,
        name: product.name,
        imageUrl: product.images[0],
        price: new Intl.NumberFormat('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        }).format(price.unit_amount as number / 100),
        description: product.description
      }
    },
  }
}