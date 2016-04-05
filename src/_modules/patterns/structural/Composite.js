/*
Composite pattern: 
  use to remove tight coupling
  and alternative to Inheritance

*/

() => {

  class SimpleIngredient {
    constructor(name, calories, vitaminContent) {
      this.name = name
      this.calories = calories
      this.vitaminContent = vitaminContent
    }
    getName() {
      return this.name
    }
    getCalories() {
      return this.calories
    }
    getVitaminContent() {
      return this.vitaminContent
    }
  }

  class ComplexIngredient {
    constructor(name) {
      this.name = name
      this.ingredients = new Array()
    }
    getName() {
      return this.name
    }
    addIngredient(ingredient) {
      this.ingredients.push(ingredient)
    }
    getCalories() {
      return this.ingredients.reduce((p,n) => p + n.getCalories(), 0)
    }    
    getVitaminContent() {
      return this.ingredients.reduce((p,n) => p + n.getVitaminContent(), 0)
    }
  }

  let egg = new SimpleIngredient("Egg", 155, 6, 0);
  let milk = new SimpleIngredient("Milk", 42, 0, 0);
  let sugar = new SimpleIngredient("Sugar", 387, 0,0);
  let rice = new SimpleIngredient("Rice", 370, 8, 0);

  let ricePudding = new CompoundIngredient("Rice Pudding");

  ricePudding.AddIngredient(egg);
  ricePudding.AddIngredient(rice);
  ricePudding.AddIngredient(milk);
  ricePudding.AddIngredient(sugar);

  ricePudding.GetCalories()
}
