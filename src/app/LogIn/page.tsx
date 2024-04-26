import { LogInComponent } from '@/components/LogIn/logIn'
import { Footer } from '@/components/footer/footer'
import { Header } from '@/components/header/header'
import { HeaderTop } from '@/components/header/header-top/header-top'

export default function LogIn() {
  return (
    <>
      <HeaderTop />
      <Header />
      <LogInComponent />
      <Footer />
    </>
  )
}
