import { useState } from "react"

export const useAccordion = () => {
  const [expanded, setExpanded] = useState<number | false>(false)
  const handleChange = (panel: number) => (event: React.SyntheticEvent, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false)
  }
  return [expanded, handleChange] as const
}
