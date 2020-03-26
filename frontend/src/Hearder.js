import React from 'react';

//props atributos do JSX (title...), children (conteudo da div)

// export default function Hearder(props) {
export default function Hearder({ children }) {
    return (
        <header>
            {/* <h1>{props.children}</h1> */}
            {/* <h1>{props.title}</h1> */}
            <h1>{children}</h1>
        </header>
    );
}

//export default Hearder;