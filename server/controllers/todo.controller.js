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
      createdBy: req.id,
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
    const userId = req.id;
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

export const updateTodo = async (req, res) => {
  try {
    const { todoId } = req.params;
    const { title, description } = req.body;
    if (!todoId || !title || !description) {
      return res.status(400).json({ message: "Please fill all the fields" });
    }

    const updatedTodo = await Todo.findByIdAndUpdate(
      todoId,
      { title, description },
      { new: true }
    );

    const savedTodo = await updatedTodo.save();
    if (!savedTodo) {
      return res.status(500).json({ message: "Error updating todo" });
    } else {
      return res
        .status(200)
        .json({ message: "Todo updated successfully", todo: savedTodo });
    }
  } catch (error) {
    console.error("Error updating todo:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const deleteTodo = async (req, res) => {
  try {
    const { todoId } = req.params;
    if (!todoId) {
      return res.status(400).json({ message: "Todo ID is required" });
    }

    const deletedTodo = await Todo.findByIdAndDelete(todoId);
    if (!deletedTodo) {
      return res.status(404).json({ message: "Todo not found" });
    } else {
      return res
        .status(200)
        .json({ message: "Todo deleted successfully", todo: deletedTodo });
    }
  } catch (error) {
    console.error("Error deleting todo:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
