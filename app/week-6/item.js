export default function Item({name, quantity, category}){
    return(
        <div className="bg-rose-50 border rounded border-rose-900 p-2 mb-5 ml-5 w-80">
            <h2 className="font-extrabold text-rose-600">{name}</h2>
            <p className="italic">Buy {quantity} in {category}</p>
        </div>
    );
}