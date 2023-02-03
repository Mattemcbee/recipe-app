import chicken from '../assets/images/chicken.png';
import ramen from '../assets/images/ramen.jpg';
import salad from '../assets/images/chickensalad.png';
import bagel from '../assets/images/bagel.png';
import beansalad from '../assets/images/beansalad.png';
import chickensalad from '../assets/images/chickensalad.png';


export const RECIPES = [
    {
        id: 0,
        name: 'Chicken Parmesean',
        image: chicken,
        time: 45,
        level: 'medium',
        recipeOut: ['Pound the chicken breasts until they are 1/4-inch thick. You can use either a meat mallet or a rolling pin.', 'Combine the flour, salt, and pepper on a dinner plate. On a second plate, beat the eggs with 1 tablespoon of water. On a third plate, combine the bread crumbs and 1/2 cup grated Parmesan. Coat the chicken breasts on both sides with the flour mixture, then dip both sides into the egg mixture and dredge both sides in the bread-crumb mixture, pressing lightly. ', 'Heat 1 tablespoon of butter and 1 tablespoon of olive oil in a large saute pan and cook 2 or 3 chicken breasts on medium-low heat for 2 to 3 minutes on each side, until cooked through. Add more butter and oil and cook the rest of the chicken breasts. Toss the salad greens with Lemon Vinaigrette. Place a mound of salad on each hot chicken breast. Serve with extra grated Parmesan.'],
        ingredients: ['cheese','chicken','garlic'],
        calories: 1000,
        pantry: true
    },
    {
        id: 1,
        name: 'Spicy Ramen',
        image: ramen,
        time: 10,
        level: 'easy',
        recipeOut: ['Cook your eggs ', 'Combine the broth, ginger, garlic, miso, sambal oelek, soy sauce, sesame oil, and vinegar in a saucepan. Bring everything to a boil and the reduce heat to let simmer. Keep at a simmer for 10 minutes, then spoon out the ginger and garlic slices.', 'Add the dried noodles and cook until they are soft. Use tongs to divide the noodles evenly between two bowls. Cover with broth and top with halved eggs, scallions, black sesame seeds or togarashi, and nori.'],
        calories: 800,
        ingredients: ['eggs','garlic', 'noodle'],
        pantry: true
    },
    {
        id: 2,
        name: 'Greek Salad',
        image: salad,
        time: 50,
        level: 'easy',
        recipeOut: ['Place the cucumber, peppers, tomatoes and red onion in a large bowl.', 'For the vinaigrette, whisk together the garlic, oregano, mustard, vinegar, salt and pepper in a small bowl. Still whisking, slowly add the olive oil to make an emulsion. Pour the vinaigrette over the vegetables. Add the feta and olives and toss lightly. Set aside for 30 minutes to allow the flavors to blend. Serve at room temperature.', 'Mix'],
        calories: 250,
        ingredients: ['garlic','lettuce','onion'],
        pantry: true
    },
    {
        id: 3,
        name: 'Spicy 3-Bean Chili Salad',
        image: beansalad,
        time: 15,
        level: 'medium',
        recipeOut: ['Soak the onions in a bowl of ice water to mellow their sharpness and set aside. Strain and rinse the black, kidney and pinto beans.', 'Add 3 tablespoons of the oil, the tomato paste, chili powder, cumin and oregano to a medium skillet. Turn the heat to medium-low and cook, stirring frequently with a wooden spoon or heatproof spatula, until the tomato paste and oil have come together as a dark brown paste, 6 to 8 minutes. Stir in the garlic and cook for 1 minute more. Turn off the heat, and stir in the remaining 5 tablespoons oil. Let cool for 25 minutes so the oil can absorb the flavors of the tomato-paste mixture. ', 'Pour the oil mixture into a fine-mesh strainer set over a liquid measuring cup with a spout. Do not press down on the tomato-paste mixture, just let the oil drain until there is at least 1/4 cup of it in the measuring cup, 5 to 7 minutes. Discard the tomato-paste mixture. Put the pickled jalapeno juice and 1 teaspoon salt into a large mixing bowl, and slowly whisk in the flavored oil.','Strain the onions, and add them to the bowl with the dressing. Add the jalapenos, all the beans and the red and yellow bell peppers. Stir to combine, and add salt to taste. Cover with plastic wrap, and refrigerate for at least 30 minutes or up to overnight. Serve with a dollop of sour cream, and garnish with the sliced scallions.'],
        calories: 800,
        ingredients: ['beans','garlic','onion','tomato'],
        pantry: true
    },
    {
        id: 4,
        name: 'Garlic Butter-Roasted Salmon with Potatoes & Asparagus',
        image: chickensalad,
        time: 40,
        level: 'medium',
        recipeOut: ['Preheat oven to 400 degrees F. Toss potatoes, 1 tablespoon oil, 1/4 teaspoon salt and 1/8 teaspoon pepper together in a medium bowl. Spread in an even layer on a large rimmed baking sheet. Roast until starting to soften and brown, about 15 minutes.', 'Meanwhile, toss asparagus with the remaining 1 tablespoon oil, 1/8 teaspoon salt and 1/8 teaspoon pepper in the medium bowl. Combine butter, lemon juice, garlic, 1/4 teaspoon salt and the remaining 1/4 teaspoon pepper in a small bowl.', 'Sprinkle salmon with the remaining 1/8 teaspoon salt. Move the potatoes to one side of the pan. Place the salmon in the center of the pan; drizzle with the butter mixture. Spread the asparagus on the empty side of the pan. Roast until the salmon is just cooked through and the vegetables are tender, 10 to 12 minutes. Garnish with parsley.'],
        calories: 900,
        ingredients: ['garlic','potatoes','salmon'],
        pantry: true
    },
    {
        id: 5,
        name: 'Bacon Egg and Cheese',
        image: bagel,
        time: 25,
        level: 'easy',
        recipeOut: ['Pre heat your cast iron pan (or griddle) over medium heat and, once hot, toast the bagels until golden brown. Alternatively, you can use a pop-up toaster. In that case, wait to butter the bagel after its toasted. Reserve.', 'Add the remaining tablespoon of butter and, once melted, crack both eggs into the pan. As soon as the whites start to set, puncture the yolks and gently spread them over the whites. Season with salt and pepper.', 'Layer the cheese and the bacon on top of one the eggs and, using a spatula, flip the other egg on top of the bacon. Cook for a few extra seconds for the cheese to melt.'],
        calories: 550,
        ingredients: ['bacon','bagel','cheese', 'eggs'],
        pantry: true
    }
];
