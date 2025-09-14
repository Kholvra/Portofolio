import { createContext } from 'react';
import type Lenis from '@studio-freight/lenis';

export const LenisContext = createContext<Lenis | null>(null);
