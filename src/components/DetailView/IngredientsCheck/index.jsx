import './component.css';

import { useParams,useNavigate, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

function IngrdientsCheck() {
  const url = "http://www.themealdb.com/api/json/v1/1/lookup.php?i=";
  let resp;
  let elements = [];

  const navigate = useNavigate();
  const [recipe, setRecipe] = useState([]);
  const [ingredients, setingredients] = useState([]);
  let params = useParams();

  useEffect(()=>{
    async function fetchRecipe(){
      resp = await axios.get(url+params.id); 
      setRecipe(resp.data.meals[0]);
      console.log(recipe);
      //Loop harcored to 21 because of api
      for(let i = 1; i < 21; i++){
        let ingr = recipe[`strIngredient${i}`];
        if (ingr == "" || ingr == undefined ) {break;}

        elements.push([ingr, recipe[`strMeasure${i}`]]);
      }
      setingredients(elements);
      console.log(ingredients)
      console.log(elements)
    }
    fetchRecipe();
  },[])



  return (
    <>
      {recipe!=[] && 
      <div className='recipe'>
        <h1>{recipe.strMeal || 'Error con fetch'}</h1>
        <p>pio pio</p>
        <section>
          {/* Save recipe changes, +/- buttons to ingredients, change ingredients */}
          {ingredients.map((ingredient, i)=>
            <div key={`check${i}`} className='check'>
              <input id={`check${i}`} type="checkbox"/>
              <label for={`check${i}`}> {`${ingredient[0]} ${ingredient[1]}`} </label>
            </div>
          )}
          {console.log(recipe)}
        </section>
      </div>}
    </>);
}

export default IngrdientsCheck;