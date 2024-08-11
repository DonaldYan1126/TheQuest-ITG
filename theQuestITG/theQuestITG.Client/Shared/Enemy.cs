namespace theQuestITG.Client.Shared
{
    public class Enemy
    {
        public int id { get; set; }

        public int hp { get; set; }

        public int[] atk { get; set; }

        public string atklv { get; set; }

        public string race { get; set; }

        public Penis penis { get; set; }

        public List<Reward> reward { get; set; }

        public List<Treasure> treasures { get; set; }

        public Attack weak { get; set; }

        public Attack good { get; set; }

        public Attack crit { get; set; }
    }

    public class Penis
    {
        public string size { get; set; }

        public string[] type { get; set; }
    }

    public class Reward
    {
        public string type { get; set; }

        public int number { get; set; }
    }

    public class Treasure
    {
        public string type { get; set; }

        public int number { get; set; }

        public int rate { get; set; }
    }

    public class Attack
    {
        public string[] tags { get; set; }

        public string type { get; set; }

        public int metronome { get; set; }
    }
}
