import Link from "next/link";

export default function Nav() {
    return (
        <nav>
            <Link href="/">Car 1</Link>
            <Link href="/gateway">Car 2</Link>
            <Link href="/station">Car 3</Link>
            <Link href="/colony">Car 4</Link>
        </nav>   
    );
}