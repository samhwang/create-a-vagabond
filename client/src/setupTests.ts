import matchers, { TestingLibraryMatchers } from '@testing-library/jest-dom/matchers';
import { cleanup } from '@testing-library/react';
import { beforeAll, afterAll, afterEach, expect } from 'vitest';
import { createSerializer as createEmotionSerializer } from '@emotion/jest';
import { server } from './__mocks__/msw/server';

declare global {
  namespace Vi {
    interface JestAssertion<T = any> extends jest.Matchers<void, T>, TestingLibraryMatchers<T, void> {}

    interface ExpectStatic {
      addSnapshotSerializer(plugin: ReturnType<typeof createEmotionSerializer>): void;
    }
  }
}

expect.extend(matchers);
const emotionSerializer = createEmotionSerializer();
expect.addSnapshotSerializer(emotionSerializer);

// Setup MSW
beforeAll(() => server.listen());

afterEach(() => {
  server.resetHandlers();
  cleanup();
});

afterAll(() => server.close());
