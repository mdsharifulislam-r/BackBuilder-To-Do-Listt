import { useAppDispatch } from "../../lib/hooks/hooks";
import { logOut } from "../../lib/store/features/userSlice";
import DateTime from "./DateTime";
import Form from "./Form";
import TodoContainet from "./TodoContainet";

export default function Home() {
  const dispatch = useAppDispatch()
  return (
    <div className="w-full min-h-screen bg-blue-100">
      <div className="container mx-auto min-h-screen flex justify-center place-items-center">
        <div className="w-[90%] md:w-[40%] bg-white min-h-44 rounded-md shadow-xl p-5">
        <DateTime/>
        <div className="my-2">
            <h1 className="text-2xl text-slate-700">Backbuilder Todo List</h1>
        </div>
        <Form/>
        <TodoContainet/>
        </div>
      </div>
      <div className="fixed top-8 right-8">
        <button onClick={()=>dispatch(logOut())}  className="bg-slate-600 text-white px-4 py-2 rounded-md">Logout</button>
      </div>
    </div>
  )
}
