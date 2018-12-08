import * as React from 'react';
import {render} from 'react-dom';
import {Spring} from 'react-spring';

function Index() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = React.useState(0);
  const [todos,setTodo] = React.useState([]);

  const addTodo = () => {
    let text = document.querySelector('#t');
    setTodo([...todos,text.value]);
    text.value = "";
    text.focus();
  };
  let increase = (() => {let _counter = 0; return ()=> _counter++;})();

  let messages =[];
   "Welcome to React hooks example".split(' ')
  .map(m=> messages.push({key : increase(), text:m}));
  console.log(messages);
 
  return (
    <div>
      <section>
        <p>You clicked {count} times</p>
        <button onClick={() => setCount(count + 1)}>
        Increment
        </button>
      </section>
      
     <section>
      <p>This is a simple todo example</p>
        <input type="text" id="t" onKeyPress={(e)=> {if(e.key === 'Enter') addTodo(); }}/>
        <button onClick={addTodo} >Add todo</button>
        
          {todos.map(t=>
          <Spring from={{ opacity: 0 }} to={{ opacity: 1 }}>
          {props => <div class="todo-text" style={props}>{t}</div>}
        </Spring>)}
     </section>
    
    </div>
  );
}

render(<Index/>,document.getElementById('app'))