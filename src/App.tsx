import { ThemeProvider } from 'styled-components';
import original from 'react95/dist/themes/original';
import { StartBar } from './StartBar';
import { Desktop } from './Desktop';

const App = () => (
  <ThemeProvider theme={original}>
    <Desktop/>
    <StartBar/>
  </ThemeProvider>
);

export default App;