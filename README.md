# React Use Config [![License: MIT](https://img.shields.io/badge/License-MIT-brightgreen.svg)](https://opensource.org/licenses/MIT)

:rocket: Custom Provider and Hook for managing config in React.

## Table of contents

- [Use Case](#use-case)
- [Compatibility](#compatibility)
- [Installation](#installation)
  - [NPM](#npm)
  - [YARN](#yarn)
- [Example Usage](#example-usage)
- [Provider API](#component-api)
- [useConfig API](#hooks-api)
- [Issues](#issues)
- [Contributing](#contributing)
- [License](#license)

## Use case

You need a proper way to access config from your react components and custom hooks.

## Compatibility

Our package currently supports apps with **React >= 16.8.0**. You can use this package for React and React Native Apps.

## Installation

You can install this library via NPM or YARN.

### NPM

```bash
npm i @blackbox-vision/react-use-config
```

### YARN

```bash
yarn add @blackbox-vision/react-use-config
```

## Example Usage

After reading and performing the previous steps, you should be able to import the library and use it like in this example:

1. Define the `config` and wrap your App in `ConfigProvider`:

```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import { ConfigProvider } from '@blackbox-vision/react-use-config';

import Header from './Header';

const config = {
  logo: 'https://xyz.com/logo.png',
};

const App = () => (
  <ConfigProvider config={config} debug={false}>
    <App />
  </ConfigProvider>
);

export default App;
```

2. Import the `hook` and consume the config part you really need:

```javascript
import React from 'react';
import { useConfig } from '@blackbox-vision/react-use-config';

const Header = (props) => {
  const logoUri = useConfig(config => config?.logo);

  return (
    <div>
      <img src={logoUri} />
      {...}
    </div>
  );
};

export default Header;
```

## Component API

The `ConfigProvider` component has the following props:

| Properties | Types    | Default Value | Description                                   |
| ---------- | -------- | ------------- | --------------------------------------------- |
| config     | object   | none          | Property that represents the config object    |
| getConfig  | function | none          | Property that a function to load config async |
| debug      | boolean  | false         | Property that enables debug mode              |

## Hooks API

### useConfig

The `useConfig` hook lets you retrieve the full config object or a specific config part using a selector.

#### Parameters

The hook receives the following parameters:

- `selector`: It's an optional function that gives you the config and let you return an specific value that will be memoized.

#### Return Value

If you pass the `selector` to the `useConfig` hook you'll receive an specific config item. In case you didn't, you'll only receive the fully config object.

## Issues

Please, open an [issue](https://github.com/BlackBoxVision/react-use-config/issues) following one of the issues templates. We will do our best to fix them.

## Contributing

If you want to contribute to this project see [contributing](https://github.com/BlackBoxVision/react-use-config/blob/master/CONTRIBUTING.md) for more information.

## License

Distributed under the **MIT license**. See [LICENSE](https://github.com/BlackBoxVision/react-use-config/blob/master/LICENSE) for more information.
