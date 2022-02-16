import './App.css';
import { Container } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { ApplicationView } from './application-views';

const useStyles = makeStyles(theme => ({
  appContainer: {
    minHeight: '100vh',
    minWidth: '100vw'
  }
}));

function App() {

  const classes = useStyles()

  return (
    <Container className={classes.appContainer}>
        <ApplicationView />
      </Container>
  );
}

export default App;
