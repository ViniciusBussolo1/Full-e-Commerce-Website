import styled from 'styled-components'

export const Header = styled.div`
  max-width: 73.125; //1170px
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 1.5rem; //24px
`

export const div = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-between;
`

export const divTitle = styled.div`
  max-width: 37.5rem; //600px
  width: 100%;

  display: flex;
  align-items: end;
  gap: 7.125rem; //114px
`

export const Button = styled.button`
  max-width: 9.938rem; //159px
  width: 100%;

  background-color: #db4444;

  padding-top: 1rem; //16px
  padding-bottom: 1rem; //16px

  font-size: 1rem; //16px
  font-weight: 600;

  color: #fafafa;

  border: none;
  border-radius: 3%;
`
