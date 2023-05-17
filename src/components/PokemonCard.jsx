import { StarButton } from './StarButton';
import { Card } from 'antd';
import Meta from 'antd/lib/card/Meta';
import { useDispatch } from 'react-redux';
import { setFavorite } from '../slices/dataSlice'
import './PokemonCards.css'

const metaStyle = {
  fontSize: "1.3rem",
  color: "black"
}
const titleStyle = {
  fontSize: '1.4rem',
  background: 'rgb(250 237 255)',
}
const cardStyle = {
  border: '1px solid #d6c8f0',
  borderRadius: 12,
  overflow: 'hidden'
}
const bodyStyle = {

}

const PokemonCard = ({name, image, types, id, favorite}) => {
  const dispatch = useDispatch();
  const handleOnFavorite = () => {
    dispatch(setFavorite({pokemonId: id}))
  }
  return <Card
    extra={<StarButton isFavorite={favorite} onClick={handleOnFavorite}/>}
    title={name}
    hoverable={true}
    headStyle={titleStyle}
    style={cardStyle}
    bodyStyle={bodyStyle}
    cover={<img src={image} alt={name} style={{margin:0}}/>}>
      <Meta style={metaStyle}  description={types.map(type => (<span style={{color: 'black'}} className='type--name' key={type.type.name}>{type.type.name}</span>))} />
  </Card>
}

export { PokemonCard };
