import nlp from 'compromise';

const doc = nlp('Hello world! This is a test.');
console.log(doc.sentences().json()[1].terms);