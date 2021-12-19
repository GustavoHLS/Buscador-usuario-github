import React, { useState } from "react";
import * as S from "./styled";
import useGithub from "../hooks/githubHooks";

const Header = () => {
    const { getUser } = useGithub();
    const[userNameForSearch, setUserNameForSearch] = useState();
    
    const submitGetUser = () => {
        if ( !userNameForSearch ) return;
        return getUser(userNameForSearch);
    }


    return (
        <header>
            <S.wrapper>
            <input type="text" placeholder="Pesquise o usuário" onChange={(event) => setUserNameForSearch(event.target.value)}/>
            <button type="submit" onClick={submitGetUser}><span>Buscar</span></button>
            </S.wrapper>
        </header>
        );
};

export default Header;