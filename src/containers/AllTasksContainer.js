import AllTasks from "../ components/AllTasks";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  console.log(state);
  return {
    taskDetails: state.reducerAddTask.tasks,
  };
};

const mapDispatchToProps = (dispatch) => {
  return null;
};

export default connect(mapStateToProps, mapDispatchToProps)(AllTasks);
