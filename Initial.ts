interface Task {
    id: number;
    title: string;
    completed: boolean;
    priority: number;
}

class TaskScheduler {
    private tasks: Task[] = [];

    addTask(task: Task): void {
        this.tasks.push(task);
    }

    completeTask(id: number): void {
        const task = this.tasks.find(item => item.id === id);

        if (task) {
            task.completed = true;
        }
    }

    pendingTasks(): Task[] {
        return this.tasks.filter(task => !task.completed);
    }

    printSchedule(): void {
        console.log("Task Schedule");
        console.log("=============");

        const ordered = [...this.tasks].sort(
            (left, right) => left.priority - right.priority
        );

        for (const task of ordered) {
            const status = task.completed ? "Done" : "Pending";

            console.log(
                `${task.id} | ${task.title} | Priority ${task.priority} | ${status}`
            );
        }

        console.log("=============");
        console.log(`Pending Tasks: ${this.pendingTasks().length}`);
    }
}

const scheduler = new TaskScheduler();

scheduler.addTask({
    id: 1,
    title: "Prepare Presentation",
    completed: false,
    priority: 2
});

scheduler.addTask({
    id: 2,
    title: "Reply to Emails",
    completed: false,
    priority: 1
});

scheduler.addTask({
    id: 3,
    title: "Deploy Update",
    completed: false,
    priority: 3
});

scheduler.addTask({
    id: 4,
    title: "Review Pull Request",
    completed: false,
    priority: 2
});

scheduler.completeTask(2);

scheduler.printSchedule();