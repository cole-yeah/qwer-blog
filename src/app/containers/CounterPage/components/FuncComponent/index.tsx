import React, { useState } from 'react';

const Index = () => {
  const [num, setNum] = useState<number>(0);

  const ComponentA = () => {
    return <div>component A</div>;
  };
  const renderComponentB = () => {
    return <div>component B</div>;
  };
  return (
    <section>
      <ComponentA />
      {renderComponentB()}
      <p>number: {num}</p>
      <button onClick={() => setNum(num + 1)}>click me</button>
    </section>
  );
};

export default Index;
