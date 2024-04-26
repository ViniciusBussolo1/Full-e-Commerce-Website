'use client'

import { ComponentProps } from 'react'

import { NameSection } from '../components-section/name-section/name-section'

import { Arrows } from '../components-section/arrows/arrow'

import * as S from './style'

interface HeaderSectionProps extends ComponentProps<'header'> {
  nameSection: string
  arrow?: true | false | undefined
}

export function HeaderSection({
  nameSection,
  children,
  arrow,
}: HeaderSectionProps) {
  return (
    <S.Header>
      <NameSection name={nameSection} />
      <S.div>
        <S.divTitle>{children}</S.divTitle>
        {arrow === true ? (
          <Arrows />
        ) : arrow === false ? (
          <S.Button>View All</S.Button>
        ) : (
          ''
        )}
      </S.div>
    </S.Header>
  )
}
