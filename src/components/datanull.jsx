export default function DataNull({ basabasi }) {
  return (
    <div className="data-null d-flex">
      <h4>{basabasi ? basabasi : ""}</h4>
      <h1 className="m-auto">Data not found</h1>
    </div>
  );
}
