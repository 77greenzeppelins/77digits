import React from 'react';
/*
Components
*/
import Clock from '../../../comp77/clock/Clock';
import DateDisplayer from '../../../comp77/date/DateDisplayer';

/*
----------------------------------------------------------------------------
*/
const InitialOverlayBottomSection = () => {
  return (
    <div className="initial-overlay-bottom-section__container">
      <div className="initial-overlay-bottom-section__data clocks">
        <Clock
          city={'Dzierżoniów'}
          timeZone={'Europe/Warsaw'}
          // style={{ paddingBottom: '20px' }}
        />
        <Clock
          city={'Washington DC'}
          timeZone={'America/New_York'}
          // style={{ paddingBottom: '20px' }}
        />
        <Clock
          city={'Beijing'}
          timeZone={'Asia/Shanghai'}
          // style={{ paddingBottom: '20px' }}
        />
      </div>
      <div className="initial-overlay-bottom-section__data date">
        <DateDisplayer />
      </div>
    </div>
  );
};

export default InitialOverlayBottomSection;
