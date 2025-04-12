/*
===========================================
📝 To-Do List Filter with Anonymous Functions
===========================================

🎯 Objective:
Students will create and manipulate a simple array of to-do items using anonymous functions.

They will practice using:
- `filter()` to extract specific items
- `map()` to transform items
- `sort()` to organize items

This activity helps build a dynamic "To-Do List Filter" based on different criteria.
*/

// ============================================
// 🚀 Starting Point: To-Do List Array
// ============================================

const todos = [
    { task: "Wash the dishes", completed: false, priority: 3 },
    { task: "Write a blog post", completed: true, priority: 1 },
    { task: "Buy groceries", completed: false, priority: 2 },
    { task: "Study JavaScript", completed: true, priority: 1 },
    { task: "Walk the dog", completed: false, priority: 2 },
  ];
  
  // ============================================
  // 🔍 Tasks
  // ============================================
  
  /*
  🔹 Task 1: Filter Incomplete Tasks
  
  Step-by-Step:
  1. Use the `filter()` method on the todos array.
  2. Use an anonymous function as the callback.
  3. Return only the tasks that are not completed.
  */
  let incompleteTasks = todos.filter(task => !task.completed); // completed = false
  //console.log(incompleteTasks);
  
  /*
  🔹 Task 2: Sort Tasks by Priority
  
  Step-by-Step:
  1. Use the `sort()` method on the todos array.
  2. Use an anonymous function as the comparison function.
  3. Sort tasks in ascending order of priority (1 = highest).
  */
  
  let prioritySort = todos.sort((a, b) => a.priority - b.priority); // sort priority to highest
  //console.log(prioritySort);
  
  /*
  🔹 Task 3: Mark All Tasks as Completed
  
  Step-by-Step:
  1. Use the `map()` method to return a new array.
  2. Use an anonymous function to modify each object.
  3. Change the `completed` property to `true` for every task.
  */
  
let allTasksCompleted = todos.map(task => ({ ...task, completed: true}));  // for every task, change completed to true
//console.log(allTasksCompleted);

  /*
  🔹 Task 4: Combine Filters
  
  Step-by-Step:
  1. First, filter the todos to get only incomplete tasks.
  2. Then, sort the filtered results by priority using `sort()`.
  3. Use method chaining to perform both steps together.
  */
let priorityToDo = todos.filter(task => !task.completed).sort((a, b) => a.priority - b.priority);
//console.log(priorityToDo);

  
  // ============================================
  // 🧪 Console Test Your Work
  // ============================================
  
console.log("Incomplete Tasks:", incompleteTasks);
console.log("Sorted by Priority:", prioritySort);
console.log("All Tasks Completed:", allTasksCompleted);
console.log("Sorted Incomplete Tasks:", priorityToDo);
  