'use client'

import Image from 'next/image'

import Star from '../../assets/star.svg'

import { Heart, Eye } from 'lucide-react'

import ImageCard from '../../assets/card/image-card-01.svg'

import * as S from './style'

interface CardProps {
  discount?: boolean
  numberDiscount?: string
  addCard?: boolean
}

export function Card({ numberDiscount, discount, addCard }: CardProps) {
  return (
    <S.Card>
      <S.divImage>
        {discount ? (
          <S.divDiscount>
            <S.spanDiscount>-{numberDiscount}%</S.spanDiscount>
          </S.divDiscount>
        ) : (
          ''
        )}

        <S.Icons>
          <Heart />
          <Eye />
        </S.Icons>

        <Image src={ImageCard} alt="Imagem do card" />

        {addCard ? <S.divAdd>Add To Cart</S.divAdd> : ''}
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
  )
}
