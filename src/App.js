import React, { Component } from 'react';
import { Button, Content, Dropdown, Search } from 'carbon-components-react';
import TutorialHeader from './components/TutorialHeader';
import './app.scss';

const items = [
  {
    id: 'option-1',
    label: 'Option 1',
  },
  {
    id: 'option-2',
    label: 'Option 2',
  },
  {
    id: 'option-3',
    label: 'Option 3',
  },
  {
    id: 'option-4',
    label: 'Option 4',
  },
];

class App extends Component {
  render() {
    return (
      <>
        <TutorialHeader />
        <Content>
          <Dropdown
            ariaLabel="Dropdown"
            id="langauge"
            items={items}
            label="Select Language"
          />
          <Search id="search-1" placeHolderText="Search" />
          <Button>Button</Button>
        </Content>
      </>
    );
  }
}

export default App;
