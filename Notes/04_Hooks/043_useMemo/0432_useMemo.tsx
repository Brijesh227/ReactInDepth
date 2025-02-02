import { useMemo, useState, memo } from "react";

function Swatch ({ params }: any) {
  console.log("swatch rendered", params.color);
  return (
    <div style={{ margin: 2, width: 75, height: 75, backgroundColor: params.color }}
    ></div>
  )
}

const MemoSwatched = memo(Swatch);

export default function UseMemo () {
  const [color, setColor] = useState("red");

  // Swatch render every time and re-render same red color div
  console.log("Use memo rendered");

  // useMemo
  const param = useMemo(() => ({ color }),[color])

  return (
    <div>
      <div>
        <button onClick={() => setColor(color === "red" ? "blue" : "red")}> Change color</button>
      </div>
      {/* <Swatch params={{color}} /> */}

      {/* for use memo */}
      {/* <Swatch params={param} /> */}

      {/* but still it's render Swatch because everytime get newObject */}

      <MemoSwatched params={param} />

    </div>
  )
}