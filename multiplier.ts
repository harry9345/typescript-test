interface MultiplyValues {
    value1: number;
    value2: number;
}

const parseArguments = (args: Array<string>): MultiplyValues => {
    if (args.length < 4) throw new Error('not enogh arguments')
    if (args.length > 4) throw new Error('not meny arguments')

    if (!isNaN(Number(args[2])) && !isNaN(Number(args[3]))) {
        return {
            value1: Number(args[2]),
            value2: Number(args[3])
        }
    } else {
        throw new Error('Provided values are not numbers')
    }
}

const multiplicator = (a: number, b: number, printText: string) => {
    console.log(printText, a * b);

}

try {
    const { value1, value2 } = parseArguments(process.argv);
    multiplicator(value1, value2, `multiplied${value1} and ${value2} is the : `)
} catch (error: unknown) {
    let errorMessage = 'somthing goes wrong.'
    if (error instanceof Error) {
        errorMessage += ' Error: ' + error.message
    }
    console.log(errorMessage);
}