import React from 'react';

interface BodyProps {
  data?: string;
}

function Body({data}: BodyProps) {
  return (
    <div>
    {data}
    </div>
  );
}

export default Body;