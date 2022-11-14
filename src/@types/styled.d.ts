// d.ts => arquivo de definicação de tipos TS

import 'styled-components';
import { defaultTheme  } from '../styles/themes/default';

type ThemeType = typeof defaultTheme;


// crio uma tipagem pro modulo, pós isso a tipagem que ele vai puxar é o que eu escrever dentro:
declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType{}
}
