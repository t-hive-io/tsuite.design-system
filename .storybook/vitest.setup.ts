import { setProjectAnnotations } from '@storybook/react';
import * as previewAnnotations from './preview';

const annotations = setProjectAnnotations([previewAnnotations]);

// Optionally, return a cleanup function
export default annotations;
