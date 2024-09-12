import Link from "next/link";

export default function StudentInfo(){
    return(
        <div>
            <p>Alice Ivanova: <Link href="https://github.com/alice314nm/cprg306-assignments" className="underline text-rose-400 hover:text-rose-900">GitHub repository link</Link></p>
        </div>
    );
}