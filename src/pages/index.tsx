import { HomeContainer, Product } from "@/styles/pages/home";
import Image from "next/image";

import 'keen-slider/keen-slider.min.css';
import { useKeenSlider } from 'keen-slider/react';

import cam1 from '../assets/cam1.png';
import cam2 from '../assets/cam2.png';
import cam3 from '../assets/cam3.png';
import cam4 from '../assets/cam4.png';

export default function Home() {

  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 48,
    }
  })

  return (
    <HomeContainer ref={sliderRef} className="keen-slider">
      <Product className="keen-slider__slide">
        <Image src={cam1} width={520} height={480} alt="" />
        <footer>
          <strong>Camiseta X</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>


      <Product className="keen-slider__slide">
        <Image src={cam2} width={520} height={480} alt="" />
        <footer>
          <strong>Camiseta Y</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>

      <Product className="keen-slider__slide">
        <Image src={cam3} width={520} height={480} alt="" />
        <footer>
          <strong>Camiseta Z</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>

      <Product className="keen-slider__slide">
        <Image src={cam4} width={520} height={480} alt="" />
        <footer>
          <strong>Camiseta W</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>

    </HomeContainer>
  )
}

export const getServerSideProps = async () => {
  await new Promise(resolve => setTimeout(resolve, 1000))
}