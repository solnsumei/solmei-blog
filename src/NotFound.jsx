import { Link } from "react-router-dom"

const NotFound = () => {
  return (
    <div>
      <h2>404 error. Resource not found!</h2>

      <Link to="/">Back to Home</Link>
    </div>
  );
}
 
export default NotFound;