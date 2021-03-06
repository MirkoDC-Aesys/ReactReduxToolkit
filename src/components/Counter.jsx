import React from 'react'
import styles from './Counter.module.css'
import Button from './Button'
import { useSelector, useDispatch } from 'react-redux'
import { counterSelector } from '../slices/counter'
import { incremented, decremented } from '../slices/counter'

export default function Counter() {
    const dispatch = useDispatch()
    const count = useSelector(counterSelector)

    return (
        <section>
            <h2 className={styles.title}>Counter</h2>
            <div>
                <Button onClick={() => dispatch(decremented())}>-</Button>
                <span className={styles.count}>{count}</span>
                <Button onClick={() => dispatch(incremented())}>+</Button>
            </div>
        </section>
    )
}
