import styled from 'styled-components'

export const Header = styled.div`
  max-width: 73.125; //1170px
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 1.5rem; //24px
`

export const divRectangle = styled.div`
  width: 1.25rem; //20px
  height: 2.5rem; //40px

  background-color: #db4444;

  border-radius: 14%;
`

export const nameSection = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem; //24px
`

export const spanName = styled.span`
  font-size: 1rem; //16px
  font-weight: bold;
  color: #db4444;
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

export const H1 = styled.h1`
  font-size: 2.25rem; //36px
  font-weight: bold;

  margin: 0;
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

export const divArrows = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem; //24px
`
