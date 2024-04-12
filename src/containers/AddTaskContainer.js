import addTask from "../services/actions/addTask";
import AddTask from "../ components/AddTask";
import { connect } from "react-redux";

const mapStateToProps = (state) => ({
  taskDetails: state.reducerAddTask.tasks,
});

const mapDispatchToProps = (dispatch) => ({
  addTaskHandler: (task) => dispatch(addTask(task)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddTask);
