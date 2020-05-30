import React from 'react';

import Entries from './Entries';

const JournalEntry = (props: any) => {
  const { entries } = props;
  return (
    <div className="journal-entry">
      {entries.journal.map((t: any) => (
        <Entries entry={t} />
      ))}
    </div>
  );
};

export default JournalEntry;
