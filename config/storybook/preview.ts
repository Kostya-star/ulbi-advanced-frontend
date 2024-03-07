import type { Preview } from '@storybook/react';
import { StyleDecorator } from '../../src/shared/config/storybook/StyleDecorator/StyleDecorator.ts';
import { ThemeDecorator } from '../../src/shared/config/storybook/ThemeDecorator/ThemeDecorator.tsx'
import { RouterDecorator } from '../../src/shared/config/storybook/RouterDecorator/RouterDecorator.tsx'
import { Theme } from '../../src/app/providers/ThemeProvider'

const preview: Preview = {
  parameters: {
    // layout: 'fullscreen',
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [StyleDecorator, ThemeDecorator(Theme.LIGHT), RouterDecorator],
};

export default preview;
