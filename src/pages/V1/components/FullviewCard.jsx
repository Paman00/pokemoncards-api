import { CloseIcon } from '@components/Icons/Close';
import { EnergyImage } from './EnergyImage';

const FullviewCard = ({ card, onUnFocusCard }) => {
  return (
    <div className='m-12 flex max-h-[95%] flex-col items-center justify-center bg-white'>
      <div className='flex w-full justify-end bg-gray-300 px-2 py-1'>
        <button
          className='flex aspect-square w-6 items-center justify-center'
          onClick={onUnFocusCard}
          type='button'
        >
          <CloseIcon />
        </button>
      </div>
      <div className='flex max-w-full flex-wrap justify-center gap-4 overflow-auto p-2'>
        <figure className='max-w-11/12 flex w-11/12 flex-col items-center justify-center gap-1 md:w-[45%]'>
          <img src={card.images.large} alt={card.name} />
          {card.artist && (
            <figcaption className='text-sm italic text-gray-500'>
              Art by <span className='font-bold'>{card.artist}</span>
            </figcaption>
          )}
        </figure>

        <div className='w-11/12 space-y-4 md:flex md:w-[45%] md:flex-col md:justify-between'>
          <div className='rounded-lg bg-[#dedede]'>
            <div className='rounded-t-lg bg-[#bababa] py-2'>
              <h2 className='font-bold'>{card.name}</h2>
            </div>
            <div className='flex justify-around py-2'>
              <div className='flex'>
                <p>
                  {card.supertype}
                  {card.subtypes && ` - ${card.subtypes[0]}`}
                  {card.subtypes &&
                    card.subtypes.length > 1 &&
                    card.subtypes.slice(1).map((subtype) => `, ${subtype}`)}
                </p>
              </div>
              <div className='flex'>
                <p>{card.hp && `PS ${card.hp} `}</p>
                {card.types &&
                  card.types.map((type) => (
                    <EnergyImage key={`p${type}`} type={type} />
                  ))}
              </div>
            </div>
          </div>

          <div className='space-y-4 text-left'>
            {!!card.attacks && (
              <div className=''>
                <p className='text-xs'>ATTACKS</p>
                {card.attacks.map((attack) => (
                  <div key={attack.name}>
                    <div className='flex items-center justify-between'>
                      {attack.cost && (
                        <div className='flex'>
                          {attack.cost.map((cost, index) => (
                            <EnergyImage type={cost} key={`${cost}-${index}`} />
                          ))}
                        </div>
                      )}
                      <h4 className='font-bold'>{attack.name}</h4>
                      {attack.damage && <p>{attack.damage}</p>}
                    </div>
                    <p>{attack.text}</p>
                  </div>
                ))}
              </div>
            )}

            {!!card.rules && (
              <div className=''>
                <p className='text-sm'>RULES</p>
                {card.rules.map((rule, id) => (
                  <p key={`rule${id}`}>{rule}</p>
                ))}
              </div>
            )}

            {!!card.abilities && (
              <div className=''>
                <p className='text-sm'>ABILITIES</p>
                {card.abilities.map((ability) => (
                  <div key={ability.name}>
                    <div className='flex items-center justify-start'>
                      {ability.type && (
                        <p className='mr-1 text-sm italic'>
                          {ability.type.toUpperCase()}
                        </p>
                      )}
                      <h4 className='font-bold'>{ability.name}</h4>
                    </div>
                    <p>{ability.text}</p>
                  </div>
                ))}
              </div>
            )}
            {card.flavorText && <p className='italic'>{card.flavorText}</p>}
          </div>
          <div className='rounded-sm bg-[#dedede]'>
            <div className='flex items-start justify-between px-4 py-1'>
              <div className='pokeDetailsInfo'>
                <p className='text-xs'>WEAKNESS</p>
                {(card.weaknesses &&
                  card.weaknesses.map((weakness) => (
                    <div
                      key={`${weakness.type}`}
                      className='flex items-center justify-center'
                    >
                      <EnergyImage type={weakness.type} />
                      <p>{weakness.value}</p>
                    </div>
                  ))) || (
                    <div className='flex items-center justify-center'>
                      <p>N/A</p>
                    </div>
                )}
              </div>

              <div className='pokeDetailsInfo'>
                <p className='text-xs'>RESISTANCE</p>
                {(card.resistances &&
                  card.resistances.map((resistance) => (
                    <div
                      key={`${resistance.type}`}
                      className='flex items-center justify-center'
                    >
                      <EnergyImage type={resistance.type} />
                      <p>{resistance.value}</p>
                    </div>
                  ))) || (
                    <div className='flex items-center justify-center'>
                      <p>N/A</p>
                    </div>
                )}
              </div>

              <div className='pokeDetailsInfo'>
                <p className='text-xs'>RETREAT COST</p>
                <div className='flex items-center justify-center'>
                  {(card.retreatCost &&
                    card.retreatCost.map((retreatCost, id) => (
                      <EnergyImage
                        type={retreatCost}
                        key={`${retreatCost}${id}`}
                      />
                    ))) || <p>N/A</p>}
                </div>
              </div>
            </div>

            <div className='flex items-center justify-between px-4 py-1'>
              <div>
                <p>{card.set.name}</p>
                <p>
                  {card.number}/
                  {card.set?.printedTotal || card.set?.total || '??'}
                </p>
              </div>

              <figure className='aspect-square w-6'>
                <img
                  className='h-full w-full object-cover'
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
