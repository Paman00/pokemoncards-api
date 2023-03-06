import { IconEnergy } from "../IconEnergy/IconEnergy";
import s from "./style.module.css";

const CardDetails = ({ card, onUnFocusCard }) => {
	return (
        <div className={s.card}>
            <button onClick={onUnFocusCard} type="button">
				X
			</button>

			<figure>
				<img src={card.images.large} alt={card.name} />
				{card.artist && <figcaption>Art by {card.artist}</figcaption>}
			</figure>

			<div>
				<div>
					<div>
						<h2>{card.name}</h2>
					</div>
					<div>
						<p>
							{card.supertype}
							{card.subtypes && ` - ${card.subtypes[0]}`}
							{card.subtypes.length > 1 &&
								card.subtypes.slice(1).map((subtype) => `, ${subtype}`)}
						</p>
						<p>
							{card.hp && `HP ${card.hp} `}
							{card.types &&
								card.types.map((type) => (
									<IconEnergy key={`p${type}`} type={type} />
								))}
						</p>
					</div>
				</div>

				<div>
					{card.rules && (
						<>
							<p>RULES</p>
							<p>{card.rules}</p>
						</>
					)}

					{card.attacks && (
						<>
							<p>ATTACKS</p>
							{card.attacks.map((attack) => (
								<div key={attack.name}>
									{attack.cost && (
										<>
											{attack.cost.map((cost, index) => (
												<IconEnergy type={cost} key={`${cost}-${index}`} />
											))}
										</>
									)}
									<h4>{attack.name}</h4>
									{attack.damage && <p>{attack.damage}</p>}
									<p>{attack.text}</p>
								</div>
							))}
						</>
					)}

					{card.abilities && (
						<>
							<p>ABILITIES</p>
							{card.abilities.map((ability) => {
								<div key={ability.name}>
									<h4>{ability.name}</h4>
									{ability.type && <p>` - ${ability.type}`</p>}
									<p>{ability.text}</p>
								</div>;
							})}
						</>
					)}
				</div>
				<div>
					{card.set ? (
						<div>
							<p>{card.set.name}</p>
							<p>
								{card.number}/
								{card.set?.printedTotal || card.set?.total || "??"}{" "}
								{card.rarity && card.rarity}
							</p>
							<img
								src={card.set.images.symbol}
								alt={`${card.set.name} symbol`}
							/>
						</div>
					) : (
						card.number && (
							<div>
								<p>
									{card.number}/?? {card.rarity && card.rarity}
								</p>
							</div>
						)
					)}
				</div>
				{card.flavorText && <p>{card.FlavorText}</p>}
			</div>
        </div>
	);
};

export { CardDetails };
