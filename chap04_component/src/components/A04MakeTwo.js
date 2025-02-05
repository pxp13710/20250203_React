const MakeTwo = (props) => {
  const { item } = props;

  return (
    <tr key={item.id}>
      <td>{item.id}</td>
      <td>{item.team}</td>
      <td>{item.value}</td>
    </tr>
  )
}
export default MakeTwo;
