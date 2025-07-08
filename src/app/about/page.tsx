import { useAppSelector } from '@/lib/store/hooks';
import { useSelector } from 'react-redux';


function About() {
  // userrSlice = name, address ma j baseko xa tyo yeta fetch/chaheko xa
  const data = useAppSelector((store) => store.user);
  /*
   name : "hema",
   address : "mahendranagar",

  */

  data.name; // "hema"
  data.address; // "mahendranagar"
  return (
    <div>
      <h1>About Page</h1>
      <p>This is the about page of our application.</p>
    </div>
  );
}   

export default About;
// This code defines a simple About page component in a Next.js application.