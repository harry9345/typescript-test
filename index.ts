
type Operation = 'multiply' | 'add' | 'divide';
type Result = number

const calculator = (a: number, b: number, op: Operation): Result => {
    switch (op) {
        case 'multiply':
            return a * b;
        case 'divide':
            if (b === 0) throw new Error('cant divide by 0')
            return a / b;
        case 'add':
            return a + b
        default:
            throw new Error('Opreation is not accepted')
    }
}

try {
    console.log(calculator(5, 6, 'divide'));
} catch (error: unknown) {
    let errorMessage = 'somthing is wrong'
    if (error instanceof Error) {
        errorMessage += ' Error : ' + error.message
    }
}