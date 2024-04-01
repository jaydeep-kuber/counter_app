import { useState } from 'react';
function Counter() {
   
    let [num , setNum] = useState(0);
   
    function UpdateCount(params) {

        setNum(x=> x+params)
        // setNum(num+params)
    }

    // function inc() {
    //     setNum(num+1)
    // }

    // function inc5() {
    //     setNum(num+5)
    // }

    // function dec() {
    //     setNum(num-1)
    // }

    // function dec5() {
    //     setNum(num-5)
    // }

    return(

        <div className="Main">
            <h1>{num}</h1>

            {/* <button onClick={inc}>+1</button>
            <button onClick={dec}>-1</button>
            <button onClick={inc5}>+5</button>
            <button onClick={dec5}>-5</button> */}
            

            <button onClick={() => UpdateCount(1)}>+1</button>
            <button onClick={() => UpdateCount(-1)}>-1</button>
            <button onClick={() => UpdateCount(5)}>+5</button>
            <button onClick={() => UpdateCount(-5)}>-5</button>
        </div>

    )
}

export default Counter;