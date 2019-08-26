/* tslint:disable: no-empty */
const consoleError = console.error;
const consoleWarn = console.warn;

type Method = "error" | "warn" | "all";

export function disableConsole(method: Method) {
  switch (method) {
    case "error":
      console.error = () => {};
      break;
    case "warn":
      console.warn = () => {};
      break;
    case "all":
      console.error = () => {};
      console.warn = () => {};
      break;
  }
}

export function enableConsole(method: Method) {
  switch (method) {
    case "error":
      console.error = consoleError;
      break;
    case "warn":
      console.warn = consoleWarn;
      break;
    case "all":
      console.error = consoleError;
      console.warn = consoleWarn;
      break;
  }
}

export const predefinedDate = new Date(2019, 7, 20, 0, 0, 0);
