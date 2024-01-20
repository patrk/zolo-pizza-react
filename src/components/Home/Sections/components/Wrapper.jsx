import styled from "styled-components";

const Wrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: ${props => props.color || "transparent"};
    padding: 50px 0px;
    position: relative;
    overflow: hidden;
`
export default Wrapper