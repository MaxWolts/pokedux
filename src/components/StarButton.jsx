import { StarFilled, StarOutlined } from "@ant-design/icons";
import { Button } from "antd";

const buttonStyle = {background: 'none', border:'none'};

export const StarButton = ({ isFavorite, onClick }) => {
  const Icon = isFavorite ? StarFilled : StarOutlined
  return (
    <Button icon={<Icon/>} onClick={onClick} style={buttonStyle}/>
  )
};

