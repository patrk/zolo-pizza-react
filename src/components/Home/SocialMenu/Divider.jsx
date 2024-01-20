import styled from 'styled-components'


const Divider = styled.div`
    width: 4px;
    height: ${props => props.height || "40px"};
    display: block;
    background-color: ${props => props.theme.textPrimary || "unset"};
    border-radius: 15px 0px 0px 15px;
    margin: 5px 0px;
`
export default Divider