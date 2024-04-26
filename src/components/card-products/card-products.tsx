import Image from 'next/image'

import { Heart, Eye } from 'lucide-react'

import ImageCard from '../../assets/card/image-card-01.svg'
import Star from '../../assets/star.svg'

import * as S from './style'

interface CardProductsProps {
  newProduct?: boolean
  colors?: boolean
}

export function CardProducts({ newProduct, colors }: CardProductsProps) {
  return (
    <S.Card>
      <S.divImage>
        {newProduct ? (
          <S.divNew>
            <S.spanNew>NEW</S.spanNew>
          </S.divNew>
        ) : (
          ''
        )}

        <S.Icons>
          <Heart />
          <Eye />
        </S.Icons>

        <Image src={ImageCard} alt="Imagem do card" />
      </S.divImage>

      <S.divDescription>
        <S.H5>HAVIT HV-G92 Gamepad</S.H5>

        <S.divPrice>
          <S.priceDiscount>$120</S.priceDiscount>
          <S.divStars>
            <S.Stars>
              <Image src={Star} alt="Imagem de uma estrela" />
              <Image src={Star} alt="Imagem de uma estrela" />
              <Image src={Star} alt="Imagem de uma estrela" />
              <Image src={Star} alt="Imagem de uma estrela" />
              <Image src={Star} alt="Imagem de uma estrela" />
            </S.Stars>

            <S.countStars>(88)</S.countStars>
          </S.divStars>
        </S.divPrice>

        {colors ? (
          <S.divColors>
            <S.buttonSelected>
              <S.divButtonSelected></S.divButtonSelected>
            </S.buttonSelected>
            <S.buttonColor></S.buttonColor>
          </S.divColors>
        ) : (
          ''
        )}
      </S.divDescription>
    </S.Card>
  )
}
