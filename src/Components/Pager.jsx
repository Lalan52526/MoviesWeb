import React from 'react'
import './Pager.css'

 const Pager = ({page, setpage}) => {
    return (
        <div className="Pagination">
            <a onClick={() =>setpage(--page)}>&laquo;</a>
            <a className={`${page===1 ? 'active':''}`} onClick={() => setpage(1)}>1</a>
            <a className={`${page===2 ? 'active':''}`} onClick={() => setpage(2)}>2</a>
            <a className={`${page===3 ? 'active':''}`} onClick={() => setpage(3)}>3</a>
            <a className={`${page===4 ? 'active':''}`} onClick={() => setpage(4)}>4</a>
            <a className={`${page===5 ? 'active':''}`} onClick={() => setpage(5)}>5</a>
            <a className={`${page===6 ? 'active':''}`} onClick={() => setpage(6)}>6</a>
            <a className={`${page===7 ? 'active':''}`} onClick={() => setpage(7)}>7</a>
            <a className={`${page===8 ? 'active':''}`} onClick={() => setpage(8)}>8</a>
            <a className={`${page===9 ? 'active':''}`} onClick={() => setpage(9)}>9</a>
            <a className={`${page===10 ? 'active':''}`} onClick={() => setpage(10)}>10</a>
            < a onClick={()=> setpage(++page)}>&raquo;</a>
        </div>
    )
}

export default Pager
