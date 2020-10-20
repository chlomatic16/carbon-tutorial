import React from 'react';
import {
  Header,
  HeaderName,
  //   HeaderNavigation,
  //   HeaderMenuItem,
  //   HeaderGlobalBar,
  //   HeaderGlobalAction,
  SkipToContent,
} from 'carbon-components-react';

// import {
//     AppSwitcher20,
//     Notification20,
//     UserAvatar20,
//   } from '@carbon/icons-react';

const TutorialHeader = () => (
  <Header aria-label="Carbon Tutorial">
    <SkipToContent />
    <HeaderName href="/" prefix="Wats-in Translation">
      Multilingual Messenger
    </HeaderName>
  </Header>
);

export default TutorialHeader;
