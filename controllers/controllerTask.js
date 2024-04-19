const Tasks = require('../models/modelTask');


module.exports= {
  ControlladdTasks: (req, res) => {
    const { user_id, title, description } = req.body;
  
    Tasks.addTasks({ user_id, title, description }, (error, result) => {
      if (error) {
        res.status(500).json({ error: 'Failed to add task' });
        return;
      }
  
      res.json(result);
    });
  },
  ControllgetAllTasks: (req, res) => {
    Tasks.getAllTasks((error, results) => {
      if (error) {
        res.status(500).json({ error: 'Failed to fetch tasks' });
        return;
      }
  
      res.json(results);
    });
  },
  ControllgetTasksById: (req, res) => {
    const id = req.params.id;
  
    Tasks.getTasksById(id, (error, result) => {
      if (error) {
        res.status(500).json({ error: 'Failed to fetch task' });
        return;
      }
  
      if (!result) {
        res.status(404).json({ error: 'Task not found' });
        return;
      }
  
      res.json(result);
    });
  },
  ControllupdateTasks: (req, res) => {
    const { id } = req.params;
    const { title, description } = req.body;
  
    Tasks.updateTasks({ id, title, description }, (error, result) => {
      if (error) {
        res.status(500).json({ error: 'Failed to update task' });
        return;
      }
  
      res.json(result);
    });
  },
  ControlldeleteTasks: (req, res) => {
    const id = req.params.id;
  
    Tasks.deleteTasks(id, (error, result) => {
      if (error) {
        res.status(500).json({ error: 'Failed to delete task' });
        return;
      }
  
      if (!result) {
        res.status(404).json({ error: 'Task not found' });
        return;
      }
  
      res.json(result);
    });
  }
};