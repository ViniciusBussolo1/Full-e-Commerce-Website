import { Banner } from '@/components/banner/banner'
import { Categories } from '@/components/categories/categories'
import { Category } from '@/components/category/category'
import { Featured } from '@/components/featured/featured'
import { Footer } from '@/components/footer/footer'
import { Header } from '@/components/header/header'
import { HeaderTop } from '@/components/header/header-top/header-top'
import { Information } from '@/components/information/information'
import { Month } from '@/components/month/month'
import { Products } from '@/components/products/products'
import { Today } from '@/components/today/today'

export default function Home() {
  return (
    <>
      <HeaderTop />
      <Header />
      <Category />
      <Today />
      <Categories />
      <Month />
      <Banner />
      <Products />
      <Featured />
      <Information />
      <Footer />
    </>
  )
}
