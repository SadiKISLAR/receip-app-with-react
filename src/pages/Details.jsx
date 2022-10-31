import React from "react";
import Navbar from "../components/Navbar";
import { useLocation } from "react-router-dom";

const Details = () => {
  const { state: detail } = useLocation();
  console.log(detail);
  return (
    <div className="min-h-screen bg-blue-400">
      <Navbar />
      <p className="text-3xl text-center mt-5 font-semibold">{detail.label}</p>
      <div className="flex justify-evenly items-center h-[30rem] flex-wrap">
        <ul>
          <p className="text-xl">Nutriens</p>
          <li>Calcium: {detail.digest[5].total.toFixed()}mg</li>
          <li>Carbs: {detail.digest[1].total.toFixed()}g</li>
          <li>Cholesterol: {detail.digest[3].total.toFixed()}mg</li>
          <li>Energy: {detail.calories.toFixed()}kcal</li>
          <li>Fat: {detail.digest[0].total.toFixed()}</li>
          <li>Carbs: {detail.digest[1].total.toFixed()}</li>
          <li>Protein: {detail.digest[2].total.toFixed()}</li>
          <li>Cholesterol: {detail.digest[3].total.toFixed()}</li>
        </ul>
        <div>
          <img
            src={detail.image}
            alt={detail.label}
            width="200px"
            className="rounded-lg"
          />
        </div>
        <ul className="mt-5">
          <p className="text-xl ">Recipe</p>
          {detail.ingredientLines.map((item, idx) => (
            <li key={idx}> {item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Details;