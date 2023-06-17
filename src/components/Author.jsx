import William_Shakespear from "../assets/William_Shakespear.jpg";
import Agatha_Christie from "../assets/Agatha_Christie.jpg";
import JK_Rowlingn from "../assets/J.K._Rowling.jpg";
import Dan_Brown from "../assets/Dan_Brown.jpg";
import Stephen_King from "../assets/Stephen_King.jpg";

const Author = () => {
  const Author = [
    { image: William_Shakespear, name: "William Shakespear" },
    { image: Agatha_Christie, name: "Agatha Christie" },
    { image: JK_Rowlingn, name: "J.K. Rowling" },
    { image: Dan_Brown, name: "Dan Brown" },
    { image: Stephen_King, name: "Stephen King" },
  ];
  return (
    <div
      id="author"
      className="mt-16 p-4 mb-8 flex flex-col justify-center items-center"
    >
      <h1 className="text-2xl font-semibold sm:text-3xl md:text-4xl relative z-40">
        Top Authors
        <span className="absolute left-[35%] right-0 bottom-[-0.7rem] w-[30%] h-1 bg-gray-400 rounded"></span>
      </h1>
      <div className="w-4/5 mt-16 mb-16 grid grid-flow-col gap-10 place-items-center overflow-x-auto overscroll-contain scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200 scrollbar-thumb-rounded-full scrollbar-track-rounded-full cursor-pointer">
        {Author.map((aurtor) => (
          <div className="w-64 flex flex-col mb-8 ">
            <img
              className="h-72 rounded-sm shadow-sm"
              src={aurtor.image}
              alt=""
            />

            <div className="w-full h-16 flex justify-center items-center bg-[#e6e6e6] shadow-lg rounded-sm">
              <h1 className="font-semibold text-gray-700 md:text-lg tracking-wider">
                {aurtor.name}
              </h1>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Author;
