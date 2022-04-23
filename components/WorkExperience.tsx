import { FunctionComponent } from 'react';

const WorkExperience: FunctionComponent = () => {
  return (
    <div className="mx-auto mt-24 tracking-wider">
      <h2 className="text-3xl font-bold">Work Experience</h2>
      <ul className="list-disc mt-4 list-inside">
        <li>
          Senior Software Engineer at{' '}
          <a
            className="text-blue-400 hover:text-blue-500  hover:underline"
            target="_blank"
            href="https://www.hubspot.com/"
            rel="noreferrer"
          >
            HubSpot
          </a>{' '}
          (May 2019 - Presen t)
        </li>
        <li>
          Frontend Engineer at{' '}
          <a
            className="text-blue-400 hover:text-blue-500  hover:underline"
            target="_blank"
            href="https://www.vsware.ie/"
            rel="noreferrer"
          >
            VSware
          </a>{' '}
          (Jan 2018 - May 2019)
        </li>
        <li>
          Frontend Engineer at{' '}
          <a
            className="text-blue-400 hover:text-blue-500  hover:underline"
            target="_blank"
            href="https://vigitrust.com/"
            rel="noreferrer"
          >
            VigiTrust
          </a>{' '}
          (Aug 2016 - October 2017)
        </li>
        <li>
          QA Test Engineer at{' '}
          <a
            className="text-blue-400 hover:text-blue-500  hover:underline"
            target="_blank"
            href="https://www.paddypower.com"
            rel="noreferrer"
          >
            Paddy Power
          </a>{' '}
          (June 2014 - September 2014)
        </li>
      </ul>
    </div>
  );
};

export default WorkExperience;
