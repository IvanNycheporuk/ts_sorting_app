import { NumberCollection } from './NumberCollection';
import { CharacterCollection } from './CharacterCollection';
import { LinkedList } from './LinkedList';

const numberCollection = new NumberCollection([12, 0, -3, 123])
const characterCollection = new CharacterCollection('zxxxadwefdfwefwc');
const linkedList = new LinkedList();
linkedList.add(-123);
linkedList.add(-312);
linkedList.add(111);
linkedList.add(233);

numberCollection.sort();
characterCollection.sort();
linkedList.sort();


linkedList.print();
console.log(numberCollection.data, characterCollection.data);

// const sortedNumbers = new Sorter(numberCollection);
// const sortedChars = new Sorter(characterCollection);
// const sortedList = new Sorter(linkedList);

// sortedNumbers.sort();
// sortedChars.sort();
// sortedList.sort();
