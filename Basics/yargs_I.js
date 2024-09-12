const yargs = require('yargs')

yargs.command({
    command:'add',
    describe:"Add Note",
    handler:function(){
        console.log("Note Added Successfuly");
    }
})

console.log(yargs.argv);
