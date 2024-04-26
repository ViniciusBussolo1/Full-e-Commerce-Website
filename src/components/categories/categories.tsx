'use client'

import Image from 'next/image'

import { Title } from '../components-section/title/title'
import { HeaderSection } from '../header-section/header-section'

import CellPhone from '../../assets/categories/cell-phone.svg'

import * as S from './style'

export function Categories() {
  return (
    <S.Container>
      <S.divCategories>
        <HeaderSection nameSection="Categories">
          <Title title="Browse By Category" />
        </HeaderSection>
        <S.divCards>
          <S.Card>
            <S.Div>
              <Image src={CellPhone} alt="Imagem de um telefone" />
              <S.Span>Phones</S.Span>
            </S.Div>
          </S.Card>
          <S.Card>
            <S.Div>
              <Image src={CellPhone} alt="Imagem de um telefone" />
              <S.Span>Phones</S.Span>
            </S.Div>
          </S.Card>
          <S.Card>
            <S.Div>
              <Image src={CellPhone} alt="Imagem de um telefone" />
              <S.Span>Phones</S.Span>
            </S.Div>
          </S.Card>
          <S.Card>
            <S.Div>
              <Image src={CellPhone} alt="Imagem de um telefone" />
              <S.Span>Phones</S.Span>
            </S.Div>
          </S.Card>
          <S.Card>
            <S.Div>
              <Image src={CellPhone} alt="Imagem de um telefone" />
              <S.Span>Phones</S.Span>
            </S.Div>
          </S.Card>
          <S.Card>
            <S.Div>
              <Image src={CellPhone} alt="Imagem de um telefone" />
              <S.Span>Phones</S.Span>
            </S.Div>
          </S.Card>
        </S.divCards>
      </S.divCategories>
    </S.Container>
  )
}
