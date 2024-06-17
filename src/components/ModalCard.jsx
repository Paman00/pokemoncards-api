import s from "./ModalCard.module.css";

const ModalCard = ({ children }) => {
	return (
		<div className={s.modal} >
			{children}
		</div>
	);
};

export { ModalCard };
