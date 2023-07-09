import { useState } from 'react'
import './Styles/Pagination.css'

const Pagination = ({page, setPage, maxim}) => {
    const [input, setInput] = useState(1);
    const nextPage = () => {
        setInput(input+1);
        setPage(page+1)
    }
    const previusPage = () =>{
        setInput(input-1);
        setPage(page-1)
    };

    const onKeyDown = (e) =>{
        if(e.keyCode == 13){
            setPage(parseInt(e.target.value))
        if(
            parseInt(e.target.value < 1) || 
            parseInt(e.target.value) > Math.ceil(maxim) ||
            isNaN(parseInt(e.target.value))
        ){
            setPage(1)
            setInput(1)
        }else{
            setPage(parseInt(e.target.value))
        }
    }
};
const onChange = (e) =>{
    setInput(e.target.value)
}

return (
    <div>
        <button disabled={page <= 1 } onClick={previusPage}>Inicio</button>
        <input onChange={e=>onChange(e)} onKeyDown={e=> onKeyDown(e)} name='page'  value={input} />
        <p>de {maxim}</p><p/>
        <button onClick={nextPage}>Final</button>
    </div>
)
}

export default Pagination