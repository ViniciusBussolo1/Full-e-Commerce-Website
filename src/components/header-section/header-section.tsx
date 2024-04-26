'use client'

import { ArrowLeft, ArrowRight } from 'lucide-react'

import * as S from './style'

export function HeaderSection() {
  return (
    <S.Header>
      <S.nameSection>
        <S.divRectangle></S.divRectangle>
        <S.spanName>Today’s</S.spanName>
      </S.nameSection>
      <S.div>
        <S.divTitle>
          <S.H1>Flash Sales</S.H1>
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
        </S.divTitle>
        <S.divArrows>
          <ArrowLeft />
          <ArrowRight />
        </S.divArrows>
      </S.div>
    </S.Header>
  )
}
