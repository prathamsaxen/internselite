function Designation(props) {
    console.log(props);
  return (
   <>
      <h2>Sr. Software Engineer living in UAE</h2>
      <p>{props.domain}</p>
   </>
  );
}

export default Designation;
