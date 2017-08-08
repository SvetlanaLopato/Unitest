// export const ArrayModule = () => {
//     const arr = [];
//
//     return {
//         push: value => arr.push(value),
//         size: () => arr.length,
//         getArray: () => arr,
//         concat: newArr => [...arr, ...newArr],
//     };
// };

export class Array {
    constructor() {
        this.array = [];
    }

    push(value) {
        this.array.push(value);
    }

    size() {
        return this.array.length;
    }

    getArray() {
        return this.array;
    }

    concat(newArray) {
        return this.array.concat(newArray);
    }

    tryClick() {
        if (Math.rand() < 0.5){
            this.click();
        }
    }

    click() {
        console.log('click');
    }
}
