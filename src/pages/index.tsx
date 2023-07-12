import { HomeContainer, Product } from "@/styles/pages/home";
import Image from "next/image";

import cam1 from '../assets/cam1.png';
import cam2 from '../assets/cam2.png';

export default function Home() {
  return (
    <HomeContainer>
      <Product>
        <Image src={cam1} width={520} height={480} alt="" />
        <footer>
          <strong>Camiseta X</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>


      <Product>
        <Image src={cam2} width={520} height={480} alt="" />
        <footer>
          <strong>Camiseta Y</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>

    </HomeContainer>
  )
}
