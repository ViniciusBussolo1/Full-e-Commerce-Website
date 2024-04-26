import styled from 'styled-components'

export const Container = styled.section`
  width: 100%;

  height: 28.125rem; //450px

  display: flex;
  justify-content: center;

  margin-top: 6.25rem; //100px
`
export const divCategories = styled.div`
  max-width: 73.125rem; //1170px
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 3rem; //48px

  border-bottom: 1px solid #d9d9d9;
`

export const divCards = styled.div`
  width: 100%;
  height: 9.063rem; //145px

  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1.5rem; //24px
`

export const Card = styled.div`
  width: 10.625rem; //170px
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  border: 1px solid #d9d9d9;
  border-radius: 4%;

  cursor: pointer;

  &:hover {
    background-color: #db4444;
    color: #ffff;
  }
`

export const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
`

export const Span = styled.span`
  font-size: 1rem; //16px
  font-weight: regular;
`
