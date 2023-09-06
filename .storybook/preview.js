export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  options: {
    storySort: {
      method: '',
      order: [
        'Ruhil UI',
        [
          'Introduction',
          'Component',
          [
            'App',
            'Button',
            'Navigation',
            'GPay',
            'Slide',
            'Loader',
            'Icon',
            'IconButton',
            'IconButtonToggle',
            'Fab - Floating Action Button',
            'Dialog',
            'Tab',
            'List',
            'Menu',
            'Drawer',
            'Snackbar',
          ],
          'Form Component',
          ['Formfield'],
        ],
      ],
      locales: '',
    },
  },
};
