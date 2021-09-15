import React from 'react';
import { useGlobalContext } from "../util/context";

const PageButtons = () => {
    const {changePage, page, nbPages, loading} = useGlobalContext();
    return (
        <div className="btn-container">
            {loading ? <button  disabled onClick={() => changePage(page - 1)}>prev</button> : <button onClick={() => changePage(page - 1)}>prev</button>}
            <p>{page + 1} of {nbPages}</p>
            {loading ? <button disabled onClick={() => changePage(page + 1)}>next</button> : <button onClick={() => changePage(page + 1)}>next</button>}
        </div>
    )
}

export default PageButtons;
