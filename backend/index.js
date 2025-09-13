const  yargs = require ("yargs");
const  {hideBin} = require("yargs/helpers");

const { initRepo } = require ("./controllers/init");
const { addRepo } = require ("./controllers/add");

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
    addRepo
)
.demandCommand(1, "You need atleast one command")
.help().argv;