import * as S from './style'

interface TitleProps {
  title: string
}

export function Title({ title }: TitleProps) {
  return <S.H1>{title}</S.H1>
}
