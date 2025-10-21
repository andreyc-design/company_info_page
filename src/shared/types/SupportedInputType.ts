import type { HTMLInputTypeAttribute } from 'react';

export type SupportedInputType = Extract<
  HTMLInputTypeAttribute,
  'text' | 'password' | 'email' | 'tel'
>;
