import { useNavigate } from "react-router-dom";

const RecipeCard = ({ data }) => {
  const navigate = useNavigate();
  console.log(data.recipe);
  return (
    <div className="flex flex-col justify-center  items-center  mt-5   w-[30rem] text-center">
      <p className="text-xl mb-5">{data.recipe.label}</p>
      <img
        src={data.recipe.image}
        alt=""
        width="150px"
        className="rounded-lg"
      />
      <button
        className="rounded-lg bg-black text-white p-1 w-[5rem] mt-2"
        onClick={() => navigate("/details", { state: data.recipe })}
      >
        Details
      </button>
    </div>
  );
};

export default RecipeCard;