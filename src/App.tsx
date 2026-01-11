import styles from './App.module.scss';
import {
  Link,
  Route,
  Routes,
} from 'react-router-dom';
import Example1 from './components/Example1/Example1';
import Example2 from './components/Example2/Example2';

function App() {
  return (
    <div className={styles.app}>
      <div className={styles.navbar}>
        <Link
          to={'/example1'}
        >
          /example1
        </Link>
        <Link
          to={'/example2'}
        >
          /example2
        </Link>
      </div>
      <div className={styles.content}>
        <Routes>
          <Route
            path="/example1"
            element={<Example1 />}
          />
          <Route
            path="/example2"
            element={<Example2 />}
          />
        </Routes>
      </div>
    </div>
  )
}

export default App
