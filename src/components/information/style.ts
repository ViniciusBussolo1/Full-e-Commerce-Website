import styled from 'styled-components'

export const Container = styled.section`
  width: 100%;
  height: 15.625rem; //250px

  display: flex;
  justify-content: center;

  margin-top: 6.25rem; //100px
`

export const divInformation = styled.div`
  max-width: 58.938rem; //943px
  width: 100%;
  height: 10.063rem; //161px

  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const Div = styled.div`
  max-width: 16.25rem; //260px
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.5rem; //24px
`

export const divDescription = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.25rem; //4px
`

export const H5 = styled.h5`
  font-size: 1.25rem; //20px
  font-weight: 600;

  margin: 0;
`

export const Span = styled.span`
  font-size: 0.875rem; //14px
  font-weight: regular;
`
