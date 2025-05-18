import Todo from "../model/todo.js";

export const createTodo = async (req, res) => {
  try {
    const { title, description } = req.body;
    if (!title || !description) {
      return res.status(400).json({ message: "Please fill all the fields" });
    }

    const newTodo = new Todo({
      title: title,
      description: description,
    });

    const savedTodo = await newTodo.save();
    if (!savedTodo) {
      return res.status(500).json({ message: "Error creating todo" });
    } else {
      return res
        .status(201)
        .json({ message: "Todo created successfully", todo: savedTodo });
    }
  } catch (error) {
    console.error("Error creating todo:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const getTodos = async (req, res) => {
  try {
    const { userId } = req.params;
    if (!userId) {
      return res.status(400).json({ message: "User ID is required" });
    }

    const findTodos = await Todo.find({ createdBy: userId });

    if (!findTodos) {
      return res.status(404).json({ message: "No todos found" });
    } else {
      return res.status(200).json({
        message: "Todos fetched successfully",
        todos: findTodos.map((todo) => {
          return { title: todo.title, description: todo.description };
        }),
      });
    }
  } catch (error) {
    console.error("Error fetching todos:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
