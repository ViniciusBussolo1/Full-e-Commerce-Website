'use client'

import { Card } from '../card/card'
import { Title } from '../components-section/title/title'
import { HeaderSection } from '../header-section/header-section'

import * as S from './style'

export function Month() {
  return (
    <S.Container>
      <S.divMonth>
        <HeaderSection nameSection="This Month" arrow={false}>
          <Title title="Best Selling Products" />
        </HeaderSection>
        <S.divCards>
          <Card />
          <Card />
          <Card />
          <Card />
        </S.divCards>
      </S.divMonth>
    </S.Container>
  )
}
