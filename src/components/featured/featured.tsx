'use client'

import { Title } from '../components-section/title/title'
import { HeaderSection } from '../header-section/header-section'

import PS5 from '../../assets/featured/ps5.svg'
import Woman from '../../assets/featured/woman.svg'
import Perfume from '../../assets/featured/perfume.svg'
import Speakers from '../../assets/featured/speakers.svg'

import * as S from './style'
import Image from 'next/image'

export function Featured() {
  return (
    <S.Container>
      <S.divFeatured>
        <HeaderSection nameSection="Featured">
          <Title title="New Arrival" />
        </HeaderSection>
        <S.divGrid>
          <S.divLeft>
            <Image src={PS5} alt="Imagem de um ps5" />
            <S.divDescription>
              <S.H5>PlayStation 5</S.H5>
              <S.Span>
                Black and White version of the PS5 coming out on sale.
              </S.Span>
              <S.Div>
                Shop Now
                <S.Line></S.Line>
              </S.Div>
            </S.divDescription>
          </S.divLeft>
          <S.divRight>
            <S.divTop>
              <Image src={Woman} alt="Imagem de uma mulher" />
              <S.divDescriptionTop>
                <S.H5>Women’s Collections</S.H5>
                <S.Span>
                  Featured woman collections that give you another vibe.{' '}
                </S.Span>
                <S.Div>
                  Shop Now
                  <S.Line></S.Line>
                </S.Div>
              </S.divDescriptionTop>
            </S.divTop>
            <S.divBottom>
              <S.divBottomLeft>
                <Image src={Speakers} alt="Imagem de uma caixas de som" />
                <S.divDescriptionBottomLeft>
                  <S.H5>Speakers</S.H5>
                  <S.Span>Amazon wireless speakers</S.Span>
                  <S.Div>
                    Shop Now
                    <S.Line></S.Line>
                  </S.Div>
                </S.divDescriptionBottomLeft>
              </S.divBottomLeft>
              <S.divBottomRight>
                <Image src={Perfume} alt="Imagem de um perfume" />
                <S.divDescriptionBottomRight>
                  <S.H5>Perfume</S.H5>
                  <S.Span>GUCCI INTENSE OUD EDP </S.Span>
                  <S.Div>
                    Shop Now
                    <S.Line></S.Line>
                  </S.Div>
                </S.divDescriptionBottomRight>
              </S.divBottomRight>
            </S.divBottom>
          </S.divRight>
        </S.divGrid>
      </S.divFeatured>
    </S.Container>
  )
}
