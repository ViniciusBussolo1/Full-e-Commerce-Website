'use client'
import { ChevronDown } from 'lucide-react'

import * as S from './styles'

export function HeaderTop() {
  return (
    <S.Container>
      <S.Div>
        <S.divTitle>
          <S.Title>
            Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
          </S.Title>
          <S.Link href="/">ShopNow</S.Link>
        </S.divTitle>

        <S.divLenguage>
          <S.Span>English</S.Span> <ChevronDown color="white" size={20} />
        </S.divLenguage>
      </S.Div>
    </S.Container>
  )
}
