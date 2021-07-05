import React from 'react'
import Button from './Button'
import styles from './Cat.module.css'
import { useSelector, useDispatch } from 'react-redux'
import { catSelector } from '../slices/cat'
import { getCatSaga } from '../slices/cat'

export default function Cat() {
    const dispatch = useDispatch()
    const cat = useSelector(catSelector)

    return (
        <section>
            <Button onClick={() => dispatch(getCatSaga())}>Cat</Button>
            <div>
                <img className={styles.cat} src={cat} alt="" />
            </div>
        </section>
    )
}
