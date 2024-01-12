/** @format */

import RecipeList from "./RecipeList";
function App() {
	return (
		<>
			<RecipeList recipes={sampleRecipes} />
		</>
	);
}

const sampleRecipes = [
	{
		id: 1,
		name: "Plain Chicken",
		servings: 3,
		cookTime: "1:45",
		instructions: `1. Put salt on chicken\n2
chicken in oven\n3. Eat chicken`,
		ingredients: [
			{
				id: 1,
				name: "Chicken ",
				amount: "2 Pounds ",
			},
			{
				id: 2,
				name: "Salt",
				amount: "1 Tbs",
			},
		],
	},
	{
		id: 2,
		name: "Plain pork",
		servings: 2,
		cookTime: "0:45",
		instructions: `1. Put salt on chicken\n2
chicken in oven\n3. Eat chicken`,
		ingredients: [
			{
				id: 1,
				name: "Chicken ",
				amount: "2 Pounds ",
			},
			{
				id: 2,
				name: "Salt",
				amount: "1 Tbs",
			},
		],
	},
];

export default App;
