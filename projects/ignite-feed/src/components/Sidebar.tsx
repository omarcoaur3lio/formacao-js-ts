import styles from './Sidebar.module.css';
import { PencilLine } from 'phosphor-react';
import { Avatar } from './Avatar';

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
        <img className={styles.cover} src="https://source.unsplash.com/random/500x500" />
        <div className={styles.profile}>
            <Avatar src="https://github.com/omarcoaur3lio.png" />
            <strong>Marco Aurélio</strong>
            <span>Front-end Developer</span>
        </div>
        <footer>
            <a href="#">
                <PencilLine size={20} />
                Editar seu perfil
            </a>
        </footer>
    </aside>
  )
}