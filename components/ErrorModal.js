import classes from "./ErrorModal.module.css";

const Backdrop = (props) => {
  return (
    <>
      <div className={classes.backdrop} onClick={props.onConfirm}>
        <div className={classes.modal}>
          <p>Please insert a new task!</p>
          <div className={classes.action}>
            <button className={classes.button} onClick={props.onConfirm}>
              OK
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

const ErrorModal = (props) => {
  return (
    <>
      <Backdrop onConfirm={props.onConfirm} />
    </>
  );
};

export default ErrorModal;
