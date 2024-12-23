
import HomeSection from "./components/HomeSection";
import Posts from "./posts/page";

 const Home:React.FC=()=> {


  return (
    <div className="w-full">
      <HomeSection/>
      <Posts limit={4}/>
    </div>
  );
}

export default Home;