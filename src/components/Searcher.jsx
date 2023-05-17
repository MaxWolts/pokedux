import { Input } from "antd";

const Searcher = ({handdleSearch}) => {
  return <Input.Search placeholder="Buscar..." style={{marginBottom: '2rem'}} size={"large"} onChange={(input) => {
    handdleSearch(input.target.value);
  }}/>
};

export { Searcher };
