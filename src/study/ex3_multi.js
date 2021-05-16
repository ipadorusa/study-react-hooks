import React from 'react';

function ex3_multi() {
  const [state, setState] = useState({ name: '', age: 0 });
  return (
    <div>
      <p>{`name is ${state.name}`}</p>
      <p>{`age is ${state.age}`}</p>
      <input type='text' value={state.name} onChange={e => setState({ ...state, name: e.target.value })} />
      <input type='text' value={state.age} onChange={e => setState({ ...state, age: e.target.value })} />
    </div>
  );
}

export default ex3_multi;
