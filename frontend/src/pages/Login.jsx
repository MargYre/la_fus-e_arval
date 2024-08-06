// Dans pages/Login.jsx
import Form from "../components/form";
import { Link } from "react-router-dom";

function Login() {   
    return <div>
        <Form route="/api/token/" method="login" />
        <div className="form-footer">
        <p>
          Don't have an account? <Link to="/register">Register here</Link>
        </p>
      </div>
    </div>
}

export default Login;