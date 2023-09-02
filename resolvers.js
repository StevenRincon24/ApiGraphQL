const Team = require("./models/teams");

const resolvers = {
  Query: {
    getAllTeams: async () => {
      const team = await Team.find();
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
      await newTeam.save();
      return newTeam;
    },
    async deleteTeam(_, { id }) {
      await Team.findByIdAndDelete(id);
      return "TEAM DELETED";
    },

    async updateTeam(_, { team, id }) {
      console.log(id);
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
