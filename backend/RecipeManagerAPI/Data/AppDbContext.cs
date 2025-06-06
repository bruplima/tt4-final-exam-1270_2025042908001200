using Microsoft.EntityFrameworkCore;
using RecipeManagerAPI.Models;

namespace RecipeManagerAPI.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }

        public DbSet<Recipe> Recipes { get; set; }
    }
}
