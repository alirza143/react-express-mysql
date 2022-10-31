import './App.css';

function App() {
  return (
    <div className="App  container">
		<form>
			<div className="form-group">
				<label for="exampleInputEmail1">Name address</label>
				<input type="text" className="form-control" id="exampleInputName1" aria-describedby="NameHelp" placeholder="Enter Name"/>
				<small id="NameHelp" className="form-text text-muted">We'll never share your Name with anyone else.</small>
			</div>
			<div className="form-group">
				<label for="exampleInputLastName1">Last Name</label>
				<input type="Last Name" className="form-control" id="exampleInputLastName1" placeholder="Last Name"/>
			</div>
			<div className="form-group form-check">
				<input type="checkbox" className="form-check-input" id="exampleCheck1"/>
				<label className="form-check-label" for="exampleCheck1">Check me out</label>
			</div>
			<button type="submit" className="btn btn-primary">Submit</button>
			</form>
    </div>
  );
}

export default App;
