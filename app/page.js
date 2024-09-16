import Link from "next/link";


export default function Home() {
  return (
    <main>
      <h1 className="text-2xl pt-10 pl-10 text-rose-900 font-bold">CPRG 306: Web Development 2 - Assignments</h1>
      <ul>
        <li className="pt-5 pl-20">
          <Link href="./week-2/" className="underline text-xl text-rose-400 hover:text-rose-900">- Week-2 Assignment</Link>
        </li>
        <li className="pt-5 pl-20">
          <Link href="./week-3/" className="underline text-xl text-rose-400 hover:text-rose-900">- Week-3 Assignment</Link>
        </li>
      </ul>
    </main>
  );
}
