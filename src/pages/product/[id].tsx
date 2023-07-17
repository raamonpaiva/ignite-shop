import { ImageContainer, ProductContainer, ProductDetails } from "@/styles/pages/product";

export default function Product() {
  return (

    <ProductContainer>
      <ImageContainer>

      </ImageContainer>

      <ProductDetails>
        <h1>Camiseta X</h1>
        <span>R$ 79,90</span>

        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi perspiciatis, illo laudantium facere voluptatum quos dignissimos illum eaque, voluptas exercitationem dolor animi enim ducimus quo maiores libero! Facere, quasi aliquam?</p>

        <button>
          Comprar Agora
        </button>
      </ProductDetails>
    </ProductContainer>
  )
}