export default function TodosReducer() {
    var todos = [
        {
            "id": 1,
            "done": true,
            "taskTitle": "Code furiously",
            "userId" : 1
        },
        {
            "id": 2,
            "done": true,
            "taskTitle": "Do user study",
            "userId" : 1
        },
        {
            "id": 3,
            "done": true,
            "taskTitle": "Write paper",
            "userId" : 2
            
        },
        {
            "id": 4,
            "done": false,
            "taskTitle": "Have a life!!",
            "userId" : 2
        }
    ];

    return todos; 
}
