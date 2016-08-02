import {protect} from './table-data'

const library = [
  {title: "SICP", isbn: "0262010771", ed: 1}, 
  {title: "SICP", isbn: "0262510871", ed: 2},
  {title: "Joy of Clojure", isbn: "1935182641", ed: 1}
];

describe('protect', function() {

  it('Should preserve datatype, and select given keys', () => {
    expect(protect(library, 'title')).toEqual(jasmine.any(Array));
    expect(protect(library, 'title', 'isbn')).toEqual([
      {title: "SICP", isbn: "0262010771"}, 
      {title: "SICP", isbn: "0262510871"},
      {title: "Joy of Clojure", isbn: "1935182641"}
    ]);
  });

});
