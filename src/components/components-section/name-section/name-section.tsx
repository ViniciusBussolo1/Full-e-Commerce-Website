import * as S from './style'

interface NameSection {
  name: string
}

export function NameSection({ name }: NameSection) {
  return (
    <S.nameSection>
      <S.divRectangle></S.divRectangle>
      <S.spanName>{name}</S.spanName>
    </S.nameSection>
  )
}
