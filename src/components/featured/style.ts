import styled from 'styled-components'

export const Container = styled.section`
  width: 100%;
  height: 48rem; //768px

  display: flex;
  justify-content: center;

  margin-top: 6.25rem; //100px
`

export const divFeatured = styled.div`
  max-width: 73.125rem; //1170px
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 2rem; //32px
`

export const divGrid = styled.div`
  width: 100%;
  height: 37.5rem; //600px

  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const divLeft = styled.div`
  max-width: 35.625rem; //570px
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: end;

  background-color: #000000;

  border-radius: 0.313rem; //5px

  position: relative;
`

export const divDescription = styled.div`
  max-width: 15.125rem; //242px
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 0.5rem; //8px

  position: absolute;
  bottom: 34px;
  left: 30px;
`

export const H5 = styled.h5`
  font-size: 1.5rem; //24px
  font-weight: 600;

  color: #fafafa;

  margin: 0;
`

export const Span = styled.span`
  font-size: 0.875rem; //14px
  font-weight: regular;

  color: #fafafa;
`

export const Div = styled.div`
  max-width: 5.063rem; //81px
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.125rem; //2px

  color: #fafafa;

  font-size: 1rem; //16px
  font-weight: 500;

  cursor: pointer;
`

export const Line = styled.div`
  width: 100%;
  height: 0.063rem; //1px
  background-color: #fafafa;
`

export const divRight = styled.div`
  max-width: 35.625rem; //570px
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const divTop = styled.div`
  width: 100%;
  height: 17.75rem; //284px

  display: flex;
  justify-content: end;

  background-color: #0d0d0d;

  border-radius: 0.313rem; //5px

  position: relative;
`

export const divDescriptionTop = styled.div`
  max-width: 16.25rem; //260px
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 0.5rem; //8px

  position: absolute;
  bottom: 34px;
  left: 30px;
`

export const divBottom = styled.div`
  width: 100%;
  height: 17.75rem; //284px

  display: flex;
  justify-content: space-between;

  border-radius: 0.313rem; //5px
`

export const divBottomLeft = styled.div`
  max-width: 16.875rem; //270px
  width: 100%;

  background-color: #000000;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 0.313rem; //5px

  position: relative;
`

export const divDescriptionBottomLeft = styled.div`
  max-width: 16.25rem; //260px
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 0.5rem; //8px

  position: absolute;
  bottom: 34px;
  left: 30px;
`

export const divBottomRight = styled.div`
  max-width: 16.875rem; //270px
  width: 100%;

  background-color: #000000;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 0.313rem; //5px

  position: relative;
`

export const divDescriptionBottomRight = styled.div`
  max-width: 16.25rem; //260px
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 0.5rem; //8px

  position: absolute;
  bottom: 34px;
  left: 30px;
`
