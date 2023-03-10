import "./SignUp.css";
import {Link} from "react-router-dom"

function NewTweet() {
  return (
    <form className="form-main">
      <div className="form-group">
        <label for="exampleInputEmail1">Email address</label>
        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
          <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
      </div>
      <div className="form-group">
        <label for="exampleInputPassword1">Password</label>
        <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
      </div>
      <div className="form-group form-check">
        <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
          <label className="form-check-label" for="exampleCheck1">Check me out</label>
      </div>
      <Link to="/"><button type="submit" className="btn btn-primary">Submit</button></Link>
      <Link to="/"><button type="submit" className="btn btn-primary">Back to main</button></Link>
    </form>
  )
}

export default NewTweet;