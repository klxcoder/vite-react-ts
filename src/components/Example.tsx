import styles from './Example.module.scss';
import { FaCheck } from 'react-icons/fa';

function Example({
  index,
}: {
  index: number,
}) {
  return (
    <div className={styles.app}>Example {index} <FaCheck /></div>
  )
}

export default Example
