'use client'

import { Card } from '../card/card'
import { HeaderSection } from '../header-section/header-section'

import * as S from './style'

export function Today() {
  return (
    <S.Container>
      <S.divToday>
        <HeaderSection />

        <S.divCards>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </S.divCards>

        <S.divAllProducts>
          <S.buttonAllProducts>View All Products</S.buttonAllProducts>
        </S.divAllProducts>
      </S.divToday>
    </S.Container>
  )
}
