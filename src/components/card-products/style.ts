import styled from 'styled-components'

export const Card = styled.div`
  max-width: 16.875rem; //270px
  height: 21.875rem; //350px
`

export const divImage = styled.div`
  width: 100%;
  height: 15.625rem; //250px

  display: flex;
  justify-content: center;
  align-items: center;

  position: relative;
`

export const divNew = styled.div`
  max-width: 3.438rem; //55px
  width: 100%;

  border-radius: 0.313rem; //5px

  padding-top: 0.25rem; //4px
  padding-bottom: 0.25rem; //4px

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: #00ff66;

  position: absolute;
  top: 15px;
  left: 10px;
`

export const spanNew = styled.span`
  font-size: 0.75rem; //12px
  font-weight: regular;

  color: #fafafa;
`

export const Icons = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  position: absolute;
  right: 10px;
  top: 15px;
`

export const divDescription = styled.div`
  max-width: 13.125rem; //210px
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 0.5rem; //8px
`

export const H5 = styled.h5`
  font-size: 1rem; //16px
  font-weight: 600;
  margin: 0;

  color: #000000;
`

export const divPrice = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem; //12px
`

export const priceDiscount = styled.span`
  font-size: 1rem; //16px
  font-weight: 600;

  color: #db4444;
`

export const priceOriginal = styled.span`
  font-size: 1rem; //16px
  font-weight: 600;

  text-decoration: line-through;

  color: #6185a5;
`

export const divStars = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem; //12px
`

export const Stars = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem; //4px
`

export const countStars = styled.span`
  font-size: 0.875rem; //14px
  font-weight: 600;

  color: #6185a5;
`
export const divColors = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem; //8px
`

export const buttonColor = styled.button`
  width: 1.25rem; //20px
  height: 1.25rem; //20px

  border-radius: 50%;
  border: none;

  background-color: #db4444;

  cursor: pointer;
`

export const buttonSelected = styled.div`
  width: 1.25rem; //20px
  height: 1.25rem; //20px

  border-radius: 50%;
  border: none;

  display: flex;
  justify-content: center;
  align-items: center;

  border: 2px solid #000000;

  cursor: pointer;
`

export const divButtonSelected = styled.div`
  width: 0.75rem; //12px
  height: 0.75rem; //12px

  border-radius: 50%;

  background-color: #fb1314;

  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;
`
