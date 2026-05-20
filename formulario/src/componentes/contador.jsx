function contador() { 
    const [contador, setContador] = useState(0);

    return (
        <div>
            <button onClick={() => setCount (count+1)}>
                Contar
            </button>
            <p>contando... : {count}</p>
        </div>
    );
}
export default contador;