import styled from "styled-components";

export const wrapper = styled.div`
    display: flex;
    width: 90%;
    justify-content: center;
    padding: 4px;

    input {
        border: 1px solid #ccc;
        padding: 0px;
        margin: 0px;
        height: 40px;
        width: 75%;
        margin-left: 120px;
        margin-right:0.5px;
    }

    button {
        border: 1px solid #ccc;
        background-color: #f8f8f8;
        border-radius: 0 2px 2px 0;
        cursor: pointer;
        height: 40px;
        width: 64px;
        margin: 0;
        text-align: center;
        margin-left: 0.5px;

        &:hover {
            background-color: #CFCFCD;
        }
    }
`;