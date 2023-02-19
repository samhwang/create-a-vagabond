import { Cancel, ExpandLess, ExpandMore } from "@mui/icons-material"
import { AccordionSummary, AccordionSummaryProps, IconButton, Stack, Typography } from "@mui/material"

export type AccordionTitleProps = {
  title?: string
  subtitle?: string
  onDelete: () => void
  expanded: boolean
  AccordionSummaryProps?: AccordionSummaryProps
}

export const AccordionTitle = ({ title, subtitle, expanded, onDelete, AccordionSummaryProps }: AccordionTitleProps) => {
  return (
    <AccordionSummary
      expandIcon={expanded ? <ExpandLess /> : <ExpandMore />}
      {...AccordionSummaryProps}
    >
      <Stack direction="row" flexGrow={1} alignItems='center'>
        {(!title && !subtitle) && (
          <Typography sx={{ width: '33%', flexShrink: 0 }}>
            Fill the value to continues
          </Typography>
        )}
        {title && (
          <Typography sx={{ width: '33%', flexShrink: 0 }}>
            {title}
          </Typography>
        )}
        {subtitle && (
          <Typography sx={{ color: 'text.secondary' }} ml={2}>
            {subtitle}
          </Typography>
        )}
      </Stack>
      <IconButton onClick={onDelete} sx={{ mr: 2}}>
        <Cancel />
      </IconButton>
    </AccordionSummary>
  )
}
