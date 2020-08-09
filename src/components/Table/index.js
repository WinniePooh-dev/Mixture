import React, { useState, Fragment } from 'react';

import styles from "./styles.module.css";

export const Table = artworks => {

    const [selected, setSelected] = useState(null);

    if (!!Object.keys(artworks).length) {
        return <Fragment>
            <table className={styles}>
                <thead>
                    <tr>
                        {headers.map((head, key) => {
                            return <th key={key}>{head}</th>
                        })}
                    </tr>
                </thead>
                <tbody>
                    {Object.values(artworks).map(({_id, title}) => {
                        return (
                            <tr key={_id} className={selected === _id ? styles['active'] : ''} onClick={() => setSelected(_id)}>
                                <td>{title}</td>
                                <td>
                                    <img src={`/imgs/artworks/${_id}.jpg`} alt=''/>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
            <Picture id={selected}/>
        </Fragment>
    }
    
    return null
}

const headers = ['Artworks', 'Picture'];

const Picture = ({id}) => {
    return <img className={styles['picture']} src={`/imgs/artworks/${id}.jpg`} alt=''/>
}