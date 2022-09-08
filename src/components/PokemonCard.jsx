import { StarOutlined } from '@ant-design/icons';
import { Card } from 'antd';
import Meta from 'antd/lib/card/Meta';
import './PokemonCards.css'

const PokemonCard = ({name, image, types}) => {
  return <Card
    extra={<StarOutlined/>}
    title={name}
    cover={<img src={image} alt={name}/>}>
      <Meta description={types.map(type => (<span className='type--name' key={type.type.name}>{type.type.name}</span>))} />
  </Card>
}

export { PokemonCard };
