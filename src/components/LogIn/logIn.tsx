'use client'

import * as S from './style'

import SideImage from '../../assets/side-image.svg'

import Image from 'next/image'

export function LogInComponent() {
  return (
    <S.Container>
      <S.divSigUp>
        <Image src={SideImage} alt="Side Image" />
        <S.divForm>
          <S.divTitle>
            <S.H1>Log in to Exclusive</S.H1>
            <S.Span>Enter your details below</S.Span>
          </S.divTitle>

          <S.Form>
            <S.divInputs>
              <S.Input type="text" placeholder="Email or Phone Number" />
              <S.Input type="text" placeholder="Password" />
            </S.divInputs>
            <S.divButtons>
              <S.Button>Log In</S.Button>
              <S.spanPassword>Forget Password?</S.spanPassword>
            </S.divButtons>
          </S.Form>
        </S.divForm>
      </S.divSigUp>
    </S.Container>
  )
}
