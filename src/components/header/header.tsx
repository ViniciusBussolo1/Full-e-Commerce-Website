'use client'

import { Search, Heart, ShoppingCart } from 'lucide-react'

import * as S from './styles'

export function Header() {
  return (
    <S.ContainerHeader>
      <S.Header>
        <S.H1>Exclusive</S.H1>

        <nav>
          <S.Ul>
            <S.Li>Home</S.Li>
            <S.Li>Contact</S.Li>
            <S.Li>About</S.Li>
            <S.Li>Sign Up</S.Li>
          </S.Ul>
        </nav>

        <S.divProfile>
          <S.divInput>
            <S.Input type="text" placeholder="What are you looking for?" />
            <Search size={24} style={{ marginTop: 4 }} />
          </S.divInput>

          <S.divIcons>
            <Heart size={28} style={{ cursor: 'pointer' }} />
            <ShoppingCart size={28} style={{ cursor: 'pointer' }} />
          </S.divIcons>
        </S.divProfile>
      </S.Header>
    </S.ContainerHeader>
  )
}
