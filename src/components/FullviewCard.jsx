import { GrClose } from "react-icons/gr";
import { IconEnergy } from "./IconEnergy";
import s from "./FullviewCard.module.css";

const FullviewCard = ({ card, onUnFocusCard }) => {
	return (
		<div className={s.card}>
			<div className={s.optionsDiv}>
				<button className={s.btnClose} onClick={onUnFocusCard} type="button">
					<GrClose />
				</button>
			</div>
			<div className={s.mainDiv}>
				<figure className={s.figureCard}>
					<img className={s.imgCard} src={card.images.large} alt={card.name} />
					{card.artist && (
						<p>
							Art by <span className={s.captionSpan}>{card.artist}</span>
						</p>
					)}
				</figure>

				<div className={s.infoCard}>
					<div className={s.mainInfoCard}>
						<div className={s.nameInfoCard}>
							<h2>{card.name}</h2>
						</div>
						<div className={s.typeInfoCard}>
							<div className={s.typeInfoCardDiv}>
								<p>
									{card.supertype}
									{card.subtypes && ` - ${card.subtypes[0]}`}
									{card.subtypes.length > 1 &&
										card.subtypes.slice(1).map((subtype) => `, ${subtype}`)}
								</p>
							</div>
							<div className={s.typeInfoCardDiv}>
								<p>{card.hp && `PS ${card.hp} `}</p>
								{card.types &&
									card.types.map((type) => (
										<IconEnergy key={`p${type}`} type={type} />
									))}
							</div>
						</div>
					</div>

					<div className={s.pokeInfo}>
						{!!card.attacks && (
							<div className={s.pokeInfoContainer}>
								<p className={s.pokeInfoTitle}>ATTACKS</p>
								{card.attacks.map((attack) => (
									<div key={attack.name}>
										<div className={s.pokeAttackTitle}>
											{attack.cost && (
												<div>
													{attack.cost.map((cost, index) => (
														<IconEnergy type={cost} key={`${cost}-${index}`} />
													))}
												</div>
											)}
											<h4>{attack.name}</h4>
											{attack.damage && <p>{attack.damage}</p>}
										</div>
										<p>{attack.text}</p>
									</div>
								))}
							</div>
						)}

						{!!card.rules && (
							<div className={s.pokeInfoContainer}>
								<p className={s.pokeInfoTitle}>RULES</p>
								{card.rules.map((rule, id) => (
									<p key={`rule${id}`}>{rule}</p>
								))}
							</div>
						)}

						{!!card.abilities && (
							<div className={s.pokeInfoContainer}>
								<p className={s.pokeInfoTitle}>ABILITIES</p>
								{card.abilities.map((ability) => (
									<div key={ability.name}>
										<div className={s.pokeAbilityTitle}>
											{ability.type && (
												<p className={s.pokeAbilityType}>
													{ability.type.toUpperCase()}
												</p>
											)}
											<h4>{ability.name}</h4>
										</div>
										<p>{ability.text}</p>
									</div>
								))}
							</div>
						)}
						{card.flavorText && <p className={s.flavorText}>{card.flavorText}</p>}
					</div>
					<div className={s.pokeDetails}>
						<div className={s.pokeDetailsContainer}>
							<div className={s.pokeDetailsInfo}>
								<p className={s.pokeInfoTitle}>WEAKNESS</p>
								{(card.weaknesses &&
									card.weaknesses.map((weakness) => (
										<div key={`${weakness.type}`} className={s.pokeInfoValue}>
											<IconEnergy type={weakness.type} />
											<p>{weakness.value}</p>
										</div>
									))) || (
									<div className={s.pokeInfoValue}>
										<p>N/A</p>
									</div>
								)}
							</div>

							<div className={s.pokeDetailsInfo}>
								<p className={s.pokeInfoTitle}>RESISTANCE</p>
								{(card.resistances &&
									card.resistances.map((resistance) => (
										<div key={`${resistance.type}`} className={s.pokeInfoValue}>
											<IconEnergy type={resistance.type} />
											<p>{resistance.value}</p>
										</div>
									))) || (
									<div className={s.pokeInfoValue}>
										<p>N/A</p>
									</div>
								)}
							</div>

							<div className={s.pokeDetailsInfo}>
								<p className={s.pokeInfoTitle}>RETREAT COST</p>
								{(card.retreatCost &&
									card.retreatCost.map((retreatCost, id) => (
										<IconEnergy
											type={retreatCost}
											key={`${retreatCost}${id}`}
										/>
									))) || (
									<div className={s.pokeInfoValue}>
										<p>N/A</p>
									</div>
								)}
							</div>
						</div>

						<div className={s.setDetailsContainer}>
							<div>
								<p>{card.set.name}</p>
								<p>
									{card.number}/
									{card.set?.printedTotal || card.set?.total || "??"}
								</p>
							</div>
							
							<figure className={s.figureSetImage}>
								<img
									className={s.setImageSymbol}
									src={card.set.images.symbol}
									alt={`${card.set.name} symbol`}
								/>
							</figure>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export { FullviewCard };
