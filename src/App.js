import { useState } from 'react';
import './App.css';

function App() {

  let [input,setinput] = useState("")
  let [val , setval] = useState("")
  let [sign , setsing] = useState("")
  let [lastval,setlastval] = useState("");
  let [delval , setdelval] = useState("")

  // input ma value lavava
  const  data = (y) => {
    setinput(input + y);
  }

  //sign(=,-,*,/)
  const caldata = (d) => {
    setval(input);
    setinput("");
    setsing(d);
  }
  
  const lastvalue = () => {

     lastval = input;
    switch (sign)
    {
      case '1':
		setinput(String(parseFloat(val) + parseFloat(lastval)));
		break;
      
      case '2':
          setinput(String(parseFloat(val) - parseFloat(lastval)));
          break;

        case '3':
          setinput(String(parseFloat(val) * parseFloat(lastval)));
          break;

        case '4':
          if(parseFloat(lastval) === 0)
          {
            setinput("can not divide by zero");
          }else
          {
            setinput(String(parseFloat(val) / parseFloat(lastval)));
          }
          break;

          case '5':
            if(parseFloat(lastval) === 0)
            {
              setinput("error");
            }else
            {
              setinput(String(parseFloat(val) % parseFloat(lastval)));
            }
            break;
          default:
          setinput("Error");
    }
  }
    const clr = () => {
    setinput("");
  }
//   const rdata = () => {
//     setdelval(input);
//     delval = input.substring(0,input.length-1) 
//     setinput(delval );
//   }

  return (
    <div className="App">
     <table> 
        <tr> 
             <td colSpan="3"> 
                 <input type="text" value={input}></input> 
             </td> 
             <td><input type="button" value="c"  onClick={clr}></input></td>
         </tr> 
  
         <tr> 
             <td><input type="button" value="1" onClick={() =>data('1')}></input></td> 
             <td><input type="button" value="2" onClick={() =>data('2')}></input></td> 
             <td><input type="button" value="3" onClick={() =>data('3')}></input></td> 
             <td><input type="button" value="/" onClick={() => caldata('4')}></input></td> 
         </tr> 
         <tr> 
             <td><input type="button" value="4" onClick={() =>data('4')}></input></td> 
             <td><input type="button" value="5" onClick={() =>data('5')}></input></td> 
             <td><input type="button" value="6" onClick={() =>data('6')}></input></td> 
             <td><input type="button" value="*" onClick={() => caldata('3')}></input></td> 
         </tr> 
         <tr> 
             <td><input type="button" value="7" onClick={() =>data('7')}></input></td> 
             <td><input type="button" value="8" onClick={() =>data('8')}></input></td> 
             <td><input type="button" value="9" onClick={() =>data('9')}></input></td> 
             <td><input type="button" value="-" onClick={() => caldata('2')}></input></td> 
         </tr> 
         <tr> 
             <td><input type="button" value="0" onClick={() =>data('0')}></input></td> 
             <td><input type="button" value="." onClick={() =>data('.')}></input></td> 
             <td><input type="button" value="=" onClick={lastvalue}></input></td> 
             <td><input type="button" value="+"onClick={() => caldata('1')}></input></td> 
         </tr> 
     </table>
    </div>
  );
}

export default App;

// import logo from './logo.svg';
// import './App.css';
// import { useState } from 'react';


// function App() {

// const [Value, setValue] = useState("");  
// const BtnClick = (buttonValue) => {
//     if (Value === "") {
//         setValue(buttonValue);
//     } else {
//         setValue(Value + buttonValue);
//     }
// };
  
// const handleCalculate = () => {
//     try {
//         setValue(eval(Value).toString());
//     } catch (error) {
//         setValue('Error');
//     }
// };

//   return (
//    <>
//        <table> 
//         <tr> 
//             <td colSpan="3"> 
//                 <input type="text" value={Value}></input> 
//             </td> 
//             <td><input type="button" value="c" onClick={e => setValue('')}></input></td>
//         </tr> 
  
//         <tr> 
//             <td><input type="button" value="1" onClick={() => BtnClick('1')}></input></td> 
//             <td><input type="button" value="2" onClick={() => BtnClick('2')}></input></td> 
//             <td><input type="button" value="3" onClick={() => BtnClick('3')}></input></td> 
//             <td><input type="button" value="/" onClick={() => BtnClick('/')}></input></td> 
//         </tr> 
//         <tr> 
//             <td><input type="button" value="4" onClick={() => BtnClick('4')}></input></td> 
//             <td><input type="button" value="5" onClick={() => BtnClick('5')}></input></td> 
//             <td><input type="button" value="6" onClick={() => BtnClick('6')}></input></td> 
//             <td><input type="button" value="*" onClick={() => BtnClick('*')}></input></td> 
//         </tr> 
//         <tr> 
//             <td><input type="button" value="7" onClick={() => BtnClick('7')}></input></td> 
//             <td><input type="button" value="8" onClick={() => BtnClick('8')}></input></td> 
//             <td><input type="button" value="9" onClick={() => BtnClick('9')}></input></td> 
//             <td><input type="button" value="-" onClick={() => BtnClick('-')}></input></td> 
//         </tr> 
//         <tr> 
//             <td><input type="button" value="0" onClick={() => BtnClick('0')}></input></td> 
//             <td><input type="button" value="." onClick={() => BtnClick('.')}></input></td> 
//             <td><input type="button" value="=" onClick={handleCalculate}></input></td> 
//             <td><input type="button" value="+" onClick={() => BtnClick('+')}></input></td> 
//         </tr> 
//     </table>
//    </>
//   );
// }
// export default App;
