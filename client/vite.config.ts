import { defineConfig } from 'vite';
import reactBabel from '@vitejs/plugin-react';
import reactSwc from '@vitejs/plugin-react-swc';
import relay from 'vite-plugin-relay';

// TOGGLE THIS IF YOU SEE STRANGE BEHAVIOR IN YOUR APP.
// See README of plugin-react-swc: https://github.com/vitejs/vite-plugin-react-swc
const useSwc = false;
function react(useSwc: boolean) {
  if (!useSwc) {
    return reactBabel({
      babel: {
        presets: ['jotai/babel/preset'],
      },
    });
  }

  return reactSwc({
    // @ts-ignore
    plugins: [
      ['@swc-jotai/debug-label', {}],
      ['@swc-jotai/react-refresh', {}],
    ],
  });
}

// https://vitejs.dev/config/
export default defineConfig({
  root: './client',
  plugins: [react(useSwc), relay],
});
