/*const fs=require('fs');
console.log('READ START');

fs.readFile('input.txt',function(err,data){
    if(err){
        console.log('Error:',err);
        return err;
    }
    console.log('Data:',data.toString());
    console.log('READ END');
    return data;
});
console.log('other stuff');*/

//READ > OPEN + READ

/*const fs = require('fs');
const buf = Buffer.alloc(1024); // Updated Buffer creation method

fs.open('input.txt', 'r+', function(error, fd) {
    if (error) {
        console.log('Error in opening file:', error); // Changed err to error for consistency
    } else {
        console.log('File opened successfully:');

        fs.read(fd, buf, 0, buf.length, 0, function(err, bytes, data) { // Fixed the parameters in fs.read
            if (err) {
                console.log('Error in reading file:', err); // Changed er to err for consistency
            } else {
                console.log('Data:', data.toString());
                console.log('Data:', buf.slice(0, bytes).toString()); // Fixed syntax error in buf.slice
            }
        });
    }
});*/

//Append a file 

const fs=require('fs');
/*fs.appendFile('input.txt','--Tushar Pandey','utf8', function(err){
    if(err){
        console.log('Error in appending file!')
    }
    
    else{
        console.log('Susccess in Appending File')
    }   
})*/


fs.unlink('input.txt',function(err){
    if(err){
        console.log('Error in deleting fikle!');
    }

    else{
        console.log('success in deleting file!');
    }
});

