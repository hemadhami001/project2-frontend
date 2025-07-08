import { setName } from "@/lib/store/userSlice";
import { useDispatch } from "react-redux";


export default function Home() {
  let name = "hema"
  const dispatch = useDispatch()
  dispatch(setName(name))
  return (
    <h1>Hello! I am Hema Dhami.</h1>
  );
}
