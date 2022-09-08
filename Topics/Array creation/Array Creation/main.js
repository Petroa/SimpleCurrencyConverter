let myObject= {
    name: "petro",
    name1: this.name,
    keyFunction(){return this.name;}
};
console.log(myObject.name1);

