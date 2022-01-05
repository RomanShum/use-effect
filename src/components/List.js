function List({ onHandleClick, users }) {
  const onOpenDetail = (e) => {
    onHandleClick(e.target.dataset.id, e.target.innerHTML);
  };
  return (
    <ul>
      {users.map((item) => (
        <li onClick={onOpenDetail} data-id={item.id} key={item.id}>
          {item.name}
        </li>
      ))}
    </ul>
  );
}

export default List;
