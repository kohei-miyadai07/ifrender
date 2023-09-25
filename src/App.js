function Item({ name, isPacked }) {
  let itemContent = name;
  if (isPacked) {
    itemContent = (
      <>
        <del>{name + '✔'}</del>
        <p></p>
      </>
    );
  }
  return (
    <>
      <li>{itemContent}</li>
    </>
  );
}

function PackingList() {
  return (
    <section>
      <h1>Sally Ride's Packing List</h1>
      <ul>
        <Item isPacked={true} name="Space suit"></Item>
        <Item isPacked={true} name="Helmet with a golden leaf"></Item>
        <Item isPacked={false} name="Photo of Tam"></Item>
      </ul>
    </section>
  );
}

export default PackingList;
