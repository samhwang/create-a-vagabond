import { AccordionDetails, Grid, Stack } from "@mui/material"

export type AccordionDetailsLayoutProps = {
  left: React.ReactNode
  right: React.ReactNode
}

export const AccordionDetailsLayout = ({ left, right }: AccordionDetailsLayoutProps) => (
  <AccordionDetails>
    <Grid container spacing={2}>
      <Grid item xs={12} md={5}>
        <Stack spacing={2}>
          {left}
        </Stack>
      </Grid>

      <Grid item xs={12} md={7}>
        {right}
      </Grid>
    </Grid>
  </AccordionDetails>
)
