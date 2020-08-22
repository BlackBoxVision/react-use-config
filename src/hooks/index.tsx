import { useContext, useMemo } from 'react';

import { ConfigContext, Config } from '../contexts';

export function useConfig(selector: (config: Config) => Config | any) {
  const config: Config = useContext(ConfigContext);

  const value = useMemo(() => {
    if (typeof selector === 'function') {
      return selector(config);
    }

    return config;
  }, [selector, config]);

  return value as Config | any;
}
