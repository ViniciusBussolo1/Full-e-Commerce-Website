import { SignUpComponent } from '@/components/SignUp/SignUp'
import { Footer } from '@/components/footer/footer'
import { Header } from '@/components/header/header'
import { HeaderTop } from '@/components/header/header-top/header-top'

export default function SignUp() {
  return (
    <>
      <HeaderTop />
      <Header />
      <SignUpComponent />
      <Footer />
    </>
  )
}
