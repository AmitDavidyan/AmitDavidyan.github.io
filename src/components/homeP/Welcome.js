import "../homeP/Welcome.css";
import { Link } from "react-router-dom";

function Welcome() {
  return (
    <div>
      <h1 className="Welcome">
        Welcome to the largest and cheapest website in Israel!
      </h1>
      <h2 className="menu1">Among our products you will find: </h2>
      <div className="li_1">
        <h4>
          <li>Phone</li>
          <li>Laptop</li>
          <li>TV</li>
        </h4>
      </div>
      <div className="pic1">
        <img
          src="https://ksp.co.il/newmap/photo/atta3.png"
          width={400}
          height={180}
        />
      </div>
      <Link to="/products">
        <button className="button1">Press here to start a shopping</button>
      </Link>
    </div>
  );
}

export default Welcome;
