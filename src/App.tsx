import styles from './App.module.scss';
import {
  Link,
  Route,
  Routes,
} from 'react-router-dom';
import Example from './components/Example';


function App() {
  return (
    <div className={styles.app}>
      <Link
        to={'/example'}
      >
        Go to /example
      </Link>
      <Routes>
        <Route
          path="/example"
          element={<Example />}
        />
      </Routes>
    </div>
  )
}

export default App
