import  yargs from "yargs";
import  hideBin  from "yargs/helpers";

const  initRepo  = require("./controllers/init");
const require  = require("yargs");

yargs(hideBin(process.argv))
.command("init","Initalise a new repositery",{},initRep)
.demandCommand(1, "You need atleast one command")
.help().argv;