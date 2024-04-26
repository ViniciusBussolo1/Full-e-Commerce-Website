import styled from 'styled-components'

export const Container = styled.section`
  width: 100%;

  display: flex;
  justify-content: center;
`
export const divBanner = styled.div`
  max-width: 73.125rem; //1170px
  width: 100%;
  height: 31.25rem; //500px

  background-color: #000000;

  display: flex;
  justify-content: center;
  align-items: center;
`

export const divContent = styled.div`
  max-width: 27.688rem; //443px
  width: 100%;

  height: 23.75rem; //380px

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const Span = styled.span`
  font-size: 1rem; //16px
  font-weight: 600;

  color: #00ff66;
`

export const H1 = styled.h1`
  font-size: 3rem; //48px
  font-weight: 600;

  color: #fafafa;

  margin: 0;
`
export const divDays = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`

export const divCircle = styled.div`
  width: 3.875rem; //62px
  height: 3.875rem; //62px

  background-color: #ffffff;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  border-radius: 50%;
`

export const Number = styled.span`
  font-size: 1rem; //16px
  font-weight: 600;

  color: #000000;
`

export const Text = styled.span`
  font-size: 0.688rem; //11px
  font-weight: regular;

  color: #000000;
`

export const Button = styled.button`
  max-width: 10.688rem; //171px
  width: 100%;

  font-size: 1rem; //16px
  font-weight: 600;

  background-color: #00ff66;
  color: #fafafa;

  padding-top: 1rem; //16px
  padding-bottom: 1rem; //16px

  border: none;
  border-radius: 0.313rem; //5px

  cursor: pointer;
`
