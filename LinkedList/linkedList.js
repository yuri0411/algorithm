class Node {
    constructor(data) {
        this.data = data
        this.next = null
    }
}


class LinkedList  {
    constructor() {
        const initNode = new Node('1')

        this.head = initNode
        this.tail = initNode

        this.currentNode = undefined
        this.nodeCount = 0
    }

    length () {
        return this.nodeCount
    }

    append (data) {
        const node = new Node(data)

        this.tail.next = node
        this.tail = node

        this.nodeCount += 1
    }
    getList () {
        let currNode = this.head
        currNode = currNode.next

        let sArr = []
        for(let i = 0; i < this.nodeCount; i ++) {
            sArr.push(currNode.data)
            currNode = currNode.next
        }

        return sArr
    }
    insert(index, data) {
        let currNode = this.head
        currNode = currNode.next
        
        for(let i = 0; i < index - 1; i ++) {
            currNode = currNode.next
        }

        let newNode = new Node(data)

        newNode.next = currNode.next
        currNode.next = newNode

        this.nodeCount += 1
    }
 }

const linkedList = new LinkedList()
