import {Progress} from '@douyinfe/semi-ui';
import {useEffect, useState} from 'react';

import {getBatteryInfo} from './utils';

/**
 * 显示系统电量
 */
export const Battery = () => {
  const [battery, setBattery] = useState(0);

  useEffect(() => {
    void getBatteryInfo().then(setBattery);
  }, []);

  return (
    <Progress
      percent={battery}
      type="circle"
      showInfo
      format={p => `${p} %`}
    />
  );
};
