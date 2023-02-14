import { DecoratorFunction } from '@storybook/addons';

const localStorageDecorator: DecoratorFunction = (story, { parameters }) => {
  localStorage.clear();
  if (parameters && parameters.storage) {
    Object.entries(parameters.storage).forEach(([key, value]) => localStorage.setItem(key, JSON.stringify(value)));
  }
  return story();
};

export default localStorageDecorator;
