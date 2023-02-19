import { AccordionDetails, Grid, Stack } from '@mui/material';
import { ReactNode } from 'react';

export type AccordionDetailsLayoutProps = {
  left: ReactNode;
  right: ReactNode;
};

export function AccordionDetailsLayout({ left, right }: AccordionDetailsLayoutProps) {
  return (
    <AccordionDetails>
      <Grid container spacing={2}>
        <Grid item xs={12} md={5}>
          <Stack spacing={2}>{left}</Stack>
        </Grid>

        <Grid item xs={12} md={7}>
          {right}
        </Grid>
      </Grid>
    </AccordionDetails>
  );
}
