import React from "react";
import styled from 'styled-components';

export default styled.div`
    margin: 10px 0;
    display: flex;
    align-items: center;
    background-color: ${({gender}) => ({male: '#f0f7ff', female: '#fff1f3'}[gender])};
    > div {
        padding: 10px;
    }
`;