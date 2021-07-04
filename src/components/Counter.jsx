import React from 'react'
import Button from './Button'

export default function Counter() {
    return (
        <section>
            <h2>Counter</h2>
            <div>
                <Button>-</Button>
                <span>0</span>
                <Button>+</Button>
            </div>
        </section>
    )
}
