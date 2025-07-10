import { setupWorker } from 'msw/browser';
import { handlers } from './handlers';

export const worker = setupWorker(...handlers);

// Expose worker globally for development purposes
declare global {
  interface Window {
    msw: {
      worker: typeof worker;
    };
  }
}

window.msw = { worker };
