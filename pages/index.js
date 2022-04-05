import Front from './Front'
import { useSession, signIn, signOut } from "next-auth/react"
export default function Home() {
  const { data: session } = useSession();
  if (session) {
    return (
      <Front />
    );
  }
  return (
    <section className="text-gray-600 body-font relative">
      <div className="container px-5 py-4 mx-auto">
        <div className="flex flex-col text-center w-full mb-12">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">You are not logged in, Please login the page</h1>
        </div>
        <div className="lg:w-1/2 md:w-2/3 mx-auto">
          <div className="flex flex-wrap -m-2">
            <div className="p-2 w-full">
              <button onClick={() => signIn()} className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Sign in with google</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}