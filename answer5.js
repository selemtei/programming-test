//Description of my solution

// To find all UUIDs in files ending in .json in a directory and its subdirectories using JavaScript, 
// you can use the fs (file system) and path modules along with regular expressions to parse the JSON files and extract UUIDs.

// Recursively traverse directory: Write a function that recursively traverses the directory and its subdirectories to find all .json files.
// Read JSON Files: Read each .json file found during the traversal.
// Parse JSON Content: Parse the JSON content and search for UUIDs using regular expressions.
// Collect UUIDs: Collect all UUIDs found in the JSON files.


//Code implementation of my solution
const fs = require('fs');
const path = require('path');

function findUUIDsInDirectory(directoryPath){
  const files = fs.readdirSync(directoryPath);
  files.forEach(file => {
    const filePath = path.join(directoryPath, file);
    if(fs.statSync(filePath).isDirectory()){
      findUUIDsInDirectory(filePath);
    }else{
      if(filePath.endsWith('.json')){
        const jsonContent = fs.readFileSync(filePath, 'utf8');
        const uuids = jsonContent.match(/[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}/gi);
        if(uuids){
          console.log(`UUIDs found in ${filePath}:`);
          console.log(uuids);
        }
      }
      }
  });
}

// Unit testing
// Example usage: Provide the path to the directory
const directoryPath = "/Users/seles/Desktop/programming-test/dir1";
findUUIDsInDirectory(directoryPath);