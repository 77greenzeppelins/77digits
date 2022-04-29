import React from 'react';
/*
Global State Staff
*/
import { useSnapshot } from 'valtio';
import { canvasState } from '../../../../../../../states/canvasState';
/*
Basic Data
*/
import { ContactResourcesData } from '../../../containerMenuBodyData';

const ContactsResources = () => {
  /*
  Global State Section
  */
  const canvasGlobalState = useSnapshot(canvasState);

  /*
  JSX
  */
  return (
    <ul className="contacts-resources__wrapper">
      {ContactResourcesData.mainLinks.map(
        ({ id, labelPL, labelEn, resource }) => (
          <li key={id} className="contacts-resources__resource-wrapper">
            <p className="contacts-resources__resource-label">
              {canvasGlobalState.languageVersion ? labelPL : labelEn}
            </p>
            <p className="contacts-resources__resource-data">{resource}</p>
          </li>
        )
      )}
    </ul>
  );
};

export default ContactsResources;
