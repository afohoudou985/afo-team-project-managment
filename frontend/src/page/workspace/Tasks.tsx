import CreateTaskDialog from "@/components/workspace/task/create-task-dialog";
import TaskTable from "@/components/workspace/task/task-table";

export default function Tasks() {
  return (
    <div className="w-full h-full flex-col space-y-8 pt-3">
      <div className="flex items-center justify-between space-y-2">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Toutes les tâches</h2>
          <p className="text-muted-foreground">
            Voici la liste des tâches pour cet espace de travail!
          </p>
        </div>
        <CreateTaskDialog />
      </div>
      {/* Tableau des tâches */}
      <div>
        <TaskTable />
      </div>
    </div>
  );
}
