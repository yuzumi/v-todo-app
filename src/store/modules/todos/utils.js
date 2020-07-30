const eq = x => y => Object.is(x, y);

const prop = key => object => object[key];

const pipe = fns => arg => fns.reduce((result, fn) => fn(result), arg);

export const isSame = key => value => pipe([prop(key), eq(value)]);

export const isSameId = isSame("id");
