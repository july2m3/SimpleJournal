import React from 'react';

const Entries = (props: any) => {
  const { entry } = props;
  return (
    <div className="entry">
      <h2 className="title">{entry.title}</h2>
      <p>{entry.body}</p>
    </div>
  );
};

export default Entries;
