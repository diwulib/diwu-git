import {diwuFn} from 'diwu';
import {exec} from 'child_process';

/**
 * 获取系统电量
 * Written by ChatGPT.
 */
export const getBatteryInfo = diwuFn(() => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
  const platform: string = process.platform;

  if (['win32', 'darwin'].indexOf(platform) < 0) {
    return Promise.reject(`Unsupported platform: ${platform}`);
  }

  const cmd = {
    darwin: 'pmset -g batt | grep -Eo "\\d+%" | cut -d% -f1',
    win32: 'WMIC Path Win32_Battery Get EstimatedChargeRemaining',
  };

  return new Promise<number>((resolve, reject) => {
    exec(cmd[platform as keyof typeof cmd], (err, stdout: string) => {
      if (err) {
        reject(err);
      } else {
        const percent = parseInt(stdout);
        if (isNaN(percent)) {
          reject(`Invalid output: ${stdout}`);
        } else {
          resolve(percent);
        }
      }
    });
  });
});
