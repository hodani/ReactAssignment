import React from "react";
import styled from 'styled-components';

const Container = styled.div`
    padding-bottom: 10px;
    border-bottom: 1px solid black;
    > div {
        display: flex;
        flex-direction: column;
    }
    label {
        font-size: 12px;
        line-height: 18px;
    }
`;

export default (props) => (
    <Container>
        <div>
            <label htmlFor="gender">Gender:</label>
            <select
                value={props.filter.gender}
                onChange={e => props.setFilter({...props.filter, gender: e.target.value})}
                id="gender"
            >
                <option value="" default>---</option>
                <option value="female">Female</option>
                <option value="male">Male</option>
            </select>
        </div>
    </Container>
)