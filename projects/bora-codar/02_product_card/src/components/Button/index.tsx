import Icon360 from '../../assets/icon-360.svg';
import IconClose from '../../assets/icon-close.svg'
import './styles.css'

interface ButtonProps {
  start3D: boolean;
  onHandleClick: () => void;
}

export function Button({start3D, onHandleClick}: ButtonProps) {
  return (
    <button onClick={onHandleClick}>
      {start3D ? (
        <img src={IconClose} alt="Fechar visualização 360" />
        ) : (
          <img src={Icon360} alt="Abrir visualização 360" />
      )}
    </button>
  )
}