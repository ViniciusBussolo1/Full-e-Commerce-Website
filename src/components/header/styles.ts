import styled from 'styled-components'

export const ContainerHeader = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;

  padding-top: 3rem; //48px
  padding-bottom: 0.5rem; //8px

  border-bottom: 1px solid #d9d9d9;
`

export const header = styled.header`
  max-width: 73.125rem; //1170px
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const h1 = styled.h1`
  font-size: 1.5rem; //24px
  font-weight: bold;
`

export const ul = styled.ul`
  display: flex;
  align-items: center;
  gap: 28px;
`

export const li = styled.li`
  list-style: none;
  font-size: 1rem; //16px
  font-weight: regular;
  color: #000000;
`

export const DivProfile = styled.div`
  max-width: 21.688rem; //347px
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const DivInput = styled.div`
  max-width: 15.188rem; //243px
  width: 100%;

  display: flex;
  aling-items: center;
`

export const Input = styled.input`
  padding: 8px;
  border: none;
  outline: none;

  &::placeholder {
    font-size: 12px;
    font-weight: regular;
  }
`

export const DivIcons = styled.div`
  display: flex;
  align-items: center;
  gap: 1.25rem; //20px
`
