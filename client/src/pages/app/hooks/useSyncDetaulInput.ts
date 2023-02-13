import { useEffect } from 'react';

// use in case where atomWithStorage which return empty '' before load actual value from storage
// otherwise use useForm({ defaultValues })
export function useSyncDefaultInput(input: any, onValue: (key: any, value: any) => void) {
  useEffect(() => {
    Object.entries(input).forEach(([key, value]) => {
      onValue(key as any, value);
    });
  }, [...Object.keys(input)]);
}
