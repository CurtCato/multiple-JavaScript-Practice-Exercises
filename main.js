let employees = [
    {
      name: "Bob",
      department: "sales",
      title: "sales manager"
    },
    {
      name: "Tina",
      department: "finance",
      title: "director of finance"
    },
    {
      name: "Randy",
      department: "IT",
      title: "hardware guy"
    },
    {
      name: "Glenda",
      department: "C-suite",
      title: "CEO"
    }
  ]

// employees.forEach( function(employee) {
//     console.log(`${employee.name}'s job title is ${employee.title}`);
// });

  for (let i=0; i < employees.length; i++) {
      console.log(`${employees[i].name}'s job title is ${employees[i].title}`);
  }


//   numero dos

 function printFaveDoog(breed) {
    if (breed) {
        return `My favorite dog is ${breed}`
    } else {
        return 'I like cats.'
    }
  }

  let message = printFaveDoog('Aussie/Border Collie mix')
  console.log('When it comes to pets,', message);

  let sad = printFaveDoog()
  console.log('When it comes to pets,', sad)

//   Write a function that takes a string of a dog breed as an argument (like 'border collie')
// Have the function return "my favorite dog breed is" plus the passed in string.
//          if no argument is passed to the function, return "I like cats."
// Execute the function in a way that captures the returned value in a variable.
// Console.log the string "When it comes to pets," plus the returned value of the function.




// Use dot notation to access the value of the key "meaning_of_life"
let hitchhikers_guide = {
    characters: ["Zaphod", "Arthur", "Ford", "Trillian"],
    catchphrase: "Don't Panic",
    random_facts: {
        copies_sold: 14000000,
        formats: ["radio", "TV", "film", "graphic novel"],
        ultimate_answer: {
            meaning_of_life: 42
        }
    }
};
console.log(hitchhikers_guide.random_facts.ultimate_answer.meaning_of_life);

let meaning = hitchhikers_guide.random_facts.ultimate_answer.meaning_of_life;
console.log(meaning);

// Objects' keys can contain value of any type even functions
// 1. Using the object above, console log "Our company's lawyer is Jeff Winger" 
//    using dot notation to access 'name'
// 2. Console log "Jeff was hired on 09/22/2010" using bracket notation.
// 3. Add a new key, `vacation_days`, and its value, `20`, to `employee`. Use 
//    either dot or bracket notation. Does it matter which one you use? Try 
//    both to find out.

let employee = {
  name: "Jeff Winger",
  age: 37,
  department: "legal",
  hire_date: "09/22/2010"
}

let lawyer = employee.name;
console.log(`Our company's lawyer is ${lawyer}`);

console.log(`${lawyer} was hired on ${employee["hire_date"]}`);

// employee.vacation_days = 20;
employee["vacation_days"] = 20;

let eom = "employee_of_the_month";
employee[eom] = false;
employee.eom = false;


// 1. Add an action that the painter can perform.
// 2. Have her take that action by execucting the method you created.
// BONUS: Add a method that allows us to add new tools for the painter.


let painter = {
    tools: ["brush", "roller", "caulk", "sandpaper", "dropcloth"],
    uniform: "white overalls",
    cost_per_hour: 25.00,
    insured: true,
    paint: function(thingy) {
        window.alert(`The painter is Painting a ${thingy}`)
    }
  }

//   painter.paint("his bottom")



//   Practice: Fast Food Ordering

// The object should have a property named orders that is an array. 
//      You will need to define this.
// Define a function to represent the behavior of placing an order. 
//      It should accept one argument named meal. This argument will be an object. 
//      There is starter code provided.
// Define a function to represent the behavior of getting all orders. 
//       It should return the order property (hint: this). You will need to define this.
// Each meal object should have three properties: sandwichType, fries (true or false), and drinkSize.

const restaurant = {
    name: "Bob's Burgers",
    order: [],
    placeOrder: function (meal) {
      this.order.push(meal)
    }
}

const chickenComboMeal = {
    sandwichType: "lettuceWrap",
    fries: false, 
    drinkSize: "small"
}
const cheeseBurgerMeal = {
    sandwichType: "regular",
    fries: true,
    drinkSize: "medium"
}
const hamBurgerMeal = {
  sandwichType: "regular",
  fries: true,
  drinSize: "large"
}


// Place an order
restaurant.placeOrder(chickenComboMeal)
restaurant.placeOrder(cheeseBurgerMeal)
restaurant.placeOrder(hamBurgerMeal)

console.log(restaurant.order)


// Invoke the function to return the list of all orders

// Output all orders to the console using console.table()