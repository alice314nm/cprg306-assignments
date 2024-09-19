import ItemList from "./item-list";

export default function Page() {
    return (
      <main>
        <h1 className="m-5 text-2xl font-bold text-rose-900">Shopping List</h1>
        <ItemList/>
      </main>
    );
  }