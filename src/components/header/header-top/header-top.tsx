'use client'
import { ChevronDown } from 'lucide-react'

import * as S from './styles'

export function HeaderTop() {
  return (
    <S.Container>
      <S.Div>
        <S.DivTitle>
          <S.title>
            Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
          </S.title>
          <S.Link href="/">ShopNow</S.Link>
        </S.DivTitle>

        <S.DivLenguage>
          <S.Span>English</S.Span> <ChevronDown color="white" size={20} />
        </S.DivLenguage>
      </S.Div>
    </S.Container>
  )
}
