const CardPreview = ({  id, src, alt, onFocusCard}) => {
    return (
        <figure onClick={() => onFocusCard(id)}>
            <img src={src} alt={alt} />
        </figure>
    );
}

export { CardPreview };
