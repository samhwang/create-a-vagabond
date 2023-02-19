import { useState, SyntheticEvent } from 'react';

export function useAccordion() {
  const [expanded, setExpanded] = useState<number | false>(false);
  const handleChange = (panel: number) => (event: SyntheticEvent, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false);
  };
  return [expanded, handleChange] as const;
}
