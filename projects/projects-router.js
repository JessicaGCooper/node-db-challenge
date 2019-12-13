const express = require('express');

const Projects = require('./projects-model.js');

const router = express.Router();


//build http requests here
router.get('/', (req, res) => {
    Projects.getProjects()
    .then(projects => {
      res.json(projects);
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to get projects.', err });
    });
  });

  router.get('/tasks', (req, res) => {
    Projects.getTasks()
    .then(tasks => {
      res.json(tasks);
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to get tasks.', err });
    });
  });

  router.get('/resources', (req, res) => {
    Projects.getResources()
    .then(resources => {
      res.json(resources);
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to get resources.', err });
    });
  });

  router.post('/', (req, res) => {
    const projectData = req.body;
  
    Projects.addProject(projectData)
    .then(project => {
      res.status(201).json(project);
    })
    .catch (err => {
      res.status(500).json({ message: 'Failed to create new project.', err });
    });
  });

  router.post('/tasks', (req, res) => {
    const taskData = req.body;
  
    Projects.addTask(taskData)
    .then(task => {
      res.status(201).json(task);
    })
    .catch (err => {
      res.status(500).json({ message: 'Failed to create new task.', err });
    });
  });

  router.post('/resources', (req, res) => {
    const resourceData = req.body;
  
    Projects.addResource(resourceData)
    .then(resource => {
      res.status(201).json(resource);
    })
    .catch (err => {
      res.status(500).json({ message: 'Failed to create new resource.', err });
    });
  });



module.exports = router;