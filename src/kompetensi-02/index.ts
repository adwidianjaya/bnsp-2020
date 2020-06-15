import Stack from "./stack";
import Queue from "./queue";
import LinkedList from "./linked-list";

// ######################################################################
// ################################################## Stack Demonstration

console.log("\nStack Demonstration:");
console.log("--------------------");
const stack: Stack = new Stack(1, 2);

stack.push(3, 4, 5);
console.log("Stack length:", stack.getLength());
// console.log("Stack:", stack);

let poppedElement: number = stack.pop();
console.log("Popped element:", poppedElement);
// console.log("Stack:", stack);

// ######################################################################
// ################################################## Queue Demonstration

console.log("\nQueue Demonstration:");
console.log("--------------------");
const queue: Queue = new Queue(1, 2);

queue.enqueue(3, 4, 5);
console.log("Queue length:", queue.getLength());
// console.log("Queue:", queue);

let dequeuedElement: number = queue.dequeue();
console.log("Dequeued element:", dequeuedElement);
// console.log("Queue:", queue);

// ######################################################################
// ############################################ Linked List Demonstration

console.log("\nLinked List Demonstration:");
console.log("--------------------------");
const list: LinkedList = new LinkedList();
list.addToHead(1);
list.addToHead(2);
list.addToHead(3);
console.log("Head of Linked List:", list.head.value);
console.log("Middle node of Linked List:", list.head.prev.value);
console.log("Tail of Linked List:", list.tail.value);

// ######################################################################
// ######################### Map Demonstration (Native JS Data Structure)

console.log("\nMap Demonstration:");
console.log("------------------");
let map = new Map();

map.set("1", "satu");
map.set("2", "dua");

console.log("Map keys:");
for (let key of map.keys()) {
  console.log("-", key);
}
console.log(" ");

console.log("Map values:");
for (let value of map.values()) {
  console.log("-", value);
}
console.log(" ");

console.log("Before delete: Map has 1?", map.has("1"));
map.delete("1");
console.log("After delete: Map has 1?", map.has("1"));
console.log("Map:", map);

// ######################################################################
// ######################### Set Demonstration (Native JS Data Structure)

console.log("\nSet Demonstration:");
console.log("------------------");
let set = new Set();

set.add(1);
set.add(2);
set.add(3);
set.add(4).add(5).add(6);
set.delete(6);

console.log("Set values:");
for (let item of set) {
  console.log("-", item);
}
