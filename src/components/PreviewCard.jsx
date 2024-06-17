import s from "./PreviewCard.module.css";

const PreviewCard = ({ id, src, alt, onFocusCard }) => {
    return (
        <figure 
            className={s.card}
            onClick={() => onFocusCard(id)} 
        >
            <img 
                className={s.img}
                src={src} 
                alt={alt} 
            />
        </figure>
    );
}

export { PreviewCard };
