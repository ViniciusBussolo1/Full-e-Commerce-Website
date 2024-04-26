import { Category } from '@/components/category/category'
import { Header } from '@/components/header/header'
import { HeaderTop } from '@/components/header/header-top/header-top'

export default function Home() {
  return (
    <>
      <HeaderTop />
      <Header />
      <Category />
    </>
  )
}
