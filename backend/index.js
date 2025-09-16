const  yargs = require ("yargs");
const  {hideBin} = require("yargs/helpers");

const { initRepo } = require ("./controllers/init");
const { addRepo } = require ("./controllers/add");
const { pullRepo } = require("./controllers/pull");
const { pushRepo } = require("./controllers/push");
const { revertRepo } = require("./controllers/revert");
const { commitRepo } = require("./controllers/commit");

// const require  = require("yargs");

yargs(hideBin(process.argv))
.command("init","Initalise a new repositery",{},initRepo)
.command(
    "add <file>",
    "Add a file to the repository",
    (yargs) => {
        yargs.positional("file", {
            describe:"File to add the staging area",
            type:"string",
        });
    },
    (argv) => {
        addRepo(argv.file);
    }
)
.command(
    "commit <message>",
    "Commit the staged files",
    (yargs) => {
        yargs.positional("message",{
            describe:"Commit message",
            type:"string",
        });
    
    },  
    commitRepo
)
.command("push","Push commits to S3",{},pushRepo)
.command("pull","Pull commits from S3",{},pullRepo)
.command(
    "revert <commitID>",
    "Revert to a specific commit",
    (yargs) => {
        yargs.positional("commitID", {
          describe:"Comit ID to revert",
          type:"string",    
        });
    },
    revertRepo
)
.demandCommand(1, "You need atleast one command")
.help().argv;