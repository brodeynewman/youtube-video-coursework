import _ from 'lodash';
import { withRouter } from 'react-router-dom';
import React, { createContext, useState } from 'react';

const StreamContext = createContext({});

const StreamProvider = (props) => {
  const { children, history } = props;

  const [stream, setStream] = useState(null);

  const handleSetStream = streamInfo => setStream(_.pick(streamInfo, ['name', 'topic']));

  const handleRemoveStream = () => {
    setStream(null);

    // push back to home
    history.push('/');
  };

  return (
    <StreamContext.Provider
      value={{
        stream,
        handlers: {
          onSetStream: handleSetStream,
          onRemoveStream: handleRemoveStream,
        },
      }}
    >
      {children}
    </StreamContext.Provider>
  );
};

export default withRouter(StreamProvider);
