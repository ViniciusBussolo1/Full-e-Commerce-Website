import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 40.625rem; //650px

  display: flex;
  justify-content: center;
`

export const divCategory = styled.div`
  max-width: 73.125rem; //1170px
  width: 100%;

  display: flex;
  justify-content: space-between;
`

export const Categorys = styled.div`
  max-width: 13.563rem; //217px
  width: 100%;
  height: 21.5rem; //344px

  margin-top: 1.875rem; //30px
`

export const Ul = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 16px;
`

export const Li = styled.li`
  list-style: none;
  font-size: 1rem; //16px
  font-weight: regular;

  color: #000000;
`

export const liIcon = styled.li`
  list-style: none;
  font-size: 1rem; //16px
  font-weight: regular;

  color: #000000;

  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const divLine = styled.div`
  height: 384px;
  width: 1px;
  background-color: #d9d9d9;
`

export const Carousel = styled.div`
  max-width: 55.75rem; //892px
  width: 100%;
  height: 21.5rem; //344px

  position: relative;

  display: flex;
  align-items: center;
  gap: 3rem; //48px

  margin-top: 3rem; //48px

  background-color: #000000;
`

export const Content = styled.div`
  max-width: 18.375rem; //294px

  margin-left: 3.75rem; //60px

  display: flex;
  flex-direction: column;
  gap: 0.75rem; //12px
`

export const divTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`

export const Title = styled.h1`
  font-size: 1rem; //16px
  font-weight: regular;
  color: #fafafa;
`

export const Span = styled.span`
  font-size: 3rem; //48px
  font-weight: semi-bold;

  color: #fafafa;
`

export const Link = styled.a`
  display: flex;
  align-items: center;
  gap: 0.5rem; //8px

  font-size: 1rem; //16px
  font-weight: regular;

  text-decoration: none;

  color: #fafafa;
`

export const Div = styled.div`
  max-width: 5.063rem; //81px
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.25rem; //4px
`

export const Line = styled.div`
  width: 100%;
  height: 0.063rem; //1px
  background-color: #fafafa;
`

export const containerImage = styled.div`
  margin-top: 1.375rem; //22px
`

export const divButtons = styled.div`
  max-width: 6.875rem; //110px
  width: 100%;

  position: absolute;
  bottom: 0.75rem; //12px
  right: 27.875rem; //446px

  display: flex;
  align-items: center;
  gap: 12px;
`

export const Button = styled.button`
  width: 0.75rem; //12px
  height: 0.75rem; //12px

  background-color: #808080;

  border-radius: 50%;
  border: none;
`

export const buttonSelected = styled.button`
  width: 0.875rem; //14px
  height: 0.875rem; //14px

  background-color: #ffff;

  border-radius: 50%;
  border: none;

  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;
`

export const divButtonSelected = styled.button`
  width: 0.625rem; //10px
  height: 0.625rem; //10px

  background-color: #db4444;

  border-radius: 50%;
  border: none;

  cursor: pointer;
`
