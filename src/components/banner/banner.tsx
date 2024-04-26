'use client'

import Image from 'next/image'
import JBL from '../../assets/banner/jbl.svg'

import * as S from './style'

export function Banner() {
  return (
    <S.Container>
      <S.divBanner>
        <S.divContent>
          <S.Span>Categories</S.Span>
          <S.H1>Enhance Your Music Experience</S.H1>
          <S.divDays>
            <S.divCircle>
              <S.Number>05</S.Number>
              <S.Text>Days</S.Text>
            </S.divCircle>
            <S.divCircle>
              <S.Number>23</S.Number>
              <S.Text>Hours</S.Text>
            </S.divCircle>
            <S.divCircle>
              <S.Number>59</S.Number>
              <S.Text>Minutes</S.Text>
            </S.divCircle>
            <S.divCircle>
              <S.Number>35</S.Number>
              <S.Text>Seconds</S.Text>
            </S.divCircle>
          </S.divDays>
          <S.Button>Buy Now</S.Button>
        </S.divContent>
        <Image src={JBL} alt="Foto de uma JBL" />
      </S.divBanner>
    </S.Container>
  )
}
