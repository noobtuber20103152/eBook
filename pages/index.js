import Front from './Front'
import { useSession, signIn, signOut } from "next-auth/react"
export default function Home() {
  const { data: session } = useSession();
  if (session) {
    return (
      <div>
        Welcome user<br />
        <button onClick={() => signOut()}>Sign out</button>
      </div>
    );
  }
  return (
    <Front/>
  );
}