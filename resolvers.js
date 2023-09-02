const Team = require("./models/teams");

const resolvers = {
  Query: {
    getAllTeams: async () => {
      const team = await Team.find();
      console.log(team);
      return team;
    },

    async getTeam(_, args) {
      const team = await Team.findById(args.id);
      return team;
    },
  },

  Mutation: {
    createTeam: async (_, args) => {
      const { name, presidenteName, dtName, value } = args.team;
      const newTeam = new Team({ name, presidenteName, dtName, value });
      console.log(newTeam);
      await newTeam.save();
      return newTeam;
    },
    async deleteTeam(_, { id }) {
      await Team.findByIdAndDelete(id);
      return "TEAM DELETED";
    },

    async updateTeam(_, { team, id }) {
      const teamUpdate = await Team.findByIdAndUpdate(
        id,
        { $set: team },
        { new: true }
      );
      return teamUpdate;
    },
  },
};

module.exports = { resolvers };
