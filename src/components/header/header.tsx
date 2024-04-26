'use client'

import Link from 'next/link'
import { Search, Heart, ShoppingCart } from 'lucide-react'

import * as S from './styles'

export function Header() {
  return (
    <S.ContainerHeader>
      <S.Header>
        <S.H1>Exclusive</S.H1>

        <nav>
          <S.Ul>
            <Link href="/SignUp" style={{ textDecoration: 'none' }}>
              <S.spanLi>Home</S.spanLi>
            </Link>
            <S.Li>Contact</S.Li>
            <S.Li>About</S.Li>
            <Link href="/SignUp" style={{ textDecoration: 'none' }}>
              <S.spanLi>Sign Up</S.spanLi>
            </Link>
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
