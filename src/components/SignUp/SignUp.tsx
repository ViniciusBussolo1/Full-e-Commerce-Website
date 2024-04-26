'use client'

import Image from 'next/image'
import SideImage from '../../assets/side-image.svg'
import IconGoogle from '../../assets/icon-google.svg'

import * as S from './style'
import Link from 'next/link'

export function SignUpComponent() {
  return (
    <S.Container>
      <S.divSigUp>
        <Image src={SideImage} alt="Side Image" />
        <S.divForm>
          <S.divTitle>
            <S.H1>Create an account</S.H1>
            <S.Span>Enter your details below</S.Span>
          </S.divTitle>

          <S.Form>
            <S.divInputs>
              <S.Input type="text" placeholder="Name" />
              <S.Input type="text" placeholder="Email or Phone Number" />
              <S.Input type="text" placeholder="Password" />
            </S.divInputs>
            <S.divButtons>
              <S.Button>Create Account</S.Button>
              <S.ButtonGoogle>
                <Image src={IconGoogle} alt="Icone do Google" />
                Sign up with Google
              </S.ButtonGoogle>
            </S.divButtons>

            <S.divLogIn>
              <S.spanLogIn>Already have account?</S.spanLogIn>
              <S.Div>
                <Link href="/LogIn" style={{ textDecoration: 'none' }}>
                  <S.spanLi>Log in</S.spanLi>
                </Link>
                <S.Line></S.Line>
              </S.Div>
            </S.divLogIn>
          </S.Form>
        </S.divForm>
      </S.divSigUp>
    </S.Container>
  )
}
