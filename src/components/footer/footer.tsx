'use client'

import Image from 'next/image'
import Copy from '../../assets/footer/icon-copyright.svg'
import Google from '../../assets/footer/google.svg'
import Apple from '../../assets/footer/appstore.svg'
import QrCode from '../../assets/footer/qrcode.svg'

import Facebook from '../../assets/footer/icon-facebook.svg'
import Instagram from '../../assets/footer/icon-instagram.svg'
import Linkedin from '../../assets/footer/icon-linkedin.svg'
import Twitter from '../../assets/footer/icon-twitter.svg'

import { SendHorizonal } from 'lucide-react'

import * as S from './style'

export function Footer() {
  return (
    <S.Container>
      <S.divFooter>
        <S.Div>
          <S.divExclusive>
            <S.spanTitleExclusive>Exclusive</S.spanTitleExclusive>
            <S.spanSubTitleExclusive>Subscribe</S.spanSubTitleExclusive>
            <S.SpanExclusive>Get 10% off your first order</S.SpanExclusive>
            <S.divInput>
              <S.Input type="text" placeholder="Enter your email" />
              <SendHorizonal color={'white'} />
            </S.divInput>
          </S.divExclusive>

          <S.divSupport>
            <S.spanTitle>Support</S.spanTitle>

            <S.divSpans>
              <S.Span>111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.</S.Span>
              <S.Span>exclusive@gmail.com</S.Span>
              <S.Span>+88015-88888-9999</S.Span>
            </S.divSpans>
          </S.divSupport>

          <S.divAccount>
            <S.spanTitle>Account</S.spanTitle>

            <S.divSpans>
              <S.Span>My Account</S.Span>
              <S.Span>Login / Register</S.Span>
              <S.Span>Cart</S.Span>
              <S.Span>Wishlist</S.Span>
              <S.Span>Shop</S.Span>
            </S.divSpans>
          </S.divAccount>

          <S.divQuick>
            <S.spanTitle>Quick Link</S.spanTitle>

            <S.divSpans>
              <S.Span>Privacy Policy</S.Span>
              <S.Span>Terms Of Use</S.Span>
              <S.Span>FAQ</S.Span>
              <S.Span>Contact</S.Span>
            </S.divSpans>
          </S.divQuick>

          <S.divDownload>
            <S.spanTitle>Download App</S.spanTitle>
            <S.spanDownload>Save $3 with App New User Only</S.spanDownload>
            <S.divImagesDownload>
              <Image src={QrCode} alt="QrCode" />
              <S.divStores>
                <Image src={Google} alt="Google Store" />
                <Image src={Apple} alt="Apple Store" />
              </S.divStores>
            </S.divImagesDownload>
            <S.divIcons>
              <Image src={Facebook} alt="Icone do Facebok" />
              <Image src={Twitter} alt="Icone do Twitter" />
              <Image src={Instagram} alt="Icone do Instagram" />
              <Image src={Linkedin} alt="Icone do Linkedin" />
            </S.divIcons>
          </S.divDownload>
        </S.Div>
      </S.divFooter>
      <S.Copy>
        <S.divCopy>
          <Image src={Copy} alt="Icone de Copyright" />
          <S.spanCopy>Copyright Rimel 2022. All right reserved</S.spanCopy>
        </S.divCopy>
      </S.Copy>
    </S.Container>
  )
}
