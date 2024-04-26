import styled from 'styled-components'

export const Container = styled.section`
  width: 100%;
  height: 62.5rem; //1000px

  display: flex;
  justify-content: start;
  align-items: center;
`

export const divSigUp = styled.div`
  max-width: 81.563rem; //1305px
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const divForm = styled.div`
  max-width: 23.188rem; //371px
  width: 100%;
  height: 33.125rem; //530px

  display: flex;
  flex-direction: column;
  gap: 3rem; //48px
`

export const divTitle = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 0.5rem; //8px
`

export const H1 = styled.h1`
  font-size: 2.25rem; //32px
  font-weight: 600;

  color: #000000;

  margin: 0;
`

export const Span = styled.span`
  font-size: 1rem; //16px
  font-weight: regular;

  color: #000000;
`

export const Form = styled.form`
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 2rem; //32px
`

export const divInputs = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 2rem; //32px
`

export const Input = styled.input`
  border: none;
  border-bottom: 1px solid #a0a0a0;

  outline: none;

  padding-bottom: 0.5rem; //8px

  &::placeholder {
    font-size: 1rem; //16px
    font-weight: regular;
    color: #a0a0a0;
  }
`

export const divButtons = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem; //32px
`

export const Button = styled.button`
  max-width: 8.938rem; //143px
  width: 100%;

  font-size: 1rem; //16px
  font-weight: 600;
  color: #fafafa;
  background-color: #db4444;

  border: none;
  border-radius: 0.313rem; //5px

  padding-bottom: 1rem; //16px
  padding-top: 1rem; //16px

  cursor: pointer;
`

export const spanPassword = styled.span`
  font-size: 1rem; //16px
  font-weight: regular;

  color: #db4444;
`