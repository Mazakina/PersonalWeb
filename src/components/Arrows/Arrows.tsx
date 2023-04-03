import * as S from './styles'


export function Arrow({arrowDirection}:S.IArrowProps){
  return (
    <S.Container >
      <S.Icon arrowDirection={arrowDirection} />
    </S.Container>
  )
}