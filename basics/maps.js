const map= new Map();

map.set("a",1);
map.set("b",2);
map.set("c",3);

console.log(map);

for(const [key,value] of map) {
    console.log(`keys are ${key} and values are ${value}`)
    
}
map.delete(1);
console.log(map)