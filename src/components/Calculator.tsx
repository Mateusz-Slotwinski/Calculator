import React, { useState } from 'react';

function Calculator() {

    const [result, setResult] = useState("");

    const handleClick = (e: any) => {
        setResult(result + e.target.name);
    }
    
    const clear = () => {
        setResult("");
    }
    
    const count = () => {
        try {
            // eslint-disable-next-line
            setResult(eval(result).toString());
        } catch(err) {
            setResult("Err");
        }
    }

    const calc = {
        square() {
            try {
                // eslint-disable-next-line
                const a:number = eval(result)
                setResult(a*a as unknown as string);
            } catch(err) {
                setResult("Err");
            }
        },
        root () {
            try {
                // eslint-disable-next-line
                const a:number = eval(result)
                setResult(Math.sqrt(a) as unknown as string);
            } catch(err) {
                setResult("Err");
            }
        },
        log () {
            try {
                // eslint-disable-next-line
                const a:number = eval(result)
                setResult(Math.log(a) as unknown as string);
            } catch(err) {
                setResult("Err");
            }
        },
        exp () {
            try {
                // eslint-disable-next-line
                const a:number = eval(result)
                setResult(Math.exp(a) as unknown as string);
            } catch(err) {
                setResult("Err");
            }
        },
        trig: {
            sin () {
                try {
                    // eslint-disable-next-line
                    const a:number = eval(result)
                    setResult(Math.sin(a) as unknown as string);
                } catch(err) {
                    setResult("Err");
                }
            },
            cos () {
                try {
                    // eslint-disable-next-line
                    const a:number = eval(result)
                    setResult(Math.cos(a) as unknown as string);
                } catch(err) {
                    setResult("Err");
                }
            },
            tan () {
                try {
                    // eslint-disable-next-line
                    const a:number = eval(result)
                    setResult(Math.tan(a) as unknown as string);
                } catch(err) {
                    setResult("Err");
                }
            },
            asin () {
                try {
                    // eslint-disable-next-line
                    const a:number = eval(result)
                    setResult(Math.asin(a) as unknown as string);
                } catch(err) {
                    setResult("Err");
                }
            },
            acos () {
                try {
                    // eslint-disable-next-line
                    const a:number = eval(result)
                    setResult(Math.acos(a) as unknown as string);
                } catch(err) {
                    setResult("Err");
                }
            },
            atan () {
                try {
                    // eslint-disable-next-line
                    const a:number = eval(result)
                    setResult(Math.atan(a) as unknown as string);
                } catch(err) {
                    setResult("Err");
                }
            }
        }
    }

    return (
        <div className="outline">
            <input className="screen" type="text" value={result} />
            <div className="keyContainer">
                <button className="key trigonometric" name="sin" onClick={calc.trig.sin}>sin</button>
                <button className="key trigonometric" name="cos" onClick={calc.trig.cos}>cos</button>
                <button className="key trigonometric" name="tg" onClick={calc.trig.tan}>tg</button> 
                <button className="key operation" name="(" onClick={handleClick}>(</button>
                <button className="key operation" name=")" onClick={handleClick}>)</button> 
                <button className="key operation" id="clear" onClick={clear}>␡</button>

                <button className="key trigonometric" name="arcsin" onClick={calc.trig.asin}>arcsin</button> 
                <button className="key trigonometric" name="arccos" onClick={calc.trig.acos}>arccos</button>
                <button className="key trigonometric" name="arctg" onClick={calc.trig.atan}>arctg</button>
                <button className="key advanced" name="ln" onClick={calc.log}>ln</button>
                <button className="key advanced" name="ex" onClick={calc.exp}>eˣ</button>
                <button className="key basic" name="%" onClick={handleClick}>%</button>

                <button className="key number" name="1" onClick={handleClick}>1</button>
                <button className="key number" name="2" onClick={handleClick}>2</button>
                <button className="key number" name="3" onClick={handleClick}>3</button>
                <button className="key basic" name="+" onClick={handleClick}>+</button> 
                <button className="key basic" name="-" onClick={handleClick}>−</button>
                <button className="key basic" name="*" onClick={handleClick}>×</button>

                <button className="key number" name="4" onClick={handleClick}>4</button>
                <button className="key number" name="5" onClick={handleClick}>5</button>
                <button className="key number" name="6" onClick={handleClick}>6</button>
                <button className="key basic" name="/" onClick={handleClick}>÷</button>
                <button className="key basic" name="root" onClick={calc.root}>√</button>
                <button className="key basic" name="square" onClick={calc.square}>x²</button>

                <button className="key number" name="7" onClick={handleClick}>7</button>
                <button className="key number" name="8" onClick={handleClick}>8</button>
                <button className="key number" name="9" onClick={handleClick}>9</button>
                <button className="key number" name="0" onClick={handleClick}>0</button>
                <button className="key basic" name="." onClick={handleClick}>,</button>
                <button className="key basic" id="result" onClick={count}> = </button>

            </div>
        </div>
    );
  }

export default Calculator;
