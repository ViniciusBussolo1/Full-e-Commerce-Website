'use client'

import Image from 'next/image'

import Star from '../../assets/star.svg'

import { Heart, Eye } from 'lucide-react'

import ImageCard from '../../assets/card/image-card-01.svg'

import * as S from './style'

export function Card() {
  return (
    <S.divCard>
      <S.Card>
        <S.divImage>
          <S.divDiscount>
            <S.spanDiscount>-40%</S.spanDiscount>
          </S.divDiscount>

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
            <S.priceOriginal>$160</S.priceOriginal>
          </S.divPrice>
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
        </S.divDescription>
      </S.Card>
    </S.divCard>
  )
}
