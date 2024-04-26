'use client'

import { Card } from '../card/card'
import { Title } from '../components-section/title/title'
import { HeaderSection } from '../header-section/header-section'

import * as S from './style'

export function Today() {
  return (
    <S.Container>
      <S.divToday>
        <HeaderSection nameSection="Today’s" arrow={true}>
          <Title title="Flash Sales" />
          <S.Days>
            <S.Day>
              <S.Text>Days</S.Text>
              <S.Number>03</S.Number>
            </S.Day>
            <S.Points>
              <S.Point></S.Point>
              <S.Point></S.Point>
            </S.Points>
            <S.Day>
              <S.Text>Hours</S.Text>
              <S.Number>23</S.Number>
            </S.Day>
            <S.Points>
              <S.Point></S.Point>
              <S.Point></S.Point>
            </S.Points>
            <S.Day>
              <S.Text>Minutes</S.Text>
              <S.Number>19</S.Number>
            </S.Day>
            <S.Points>
              <S.Point></S.Point>
              <S.Point></S.Point>
            </S.Points>
            <S.Day>
              <S.Text>Seconds</S.Text>
              <S.Number>56</S.Number>
            </S.Day>
          </S.Days>
        </HeaderSection>

        <S.divCards>
          <Card discount={true} numberDiscount="40" />
          <Card discount={true} numberDiscount="40" addCard={true} />
          <Card discount={true} numberDiscount="40" />
          <Card discount={true} numberDiscount="40" addCard={true} />
          <Card discount={true} numberDiscount="40" />
        </S.divCards>

        <S.divAllProducts>
          <S.buttonAllProducts>View All Products</S.buttonAllProducts>
        </S.divAllProducts>
      </S.divToday>
    </S.Container>
  )
}
