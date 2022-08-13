namespace ToDoAPI
{
    public class Task
    {
        public int Id { get; set; }
        public string Info { get; set; } = String.Empty;
        public DateTime Date { get; set; } = DateTime.Now;
        public Boolean Completed { get; set; } = false;
        public string Priority { get; set; } = "Medium";


    }
}
