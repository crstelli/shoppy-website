import { Range } from "react-range";

interface Props {
  values: [number, number];
  setValues: React.Dispatch<React.SetStateAction<[number, number]>>;
}

function Slider({ values, setValues }: Props) {
  return (
    <div className="w-[250px] text-xl flex text-center gap-4 flex-col">
      <span>Price Range</span>
      <Range
        step={5}
        min={0}
        max={500}
        values={values}
        onChange={(vals) => setValues(vals as [number, number])}
        renderTrack={({ props, children }) => (
          <div {...props} className="h-1 bg-gray-700 rounded">
            {children}
          </div>
        )}
        renderThumb={({ props }) => {
          const { key, ...rest } = props;
          return (
            <div
              {...rest}
              key={key}
              className="w-4 h-4 bg-emerald-500 rounded-full"
            />
          );
        }}
      />
      <div className="text-center">
        ${values[0]} - ${values[1]}
      </div>
    </div>
  );
}

export { Slider };
