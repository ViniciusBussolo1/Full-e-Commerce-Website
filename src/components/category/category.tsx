'use client'

import Image from 'next/image'

import { ChevronRight, ArrowRight } from 'lucide-react'

import LogoApple from '../../assets/logo-apple.svg'
import IphoneImage from '../../assets/iphone-image.svg'

import * as S from './style'

export function Category() {
  return (
    <S.Container>
      <S.divCategory>
        <S.Categorys>
          <nav>
            <S.Ul>
              <S.liIcon>
                Woman’s Fashion <ChevronRight />
              </S.liIcon>
              <S.liIcon>
                Men’s Fashion <ChevronRight />
              </S.liIcon>
              <S.Li>Electronics</S.Li>
              <S.Li>Home & Lifestyle</S.Li>
              <S.Li>Medicine</S.Li>
              <S.Li>Sports & Outdoor</S.Li>
              <S.Li>Baby’s & Toys</S.Li>
              <S.Li>Groceries & Pets</S.Li>
              <S.Li>Health & Beauty</S.Li>
            </S.Ul>
          </nav>
        </S.Categorys>
        <S.divLine></S.divLine>
        <S.Carousel>
          <S.Content>
            <S.divTitle>
              <Image src={LogoApple} alt="Logo da Apple" />
              <S.Title>iPhone 14 Series</S.Title>
            </S.divTitle>
            <S.Span>Up to 10% off Voucher</S.Span>
            <S.Link href="/">
              <S.Div>
                Shop Now
                <S.Line></S.Line>
              </S.Div>
              <ArrowRight />
            </S.Link>
          </S.Content>
          <S.containerImage>
            <Image src={IphoneImage} alt="Imagem deu um Iphone" />
          </S.containerImage>
          <S.divButtons>
            <S.Button></S.Button>
            <S.Button></S.Button>
            <S.buttonSelected>
              <S.divButtonSelected></S.divButtonSelected>
            </S.buttonSelected>
            <S.Button></S.Button>
            <S.Button></S.Button>
          </S.divButtons>
        </S.Carousel>
      </S.divCategory>
    </S.Container>
  )
}
