import "./Header.css";

interface Prop {
  user: string;
}

export default function Header({ user }: Prop) {
  const displayName = user;

  return (
    <div className="header">
      <h1 className="ice">Ice Cream Wars</h1>
      <p className="welcomeUser">Welcome {displayName}</p>
    </div>
  );
}
