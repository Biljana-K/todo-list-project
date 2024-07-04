import classes from "./CentralHeader.module.css";

const CentralHeader = ({ todos_completed, total_todos }) => {
  return (
    <>
      <section className={classes["todoheader_section"]}>
        <div>
          {todos_completed}/{total_todos}
        </div>
        <div>
          <p>Tasks completed.</p>
        </div>
      </section>
    </>
  );
};

export default CentralHeader;
