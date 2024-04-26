'use client'

import Image from 'next/image'
import Services from '../../assets/information/services.svg'
import Phone from '../../assets/information/phone.svg'
import Security from '../../assets/information/security.svg'

import * as S from './style'

export function Information() {
  return (
    <S.Container>
      <S.divInformation>
        <S.Div>
          <Image src={Services} alt="Image de um caminhão de serviço" />
          <S.divDescription>
            <S.H5>FREE AND FAST DELIVERY</S.H5>
            <S.Span>Free delivery for all orders over $140</S.Span>
          </S.divDescription>
        </S.Div>
        <S.Div>
          <Image src={Phone} alt="Image de um caminhão de serviço" />
          <S.divDescription>
            <S.H5>24/7 CUSTOMER SERVICE</S.H5>
            <S.Span>Friendly 24/7 customer support</S.Span>
          </S.divDescription>
        </S.Div>
        <S.Div>
          <Image src={Security} alt="Image de um caminhão de serviço" />
          <S.divDescription>
            <S.H5>MONEY BACK GUARANTEE</S.H5>
            <S.Span>We reurn money within 30 days</S.Span>
          </S.divDescription>
        </S.Div>
      </S.divInformation>
    </S.Container>
  )
}
