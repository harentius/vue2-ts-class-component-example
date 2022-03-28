# Example project to demonstrate the best practices of usage of Vue 2 with typescript

This is a demo project to just show how we are trying to build frontend application with vue 2 and typescript.
It uses a set of tools as well as methodologies and conventions which help us to build well-designed and maintanable code.

## What is covered:
### Generic
1. Vue Class Component itself https://github.com/vuejs/vue-class-component
1. Vue property decorator https://github.com/kaorun343/vue-property-decorator
1. Vuex Class https://github.com/ktsn/vuex-class
1. Only scoped styles in components.
However one global not-scoped style is allowed for really global things.
Can be in App component, for example.
1. Directory @types for types https://www.typescriptlang.org/tsconfig#types
1. Default slots (while you can)
1. Use facades
1. Relative imports inside modules, absolute - outside modules or to the core
### Modules best practices

1. Use public interfaces (known also as "facades") for every module. (index.ts or index.js file)
This serves a lot of purposes. Some of them:
    * Manage complexity of code.
    To use a module, you need to understand only pubic interface and not entire module.
    * Facade defines how to use a module
    * It can serve well for backward compatibility: you only need to preserve the public interface
    * Facades give an opportunity to control modules connections

1. Different ways of using modules:
   * Direct imports through facades
   * Event dispatcher https://www.digitalocean.com/community/tutorials/vuejs-global-event-bus
   * Dom modifications
1. Useful conventions:
    * Absolute (@) intermodules and core imports
    * Relative imports (./, ../, etc) inside module itself
1. Diagnostic
    * https://github.com/sverweij/dependency-cruiser
    ```
    yarn depcruise-modules
    ```
(and webpack workaround)
1. Enforcement
    * eslint
    ```
    yarn lint
    ```
    Checks for restriction:
    ```
    'no-restricted-imports': ['error', {
      patterns: ['**/modules/*/*']
    }]
    ```
    * dependency-cruiser
    ```
    depcruise-lint
    ```

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```
