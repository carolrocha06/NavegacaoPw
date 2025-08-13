import { useState } from 'react';

function Contador() {
    const [contador, setContador] = useState(0);

    return (
        <div>
            <h2>Página sobre o Contador </h2>
            <p>Valor atual: {contador}</p>
            <button onClick={() => setContador(contador + 1)}> Aumentar valor </button>
            <button onClick={() => setContador(contador - 1)}> Diminuir valor </button>
        </div>
    );
}

export default Contador;