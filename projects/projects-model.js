const db = require("../data/db-Config.js")

module.exports = {
   //list helper functions here
   getProjects,
   getProjectById,
   getTasks,
   getProjectTasks,
   getResources,
   getResourceById,
//    getProjectResources,
   addProject,
   addTask,
   addResource
}


// retrieving a list of projects.
function getProjects(){
    return db('projects')
    .then(projects => {
        return projects.map(project => {
            return {...project, completed: Boolean(project.completed)}
            })
        })
}

//get project by id
function getProjectById(id){
    return db('projects')
        .where({ id })
        .first()
}

//get task by id
function getTaskById(id){
    return db('tasks')
        .where({ id })
        .first()    
}

// retrieving a list of tasks. **The list of tasks should include the project name and project description**.
function getTasks(){
    return db('projects as p')
    .select('t.id', 'p.name as project_name', 'p.description as project_description', 't.project_id', 't.description as task_description', 't.notes', 't.completed')
    .join('tasks as t', 'p.id', 't.project_id')
    .then(tasks => {
        return tasks.map(task => {
            return {...task, completed: Boolean(task.completed)}
        })
    })
}

// get tasks by project id
function getProjectTasks(project_id){
    return db('projects as p')
    .select('t.id', 'p.name as project_name', 'p.description as project_description', 't.project_id', 't.description as task_description', 't.notes', 't.completed')
    .join('tasks as t', 'p.id', 't.project_id')
    .where('p.id', project_id)
    .then(tasks => {
        return tasks.map(task => {
            return {...task, completed: Boolean(task.completed)}
        })
    })
}

// retrieving a list of resources
function getResources(){
    return db('resources')
};

//get resource by id
function getResourceById(id){
    return db('resources')
        .where({ id })
        .first()
}

// adding projects.
function addProject(project){
    return db('projects')
    .insert(project, 'id')
    .then(ids => {
        const [id] = ids;

        return getProjectById(id)
            .then(project => {
            return {...project, completed: Boolean(project.completed)}
        })
    })
}

// adding tasks.
function addTask(task){
    return db('tasks')
    .insert(task, 'id')
    .then(ids => {
        const [id] = ids;
        return getTaskById(id)
            .then(task => {
                return {...task, completed: Boolean(task.completed)}
            })
    })
}

// adding resources.
function addResource(resource){
    return db('resources')
    .insert(resource, 'id')
    .then(ids => {
        const [id] = ids;

        return getResourceById(id);
    })
}

