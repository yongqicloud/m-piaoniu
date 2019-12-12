import styled from 'styled-components'

export const OverlayWrap = styled.div`
  width:100%;
  height:100%;
  position:fixed;
  left: 0;
  top: 0;
  z-index:1;
  background:rgba(0,0,0,.35);
  display:${props => props.display || 'none'};
`