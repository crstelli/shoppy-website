import { Item } from "./Item";

interface Props {
  filter: string;
  value: string;
}

function Filter({ value, filter }: Props) {
  return (
    <div className="text-xl flex gap-2 ml-auto">
      <Item value={value} filter={filter}>
        All
      </Item>
      <Item value={value} filter={filter}>
        Active
      </Item>
      <Item value={value} filter={filter}>
        Soldout
      </Item>
    </div>
  );
}

export { Filter };
