namespace ToDoAPI
{
    public class Task
    {
        public int Id { get; set; }
        public string Info { get; set; } = String.Empty;
        public DateTime? DueDate { get; set; } = null;
        public string Status { get; set; } = String.Empty;
        public string Priority { get; set; } = String.Empty;

    }
}
