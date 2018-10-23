# RNDM Render

## About

Welcome to RNDM Render, the tool for low-no-code, platform-independent application development. This tool is the shell wrapper around the RNDM Plugins and Presets.

### Why RNDM?

The core concept is to be able to pass in static JSON or JavaScript objects, which will be rendered out as JavaScript and presented as Platform Native views.

This type of flexibility allows for less code and more statically defined pages, methods and more. In an asingle change of an API you can deliver entirely new user paths and even entire applications all through a server driven JSON structure. This becomes especially prevalent when considering applications built on Native Platforms using React Native as this can mean a completely API driven deployment.

## Installation

### From NPM

```sh
npm install --save @rndm/render
```

_**Please Note**: This RNDM Render is best used in conjunction with [RNDM Client](https://github.com/rndm-com/rndm-client), which incorporates this tool as well as the [Core Preset](https://github.com/rndm-com/rndm-render-preset-core)_

## Usage

RNDM Render is designed from the ground up to be used as a plugin solution. There are 4 main plugin solutions that are available:

### Renderers

The heart of the tool is the ability to render items based on descriptive JSON. A renderer is a set of code that will be used to determine how to render any given JSON Object.

**Example**

If we wanted to create a Renderer that would create a React Native Text component based on a string input, we could do this using the below code:

```javascript
import React from 'react';
import { Text } from 'react-native';
import { use } from 'rndm-render';

const renderer = input => (<Text>{input}</Text>);
const renderers = [
  {
    type: 'MyRenderer',
    value: renderer,
  }
];

const plugin = {
  key: 'MyPlugin',
  renderers,
};

use(plugin);

```

This will create a new renderer within the RNDM renderer tool that can be accessed via the renderers through the key 'MyPlugin.MyRenderer';

If we want to use this, we can do so as such:

```javascript
// Inside the file you want to render the item
import { render } from 'rndm-render';

// ...

const Element = () => render('test', 'MyPlugin.MyRenderer');

export default Element;

// ...

```

Clearly this is a very simple example of generating the view directly from a text object. However, faily comprehensive and complex renderers can be created to encompass all kinds of components and solutions for your project.

### Components

Components are prebuilt visual elements that can be accessed via keys. Like the renderer above, you are able to assign these into the render too, using the 'use' method.

**Example**

```javascript
import React from 'react';
import { Text } from 'react-native';
import { use } from 'rndm-render';

const component = ({ text } = {}) => (<Text>{text}</Text>);
const components = [
  {
    type: 'MyComponent',
    value: component,
  }
];

const plugin = {
  key: 'MyPlugin',
  components,
};

use(plugin);

```

For this, we will make use of the existing renderer from the Core Plugin.

```javascript
// Inside the file you want to render the item
import { render } from 'rndm-render';

// ...

const component = {
    type: 'MyPlugin.MyComponent',
    props: {
        test: 'test',
    },
};

const Element = () => render(component);

export default Element;

 // ...

```

### Methods

Methods are prebuilt functions that take arguments passed into them from teh JSON or JavaScript objects.

**Example**

```javascript
import React from 'react';
import { use } from 'rndm-render';

const method = (val1 = 0, val2 = 0) => (va1 + val2);
const methods = [
  {
    type: 'MyMethod',
    value: method,
  }
];

const plugin = {
  key: 'MyPlugin',
  methods,
};

use(plugin);

```

For this, we will make use of the existing renderer from the Core Plugin.

```javascript
// Inside the file you want to render the item
import React from 'react';
import { Text } from 'react-native';
import { render } from 'rndm-render';

// ...

const method = {
    type: 'MyPlugin.MyMethod',
    isFunc: true
    args: [
        5,
        10,
    ],
};

const Element = () => <Text>{render(method)}</Text>;

export default Element;

 // ...

```

### Middlewares

Middleware is an interceptor that will execute before the Componet is rendered.

**Example**

In the example below we are going to build a Logging tool that will print out what the output will be before it is rendered, then allow the renderer to complete.

```javascript

import React from 'react';
import { use } from 'rndm-render';

const middleware = [
  {
    type: 'Logger',
    value: {
      method: (logLevel = 0) => {
        return i => {
          // eslint-disable-next-line
          if(logLevel > 0) console.log('LOGGER - OUTPUT', i());
          return i;
        };
      },
      resolve: identity,
    },
  },
];

const plugin = {
  key: 'MyPlugin',
  methods,
};

use(plugin);

```

This is then passed in as part of the props object of the component.

```javascript

const component = {
  type: 'react-native.View',
  props: {
    style: {
      height: 100,
      width: 100,
      backgroundColor: 'red',
    },
    middleware: [
      {
        middleware: 'MyPlugin.Logger',
        args: [
          1, // note the log level here is greater than zero
        ],
      },
    ],
  },
};

const Element = () => render(component);

export default Element;
```

### Further Reading

The examples on creating using RNDM Renderer are all very basic. We highly recommend reading further into the available plugins and presets and their inclusive documentation to allow you to get a fuller understanding of what is possible with this technology.
