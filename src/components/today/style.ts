import styled from 'styled-components'

export const Container = styled.section`
  width: 100%;
  height: 41.813rem; //669px

  display: flex;
  justify-content: center;
`

export const divToday = styled.div`
  max-width: 73.125rem; //1170px
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 2rem; //32px

  border-bottom: 1px solid #d9d9d9;
`

export const divCards = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem; //32px
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
  border-radius: 2%;
`

export const Days = styled.div`
  max-width: 18.875rem; //302px
  widht: 100%;

  display: flex;
  align-items: center;
  gap: 0.75rem; //12px
`

export const Day = styled.div`
  display: flex;
  flex-direction: column;
`

export const Text = styled.span`
  font-size: 0.75rem; //12px
  font-weight: 600;
  color: #000000;
`

export const Number = styled.span`
  font-size: 2rem; //32px
  font-weight: bold;
  color: #000000;
`

export const Points = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem; //8px
`

export const Point = styled.div`
  width: 0.25rem; //4px
  height: 0.25rem; //4px

  border-radius: 50%;

  background-color: #e07575;
`
