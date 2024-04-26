import styled from 'styled-components'

export const Container = styled.section`
  width: 100%;

  display: flex;
  justify-content: center;

  margin-top: 6.25rem; //100px
`

export const divProducts = styled.div`
  max-width: 73.125rem; //1170px
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 3rem; //48px
`

export const divCards = styled.div`
  height: 45.75rem; //732px
  width: 100%;

  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 1.5rem; //24px
`

export const divAllProducts = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;
`

export const buttonAllProducts = styled.button`
  max-width: 14.625rem; //234px
  width: 100%;

  margin-top: 1.5rem; //24px

  padding-top: 1.25rem; //20px
  padding-bottom: 1.25rem; //20px

  background-color: #db4444;

  font-size: 1rem; //16px
  font-weight: 600;

  color: #fafafa;

  border: none;
  border-radius: 0.313rem; //5px
`
