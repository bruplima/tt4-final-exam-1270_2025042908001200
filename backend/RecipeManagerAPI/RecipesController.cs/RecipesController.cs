using Microsoft.AspNetCore.Mvc;
using RecipeManagerAPI.Models;

namespace RecipeManagerAPI.Controllers
{
    [Route("backend/[controller]")]
    [ApiController]
    public class RecipesController : ControllerBase
    {
        private static List<Recipe> recipes = new List<Recipe>
        {
            new Recipe { Id = 1, Name = "Pasta", Ingredients = "Noodles, Tomato Sauce", Instructions = "Boil and mix", PrepTime = 15 },
            new Recipe { Id = 2, Name = "Salad", Ingredients = "Lettuce, Tomato, Cucumber", Instructions = "Mix everything", PrepTime = 10 }
        };

        [HttpGet]
        public ActionResult<IEnumerable<Recipe>> GetRecipes()
        {
            return Ok(recipes);
        }
    }
}
