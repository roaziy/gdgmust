import Link from 'next/link'

// Import Navbar Item Route
import { useNavItems } from "@/components/navbar/navItems";
 
export default function NotFound() {
  const navItems = useNavItems();
  const homeItem = navItems[0];
  return (
    <div>
      <h2>Not Found</h2>
      <p>Could not find requested resource</p>
      <Link href={homeItem.anchor}>Return Home</Link>
    </div>
  )
}