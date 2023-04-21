import "./summaryskill.css";



const BoxContainer = (props) => {
  return (
    <>
      <div className="box-cont ">
         {props.children}
      </div>
    </>
  );
};
export default BoxContainer;