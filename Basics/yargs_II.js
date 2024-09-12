const yargs = require('yargs');

yargs.command({
    command:'add',
    describe:'Add a new note',
    builder:{
        title:{
            describe:"Note Title",
            demandOption:true,
            type:"string"
        },
        body:{
           describe:"Note Body",
           demandOption:true,
           type:"string"
        }},
    handler: function(argv){
        console.log('Title: '+ argv.title)
        console.log("Title: " + argv.body);
    }
})

console.log(yargs.argv)