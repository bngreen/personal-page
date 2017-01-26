
//from http://stackoverflow.com/a/40839729

export class GroupByValueConverter {
  toView(objects, key) {
    return objects.reduce(
      (rv, x) => rv.set(x[key], (rv.get(x[key]) || []).concat(x)), 
      new Map()
    ); 
  }
}
