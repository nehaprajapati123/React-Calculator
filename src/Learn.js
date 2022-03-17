function Learn(props) {

    console.log(props.name);
    return (
      <div>
        <h1>Hello {props.name}</h1>
      </div>
    );
  }

export default Learn