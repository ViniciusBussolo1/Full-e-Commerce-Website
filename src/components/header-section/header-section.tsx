'use client'

import { ComponentProps } from 'react'

import { NameSection } from '../components-section/name-section/name-section'

import { Arrows } from '../components-section/arrows/arrow'

import * as S from './style'

interface HeaderSectionProps extends ComponentProps<'header'> {
  nameSection: string
}

export function HeaderSection({ nameSection, children }: HeaderSectionProps) {
  return (
    <S.Header>
      <NameSection name={nameSection} />
      <S.div>
        <S.divTitle>
          {children}
          {/* <Title title={title} />
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
          </S.Days> */}
        </S.divTitle>
        <Arrows />
      </S.div>
    </S.Header>
  )
}
