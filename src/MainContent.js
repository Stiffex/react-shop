import React from 'react';
import { useState } from 'react';

function MainContent() {

    const [number, setNumber] = useState(0);

    function plus() {
        setNumber(number + 2);
    }

    function minus() {
        if(number > 0) {
            setNumber(number - 2);
        }
    }

    function reset() {
        setNumber(0);
    }

        return (
            <div>
                <div className='number'>
                    {number}
                </div>
                <div className='buttons'>
                    <div onClick={plus} className='increase'>Увеличить</div>
                    <div onClick={minus} className='decrease'>Уменьшить</div>
                    <div onClick={reset} className='reset'>Сбросить</div>
                </div>
            </div>
        )
}

export default MainContent
