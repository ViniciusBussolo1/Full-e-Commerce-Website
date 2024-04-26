import styled from 'styled-components'

export const divAdd = styled.div`
  max-width: 16.875rem; //270px
  width: 100%;

  position: absolute;
  bottom: 0;

  padding-top: 8px;
  padding-bottom: 8px;

  border-radius: 0 0 5px 5px;

  text-align: center;

  background-color: #000000;
  color: #ffffff;
`

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

export const divDiscount = styled.div`
  max-width: 3.438rem; //55px
  width: 100%;

  border-radius: 0.313rem; //5px

  padding-top: 0.25rem; //4px
  padding-bottom: 0.25rem; //4px

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: #db4444;

  position: absolute;
  top: 15px;
  left: 10px;
`

export const spanDiscount = styled.span`
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
