
import { ThemeProvider } from 'styled-components';

/* Pick a theme of your choice */
import original from 'react95/dist/themes/original';
import { StartBar } from './StartBar';

const App = () => (
  <ThemeProvider theme={original}>
    <StartBar/>
  </ThemeProvider>
);

export default App;