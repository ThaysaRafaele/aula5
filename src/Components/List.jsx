import { useState, useMemo, useEffect } from "react";

const List = ({item}) => {

    const [list, setList] = useState([]);

    const memoizar = useMemo(() => {
        return list;
    }, [list]);

    useEffect(() => {
        setList(list);
    }, [item])

    useEffect(() => {
        console.log('mudou')
    }, [item])

    // const adicionar = () => {
    //     setItems(prevItems => [...prevItems, ]);
    // };

    return (
        <div>
            {/* <button onClick={adicionar}>Adicionar</button> */}
            <ul>
                {memoizar.map((x, index) => (
                    console.log('oi'),
                    <li key={index}>{x}</li>
                ))}
                {/* <li>{list}</li> */}
            </ul>
            
            {/* <Button adicionar={adicionar}/> */}
        </div>
    );

}

export default List;