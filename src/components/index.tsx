import React, { useState, useEffect } from 'react';

import { Config, ConfigContext } from '../contexts';

export type ConfigLoaderFunction = () => Promise<Config>;
export type ConfigProviderProps = {
  /**
   * Property that enables debugging from ConfigProvider for Async Loading
   */
  debug?: Boolean;
  /**
   * Property that represents the config object
   */
  config?: Config;
  /**
   * Property that represents the React Children nodes
   */
  children: React.ReactNode;
  /**
   * Property that represents a function that enables to resolve config loading in Async Way
   */
  getConfig?: ConfigLoaderFunction;
};

const log = (msg: String, debug?: Boolean) => debug && console.warn(msg);

export const ConfigProvider: React.FC<ConfigProviderProps> = ({
  debug,
  config,
  children,
  getConfig,
}: ConfigProviderProps) => {
  const [configuration, setConfiguration] = useState<Config>(config as Config);

  useEffect(() => {
    if (getConfig) {
      getConfig()
        .then((config: Config) => {
          log(
            `[ConfigProvider]: finish async loading with config: ${config}`,
            debug
          );

          setConfiguration(config);
        })
        .catch((error: Error) => {
          log(
            `[ConfigProvider]: finish async loading with error: ${error}`,
            debug
          );

          setConfiguration(null);
        });
    }
  }, [getConfig]);

  return (
    <ConfigContext.Provider value={configuration}>
      {children}
    </ConfigContext.Provider>
  );
};

ConfigProvider.displayName = 'ConfigProvider';
ConfigProvider.defaultProps = {
  debug: false,
};
