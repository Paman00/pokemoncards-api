import s from "./style.module.css";

const ModalCard = ({ children, onUnFocusCard }) => {
	return (
		<div className={s.modal} onClick={onUnFocusCard}>
			{children}
		</div>
	);
};

export { ModalCard };
