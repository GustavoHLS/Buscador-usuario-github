import React from "react";
import * as S from "./styled";

const NoSearch = () => {
    return(
    <S.Wrapper>
        <h1>NENHUM USUÁRIO PESQUISADO</h1>
        <h3>Procure pelo usuário na barra de pesquisa.</h3>
    </S.Wrapper>
    );
};

export default NoSearch;