import React from 'react';
import * as S from "./styled";

const RepositoryItem = ({ name, fullname, link }) => {
    return(
        <S.Wrapperitems>
            <h2>{name}</h2>
            <h4>{fullname}</h4>
            <a href={link} 
                target="_blank" 
                rel='noreferrer'
                >
                {fullname}
                  </a>
        </S.Wrapperitems>
    );
};

export default RepositoryItem;