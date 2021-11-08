// This "Subtodolist"is for checking and practicing divide props
const SubTodoList = (propss) => {
  return (
    <li>
      <input type="checkbox" className="inputBox" /> When I have time, I can{" "}
      {propss.subtodo}
    </li>
  );
};

export default SubTodoList;
