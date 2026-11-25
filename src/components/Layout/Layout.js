import { Outlet } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import Rodape from '../Rodape/Rodape';
import styles from './Layout.module.css';

function Layout() {
  return (
    <div className={styles.estrutura}>
      <Navbar />
      <div className={styles.conteudo}>
        <Outlet />
      </div>
      <Rodape autor="Lucas Gomes" />
    </div>
  );
}

export default Layout;
