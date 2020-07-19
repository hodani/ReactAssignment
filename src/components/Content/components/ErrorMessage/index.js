import React from "react";
import styled from 'styled-components';

const Container = styled.div`
    text-align: center;
    color: #b50000;
`;

export default (props) => {
    console.log(props);
    return (
        <Container>
            Error: {props.error.message}
        </Container>
    )
}