import s from "./style.module.css";

const CardPreview = ({ id, src, alt, onFocusCard }) => {
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

export { CardPreview };
