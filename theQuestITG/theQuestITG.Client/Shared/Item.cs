namespace theQuestITG.Client.Shared
{
    public class Item
    {
        public int id { get; set; }

        public bool quote { get; set; }

        public int effect { get; set; }

        public string usage { get; set; }

        public int number { get; set; } = 0;

        public bool expanded { get; set; } = false;
    }

    public class ItemNumber
    {
        public int id { get; set; }

        public int number { get; set; } = 0;
    }
}
