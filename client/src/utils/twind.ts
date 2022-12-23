import { defineConfig } from '@twind/core';
import presetAutoprefix from '@twind/preset-autoprefix';
import presetTailwind from '@twind/preset-tailwind';
import presetTailwindForms from '@twind/preset-tailwind-forms';
import presetContainerQueries from '@twind/preset-container-queries';
import presetTypography from '@twind/preset-typography';
import install from '@twind/with-react';

const config = defineConfig({
  presets: [presetAutoprefix(), presetTailwind(), presetTailwindForms(), presetContainerQueries(), presetTypography()],
});

export default install(config);
