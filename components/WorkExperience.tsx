import { FunctionComponent } from 'react';

const WorkExperience: FunctionComponent = () => {
  return (
    <div className="container mx-auto px-5">
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <ul>
        <li>
          Senior Software Engineer at <a href="www.hubspot.com">HubSpot</a> (May
          2019 - Present)
        </li>
        <li>
          Frontend Engineer at <a href="www.vsware.com">VSware</a> (Jan 2018 -
          May 2019)
        </li>
        <li>
          Frontend Engineer at <a href="www.vigitust.com">VigiTrust</a> (Aug
          2016 - October 2017)
        </li>
        <li>
          QA Test Engineer at <a href="www.paddypower.com">Paddy Power</a> (Aug
          2016 - October 2017)
        </li>
      </ul>
    </div>
  );
};

export default WorkExperience;
