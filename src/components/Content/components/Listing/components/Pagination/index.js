import React from "react";
import styled from 'styled-components';

const Container = styled.div`
   margin: 20px 0 10px;
   text-align: center;
   font-size: 14px;
`;

export default (props) => (
    <Container>
        Page <select
            value={props.page}
            onChange={e => props.setPage(e.target.value)}
        >
            {
                    [...Array(props.pages)].map((p, i) => (
                        <option value={i+1}>{i+1}</option>
                ))
            }
        </select> of {props.pages}
    </Container>
)