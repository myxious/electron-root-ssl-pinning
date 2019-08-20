const consoleError = console.error;

export function disableConsoleError() {
  console.error = () => {
    /* Do nothing */
  };
}

export function enableConsoleError() {
  console.error = consoleError;
}

export const predefinedDate = new Date(2019, 7, 20, 0, 0, 0);
