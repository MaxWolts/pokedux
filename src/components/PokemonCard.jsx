import { StarButton } from './StarButton';
import { Card } from 'antd';
import Meta from 'antd/lib/card/Meta';
import { useDispatch } from 'react-redux';
import { setFavorite } from '../slices/dataSlice'
import './PokemonCards.css'


const PokemonCard = ({name, image, types, id, favorite}) => {
  const dispatch = useDispatch();
  const handleOnFavorite = () => {
    dispatch(setFavorite({pokemonId: id}))
  }
  return <Card
    extra={<StarButton isFavorite={favorite} onClick={handleOnFavorite}/>}
    title={name}
    cover={<img src={image} alt={name} style={{margin:0}}/>}>
      <Meta description={types.map(type => (<span className='type--name' key={type.type.name}>{type.type.name}</span>))} />
  </Card>
}

export { PokemonCard };
