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
        <S.divTitle>{children}</S.divTitle>
        <Arrows />
      </S.div>
    </S.Header>
  )
}
