import { Range } from "react-range";

function Slider({ values, setValues }) {
  return (
    <div className="w-[200px] text-xl flex text-center gap-2 flex-col">
      <span>Price Range</span>
      <Range
        step={5}
        min={0}
        max={500}
        values={values}
        onChange={setValues}
        renderTrack={({ props, children }) => (
          <div {...props} className="h-1 bg-gray-700 rounded">
            {children}
          </div>
        )}
        renderThumb={({ props }) => (
          <div {...props} className="w-4 h-4 bg-emerald-500 rounded-full" />
        )}
      />
      <div className="text-center">
        ${values[0]} - ${values[1]}
      </div>
    </div>
  );
}

export { Slider };
