import { render as testingLibraryRender } from '@testing-library/react';
import { MantineProvider } from '@mantine/core';

// not necessary, this is just a mantine wrapper that is needed in order for mantine components
// to be compatible with react testing library / jest
export const render = (ui) => {
  return testingLibraryRender(<>{ui}</>, {
    wrapper: ({ children }) => (
      <MantineProvider>{children}</MantineProvider>
    ),
  });
}