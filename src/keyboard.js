import { isLabelWithInternallyDisabledControl } from '@testing-library/user-event/dist/utils'
import { useState } from "react";
import './keyboard.js';


const KeyBoard1 = (props) => {
    
    const [count, setLetter] = useState('')
    const a = ()=>{
      setLetter(count + 'a')
    }
    const b = ()=>{
      setLetter(count + 'b')
    }
    const c = ()=>{
      setLetter(count + 'c')
  }
  const d = ()=>{
    setLetter(count + 'd')
  }
  const e = ()=>{
    setLetter(count + 'e')
  }
  const f = ()=>{
    setLetter(count + 'f')
  }
  const g = ()=>{
    setLetter(count + 'g')
  }
  const h = ()=>{
    setLetter(count + 'h')
  }
  const i = ()=>{
    setLetter(count + 'i')
}
const j = ()=>{
  setLetter(count + 'j')
}
const k = ()=>{
  setLetter(count + 'k')
}
const l = ()=>{
  setLetter(count + 'l')
}
const m = ()=>{
  setLetter(count + 'm')
}
const n = ()=>{
  setLetter(count + 'n')
}
const o = ()=>{
  setLetter(count + 'o')
}
const p = ()=>{
  setLetter(count + 'p')
}
const q = ()=>{
  setLetter(count + 'q')
}
const r = ()=>{
  setLetter(count + 'r')
}    
const s = ()=>{
  setLetter(count + 's')
}
const t = ()=>{
  setLetter(count + 't')
}
const u = ()=>{
  setLetter(count + 'u')
}
const v = ()=>{
  setLetter(count + 'v')
}
const w = ()=>{
  setLetter(count + 'w')
}
const x = ()=>{
  setLetter(count + 'x')
}
const y = ()=>{
  setLetter(count + 'y')
}
const z = ()=>{
  setLetter(count + 'z')
}
const space = ()=>{
  setLetter(count + '     ')
}

const one = ()=>{
  setLetter(count + '1')
}
const two = ()=>{
  setLetter(count + '2')
}
const three = ()=>{
  setLetter(count + '3')
}
const four = ()=>{
setLetter(count + '4')
}
const five = ()=>{
setLetter(count + '5')
}
const six = ()=>{
setLetter(count + '6')
}
const seven = ()=>{
setLetter(count + '7')
}
const eight = ()=>{
setLetter(count + '8')
}
const nine = ()=>{
setLetter(count + '9')
}
const zero = ()=>{
setLetter(count + '0')
}

const backspace = ( )=> {
  setLetter(count.slice(0, count.length-1))
}

    return (
        <div class='keyCenter'>
            <h1>{props.x} {props.title}</h1>
            <p>Do you have a favorite gun?: {count}</p>
            <button onClick={one}>1</button>
            <button onClick={two}>2</button>
            <button onClick={three}>3</button>
            <button onClick={four}>4</button>
            <button onClick={five}>5</button>
            <button onClick={six}>6</button>
            <button onClick={seven}>7</button>
            <button onClick={eight}>8</button>
            <button onClick={nine}>9</button>
            <button onClick={zero}>0</button>
            <br/>
            <button onClick={q}>q</button>
            <button onClick={w}>w</button>
            <button onClick={e}>e</button>
            <button onClick={r}>r</button>
            <button onClick={t}>t</button>
            <button onClick={y}>y</button>
            <button onClick={u}>u</button>
            <button onClick={i}>i</button>
            <button onClick={o}>o</button>
            <button onClick={p}>p</button>
            <br/>
            <button onClick={a}>a</button>
            <button onClick={s}>s</button>
            <button onClick={d}>d</button>
            <button onClick={f}>f</button>
            <button onClick={g}>g</button>
            <button onClick={h}>h</button>
            <button onClick={j}>j</button>
            <button onClick={k}>k</button>
            <button onClick={l}>l</button>
            <br/>
            <button onClick={z}>z</button>
            <button onClick={x}>x</button>
            <button onClick={c}>c</button>
            <button onClick={v}>v</button>
            <button onClick={b}>b</button>
            <button onClick={n}>n</button>
            <button onClick={m}>m</button>
     
         
            <br/>

            <button id= "space1" onClick={space}>space</button>
            <button id= "space1" onClick={()=>backspace()}>backspace</button>
            <button onClick={()=> setLetter('')}>clear</button>


        </div>
    )
}



export default KeyBoard1



export const y = ()=>{console.log('y func')}