'use client'

import { Search, Heart, ShoppingCart } from 'lucide-react'

import * as S from './styles'

export function Header() {
  return (
    <S.ContainerHeader>
      <S.header>
        <S.h1>Exclusive</S.h1>

        <nav>
          <S.ul>
            <S.li>Home</S.li>
            <S.li>Contact</S.li>
            <S.li>About</S.li>
            <S.li>Sign Up</S.li>
          </S.ul>
        </nav>

        <S.DivProfile>
          <S.DivInput>
            <S.Input type="text" placeholder="What are you looking for?" />
            <Search size={24} style={{ marginTop: 4 }} />
          </S.DivInput>

          <S.DivIcons>
            <Heart size={28} style={{ cursor: 'pointer' }} />
            <ShoppingCart size={28} style={{ cursor: 'pointer' }} />
          </S.DivIcons>
        </S.DivProfile>
      </S.header>
    </S.ContainerHeader>
  )
}
