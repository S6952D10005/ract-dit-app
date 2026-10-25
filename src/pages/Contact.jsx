import NavBarMain from "../components/NavBarMain";
import Footer from "./footer";

export default function Contact() {
  return (
    <div className="min-h-screen flex flex-col justify-between">
      <NavBarMain />

      <main className="grow max-w-4xl w-[90%] mx-auto py-8">
        <h1 className="text-center font-charm font-bold text-4xl text-red-500 mb-2">
          Contact Page
        </h1>
        <h1 className="text-center font-itim font-bold text-3xl text-green-600 mb-4">
          ติดต่อ
        </h1>
        <hr className="border border-black my-5 w-[80%] mx-auto" />
        <p className="text-center font-kanit font-bold text-xl leading-relaxed my-5">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores ea earum nesciunt, aut, nemo explicabo rem aliquam odit tempore quos cum quis ipsum voluptatibus suscipit saepe deserunt odio doloribus nostrum!
        </p>
        <h3 className="text-center font-kanit font-bold text-2xl text-orange-500 my-5">
          ยินดีตอนรับทุกท่าน Hey Hey Hey
        </h3>
        <hr className="my-5 w-[80%] mx-auto" />
      </main>

      <Footer />
    </div>
  );
}
