import "./Ad.css";

interface Prop {
  flavor: string;
  fontSize: number;
  darkTheme: boolean;
}

export default function Ad({ flavor, fontSize, darkTheme }: Prop) {
  const fontSizeStyle = {
    fontSize: fontSize + "px",
  };
  let themeClass = "light";
  if (darkTheme) {
    themeClass = "dark";
  }
  return (
    <div className="banner">
      <div className={"Ad " + themeClass}>
        <p className={"ad_vote" + themeClass}>Vote For</p>
        <p className={"ad_flavor" + themeClass} style={fontSizeStyle}>
          {flavor}
        </p>
      </div>
    </div>
  );
}
