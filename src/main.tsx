import ReactDOM from 'react-dom/client';
import {Collapse} from '@douyinfe/semi-ui';
import * as components from './components';

const App = () => {
  return (
    <Collapse defaultActiveKey={Object.keys(components)}>
      {Object.entries(components).map(([name, Component]) => (
        <Collapse.Panel key={name} header={name} itemKey={name}>
          <Component />
        </Collapse.Panel>
      ))}
    </Collapse>
  );
};

ReactDOM.createRoot(document.getElementById('root')!).render(<App />);
