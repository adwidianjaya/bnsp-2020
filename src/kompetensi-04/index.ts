import CustomQueue from "./queue";
import Queue from "queue-fifo";

// ######################################################################
// ########################################################## CustomQueue

console.log("\nCustomQueue Demonstration:");
console.log("--------------------");
const customQueue: CustomQueue = new CustomQueue(1, 2);

customQueue.enqueue(3, 4, 5);
console.log("CustomQueue length:", customQueue.getLength());
// console.log("CustomQueue:", queue);

let dequeuedElement: number = customQueue.dequeue();
console.log("Dequeued element:", dequeuedElement);
// console.log("CustomQueue:", queue);

// ######################################################################
// ############################################### External Queue Library

console.log("External Queue Demonstration:");
console.log("--------------------");
let queue = new Queue();

queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
queue.enqueue(5);
console.log("Queue length:", queue.size());
console.log("Dequeued element:", queue.dequeue());
console.log("Next item to dequeue:", queue.peek());
