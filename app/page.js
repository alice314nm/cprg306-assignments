import Link from "next/link";


export default function Home() {
  return (
    <main>
      <h1 className="text-2xl pt-10 pl-10 text-rose-900 font-bold">CPRG 306: Web Development 2 - Assignments</h1>
      <ul>
        <li className="pt-5 pl-20"><Link href="./week-2/" className="underline text-xl text-rose-400 hover:text-rose-900">- Week-2 Assignment</Link></li>
        <li className="pt-5 pl-20"><Link href="./week-3/" className="underline text-xl text-rose-400 hover:text-rose-900">- Week-3 Assignment</Link></li>
        <li className="pt-5 pl-20"><Link href="./week-4/" className="underline text-xl text-rose-400 hover:text-rose-900">- Week-4 Assignment</Link></li>
        <li className="pt-5 pl-20"><Link href="./week-5/" className="underline text-xl text-rose-400 hover:text-rose-900">- Week-5 Assignment</Link></li>
        <li className="pt-5 pl-20"><Link href="./week-6/" className="underline text-xl text-rose-400 hover:text-rose-900">- Week-6 Assignment</Link></li>
        <li className="pt-5 pl-20"><Link href="./week-7/" className="underline text-xl text-rose-400 hover:text-rose-900">- Week-7 Assignment</Link></li>
        <li className="pt-5 pl-20"><Link href="./week-8/" className="underline text-xl text-rose-400 hover:text-rose-900">- Week-8 Assignment</Link></li>

      </ul>
    </main>
  );
}
