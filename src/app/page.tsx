import { Categories } from '@/components/categories/categories'
import { Category } from '@/components/category/category'
import { Header } from '@/components/header/header'
import { HeaderTop } from '@/components/header/header-top/header-top'
import { Today } from '@/components/today/today'

export default function Home() {
  return (
    <>
      <HeaderTop />
      <Header />
      <Category />
      <Today />
      <Categories />
    </>
  )
}
