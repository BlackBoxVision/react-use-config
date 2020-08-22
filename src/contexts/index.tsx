import React, { Context } from 'react';

export type Configuration = {
  [key: string]: Config | any;
};

export type Config = Configuration | null;

export const ConfigContext: Context<Config> = React.createContext<Config>(null);
