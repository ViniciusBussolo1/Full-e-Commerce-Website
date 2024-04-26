'use client'

import { CardProducts } from '../card-products/card-products'
import { Title } from '../components-section/title/title'
import { HeaderSection } from '../header-section/header-section'
import * as S from './style'

export function Products() {
  return (
    <S.Container>
      <S.divProducts>
        <HeaderSection nameSection="Our Products" arrow={true}>
          <Title title="Explore Our Products" />
        </HeaderSection>
        <S.divCards>
          <CardProducts />
          <CardProducts />
          <CardProducts />
          <CardProducts />
          <CardProducts newProduct={true} colors={true} />
          <CardProducts newProduct={true} colors={true} />
          <CardProducts newProduct={true} colors={true} />
          <CardProducts newProduct={true} colors={true} />
        </S.divCards>
        <S.divAllProducts>
          <S.buttonAllProducts>View All Products</S.buttonAllProducts>
        </S.divAllProducts>
      </S.divProducts>
    </S.Container>
  )
}
